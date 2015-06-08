(ns metaverse.util)

(defn append-onload [f]
  "Append a function that should be loaded on page start to the list
of functions to load."
  (let [old-onload (.-onreadystatechange js/document)
        new-onload
        (fn [evt]
                                        ; todo(daniel): maybe interactive is good enough here?
          (when (= (.-readyState js/document) "complete")
            (f evt)
            (when old-onload
              (old-onload evt))))]
    (set! (.-onreadystatechange js/document) new-onload)))

(def DEFAULT-TIMEOUT 1000)

(defn set-timeout [f & [delay]]
  (js/setTimeout f (or delay DEFAULT-TIMEOUT)))

(defn recur-infinitely [f & [delay]]
  (set-timeout
   (fn self []
     (f)
     (set-timeout self delay)) delay))

