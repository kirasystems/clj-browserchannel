(defproject net.thegeez/clj-browserchannel-server "0.0.7-SNAPSHOT"
  :description "BrowserChannel server implementation in Clojure"
  :dependencies [[org.clojure/clojure "1.6.0" :scope "provided"]
                 [ring/ring-core "1.3.1"]
                 [org.clojure/data.json "0.2.5"]]) ; still using deprecated json-str, need to port to write-str (?)
