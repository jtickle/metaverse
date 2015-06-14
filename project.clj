(defproject metaverse "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url         "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure                  "1.7.0-beta2"]
                 [org.immutant/immutant                      "2.0.1"]
                 [org.immutant/web                           "2.0.1"]
                 [org.clojure/clojurescript               "0.0-3308"]
                 [compojure                                  "1.3.4"]
                 [org.clojure/core.async    "0.1.346.0-17112a-alpha"]
                 [com.taoensso/sente                         "1.4.1"]
                 [hiccup                                     "1.0.5"]]
  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-ring      "0.9.4"]]
  :ring {:handler       metaverse.core/site
         :auto-refresh?                true}
  :cljsbuild {
      :builds [{
	  ; The path to the top-level ClojureScript source directory:
	  :source-paths ["src-cljs"]
	  ; The standard ClojureScript compiler options:
	  ; (See the ClojureScript compiler documentation for details.)
	  :compiler {
	    :output-to     "resources/public/js/main.js"  ; default: target/cljsbuild-main.js
	    :output-dir    "resources/public/js/"
	    :optimizations :whitespace
	    :pretty-print  true
	    :source-map    "resources/public/js/main.js.map"}}]})
