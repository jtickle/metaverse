// Compiled by ClojureScript 0.0-3308 {}
goog.provide('metaverse.core');
goog.require('cljs.core');
metaverse.core.main = (function metaverse$core$main(){
var scene = (new THREE.Scene());
var camera = (new THREE.PerspectiveCamera((75),((((window["innerWidth"]) / (window["innerHeight"])) / 0.1) / (1000))));
var renderer = (new THREE.WebGLRenderer());
renderer.setSize((window["innerWidth"]),(window["innerHeight"]));

return document.body.appendChild(renderer.domElement);
});
metaverse.core.main.call(null);
