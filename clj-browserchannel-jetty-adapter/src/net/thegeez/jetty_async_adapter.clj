(ns net.thegeez.jetty-async-adapter
  "BrowserChannel adapter for the Jetty webserver, with async HTTP."
  (:import (org.eclipse.jetty.server.handler AbstractHandler)
           (org.eclipse.jetty.server Server Request Response)
           (org.eclipse.jetty.server.nio SelectChannelConnector)
           (org.eclipse.jetty.server.ssl SslSelectChannelConnector)
           (org.eclipse.jetty.util.ssl SslContextFactory)
           (org.eclipse.jetty.continuation Continuation ContinuationSupport ContinuationListener)
           (org.eclipse.jetty.io EofException)
           (javax.servlet.http HttpServletRequest))
  (:require [ring.util.servlet :as servlet]
            [net.thegeez.async-adapter :as async-adapter]))

;; Based on ring-jetty-async-adapter by Mark McGranaghan
;; (https://github.com/mmcgrana/ring/tree/jetty-async)
;; This has failed write support

(deftype JettyAsyncResponse [continuation]
  async-adapter/IAsyncAdapter
  (head [this status headers]
    (doto (.getServletResponse continuation)
      (servlet/set-status status)
      (servlet/set-headers (assoc headers
                             "Transfer-Encoding" "chunked"))
      (.flushBuffer)))
  (write-chunk [this data]
               (doto (.getWriter (.getServletResponse continuation))
                 (.write data)
                 (.flush))
               (when (.checkError (.getWriter (.getServletResponse continuation)))
                 (throw async-adapter/ConnectionClosedException)))
  (close [this]
         (.complete continuation)))
    
(defn- add-ssl-connector!
  "Add an SslSelectChannelConnector to a Jetty Server instance."
  [^Server server options]
  (let [ssl-context-factory (SslContextFactory.)]
    (doto ssl-context-factory
      (.setKeyStorePath (options :keystore))
      (.setKeyStorePassword  (options :key-password)))
    (when (options :truststore)
      (.setTrustStore ssl-context-factory (options :truststore)))
    (when (options :trust-password)
      (.setTrustStorePassword ssl-context-factory (options :trust-password)))
    (when (options :include-cipher-suites)
      (.setIncludeCipherSuites ssl-context-factory (into-array (options :include-cipher-suites))))
    (when (options :include-protocols)
      (.setIncludeProtocols ssl-context-factory (into-array (options :include-protocols))))
    (let [conn (SslSelectChannelConnector. ssl-context-factory)]
      (.addConnector server (doto conn (.setPort (options :ssl-port 8443)))))))

(defn- proxy-handler
  "Returns an Jetty Handler implementation for the given Ring handler."
  [handler options]
  (proxy [AbstractHandler] []
    (handle [target ^Request base-request ^HttpServletRequest request response]
      (let [request-map (servlet/build-request-map request)
            response-map (handler request-map)]
        (condp = (:async response-map)
            nil
          (do
            (servlet/update-servlet-response response response-map)
            (.setHandled base-request true))
          :http
          (let [reactor (:reactor response-map)
                ;; continuation lives until written to!
                continuation (.startAsync request)
                emit (JettyAsyncResponse. continuation)]
            (.addContinuationListener continuation
                                      (proxy [ContinuationListener] []
                                        (onComplete [c] nil)
                                        (onTimeout [c]
                                                   (.complete c))))

            ;; 4 minutes is google default
            (.setTimeout continuation (get options :response-timeout (* 4 60 1000)))
            (reactor emit)
            ))))))

(defn- create-server
  "Construct a Jetty Server instance."
  [options]
  (let [connector (doto (SelectChannelConnector.)
                    (.setPort (options :port 80))
                    (.setHost (options :host)))
        server    (doto (Server.)
                    (.addConnector connector)
                    (.setSendDateHeader true))]
    (when (or (options :ssl?) (options :ssl-port))
      (add-ssl-connector! server options))
    server))

(defn ^Server run-jetty-async
  "Serve the given handler according to the options.
  Options:
    :configurator   - A function called with the Server instance.
    :port
    :host
    :join?          - Block the caller: defaults to true.
    :response-timeout - Timeout after which the server will close the connection"
  [handler options]
  (let [^Server s (create-server (dissoc options :configurator))]
    (when-let [configurator (:configurator options)]
      (configurator s))
    (doto s
      (.setHandler (proxy-handler handler options))
      (.start))
    (when (:join? options true)
      (.join s))
    s))
