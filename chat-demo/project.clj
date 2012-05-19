(defproject chat-demo "0.0.1"
  :description "Example for using BrowserChannel and a client side with ClojureScript"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [ring/ring-core "1.1.0-SNAPSHOT" :exclusions [javax.servlet/servlet-api]]
                 [org.clojure/clojurescript "0.0-1011" :exclusions [org.clojure/google-closure-library]]
                 [net.thegeez/google-closure-library "0.0-1698"]
                 [net.thegeez/clj-browserchannel-server "0.0.4"]
                 [net.thegeez/clj-browserchannel-jetty-adapter "0.0.1"]
                 [net.thegeez/clj-browserchannel-netty-adapter "0.0.1"]
                 ]
  )
