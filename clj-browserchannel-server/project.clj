(defproject net.thegeez/clj-browserchannel-server "0.0.6"
  :description "BrowserChannel server implementation in Clojure"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [ring/ring-core "1.2.2"]
                 [org.clojure/data.json "0.2.4"]]) ; still using deprecated json-str, need to port to write-str (?)
