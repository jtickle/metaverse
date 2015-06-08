(ns metaverse.core
  (:use [compojure.core]
        [metaverse.web])
  (:require [compojure.route :as route]
            [ring.util.response :as response]))

(defroutes site
  (ANY "/" [] (page (index)))
  (ANY "/favicon.ico" [] 
       (response/resource-response "/image/favicon.ico" {:root "public"}))
  (route/resources "/public/"))

