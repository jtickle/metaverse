(ns metaverse.gamepad
  (:require [clojure.set :as set]))

(defn connected-listener [fn]
  (.addEventListener js/window "gamepadconnected" fn))

(defn disconnected-listener [fn]
  (.addEventListener js/window "gamepaddisconnected" fn))

(defn get-by-id [id]
  (js->clj (first (set/select
                   (fn [gp]
                     (= id (.id gp)))
                   (.getGamepads js/navigator))) {:keywordize-keys true}))

(defn get-index [index]
  (js->clj (aget (.getGamepads js/navigator) index) {:keywordize-keys true}))

;; There does not seem to be a way to reflect upon the keys in the
;; gamepad object... so we hack it!
(def GAMEPAD-KEYS
  ["axes"
   "buttons"
   "connected"
   "id"
   "index"
   "mapping"
   "timestamp"])

(defn gamepad? [x]
  (= (-> (js/Object.getPrototypeOf x) .-constructor)
     js/Gamepad))

(defn gamepad-button? [x]
  (= (-> (js/Object.getPrototypeOf x) .-constructor)
     js/GamepadButton))

(defn print-out-gamepad [pad]
  (.log js/console "Printing out gamepad:")
  (.log js/console "====================")
  (.log js/console pad)
  (.log js/console "isa pad?" (prn-str (gamepad? pad)))
  (.log js/console "====================")
  (doseq [k GAMEPAD-KEYS]
    (.log js/console (prn-str [k (aget pad k)]))))

(defn add-gamepad [e]
  (.log js/console e)
  (.log js/console "Gamepad connected at index %d: %s. %d buttons, %d axes."
        (aget e "gamepad" "index")
        (aget e "gamepad" "id")
        (aget e "gamepad" "buttons" "length")
        (aget e "gamepad" "axes" "length"))
  (let [gp (get-index (aget e "gamepad" "index"))]
    (.log js/console (print-str gp))
    (.log js/console "Now, loading from self index %d: %s.  %d buttons, %d axes."
          (:index gp)
          (:id gp)
          (:buttons gp)
          (:axes gp))))

(defn init []
  (.log js/console "Gamepad Time!!!")
  (let [pads (->> (.getGamepads js/navigator)
                 js/Array.prototype.slice.call
                 js->clj
                 (remove nil?))]
    (.log js/console (prn-str pads))
    (doseq [pad pads]
      (print-out-gamepad pad)))

  (.addEventListener js/window "gamepadconnected" add-gamepad))
