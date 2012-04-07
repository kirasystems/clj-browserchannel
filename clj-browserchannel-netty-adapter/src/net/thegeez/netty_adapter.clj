(ns net.thegeez.netty-adapter
  "BrowserChannel adapter for the Netty webserver"
  (:require [aleph.http :as aleph]
            [lamina.core :as l]
            [net.thegeez.async-adapter :as async-adapter]))


(deftype NettyResponse [response-channel
                        body-channel]
  async-adapter/IAsyncAdapter
  (head [this status headers]
        (l/enqueue response-channel
                   {:status status
                    :headers headers
                    :body body-channel}))
  (write-chunk [this data]
               (if (l/closed? body-channel)
                 (throw async-adapter/ConnectionClosedException)
                 (l/enqueue body-channel data)))
  (close [this]
         (l/close body-channel)))


(defn wrap-aleph-async-adapter [handler]
  (fn [req]
    (let [response-map (handler req)]
      (condp = (:async response-map)
        nil
        ;; regular ring response
        response-map
        :http
        (let [reactor (:reactor response-map)
              response-channel (:channel req)
              emit (NettyResponse. response-channel (l/channel))]
          (reactor emit)
          ;; this tells aleph to return nil as a ring handler
          {:status 200
           ::ignore true})))))


(defn run-netty [handler options]
  (aleph/start-http-server (aleph/wrap-ring-handler (wrap-aleph-async-adapter handler)) options))
