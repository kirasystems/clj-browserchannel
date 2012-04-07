(defproject net.thegeez/clj-browserchannel-jetty-adapter "0.0.1"
  :description "Jetty async adapter for BrowserChannel"
  :url ""
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [ring/ring-core "1.1.0-beta3"]
                 [ring/ring-servlet "1.1.0-beta3" :exclusions [javax.servlet/servlet-api]]
                 [org.eclipse.jetty/jetty-server "8.1.2.v20120308"];; includes ssl
                 [net.thegeez/clj-browserchannel-server "0.0.1"]
                 ])
