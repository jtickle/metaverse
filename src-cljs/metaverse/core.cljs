(ns metaverse.core
  (:require [cljs.core.async :refer [<! >! put! chan]]
            [metaverse.gamepad :as gamepad]
            [metaverse.util :as util])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(defn render [ts renderer scene camera]
  (js/requestAnimationFrame #(render % renderer scene camera))
  (.render renderer scene camera))

(defn add-single-cube [c]
  (let [geom (js/THREE.BoxGeometry. 1 1 1)
        material (js/THREE.MeshBasicMaterial. #js {:color 0xf04400})
        cube     (js/THREE.Mesh. geom material)]
    (go
     (>! c {:geometry {:0x0000 cube }}))))

(defn set-initial-camera-position [c]
  (go
   (>! c {:camera {:z 5}})))

(defn rotate-fn [c]
  (go
   (>! c {:modifications
          {:0x0000 {["rotation" "x"] #(+ % 0.1)
                    ["rotation" "y"] #(+ % 0.1)}}})))

(defn main []
  (let [render-state (chan)
        scene (js/THREE.Scene.)
        camera (js/THREE.PerspectiveCamera.
                75
                (/ (aget js/window "innerWidth")
                   (aget js/window "innerHeight"))
                0.1
                1000)
        renderer (js/THREE.WebGLRenderer.)]
    
    ;; TODO(daniel): this should probably be receiving resize events
    ;; from a channel and updating dynamically...
    (.setSize renderer (aget js/window "innerWidth") (aget js/window "innerHeight"))
    (.appendChild js/document.body (.-domElement renderer))

    (go-loop [registered {}]
     (let [update          (<! render-state)
           added-meshes    (:geometry      update)
           camera-pos      (:camera        update)
           modified-meshes (:modifications update)
           registered      (merge registered added-meshes)]

       ;;(.log js/console "update: " (prn-str update))
       (doseq [[id, mesh] (seq added-meshes)]
         ;;(.log js/console (prn-str id mesh))
         (.add scene mesh))

       ;;(.log js/console (prn-str camera-pos))
       (doseq [axis [:x :y :z]]
         (when (contains? camera-pos axis)
           ;;(.log js/console "camera update: " (prn-str axis (get camera-pos axis)))
           (aset camera "position" (name axis) (get camera-pos axis))))
       
       (doseq [[mesh-id, mods] (seq modified-meshes)]
         ;;(.log js/console (prn-str mesh-id))
         (when-let [mesh (get registered mesh-id)]
           (doseq [[property, transform] (seq mods)]
             (let [current-val (apply aget mesh property)]
               ;;(.log js/console "Applying transform to mesh: " mesh)
               (apply aset 
                      (concat 
                       [mesh] 
                       (if (sequential? property )
                         property
                         [property])
                       [(transform current-val)]))))))

       (recur registered)))

    ;; TODO: these sections should be replaced from something that
    ;; reads the game state over the network
    (add-single-cube render-state)
    (set-initial-camera-position render-state)
    (util/recur-infinitely (partial rotate-fn render-state) 200)

    ;; Start the render loop
    (render 0 renderer scene camera)))

(util/append-onload 
 (fn [] 
   (main)
   (gamepad/init)))

