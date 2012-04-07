(ns tasks.build-advanced-js
  (:require [cljs.closure :as cljs]))

(defn -main [& args]
  (cljs/build "cljs" {:optimizations :advanced
                      :output-to "resources/public/js/bc.js"}))
