(ns test.core
  (require [test.actors :as actors]))

(def url "http://localhost:8080/index-dev.html")

(defn -main [& args]
  (let [mario {:name "MARIO"
               :actions (for [i (range 10)]
                          {:type :say :msg (str "MARIO says Hello world! " i)})
               :url url
               :browser :firefox}
        luigi {:name "LUIGI"
               :actions (concat (interleave (for [i (range 5)]
                                              {:type :say :msg (str "LUIGI says Hello world! " i)})
                                            (repeat {:type :kill-get}))
                                [{:type :kill-get}]
                                [{:type :wait :time 30000}]
                                (interleave (for [i (range 5 10)]
                                              {:type :say :msg (str "LUIGI says Hello world! " i)})
                                            (repeat {:type :kill-get}))
                                )
               :url url
               :browser :firefox}
        actors [mario luigi]
        done-actors (actors/play-actors actors)]
    (doseq [act1 done-actors
            act2 done-actors
            :when (not= act1 act2)]
      ;; check if every msgs for act1 sort of appears in what act2
      ;; recv and is in the correct order
      (loop [act1-said (->> act1
                            :actions
                            (filter (comp #{:say} :type))
                           (map :msg))
             act2-recv (:seen-msgs act2)]
        (let [a1 (first act1-said)]
          (if (nil? a1)
            (println "All messages accounted for" (:name act1) " to " (:name act2))
            (let [[match & others] (drop-while #(not (re-find (re-pattern a1) %)) act2-recv)]
              (if match
                (do #_(println "act1 said: " a1 " recv by act2 as: " match)
                    (recur (rest act1-said) others))
                (println "Msg from act1 " (:name act1) " not recv by act2" (:name act2) a1)))))))))



