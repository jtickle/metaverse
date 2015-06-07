(ns metaverse.core)

(defn main []
  (let [scene (js/THREE.Scene.)
        camera (js/THREE.PerspectiveCamera.
	         75
		 (/ (aget js/window "innerWidth")
		    (aget js/window "innerHeight")
 		 0.1
		 1000))
        renderer (js/THREE.WebGLRenderer.)]
    (.setSize renderer (aget js/window "innerWidth") (aget js/window "innerHeight"))
    (.appendChild js/document.body (.-domElement renderer))))

(main)
