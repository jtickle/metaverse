(ns metaverse.core)

(defn render [ts renderer scene camera cube]
  (js/requestAnimationFrame #(render % renderer scene camera cube))
  (.render renderer scene camera)
  (aset cube "rotation" "x"
        (+ (aget cube "rotation" "x") 0.1))
  (aset cube "rotation" "y"
        (+ (aget cube "rotation" "y") 0.1)))

(defn main []
  (let [scene (js/THREE.Scene.)
        camera (js/THREE.PerspectiveCamera.
                75
                (/ (aget js/window "innerWidth")
                   (aget js/window "innerHeight"))
                0.1
                1000)
        renderer (js/THREE.WebGLRenderer.)]
    (.setSize renderer (aget js/window "innerWidth") (aget js/window "innerHeight"))
    (.appendChild js/document.body (.-domElement renderer))

    (let [geometry (js/THREE.BoxGeometry. 1 1 1)
          material (js/THREE.MeshBasicMaterial. #js {:color 0xf04400})
          cube     (js/THREE.Mesh. geometry material)]
      (.add scene cube)
      (aset camera "position" "z" 5)
      (.log js/console (aget camera "position" "z"))
      (render 0 renderer scene camera cube))))

(main)
