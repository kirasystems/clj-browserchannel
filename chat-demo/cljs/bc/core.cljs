(ns bc.core
  (:require
   [bc.dom-helpers :as dom]
   [goog.net.BrowserChannel :as goog-browserchannel]
   [goog.events :as events]
   [goog.events.KeyCodes :as key-codes]
   [goog.events.KeyHandler :as key-handler]))

(defn handler []
  (let [h (goog.net.BrowserChannel.Handler.)]
    (set! (.-channelOpened h)
          (fn [channel]
            (enable-chat)))
    (set! (.-channelHandleArray h)
          (fn [x data]
            (let [msg (aget data "msg")]
              (dom/append (dom/get-element "room") (dom/element :div (str "MSG::" msg))))))
    h))

(defn say [text]
  (.sendMap channel (doto (js-obj)
                      (aset "msg" text)) ))

(defn enable-chat []
  (let [msg-input (dom/get-element "msg-input")
        send-button (dom/get-element "send-button")
        handler (fn [e]
                  (say (dom/value msg-input))
                  (dom/set-value msg-input ""))]
    (dom/set-disabled msg-input false)
    (dom/set-disabled send-button false)
    (events/listen (goog.events.KeyHandler. msg-input)
                   "key"
                   (fn [e]
                     (when (= (.-keyCode e) key-codes/ENTER)
                       (handler e))))
    (events/listen send-button
                  "click"
                  handler)))

(def channel (goog.net.BrowserChannel.))

(defn ^:export run []
  (events/listen js/window "unload" #(do
                                       (.disconnect channel ())
                                       (events/removeAll)))
  (doto channel
    (.setHandler (handler))
    (.connect "/channel/test" "/channel/bind")
    ))
