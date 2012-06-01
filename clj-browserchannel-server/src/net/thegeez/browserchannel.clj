(ns net.thegeez.browserchannel
  "BrowserChannel server implementation in Clojure."
  (:require [ring.middleware.params :as params]
            [ring.util.codec :as codec]
            [clojure.data.json :as json]
            [clojure.string :as str]
            [net.thegeez.async-adapter :as async-adapter])
  (:import [java.util.concurrent ScheduledExecutorService Executors TimeUnit]))
;; @todo: out of order acks and maps
;; @todo use a more specific Exception for failing writes, which
;; indicate closed connection
;; @todo SSL in jetty-async-adapter
;; @todo session-timeout should deduct waiting time for the failed
;; sent heartbeat?

(def default-options
  {;; a.example, b.example => ["a","b"]
   :host-prefixes [] 
   ;; straight from google
   :headers {"Content-Type" "text/plain"
             "Cache-Control" "no-cache, no-store, max-age=0, must-revalidate"
             "Pragma" "no-cache"
             "Expires" "Fri, 01 Jan 1990 00:00:00 GMT"
             "X-Content-Type-Options" "nosniff" 
             }
   :base "/channel" ;; root for /test and /bind urls
   :keep-alive-interval 10  ;; seconds, keep less than session-time-out
   :session-timeout-interval 15 ;; seconds
   ;; after this number of bytes a
   ;; backchannel will always be closed
   :data-threshold (* 10 1024) 
   })

;; almost all special cases are for making this work with IE
(def ie-headers
  {"Content-Type" "text/html"})

;; appended to first write to ie to prevent whole page buffering
(def ie-stream-padding "7cca69475363026330a0d99468e88d23ce95e222591126443015f5f462d9a177186c8701fb45a6ffee0daf1a178fc0f58cd309308fba7e6f011ac38c9cdd4580760f1d4560a84d5ca0355ecbbed2ab715a3350fe0c479050640bd0e77acec90c58c4d3dd0f5cf8d4510e68c8b12e087bd88cad349aafd2ab16b07b0b1b8276091217a44a9fe92fedacffff48092ee693af\n")

;;;;; Utils
;; to create session ids
(defn uuid [] (str (java.util.UUID/randomUUID)))

(def scheduler (Executors/newScheduledThreadPool 1))

;; scheduling a task returns a ScheduledFuture, which can be stopped
;; with (.cancel task false) false says not to interrupt running tasks
(defn schedule [f secs]
  (.schedule scheduler f secs TimeUnit/SECONDS))

;; json responses are sent as "size-of-response\njson-response"
(defn size-json-str [json]
  (let [size (alength (.getBytes json "UTF-8"))]
    (str size "\n" json)))

;; make sure the root URI for channels starts with a / for route matching
(defn standard-base [s]
  (let [wofirst (if (= \/ (first s))
                  (apply str (rest s))
                  s)
        wolast (if (= \/ (last wofirst))
                 (apply str (butlast wofirst))
                 wofirst)]
    (str "/" wolast)))

;; @todo to test file
(assert (= (repeat 4 "/foo")
           (map standard-base ["foo" "/foo" "foo/" "/foo"])))

;; type preserving drop upto for queueus
(defn drop-queue [queue id]
  (let [head (peek queue)]
    (if-not head
      queue
      (if (< id (first head))
        queue
        (recur (pop queue) id)))))


(defn transform-url-data [data]
  (let [ofs (get data "ofs" "0")
        pieces (dissoc data "count" "ofs")]
    {:ofs (Long/parseLong ofs)
     :maps (->> (for [[k v] pieces]
                  (let [[_ n k] (re-find #"req(\d+)_(\w+)" k)]
                    [n {k v}]))
                (partition-by first)
                (map #(into {} (map second %))))}))

(assert (= {:ofs 0 :maps [{"x" "3" "y" "10"} {"abc" "def"}]}
           (transform-url-data {"count" "2"
                                "ofs" "0"
                                "req0_x" "3"
                                "req0_y" "10"
                                "req1_abc" "def"})))
;; maps are URL Encoded
;;;; URL Encoded data:
;;{ count: '2',
;;   ofs: '0',
;;   req0_x: '3',
;;   req0_y: '10',
;;   req1_abc: 'def'
;;} 
;;as :form-params in req:
;;{"count" "2"
;; "ofs" "0"
;; "req0_x" "3"
;; "req0_y" "10"
;; "req1_abc" "def"}
;; => 
;;{:ofs 0 :maps [{"x" "3" "y" "10"},{"abc": "def"}]}
(defn get-maps [req]
  (let [data (:form-params req)]
    (when-not (zero? (count data))
      ;; number of entries in form-params,
      ;; not (get "count" (:form-params req))
      ;; @todo "count" is currently not used to verify the number of
      ;; parsed maps
      (:maps (transform-url-data data)))))

;; rather crude but straight from google
(defn error-response [status-code message]
  {:status status-code
   :body (str "<html><body><h1>" message "</h1></body></html>")})
;;;;;; end of utils

;;;; listeners
;; @todo clean this up, perhaps store listeners in the session?
;; @todo replace with lamina?
;; sessionId -> :event -> [call back]
;; event: :map | :close
(def listeners-agent (agent {}))

(defn add-listener [session-id event-key f]
  (send-off listeners-agent
            update-in [session-id event-key] #(conj (or % []) f)))

(defn notify-listeners [session-id event-key & data]
  (send-off listeners-agent
            (fn [listeners]
              (doseq [callback (get-in listeners [session-id event-key])]
                (apply callback data))
              listeners)))
;; end of listeners


;; Wrapper around writers on continuations
;; the write methods raise an Exception with the wrapped response in closed
;; @todo use a more specific Exception
(defprotocol IResponseWrapper
  (write-head [this])
  (write [this data])
  (write-raw [this data])
  (write-end [this]))

;; for writing on backchannel to non-IE clients
(deftype XHRWriter [;; respond calls functions on the continuation
                    respond
                    headers]
  IResponseWrapper
  (write-head [this]
              (async-adapter/head respond 200 headers))
  (write [this data]
         (write-raw this (size-json-str data)))
  (write-raw [this data]
             (async-adapter/write-chunk respond data))
  (write-end [this]
             (async-adapter/close respond)))

;; for writing on backchannels to IE clients
(deftype IEWriter [;; respond calls functions on the continuation
                   respond
                   headers
                   ;; DOMAIN value from query string
                   domain
                   ;; first write requires padding,
                   ;; padding-sent is a flag for the first time
                   ^{:volatile-mutable true} write-padding-sent
                   ;; likewise for write raw, used during test phase
                   ^{:volatile-mutable true} write-raw-padding-sent]
  IResponseWrapper
  (write-head [this]
              (async-adapter/head respond 200 (merge headers ie-headers))
              (async-adapter/write-chunk respond "<html><body>\n")
              (when (seq domain)
                (async-adapter/write-chunk respond (str "<script>try{document.domain=\"" (pr-str (json/json-str domain)) "\";}catch(e){}</script>\n"))))
  (write [this data]
         (async-adapter/write-chunk respond (str "<script>try {parent.m(" (pr-str data) ")} catch(e) {}</script>\n"))
         (when-not write-padding-sent
           (async-adapter/write-chunk respond ie-stream-padding)
           (set! write-padding-sent true)))
  (write-raw [this data]
             (async-adapter/write-chunk respond (str "<script>try {parent.m(" (pr-str data) ")} catch(e) {}</script>\n"))
             (when-not write-raw-padding-sent
               (async-adapter/write-chunk respond ie-stream-padding)
               (set! write-raw-padding-sent true)))
  (write-end [this]
             (async-adapter/write-chunk respond "<script>try  {parent.d(); }catch (e){}</script>\n")
             (async-adapter/close respond)))

;; {sessionId -> (agent session)}
(def sessions (atom {}))

;; All methods meant to be fn send to an agent, therefor all need to return a Session
(defprotocol ISession
  ;; a session spans multiple connections, the connections for the
  ;; backward channel is the backchannel of a session
  (clear-back-channel [this])
  (set-back-channel [this
                     ;; respond is a wrapper of the continuation
                     respond
                     request])

  ;; messages sent from server to client are arrays
  ;; the client acknowledges received arrays when creating a new backwardchannel
  (acknowledge-arrays [this array-ids])

  (queue-string [this string])

  ;; heartbeat is a timer to send noop over the backward channel
  (clear-heartbeat [this])
  (refresh-heartbeat [this])

  ;; after a backward channel closes the session is kept alive, so
  ;; the client can reconnect. If there is no reconnect before
  ;; session-timeout the session is closed
  (clear-session-timeout [this])
  (refresh-session-timeout [this])
  
  ;; try to send data to the client over the backchannel.
  ;; if there is no backchannel, then nothing happens
  (flush-buffer [this])

  ;; after close this session cannot be reconnected to.
  ;; removes session for sessions
  (close [this message]))

(defrecord BackChannel [;; respond wraps the continuation, which is
                        ;; the actual connection of the backward
                        ;; channel to the client
                        respond
                        ;; when true use streaming
                        chunk
                        ;; this is used for diagnostic purposes by the client
                        bytes-sent])

(defrecord Session [;; must be unique
                    id

                    ;; {:address
                    ;;  :headers
                    ;;  :app-version
                    ;;  :heartbeat-interval
                    ;;  :session-timeout-interval
                    ;;  :data-threshold
                    ;;}
                    details

                    ;; back-channel might be nil, as a session spans
                    ;; multiple connections
                    back-channel

                    ;; arrays to send out to client
                    ;; is a queue
                    ;; [[id_lowest, data] .. [id_highest, data]]
                    to-flush-buffer

                    ;; keeps messages which have not yet been acknowledged
                    ;; by the client
                    ;; is a queue
                    ;; [[id_lowest, data] .. [id_highest, data]]
                    to-acknowledge-buffer

                    ;; used to determine the next array id
                    last-sent-array-id

                    ;; ScheduleTask or nil
                    heartbeat-timeout

                    ;; ScheduleTask or nil
                    ;; when the backchannel is closed from this
                    ;; session, the session is only removes when this
                    ;; timer expires during  this time the client can
                    ;; reconnect to its session
                    session-timeout]
  ISession
  (clear-back-channel [this]
                      (try
                        (when back-channel
                          (write-end (:respond back-channel)))
                        (catch Exception e
                          nil ;; close back channel regardless
                          ))
                      (-> this
                          clear-heartbeat
                          (assoc :back-channel nil)
                          refresh-session-timeout))
  (set-back-channel [this respond req]
                    (let [bc (BackChannel. respond
                                           ;; can we stream responses
                                           ;; back?
                                           ;; CI is determined client
                                           ;; side with /test
                                           (= (get-in req [:query-params "CI"]) "0")
                                           ;; no bytes sent yet
                                           0)]
                      (-> this
                          clear-back-channel
                          ;; clear-back-channel sets the session-timeout
                          ;; here we know the session is alive and
                          ;; well due to this new backchannel
                          clear-session-timeout 
                          (assoc :back-channel bc)
                          refresh-heartbeat
                          ;; try to send any data that was buffered
                          ;; while there was no backchannel
                          flush-buffer)))
  (clear-heartbeat [this]
                   (when heartbeat-timeout
                       (.cancel heartbeat-timeout
                                false ;; do not interrupt running tasks
                                ))
                   (assoc this :heartbeat-timeout nil))
  (refresh-heartbeat [this]
                     (-> this
                         clear-heartbeat
                         (assoc :heartbeat-timeout
                           ;; *agent* not bound when executed later
                           ;; through schedule, therefor passed explicitly
                           (let [session-agent *agent*]
                             (schedule (fn []
                                         (send-off session-agent #(-> %
                                                                      (queue-string "[\"noop\"]")
                                                                      flush-buffer)))
                                       (:heartbeat-interval details))))))
  (clear-session-timeout [this]
                         (when session-timeout
                           (.cancel session-timeout
                                    false ;; do not interrupt running tasks
                                    ))
                         (assoc this :session-timeout nil))
  (refresh-session-timeout [this]
                           (-> this
                               clear-session-timeout
                               (assoc :session-timeout
                                 (let [session-agent *agent*]
                                   (schedule (fn []
                                               (send-off session-agent close "Timed out"))
                                             (:session-timeout-interval details))))))
  (queue-string [this string]
               (let [next-array-id (inc last-sent-array-id)]
                 (-> this
                     (assoc :last-sent-array-id next-array-id)
                     (update-in [:to-acknowledge-buffer]
                       #(if (not= string "[\"noop\"]")
                            (conj % [next-array-id string])
                            %))
                     (update-in [:to-flush-buffer] conj [next-array-id string]))))
  (acknowledge-arrays [this array-id]
    (let [array-id (Long/parseLong array-id)
          new-buffer (drop-queue to-acknowledge-buffer array-id)]
      (-> this
          (assoc :to-acknowledge-buffer new-buffer)
          (assoc :to-flush-buffer new-buffer))))
  ;; tries to do the actual writing to the client
  ;; @todo the composition is a bit awkward in this method due to the
  ;; try catch and if mix
  (flush-buffer [this]
                (if-not back-channel
                  this ;; nothing to do when there's no connection
                  (if-let [buffer (seq to-flush-buffer)]
                    (try
                      ;; buffer contains [[1 json-str] ...] can't use
                      ;; json-str which will double escape the json
                      (let [data (str "["
                                      (str/join "," (map (fn [[n d]] (str "[" n "," d "]")) buffer))
                                      "]")]
                        ;; write throws exception when the connection is closed
                        (write (:respond back-channel) data))
                      ;; size is an approximation
                      (let [this (let [size (reduce + 0 (map count (map second buffer)))]
                                   (-> this
                                       ;; assume last array just sent is acknowledge
                                       ;; so we don't send it again on next flush
                                       (assoc :to-flush-buffer clojure.lang.PersistentQueue/EMPTY)
                                       (update-in [:back-channel :bytes-sent] + size)))
                            ;; clear-back-channel closes the back
                            ;; channel when the channel does not
                            ;; support streaming or when a large
                            ;; amount of data has been sent
                            this (if (or (not (get-in this [:back-channel :chunk]))
                                         (< (:data-threshold details) (get-in this [:back-channel :bytes-sent])))
                                   (clear-back-channel this)
                                   this)]
                        ;; this sending of data keeps the connection alive
                        ;; make a new heartbeat
                        (refresh-heartbeat this))
                      (catch Exception e
                        ;; when write failed
                        ;; non delivered arrays are still in buffer
                        (clear-back-channel this)
                        ))
                    this ;; do nothing if buffer is empty
                    )))
  ;; closes the session and removes it from sessions
  (close [this message]

         (-> this
             clear-back-channel
             clear-session-timeout
             ;; the heartbeat timeout is cancelled by clear-back-channel
             )
         (swap! sessions dissoc id)
         (notify-listeners id :close message)
         nil ;; the agent will no longer wrap a session
         ))

;; creates a session agent wrapping session data and
;; adds the session to sessions
(defn create-session-agent [req options]
  (let [{initial-rid "RID" ;; identifier for forward channel
         app-version "CVER" ;; client can specify a custom app-version
         old-session-id "OSID"
         old-array-id "OAID"} (:query-params req)]
    ;; when a client specifies and old session id then that old one
    ;; needs to be removed
    (when-let [old-session-agent (@sessions old-session-id)]
      (send-off old-session-agent #(-> (if old-array-id
                                         (acknowledge-arrays % old-array-id)
                                         %)
                                       (close "Reconnected"))))
    (let [id (uuid)
          details {:address (:remote-addr req)
                   :headers (:headers req)
                   :app-version app-version
                   :heartbeat-interval (:keep-alive-interval options)
                   :session-timeout-interval (:session-timeout-interval options)
                   :data-threshold (:data-threshold options)}
          session (-> (Session. id
                                details
                                nil ;; backchannel
                                clojure.lang.PersistentQueue/EMPTY ;; to-flush-buffer
                                clojure.lang.PersistentQueue/EMPTY ;; to-acknowledge-buffer
                                0 ;; last-sent-array-id, the array
                                ;; with id 0 will be sent as an answer to
                                ;; the first forward-channel POST
                                nil ;; heartbeat-timeout
                                nil ;; session-timeout
                                )
                      ;; this first session-timeout is for the case
                      ;; when the client never connects with a backchannel
                      refresh-session-timeout)
          session-agent (agent session)]
      (swap! sessions assoc id session-agent)
      (when-let [notify (:on-session options)]
        (notify id req))
      session-agent)))

(defn session-status [session]
  (let [has-back-channel (if (:back-channel session) 1 0)
        last-acknowledged-array-id
        (if (empty? (:to-acknowledge-buffer session))
          (:last-sent-array-id session)
          (dec (first (peek (:to-acknowledge-buffer session)))))
        ;; the sum of all the data that is still to be send
        outstanding-bytes (let [buffer (:to-acknowledge-buffer session)]
                            (if (empty? buffer)
                              0
                              (reduce + 0 (map count (map second buffer)))))]
    [has-back-channel last-acknowledged-array-id outstanding-bytes]))

;; convience function to send data to a session
;; the data will be queued until there is a backchannel to send it
;; over
(defn send-string [session-id string]
  (when-let [session-agent (get @sessions session-id)]
    (send-off session-agent #(-> %
                                 (queue-string string)
                                 flush-buffer))))

(defn send-map [session-id map]
  (send-string session-id (json/json-str map)))

;; wrap the respond function from :reactor with the proper
;; responsewrapper for either IE or other clients
(defn wrap-continuation-writers [handler options]
  (fn [req]
    (let [res (handler req)]
      (if (:async res)
        (let [reactor (:reactor res)
              type (get-in req [:query-params "TYPE"])]
          (assoc res :reactor
                 (fn [respond]
                   (reactor (let [headers (assoc (:headers options)
                                            "Transfer-Encoding" "chunked")]
                              (if (= type "html")
                                (let [domain (get-in req [:query-params "DOMAIN"])]
                                  ;; last two false are the padding
                                  ;; sent flags
                                  (IEWriter. respond headers domain false false))
                                (XHRWriter. respond headers)))))))
        res ;; do not touch responses without :async
        ))))

;; test channel is used to determine which host to connect to
;; and if the connection can support streaming
(defn handle-test-channel [req options]
  (if-not (= "8" (get-in req [:query-params "VER"]))
    (error-response 400 "Version 8 required")
    ;; phase 1
    ;; client requests [random host-prefix or
    ;; nil,blockedPrefix]
    ;; blockedPrefix not supported, always nil
    (if (= (get-in req [:query-params "MODE"]) "init")
      (let [host-prefix (when-let [prefixes (seq (:host-prefixes options))]
                          (rand-nth prefixes))]
        {:status 200
         :headers (assoc (:headers options) "X-Accept" "application/json; application/x-www-form-urlencoded")
         :body (json/json-str [host-prefix,nil])})
      
      ;; else phase 2 for get /test
      ;; client checks if connection is buffered
      ;; send 11111, wait 2 seconds, send 2
      ;; if client gets two chunks, then there is no buffering
      ;; proxy in the way
      {:async :http
       :reactor
       (fn [respond]
         (write-head respond)
         (write-raw respond "11111")
         (schedule #(do (write-raw respond "2")
                        (write-end respond))
                   2))})))

;; POST req client -> server is a forward channel
;; session might be nil, when this is the first POST by client
(defn handle-forward-channel [req session-agent options]
  (let [[session-agent is-new-session] (if session-agent
                                         [session-agent false]
                                         [(create-session-agent req options) true])
        ;; maps contains whatever the messages to the server
        maps (get-maps req)]
    (if is-new-session
      ;; first post after a new session is a message with the session
      ;; details.
      ;; response is first array sent for this session:
      ;; [[0,["c", session-id, host-prefix, version (always 8)]]]
      ;; send as json for XHR and IE
      (let [session @session-agent
            session-id (:id session)
            ;; @todo extract the used host-prefix from the request if any
            host-prefix nil]
        {:status 200
         :headers (assoc (:headers options) "Content-Type" "application/javascript")
         :body
         (size-json-str (json/json-str [[0,["c", session-id, host-prefix, 8]]]))})
      ;; For existing sessions:
      ;; Forward sent data by client to listeners
      ;; reply with
      ;; [backchannelPresent,lastPostResponseArrayId_,numOutstandingBackchannelBytes]
      ;; backchannelPresent = 0 for false, 1 for true
      ;; send as json for XHR and IE
      (do
        (doseq [map maps]
          (notify-listeners (:id @session-agent) :map map))
        (let [status (session-status @session-agent)]
          {:status 200
           :headers (:headers options)
           :body (size-json-str (json/json-str status))})))))

;; GET req server->client is a backwardchannel opened by client
(defn handle-backward-channel [req session-agent options]
  (let [type (get-in req [:query-params "TYPE"])]
    (cond 
     (#{"xmlhttp" "html"} type)
     ;; @todo check that query RID is "rpc"
     {:async :http
      :reactor
      (fn [respond]
        (write-head respond)
        (send-off session-agent set-back-channel respond req))}
     (= type "terminate")
     ;; this is a request made in an img tag
     (do ;;end session
       (when session-agent
         (send-off session-agent close "Disconnected"))
       {:status 200
        :headers (:headers options)
        :body ""}
       ))))

;; get to /<base>/bind is client->server msg
;; post to /<base>/bind is initiate server->client channel
(defn handle-bind-channel [req options]
  (let [SID (get-in req [:query-params "SID"])
        ;; session-agent might be nil, then it will be created by
        ;; handle-forward-channel
        session-agent (@sessions SID)]
    (if (and SID
             (not session-agent))
      ;; SID refers to an already created session, which therefore
      ;; must exist
      (error-response 400 "Unknown SID")
      (do
        ;; client can tell the server which array it has seen
        ;; up to including AID can be removed from the buffer
        (when session-agent
          (when-let [AID (get-in req [:query-params "AID"])]
            (send-off session-agent acknowledge-arrays AID)))
        (condp = (:request-method req)
            :post (handle-forward-channel req session-agent options)
            :get (handle-backward-channel req session-agent options))))))


;; see default-options for describtion of options
(defn wrap-browserchannel [handler & [options]]
  (let [options (merge default-options options)
        base (str (:base options))]
    (-> (fn [req]
          (let [uri (:uri req)
                method (:request-method req)]
            (cond
             (and (.startsWith uri (str base "/test"))
                  (= method :get))
             (handle-test-channel req options)
             (.startsWith uri (str base "/bind"))
             (handle-bind-channel req options)
             :else (handler req))))
        (wrap-continuation-writers options)
        params/wrap-params
        )))
