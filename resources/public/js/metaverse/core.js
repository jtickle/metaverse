// Compiled by ClojureScript 0.0-3308 {}
goog.provide('metaverse.core');
goog.require('cljs.core');
metaverse.core.render = (function metaverse$core$render(ts,renderer,scene,camera,cube){
requestAnimationFrame((function (p1__11664_SHARP_){
return metaverse$core$render.call(null,p1__11664_SHARP_,renderer,scene,camera,cube);
}));

renderer.render(scene,camera);

(cube["rotation"]["x"] = ((cube["rotation"]["x"]) + 0.1));

return (cube["rotation"]["y"] = ((cube["rotation"]["y"]) + 0.1));
});
metaverse.core.main = (function metaverse$core$main(){
var scene = (new THREE.Scene());
var camera = (new THREE.PerspectiveCamera((75),((window["innerWidth"]) / (window["innerHeight"])),0.1,(1000)));
var renderer = (new THREE.WebGLRenderer());
renderer.setSize((window["innerWidth"]),(window["innerHeight"]));

document.body.appendChild(renderer.domElement);

var geometry = (new THREE.BoxGeometry((1),(1),(1)));
var material = (new THREE.MeshBasicMaterial({"color": (15746048)}));
var cube = (new THREE.Mesh(geometry,material));
scene.add(cube);

(camera["position"]["z"] = (5));

console.log((camera["position"]["z"]));

return metaverse.core.render.call(null,(0),renderer,scene,camera,cube);
});
metaverse.core.main.call(null);
