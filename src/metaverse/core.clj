(ns metaverse.core
  (:use [compojure.core]
        [metaverse.web])
  (:require [compojure.route :as route]))

(defroutes site
  (ANY "/index.html" [] (page (index)))
  (route/resources "/public/"))

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))
