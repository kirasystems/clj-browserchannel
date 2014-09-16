(defproject net.thegeez/clj-browserchannel-jetty-adapter "0.0.2"
  :description "Jetty async adapter for BrowserChannel"
  :url ""
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [ring/ring-core "1.2.2"]
                 [ring/ring-servlet "1.2.0" :exclusions [javax.servlet/servlet-api]]
                 [org.eclipse.jetty/jetty-server "8.1.13.v20130916"];; includes ssl
                 [net.thegeez/clj-browserchannel-server "0.0.5"]
                 ])
