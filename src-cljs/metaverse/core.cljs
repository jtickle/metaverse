(ns metaverse.core
  (:require [cljs.core.async :refer [<! >! put! chan]]
            [metaverse.gamepad :as gamepad]
            [metaverse.util :as util]
            [metaverse.gui :as gui])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(defn render [state]
  (let [{:keys [ts pts renderer scene camera transforms]} state
        dts (- ts pts)]
    (doseq [t @transforms]
      (t ts dts))
    (js/requestAnimationFrame #(render {:ts %
                                        :pts ts
                                        :renderer renderer
                                        :scene scene
                                        :camera camera
                                        :transforms transforms}))
    (gui/set-fps (/ 1000 dts))
    (.render renderer scene camera)))

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

(defn grow-shrink [c]
  (go
   (>! c {:transforms
          {:0x0000 {["scale"]
                    (fn [prop t dt]
                      (let [s (+ 0.17 (Math/abs (Math/sin (/ (js/Date.now) 500))))]
                        (repeat 3 s)))
                    ["rotation" "x"] 
                    (fn [prop t dt]
                      (+ prop 0.1))
                    ["rotation" "y"]
                    (fn [prop t dt]
                      (+  prop 0.1))}}})))

(defn auto-get [mesh path]
  (if (sequential? path)
    (apply aget mesh path)
    (aget mesh path)))

(defn auto-set [mesh path value]
  (let [prop (auto-get mesh path)]
    (if (not= (type prop) js/THREE.Vector3)
      (apply aset
        (concat [mesh]
          (if (sequential? path)
            path
           [path])
          [value]))
      (do 
        ;;(.log js/console "here" prop (.-set prop))
        ;; todo(daniel): this is fucked, look at it later
        ;;(js/Function.prototype.apply prop (.-set prop) (clj->js value))))))
        (.set prop (nth value 0) (nth value 1) (nth value 2))))))

(defn main []
  (let [render-state (chan)
        scene (js/THREE.Scene.)
        camera (js/THREE.PerspectiveCamera.
                75
                (/ (aget js/window "innerWidth")
                   (aget js/window "innerHeight"))
                0.1
                1000)
        renderer (js/THREE.WebGLRenderer.)
        ;; transforms
        tns      (atom [])]
    
    ;; TODO(daniel): this should probably be receiving resize events
    ;; from a channel and updating dynamically...
    (.setSize renderer (aget js/window "innerWidth") (aget js/window "innerHeight"))
    ;;(.appendChild js/document.body (.-domElement renderer))
    (gui/set-canvas-element (.-domElement renderer))

    (go-loop [registered {}]
     (let [update          (<! render-state)
           added-meshes    (:geometry      update)
           camera-pos      (:camera        update)
           modified-meshes (:modifications update)
           transforms      (:transforms    update)
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
       
       ;; modifications - functions applied immediately to the state of an object
       (doseq [[mesh-id, mods] (seq modified-meshes)]
         ;;(.log js/console (prn-str mesh-id))
         (when-let [mesh (get registered mesh-id)]
           (doseq [[property, transform] (seq mods)]
             (let [current-val (apply aget mesh property)]
               ;;(.log js/console "Applying transform to mesh: " mesh)
               (apply aset 
                      (concat 
                       [mesh] 
                       (if (sequential? property)
                         property
                         [property])
                       [(transform current-val)]))))))

       ;; transformations - functions applied as a function of delta-time
       (doseq [[mesh-id, fns] (seq transforms)]
         (let [mesh (get registered mesh-id)]
           (doseq [[property, t] (seq fns)]
             (let [f t]
               (swap! tns conj 
                      (fn [t ts dts] (-> (auto-get mesh property) (f t ts dts) ((partial auto-set mesh property)))))))))
       
       (recur registered)))

    ;; TODO: these sections should be replaced from something that
    ;; reads the game state over the network
    (add-single-cube render-state)
    (set-initial-camera-position render-state)
    ;;(util/recur-infinitely (partial rotate-fn render-state) 50)
    (grow-shrink render-state)

    ;; Start the render loop
    (render {:ts         0
             :pts        0 
             :renderer   renderer
             :scene      scene
             :camera     camera
             :transforms tns})))

(util/append-onload 
 (fn [] 
   (main)
   (gamepad/init)))

