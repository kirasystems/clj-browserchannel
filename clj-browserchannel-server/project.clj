(defproject net.thegeez/clj-browserchannel-server "0.0.9"
  :description "BrowserChannel server implementation in Clojure"
  :dependencies [[ring/ring-core "1.3.1"]
                 [org.clojure/data.json "0.2.5"]]
  :profiles {:provided
              {:dependencies
                [[org.clojure/clojure "1.6.0"]]}})
