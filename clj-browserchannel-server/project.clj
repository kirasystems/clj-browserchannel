(defproject net.thegeez/clj-browserchannel-server "0.0.3"
  :description "BrowserChannel server implementation in Clojure"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [ring/ring-core "1.1.0-beta3"]
                 [org.clojure/data.json "0.1.3"]]
  :aot [net.thegeez.browserchannel]
  :clean-non-project-classes true
)
