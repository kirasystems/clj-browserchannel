(ns net.thegeez.async-adapter)

(defprotocol IAsyncAdapter
  (head [this status headers])
  ;; chunk throws exception when connection is closed
  (write-chunk [this data])
  (close [this]))

(def ConnectionClosedException (Exception. "CANNOT WRITE TO STREAMING CONNECTION"))
