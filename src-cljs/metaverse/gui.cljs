(ns metaverse.gui
  (:require [goog.dom :as dom]))

(def game-container-id
  "HTML ID of container into which everything else will be constrained"
  "game-container")

(def canvas-container-id
  "HTML ID of main Canvas container"
  "canvas-container")

(def fps-element-id
  "HTML ID of Frames Per Second display"
  "fps-display")

(def gamepad-status-element-id
  "HTML ID of Gamepad Status Display"
  "gamepad-status-display")

(defn clear-container [container]
  "Removes all children of a given DOM node"
  (while (.hasChildNodes container)
    (.removeChild container
                  (aget container "firstNode"))))

(defn set-canvas-element [element]
  "Replaces all contents of canvas-container-id with whatever is passed in (assuming a canvas)"
  (let [container (.getElementById js/document canvas-container-id)]
    (dom/removeChildren container)
    (.appendChild container element)))

(defn set-fps [fps]
  "Displays the current Frames Per Second"
  (let [element (.getElementById js/document fps-element-id)
        textnode (.createTextNode js/document (.toFixed fps 2))]
    (dom/removeChildren element)
    (.appendChild element textnode)))
