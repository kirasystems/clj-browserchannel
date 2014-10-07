(defproject net.thegeez/clj-browserchannel-jetty-adapter "0.0.4"
  :description "Jetty async adapter for BrowserChannel"
  :url ""
  :dependencies [[ring/ring-core "1.3.1"]
                 [ring/ring-servlet "1.3.1"]
                 [org.eclipse.jetty/jetty-server "8.1.16.v20140903"];; includes ssl
                 [net.thegeez/clj-browserchannel-server "0.0.8"]]
  :profiles {:provided
              {:dependencies
                [[org.clojure/clojure "1.6.0"]]}})
