(ns metaverse.web
  (:use [hiccup.core]
        [hiccup.page]))

(defn page [content]
  (html
    [:head [:title (:title content)]
           (for [sheet (:styles content)]
             (include-css sheet))]
    [:body
     (:content content)
     [:footer
      (for [script (:scripts content)]
        (include-js script))]]))

(defn index []
  {:title "Sup Yall"
   :styles []
   :scripts ["/public/js/lib/three.min.js"
   	     "/public/js/main.js"]
   :content [:h1 "Maybe don't fuck off so much...?!"]})
