// Compiled by ClojureScript 0.0-3308 {}
goog.provide('metaverse.util');
goog.require('cljs.core');
metaverse.util.append_onload = (function metaverse$util$append_onload(f){

var old_onload = document.onreadystatechange;
var new_onload = ((function (old_onload){
return (function (evt){
if(cljs.core._EQ_.call(null,document.readyState,"complete")){
f.call(null,evt);

if(cljs.core.truth_(old_onload)){
return old_onload.call(null,evt);
} else {
return null;
}
} else {
return null;
}
});})(old_onload))
;
return document.onreadystatechange = new_onload;
});
metaverse.util.DEFAULT_TIMEOUT = (1000);
metaverse.util.set_timeout = (function metaverse$util$set_timeout(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return metaverse.util.set_timeout.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

metaverse.util.set_timeout.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__57066){
var vec__57067 = p__57066;
var delay = cljs.core.nth.call(null,vec__57067,(0),null);
return setTimeout(f,(function (){var or__4309__auto__ = delay;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return metaverse.util.DEFAULT_TIMEOUT;
}
})());
});

metaverse.util.set_timeout.cljs$lang$maxFixedArity = (1);

metaverse.util.set_timeout.cljs$lang$applyTo = (function (seq57064){
var G__57065 = cljs.core.first.call(null,seq57064);
var seq57064__$1 = cljs.core.next.call(null,seq57064);
return metaverse.util.set_timeout.cljs$core$IFn$_invoke$arity$variadic(G__57065,seq57064__$1);
});
metaverse.util.recur_infinitely = (function metaverse$util$recur_infinitely(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return metaverse.util.recur_infinitely.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

metaverse.util.recur_infinitely.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__57070){
var vec__57071 = p__57070;
var delay = cljs.core.nth.call(null,vec__57071,(0),null);
return metaverse.util.set_timeout.call(null,((function (vec__57071,delay){
return (function metaverse$util$self(){
f.call(null);

return metaverse.util.set_timeout.call(null,metaverse$util$self,delay);
});})(vec__57071,delay))
,delay);
});

metaverse.util.recur_infinitely.cljs$lang$maxFixedArity = (1);

metaverse.util.recur_infinitely.cljs$lang$applyTo = (function (seq57068){
var G__57069 = cljs.core.first.call(null,seq57068);
var seq57068__$1 = cljs.core.next.call(null,seq57068);
return metaverse.util.recur_infinitely.cljs$core$IFn$_invoke$arity$variadic(G__57069,seq57068__$1);
});
