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

metaverse.util.set_timeout.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__6339){
var vec__6340 = p__6339;
var delay = cljs.core.nth.call(null,vec__6340,(0),null);
return setTimeout(f,(function (){var or__4309__auto__ = delay;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return metaverse.util.DEFAULT_TIMEOUT;
}
})());
});

metaverse.util.set_timeout.cljs$lang$maxFixedArity = (1);

metaverse.util.set_timeout.cljs$lang$applyTo = (function (seq6337){
var G__6338 = cljs.core.first.call(null,seq6337);
var seq6337__$1 = cljs.core.next.call(null,seq6337);
return metaverse.util.set_timeout.cljs$core$IFn$_invoke$arity$variadic(G__6338,seq6337__$1);
});
metaverse.util.recur_infinitely = (function metaverse$util$recur_infinitely(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return metaverse.util.recur_infinitely.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

metaverse.util.recur_infinitely.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__6343){
var vec__6344 = p__6343;
var delay = cljs.core.nth.call(null,vec__6344,(0),null);
return metaverse.util.set_timeout.call(null,((function (vec__6344,delay){
return (function metaverse$util$self(){
f.call(null);

return metaverse.util.set_timeout.call(null,metaverse$util$self,delay);
});})(vec__6344,delay))
,delay);
});

metaverse.util.recur_infinitely.cljs$lang$maxFixedArity = (1);

metaverse.util.recur_infinitely.cljs$lang$applyTo = (function (seq6341){
var G__6342 = cljs.core.first.call(null,seq6341);
var seq6341__$1 = cljs.core.next.call(null,seq6341);
return metaverse.util.recur_infinitely.cljs$core$IFn$_invoke$arity$variadic(G__6342,seq6341__$1);
});
