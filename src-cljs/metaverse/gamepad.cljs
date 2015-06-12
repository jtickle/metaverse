(ns metaverse.gamepad
  (:require [clojure.set :as set]))

(defn connected-listener [fn]
  (.addEventListener js/window "gamepadconnected" fn))

(defn disconnected-listener [fn]
  (.addEventListener js/window "gamepaddisconnected" fn))

(defn get-by-id [id]
  (pad->map
   (first
    (set/select
     (fn [gp]
       (= id (.id gp)))
     (.getGamepads js/navigator)))))

(defn get-index [index]
  (pad->map
   (aget
    (.getGamepads js/navigator)
    index)))

;; There does not seem to be a way to reflect upon the keys in the
;; gamepad object... so we hack it!
(def GAMEPAD-KEYS
  [:axes
   :buttons
   :connected
   :id
   :index
   :mapping
   :timestamp])

; Gamepad Object actually needs:
 ; Available Axes
 ; Available Buttons
 ; Connected?
 ; ID
 ; Index
 ; Mapping
 ; (defn get-state [] { :axes [ ... ] :buttons [ ... ] :timestamp ... } )
 ; (defn register-channel ;read the docs fool )

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
    (.log js/console (prn-str [k (aget pad (name k))]))))

(def BUTTON-KEYS
  [:pressed
   :value])
(defn button->map [btn]
  (apply merge
    (for [k BUTTON-KEYS]
      {k (aget btn (name k))})))

(defmulti convert-gamepad-attribute first)
(defmethod convert-gamepad-attribute :default [v]
  (js->clj (second v)))
(defmethod convert-gamepad-attribute :buttons [v]
  (into [] (map button->map (second v))))

(defn pad->map [pad]
  (apply merge
    (for [k GAMEPAD-KEYS]
      {k (convert-gamepad-attribute [k (aget pad (name k))])})))

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
          (count (:buttons gp))
          (count (:axes gp)))))

(defn init []
  (.log js/console "Gamepad Time!!!")
  (let [pads (->> (.getGamepads js/navigator)
                 js/Array.prototype.slice.call
                 js->clj
                 (remove nil?))]
    (.log js/console (prn-str pads))
    (doseq [pad pads]
      (print-out-gamepad pad)
      (.log js/console "As a map: " (prn-str (pad->map pad)))))

  (.addEventListener js/window "gamepadconnected" add-gamepad))
