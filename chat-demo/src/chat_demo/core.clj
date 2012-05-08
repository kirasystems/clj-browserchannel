(ns chat-demo.core
  (:require [net.thegeez.browserchannel :as browserchannel]
            [net.thegeez.jetty-async-adapter :as jetty]
            [net.thegeez.netty-adapter :as netty]
            [ring.middleware.resource :as resource]
            [ring.middleware.file-info :as file]))

(defn handler [req]
   {:status 200
   :headers {"Content-Type" "text/plain"}
   :body "Hello World"})

(def clients (atom #{}))

(def dev-app
  (-> handler
      (resource/wrap-resource "dev")
      (resource/wrap-resource "public")
      file/wrap-file-info
      (browserchannel/wrap-browserchannel {:base "/channel"
                                           :on-session
                                           (fn [session-id req]
                                             (println "session " session-id "connected")
                                             
                                             (browserchannel/add-listener
                                              session-id
                                              :close
                                              (fn [reason]
                                                (println "session " session-id " disconnected: " reason)
                                                (swap! clients disj session-id)
                                                (doseq [client-id @clients]
                                                  (browserchannel/send-map client-id {"msg" (str "client " session-id " disconnected " reason)}))))
                                             (browserchannel/add-listener
                                              session-id
                                              :map
                                              (fn [map]
                                                (println "session " session-id " sent " map)
                                                (doseq [client-id @clients]
                                                  (browserchannel/send-map client-id map))))
                                             (swap! clients conj session-id)
                                             (doseq [client-id @clients]
                                                  (browserchannel/send-map client-id {"msg" (str "client " session-id " connected")})))})))

(defn -main [& args]
  (println "Using Jetty adapter")
  (jetty/run-jetty-async #'dev-app {:port (Integer.
                                           (or
                                            (System/getenv "PORT")
                                            8080)) :join? false}))

#_(defn -main [& args]
  (println "Using Netty adapter")
  (netty/run-netty #'dev-app {:port (Integer.
                                           (or
                                            (System/getenv "PORT")
                                            8080)) :join? false}))


(comment
  (def jetty-async-server (-main))
  (.stop jetty-async-server)
  (do
    (.stop jetty-async-server)
    (def jetty-async-server (-main))
    )
  )

(comment
  (def netty-async-server (-main))
  (netty-async-server)
  (do
    (netty-async-server)
    (def netty-async-server (-main))
    )
  )
