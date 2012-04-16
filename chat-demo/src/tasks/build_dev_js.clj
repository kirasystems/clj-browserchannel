(ns tasks.build-dev-js
  (:require [cljs.closure :as cljs])
  (:import [java.io File]))

(def config {:sources-path "cljs"
             ;; whitespace makes it a single file
             :optimizations :whitespace
             :output-to "resources/dev/js/bc-dev.js"})

(defn print-title [msg]
  (println (str "\033]0;" msg "\007"))
  (println msg))

(defn build []
  (print-title "CLJSB - building")
  (cljs/build (:sources-path config) (dissoc config :sources-path))
  (print-title "cljsb - done"))

(defn -main [& [cmd]]
  (print-title "cljsb")
  (if-not (= cmd "auto")
    (build)
    (loop [old-entries {}]
      (let [entries (into {}  (for [file-dir (tree-seq #(.isDirectory %)
                                                       #(.listFiles %)
                                                       (File. (:sources-path config)))
                                    :let [name (.getName file-dir)]
                                    :when (and
                                           (not (.contains name "#"))
                                           (.endsWith name ".cljs"))]
                                [(.getPath file-dir) (.lastModified file-dir)]))]
        (when (some (fn [[entry-path entry-stamp]]
                      (let [old-entry-stamp (old-entries entry-path)]
                        (or (nil? old-entry-stamp)
                            (> entry-stamp old-entry-stamp)))) entries)
          (build))
        (Thread/sleep 700)
        (recur entries)))))
