(ns test.actors
  (require [clj-webdriver.core :as w]
           [clj-webdriver.wait :as wait]))

(defmulti web-action (fn [driver action]
                       (:type action)))

(defmethod web-action :default [& args] nil)

(defmethod web-action :say [driver {:keys [msg]}]
  (w/input-text (w/find-element driver {:id "msg-input"}) msg)
  (w/click (w/find-element driver {:id "send-button"})))

(defmethod web-action :kill-get [driver action]
  (w/execute-script driver "try{ bc.core.channel.backChannelRequest_.xmlHttp_.xhr_.abort(); } catch (err) {return true;}; return true;" ))

(defmethod web-action :wait [driver {:keys [time]}]
  ;; uhm ja, want to use Thread/sleep but this is handled by the driver
  (try (wait/wait-until driver (constantly false) time time)
       (catch Exception e ;; should be TimeOutException
         true)))

(defn play-actors [actors]
  (let [agents (map (fn [act]
                      (-> act
                          (assoc :to-do (:actions act))
                          (assoc :driver (w/new-driver (select-keys [:browser] act)))
                          agent)) actors)
        ;; broken down clojure.core/await, because we can't know when
        ;; all the sends will be done as they are not all done in this thread
        done-talking-latch (java.util.concurrent.CountDownLatch. (count actors))]
    ;; launch web-drivers
    (doseq [ag agents]
      (send ag (fn [{:keys [driver url] :as a}]
                  (w/to driver url)
                  a)))
    (doall (map await agents))
    (println "All launched")
    (doseq [ag agents]
      (send ag (fn send-msg [a]
                 (let [{:keys [driver name to-do]} a]
                   (if-let [action (first to-do)]
                     (do
                       (web-action driver action)
                       (send *agent* send-msg))
                     (.countDown done-talking-latch)))
                 (update-in a [:to-do] rest)))
      )
    (.await done-talking-latch)
    (println "All done talking")
    (Thread/sleep 10000)
    (doseq [ag agents]
      (send ag (fn [a]
                  (let [{:keys [driver name]} a]
                    ;;(w/execute-script driver "alert(\"LOLOLO\");")
                    (let [seen-msgs (doall (map w/text (w/find-elements driver [{:id "room"} {:tag :div}])))]
                      (assoc a :seen-msgs seen-msgs))))))
    (apply await agents)
    (Thread/sleep 10000)
    (doseq [ag agents]
      (send ag (fn [a]
                 (let [{:keys [driver name]} a]
                   (w/quit driver)))))
    (println "All quit")
    (doall (map #(dissoc (deref %) :to-do :driver) agents))))

