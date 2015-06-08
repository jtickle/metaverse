// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t17878 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17878 = (function (fn_handler,f,meta17879){
this.fn_handler = fn_handler;
this.f = f;
this.meta17879 = meta17879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17880,meta17879__$1){
var self__ = this;
var _17880__$1 = this;
return (new cljs.core.async.t17878(self__.fn_handler,self__.f,meta17879__$1));
});

cljs.core.async.t17878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17880){
var self__ = this;
var _17880__$1 = this;
return self__.meta17879;
});

cljs.core.async.t17878.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17878.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t17878.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t17878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta17879","meta17879",-279767737,null)], null);
});

cljs.core.async.t17878.cljs$lang$type = true;

cljs.core.async.t17878.cljs$lang$ctorStr = "cljs.core.async/t17878";

cljs.core.async.t17878.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t17878");
});

cljs.core.async.__GT_t17878 = (function cljs$core$async$fn_handler_$___GT_t17878(fn_handler__$1,f__$1,meta17879){
return (new cljs.core.async.t17878(fn_handler__$1,f__$1,meta17879));
});

}

return (new cljs.core.async.t17878(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__17882 = buff;
if(G__17882){
var bit__4983__auto__ = null;
if(cljs.core.truth_((function (){var or__4309__auto__ = bit__4983__auto__;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return G__17882.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__17882.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17882);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17882);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__17884 = arguments.length;
switch (G__17884) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__17887 = arguments.length;
switch (G__17887) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17889 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17889);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17889,ret){
return (function (){
return fn1.call(null,val_17889);
});})(val_17889,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__17891 = arguments.length;
switch (G__17891) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4420__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4420__auto__)){
var ret = temp__4420__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4420__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4420__auto__)){
var retb = temp__4420__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4420__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4420__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5194__auto___17893 = n;
var x_17894 = (0);
while(true){
if((x_17894 < n__5194__auto___17893)){
(a[x_17894] = (0));

var G__17895 = (x_17894 + (1));
x_17894 = G__17895;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__17896 = (i + (1));
i = G__17896;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t17900 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17900 = (function (alt_flag,flag,meta17901){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta17901 = meta17901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17902,meta17901__$1){
var self__ = this;
var _17902__$1 = this;
return (new cljs.core.async.t17900(self__.alt_flag,self__.flag,meta17901__$1));
});})(flag))
;

cljs.core.async.t17900.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17902){
var self__ = this;
var _17902__$1 = this;
return self__.meta17901;
});})(flag))
;

cljs.core.async.t17900.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17900.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t17900.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t17900.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17901","meta17901",-1284143187,null)], null);
});})(flag))
;

cljs.core.async.t17900.cljs$lang$type = true;

cljs.core.async.t17900.cljs$lang$ctorStr = "cljs.core.async/t17900";

cljs.core.async.t17900.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t17900");
});})(flag))
;

cljs.core.async.__GT_t17900 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t17900(alt_flag__$1,flag__$1,meta17901){
return (new cljs.core.async.t17900(alt_flag__$1,flag__$1,meta17901));
});})(flag))
;

}

return (new cljs.core.async.t17900(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t17906 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17906 = (function (alt_handler,flag,cb,meta17907){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta17907 = meta17907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17908,meta17907__$1){
var self__ = this;
var _17908__$1 = this;
return (new cljs.core.async.t17906(self__.alt_handler,self__.flag,self__.cb,meta17907__$1));
});

cljs.core.async.t17906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17908){
var self__ = this;
var _17908__$1 = this;
return self__.meta17907;
});

cljs.core.async.t17906.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17906.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t17906.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t17906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17907","meta17907",550037516,null)], null);
});

cljs.core.async.t17906.cljs$lang$type = true;

cljs.core.async.t17906.cljs$lang$ctorStr = "cljs.core.async/t17906";

cljs.core.async.t17906.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t17906");
});

cljs.core.async.__GT_t17906 = (function cljs$core$async$alt_handler_$___GT_t17906(alt_handler__$1,flag__$1,cb__$1,meta17907){
return (new cljs.core.async.t17906(alt_handler__$1,flag__$1,cb__$1,meta17907));
});

}

return (new cljs.core.async.t17906(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17909_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17909_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17910_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17910_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4309__auto__ = wport;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17911 = (i + (1));
i = G__17911;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4309__auto__ = ret;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4422__auto__ = (function (){var and__4297__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4297__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4297__auto__;
}
})();
if(cljs.core.truth_(temp__4422__auto__)){
var got = temp__4422__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5349__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5349__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17914){
var map__17915 = p__17914;
var map__17915__$1 = ((cljs.core.seq_QMARK_.call(null,map__17915))?cljs.core.apply.call(null,cljs.core.hash_map,map__17915):map__17915);
var opts = map__17915__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17912){
var G__17913 = cljs.core.first.call(null,seq17912);
var seq17912__$1 = cljs.core.next.call(null,seq17912);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17913,seq17912__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__17917 = arguments.length;
switch (G__17917) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7725__auto___17966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7725__auto___17966){
return (function (){
var f__7726__auto__ = (function (){var switch__7663__auto__ = ((function (c__7725__auto___17966){
return (function (state_17941){
var state_val_17942 = (state_17941[(1)]);
if((state_val_17942 === (7))){
var inst_17937 = (state_17941[(2)]);
var state_17941__$1 = state_17941;
var statearr_17943_17967 = state_17941__$1;
(statearr_17943_17967[(2)] = inst_17937);

(statearr_17943_17967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (1))){
var state_17941__$1 = state_17941;
var statearr_17944_17968 = state_17941__$1;
(statearr_17944_17968[(2)] = null);

(statearr_17944_17968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (4))){
var inst_17920 = (state_17941[(7)]);
var inst_17920__$1 = (state_17941[(2)]);
var inst_17921 = (inst_17920__$1 == null);
var state_17941__$1 = (function (){var statearr_17945 = state_17941;
(statearr_17945[(7)] = inst_17920__$1);

return statearr_17945;
})();
if(cljs.core.truth_(inst_17921)){
var statearr_17946_17969 = state_17941__$1;
(statearr_17946_17969[(1)] = (5));

} else {
var statearr_17947_17970 = state_17941__$1;
(statearr_17947_17970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (13))){
var state_17941__$1 = state_17941;
var statearr_17948_17971 = state_17941__$1;
(statearr_17948_17971[(2)] = null);

(statearr_17948_17971[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (6))){
var inst_17920 = (state_17941[(7)]);
var state_17941__$1 = state_17941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17941__$1,(11),to,inst_17920);
} else {
if((state_val_17942 === (3))){
var inst_17939 = (state_17941[(2)]);
var state_17941__$1 = state_17941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17941__$1,inst_17939);
} else {
if((state_val_17942 === (12))){
var state_17941__$1 = state_17941;
var statearr_17949_17972 = state_17941__$1;
(statearr_17949_17972[(2)] = null);

(statearr_17949_17972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (2))){
var state_17941__$1 = state_17941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17941__$1,(4),from);
} else {
if((state_val_17942 === (11))){
var inst_17930 = (state_17941[(2)]);
var state_17941__$1 = state_17941;
if(cljs.core.truth_(inst_17930)){
var statearr_17950_17973 = state_17941__$1;
(statearr_17950_17973[(1)] = (12));

} else {
var statearr_17951_17974 = state_17941__$1;
(statearr_17951_17974[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (9))){
var state_17941__$1 = state_17941;
var statearr_17952_17975 = state_17941__$1;
(statearr_17952_17975[(2)] = null);

(statearr_17952_17975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (5))){
var state_17941__$1 = state_17941;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17953_17976 = state_17941__$1;
(statearr_17953_17976[(1)] = (8));

} else {
var statearr_17954_17977 = state_17941__$1;
(statearr_17954_17977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (14))){
var inst_17935 = (state_17941[(2)]);
var state_17941__$1 = state_17941;
var statearr_17955_17978 = state_17941__$1;
(statearr_17955_17978[(2)] = inst_17935);

(statearr_17955_17978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (10))){
var inst_17927 = (state_17941[(2)]);
var state_17941__$1 = state_17941;
var statearr_17956_17979 = state_17941__$1;
(statearr_17956_17979[(2)] = inst_17927);

(statearr_17956_17979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17942 === (8))){
var inst_17924 = cljs.core.async.close_BANG_.call(null,to);
var state_17941__$1 = state_17941;
var statearr_17957_17980 = state_17941__$1;
(statearr_17957_17980[(2)] = inst_17924);

(statearr_17957_17980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7725__auto___17966))
;
return ((function (switch__7663__auto__,c__7725__auto___17966){
return (function() {
var cljs$core$async$state_machine__7664__auto__ = null;
var cljs$core$async$state_machine__7664__auto____0 = (function (){
var statearr_17961 = [null,null,null,null,null,null,null,null];
(statearr_17961[(0)] = cljs$core$async$state_machine__7664__auto__);

(statearr_17961[(1)] = (1));

return statearr_17961;
});
var cljs$core$async$state_machine__7664__auto____1 = (function (state_17941){
while(true){
var ret_value__7665__auto__ = (function (){try{while(true){
var result__7666__auto__ = switch__7663__auto__.call(null,state_17941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7666__auto__;
}
break;
}
}catch (e17962){if((e17962 instanceof Object)){
var ex__7667__auto__ = e17962;
var statearr_17963_17981 = state_17941;
(statearr_17963_17981[(5)] = ex__7667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17982 = state_17941;
state_17941 = G__17982;
continue;
} else {
return ret_value__7665__auto__;
}
break;
}
});
cljs$core$async$state_machine__7664__auto__ = function(state_17941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7664__auto____1.call(this,state_17941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7664__auto____0;
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7664__auto____1;
return cljs$core$async$state_machine__7664__auto__;
})()
;})(switch__7663__auto__,c__7725__auto___17966))
})();
var state__7727__auto__ = (function (){var statearr_17964 = f__7726__auto__.call(null);
(statearr_17964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7725__auto___17966);

return statearr_17964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7727__auto__);
});})(c__7725__auto___17966))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__18166){
var vec__18167 = p__18166;
var v = cljs.core.nth.call(null,vec__18167,(0),null);
var p = cljs.core.nth.call(null,vec__18167,(1),null);
var job = vec__18167;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7725__auto___18349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7725__auto___18349,res,vec__18167,v,p,job,jobs,results){
return (function (){
var f__7726__auto__ = (function (){var switch__7663__auto__ = ((function (c__7725__auto___18349,res,vec__18167,v,p,job,jobs,results){
return (function (state_18172){
var state_val_18173 = (state_18172[(1)]);
if((state_val_18173 === (1))){
var state_18172__$1 = state_18172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18172__$1,(2),res,v);
} else {
if((state_val_18173 === (2))){
var inst_18169 = (state_18172[(2)]);
var inst_18170 = cljs.core.async.close_BANG_.call(null,res);
var state_18172__$1 = (function (){var statearr_18174 = state_18172;
(statearr_18174[(7)] = inst_18169);

return statearr_18174;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18172__$1,inst_18170);
} else {
return null;
}
}
});})(c__7725__auto___18349,res,vec__18167,v,p,job,jobs,results))
;
return ((function (switch__7663__auto__,c__7725__auto___18349,res,vec__18167,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____0 = (function (){
var statearr_18178 = [null,null,null,null,null,null,null,null];
(statearr_18178[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__);

(statearr_18178[(1)] = (1));

return statearr_18178;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____1 = (function (state_18172){
while(true){
var ret_value__7665__auto__ = (function (){try{while(true){
var result__7666__auto__ = switch__7663__auto__.call(null,state_18172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7666__auto__;
}
break;
}
}catch (e18179){if((e18179 instanceof Object)){
var ex__7667__auto__ = e18179;
var statearr_18180_18350 = state_18172;
(statearr_18180_18350[(5)] = ex__7667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18351 = state_18172;
state_18172 = G__18351;
continue;
} else {
return ret_value__7665__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__ = function(state_18172){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____1.call(this,state_18172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__;
})()
;})(switch__7663__auto__,c__7725__auto___18349,res,vec__18167,v,p,job,jobs,results))
})();
var state__7727__auto__ = (function (){var statearr_18181 = f__7726__auto__.call(null);
(statearr_18181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7725__auto___18349);

return statearr_18181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7727__auto__);
});})(c__7725__auto___18349,res,vec__18167,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18182){
var vec__18183 = p__18182;
var v = cljs.core.nth.call(null,vec__18183,(0),null);
var p = cljs.core.nth.call(null,vec__18183,(1),null);
var job = vec__18183;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5194__auto___18352 = n;
var __18353 = (0);
while(true){
if((__18353 < n__5194__auto___18352)){
var G__18184_18354 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18184_18354) {
case "compute":
var c__7725__auto___18356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18353,c__7725__auto___18356,G__18184_18354,n__5194__auto___18352,jobs,results,process,async){
return (function (){
var f__7726__auto__ = (function (){var switch__7663__auto__ = ((function (__18353,c__7725__auto___18356,G__18184_18354,n__5194__auto___18352,jobs,results,process,async){
return (function (state_18197){
var state_val_18198 = (state_18197[(1)]);
if((state_val_18198 === (1))){
var state_18197__$1 = state_18197;
var statearr_18199_18357 = state_18197__$1;
(statearr_18199_18357[(2)] = null);

(statearr_18199_18357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18198 === (2))){
var state_18197__$1 = state_18197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18197__$1,(4),jobs);
} else {
if((state_val_18198 === (3))){
var inst_18195 = (state_18197[(2)]);
var state_18197__$1 = state_18197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18197__$1,inst_18195);
} else {
if((state_val_18198 === (4))){
var inst_18187 = (state_18197[(2)]);
var inst_18188 = process.call(null,inst_18187);
var state_18197__$1 = state_18197;
if(cljs.core.truth_(inst_18188)){
var statearr_18200_18358 = state_18197__$1;
(statearr_18200_18358[(1)] = (5));

} else {
var statearr_18201_18359 = state_18197__$1;
(statearr_18201_18359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18198 === (5))){
var state_18197__$1 = state_18197;
var statearr_18202_18360 = state_18197__$1;
(statearr_18202_18360[(2)] = null);

(statearr_18202_18360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18198 === (6))){
var state_18197__$1 = state_18197;
var statearr_18203_18361 = state_18197__$1;
(statearr_18203_18361[(2)] = null);

(statearr_18203_18361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18198 === (7))){
var inst_18193 = (state_18197[(2)]);
var state_18197__$1 = state_18197;
var statearr_18204_18362 = state_18197__$1;
(statearr_18204_18362[(2)] = inst_18193);

(statearr_18204_18362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18353,c__7725__auto___18356,G__18184_18354,n__5194__auto___18352,jobs,results,process,async))
;
return ((function (__18353,switch__7663__auto__,c__7725__auto___18356,G__18184_18354,n__5194__auto___18352,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____0 = (function (){
var statearr_18208 = [null,null,null,null,null,null,null];
(statearr_18208[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__);

(statearr_18208[(1)] = (1));

return statearr_18208;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____1 = (function (state_18197){
while(true){
var ret_value__7665__auto__ = (function (){try{while(true){
var result__7666__auto__ = switch__7663__auto__.call(null,state_18197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7666__auto__;
}
break;
}
}catch (e18209){if((e18209 instanceof Object)){
var ex__7667__auto__ = e18209;
var statearr_18210_18363 = state_18197;
(statearr_18210_18363[(5)] = ex__7667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18364 = state_18197;
state_18197 = G__18364;
continue;
} else {
return ret_value__7665__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__ = function(state_18197){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____1.call(this,state_18197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__;
})()
;})(__18353,switch__7663__auto__,c__7725__auto___18356,G__18184_18354,n__5194__auto___18352,jobs,results,process,async))
})();
var state__7727__auto__ = (function (){var statearr_18211 = f__7726__auto__.call(null);
(statearr_18211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7725__auto___18356);

return statearr_18211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7727__auto__);
});})(__18353,c__7725__auto___18356,G__18184_18354,n__5194__auto___18352,jobs,results,process,async))
);


break;
case "async":
var c__7725__auto___18365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18353,c__7725__auto___18365,G__18184_18354,n__5194__auto___18352,jobs,results,process,async){
return (function (){
var f__7726__auto__ = (function (){var switch__7663__auto__ = ((function (__18353,c__7725__auto___18365,G__18184_18354,n__5194__auto___18352,jobs,results,process,async){
return (function (state_18224){
var state_val_18225 = (state_18224[(1)]);
if((state_val_18225 === (1))){
var state_18224__$1 = state_18224;
var statearr_18226_18366 = state_18224__$1;
(statearr_18226_18366[(2)] = null);

(statearr_18226_18366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18225 === (2))){
var state_18224__$1 = state_18224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18224__$1,(4),jobs);
} else {
if((state_val_18225 === (3))){
var inst_18222 = (state_18224[(2)]);
var state_18224__$1 = state_18224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18224__$1,inst_18222);
} else {
if((state_val_18225 === (4))){
var inst_18214 = (state_18224[(2)]);
var inst_18215 = async.call(null,inst_18214);
var state_18224__$1 = state_18224;
if(cljs.core.truth_(inst_18215)){
var statearr_18227_18367 = state_18224__$1;
(statearr_18227_18367[(1)] = (5));

} else {
var statearr_18228_18368 = state_18224__$1;
(statearr_18228_18368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18225 === (5))){
var state_18224__$1 = state_18224;
var statearr_18229_18369 = state_18224__$1;
(statearr_18229_18369[(2)] = null);

(statearr_18229_18369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18225 === (6))){
var state_18224__$1 = state_18224;
var statearr_18230_18370 = state_18224__$1;
(statearr_18230_18370[(2)] = null);

(statearr_18230_18370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18225 === (7))){
var inst_18220 = (state_18224[(2)]);
var state_18224__$1 = state_18224;
var statearr_18231_18371 = state_18224__$1;
(statearr_18231_18371[(2)] = inst_18220);

(statearr_18231_18371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18353,c__7725__auto___18365,G__18184_18354,n__5194__auto___18352,jobs,results,process,async))
;
return ((function (__18353,switch__7663__auto__,c__7725__auto___18365,G__18184_18354,n__5194__auto___18352,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____0 = (function (){
var statearr_18235 = [null,null,null,null,null,null,null];
(statearr_18235[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__);

(statearr_18235[(1)] = (1));

return statearr_18235;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____1 = (function (state_18224){
while(true){
var ret_value__7665__auto__ = (function (){try{while(true){
var result__7666__auto__ = switch__7663__auto__.call(null,state_18224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7666__auto__;
}
break;
}
}catch (e18236){if((e18236 instanceof Object)){
var ex__7667__auto__ = e18236;
var statearr_18237_18372 = state_18224;
(statearr_18237_18372[(5)] = ex__7667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18373 = state_18224;
state_18224 = G__18373;
continue;
} else {
return ret_value__7665__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__ = function(state_18224){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____1.call(this,state_18224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__;
})()
;})(__18353,switch__7663__auto__,c__7725__auto___18365,G__18184_18354,n__5194__auto___18352,jobs,results,process,async))
})();
var state__7727__auto__ = (function (){var statearr_18238 = f__7726__auto__.call(null);
(statearr_18238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7725__auto___18365);

return statearr_18238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7727__auto__);
});})(__18353,c__7725__auto___18365,G__18184_18354,n__5194__auto___18352,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18374 = (__18353 + (1));
__18353 = G__18374;
continue;
} else {
}
break;
}

var c__7725__auto___18375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7725__auto___18375,jobs,results,process,async){
return (function (){
var f__7726__auto__ = (function (){var switch__7663__auto__ = ((function (c__7725__auto___18375,jobs,results,process,async){
return (function (state_18260){
var state_val_18261 = (state_18260[(1)]);
if((state_val_18261 === (1))){
var state_18260__$1 = state_18260;
var statearr_18262_18376 = state_18260__$1;
(statearr_18262_18376[(2)] = null);

(statearr_18262_18376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (2))){
var state_18260__$1 = state_18260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18260__$1,(4),from);
} else {
if((state_val_18261 === (3))){
var inst_18258 = (state_18260[(2)]);
var state_18260__$1 = state_18260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18260__$1,inst_18258);
} else {
if((state_val_18261 === (4))){
var inst_18241 = (state_18260[(7)]);
var inst_18241__$1 = (state_18260[(2)]);
var inst_18242 = (inst_18241__$1 == null);
var state_18260__$1 = (function (){var statearr_18263 = state_18260;
(statearr_18263[(7)] = inst_18241__$1);

return statearr_18263;
})();
if(cljs.core.truth_(inst_18242)){
var statearr_18264_18377 = state_18260__$1;
(statearr_18264_18377[(1)] = (5));

} else {
var statearr_18265_18378 = state_18260__$1;
(statearr_18265_18378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (5))){
var inst_18244 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18260__$1 = state_18260;
var statearr_18266_18379 = state_18260__$1;
(statearr_18266_18379[(2)] = inst_18244);

(statearr_18266_18379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (6))){
var inst_18246 = (state_18260[(8)]);
var inst_18241 = (state_18260[(7)]);
var inst_18246__$1 = cljs.core.async.chan.call(null,(1));
var inst_18247 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18248 = [inst_18241,inst_18246__$1];
var inst_18249 = (new cljs.core.PersistentVector(null,2,(5),inst_18247,inst_18248,null));
var state_18260__$1 = (function (){var statearr_18267 = state_18260;
(statearr_18267[(8)] = inst_18246__$1);

return statearr_18267;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18260__$1,(8),jobs,inst_18249);
} else {
if((state_val_18261 === (7))){
var inst_18256 = (state_18260[(2)]);
var state_18260__$1 = state_18260;
var statearr_18268_18380 = state_18260__$1;
(statearr_18268_18380[(2)] = inst_18256);

(statearr_18268_18380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18261 === (8))){
var inst_18246 = (state_18260[(8)]);
var inst_18251 = (state_18260[(2)]);
var state_18260__$1 = (function (){var statearr_18269 = state_18260;
(statearr_18269[(9)] = inst_18251);

return statearr_18269;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18260__$1,(9),results,inst_18246);
} else {
if((state_val_18261 === (9))){
var inst_18253 = (state_18260[(2)]);
var state_18260__$1 = (function (){var statearr_18270 = state_18260;
(statearr_18270[(10)] = inst_18253);

return statearr_18270;
})();
var statearr_18271_18381 = state_18260__$1;
(statearr_18271_18381[(2)] = null);

(statearr_18271_18381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7725__auto___18375,jobs,results,process,async))
;
return ((function (switch__7663__auto__,c__7725__auto___18375,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____0 = (function (){
var statearr_18275 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18275[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__);

(statearr_18275[(1)] = (1));

return statearr_18275;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____1 = (function (state_18260){
while(true){
var ret_value__7665__auto__ = (function (){try{while(true){
var result__7666__auto__ = switch__7663__auto__.call(null,state_18260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7666__auto__;
}
break;
}
}catch (e18276){if((e18276 instanceof Object)){
var ex__7667__auto__ = e18276;
var statearr_18277_18382 = state_18260;
(statearr_18277_18382[(5)] = ex__7667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18383 = state_18260;
state_18260 = G__18383;
continue;
} else {
return ret_value__7665__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__ = function(state_18260){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____1.call(this,state_18260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__;
})()
;})(switch__7663__auto__,c__7725__auto___18375,jobs,results,process,async))
})();
var state__7727__auto__ = (function (){var statearr_18278 = f__7726__auto__.call(null);
(statearr_18278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7725__auto___18375);

return statearr_18278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7727__auto__);
});})(c__7725__auto___18375,jobs,results,process,async))
);


var c__7725__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7725__auto__,jobs,results,process,async){
return (function (){
var f__7726__auto__ = (function (){var switch__7663__auto__ = ((function (c__7725__auto__,jobs,results,process,async){
return (function (state_18316){
var state_val_18317 = (state_18316[(1)]);
if((state_val_18317 === (7))){
var inst_18312 = (state_18316[(2)]);
var state_18316__$1 = state_18316;
var statearr_18318_18384 = state_18316__$1;
(statearr_18318_18384[(2)] = inst_18312);

(statearr_18318_18384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18317 === (20))){
var state_18316__$1 = state_18316;
var statearr_18319_18385 = state_18316__$1;
(statearr_18319_18385[(2)] = null);

(statearr_18319_18385[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18317 === (1))){
var state_18316__$1 = state_18316;
var statearr_18320_18386 = state_18316__$1;
(statearr_18320_18386[(2)] = null);

(statearr_18320_18386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18317 === (4))){
var inst_18281 = (state_18316[(7)]);
var inst_18281__$1 = (state_18316[(2)]);
var inst_18282 = (inst_18281__$1 == null);
var state_18316__$1 = (function (){var statearr_18321 = state_18316;
(statearr_18321[(7)] = inst_18281__$1);

return statearr_18321;
})();
if(cljs.core.truth_(inst_18282)){
var statearr_18322_18387 = state_18316__$1;
(statearr_18322_18387[(1)] = (5));

} else {
var statearr_18323_18388 = state_18316__$1;
(statearr_18323_18388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18317 === (15))){
var inst_18294 = (state_18316[(8)]);
var state_18316__$1 = state_18316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18316__$1,(18),to,inst_18294);
} else {
if((state_val_18317 === (21))){
var inst_18307 = (state_18316[(2)]);
var state_18316__$1 = state_18316;
var statearr_18324_18389 = state_18316__$1;
(statearr_18324_18389[(2)] = inst_18307);

(statearr_18324_18389[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18317 === (13))){
var inst_18309 = (state_18316[(2)]);
var state_18316__$1 = (function (){var statearr_18325 = state_18316;
(statearr_18325[(9)] = inst_18309);

return statearr_18325;
})();
var statearr_18326_18390 = state_18316__$1;
(statearr_18326_18390[(2)] = null);

(statearr_18326_18390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18317 === (6))){
var inst_18281 = (state_18316[(7)]);
var state_18316__$1 = state_18316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18316__$1,(11),inst_18281);
} else {
if((state_val_18317 === (17))){
var inst_18302 = (state_18316[(2)]);
var state_18316__$1 = state_18316;
if(cljs.core.truth_(inst_18302)){
var statearr_18327_18391 = state_18316__$1;
(statearr_18327_18391[(1)] = (19));

} else {
var statearr_18328_18392 = state_18316__$1;
(statearr_18328_18392[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18317 === (3))){
var inst_18314 = (state_18316[(2)]);
var state_18316__$1 = state_18316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18316__$1,inst_18314);
} else {
if((state_val_18317 === (12))){
var inst_18291 = (state_18316[(10)]);
var state_18316__$1 = state_18316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18316__$1,(14),inst_18291);
} else {
if((state_val_18317 === (2))){
var state_18316__$1 = state_18316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18316__$1,(4),results);
} else {
if((state_val_18317 === (19))){
var state_18316__$1 = state_18316;
var statearr_18329_18393 = state_18316__$1;
(statearr_18329_18393[(2)] = null);

(statearr_18329_18393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18317 === (11))){
var inst_18291 = (state_18316[(2)]);
var state_18316__$1 = (function (){var statearr_18330 = state_18316;
(statearr_18330[(10)] = inst_18291);

return statearr_18330;
})();
var statearr_18331_18394 = state_18316__$1;
(statearr_18331_18394[(2)] = null);

(statearr_18331_18394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18317 === (9))){
var state_18316__$1 = state_18316;
var statearr_18332_18395 = state_18316__$1;
(statearr_18332_18395[(2)] = null);

(statearr_18332_18395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18317 === (5))){
var state_18316__$1 = state_18316;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18333_18396 = state_18316__$1;
(statearr_18333_18396[(1)] = (8));

} else {
var statearr_18334_18397 = state_18316__$1;
(statearr_18334_18397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18317 === (14))){
var inst_18296 = (state_18316[(11)]);
var inst_18294 = (state_18316[(8)]);
var inst_18294__$1 = (state_18316[(2)]);
var inst_18295 = (inst_18294__$1 == null);
var inst_18296__$1 = cljs.core.not.call(null,inst_18295);
var state_18316__$1 = (function (){var statearr_18335 = state_18316;
(statearr_18335[(11)] = inst_18296__$1);

(statearr_18335[(8)] = inst_18294__$1);

return statearr_18335;
})();
if(inst_18296__$1){
var statearr_18336_18398 = state_18316__$1;
(statearr_18336_18398[(1)] = (15));

} else {
var statearr_18337_18399 = state_18316__$1;
(statearr_18337_18399[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18317 === (16))){
var inst_18296 = (state_18316[(11)]);
var state_18316__$1 = state_18316;
var statearr_18338_18400 = state_18316__$1;
(statearr_18338_18400[(2)] = inst_18296);

(statearr_18338_18400[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18317 === (10))){
var inst_18288 = (state_18316[(2)]);
var state_18316__$1 = state_18316;
var statearr_18339_18401 = state_18316__$1;
(statearr_18339_18401[(2)] = inst_18288);

(statearr_18339_18401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18317 === (18))){
var inst_18299 = (state_18316[(2)]);
var state_18316__$1 = state_18316;
var statearr_18340_18402 = state_18316__$1;
(statearr_18340_18402[(2)] = inst_18299);

(statearr_18340_18402[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18317 === (8))){
var inst_18285 = cljs.core.async.close_BANG_.call(null,to);
var state_18316__$1 = state_18316;
var statearr_18341_18403 = state_18316__$1;
(statearr_18341_18403[(2)] = inst_18285);

(statearr_18341_18403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7725__auto__,jobs,results,process,async))
;
return ((function (switch__7663__auto__,c__7725__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____0 = (function (){
var statearr_18345 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18345[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__);

(statearr_18345[(1)] = (1));

return statearr_18345;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____1 = (function (state_18316){
while(true){
var ret_value__7665__auto__ = (function (){try{while(true){
var result__7666__auto__ = switch__7663__auto__.call(null,state_18316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7666__auto__;
}
break;
}
}catch (e18346){if((e18346 instanceof Object)){
var ex__7667__auto__ = e18346;
var statearr_18347_18404 = state_18316;
(statearr_18347_18404[(5)] = ex__7667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18405 = state_18316;
state_18316 = G__18405;
continue;
} else {
return ret_value__7665__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__ = function(state_18316){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____1.call(this,state_18316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7664__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7664__auto__;
})()
;})(switch__7663__auto__,c__7725__auto__,jobs,results,process,async))
})();
var state__7727__auto__ = (function (){var statearr_18348 = f__7726__auto__.call(null);
(statearr_18348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7725__auto__);

return statearr_18348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7727__auto__);
});})(c__7725__auto__,jobs,results,process,async))
);

return c__7725__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__18407 = arguments.length;
switch (G__18407) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__18410 = arguments.length;
switch (G__18410) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__18413 = arguments.length;
switch (G__18413) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7725__auto___18465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7725__auto___18465,tc,fc){
return (function (){
var f__7726__auto__ = (function (){var switch__7663__auto__ = ((function (c__7725__auto___18465,tc,fc){
return (function (state_18439){
var state_val_18440 = (state_18439[(1)]);
if((state_val_18440 === (7))){
var inst_18435 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
var statearr_18441_18466 = state_18439__$1;
(statearr_18441_18466[(2)] = inst_18435);

(statearr_18441_18466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (1))){
var state_18439__$1 = state_18439;
var statearr_18442_18467 = state_18439__$1;
(statearr_18442_18467[(2)] = null);

(statearr_18442_18467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (4))){
var inst_18416 = (state_18439[(7)]);
var inst_18416__$1 = (state_18439[(2)]);
var inst_18417 = (inst_18416__$1 == null);
var state_18439__$1 = (function (){var statearr_18443 = state_18439;
(statearr_18443[(7)] = inst_18416__$1);

return statearr_18443;
})();
if(cljs.core.truth_(inst_18417)){
var statearr_18444_18468 = state_18439__$1;
(statearr_18444_18468[(1)] = (5));

} else {
var statearr_18445_18469 = state_18439__$1;
(statearr_18445_18469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (13))){
var state_18439__$1 = state_18439;
var statearr_18446_18470 = state_18439__$1;
(statearr_18446_18470[(2)] = null);

(statearr_18446_18470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (6))){
var inst_18416 = (state_18439[(7)]);
var inst_18422 = p.call(null,inst_18416);
var state_18439__$1 = state_18439;
if(cljs.core.truth_(inst_18422)){
var statearr_18447_18471 = state_18439__$1;
(statearr_18447_18471[(1)] = (9));

} else {
var statearr_18448_18472 = state_18439__$1;
(statearr_18448_18472[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (3))){
var inst_18437 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18439__$1,inst_18437);
} else {
if((state_val_18440 === (12))){
var state_18439__$1 = state_18439;
var statearr_18449_18473 = state_18439__$1;
(statearr_18449_18473[(2)] = null);

(statearr_18449_18473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (2))){
var state_18439__$1 = state_18439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18439__$1,(4),ch);
} else {
if((state_val_18440 === (11))){
var inst_18416 = (state_18439[(7)]);
var inst_18426 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18439__$1,(8),inst_18426,inst_18416);
} else {
if((state_val_18440 === (9))){
var state_18439__$1 = state_18439;
var statearr_18450_18474 = state_18439__$1;
(statearr_18450_18474[(2)] = tc);

(statearr_18450_18474[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (5))){
var inst_18419 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18420 = cljs.core.async.close_BANG_.call(null,fc);
var state_18439__$1 = (function (){var statearr_18451 = state_18439;
(statearr_18451[(8)] = inst_18419);

return statearr_18451;
})();
var statearr_18452_18475 = state_18439__$1;
(statearr_18452_18475[(2)] = inst_18420);

(statearr_18452_18475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (14))){
var inst_18433 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
var statearr_18453_18476 = state_18439__$1;
(statearr_18453_18476[(2)] = inst_18433);

(statearr_18453_18476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (10))){
var state_18439__$1 = state_18439;
var statearr_18454_18477 = state_18439__$1;
(statearr_18454_18477[(2)] = fc);

(statearr_18454_18477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18440 === (8))){
var inst_18428 = (state_18439[(2)]);
var state_18439__$1 = state_18439;
if(cljs.core.truth_(inst_18428)){
var statearr_18455_18478 = state_18439__$1;
(statearr_18455_18478[(1)] = (12));

} else {
var statearr_18456_18479 = state_18439__$1;
(statearr_18456_18479[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7725__auto___18465,tc,fc))
;
return ((function (switch__7663__auto__,c__7725__auto___18465,tc,fc){
return (function() {
var cljs$core$async$state_machine__7664__auto__ = null;
var cljs$core$async$state_machine__7664__auto____0 = (function (){
var statearr_18460 = [null,null,null,null,null,null,null,null,null];
(statearr_18460[(0)] = cljs$core$async$state_machine__7664__auto__);

(statearr_18460[(1)] = (1));

return statearr_18460;
});
var cljs$core$async$state_machine__7664__auto____1 = (function (state_18439){
while(true){
var ret_value__7665__auto__ = (function (){try{while(true){
var result__7666__auto__ = switch__7663__auto__.call(null,state_18439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7666__auto__;
}
break;
}
}catch (e18461){if((e18461 instanceof Object)){
var ex__7667__auto__ = e18461;
var statearr_18462_18480 = state_18439;
(statearr_18462_18480[(5)] = ex__7667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18481 = state_18439;
state_18439 = G__18481;
continue;
} else {
return ret_value__7665__auto__;
}
break;
}
});
cljs$core$async$state_machine__7664__auto__ = function(state_18439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7664__auto____1.call(this,state_18439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7664__auto____0;
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7664__auto____1;
return cljs$core$async$state_machine__7664__auto__;
})()
;})(switch__7663__auto__,c__7725__auto___18465,tc,fc))
})();
var state__7727__auto__ = (function (){var statearr_18463 = f__7726__auto__.call(null);
(statearr_18463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7725__auto___18465);

return statearr_18463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7727__auto__);
});})(c__7725__auto___18465,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7725__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7725__auto__){
return (function (){
var f__7726__auto__ = (function (){var switch__7663__auto__ = ((function (c__7725__auto__){
return (function (state_18528){
var state_val_18529 = (state_18528[(1)]);
if((state_val_18529 === (1))){
var inst_18514 = init;
var state_18528__$1 = (function (){var statearr_18530 = state_18528;
(statearr_18530[(7)] = inst_18514);

return statearr_18530;
})();
var statearr_18531_18546 = state_18528__$1;
(statearr_18531_18546[(2)] = null);

(statearr_18531_18546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18529 === (2))){
var state_18528__$1 = state_18528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18528__$1,(4),ch);
} else {
if((state_val_18529 === (3))){
var inst_18526 = (state_18528[(2)]);
var state_18528__$1 = state_18528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18528__$1,inst_18526);
} else {
if((state_val_18529 === (4))){
var inst_18517 = (state_18528[(8)]);
var inst_18517__$1 = (state_18528[(2)]);
var inst_18518 = (inst_18517__$1 == null);
var state_18528__$1 = (function (){var statearr_18532 = state_18528;
(statearr_18532[(8)] = inst_18517__$1);

return statearr_18532;
})();
if(cljs.core.truth_(inst_18518)){
var statearr_18533_18547 = state_18528__$1;
(statearr_18533_18547[(1)] = (5));

} else {
var statearr_18534_18548 = state_18528__$1;
(statearr_18534_18548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18529 === (5))){
var inst_18514 = (state_18528[(7)]);
var state_18528__$1 = state_18528;
var statearr_18535_18549 = state_18528__$1;
(statearr_18535_18549[(2)] = inst_18514);

(statearr_18535_18549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18529 === (6))){
var inst_18514 = (state_18528[(7)]);
var inst_18517 = (state_18528[(8)]);
var inst_18521 = f.call(null,inst_18514,inst_18517);
var inst_18514__$1 = inst_18521;
var state_18528__$1 = (function (){var statearr_18536 = state_18528;
(statearr_18536[(7)] = inst_18514__$1);

return statearr_18536;
})();
var statearr_18537_18550 = state_18528__$1;
(statearr_18537_18550[(2)] = null);

(statearr_18537_18550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18529 === (7))){
var inst_18524 = (state_18528[(2)]);
var state_18528__$1 = state_18528;
var statearr_18538_18551 = state_18528__$1;
(statearr_18538_18551[(2)] = inst_18524);

(statearr_18538_18551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__7725__auto__))
;
return ((function (switch__7663__auto__,c__7725__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7664__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7664__auto____0 = (function (){
var statearr_18542 = [null,null,null,null,null,null,null,null,null];
(statearr_18542[(0)] = cljs$core$async$reduce_$_state_machine__7664__auto__);

(statearr_18542[(1)] = (1));

return statearr_18542;
});
var cljs$core$async$reduce_$_state_machine__7664__auto____1 = (function (state_18528){
while(true){
var ret_value__7665__auto__ = (function (){try{while(true){
var result__7666__auto__ = switch__7663__auto__.call(null,state_18528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7666__auto__;
}
break;
}
}catch (e18543){if((e18543 instanceof Object)){
var ex__7667__auto__ = e18543;
var statearr_18544_18552 = state_18528;
(statearr_18544_18552[(5)] = ex__7667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18553 = state_18528;
state_18528 = G__18553;
continue;
} else {
return ret_value__7665__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7664__auto__ = function(state_18528){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7664__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7664__auto____1.call(this,state_18528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7664__auto____0;
cljs$core$async$reduce_$_state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7664__auto____1;
return cljs$core$async$reduce_$_state_machine__7664__auto__;
})()
;})(switch__7663__auto__,c__7725__auto__))
})();
var state__7727__auto__ = (function (){var statearr_18545 = f__7726__auto__.call(null);
(statearr_18545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7725__auto__);

return statearr_18545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7727__auto__);
});})(c__7725__auto__))
);

return c__7725__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__18555 = arguments.length;
switch (G__18555) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7725__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7725__auto__){
return (function (){
var f__7726__auto__ = (function (){var switch__7663__auto__ = ((function (c__7725__auto__){
return (function (state_18580){
var state_val_18581 = (state_18580[(1)]);
if((state_val_18581 === (7))){
var inst_18562 = (state_18580[(2)]);
var state_18580__$1 = state_18580;
var statearr_18582_18606 = state_18580__$1;
(statearr_18582_18606[(2)] = inst_18562);

(statearr_18582_18606[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (1))){
var inst_18556 = cljs.core.seq.call(null,coll);
var inst_18557 = inst_18556;
var state_18580__$1 = (function (){var statearr_18583 = state_18580;
(statearr_18583[(7)] = inst_18557);

return statearr_18583;
})();
var statearr_18584_18607 = state_18580__$1;
(statearr_18584_18607[(2)] = null);

(statearr_18584_18607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (4))){
var inst_18557 = (state_18580[(7)]);
var inst_18560 = cljs.core.first.call(null,inst_18557);
var state_18580__$1 = state_18580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18580__$1,(7),ch,inst_18560);
} else {
if((state_val_18581 === (13))){
var inst_18574 = (state_18580[(2)]);
var state_18580__$1 = state_18580;
var statearr_18585_18608 = state_18580__$1;
(statearr_18585_18608[(2)] = inst_18574);

(statearr_18585_18608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (6))){
var inst_18565 = (state_18580[(2)]);
var state_18580__$1 = state_18580;
if(cljs.core.truth_(inst_18565)){
var statearr_18586_18609 = state_18580__$1;
(statearr_18586_18609[(1)] = (8));

} else {
var statearr_18587_18610 = state_18580__$1;
(statearr_18587_18610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (3))){
var inst_18578 = (state_18580[(2)]);
var state_18580__$1 = state_18580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18580__$1,inst_18578);
} else {
if((state_val_18581 === (12))){
var state_18580__$1 = state_18580;
var statearr_18588_18611 = state_18580__$1;
(statearr_18588_18611[(2)] = null);

(statearr_18588_18611[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (2))){
var inst_18557 = (state_18580[(7)]);
var state_18580__$1 = state_18580;
if(cljs.core.truth_(inst_18557)){
var statearr_18589_18612 = state_18580__$1;
(statearr_18589_18612[(1)] = (4));

} else {
var statearr_18590_18613 = state_18580__$1;
(statearr_18590_18613[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (11))){
var inst_18571 = cljs.core.async.close_BANG_.call(null,ch);
var state_18580__$1 = state_18580;
var statearr_18591_18614 = state_18580__$1;
(statearr_18591_18614[(2)] = inst_18571);

(statearr_18591_18614[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (9))){
var state_18580__$1 = state_18580;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18592_18615 = state_18580__$1;
(statearr_18592_18615[(1)] = (11));

} else {
var statearr_18593_18616 = state_18580__$1;
(statearr_18593_18616[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (5))){
var inst_18557 = (state_18580[(7)]);
var state_18580__$1 = state_18580;
var statearr_18594_18617 = state_18580__$1;
(statearr_18594_18617[(2)] = inst_18557);

(statearr_18594_18617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (10))){
var inst_18576 = (state_18580[(2)]);
var state_18580__$1 = state_18580;
var statearr_18595_18618 = state_18580__$1;
(statearr_18595_18618[(2)] = inst_18576);

(statearr_18595_18618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (8))){
var inst_18557 = (state_18580[(7)]);
var inst_18567 = cljs.core.next.call(null,inst_18557);
var inst_18557__$1 = inst_18567;
var state_18580__$1 = (function (){var statearr_18596 = state_18580;
(statearr_18596[(7)] = inst_18557__$1);

return statearr_18596;
})();
var statearr_18597_18619 = state_18580__$1;
(statearr_18597_18619[(2)] = null);

(statearr_18597_18619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7725__auto__))
;
return ((function (switch__7663__auto__,c__7725__auto__){
return (function() {
var cljs$core$async$state_machine__7664__auto__ = null;
var cljs$core$async$state_machine__7664__auto____0 = (function (){
var statearr_18601 = [null,null,null,null,null,null,null,null];
(statearr_18601[(0)] = cljs$core$async$state_machine__7664__auto__);

(statearr_18601[(1)] = (1));

return statearr_18601;
});
var cljs$core$async$state_machine__7664__auto____1 = (function (state_18580){
while(true){
var ret_value__7665__auto__ = (function (){try{while(true){
var result__7666__auto__ = switch__7663__auto__.call(null,state_18580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7666__auto__;
}
break;
}
}catch (e18602){if((e18602 instanceof Object)){
var ex__7667__auto__ = e18602;
var statearr_18603_18620 = state_18580;
(statearr_18603_18620[(5)] = ex__7667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18621 = state_18580;
state_18580 = G__18621;
continue;
} else {
return ret_value__7665__auto__;
}
break;
}
});
cljs$core$async$state_machine__7664__auto__ = function(state_18580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7664__auto____1.call(this,state_18580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7664__auto____0;
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7664__auto____1;
return cljs$core$async$state_machine__7664__auto__;
})()
;})(switch__7663__auto__,c__7725__auto__))
})();
var state__7727__auto__ = (function (){var statearr_18604 = f__7726__auto__.call(null);
(statearr_18604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7725__auto__);

return statearr_18604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7727__auto__);
});})(c__7725__auto__))
);

return c__7725__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj18623 = {};
return obj18623;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4297__auto__ = _;
if(and__4297__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4945__auto__ = (((_ == null))?null:_);
return (function (){var or__4309__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj18625 = {};
return obj18625;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t18847 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18847 = (function (mult,ch,cs,meta18848){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta18848 = meta18848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18849,meta18848__$1){
var self__ = this;
var _18849__$1 = this;
return (new cljs.core.async.t18847(self__.mult,self__.ch,self__.cs,meta18848__$1));
});})(cs))
;

cljs.core.async.t18847.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18849){
var self__ = this;
var _18849__$1 = this;
return self__.meta18848;
});})(cs))
;

cljs.core.async.t18847.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t18847.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t18847.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t18847.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t18847.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t18847.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18848","meta18848",1006988802,null)], null);
});})(cs))
;

cljs.core.async.t18847.cljs$lang$type = true;

cljs.core.async.t18847.cljs$lang$ctorStr = "cljs.core.async/t18847";

cljs.core.async.t18847.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t18847");
});})(cs))
;

cljs.core.async.__GT_t18847 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t18847(mult__$1,ch__$1,cs__$1,meta18848){
return (new cljs.core.async.t18847(mult__$1,ch__$1,cs__$1,meta18848));
});})(cs))
;

}

return (new cljs.core.async.t18847(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7725__auto___19068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7725__auto___19068,cs,m,dchan,dctr,done){
return (function (){
var f__7726__auto__ = (function (){var switch__7663__auto__ = ((function (c__7725__auto___19068,cs,m,dchan,dctr,done){
return (function (state_18980){
var state_val_18981 = (state_18980[(1)]);
if((state_val_18981 === (7))){
var inst_18976 = (state_18980[(2)]);
var state_18980__$1 = state_18980;
var statearr_18982_19069 = state_18980__$1;
(statearr_18982_19069[(2)] = inst_18976);

(statearr_18982_19069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (20))){
var inst_18881 = (state_18980[(7)]);
var inst_18891 = cljs.core.first.call(null,inst_18881);
var inst_18892 = cljs.core.nth.call(null,inst_18891,(0),null);
var inst_18893 = cljs.core.nth.call(null,inst_18891,(1),null);
var state_18980__$1 = (function (){var statearr_18983 = state_18980;
(statearr_18983[(8)] = inst_18892);

return statearr_18983;
})();
if(cljs.core.truth_(inst_18893)){
var statearr_18984_19070 = state_18980__$1;
(statearr_18984_19070[(1)] = (22));

} else {
var statearr_18985_19071 = state_18980__$1;
(statearr_18985_19071[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (27))){
var inst_18928 = (state_18980[(9)]);
var inst_18852 = (state_18980[(10)]);
var inst_18923 = (state_18980[(11)]);
var inst_18921 = (state_18980[(12)]);
var inst_18928__$1 = cljs.core._nth.call(null,inst_18921,inst_18923);
var inst_18929 = cljs.core.async.put_BANG_.call(null,inst_18928__$1,inst_18852,done);
var state_18980__$1 = (function (){var statearr_18986 = state_18980;
(statearr_18986[(9)] = inst_18928__$1);

return statearr_18986;
})();
if(cljs.core.truth_(inst_18929)){
var statearr_18987_19072 = state_18980__$1;
(statearr_18987_19072[(1)] = (30));

} else {
var statearr_18988_19073 = state_18980__$1;
(statearr_18988_19073[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (1))){
var state_18980__$1 = state_18980;
var statearr_18989_19074 = state_18980__$1;
(statearr_18989_19074[(2)] = null);

(statearr_18989_19074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (24))){
var inst_18881 = (state_18980[(7)]);
var inst_18898 = (state_18980[(2)]);
var inst_18899 = cljs.core.next.call(null,inst_18881);
var inst_18861 = inst_18899;
var inst_18862 = null;
var inst_18863 = (0);
var inst_18864 = (0);
var state_18980__$1 = (function (){var statearr_18990 = state_18980;
(statearr_18990[(13)] = inst_18898);

(statearr_18990[(14)] = inst_18864);

(statearr_18990[(15)] = inst_18861);

(statearr_18990[(16)] = inst_18863);

(statearr_18990[(17)] = inst_18862);

return statearr_18990;
})();
var statearr_18991_19075 = state_18980__$1;
(statearr_18991_19075[(2)] = null);

(statearr_18991_19075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (39))){
var state_18980__$1 = state_18980;
var statearr_18995_19076 = state_18980__$1;
(statearr_18995_19076[(2)] = null);

(statearr_18995_19076[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (4))){
var inst_18852 = (state_18980[(10)]);
var inst_18852__$1 = (state_18980[(2)]);
var inst_18853 = (inst_18852__$1 == null);
var state_18980__$1 = (function (){var statearr_18996 = state_18980;
(statearr_18996[(10)] = inst_18852__$1);

return statearr_18996;
})();
if(cljs.core.truth_(inst_18853)){
var statearr_18997_19077 = state_18980__$1;
(statearr_18997_19077[(1)] = (5));

} else {
var statearr_18998_19078 = state_18980__$1;
(statearr_18998_19078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (15))){
var inst_18864 = (state_18980[(14)]);
var inst_18861 = (state_18980[(15)]);
var inst_18863 = (state_18980[(16)]);
var inst_18862 = (state_18980[(17)]);
var inst_18877 = (state_18980[(2)]);
var inst_18878 = (inst_18864 + (1));
var tmp18992 = inst_18861;
var tmp18993 = inst_18863;
var tmp18994 = inst_18862;
var inst_18861__$1 = tmp18992;
var inst_18862__$1 = tmp18994;
var inst_18863__$1 = tmp18993;
var inst_18864__$1 = inst_18878;
var state_18980__$1 = (function (){var statearr_18999 = state_18980;
(statearr_18999[(14)] = inst_18864__$1);

(statearr_18999[(15)] = inst_18861__$1);

(statearr_18999[(16)] = inst_18863__$1);

(statearr_18999[(17)] = inst_18862__$1);

(statearr_18999[(18)] = inst_18877);

return statearr_18999;
})();
var statearr_19000_19079 = state_18980__$1;
(statearr_19000_19079[(2)] = null);

(statearr_19000_19079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (21))){
var inst_18902 = (state_18980[(2)]);
var state_18980__$1 = state_18980;
var statearr_19004_19080 = state_18980__$1;
(statearr_19004_19080[(2)] = inst_18902);

(statearr_19004_19080[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (31))){
var inst_18928 = (state_18980[(9)]);
var inst_18932 = done.call(null,null);
var inst_18933 = cljs.core.async.untap_STAR_.call(null,m,inst_18928);
var state_18980__$1 = (function (){var statearr_19005 = state_18980;
(statearr_19005[(19)] = inst_18932);

return statearr_19005;
})();
var statearr_19006_19081 = state_18980__$1;
(statearr_19006_19081[(2)] = inst_18933);

(statearr_19006_19081[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (32))){
var inst_18922 = (state_18980[(20)]);
var inst_18923 = (state_18980[(11)]);
var inst_18920 = (state_18980[(21)]);
var inst_18921 = (state_18980[(12)]);
var inst_18935 = (state_18980[(2)]);
var inst_18936 = (inst_18923 + (1));
var tmp19001 = inst_18922;
var tmp19002 = inst_18920;
var tmp19003 = inst_18921;
var inst_18920__$1 = tmp19002;
var inst_18921__$1 = tmp19003;
var inst_18922__$1 = tmp19001;
var inst_18923__$1 = inst_18936;
var state_18980__$1 = (function (){var statearr_19007 = state_18980;
(statearr_19007[(20)] = inst_18922__$1);

(statearr_19007[(11)] = inst_18923__$1);

(statearr_19007[(21)] = inst_18920__$1);

(statearr_19007[(22)] = inst_18935);

(statearr_19007[(12)] = inst_18921__$1);

return statearr_19007;
})();
var statearr_19008_19082 = state_18980__$1;
(statearr_19008_19082[(2)] = null);

(statearr_19008_19082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (40))){
var inst_18948 = (state_18980[(23)]);
var inst_18952 = done.call(null,null);
var inst_18953 = cljs.core.async.untap_STAR_.call(null,m,inst_18948);
var state_18980__$1 = (function (){var statearr_19009 = state_18980;
(statearr_19009[(24)] = inst_18952);

return statearr_19009;
})();
var statearr_19010_19083 = state_18980__$1;
(statearr_19010_19083[(2)] = inst_18953);

(statearr_19010_19083[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (33))){
var inst_18939 = (state_18980[(25)]);
var inst_18941 = cljs.core.chunked_seq_QMARK_.call(null,inst_18939);
var state_18980__$1 = state_18980;
if(inst_18941){
var statearr_19011_19084 = state_18980__$1;
(statearr_19011_19084[(1)] = (36));

} else {
var statearr_19012_19085 = state_18980__$1;
(statearr_19012_19085[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (13))){
var inst_18871 = (state_18980[(26)]);
var inst_18874 = cljs.core.async.close_BANG_.call(null,inst_18871);
var state_18980__$1 = state_18980;
var statearr_19013_19086 = state_18980__$1;
(statearr_19013_19086[(2)] = inst_18874);

(statearr_19013_19086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (22))){
var inst_18892 = (state_18980[(8)]);
var inst_18895 = cljs.core.async.close_BANG_.call(null,inst_18892);
var state_18980__$1 = state_18980;
var statearr_19014_19087 = state_18980__$1;
(statearr_19014_19087[(2)] = inst_18895);

(statearr_19014_19087[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (36))){
var inst_18939 = (state_18980[(25)]);
var inst_18943 = cljs.core.chunk_first.call(null,inst_18939);
var inst_18944 = cljs.core.chunk_rest.call(null,inst_18939);
var inst_18945 = cljs.core.count.call(null,inst_18943);
var inst_18920 = inst_18944;
var inst_18921 = inst_18943;
var inst_18922 = inst_18945;
var inst_18923 = (0);
var state_18980__$1 = (function (){var statearr_19015 = state_18980;
(statearr_19015[(20)] = inst_18922);

(statearr_19015[(11)] = inst_18923);

(statearr_19015[(21)] = inst_18920);

(statearr_19015[(12)] = inst_18921);

return statearr_19015;
})();
var statearr_19016_19088 = state_18980__$1;
(statearr_19016_19088[(2)] = null);

(statearr_19016_19088[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (41))){
var inst_18939 = (state_18980[(25)]);
var inst_18955 = (state_18980[(2)]);
var inst_18956 = cljs.core.next.call(null,inst_18939);
var inst_18920 = inst_18956;
var inst_18921 = null;
var inst_18922 = (0);
var inst_18923 = (0);
var state_18980__$1 = (function (){var statearr_19017 = state_18980;
(statearr_19017[(20)] = inst_18922);

(statearr_19017[(27)] = inst_18955);

(statearr_19017[(11)] = inst_18923);

(statearr_19017[(21)] = inst_18920);

(statearr_19017[(12)] = inst_18921);

return statearr_19017;
})();
var statearr_19018_19089 = state_18980__$1;
(statearr_19018_19089[(2)] = null);

(statearr_19018_19089[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (43))){
var state_18980__$1 = state_18980;
var statearr_19019_19090 = state_18980__$1;
(statearr_19019_19090[(2)] = null);

(statearr_19019_19090[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (29))){
var inst_18964 = (state_18980[(2)]);
var state_18980__$1 = state_18980;
var statearr_19020_19091 = state_18980__$1;
(statearr_19020_19091[(2)] = inst_18964);

(statearr_19020_19091[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (44))){
var inst_18973 = (state_18980[(2)]);
var state_18980__$1 = (function (){var statearr_19021 = state_18980;
(statearr_19021[(28)] = inst_18973);

return statearr_19021;
})();
var statearr_19022_19092 = state_18980__$1;
(statearr_19022_19092[(2)] = null);

(statearr_19022_19092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (6))){
var inst_18912 = (state_18980[(29)]);
var inst_18911 = cljs.core.deref.call(null,cs);
var inst_18912__$1 = cljs.core.keys.call(null,inst_18911);
var inst_18913 = cljs.core.count.call(null,inst_18912__$1);
var inst_18914 = cljs.core.reset_BANG_.call(null,dctr,inst_18913);
var inst_18919 = cljs.core.seq.call(null,inst_18912__$1);
var inst_18920 = inst_18919;
var inst_18921 = null;
var inst_18922 = (0);
var inst_18923 = (0);
var state_18980__$1 = (function (){var statearr_19023 = state_18980;
(statearr_19023[(30)] = inst_18914);

(statearr_19023[(20)] = inst_18922);

(statearr_19023[(11)] = inst_18923);

(statearr_19023[(21)] = inst_18920);

(statearr_19023[(29)] = inst_18912__$1);

(statearr_19023[(12)] = inst_18921);

return statearr_19023;
})();
var statearr_19024_19093 = state_18980__$1;
(statearr_19024_19093[(2)] = null);

(statearr_19024_19093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (28))){
var inst_18939 = (state_18980[(25)]);
var inst_18920 = (state_18980[(21)]);
var inst_18939__$1 = cljs.core.seq.call(null,inst_18920);
var state_18980__$1 = (function (){var statearr_19025 = state_18980;
(statearr_19025[(25)] = inst_18939__$1);

return statearr_19025;
})();
if(inst_18939__$1){
var statearr_19026_19094 = state_18980__$1;
(statearr_19026_19094[(1)] = (33));

} else {
var statearr_19027_19095 = state_18980__$1;
(statearr_19027_19095[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (25))){
var inst_18922 = (state_18980[(20)]);
var inst_18923 = (state_18980[(11)]);
var inst_18925 = (inst_18923 < inst_18922);
var inst_18926 = inst_18925;
var state_18980__$1 = state_18980;
if(cljs.core.truth_(inst_18926)){
var statearr_19028_19096 = state_18980__$1;
(statearr_19028_19096[(1)] = (27));

} else {
var statearr_19029_19097 = state_18980__$1;
(statearr_19029_19097[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (34))){
var state_18980__$1 = state_18980;
var statearr_19030_19098 = state_18980__$1;
(statearr_19030_19098[(2)] = null);

(statearr_19030_19098[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (17))){
var state_18980__$1 = state_18980;
var statearr_19031_19099 = state_18980__$1;
(statearr_19031_19099[(2)] = null);

(statearr_19031_19099[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (3))){
var inst_18978 = (state_18980[(2)]);
var state_18980__$1 = state_18980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18980__$1,inst_18978);
} else {
if((state_val_18981 === (12))){
var inst_18907 = (state_18980[(2)]);
var state_18980__$1 = state_18980;
var statearr_19032_19100 = state_18980__$1;
(statearr_19032_19100[(2)] = inst_18907);

(statearr_19032_19100[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (2))){
var state_18980__$1 = state_18980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18980__$1,(4),ch);
} else {
if((state_val_18981 === (23))){
var state_18980__$1 = state_18980;
var statearr_19033_19101 = state_18980__$1;
(statearr_19033_19101[(2)] = null);

(statearr_19033_19101[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (35))){
var inst_18962 = (state_18980[(2)]);
var state_18980__$1 = state_18980;
var statearr_19034_19102 = state_18980__$1;
(statearr_19034_19102[(2)] = inst_18962);

(statearr_19034_19102[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (19))){
var inst_18881 = (state_18980[(7)]);
var inst_18885 = cljs.core.chunk_first.call(null,inst_18881);
var inst_18886 = cljs.core.chunk_rest.call(null,inst_18881);
var inst_18887 = cljs.core.count.call(null,inst_18885);
var inst_18861 = inst_18886;
var inst_18862 = inst_18885;
var inst_18863 = inst_18887;
var inst_18864 = (0);
var state_18980__$1 = (function (){var statearr_19035 = state_18980;
(statearr_19035[(14)] = inst_18864);

(statearr_19035[(15)] = inst_18861);

(statearr_19035[(16)] = inst_18863);

(statearr_19035[(17)] = inst_18862);

return statearr_19035;
})();
var statearr_19036_19103 = state_18980__$1;
(statearr_19036_19103[(2)] = null);

(statearr_19036_19103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (11))){
var inst_18861 = (state_18980[(15)]);
var inst_18881 = (state_18980[(7)]);
var inst_18881__$1 = cljs.core.seq.call(null,inst_18861);
var state_18980__$1 = (function (){var statearr_19037 = state_18980;
(statearr_19037[(7)] = inst_18881__$1);

return statearr_19037;
})();
if(inst_18881__$1){
var statearr_19038_19104 = state_18980__$1;
(statearr_19038_19104[(1)] = (16));

} else {
var statearr_19039_19105 = state_18980__$1;
(statearr_19039_19105[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (9))){
var inst_18909 = (state_18980[(2)]);
var state_18980__$1 = state_18980;
var statearr_19040_19106 = state_18980__$1;
(statearr_19040_19106[(2)] = inst_18909);

(statearr_19040_19106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (5))){
var inst_18859 = cljs.core.deref.call(null,cs);
var inst_18860 = cljs.core.seq.call(null,inst_18859);
var inst_18861 = inst_18860;
var inst_18862 = null;
var inst_18863 = (0);
var inst_18864 = (0);
var state_18980__$1 = (function (){var statearr_19041 = state_18980;
(statearr_19041[(14)] = inst_18864);

(statearr_19041[(15)] = inst_18861);

(statearr_19041[(16)] = inst_18863);

(statearr_19041[(17)] = inst_18862);

return statearr_19041;
})();
var statearr_19042_19107 = state_18980__$1;
(statearr_19042_19107[(2)] = null);

(statearr_19042_19107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (14))){
var state_18980__$1 = state_18980;
var statearr_19043_19108 = state_18980__$1;
(statearr_19043_19108[(2)] = null);

(statearr_19043_19108[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (45))){
var inst_18970 = (state_18980[(2)]);
var state_18980__$1 = state_18980;
var statearr_19044_19109 = state_18980__$1;
(statearr_19044_19109[(2)] = inst_18970);

(statearr_19044_19109[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (26))){
var inst_18912 = (state_18980[(29)]);
var inst_18966 = (state_18980[(2)]);
var inst_18967 = cljs.core.seq.call(null,inst_18912);
var state_18980__$1 = (function (){var statearr_19045 = state_18980;
(statearr_19045[(31)] = inst_18966);

return statearr_19045;
})();
if(inst_18967){
var statearr_19046_19110 = state_18980__$1;
(statearr_19046_19110[(1)] = (42));

} else {
var statearr_19047_19111 = state_18980__$1;
(statearr_19047_19111[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (16))){
var inst_18881 = (state_18980[(7)]);
var inst_18883 = cljs.core.chunked_seq_QMARK_.call(null,inst_18881);
var state_18980__$1 = state_18980;
if(inst_18883){
var statearr_19048_19112 = state_18980__$1;
(statearr_19048_19112[(1)] = (19));

} else {
var statearr_19049_19113 = state_18980__$1;
(statearr_19049_19113[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (38))){
var inst_18959 = (state_18980[(2)]);
var state_18980__$1 = state_18980;
var statearr_19050_19114 = state_18980__$1;
(statearr_19050_19114[(2)] = inst_18959);

(statearr_19050_19114[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (30))){
var state_18980__$1 = state_18980;
var statearr_19051_19115 = state_18980__$1;
(statearr_19051_19115[(2)] = null);

(statearr_19051_19115[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (10))){
var inst_18864 = (state_18980[(14)]);
var inst_18862 = (state_18980[(17)]);
var inst_18870 = cljs.core._nth.call(null,inst_18862,inst_18864);
var inst_18871 = cljs.core.nth.call(null,inst_18870,(0),null);
var inst_18872 = cljs.core.nth.call(null,inst_18870,(1),null);
var state_18980__$1 = (function (){var statearr_19052 = state_18980;
(statearr_19052[(26)] = inst_18871);

return statearr_19052;
})();
if(cljs.core.truth_(inst_18872)){
var statearr_19053_19116 = state_18980__$1;
(statearr_19053_19116[(1)] = (13));

} else {
var statearr_19054_19117 = state_18980__$1;
(statearr_19054_19117[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (18))){
var inst_18905 = (state_18980[(2)]);
var state_18980__$1 = state_18980;
var statearr_19055_19118 = state_18980__$1;
(statearr_19055_19118[(2)] = inst_18905);

(statearr_19055_19118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (42))){
var state_18980__$1 = state_18980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18980__$1,(45),dchan);
} else {
if((state_val_18981 === (37))){
var inst_18939 = (state_18980[(25)]);
var inst_18948 = (state_18980[(23)]);
var inst_18852 = (state_18980[(10)]);
var inst_18948__$1 = cljs.core.first.call(null,inst_18939);
var inst_18949 = cljs.core.async.put_BANG_.call(null,inst_18948__$1,inst_18852,done);
var state_18980__$1 = (function (){var statearr_19056 = state_18980;
(statearr_19056[(23)] = inst_18948__$1);

return statearr_19056;
})();
if(cljs.core.truth_(inst_18949)){
var statearr_19057_19119 = state_18980__$1;
(statearr_19057_19119[(1)] = (39));

} else {
var statearr_19058_19120 = state_18980__$1;
(statearr_19058_19120[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18981 === (8))){
var inst_18864 = (state_18980[(14)]);
var inst_18863 = (state_18980[(16)]);
var inst_18866 = (inst_18864 < inst_18863);
var inst_18867 = inst_18866;
var state_18980__$1 = state_18980;
if(cljs.core.truth_(inst_18867)){
var statearr_19059_19121 = state_18980__$1;
(statearr_19059_19121[(1)] = (10));

} else {
var statearr_19060_19122 = state_18980__$1;
(statearr_19060_19122[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7725__auto___19068,cs,m,dchan,dctr,done))
;
return ((function (switch__7663__auto__,c__7725__auto___19068,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7664__auto__ = null;
var cljs$core$async$mult_$_state_machine__7664__auto____0 = (function (){
var statearr_19064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19064[(0)] = cljs$core$async$mult_$_state_machine__7664__auto__);

(statearr_19064[(1)] = (1));

return statearr_19064;
});
var cljs$core$async$mult_$_state_machine__7664__auto____1 = (function (state_18980){
while(true){
var ret_value__7665__auto__ = (function (){try{while(true){
var result__7666__auto__ = switch__7663__auto__.call(null,state_18980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7666__auto__;
}
break;
}
}catch (e19065){if((e19065 instanceof Object)){
var ex__7667__auto__ = e19065;
var statearr_19066_19123 = state_18980;
(statearr_19066_19123[(5)] = ex__7667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19124 = state_18980;
state_18980 = G__19124;
continue;
} else {
return ret_value__7665__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7664__auto__ = function(state_18980){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7664__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7664__auto____1.call(this,state_18980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7664__auto____0;
cljs$core$async$mult_$_state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7664__auto____1;
return cljs$core$async$mult_$_state_machine__7664__auto__;
})()
;})(switch__7663__auto__,c__7725__auto___19068,cs,m,dchan,dctr,done))
})();
var state__7727__auto__ = (function (){var statearr_19067 = f__7726__auto__.call(null);
(statearr_19067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7725__auto___19068);

return statearr_19067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7727__auto__);
});})(c__7725__auto___19068,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__19126 = arguments.length;
switch (G__19126) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj19129 = {};
return obj19129;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4297__auto__ = m;
if(and__4297__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4945__auto__ = (((m == null))?null:m);
return (function (){var or__4309__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5349__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5349__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19134){
var map__19135 = p__19134;
var map__19135__$1 = ((cljs.core.seq_QMARK_.call(null,map__19135))?cljs.core.apply.call(null,cljs.core.hash_map,map__19135):map__19135);
var opts = map__19135__$1;
var statearr_19136_19139 = state;
(statearr_19136_19139[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4422__auto__ = cljs.core.async.do_alts.call(null,((function (map__19135,map__19135__$1,opts){
return (function (val){
var statearr_19137_19140 = state;
(statearr_19137_19140[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__19135,map__19135__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4422__auto__)){
var cb = temp__4422__auto__;
var statearr_19138_19141 = state;
(statearr_19138_19141[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19130){
var G__19131 = cljs.core.first.call(null,seq19130);
var seq19130__$1 = cljs.core.next.call(null,seq19130);
var G__19132 = cljs.core.first.call(null,seq19130__$1);
var seq19130__$2 = cljs.core.next.call(null,seq19130__$1);
var G__19133 = cljs.core.first.call(null,seq19130__$2);
var seq19130__$3 = cljs.core.next.call(null,seq19130__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19131,G__19132,G__19133,seq19130__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t19261 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19261 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19262){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19262 = meta19262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19263,meta19262__$1){
var self__ = this;
var _19263__$1 = this;
return (new cljs.core.async.t19261(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19262__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19261.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19263){
var self__ = this;
var _19263__$1 = this;
return self__.meta19262;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19261.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19261.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19261.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t19261.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19261.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19261.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19261.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19261.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19261.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19262","meta19262",1494895680,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19261.cljs$lang$type = true;

cljs.core.async.t19261.cljs$lang$ctorStr = "cljs.core.async/t19261";

cljs.core.async.t19261.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t19261");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t19261 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t19261(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19262){
return (new cljs.core.async.t19261(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19262));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t19261(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7725__auto___19380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7725__auto___19380,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7726__auto__ = (function (){var switch__7663__auto__ = ((function (c__7725__auto___19380,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19333){
var state_val_19334 = (state_19333[(1)]);
if((state_val_19334 === (7))){
var inst_19277 = (state_19333[(7)]);
var inst_19282 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19277);
var state_19333__$1 = state_19333;
var statearr_19335_19381 = state_19333__$1;
(statearr_19335_19381[(2)] = inst_19282);

(statearr_19335_19381[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (20))){
var inst_19292 = (state_19333[(8)]);
var state_19333__$1 = state_19333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19333__$1,(23),out,inst_19292);
} else {
if((state_val_19334 === (1))){
var inst_19267 = (state_19333[(9)]);
var inst_19267__$1 = calc_state.call(null);
var inst_19268 = cljs.core.seq_QMARK_.call(null,inst_19267__$1);
var state_19333__$1 = (function (){var statearr_19336 = state_19333;
(statearr_19336[(9)] = inst_19267__$1);

return statearr_19336;
})();
if(inst_19268){
var statearr_19337_19382 = state_19333__$1;
(statearr_19337_19382[(1)] = (2));

} else {
var statearr_19338_19383 = state_19333__$1;
(statearr_19338_19383[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (24))){
var inst_19285 = (state_19333[(10)]);
var inst_19277 = inst_19285;
var state_19333__$1 = (function (){var statearr_19339 = state_19333;
(statearr_19339[(7)] = inst_19277);

return statearr_19339;
})();
var statearr_19340_19384 = state_19333__$1;
(statearr_19340_19384[(2)] = null);

(statearr_19340_19384[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (4))){
var inst_19267 = (state_19333[(9)]);
var inst_19273 = (state_19333[(2)]);
var inst_19274 = cljs.core.get.call(null,inst_19273,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19275 = cljs.core.get.call(null,inst_19273,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19276 = cljs.core.get.call(null,inst_19273,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19277 = inst_19267;
var state_19333__$1 = (function (){var statearr_19341 = state_19333;
(statearr_19341[(11)] = inst_19276);

(statearr_19341[(7)] = inst_19277);

(statearr_19341[(12)] = inst_19275);

(statearr_19341[(13)] = inst_19274);

return statearr_19341;
})();
var statearr_19342_19385 = state_19333__$1;
(statearr_19342_19385[(2)] = null);

(statearr_19342_19385[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (15))){
var state_19333__$1 = state_19333;
var statearr_19343_19386 = state_19333__$1;
(statearr_19343_19386[(2)] = null);

(statearr_19343_19386[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (21))){
var inst_19285 = (state_19333[(10)]);
var inst_19277 = inst_19285;
var state_19333__$1 = (function (){var statearr_19344 = state_19333;
(statearr_19344[(7)] = inst_19277);

return statearr_19344;
})();
var statearr_19345_19387 = state_19333__$1;
(statearr_19345_19387[(2)] = null);

(statearr_19345_19387[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (13))){
var inst_19329 = (state_19333[(2)]);
var state_19333__$1 = state_19333;
var statearr_19346_19388 = state_19333__$1;
(statearr_19346_19388[(2)] = inst_19329);

(statearr_19346_19388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (22))){
var inst_19327 = (state_19333[(2)]);
var state_19333__$1 = state_19333;
var statearr_19347_19389 = state_19333__$1;
(statearr_19347_19389[(2)] = inst_19327);

(statearr_19347_19389[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (6))){
var inst_19331 = (state_19333[(2)]);
var state_19333__$1 = state_19333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19333__$1,inst_19331);
} else {
if((state_val_19334 === (25))){
var state_19333__$1 = state_19333;
var statearr_19348_19390 = state_19333__$1;
(statearr_19348_19390[(2)] = null);

(statearr_19348_19390[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (17))){
var inst_19307 = (state_19333[(14)]);
var state_19333__$1 = state_19333;
var statearr_19349_19391 = state_19333__$1;
(statearr_19349_19391[(2)] = inst_19307);

(statearr_19349_19391[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (3))){
var inst_19267 = (state_19333[(9)]);
var state_19333__$1 = state_19333;
var statearr_19350_19392 = state_19333__$1;
(statearr_19350_19392[(2)] = inst_19267);

(statearr_19350_19392[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (12))){
var inst_19307 = (state_19333[(14)]);
var inst_19293 = (state_19333[(15)]);
var inst_19286 = (state_19333[(16)]);
var inst_19307__$1 = inst_19286.call(null,inst_19293);
var state_19333__$1 = (function (){var statearr_19351 = state_19333;
(statearr_19351[(14)] = inst_19307__$1);

return statearr_19351;
})();
if(cljs.core.truth_(inst_19307__$1)){
var statearr_19352_19393 = state_19333__$1;
(statearr_19352_19393[(1)] = (17));

} else {
var statearr_19353_19394 = state_19333__$1;
(statearr_19353_19394[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (2))){
var inst_19267 = (state_19333[(9)]);
var inst_19270 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19267);
var state_19333__$1 = state_19333;
var statearr_19354_19395 = state_19333__$1;
(statearr_19354_19395[(2)] = inst_19270);

(statearr_19354_19395[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (23))){
var inst_19318 = (state_19333[(2)]);
var state_19333__$1 = state_19333;
if(cljs.core.truth_(inst_19318)){
var statearr_19355_19396 = state_19333__$1;
(statearr_19355_19396[(1)] = (24));

} else {
var statearr_19356_19397 = state_19333__$1;
(statearr_19356_19397[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (19))){
var inst_19315 = (state_19333[(2)]);
var state_19333__$1 = state_19333;
if(cljs.core.truth_(inst_19315)){
var statearr_19357_19398 = state_19333__$1;
(statearr_19357_19398[(1)] = (20));

} else {
var statearr_19358_19399 = state_19333__$1;
(statearr_19358_19399[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (11))){
var inst_19292 = (state_19333[(8)]);
var inst_19298 = (inst_19292 == null);
var state_19333__$1 = state_19333;
if(cljs.core.truth_(inst_19298)){
var statearr_19359_19400 = state_19333__$1;
(statearr_19359_19400[(1)] = (14));

} else {
var statearr_19360_19401 = state_19333__$1;
(statearr_19360_19401[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (9))){
var inst_19285 = (state_19333[(10)]);
var inst_19285__$1 = (state_19333[(2)]);
var inst_19286 = cljs.core.get.call(null,inst_19285__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19287 = cljs.core.get.call(null,inst_19285__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19288 = cljs.core.get.call(null,inst_19285__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19333__$1 = (function (){var statearr_19361 = state_19333;
(statearr_19361[(10)] = inst_19285__$1);

(statearr_19361[(17)] = inst_19287);

(statearr_19361[(16)] = inst_19286);

return statearr_19361;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19333__$1,(10),inst_19288);
} else {
if((state_val_19334 === (5))){
var inst_19277 = (state_19333[(7)]);
var inst_19280 = cljs.core.seq_QMARK_.call(null,inst_19277);
var state_19333__$1 = state_19333;
if(inst_19280){
var statearr_19362_19402 = state_19333__$1;
(statearr_19362_19402[(1)] = (7));

} else {
var statearr_19363_19403 = state_19333__$1;
(statearr_19363_19403[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (14))){
var inst_19293 = (state_19333[(15)]);
var inst_19300 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19293);
var state_19333__$1 = state_19333;
var statearr_19364_19404 = state_19333__$1;
(statearr_19364_19404[(2)] = inst_19300);

(statearr_19364_19404[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (26))){
var inst_19323 = (state_19333[(2)]);
var state_19333__$1 = state_19333;
var statearr_19365_19405 = state_19333__$1;
(statearr_19365_19405[(2)] = inst_19323);

(statearr_19365_19405[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (16))){
var inst_19303 = (state_19333[(2)]);
var inst_19304 = calc_state.call(null);
var inst_19277 = inst_19304;
var state_19333__$1 = (function (){var statearr_19366 = state_19333;
(statearr_19366[(7)] = inst_19277);

(statearr_19366[(18)] = inst_19303);

return statearr_19366;
})();
var statearr_19367_19406 = state_19333__$1;
(statearr_19367_19406[(2)] = null);

(statearr_19367_19406[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (10))){
var inst_19292 = (state_19333[(8)]);
var inst_19293 = (state_19333[(15)]);
var inst_19291 = (state_19333[(2)]);
var inst_19292__$1 = cljs.core.nth.call(null,inst_19291,(0),null);
var inst_19293__$1 = cljs.core.nth.call(null,inst_19291,(1),null);
var inst_19294 = (inst_19292__$1 == null);
var inst_19295 = cljs.core._EQ_.call(null,inst_19293__$1,change);
var inst_19296 = (inst_19294) || (inst_19295);
var state_19333__$1 = (function (){var statearr_19368 = state_19333;
(statearr_19368[(8)] = inst_19292__$1);

(statearr_19368[(15)] = inst_19293__$1);

return statearr_19368;
})();
if(cljs.core.truth_(inst_19296)){
var statearr_19369_19407 = state_19333__$1;
(statearr_19369_19407[(1)] = (11));

} else {
var statearr_19370_19408 = state_19333__$1;
(statearr_19370_19408[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (18))){
var inst_19287 = (state_19333[(17)]);
var inst_19293 = (state_19333[(15)]);
var inst_19286 = (state_19333[(16)]);
var inst_19310 = cljs.core.empty_QMARK_.call(null,inst_19286);
var inst_19311 = inst_19287.call(null,inst_19293);
var inst_19312 = cljs.core.not.call(null,inst_19311);
var inst_19313 = (inst_19310) && (inst_19312);
var state_19333__$1 = state_19333;
var statearr_19371_19409 = state_19333__$1;
(statearr_19371_19409[(2)] = inst_19313);

(statearr_19371_19409[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19334 === (8))){
var inst_19277 = (state_19333[(7)]);
var state_19333__$1 = state_19333;
var statearr_19372_19410 = state_19333__$1;
(statearr_19372_19410[(2)] = inst_19277);

(statearr_19372_19410[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7725__auto___19380,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7663__auto__,c__7725__auto___19380,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7664__auto__ = null;
var cljs$core$async$mix_$_state_machine__7664__auto____0 = (function (){
var statearr_19376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19376[(0)] = cljs$core$async$mix_$_state_machine__7664__auto__);

(statearr_19376[(1)] = (1));

return statearr_19376;
});
var cljs$core$async$mix_$_state_machine__7664__auto____1 = (function (state_19333){
while(true){
var ret_value__7665__auto__ = (function (){try{while(true){
var result__7666__auto__ = switch__7663__auto__.call(null,state_19333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7666__auto__;
}
break;
}
}catch (e19377){if((e19377 instanceof Object)){
var ex__7667__auto__ = e19377;
var statearr_19378_19411 = state_19333;
(statearr_19378_19411[(5)] = ex__7667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19412 = state_19333;
state_19333 = G__19412;
continue;
} else {
return ret_value__7665__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7664__auto__ = function(state_19333){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7664__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7664__auto____1.call(this,state_19333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7664__auto____0;
cljs$core$async$mix_$_state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7664__auto____1;
return cljs$core$async$mix_$_state_machine__7664__auto__;
})()
;})(switch__7663__auto__,c__7725__auto___19380,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7727__auto__ = (function (){var statearr_19379 = f__7726__auto__.call(null);
(statearr_19379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7725__auto___19380);

return statearr_19379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7727__auto__);
});})(c__7725__auto___19380,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj19414 = {};
return obj19414;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__19416 = arguments.length;
switch (G__19416) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4297__auto__ = p;
if(and__4297__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4297__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4945__auto__ = (((p == null))?null:p);
return (function (){var or__4309__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4945__auto__)]);
if(or__4309__auto__){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4309__auto____$1){
return or__4309__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__19420 = arguments.length;
switch (G__19420) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4309__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4309__auto__,mults){
return (function (p1__19418_SHARP_){
if(cljs.core.truth_(p1__19418_SHARP_.call(null,topic))){
return p1__19418_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__19418_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4309__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t19421 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19421 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19422){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19422 = meta19422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19423,meta19422__$1){
var self__ = this;
var _19423__$1 = this;
return (new cljs.core.async.t19421(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19422__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t19421.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19423){
var self__ = this;
var _19423__$1 = this;
return self__.meta19422;
});})(mults,ensure_mult))
;

cljs.core.async.t19421.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19421.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t19421.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t19421.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t19421.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4422__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4422__auto__)){
var m = temp__4422__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t19421.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t19421.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t19421.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19422","meta19422",204311393,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t19421.cljs$lang$type = true;

cljs.core.async.t19421.cljs$lang$ctorStr = "cljs.core.async/t19421";

cljs.core.async.t19421.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t19421");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t19421 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t19421(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19422){
return (new cljs.core.async.t19421(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19422));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t19421(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7725__auto___19544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7725__auto___19544,mults,ensure_mult,p){
return (function (){
var f__7726__auto__ = (function (){var switch__7663__auto__ = ((function (c__7725__auto___19544,mults,ensure_mult,p){
return (function (state_19495){
var state_val_19496 = (state_19495[(1)]);
if((state_val_19496 === (7))){
var inst_19491 = (state_19495[(2)]);
var state_19495__$1 = state_19495;
var statearr_19497_19545 = state_19495__$1;
(statearr_19497_19545[(2)] = inst_19491);

(statearr_19497_19545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (20))){
var state_19495__$1 = state_19495;
var statearr_19498_19546 = state_19495__$1;
(statearr_19498_19546[(2)] = null);

(statearr_19498_19546[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (1))){
var state_19495__$1 = state_19495;
var statearr_19499_19547 = state_19495__$1;
(statearr_19499_19547[(2)] = null);

(statearr_19499_19547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (24))){
var inst_19474 = (state_19495[(7)]);
var inst_19483 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19474);
var state_19495__$1 = state_19495;
var statearr_19500_19548 = state_19495__$1;
(statearr_19500_19548[(2)] = inst_19483);

(statearr_19500_19548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (4))){
var inst_19426 = (state_19495[(8)]);
var inst_19426__$1 = (state_19495[(2)]);
var inst_19427 = (inst_19426__$1 == null);
var state_19495__$1 = (function (){var statearr_19501 = state_19495;
(statearr_19501[(8)] = inst_19426__$1);

return statearr_19501;
})();
if(cljs.core.truth_(inst_19427)){
var statearr_19502_19549 = state_19495__$1;
(statearr_19502_19549[(1)] = (5));

} else {
var statearr_19503_19550 = state_19495__$1;
(statearr_19503_19550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (15))){
var inst_19468 = (state_19495[(2)]);
var state_19495__$1 = state_19495;
var statearr_19504_19551 = state_19495__$1;
(statearr_19504_19551[(2)] = inst_19468);

(statearr_19504_19551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (21))){
var inst_19488 = (state_19495[(2)]);
var state_19495__$1 = (function (){var statearr_19505 = state_19495;
(statearr_19505[(9)] = inst_19488);

return statearr_19505;
})();
var statearr_19506_19552 = state_19495__$1;
(statearr_19506_19552[(2)] = null);

(statearr_19506_19552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (13))){
var inst_19450 = (state_19495[(10)]);
var inst_19452 = cljs.core.chunked_seq_QMARK_.call(null,inst_19450);
var state_19495__$1 = state_19495;
if(inst_19452){
var statearr_19507_19553 = state_19495__$1;
(statearr_19507_19553[(1)] = (16));

} else {
var statearr_19508_19554 = state_19495__$1;
(statearr_19508_19554[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (22))){
var inst_19480 = (state_19495[(2)]);
var state_19495__$1 = state_19495;
if(cljs.core.truth_(inst_19480)){
var statearr_19509_19555 = state_19495__$1;
(statearr_19509_19555[(1)] = (23));

} else {
var statearr_19510_19556 = state_19495__$1;
(statearr_19510_19556[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (6))){
var inst_19476 = (state_19495[(11)]);
var inst_19426 = (state_19495[(8)]);
var inst_19474 = (state_19495[(7)]);
var inst_19474__$1 = topic_fn.call(null,inst_19426);
var inst_19475 = cljs.core.deref.call(null,mults);
var inst_19476__$1 = cljs.core.get.call(null,inst_19475,inst_19474__$1);
var state_19495__$1 = (function (){var statearr_19511 = state_19495;
(statearr_19511[(11)] = inst_19476__$1);

(statearr_19511[(7)] = inst_19474__$1);

return statearr_19511;
})();
if(cljs.core.truth_(inst_19476__$1)){
var statearr_19512_19557 = state_19495__$1;
(statearr_19512_19557[(1)] = (19));

} else {
var statearr_19513_19558 = state_19495__$1;
(statearr_19513_19558[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (25))){
var inst_19485 = (state_19495[(2)]);
var state_19495__$1 = state_19495;
var statearr_19514_19559 = state_19495__$1;
(statearr_19514_19559[(2)] = inst_19485);

(statearr_19514_19559[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (17))){
var inst_19450 = (state_19495[(10)]);
var inst_19459 = cljs.core.first.call(null,inst_19450);
var inst_19460 = cljs.core.async.muxch_STAR_.call(null,inst_19459);
var inst_19461 = cljs.core.async.close_BANG_.call(null,inst_19460);
var inst_19462 = cljs.core.next.call(null,inst_19450);
var inst_19436 = inst_19462;
var inst_19437 = null;
var inst_19438 = (0);
var inst_19439 = (0);
var state_19495__$1 = (function (){var statearr_19515 = state_19495;
(statearr_19515[(12)] = inst_19436);

(statearr_19515[(13)] = inst_19438);

(statearr_19515[(14)] = inst_19439);

(statearr_19515[(15)] = inst_19437);

(statearr_19515[(16)] = inst_19461);

return statearr_19515;
})();
var statearr_19516_19560 = state_19495__$1;
(statearr_19516_19560[(2)] = null);

(statearr_19516_19560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (3))){
var inst_19493 = (state_19495[(2)]);
var state_19495__$1 = state_19495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19495__$1,inst_19493);
} else {
if((state_val_19496 === (12))){
var inst_19470 = (state_19495[(2)]);
var state_19495__$1 = state_19495;
var statearr_19517_19561 = state_19495__$1;
(statearr_19517_19561[(2)] = inst_19470);

(statearr_19517_19561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (2))){
var state_19495__$1 = state_19495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19495__$1,(4),ch);
} else {
if((state_val_19496 === (23))){
var state_19495__$1 = state_19495;
var statearr_19518_19562 = state_19495__$1;
(statearr_19518_19562[(2)] = null);

(statearr_19518_19562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (19))){
var inst_19476 = (state_19495[(11)]);
var inst_19426 = (state_19495[(8)]);
var inst_19478 = cljs.core.async.muxch_STAR_.call(null,inst_19476);
var state_19495__$1 = state_19495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19495__$1,(22),inst_19478,inst_19426);
} else {
if((state_val_19496 === (11))){
var inst_19436 = (state_19495[(12)]);
var inst_19450 = (state_19495[(10)]);
var inst_19450__$1 = cljs.core.seq.call(null,inst_19436);
var state_19495__$1 = (function (){var statearr_19519 = state_19495;
(statearr_19519[(10)] = inst_19450__$1);

return statearr_19519;
})();
if(inst_19450__$1){
var statearr_19520_19563 = state_19495__$1;
(statearr_19520_19563[(1)] = (13));

} else {
var statearr_19521_19564 = state_19495__$1;
(statearr_19521_19564[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (9))){
var inst_19472 = (state_19495[(2)]);
var state_19495__$1 = state_19495;
var statearr_19522_19565 = state_19495__$1;
(statearr_19522_19565[(2)] = inst_19472);

(statearr_19522_19565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (5))){
var inst_19433 = cljs.core.deref.call(null,mults);
var inst_19434 = cljs.core.vals.call(null,inst_19433);
var inst_19435 = cljs.core.seq.call(null,inst_19434);
var inst_19436 = inst_19435;
var inst_19437 = null;
var inst_19438 = (0);
var inst_19439 = (0);
var state_19495__$1 = (function (){var statearr_19523 = state_19495;
(statearr_19523[(12)] = inst_19436);

(statearr_19523[(13)] = inst_19438);

(statearr_19523[(14)] = inst_19439);

(statearr_19523[(15)] = inst_19437);

return statearr_19523;
})();
var statearr_19524_19566 = state_19495__$1;
(statearr_19524_19566[(2)] = null);

(statearr_19524_19566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (14))){
var state_19495__$1 = state_19495;
var statearr_19528_19567 = state_19495__$1;
(statearr_19528_19567[(2)] = null);

(statearr_19528_19567[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (16))){
var inst_19450 = (state_19495[(10)]);
var inst_19454 = cljs.core.chunk_first.call(null,inst_19450);
var inst_19455 = cljs.core.chunk_rest.call(null,inst_19450);
var inst_19456 = cljs.core.count.call(null,inst_19454);
var inst_19436 = inst_19455;
var inst_19437 = inst_19454;
var inst_19438 = inst_19456;
var inst_19439 = (0);
var state_19495__$1 = (function (){var statearr_19529 = state_19495;
(statearr_19529[(12)] = inst_19436);

(statearr_19529[(13)] = inst_19438);

(statearr_19529[(14)] = inst_19439);

(statearr_19529[(15)] = inst_19437);

return statearr_19529;
})();
var statearr_19530_19568 = state_19495__$1;
(statearr_19530_19568[(2)] = null);

(statearr_19530_19568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (10))){
var inst_19436 = (state_19495[(12)]);
var inst_19438 = (state_19495[(13)]);
var inst_19439 = (state_19495[(14)]);
var inst_19437 = (state_19495[(15)]);
var inst_19444 = cljs.core._nth.call(null,inst_19437,inst_19439);
var inst_19445 = cljs.core.async.muxch_STAR_.call(null,inst_19444);
var inst_19446 = cljs.core.async.close_BANG_.call(null,inst_19445);
var inst_19447 = (inst_19439 + (1));
var tmp19525 = inst_19436;
var tmp19526 = inst_19438;
var tmp19527 = inst_19437;
var inst_19436__$1 = tmp19525;
var inst_19437__$1 = tmp19527;
var inst_19438__$1 = tmp19526;
var inst_19439__$1 = inst_19447;
var state_19495__$1 = (function (){var statearr_19531 = state_19495;
(statearr_19531[(12)] = inst_19436__$1);

(statearr_19531[(13)] = inst_19438__$1);

(statearr_19531[(17)] = inst_19446);

(statearr_19531[(14)] = inst_19439__$1);

(statearr_19531[(15)] = inst_19437__$1);

return statearr_19531;
})();
var statearr_19532_19569 = state_19495__$1;
(statearr_19532_19569[(2)] = null);

(statearr_19532_19569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (18))){
var inst_19465 = (state_19495[(2)]);
var state_19495__$1 = state_19495;
var statearr_19533_19570 = state_19495__$1;
(statearr_19533_19570[(2)] = inst_19465);

(statearr_19533_19570[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (8))){
var inst_19438 = (state_19495[(13)]);
var inst_19439 = (state_19495[(14)]);
var inst_19441 = (inst_19439 < inst_19438);
var inst_19442 = inst_19441;
var state_19495__$1 = state_19495;
if(cljs.core.truth_(inst_19442)){
var statearr_19534_19571 = state_19495__$1;
(statearr_19534_19571[(1)] = (10));

} else {
var statearr_19535_19572 = state_19495__$1;
(statearr_19535_19572[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7725__auto___19544,mults,ensure_mult,p))
;
return ((function (switch__7663__auto__,c__7725__auto___19544,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7664__auto__ = null;
var cljs$core$async$state_machine__7664__auto____0 = (function (){
var statearr_19539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19539[(0)] = cljs$core$async$state_machine__7664__auto__);

(statearr_19539[(1)] = (1));

return statearr_19539;
});
var cljs$core$async$state_machine__7664__auto____1 = (function (state_19495){
while(true){
var ret_value__7665__auto__ = (function (){try{while(true){
var result__7666__auto__ = switch__7663__auto__.call(null,state_19495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7666__auto__;
}
break;
}
}catch (e19540){if((e19540 instanceof Object)){
var ex__7667__auto__ = e19540;
var statearr_19541_19573 = state_19495;
(statearr_19541_19573[(5)] = ex__7667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19574 = state_19495;
state_19495 = G__19574;
continue;
} else {
return ret_value__7665__auto__;
}
break;
}
});
cljs$core$async$state_machine__7664__auto__ = function(state_19495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7664__auto____1.call(this,state_19495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7664__auto____0;
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7664__auto____1;
return cljs$core$async$state_machine__7664__auto__;
})()
;})(switch__7663__auto__,c__7725__auto___19544,mults,ensure_mult,p))
})();
var state__7727__auto__ = (function (){var statearr_19542 = f__7726__auto__.call(null);
(statearr_19542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7725__auto___19544);

return statearr_19542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7727__auto__);
});})(c__7725__auto___19544,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__19576 = arguments.length;
switch (G__19576) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__19579 = arguments.length;
switch (G__19579) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__19582 = arguments.length;
switch (G__19582) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7725__auto___19652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7725__auto___19652,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7726__auto__ = (function (){var switch__7663__auto__ = ((function (c__7725__auto___19652,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19621){
var state_val_19622 = (state_19621[(1)]);
if((state_val_19622 === (7))){
var state_19621__$1 = state_19621;
var statearr_19623_19653 = state_19621__$1;
(statearr_19623_19653[(2)] = null);

(statearr_19623_19653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (1))){
var state_19621__$1 = state_19621;
var statearr_19624_19654 = state_19621__$1;
(statearr_19624_19654[(2)] = null);

(statearr_19624_19654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (4))){
var inst_19585 = (state_19621[(7)]);
var inst_19587 = (inst_19585 < cnt);
var state_19621__$1 = state_19621;
if(cljs.core.truth_(inst_19587)){
var statearr_19625_19655 = state_19621__$1;
(statearr_19625_19655[(1)] = (6));

} else {
var statearr_19626_19656 = state_19621__$1;
(statearr_19626_19656[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (15))){
var inst_19617 = (state_19621[(2)]);
var state_19621__$1 = state_19621;
var statearr_19627_19657 = state_19621__$1;
(statearr_19627_19657[(2)] = inst_19617);

(statearr_19627_19657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (13))){
var inst_19610 = cljs.core.async.close_BANG_.call(null,out);
var state_19621__$1 = state_19621;
var statearr_19628_19658 = state_19621__$1;
(statearr_19628_19658[(2)] = inst_19610);

(statearr_19628_19658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (6))){
var state_19621__$1 = state_19621;
var statearr_19629_19659 = state_19621__$1;
(statearr_19629_19659[(2)] = null);

(statearr_19629_19659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (3))){
var inst_19619 = (state_19621[(2)]);
var state_19621__$1 = state_19621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19621__$1,inst_19619);
} else {
if((state_val_19622 === (12))){
var inst_19607 = (state_19621[(8)]);
var inst_19607__$1 = (state_19621[(2)]);
var inst_19608 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19607__$1);
var state_19621__$1 = (function (){var statearr_19630 = state_19621;
(statearr_19630[(8)] = inst_19607__$1);

return statearr_19630;
})();
if(cljs.core.truth_(inst_19608)){
var statearr_19631_19660 = state_19621__$1;
(statearr_19631_19660[(1)] = (13));

} else {
var statearr_19632_19661 = state_19621__$1;
(statearr_19632_19661[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (2))){
var inst_19584 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19585 = (0);
var state_19621__$1 = (function (){var statearr_19633 = state_19621;
(statearr_19633[(9)] = inst_19584);

(statearr_19633[(7)] = inst_19585);

return statearr_19633;
})();
var statearr_19634_19662 = state_19621__$1;
(statearr_19634_19662[(2)] = null);

(statearr_19634_19662[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (11))){
var inst_19585 = (state_19621[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19621,(10),Object,null,(9));
var inst_19594 = chs__$1.call(null,inst_19585);
var inst_19595 = done.call(null,inst_19585);
var inst_19596 = cljs.core.async.take_BANG_.call(null,inst_19594,inst_19595);
var state_19621__$1 = state_19621;
var statearr_19635_19663 = state_19621__$1;
(statearr_19635_19663[(2)] = inst_19596);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19621__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (9))){
var inst_19585 = (state_19621[(7)]);
var inst_19598 = (state_19621[(2)]);
var inst_19599 = (inst_19585 + (1));
var inst_19585__$1 = inst_19599;
var state_19621__$1 = (function (){var statearr_19636 = state_19621;
(statearr_19636[(7)] = inst_19585__$1);

(statearr_19636[(10)] = inst_19598);

return statearr_19636;
})();
var statearr_19637_19664 = state_19621__$1;
(statearr_19637_19664[(2)] = null);

(statearr_19637_19664[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (5))){
var inst_19605 = (state_19621[(2)]);
var state_19621__$1 = (function (){var statearr_19638 = state_19621;
(statearr_19638[(11)] = inst_19605);

return statearr_19638;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19621__$1,(12),dchan);
} else {
if((state_val_19622 === (14))){
var inst_19607 = (state_19621[(8)]);
var inst_19612 = cljs.core.apply.call(null,f,inst_19607);
var state_19621__$1 = state_19621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19621__$1,(16),out,inst_19612);
} else {
if((state_val_19622 === (16))){
var inst_19614 = (state_19621[(2)]);
var state_19621__$1 = (function (){var statearr_19639 = state_19621;
(statearr_19639[(12)] = inst_19614);

return statearr_19639;
})();
var statearr_19640_19665 = state_19621__$1;
(statearr_19640_19665[(2)] = null);

(statearr_19640_19665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (10))){
var inst_19589 = (state_19621[(2)]);
var inst_19590 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19621__$1 = (function (){var statearr_19641 = state_19621;
(statearr_19641[(13)] = inst_19589);

return statearr_19641;
})();
var statearr_19642_19666 = state_19621__$1;
(statearr_19642_19666[(2)] = inst_19590);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19621__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (8))){
var inst_19603 = (state_19621[(2)]);
var state_19621__$1 = state_19621;
var statearr_19643_19667 = state_19621__$1;
(statearr_19643_19667[(2)] = inst_19603);

(statearr_19643_19667[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7725__auto___19652,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7663__auto__,c__7725__auto___19652,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7664__auto__ = null;
var cljs$core$async$state_machine__7664__auto____0 = (function (){
var statearr_19647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19647[(0)] = cljs$core$async$state_machine__7664__auto__);

(statearr_19647[(1)] = (1));

return statearr_19647;
});
var cljs$core$async$state_machine__7664__auto____1 = (function (state_19621){
while(true){
var ret_value__7665__auto__ = (function (){try{while(true){
var result__7666__auto__ = switch__7663__auto__.call(null,state_19621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7666__auto__;
}
break;
}
}catch (e19648){if((e19648 instanceof Object)){
var ex__7667__auto__ = e19648;
var statearr_19649_19668 = state_19621;
(statearr_19649_19668[(5)] = ex__7667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19669 = state_19621;
state_19621 = G__19669;
continue;
} else {
return ret_value__7665__auto__;
}
break;
}
});
cljs$core$async$state_machine__7664__auto__ = function(state_19621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7664__auto____1.call(this,state_19621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7664__auto____0;
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7664__auto____1;
return cljs$core$async$state_machine__7664__auto__;
})()
;})(switch__7663__auto__,c__7725__auto___19652,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7727__auto__ = (function (){var statearr_19650 = f__7726__auto__.call(null);
(statearr_19650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7725__auto___19652);

return statearr_19650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7727__auto__);
});})(c__7725__auto___19652,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__19672 = arguments.length;
switch (G__19672) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7725__auto___19727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7725__auto___19727,out){
return (function (){
var f__7726__auto__ = (function (){var switch__7663__auto__ = ((function (c__7725__auto___19727,out){
return (function (state_19702){
var state_val_19703 = (state_19702[(1)]);
if((state_val_19703 === (7))){
var inst_19682 = (state_19702[(7)]);
var inst_19681 = (state_19702[(8)]);
var inst_19681__$1 = (state_19702[(2)]);
var inst_19682__$1 = cljs.core.nth.call(null,inst_19681__$1,(0),null);
var inst_19683 = cljs.core.nth.call(null,inst_19681__$1,(1),null);
var inst_19684 = (inst_19682__$1 == null);
var state_19702__$1 = (function (){var statearr_19704 = state_19702;
(statearr_19704[(7)] = inst_19682__$1);

(statearr_19704[(9)] = inst_19683);

(statearr_19704[(8)] = inst_19681__$1);

return statearr_19704;
})();
if(cljs.core.truth_(inst_19684)){
var statearr_19705_19728 = state_19702__$1;
(statearr_19705_19728[(1)] = (8));

} else {
var statearr_19706_19729 = state_19702__$1;
(statearr_19706_19729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19703 === (1))){
var inst_19673 = cljs.core.vec.call(null,chs);
var inst_19674 = inst_19673;
var state_19702__$1 = (function (){var statearr_19707 = state_19702;
(statearr_19707[(10)] = inst_19674);

return statearr_19707;
})();
var statearr_19708_19730 = state_19702__$1;
(statearr_19708_19730[(2)] = null);

(statearr_19708_19730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19703 === (4))){
var inst_19674 = (state_19702[(10)]);
var state_19702__$1 = state_19702;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19702__$1,(7),inst_19674);
} else {
if((state_val_19703 === (6))){
var inst_19698 = (state_19702[(2)]);
var state_19702__$1 = state_19702;
var statearr_19709_19731 = state_19702__$1;
(statearr_19709_19731[(2)] = inst_19698);

(statearr_19709_19731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19703 === (3))){
var inst_19700 = (state_19702[(2)]);
var state_19702__$1 = state_19702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19702__$1,inst_19700);
} else {
if((state_val_19703 === (2))){
var inst_19674 = (state_19702[(10)]);
var inst_19676 = cljs.core.count.call(null,inst_19674);
var inst_19677 = (inst_19676 > (0));
var state_19702__$1 = state_19702;
if(cljs.core.truth_(inst_19677)){
var statearr_19711_19732 = state_19702__$1;
(statearr_19711_19732[(1)] = (4));

} else {
var statearr_19712_19733 = state_19702__$1;
(statearr_19712_19733[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19703 === (11))){
var inst_19674 = (state_19702[(10)]);
var inst_19691 = (state_19702[(2)]);
var tmp19710 = inst_19674;
var inst_19674__$1 = tmp19710;
var state_19702__$1 = (function (){var statearr_19713 = state_19702;
(statearr_19713[(11)] = inst_19691);

(statearr_19713[(10)] = inst_19674__$1);

return statearr_19713;
})();
var statearr_19714_19734 = state_19702__$1;
(statearr_19714_19734[(2)] = null);

(statearr_19714_19734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19703 === (9))){
var inst_19682 = (state_19702[(7)]);
var state_19702__$1 = state_19702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19702__$1,(11),out,inst_19682);
} else {
if((state_val_19703 === (5))){
var inst_19696 = cljs.core.async.close_BANG_.call(null,out);
var state_19702__$1 = state_19702;
var statearr_19715_19735 = state_19702__$1;
(statearr_19715_19735[(2)] = inst_19696);

(statearr_19715_19735[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19703 === (10))){
var inst_19694 = (state_19702[(2)]);
var state_19702__$1 = state_19702;
var statearr_19716_19736 = state_19702__$1;
(statearr_19716_19736[(2)] = inst_19694);

(statearr_19716_19736[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19703 === (8))){
var inst_19682 = (state_19702[(7)]);
var inst_19683 = (state_19702[(9)]);
var inst_19681 = (state_19702[(8)]);
var inst_19674 = (state_19702[(10)]);
var inst_19686 = (function (){var cs = inst_19674;
var vec__19679 = inst_19681;
var v = inst_19682;
var c = inst_19683;
return ((function (cs,vec__19679,v,c,inst_19682,inst_19683,inst_19681,inst_19674,state_val_19703,c__7725__auto___19727,out){
return (function (p1__19670_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19670_SHARP_);
});
;})(cs,vec__19679,v,c,inst_19682,inst_19683,inst_19681,inst_19674,state_val_19703,c__7725__auto___19727,out))
})();
var inst_19687 = cljs.core.filterv.call(null,inst_19686,inst_19674);
var inst_19674__$1 = inst_19687;
var state_19702__$1 = (function (){var statearr_19717 = state_19702;
(statearr_19717[(10)] = inst_19674__$1);

return statearr_19717;
})();
var statearr_19718_19737 = state_19702__$1;
(statearr_19718_19737[(2)] = null);

(statearr_19718_19737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7725__auto___19727,out))
;
return ((function (switch__7663__auto__,c__7725__auto___19727,out){
return (function() {
var cljs$core$async$state_machine__7664__auto__ = null;
var cljs$core$async$state_machine__7664__auto____0 = (function (){
var statearr_19722 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19722[(0)] = cljs$core$async$state_machine__7664__auto__);

(statearr_19722[(1)] = (1));

return statearr_19722;
});
var cljs$core$async$state_machine__7664__auto____1 = (function (state_19702){
while(true){
var ret_value__7665__auto__ = (function (){try{while(true){
var result__7666__auto__ = switch__7663__auto__.call(null,state_19702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7666__auto__;
}
break;
}
}catch (e19723){if((e19723 instanceof Object)){
var ex__7667__auto__ = e19723;
var statearr_19724_19738 = state_19702;
(statearr_19724_19738[(5)] = ex__7667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19739 = state_19702;
state_19702 = G__19739;
continue;
} else {
return ret_value__7665__auto__;
}
break;
}
});
cljs$core$async$state_machine__7664__auto__ = function(state_19702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7664__auto____1.call(this,state_19702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7664__auto____0;
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7664__auto____1;
return cljs$core$async$state_machine__7664__auto__;
})()
;})(switch__7663__auto__,c__7725__auto___19727,out))
})();
var state__7727__auto__ = (function (){var statearr_19725 = f__7726__auto__.call(null);
(statearr_19725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7725__auto___19727);

return statearr_19725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7727__auto__);
});})(c__7725__auto___19727,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__19741 = arguments.length;
switch (G__19741) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7725__auto___19789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7725__auto___19789,out){
return (function (){
var f__7726__auto__ = (function (){var switch__7663__auto__ = ((function (c__7725__auto___19789,out){
return (function (state_19765){
var state_val_19766 = (state_19765[(1)]);
if((state_val_19766 === (7))){
var inst_19747 = (state_19765[(7)]);
var inst_19747__$1 = (state_19765[(2)]);
var inst_19748 = (inst_19747__$1 == null);
var inst_19749 = cljs.core.not.call(null,inst_19748);
var state_19765__$1 = (function (){var statearr_19767 = state_19765;
(statearr_19767[(7)] = inst_19747__$1);

return statearr_19767;
})();
if(inst_19749){
var statearr_19768_19790 = state_19765__$1;
(statearr_19768_19790[(1)] = (8));

} else {
var statearr_19769_19791 = state_19765__$1;
(statearr_19769_19791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (1))){
var inst_19742 = (0);
var state_19765__$1 = (function (){var statearr_19770 = state_19765;
(statearr_19770[(8)] = inst_19742);

return statearr_19770;
})();
var statearr_19771_19792 = state_19765__$1;
(statearr_19771_19792[(2)] = null);

(statearr_19771_19792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (4))){
var state_19765__$1 = state_19765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19765__$1,(7),ch);
} else {
if((state_val_19766 === (6))){
var inst_19760 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
var statearr_19772_19793 = state_19765__$1;
(statearr_19772_19793[(2)] = inst_19760);

(statearr_19772_19793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (3))){
var inst_19762 = (state_19765[(2)]);
var inst_19763 = cljs.core.async.close_BANG_.call(null,out);
var state_19765__$1 = (function (){var statearr_19773 = state_19765;
(statearr_19773[(9)] = inst_19762);

return statearr_19773;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19765__$1,inst_19763);
} else {
if((state_val_19766 === (2))){
var inst_19742 = (state_19765[(8)]);
var inst_19744 = (inst_19742 < n);
var state_19765__$1 = state_19765;
if(cljs.core.truth_(inst_19744)){
var statearr_19774_19794 = state_19765__$1;
(statearr_19774_19794[(1)] = (4));

} else {
var statearr_19775_19795 = state_19765__$1;
(statearr_19775_19795[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (11))){
var inst_19742 = (state_19765[(8)]);
var inst_19752 = (state_19765[(2)]);
var inst_19753 = (inst_19742 + (1));
var inst_19742__$1 = inst_19753;
var state_19765__$1 = (function (){var statearr_19776 = state_19765;
(statearr_19776[(10)] = inst_19752);

(statearr_19776[(8)] = inst_19742__$1);

return statearr_19776;
})();
var statearr_19777_19796 = state_19765__$1;
(statearr_19777_19796[(2)] = null);

(statearr_19777_19796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (9))){
var state_19765__$1 = state_19765;
var statearr_19778_19797 = state_19765__$1;
(statearr_19778_19797[(2)] = null);

(statearr_19778_19797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (5))){
var state_19765__$1 = state_19765;
var statearr_19779_19798 = state_19765__$1;
(statearr_19779_19798[(2)] = null);

(statearr_19779_19798[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (10))){
var inst_19757 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
var statearr_19780_19799 = state_19765__$1;
(statearr_19780_19799[(2)] = inst_19757);

(statearr_19780_19799[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19766 === (8))){
var inst_19747 = (state_19765[(7)]);
var state_19765__$1 = state_19765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19765__$1,(11),out,inst_19747);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7725__auto___19789,out))
;
return ((function (switch__7663__auto__,c__7725__auto___19789,out){
return (function() {
var cljs$core$async$state_machine__7664__auto__ = null;
var cljs$core$async$state_machine__7664__auto____0 = (function (){
var statearr_19784 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19784[(0)] = cljs$core$async$state_machine__7664__auto__);

(statearr_19784[(1)] = (1));

return statearr_19784;
});
var cljs$core$async$state_machine__7664__auto____1 = (function (state_19765){
while(true){
var ret_value__7665__auto__ = (function (){try{while(true){
var result__7666__auto__ = switch__7663__auto__.call(null,state_19765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7666__auto__;
}
break;
}
}catch (e19785){if((e19785 instanceof Object)){
var ex__7667__auto__ = e19785;
var statearr_19786_19800 = state_19765;
(statearr_19786_19800[(5)] = ex__7667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19801 = state_19765;
state_19765 = G__19801;
continue;
} else {
return ret_value__7665__auto__;
}
break;
}
});
cljs$core$async$state_machine__7664__auto__ = function(state_19765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7664__auto____1.call(this,state_19765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7664__auto____0;
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7664__auto____1;
return cljs$core$async$state_machine__7664__auto__;
})()
;})(switch__7663__auto__,c__7725__auto___19789,out))
})();
var state__7727__auto__ = (function (){var statearr_19787 = f__7726__auto__.call(null);
(statearr_19787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7725__auto___19789);

return statearr_19787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7727__auto__);
});})(c__7725__auto___19789,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t19809 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19809 = (function (map_LT_,f,ch,meta19810){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19810 = meta19810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19811,meta19810__$1){
var self__ = this;
var _19811__$1 = this;
return (new cljs.core.async.t19809(self__.map_LT_,self__.f,self__.ch,meta19810__$1));
});

cljs.core.async.t19809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19811){
var self__ = this;
var _19811__$1 = this;
return self__.meta19810;
});

cljs.core.async.t19809.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19809.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19809.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19809.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19809.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t19812 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19812 = (function (map_LT_,f,ch,meta19810,_,fn1,meta19813){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19810 = meta19810;
this._ = _;
this.fn1 = fn1;
this.meta19813 = meta19813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19814,meta19813__$1){
var self__ = this;
var _19814__$1 = this;
return (new cljs.core.async.t19812(self__.map_LT_,self__.f,self__.ch,self__.meta19810,self__._,self__.fn1,meta19813__$1));
});})(___$1))
;

cljs.core.async.t19812.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19814){
var self__ = this;
var _19814__$1 = this;
return self__.meta19813;
});})(___$1))
;

cljs.core.async.t19812.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19812.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t19812.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19802_SHARP_){
return f1.call(null,(((p1__19802_SHARP_ == null))?null:self__.f.call(null,p1__19802_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19812.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19810","meta19810",1482266240,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19813","meta19813",57130925,null)], null);
});})(___$1))
;

cljs.core.async.t19812.cljs$lang$type = true;

cljs.core.async.t19812.cljs$lang$ctorStr = "cljs.core.async/t19812";

cljs.core.async.t19812.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t19812");
});})(___$1))
;

cljs.core.async.__GT_t19812 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t19812(map_LT___$1,f__$1,ch__$1,meta19810__$1,___$2,fn1__$1,meta19813){
return (new cljs.core.async.t19812(map_LT___$1,f__$1,ch__$1,meta19810__$1,___$2,fn1__$1,meta19813));
});})(___$1))
;

}

return (new cljs.core.async.t19812(self__.map_LT_,self__.f,self__.ch,self__.meta19810,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4297__auto__ = ret;
if(cljs.core.truth_(and__4297__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4297__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t19809.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19809.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t19809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19810","meta19810",1482266240,null)], null);
});

cljs.core.async.t19809.cljs$lang$type = true;

cljs.core.async.t19809.cljs$lang$ctorStr = "cljs.core.async/t19809";

cljs.core.async.t19809.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t19809");
});

cljs.core.async.__GT_t19809 = (function cljs$core$async$map_LT__$___GT_t19809(map_LT___$1,f__$1,ch__$1,meta19810){
return (new cljs.core.async.t19809(map_LT___$1,f__$1,ch__$1,meta19810));
});

}

return (new cljs.core.async.t19809(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t19818 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19818 = (function (map_GT_,f,ch,meta19819){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19819 = meta19819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19820,meta19819__$1){
var self__ = this;
var _19820__$1 = this;
return (new cljs.core.async.t19818(self__.map_GT_,self__.f,self__.ch,meta19819__$1));
});

cljs.core.async.t19818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19820){
var self__ = this;
var _19820__$1 = this;
return self__.meta19819;
});

cljs.core.async.t19818.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19818.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19818.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19818.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19818.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19818.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t19818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19819","meta19819",-1753250935,null)], null);
});

cljs.core.async.t19818.cljs$lang$type = true;

cljs.core.async.t19818.cljs$lang$ctorStr = "cljs.core.async/t19818";

cljs.core.async.t19818.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t19818");
});

cljs.core.async.__GT_t19818 = (function cljs$core$async$map_GT__$___GT_t19818(map_GT___$1,f__$1,ch__$1,meta19819){
return (new cljs.core.async.t19818(map_GT___$1,f__$1,ch__$1,meta19819));
});

}

return (new cljs.core.async.t19818(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t19824 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19824 = (function (filter_GT_,p,ch,meta19825){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19825 = meta19825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19826,meta19825__$1){
var self__ = this;
var _19826__$1 = this;
return (new cljs.core.async.t19824(self__.filter_GT_,self__.p,self__.ch,meta19825__$1));
});

cljs.core.async.t19824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19826){
var self__ = this;
var _19826__$1 = this;
return self__.meta19825;
});

cljs.core.async.t19824.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19824.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19824.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19824.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19824.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19824.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19824.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t19824.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19825","meta19825",-1699044547,null)], null);
});

cljs.core.async.t19824.cljs$lang$type = true;

cljs.core.async.t19824.cljs$lang$ctorStr = "cljs.core.async/t19824";

cljs.core.async.t19824.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t19824");
});

cljs.core.async.__GT_t19824 = (function cljs$core$async$filter_GT__$___GT_t19824(filter_GT___$1,p__$1,ch__$1,meta19825){
return (new cljs.core.async.t19824(filter_GT___$1,p__$1,ch__$1,meta19825));
});

}

return (new cljs.core.async.t19824(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__19828 = arguments.length;
switch (G__19828) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7725__auto___19871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7725__auto___19871,out){
return (function (){
var f__7726__auto__ = (function (){var switch__7663__auto__ = ((function (c__7725__auto___19871,out){
return (function (state_19849){
var state_val_19850 = (state_19849[(1)]);
if((state_val_19850 === (7))){
var inst_19845 = (state_19849[(2)]);
var state_19849__$1 = state_19849;
var statearr_19851_19872 = state_19849__$1;
(statearr_19851_19872[(2)] = inst_19845);

(statearr_19851_19872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19850 === (1))){
var state_19849__$1 = state_19849;
var statearr_19852_19873 = state_19849__$1;
(statearr_19852_19873[(2)] = null);

(statearr_19852_19873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19850 === (4))){
var inst_19831 = (state_19849[(7)]);
var inst_19831__$1 = (state_19849[(2)]);
var inst_19832 = (inst_19831__$1 == null);
var state_19849__$1 = (function (){var statearr_19853 = state_19849;
(statearr_19853[(7)] = inst_19831__$1);

return statearr_19853;
})();
if(cljs.core.truth_(inst_19832)){
var statearr_19854_19874 = state_19849__$1;
(statearr_19854_19874[(1)] = (5));

} else {
var statearr_19855_19875 = state_19849__$1;
(statearr_19855_19875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19850 === (6))){
var inst_19831 = (state_19849[(7)]);
var inst_19836 = p.call(null,inst_19831);
var state_19849__$1 = state_19849;
if(cljs.core.truth_(inst_19836)){
var statearr_19856_19876 = state_19849__$1;
(statearr_19856_19876[(1)] = (8));

} else {
var statearr_19857_19877 = state_19849__$1;
(statearr_19857_19877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19850 === (3))){
var inst_19847 = (state_19849[(2)]);
var state_19849__$1 = state_19849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19849__$1,inst_19847);
} else {
if((state_val_19850 === (2))){
var state_19849__$1 = state_19849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19849__$1,(4),ch);
} else {
if((state_val_19850 === (11))){
var inst_19839 = (state_19849[(2)]);
var state_19849__$1 = state_19849;
var statearr_19858_19878 = state_19849__$1;
(statearr_19858_19878[(2)] = inst_19839);

(statearr_19858_19878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19850 === (9))){
var state_19849__$1 = state_19849;
var statearr_19859_19879 = state_19849__$1;
(statearr_19859_19879[(2)] = null);

(statearr_19859_19879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19850 === (5))){
var inst_19834 = cljs.core.async.close_BANG_.call(null,out);
var state_19849__$1 = state_19849;
var statearr_19860_19880 = state_19849__$1;
(statearr_19860_19880[(2)] = inst_19834);

(statearr_19860_19880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19850 === (10))){
var inst_19842 = (state_19849[(2)]);
var state_19849__$1 = (function (){var statearr_19861 = state_19849;
(statearr_19861[(8)] = inst_19842);

return statearr_19861;
})();
var statearr_19862_19881 = state_19849__$1;
(statearr_19862_19881[(2)] = null);

(statearr_19862_19881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19850 === (8))){
var inst_19831 = (state_19849[(7)]);
var state_19849__$1 = state_19849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19849__$1,(11),out,inst_19831);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7725__auto___19871,out))
;
return ((function (switch__7663__auto__,c__7725__auto___19871,out){
return (function() {
var cljs$core$async$state_machine__7664__auto__ = null;
var cljs$core$async$state_machine__7664__auto____0 = (function (){
var statearr_19866 = [null,null,null,null,null,null,null,null,null];
(statearr_19866[(0)] = cljs$core$async$state_machine__7664__auto__);

(statearr_19866[(1)] = (1));

return statearr_19866;
});
var cljs$core$async$state_machine__7664__auto____1 = (function (state_19849){
while(true){
var ret_value__7665__auto__ = (function (){try{while(true){
var result__7666__auto__ = switch__7663__auto__.call(null,state_19849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7666__auto__;
}
break;
}
}catch (e19867){if((e19867 instanceof Object)){
var ex__7667__auto__ = e19867;
var statearr_19868_19882 = state_19849;
(statearr_19868_19882[(5)] = ex__7667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19883 = state_19849;
state_19849 = G__19883;
continue;
} else {
return ret_value__7665__auto__;
}
break;
}
});
cljs$core$async$state_machine__7664__auto__ = function(state_19849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7664__auto____1.call(this,state_19849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7664__auto____0;
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7664__auto____1;
return cljs$core$async$state_machine__7664__auto__;
})()
;})(switch__7663__auto__,c__7725__auto___19871,out))
})();
var state__7727__auto__ = (function (){var statearr_19869 = f__7726__auto__.call(null);
(statearr_19869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7725__auto___19871);

return statearr_19869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7727__auto__);
});})(c__7725__auto___19871,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__19885 = arguments.length;
switch (G__19885) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7725__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7725__auto__){
return (function (){
var f__7726__auto__ = (function (){var switch__7663__auto__ = ((function (c__7725__auto__){
return (function (state_20052){
var state_val_20053 = (state_20052[(1)]);
if((state_val_20053 === (7))){
var inst_20048 = (state_20052[(2)]);
var state_20052__$1 = state_20052;
var statearr_20054_20095 = state_20052__$1;
(statearr_20054_20095[(2)] = inst_20048);

(statearr_20054_20095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (20))){
var inst_20018 = (state_20052[(7)]);
var inst_20029 = (state_20052[(2)]);
var inst_20030 = cljs.core.next.call(null,inst_20018);
var inst_20004 = inst_20030;
var inst_20005 = null;
var inst_20006 = (0);
var inst_20007 = (0);
var state_20052__$1 = (function (){var statearr_20055 = state_20052;
(statearr_20055[(8)] = inst_20029);

(statearr_20055[(9)] = inst_20007);

(statearr_20055[(10)] = inst_20006);

(statearr_20055[(11)] = inst_20004);

(statearr_20055[(12)] = inst_20005);

return statearr_20055;
})();
var statearr_20056_20096 = state_20052__$1;
(statearr_20056_20096[(2)] = null);

(statearr_20056_20096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (1))){
var state_20052__$1 = state_20052;
var statearr_20057_20097 = state_20052__$1;
(statearr_20057_20097[(2)] = null);

(statearr_20057_20097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (4))){
var inst_19993 = (state_20052[(13)]);
var inst_19993__$1 = (state_20052[(2)]);
var inst_19994 = (inst_19993__$1 == null);
var state_20052__$1 = (function (){var statearr_20058 = state_20052;
(statearr_20058[(13)] = inst_19993__$1);

return statearr_20058;
})();
if(cljs.core.truth_(inst_19994)){
var statearr_20059_20098 = state_20052__$1;
(statearr_20059_20098[(1)] = (5));

} else {
var statearr_20060_20099 = state_20052__$1;
(statearr_20060_20099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (15))){
var state_20052__$1 = state_20052;
var statearr_20064_20100 = state_20052__$1;
(statearr_20064_20100[(2)] = null);

(statearr_20064_20100[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (21))){
var state_20052__$1 = state_20052;
var statearr_20065_20101 = state_20052__$1;
(statearr_20065_20101[(2)] = null);

(statearr_20065_20101[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (13))){
var inst_20007 = (state_20052[(9)]);
var inst_20006 = (state_20052[(10)]);
var inst_20004 = (state_20052[(11)]);
var inst_20005 = (state_20052[(12)]);
var inst_20014 = (state_20052[(2)]);
var inst_20015 = (inst_20007 + (1));
var tmp20061 = inst_20006;
var tmp20062 = inst_20004;
var tmp20063 = inst_20005;
var inst_20004__$1 = tmp20062;
var inst_20005__$1 = tmp20063;
var inst_20006__$1 = tmp20061;
var inst_20007__$1 = inst_20015;
var state_20052__$1 = (function (){var statearr_20066 = state_20052;
(statearr_20066[(9)] = inst_20007__$1);

(statearr_20066[(10)] = inst_20006__$1);

(statearr_20066[(11)] = inst_20004__$1);

(statearr_20066[(14)] = inst_20014);

(statearr_20066[(12)] = inst_20005__$1);

return statearr_20066;
})();
var statearr_20067_20102 = state_20052__$1;
(statearr_20067_20102[(2)] = null);

(statearr_20067_20102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (22))){
var state_20052__$1 = state_20052;
var statearr_20068_20103 = state_20052__$1;
(statearr_20068_20103[(2)] = null);

(statearr_20068_20103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (6))){
var inst_19993 = (state_20052[(13)]);
var inst_20002 = f.call(null,inst_19993);
var inst_20003 = cljs.core.seq.call(null,inst_20002);
var inst_20004 = inst_20003;
var inst_20005 = null;
var inst_20006 = (0);
var inst_20007 = (0);
var state_20052__$1 = (function (){var statearr_20069 = state_20052;
(statearr_20069[(9)] = inst_20007);

(statearr_20069[(10)] = inst_20006);

(statearr_20069[(11)] = inst_20004);

(statearr_20069[(12)] = inst_20005);

return statearr_20069;
})();
var statearr_20070_20104 = state_20052__$1;
(statearr_20070_20104[(2)] = null);

(statearr_20070_20104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (17))){
var inst_20018 = (state_20052[(7)]);
var inst_20022 = cljs.core.chunk_first.call(null,inst_20018);
var inst_20023 = cljs.core.chunk_rest.call(null,inst_20018);
var inst_20024 = cljs.core.count.call(null,inst_20022);
var inst_20004 = inst_20023;
var inst_20005 = inst_20022;
var inst_20006 = inst_20024;
var inst_20007 = (0);
var state_20052__$1 = (function (){var statearr_20071 = state_20052;
(statearr_20071[(9)] = inst_20007);

(statearr_20071[(10)] = inst_20006);

(statearr_20071[(11)] = inst_20004);

(statearr_20071[(12)] = inst_20005);

return statearr_20071;
})();
var statearr_20072_20105 = state_20052__$1;
(statearr_20072_20105[(2)] = null);

(statearr_20072_20105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (3))){
var inst_20050 = (state_20052[(2)]);
var state_20052__$1 = state_20052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20052__$1,inst_20050);
} else {
if((state_val_20053 === (12))){
var inst_20038 = (state_20052[(2)]);
var state_20052__$1 = state_20052;
var statearr_20073_20106 = state_20052__$1;
(statearr_20073_20106[(2)] = inst_20038);

(statearr_20073_20106[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (2))){
var state_20052__$1 = state_20052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20052__$1,(4),in$);
} else {
if((state_val_20053 === (23))){
var inst_20046 = (state_20052[(2)]);
var state_20052__$1 = state_20052;
var statearr_20074_20107 = state_20052__$1;
(statearr_20074_20107[(2)] = inst_20046);

(statearr_20074_20107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (19))){
var inst_20033 = (state_20052[(2)]);
var state_20052__$1 = state_20052;
var statearr_20075_20108 = state_20052__$1;
(statearr_20075_20108[(2)] = inst_20033);

(statearr_20075_20108[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (11))){
var inst_20018 = (state_20052[(7)]);
var inst_20004 = (state_20052[(11)]);
var inst_20018__$1 = cljs.core.seq.call(null,inst_20004);
var state_20052__$1 = (function (){var statearr_20076 = state_20052;
(statearr_20076[(7)] = inst_20018__$1);

return statearr_20076;
})();
if(inst_20018__$1){
var statearr_20077_20109 = state_20052__$1;
(statearr_20077_20109[(1)] = (14));

} else {
var statearr_20078_20110 = state_20052__$1;
(statearr_20078_20110[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (9))){
var inst_20040 = (state_20052[(2)]);
var inst_20041 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_20052__$1 = (function (){var statearr_20079 = state_20052;
(statearr_20079[(15)] = inst_20040);

return statearr_20079;
})();
if(cljs.core.truth_(inst_20041)){
var statearr_20080_20111 = state_20052__$1;
(statearr_20080_20111[(1)] = (21));

} else {
var statearr_20081_20112 = state_20052__$1;
(statearr_20081_20112[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (5))){
var inst_19996 = cljs.core.async.close_BANG_.call(null,out);
var state_20052__$1 = state_20052;
var statearr_20082_20113 = state_20052__$1;
(statearr_20082_20113[(2)] = inst_19996);

(statearr_20082_20113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (14))){
var inst_20018 = (state_20052[(7)]);
var inst_20020 = cljs.core.chunked_seq_QMARK_.call(null,inst_20018);
var state_20052__$1 = state_20052;
if(inst_20020){
var statearr_20083_20114 = state_20052__$1;
(statearr_20083_20114[(1)] = (17));

} else {
var statearr_20084_20115 = state_20052__$1;
(statearr_20084_20115[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (16))){
var inst_20036 = (state_20052[(2)]);
var state_20052__$1 = state_20052;
var statearr_20085_20116 = state_20052__$1;
(statearr_20085_20116[(2)] = inst_20036);

(statearr_20085_20116[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20053 === (10))){
var inst_20007 = (state_20052[(9)]);
var inst_20005 = (state_20052[(12)]);
var inst_20012 = cljs.core._nth.call(null,inst_20005,inst_20007);
var state_20052__$1 = state_20052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20052__$1,(13),out,inst_20012);
} else {
if((state_val_20053 === (18))){
var inst_20018 = (state_20052[(7)]);
var inst_20027 = cljs.core.first.call(null,inst_20018);
var state_20052__$1 = state_20052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20052__$1,(20),out,inst_20027);
} else {
if((state_val_20053 === (8))){
var inst_20007 = (state_20052[(9)]);
var inst_20006 = (state_20052[(10)]);
var inst_20009 = (inst_20007 < inst_20006);
var inst_20010 = inst_20009;
var state_20052__$1 = state_20052;
if(cljs.core.truth_(inst_20010)){
var statearr_20086_20117 = state_20052__$1;
(statearr_20086_20117[(1)] = (10));

} else {
var statearr_20087_20118 = state_20052__$1;
(statearr_20087_20118[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7725__auto__))
;
return ((function (switch__7663__auto__,c__7725__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7664__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7664__auto____0 = (function (){
var statearr_20091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20091[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7664__auto__);

(statearr_20091[(1)] = (1));

return statearr_20091;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7664__auto____1 = (function (state_20052){
while(true){
var ret_value__7665__auto__ = (function (){try{while(true){
var result__7666__auto__ = switch__7663__auto__.call(null,state_20052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7666__auto__;
}
break;
}
}catch (e20092){if((e20092 instanceof Object)){
var ex__7667__auto__ = e20092;
var statearr_20093_20119 = state_20052;
(statearr_20093_20119[(5)] = ex__7667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20120 = state_20052;
state_20052 = G__20120;
continue;
} else {
return ret_value__7665__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7664__auto__ = function(state_20052){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7664__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7664__auto____1.call(this,state_20052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7664__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7664__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7664__auto__;
})()
;})(switch__7663__auto__,c__7725__auto__))
})();
var state__7727__auto__ = (function (){var statearr_20094 = f__7726__auto__.call(null);
(statearr_20094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7725__auto__);

return statearr_20094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7727__auto__);
});})(c__7725__auto__))
);

return c__7725__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__20122 = arguments.length;
switch (G__20122) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__20125 = arguments.length;
switch (G__20125) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__20128 = arguments.length;
switch (G__20128) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7725__auto___20178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7725__auto___20178,out){
return (function (){
var f__7726__auto__ = (function (){var switch__7663__auto__ = ((function (c__7725__auto___20178,out){
return (function (state_20152){
var state_val_20153 = (state_20152[(1)]);
if((state_val_20153 === (7))){
var inst_20147 = (state_20152[(2)]);
var state_20152__$1 = state_20152;
var statearr_20154_20179 = state_20152__$1;
(statearr_20154_20179[(2)] = inst_20147);

(statearr_20154_20179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20153 === (1))){
var inst_20129 = null;
var state_20152__$1 = (function (){var statearr_20155 = state_20152;
(statearr_20155[(7)] = inst_20129);

return statearr_20155;
})();
var statearr_20156_20180 = state_20152__$1;
(statearr_20156_20180[(2)] = null);

(statearr_20156_20180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20153 === (4))){
var inst_20132 = (state_20152[(8)]);
var inst_20132__$1 = (state_20152[(2)]);
var inst_20133 = (inst_20132__$1 == null);
var inst_20134 = cljs.core.not.call(null,inst_20133);
var state_20152__$1 = (function (){var statearr_20157 = state_20152;
(statearr_20157[(8)] = inst_20132__$1);

return statearr_20157;
})();
if(inst_20134){
var statearr_20158_20181 = state_20152__$1;
(statearr_20158_20181[(1)] = (5));

} else {
var statearr_20159_20182 = state_20152__$1;
(statearr_20159_20182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20153 === (6))){
var state_20152__$1 = state_20152;
var statearr_20160_20183 = state_20152__$1;
(statearr_20160_20183[(2)] = null);

(statearr_20160_20183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20153 === (3))){
var inst_20149 = (state_20152[(2)]);
var inst_20150 = cljs.core.async.close_BANG_.call(null,out);
var state_20152__$1 = (function (){var statearr_20161 = state_20152;
(statearr_20161[(9)] = inst_20149);

return statearr_20161;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20152__$1,inst_20150);
} else {
if((state_val_20153 === (2))){
var state_20152__$1 = state_20152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20152__$1,(4),ch);
} else {
if((state_val_20153 === (11))){
var inst_20132 = (state_20152[(8)]);
var inst_20141 = (state_20152[(2)]);
var inst_20129 = inst_20132;
var state_20152__$1 = (function (){var statearr_20162 = state_20152;
(statearr_20162[(10)] = inst_20141);

(statearr_20162[(7)] = inst_20129);

return statearr_20162;
})();
var statearr_20163_20184 = state_20152__$1;
(statearr_20163_20184[(2)] = null);

(statearr_20163_20184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20153 === (9))){
var inst_20132 = (state_20152[(8)]);
var state_20152__$1 = state_20152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20152__$1,(11),out,inst_20132);
} else {
if((state_val_20153 === (5))){
var inst_20132 = (state_20152[(8)]);
var inst_20129 = (state_20152[(7)]);
var inst_20136 = cljs.core._EQ_.call(null,inst_20132,inst_20129);
var state_20152__$1 = state_20152;
if(inst_20136){
var statearr_20165_20185 = state_20152__$1;
(statearr_20165_20185[(1)] = (8));

} else {
var statearr_20166_20186 = state_20152__$1;
(statearr_20166_20186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20153 === (10))){
var inst_20144 = (state_20152[(2)]);
var state_20152__$1 = state_20152;
var statearr_20167_20187 = state_20152__$1;
(statearr_20167_20187[(2)] = inst_20144);

(statearr_20167_20187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20153 === (8))){
var inst_20129 = (state_20152[(7)]);
var tmp20164 = inst_20129;
var inst_20129__$1 = tmp20164;
var state_20152__$1 = (function (){var statearr_20168 = state_20152;
(statearr_20168[(7)] = inst_20129__$1);

return statearr_20168;
})();
var statearr_20169_20188 = state_20152__$1;
(statearr_20169_20188[(2)] = null);

(statearr_20169_20188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7725__auto___20178,out))
;
return ((function (switch__7663__auto__,c__7725__auto___20178,out){
return (function() {
var cljs$core$async$state_machine__7664__auto__ = null;
var cljs$core$async$state_machine__7664__auto____0 = (function (){
var statearr_20173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20173[(0)] = cljs$core$async$state_machine__7664__auto__);

(statearr_20173[(1)] = (1));

return statearr_20173;
});
var cljs$core$async$state_machine__7664__auto____1 = (function (state_20152){
while(true){
var ret_value__7665__auto__ = (function (){try{while(true){
var result__7666__auto__ = switch__7663__auto__.call(null,state_20152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7666__auto__;
}
break;
}
}catch (e20174){if((e20174 instanceof Object)){
var ex__7667__auto__ = e20174;
var statearr_20175_20189 = state_20152;
(statearr_20175_20189[(5)] = ex__7667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20190 = state_20152;
state_20152 = G__20190;
continue;
} else {
return ret_value__7665__auto__;
}
break;
}
});
cljs$core$async$state_machine__7664__auto__ = function(state_20152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7664__auto____1.call(this,state_20152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7664__auto____0;
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7664__auto____1;
return cljs$core$async$state_machine__7664__auto__;
})()
;})(switch__7663__auto__,c__7725__auto___20178,out))
})();
var state__7727__auto__ = (function (){var statearr_20176 = f__7726__auto__.call(null);
(statearr_20176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7725__auto___20178);

return statearr_20176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7727__auto__);
});})(c__7725__auto___20178,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__20192 = arguments.length;
switch (G__20192) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7725__auto___20261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7725__auto___20261,out){
return (function (){
var f__7726__auto__ = (function (){var switch__7663__auto__ = ((function (c__7725__auto___20261,out){
return (function (state_20230){
var state_val_20231 = (state_20230[(1)]);
if((state_val_20231 === (7))){
var inst_20226 = (state_20230[(2)]);
var state_20230__$1 = state_20230;
var statearr_20232_20262 = state_20230__$1;
(statearr_20232_20262[(2)] = inst_20226);

(statearr_20232_20262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20231 === (1))){
var inst_20193 = (new Array(n));
var inst_20194 = inst_20193;
var inst_20195 = (0);
var state_20230__$1 = (function (){var statearr_20233 = state_20230;
(statearr_20233[(7)] = inst_20194);

(statearr_20233[(8)] = inst_20195);

return statearr_20233;
})();
var statearr_20234_20263 = state_20230__$1;
(statearr_20234_20263[(2)] = null);

(statearr_20234_20263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20231 === (4))){
var inst_20198 = (state_20230[(9)]);
var inst_20198__$1 = (state_20230[(2)]);
var inst_20199 = (inst_20198__$1 == null);
var inst_20200 = cljs.core.not.call(null,inst_20199);
var state_20230__$1 = (function (){var statearr_20235 = state_20230;
(statearr_20235[(9)] = inst_20198__$1);

return statearr_20235;
})();
if(inst_20200){
var statearr_20236_20264 = state_20230__$1;
(statearr_20236_20264[(1)] = (5));

} else {
var statearr_20237_20265 = state_20230__$1;
(statearr_20237_20265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20231 === (15))){
var inst_20220 = (state_20230[(2)]);
var state_20230__$1 = state_20230;
var statearr_20238_20266 = state_20230__$1;
(statearr_20238_20266[(2)] = inst_20220);

(statearr_20238_20266[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20231 === (13))){
var state_20230__$1 = state_20230;
var statearr_20239_20267 = state_20230__$1;
(statearr_20239_20267[(2)] = null);

(statearr_20239_20267[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20231 === (6))){
var inst_20195 = (state_20230[(8)]);
var inst_20216 = (inst_20195 > (0));
var state_20230__$1 = state_20230;
if(cljs.core.truth_(inst_20216)){
var statearr_20240_20268 = state_20230__$1;
(statearr_20240_20268[(1)] = (12));

} else {
var statearr_20241_20269 = state_20230__$1;
(statearr_20241_20269[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20231 === (3))){
var inst_20228 = (state_20230[(2)]);
var state_20230__$1 = state_20230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20230__$1,inst_20228);
} else {
if((state_val_20231 === (12))){
var inst_20194 = (state_20230[(7)]);
var inst_20218 = cljs.core.vec.call(null,inst_20194);
var state_20230__$1 = state_20230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20230__$1,(15),out,inst_20218);
} else {
if((state_val_20231 === (2))){
var state_20230__$1 = state_20230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20230__$1,(4),ch);
} else {
if((state_val_20231 === (11))){
var inst_20210 = (state_20230[(2)]);
var inst_20211 = (new Array(n));
var inst_20194 = inst_20211;
var inst_20195 = (0);
var state_20230__$1 = (function (){var statearr_20242 = state_20230;
(statearr_20242[(7)] = inst_20194);

(statearr_20242[(8)] = inst_20195);

(statearr_20242[(10)] = inst_20210);

return statearr_20242;
})();
var statearr_20243_20270 = state_20230__$1;
(statearr_20243_20270[(2)] = null);

(statearr_20243_20270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20231 === (9))){
var inst_20194 = (state_20230[(7)]);
var inst_20208 = cljs.core.vec.call(null,inst_20194);
var state_20230__$1 = state_20230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20230__$1,(11),out,inst_20208);
} else {
if((state_val_20231 === (5))){
var inst_20203 = (state_20230[(11)]);
var inst_20198 = (state_20230[(9)]);
var inst_20194 = (state_20230[(7)]);
var inst_20195 = (state_20230[(8)]);
var inst_20202 = (inst_20194[inst_20195] = inst_20198);
var inst_20203__$1 = (inst_20195 + (1));
var inst_20204 = (inst_20203__$1 < n);
var state_20230__$1 = (function (){var statearr_20244 = state_20230;
(statearr_20244[(11)] = inst_20203__$1);

(statearr_20244[(12)] = inst_20202);

return statearr_20244;
})();
if(cljs.core.truth_(inst_20204)){
var statearr_20245_20271 = state_20230__$1;
(statearr_20245_20271[(1)] = (8));

} else {
var statearr_20246_20272 = state_20230__$1;
(statearr_20246_20272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20231 === (14))){
var inst_20223 = (state_20230[(2)]);
var inst_20224 = cljs.core.async.close_BANG_.call(null,out);
var state_20230__$1 = (function (){var statearr_20248 = state_20230;
(statearr_20248[(13)] = inst_20223);

return statearr_20248;
})();
var statearr_20249_20273 = state_20230__$1;
(statearr_20249_20273[(2)] = inst_20224);

(statearr_20249_20273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20231 === (10))){
var inst_20214 = (state_20230[(2)]);
var state_20230__$1 = state_20230;
var statearr_20250_20274 = state_20230__$1;
(statearr_20250_20274[(2)] = inst_20214);

(statearr_20250_20274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20231 === (8))){
var inst_20203 = (state_20230[(11)]);
var inst_20194 = (state_20230[(7)]);
var tmp20247 = inst_20194;
var inst_20194__$1 = tmp20247;
var inst_20195 = inst_20203;
var state_20230__$1 = (function (){var statearr_20251 = state_20230;
(statearr_20251[(7)] = inst_20194__$1);

(statearr_20251[(8)] = inst_20195);

return statearr_20251;
})();
var statearr_20252_20275 = state_20230__$1;
(statearr_20252_20275[(2)] = null);

(statearr_20252_20275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7725__auto___20261,out))
;
return ((function (switch__7663__auto__,c__7725__auto___20261,out){
return (function() {
var cljs$core$async$state_machine__7664__auto__ = null;
var cljs$core$async$state_machine__7664__auto____0 = (function (){
var statearr_20256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20256[(0)] = cljs$core$async$state_machine__7664__auto__);

(statearr_20256[(1)] = (1));

return statearr_20256;
});
var cljs$core$async$state_machine__7664__auto____1 = (function (state_20230){
while(true){
var ret_value__7665__auto__ = (function (){try{while(true){
var result__7666__auto__ = switch__7663__auto__.call(null,state_20230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7666__auto__;
}
break;
}
}catch (e20257){if((e20257 instanceof Object)){
var ex__7667__auto__ = e20257;
var statearr_20258_20276 = state_20230;
(statearr_20258_20276[(5)] = ex__7667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20277 = state_20230;
state_20230 = G__20277;
continue;
} else {
return ret_value__7665__auto__;
}
break;
}
});
cljs$core$async$state_machine__7664__auto__ = function(state_20230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7664__auto____1.call(this,state_20230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7664__auto____0;
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7664__auto____1;
return cljs$core$async$state_machine__7664__auto__;
})()
;})(switch__7663__auto__,c__7725__auto___20261,out))
})();
var state__7727__auto__ = (function (){var statearr_20259 = f__7726__auto__.call(null);
(statearr_20259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7725__auto___20261);

return statearr_20259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7727__auto__);
});})(c__7725__auto___20261,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__20279 = arguments.length;
switch (G__20279) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7725__auto___20352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7725__auto___20352,out){
return (function (){
var f__7726__auto__ = (function (){var switch__7663__auto__ = ((function (c__7725__auto___20352,out){
return (function (state_20321){
var state_val_20322 = (state_20321[(1)]);
if((state_val_20322 === (7))){
var inst_20317 = (state_20321[(2)]);
var state_20321__$1 = state_20321;
var statearr_20323_20353 = state_20321__$1;
(statearr_20323_20353[(2)] = inst_20317);

(statearr_20323_20353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (1))){
var inst_20280 = [];
var inst_20281 = inst_20280;
var inst_20282 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20321__$1 = (function (){var statearr_20324 = state_20321;
(statearr_20324[(7)] = inst_20282);

(statearr_20324[(8)] = inst_20281);

return statearr_20324;
})();
var statearr_20325_20354 = state_20321__$1;
(statearr_20325_20354[(2)] = null);

(statearr_20325_20354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (4))){
var inst_20285 = (state_20321[(9)]);
var inst_20285__$1 = (state_20321[(2)]);
var inst_20286 = (inst_20285__$1 == null);
var inst_20287 = cljs.core.not.call(null,inst_20286);
var state_20321__$1 = (function (){var statearr_20326 = state_20321;
(statearr_20326[(9)] = inst_20285__$1);

return statearr_20326;
})();
if(inst_20287){
var statearr_20327_20355 = state_20321__$1;
(statearr_20327_20355[(1)] = (5));

} else {
var statearr_20328_20356 = state_20321__$1;
(statearr_20328_20356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (15))){
var inst_20311 = (state_20321[(2)]);
var state_20321__$1 = state_20321;
var statearr_20329_20357 = state_20321__$1;
(statearr_20329_20357[(2)] = inst_20311);

(statearr_20329_20357[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (13))){
var state_20321__$1 = state_20321;
var statearr_20330_20358 = state_20321__$1;
(statearr_20330_20358[(2)] = null);

(statearr_20330_20358[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (6))){
var inst_20281 = (state_20321[(8)]);
var inst_20306 = inst_20281.length;
var inst_20307 = (inst_20306 > (0));
var state_20321__$1 = state_20321;
if(cljs.core.truth_(inst_20307)){
var statearr_20331_20359 = state_20321__$1;
(statearr_20331_20359[(1)] = (12));

} else {
var statearr_20332_20360 = state_20321__$1;
(statearr_20332_20360[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (3))){
var inst_20319 = (state_20321[(2)]);
var state_20321__$1 = state_20321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20321__$1,inst_20319);
} else {
if((state_val_20322 === (12))){
var inst_20281 = (state_20321[(8)]);
var inst_20309 = cljs.core.vec.call(null,inst_20281);
var state_20321__$1 = state_20321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20321__$1,(15),out,inst_20309);
} else {
if((state_val_20322 === (2))){
var state_20321__$1 = state_20321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20321__$1,(4),ch);
} else {
if((state_val_20322 === (11))){
var inst_20285 = (state_20321[(9)]);
var inst_20289 = (state_20321[(10)]);
var inst_20299 = (state_20321[(2)]);
var inst_20300 = [];
var inst_20301 = inst_20300.push(inst_20285);
var inst_20281 = inst_20300;
var inst_20282 = inst_20289;
var state_20321__$1 = (function (){var statearr_20333 = state_20321;
(statearr_20333[(11)] = inst_20299);

(statearr_20333[(7)] = inst_20282);

(statearr_20333[(8)] = inst_20281);

(statearr_20333[(12)] = inst_20301);

return statearr_20333;
})();
var statearr_20334_20361 = state_20321__$1;
(statearr_20334_20361[(2)] = null);

(statearr_20334_20361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (9))){
var inst_20281 = (state_20321[(8)]);
var inst_20297 = cljs.core.vec.call(null,inst_20281);
var state_20321__$1 = state_20321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20321__$1,(11),out,inst_20297);
} else {
if((state_val_20322 === (5))){
var inst_20285 = (state_20321[(9)]);
var inst_20289 = (state_20321[(10)]);
var inst_20282 = (state_20321[(7)]);
var inst_20289__$1 = f.call(null,inst_20285);
var inst_20290 = cljs.core._EQ_.call(null,inst_20289__$1,inst_20282);
var inst_20291 = cljs.core.keyword_identical_QMARK_.call(null,inst_20282,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20292 = (inst_20290) || (inst_20291);
var state_20321__$1 = (function (){var statearr_20335 = state_20321;
(statearr_20335[(10)] = inst_20289__$1);

return statearr_20335;
})();
if(cljs.core.truth_(inst_20292)){
var statearr_20336_20362 = state_20321__$1;
(statearr_20336_20362[(1)] = (8));

} else {
var statearr_20337_20363 = state_20321__$1;
(statearr_20337_20363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (14))){
var inst_20314 = (state_20321[(2)]);
var inst_20315 = cljs.core.async.close_BANG_.call(null,out);
var state_20321__$1 = (function (){var statearr_20339 = state_20321;
(statearr_20339[(13)] = inst_20314);

return statearr_20339;
})();
var statearr_20340_20364 = state_20321__$1;
(statearr_20340_20364[(2)] = inst_20315);

(statearr_20340_20364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (10))){
var inst_20304 = (state_20321[(2)]);
var state_20321__$1 = state_20321;
var statearr_20341_20365 = state_20321__$1;
(statearr_20341_20365[(2)] = inst_20304);

(statearr_20341_20365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20322 === (8))){
var inst_20285 = (state_20321[(9)]);
var inst_20289 = (state_20321[(10)]);
var inst_20281 = (state_20321[(8)]);
var inst_20294 = inst_20281.push(inst_20285);
var tmp20338 = inst_20281;
var inst_20281__$1 = tmp20338;
var inst_20282 = inst_20289;
var state_20321__$1 = (function (){var statearr_20342 = state_20321;
(statearr_20342[(7)] = inst_20282);

(statearr_20342[(14)] = inst_20294);

(statearr_20342[(8)] = inst_20281__$1);

return statearr_20342;
})();
var statearr_20343_20366 = state_20321__$1;
(statearr_20343_20366[(2)] = null);

(statearr_20343_20366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7725__auto___20352,out))
;
return ((function (switch__7663__auto__,c__7725__auto___20352,out){
return (function() {
var cljs$core$async$state_machine__7664__auto__ = null;
var cljs$core$async$state_machine__7664__auto____0 = (function (){
var statearr_20347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20347[(0)] = cljs$core$async$state_machine__7664__auto__);

(statearr_20347[(1)] = (1));

return statearr_20347;
});
var cljs$core$async$state_machine__7664__auto____1 = (function (state_20321){
while(true){
var ret_value__7665__auto__ = (function (){try{while(true){
var result__7666__auto__ = switch__7663__auto__.call(null,state_20321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7666__auto__;
}
break;
}
}catch (e20348){if((e20348 instanceof Object)){
var ex__7667__auto__ = e20348;
var statearr_20349_20367 = state_20321;
(statearr_20349_20367[(5)] = ex__7667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20368 = state_20321;
state_20321 = G__20368;
continue;
} else {
return ret_value__7665__auto__;
}
break;
}
});
cljs$core$async$state_machine__7664__auto__ = function(state_20321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7664__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7664__auto____1.call(this,state_20321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7664__auto____0;
cljs$core$async$state_machine__7664__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7664__auto____1;
return cljs$core$async$state_machine__7664__auto__;
})()
;})(switch__7663__auto__,c__7725__auto___20352,out))
})();
var state__7727__auto__ = (function (){var statearr_20350 = f__7726__auto__.call(null);
(statearr_20350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7725__auto___20352);

return statearr_20350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7727__auto__);
});})(c__7725__auto___20352,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
