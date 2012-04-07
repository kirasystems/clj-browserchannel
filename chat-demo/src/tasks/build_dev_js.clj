(ns tasks.build-dev-js
  (:require [cljs.closure :as cljs]))

(defn -main [& args]
  (cljs/build "cljs" {;; whitespace makes it a single file
                      :optimizations :whitespace
                      :output-to "resources/dev/js/bc-dev.js"}))
