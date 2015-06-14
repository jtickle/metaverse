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
if(typeof cljs.core.async.t11020 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11020 = (function (fn_handler,f,meta11021){
this.fn_handler = fn_handler;
this.f = f;
this.meta11021 = meta11021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11022,meta11021__$1){
var self__ = this;
var _11022__$1 = this;
return (new cljs.core.async.t11020(self__.fn_handler,self__.f,meta11021__$1));
});

cljs.core.async.t11020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11022){
var self__ = this;
var _11022__$1 = this;
return self__.meta11021;
});

cljs.core.async.t11020.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11020.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t11020.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t11020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta11021","meta11021",-592058538,null)], null);
});

cljs.core.async.t11020.cljs$lang$type = true;

cljs.core.async.t11020.cljs$lang$ctorStr = "cljs.core.async/t11020";

cljs.core.async.t11020.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t11020");
});

cljs.core.async.__GT_t11020 = (function cljs$core$async$fn_handler_$___GT_t11020(fn_handler__$1,f__$1,meta11021){
return (new cljs.core.async.t11020(fn_handler__$1,f__$1,meta11021));
});

}

return (new cljs.core.async.t11020(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__11024 = buff;
if(G__11024){
var bit__4983__auto__ = null;
if(cljs.core.truth_((function (){var or__4309__auto__ = bit__4983__auto__;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return G__11024.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__11024.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11024);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11024);
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
var G__11026 = arguments.length;
switch (G__11026) {
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
var G__11029 = arguments.length;
switch (G__11029) {
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
var val_11031 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11031);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11031,ret){
return (function (){
return fn1.call(null,val_11031);
});})(val_11031,ret))
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
var G__11033 = arguments.length;
switch (G__11033) {
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
var n__5194__auto___11035 = n;
var x_11036 = (0);
while(true){
if((x_11036 < n__5194__auto___11035)){
(a[x_11036] = (0));

var G__11037 = (x_11036 + (1));
x_11036 = G__11037;
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

var G__11038 = (i + (1));
i = G__11038;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t11042 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11042 = (function (alt_flag,flag,meta11043){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta11043 = meta11043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11044,meta11043__$1){
var self__ = this;
var _11044__$1 = this;
return (new cljs.core.async.t11042(self__.alt_flag,self__.flag,meta11043__$1));
});})(flag))
;

cljs.core.async.t11042.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11044){
var self__ = this;
var _11044__$1 = this;
return self__.meta11043;
});})(flag))
;

cljs.core.async.t11042.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t11042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t11042.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11043","meta11043",1865792108,null)], null);
});})(flag))
;

cljs.core.async.t11042.cljs$lang$type = true;

cljs.core.async.t11042.cljs$lang$ctorStr = "cljs.core.async/t11042";

cljs.core.async.t11042.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t11042");
});})(flag))
;

cljs.core.async.__GT_t11042 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t11042(alt_flag__$1,flag__$1,meta11043){
return (new cljs.core.async.t11042(alt_flag__$1,flag__$1,meta11043));
});})(flag))
;

}

return (new cljs.core.async.t11042(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t11048 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11048 = (function (alt_handler,flag,cb,meta11049){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta11049 = meta11049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11050,meta11049__$1){
var self__ = this;
var _11050__$1 = this;
return (new cljs.core.async.t11048(self__.alt_handler,self__.flag,self__.cb,meta11049__$1));
});

cljs.core.async.t11048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11050){
var self__ = this;
var _11050__$1 = this;
return self__.meta11049;
});

cljs.core.async.t11048.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11048.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t11048.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t11048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11049","meta11049",-436113013,null)], null);
});

cljs.core.async.t11048.cljs$lang$type = true;

cljs.core.async.t11048.cljs$lang$ctorStr = "cljs.core.async/t11048";

cljs.core.async.t11048.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t11048");
});

cljs.core.async.__GT_t11048 = (function cljs$core$async$alt_handler_$___GT_t11048(alt_handler__$1,flag__$1,cb__$1,meta11049){
return (new cljs.core.async.t11048(alt_handler__$1,flag__$1,cb__$1,meta11049));
});

}

return (new cljs.core.async.t11048(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__11051_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11051_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11052_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11052_SHARP_,port], null));
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
var G__11053 = (i + (1));
i = G__11053;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11056){
var map__11057 = p__11056;
var map__11057__$1 = ((cljs.core.seq_QMARK_.call(null,map__11057))?cljs.core.apply.call(null,cljs.core.hash_map,map__11057):map__11057);
var opts = map__11057__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11054){
var G__11055 = cljs.core.first.call(null,seq11054);
var seq11054__$1 = cljs.core.next.call(null,seq11054);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11055,seq11054__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__11059 = arguments.length;
switch (G__11059) {
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
var c__7634__auto___11108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto___11108){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto___11108){
return (function (state_11083){
var state_val_11084 = (state_11083[(1)]);
if((state_val_11084 === (7))){
var inst_11079 = (state_11083[(2)]);
var state_11083__$1 = state_11083;
var statearr_11085_11109 = state_11083__$1;
(statearr_11085_11109[(2)] = inst_11079);

(statearr_11085_11109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11084 === (1))){
var state_11083__$1 = state_11083;
var statearr_11086_11110 = state_11083__$1;
(statearr_11086_11110[(2)] = null);

(statearr_11086_11110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11084 === (4))){
var inst_11062 = (state_11083[(7)]);
var inst_11062__$1 = (state_11083[(2)]);
var inst_11063 = (inst_11062__$1 == null);
var state_11083__$1 = (function (){var statearr_11087 = state_11083;
(statearr_11087[(7)] = inst_11062__$1);

return statearr_11087;
})();
if(cljs.core.truth_(inst_11063)){
var statearr_11088_11111 = state_11083__$1;
(statearr_11088_11111[(1)] = (5));

} else {
var statearr_11089_11112 = state_11083__$1;
(statearr_11089_11112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11084 === (13))){
var state_11083__$1 = state_11083;
var statearr_11090_11113 = state_11083__$1;
(statearr_11090_11113[(2)] = null);

(statearr_11090_11113[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11084 === (6))){
var inst_11062 = (state_11083[(7)]);
var state_11083__$1 = state_11083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11083__$1,(11),to,inst_11062);
} else {
if((state_val_11084 === (3))){
var inst_11081 = (state_11083[(2)]);
var state_11083__$1 = state_11083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11083__$1,inst_11081);
} else {
if((state_val_11084 === (12))){
var state_11083__$1 = state_11083;
var statearr_11091_11114 = state_11083__$1;
(statearr_11091_11114[(2)] = null);

(statearr_11091_11114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11084 === (2))){
var state_11083__$1 = state_11083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11083__$1,(4),from);
} else {
if((state_val_11084 === (11))){
var inst_11072 = (state_11083[(2)]);
var state_11083__$1 = state_11083;
if(cljs.core.truth_(inst_11072)){
var statearr_11092_11115 = state_11083__$1;
(statearr_11092_11115[(1)] = (12));

} else {
var statearr_11093_11116 = state_11083__$1;
(statearr_11093_11116[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11084 === (9))){
var state_11083__$1 = state_11083;
var statearr_11094_11117 = state_11083__$1;
(statearr_11094_11117[(2)] = null);

(statearr_11094_11117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11084 === (5))){
var state_11083__$1 = state_11083;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11095_11118 = state_11083__$1;
(statearr_11095_11118[(1)] = (8));

} else {
var statearr_11096_11119 = state_11083__$1;
(statearr_11096_11119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11084 === (14))){
var inst_11077 = (state_11083[(2)]);
var state_11083__$1 = state_11083;
var statearr_11097_11120 = state_11083__$1;
(statearr_11097_11120[(2)] = inst_11077);

(statearr_11097_11120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11084 === (10))){
var inst_11069 = (state_11083[(2)]);
var state_11083__$1 = state_11083;
var statearr_11098_11121 = state_11083__$1;
(statearr_11098_11121[(2)] = inst_11069);

(statearr_11098_11121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11084 === (8))){
var inst_11066 = cljs.core.async.close_BANG_.call(null,to);
var state_11083__$1 = state_11083;
var statearr_11099_11122 = state_11083__$1;
(statearr_11099_11122[(2)] = inst_11066);

(statearr_11099_11122[(1)] = (10));


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
});})(c__7634__auto___11108))
;
return ((function (switch__7572__auto__,c__7634__auto___11108){
return (function() {
var cljs$core$async$state_machine__7573__auto__ = null;
var cljs$core$async$state_machine__7573__auto____0 = (function (){
var statearr_11103 = [null,null,null,null,null,null,null,null];
(statearr_11103[(0)] = cljs$core$async$state_machine__7573__auto__);

(statearr_11103[(1)] = (1));

return statearr_11103;
});
var cljs$core$async$state_machine__7573__auto____1 = (function (state_11083){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_11083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e11104){if((e11104 instanceof Object)){
var ex__7576__auto__ = e11104;
var statearr_11105_11123 = state_11083;
(statearr_11105_11123[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11124 = state_11083;
state_11083 = G__11124;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
cljs$core$async$state_machine__7573__auto__ = function(state_11083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7573__auto____1.call(this,state_11083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7573__auto____0;
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7573__auto____1;
return cljs$core$async$state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto___11108))
})();
var state__7636__auto__ = (function (){var statearr_11106 = f__7635__auto__.call(null);
(statearr_11106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto___11108);

return statearr_11106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto___11108))
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
return (function (p__11308){
var vec__11309 = p__11308;
var v = cljs.core.nth.call(null,vec__11309,(0),null);
var p = cljs.core.nth.call(null,vec__11309,(1),null);
var job = vec__11309;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7634__auto___11491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto___11491,res,vec__11309,v,p,job,jobs,results){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto___11491,res,vec__11309,v,p,job,jobs,results){
return (function (state_11314){
var state_val_11315 = (state_11314[(1)]);
if((state_val_11315 === (1))){
var state_11314__$1 = state_11314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11314__$1,(2),res,v);
} else {
if((state_val_11315 === (2))){
var inst_11311 = (state_11314[(2)]);
var inst_11312 = cljs.core.async.close_BANG_.call(null,res);
var state_11314__$1 = (function (){var statearr_11316 = state_11314;
(statearr_11316[(7)] = inst_11311);

return statearr_11316;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11314__$1,inst_11312);
} else {
return null;
}
}
});})(c__7634__auto___11491,res,vec__11309,v,p,job,jobs,results))
;
return ((function (switch__7572__auto__,c__7634__auto___11491,res,vec__11309,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____0 = (function (){
var statearr_11320 = [null,null,null,null,null,null,null,null];
(statearr_11320[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__);

(statearr_11320[(1)] = (1));

return statearr_11320;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____1 = (function (state_11314){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_11314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e11321){if((e11321 instanceof Object)){
var ex__7576__auto__ = e11321;
var statearr_11322_11492 = state_11314;
(statearr_11322_11492[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11493 = state_11314;
state_11314 = G__11493;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__ = function(state_11314){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____1.call(this,state_11314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto___11491,res,vec__11309,v,p,job,jobs,results))
})();
var state__7636__auto__ = (function (){var statearr_11323 = f__7635__auto__.call(null);
(statearr_11323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto___11491);

return statearr_11323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto___11491,res,vec__11309,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11324){
var vec__11325 = p__11324;
var v = cljs.core.nth.call(null,vec__11325,(0),null);
var p = cljs.core.nth.call(null,vec__11325,(1),null);
var job = vec__11325;
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
var n__5194__auto___11494 = n;
var __11495 = (0);
while(true){
if((__11495 < n__5194__auto___11494)){
var G__11326_11496 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11326_11496) {
case "compute":
var c__7634__auto___11498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11495,c__7634__auto___11498,G__11326_11496,n__5194__auto___11494,jobs,results,process,async){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (__11495,c__7634__auto___11498,G__11326_11496,n__5194__auto___11494,jobs,results,process,async){
return (function (state_11339){
var state_val_11340 = (state_11339[(1)]);
if((state_val_11340 === (1))){
var state_11339__$1 = state_11339;
var statearr_11341_11499 = state_11339__$1;
(statearr_11341_11499[(2)] = null);

(statearr_11341_11499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (2))){
var state_11339__$1 = state_11339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11339__$1,(4),jobs);
} else {
if((state_val_11340 === (3))){
var inst_11337 = (state_11339[(2)]);
var state_11339__$1 = state_11339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11339__$1,inst_11337);
} else {
if((state_val_11340 === (4))){
var inst_11329 = (state_11339[(2)]);
var inst_11330 = process.call(null,inst_11329);
var state_11339__$1 = state_11339;
if(cljs.core.truth_(inst_11330)){
var statearr_11342_11500 = state_11339__$1;
(statearr_11342_11500[(1)] = (5));

} else {
var statearr_11343_11501 = state_11339__$1;
(statearr_11343_11501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (5))){
var state_11339__$1 = state_11339;
var statearr_11344_11502 = state_11339__$1;
(statearr_11344_11502[(2)] = null);

(statearr_11344_11502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (6))){
var state_11339__$1 = state_11339;
var statearr_11345_11503 = state_11339__$1;
(statearr_11345_11503[(2)] = null);

(statearr_11345_11503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11340 === (7))){
var inst_11335 = (state_11339[(2)]);
var state_11339__$1 = state_11339;
var statearr_11346_11504 = state_11339__$1;
(statearr_11346_11504[(2)] = inst_11335);

(statearr_11346_11504[(1)] = (3));


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
});})(__11495,c__7634__auto___11498,G__11326_11496,n__5194__auto___11494,jobs,results,process,async))
;
return ((function (__11495,switch__7572__auto__,c__7634__auto___11498,G__11326_11496,n__5194__auto___11494,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____0 = (function (){
var statearr_11350 = [null,null,null,null,null,null,null];
(statearr_11350[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__);

(statearr_11350[(1)] = (1));

return statearr_11350;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____1 = (function (state_11339){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_11339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e11351){if((e11351 instanceof Object)){
var ex__7576__auto__ = e11351;
var statearr_11352_11505 = state_11339;
(statearr_11352_11505[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11506 = state_11339;
state_11339 = G__11506;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__ = function(state_11339){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____1.call(this,state_11339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__;
})()
;})(__11495,switch__7572__auto__,c__7634__auto___11498,G__11326_11496,n__5194__auto___11494,jobs,results,process,async))
})();
var state__7636__auto__ = (function (){var statearr_11353 = f__7635__auto__.call(null);
(statearr_11353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto___11498);

return statearr_11353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(__11495,c__7634__auto___11498,G__11326_11496,n__5194__auto___11494,jobs,results,process,async))
);


break;
case "async":
var c__7634__auto___11507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11495,c__7634__auto___11507,G__11326_11496,n__5194__auto___11494,jobs,results,process,async){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (__11495,c__7634__auto___11507,G__11326_11496,n__5194__auto___11494,jobs,results,process,async){
return (function (state_11366){
var state_val_11367 = (state_11366[(1)]);
if((state_val_11367 === (1))){
var state_11366__$1 = state_11366;
var statearr_11368_11508 = state_11366__$1;
(statearr_11368_11508[(2)] = null);

(statearr_11368_11508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11367 === (2))){
var state_11366__$1 = state_11366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11366__$1,(4),jobs);
} else {
if((state_val_11367 === (3))){
var inst_11364 = (state_11366[(2)]);
var state_11366__$1 = state_11366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11366__$1,inst_11364);
} else {
if((state_val_11367 === (4))){
var inst_11356 = (state_11366[(2)]);
var inst_11357 = async.call(null,inst_11356);
var state_11366__$1 = state_11366;
if(cljs.core.truth_(inst_11357)){
var statearr_11369_11509 = state_11366__$1;
(statearr_11369_11509[(1)] = (5));

} else {
var statearr_11370_11510 = state_11366__$1;
(statearr_11370_11510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11367 === (5))){
var state_11366__$1 = state_11366;
var statearr_11371_11511 = state_11366__$1;
(statearr_11371_11511[(2)] = null);

(statearr_11371_11511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11367 === (6))){
var state_11366__$1 = state_11366;
var statearr_11372_11512 = state_11366__$1;
(statearr_11372_11512[(2)] = null);

(statearr_11372_11512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11367 === (7))){
var inst_11362 = (state_11366[(2)]);
var state_11366__$1 = state_11366;
var statearr_11373_11513 = state_11366__$1;
(statearr_11373_11513[(2)] = inst_11362);

(statearr_11373_11513[(1)] = (3));


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
});})(__11495,c__7634__auto___11507,G__11326_11496,n__5194__auto___11494,jobs,results,process,async))
;
return ((function (__11495,switch__7572__auto__,c__7634__auto___11507,G__11326_11496,n__5194__auto___11494,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____0 = (function (){
var statearr_11377 = [null,null,null,null,null,null,null];
(statearr_11377[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__);

(statearr_11377[(1)] = (1));

return statearr_11377;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____1 = (function (state_11366){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_11366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e11378){if((e11378 instanceof Object)){
var ex__7576__auto__ = e11378;
var statearr_11379_11514 = state_11366;
(statearr_11379_11514[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11515 = state_11366;
state_11366 = G__11515;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__ = function(state_11366){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____1.call(this,state_11366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__;
})()
;})(__11495,switch__7572__auto__,c__7634__auto___11507,G__11326_11496,n__5194__auto___11494,jobs,results,process,async))
})();
var state__7636__auto__ = (function (){var statearr_11380 = f__7635__auto__.call(null);
(statearr_11380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto___11507);

return statearr_11380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(__11495,c__7634__auto___11507,G__11326_11496,n__5194__auto___11494,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11516 = (__11495 + (1));
__11495 = G__11516;
continue;
} else {
}
break;
}

var c__7634__auto___11517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto___11517,jobs,results,process,async){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto___11517,jobs,results,process,async){
return (function (state_11402){
var state_val_11403 = (state_11402[(1)]);
if((state_val_11403 === (1))){
var state_11402__$1 = state_11402;
var statearr_11404_11518 = state_11402__$1;
(statearr_11404_11518[(2)] = null);

(statearr_11404_11518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (2))){
var state_11402__$1 = state_11402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11402__$1,(4),from);
} else {
if((state_val_11403 === (3))){
var inst_11400 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11402__$1,inst_11400);
} else {
if((state_val_11403 === (4))){
var inst_11383 = (state_11402[(7)]);
var inst_11383__$1 = (state_11402[(2)]);
var inst_11384 = (inst_11383__$1 == null);
var state_11402__$1 = (function (){var statearr_11405 = state_11402;
(statearr_11405[(7)] = inst_11383__$1);

return statearr_11405;
})();
if(cljs.core.truth_(inst_11384)){
var statearr_11406_11519 = state_11402__$1;
(statearr_11406_11519[(1)] = (5));

} else {
var statearr_11407_11520 = state_11402__$1;
(statearr_11407_11520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (5))){
var inst_11386 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11402__$1 = state_11402;
var statearr_11408_11521 = state_11402__$1;
(statearr_11408_11521[(2)] = inst_11386);

(statearr_11408_11521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (6))){
var inst_11383 = (state_11402[(7)]);
var inst_11388 = (state_11402[(8)]);
var inst_11388__$1 = cljs.core.async.chan.call(null,(1));
var inst_11389 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11390 = [inst_11383,inst_11388__$1];
var inst_11391 = (new cljs.core.PersistentVector(null,2,(5),inst_11389,inst_11390,null));
var state_11402__$1 = (function (){var statearr_11409 = state_11402;
(statearr_11409[(8)] = inst_11388__$1);

return statearr_11409;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11402__$1,(8),jobs,inst_11391);
} else {
if((state_val_11403 === (7))){
var inst_11398 = (state_11402[(2)]);
var state_11402__$1 = state_11402;
var statearr_11410_11522 = state_11402__$1;
(statearr_11410_11522[(2)] = inst_11398);

(statearr_11410_11522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11403 === (8))){
var inst_11388 = (state_11402[(8)]);
var inst_11393 = (state_11402[(2)]);
var state_11402__$1 = (function (){var statearr_11411 = state_11402;
(statearr_11411[(9)] = inst_11393);

return statearr_11411;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11402__$1,(9),results,inst_11388);
} else {
if((state_val_11403 === (9))){
var inst_11395 = (state_11402[(2)]);
var state_11402__$1 = (function (){var statearr_11412 = state_11402;
(statearr_11412[(10)] = inst_11395);

return statearr_11412;
})();
var statearr_11413_11523 = state_11402__$1;
(statearr_11413_11523[(2)] = null);

(statearr_11413_11523[(1)] = (2));


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
});})(c__7634__auto___11517,jobs,results,process,async))
;
return ((function (switch__7572__auto__,c__7634__auto___11517,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____0 = (function (){
var statearr_11417 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11417[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__);

(statearr_11417[(1)] = (1));

return statearr_11417;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____1 = (function (state_11402){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_11402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e11418){if((e11418 instanceof Object)){
var ex__7576__auto__ = e11418;
var statearr_11419_11524 = state_11402;
(statearr_11419_11524[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11525 = state_11402;
state_11402 = G__11525;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__ = function(state_11402){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____1.call(this,state_11402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto___11517,jobs,results,process,async))
})();
var state__7636__auto__ = (function (){var statearr_11420 = f__7635__auto__.call(null);
(statearr_11420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto___11517);

return statearr_11420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto___11517,jobs,results,process,async))
);


var c__7634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto__,jobs,results,process,async){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto__,jobs,results,process,async){
return (function (state_11458){
var state_val_11459 = (state_11458[(1)]);
if((state_val_11459 === (7))){
var inst_11454 = (state_11458[(2)]);
var state_11458__$1 = state_11458;
var statearr_11460_11526 = state_11458__$1;
(statearr_11460_11526[(2)] = inst_11454);

(statearr_11460_11526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (20))){
var state_11458__$1 = state_11458;
var statearr_11461_11527 = state_11458__$1;
(statearr_11461_11527[(2)] = null);

(statearr_11461_11527[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (1))){
var state_11458__$1 = state_11458;
var statearr_11462_11528 = state_11458__$1;
(statearr_11462_11528[(2)] = null);

(statearr_11462_11528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (4))){
var inst_11423 = (state_11458[(7)]);
var inst_11423__$1 = (state_11458[(2)]);
var inst_11424 = (inst_11423__$1 == null);
var state_11458__$1 = (function (){var statearr_11463 = state_11458;
(statearr_11463[(7)] = inst_11423__$1);

return statearr_11463;
})();
if(cljs.core.truth_(inst_11424)){
var statearr_11464_11529 = state_11458__$1;
(statearr_11464_11529[(1)] = (5));

} else {
var statearr_11465_11530 = state_11458__$1;
(statearr_11465_11530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (15))){
var inst_11436 = (state_11458[(8)]);
var state_11458__$1 = state_11458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11458__$1,(18),to,inst_11436);
} else {
if((state_val_11459 === (21))){
var inst_11449 = (state_11458[(2)]);
var state_11458__$1 = state_11458;
var statearr_11466_11531 = state_11458__$1;
(statearr_11466_11531[(2)] = inst_11449);

(statearr_11466_11531[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (13))){
var inst_11451 = (state_11458[(2)]);
var state_11458__$1 = (function (){var statearr_11467 = state_11458;
(statearr_11467[(9)] = inst_11451);

return statearr_11467;
})();
var statearr_11468_11532 = state_11458__$1;
(statearr_11468_11532[(2)] = null);

(statearr_11468_11532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (6))){
var inst_11423 = (state_11458[(7)]);
var state_11458__$1 = state_11458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11458__$1,(11),inst_11423);
} else {
if((state_val_11459 === (17))){
var inst_11444 = (state_11458[(2)]);
var state_11458__$1 = state_11458;
if(cljs.core.truth_(inst_11444)){
var statearr_11469_11533 = state_11458__$1;
(statearr_11469_11533[(1)] = (19));

} else {
var statearr_11470_11534 = state_11458__$1;
(statearr_11470_11534[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (3))){
var inst_11456 = (state_11458[(2)]);
var state_11458__$1 = state_11458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11458__$1,inst_11456);
} else {
if((state_val_11459 === (12))){
var inst_11433 = (state_11458[(10)]);
var state_11458__$1 = state_11458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11458__$1,(14),inst_11433);
} else {
if((state_val_11459 === (2))){
var state_11458__$1 = state_11458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11458__$1,(4),results);
} else {
if((state_val_11459 === (19))){
var state_11458__$1 = state_11458;
var statearr_11471_11535 = state_11458__$1;
(statearr_11471_11535[(2)] = null);

(statearr_11471_11535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (11))){
var inst_11433 = (state_11458[(2)]);
var state_11458__$1 = (function (){var statearr_11472 = state_11458;
(statearr_11472[(10)] = inst_11433);

return statearr_11472;
})();
var statearr_11473_11536 = state_11458__$1;
(statearr_11473_11536[(2)] = null);

(statearr_11473_11536[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (9))){
var state_11458__$1 = state_11458;
var statearr_11474_11537 = state_11458__$1;
(statearr_11474_11537[(2)] = null);

(statearr_11474_11537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (5))){
var state_11458__$1 = state_11458;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11475_11538 = state_11458__$1;
(statearr_11475_11538[(1)] = (8));

} else {
var statearr_11476_11539 = state_11458__$1;
(statearr_11476_11539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (14))){
var inst_11438 = (state_11458[(11)]);
var inst_11436 = (state_11458[(8)]);
var inst_11436__$1 = (state_11458[(2)]);
var inst_11437 = (inst_11436__$1 == null);
var inst_11438__$1 = cljs.core.not.call(null,inst_11437);
var state_11458__$1 = (function (){var statearr_11477 = state_11458;
(statearr_11477[(11)] = inst_11438__$1);

(statearr_11477[(8)] = inst_11436__$1);

return statearr_11477;
})();
if(inst_11438__$1){
var statearr_11478_11540 = state_11458__$1;
(statearr_11478_11540[(1)] = (15));

} else {
var statearr_11479_11541 = state_11458__$1;
(statearr_11479_11541[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (16))){
var inst_11438 = (state_11458[(11)]);
var state_11458__$1 = state_11458;
var statearr_11480_11542 = state_11458__$1;
(statearr_11480_11542[(2)] = inst_11438);

(statearr_11480_11542[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (10))){
var inst_11430 = (state_11458[(2)]);
var state_11458__$1 = state_11458;
var statearr_11481_11543 = state_11458__$1;
(statearr_11481_11543[(2)] = inst_11430);

(statearr_11481_11543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (18))){
var inst_11441 = (state_11458[(2)]);
var state_11458__$1 = state_11458;
var statearr_11482_11544 = state_11458__$1;
(statearr_11482_11544[(2)] = inst_11441);

(statearr_11482_11544[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11459 === (8))){
var inst_11427 = cljs.core.async.close_BANG_.call(null,to);
var state_11458__$1 = state_11458;
var statearr_11483_11545 = state_11458__$1;
(statearr_11483_11545[(2)] = inst_11427);

(statearr_11483_11545[(1)] = (10));


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
});})(c__7634__auto__,jobs,results,process,async))
;
return ((function (switch__7572__auto__,c__7634__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____0 = (function (){
var statearr_11487 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11487[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__);

(statearr_11487[(1)] = (1));

return statearr_11487;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____1 = (function (state_11458){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_11458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e11488){if((e11488 instanceof Object)){
var ex__7576__auto__ = e11488;
var statearr_11489_11546 = state_11458;
(statearr_11489_11546[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11547 = state_11458;
state_11458 = G__11547;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__ = function(state_11458){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____1.call(this,state_11458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7573__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto__,jobs,results,process,async))
})();
var state__7636__auto__ = (function (){var statearr_11490 = f__7635__auto__.call(null);
(statearr_11490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto__);

return statearr_11490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto__,jobs,results,process,async))
);

return c__7634__auto__;
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
var G__11549 = arguments.length;
switch (G__11549) {
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
var G__11552 = arguments.length;
switch (G__11552) {
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
var G__11555 = arguments.length;
switch (G__11555) {
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
var c__7634__auto___11607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto___11607,tc,fc){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto___11607,tc,fc){
return (function (state_11581){
var state_val_11582 = (state_11581[(1)]);
if((state_val_11582 === (7))){
var inst_11577 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11583_11608 = state_11581__$1;
(statearr_11583_11608[(2)] = inst_11577);

(statearr_11583_11608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (1))){
var state_11581__$1 = state_11581;
var statearr_11584_11609 = state_11581__$1;
(statearr_11584_11609[(2)] = null);

(statearr_11584_11609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (4))){
var inst_11558 = (state_11581[(7)]);
var inst_11558__$1 = (state_11581[(2)]);
var inst_11559 = (inst_11558__$1 == null);
var state_11581__$1 = (function (){var statearr_11585 = state_11581;
(statearr_11585[(7)] = inst_11558__$1);

return statearr_11585;
})();
if(cljs.core.truth_(inst_11559)){
var statearr_11586_11610 = state_11581__$1;
(statearr_11586_11610[(1)] = (5));

} else {
var statearr_11587_11611 = state_11581__$1;
(statearr_11587_11611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (13))){
var state_11581__$1 = state_11581;
var statearr_11588_11612 = state_11581__$1;
(statearr_11588_11612[(2)] = null);

(statearr_11588_11612[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (6))){
var inst_11558 = (state_11581[(7)]);
var inst_11564 = p.call(null,inst_11558);
var state_11581__$1 = state_11581;
if(cljs.core.truth_(inst_11564)){
var statearr_11589_11613 = state_11581__$1;
(statearr_11589_11613[(1)] = (9));

} else {
var statearr_11590_11614 = state_11581__$1;
(statearr_11590_11614[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (3))){
var inst_11579 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11581__$1,inst_11579);
} else {
if((state_val_11582 === (12))){
var state_11581__$1 = state_11581;
var statearr_11591_11615 = state_11581__$1;
(statearr_11591_11615[(2)] = null);

(statearr_11591_11615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (2))){
var state_11581__$1 = state_11581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11581__$1,(4),ch);
} else {
if((state_val_11582 === (11))){
var inst_11558 = (state_11581[(7)]);
var inst_11568 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11581__$1,(8),inst_11568,inst_11558);
} else {
if((state_val_11582 === (9))){
var state_11581__$1 = state_11581;
var statearr_11592_11616 = state_11581__$1;
(statearr_11592_11616[(2)] = tc);

(statearr_11592_11616[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (5))){
var inst_11561 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11562 = cljs.core.async.close_BANG_.call(null,fc);
var state_11581__$1 = (function (){var statearr_11593 = state_11581;
(statearr_11593[(8)] = inst_11561);

return statearr_11593;
})();
var statearr_11594_11617 = state_11581__$1;
(statearr_11594_11617[(2)] = inst_11562);

(statearr_11594_11617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (14))){
var inst_11575 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
var statearr_11595_11618 = state_11581__$1;
(statearr_11595_11618[(2)] = inst_11575);

(statearr_11595_11618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (10))){
var state_11581__$1 = state_11581;
var statearr_11596_11619 = state_11581__$1;
(statearr_11596_11619[(2)] = fc);

(statearr_11596_11619[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11582 === (8))){
var inst_11570 = (state_11581[(2)]);
var state_11581__$1 = state_11581;
if(cljs.core.truth_(inst_11570)){
var statearr_11597_11620 = state_11581__$1;
(statearr_11597_11620[(1)] = (12));

} else {
var statearr_11598_11621 = state_11581__$1;
(statearr_11598_11621[(1)] = (13));

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
});})(c__7634__auto___11607,tc,fc))
;
return ((function (switch__7572__auto__,c__7634__auto___11607,tc,fc){
return (function() {
var cljs$core$async$state_machine__7573__auto__ = null;
var cljs$core$async$state_machine__7573__auto____0 = (function (){
var statearr_11602 = [null,null,null,null,null,null,null,null,null];
(statearr_11602[(0)] = cljs$core$async$state_machine__7573__auto__);

(statearr_11602[(1)] = (1));

return statearr_11602;
});
var cljs$core$async$state_machine__7573__auto____1 = (function (state_11581){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_11581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e11603){if((e11603 instanceof Object)){
var ex__7576__auto__ = e11603;
var statearr_11604_11622 = state_11581;
(statearr_11604_11622[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11623 = state_11581;
state_11581 = G__11623;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
cljs$core$async$state_machine__7573__auto__ = function(state_11581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7573__auto____1.call(this,state_11581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7573__auto____0;
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7573__auto____1;
return cljs$core$async$state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto___11607,tc,fc))
})();
var state__7636__auto__ = (function (){var statearr_11605 = f__7635__auto__.call(null);
(statearr_11605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto___11607);

return statearr_11605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto___11607,tc,fc))
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
var c__7634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto__){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto__){
return (function (state_11670){
var state_val_11671 = (state_11670[(1)]);
if((state_val_11671 === (1))){
var inst_11656 = init;
var state_11670__$1 = (function (){var statearr_11672 = state_11670;
(statearr_11672[(7)] = inst_11656);

return statearr_11672;
})();
var statearr_11673_11688 = state_11670__$1;
(statearr_11673_11688[(2)] = null);

(statearr_11673_11688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11671 === (2))){
var state_11670__$1 = state_11670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11670__$1,(4),ch);
} else {
if((state_val_11671 === (3))){
var inst_11668 = (state_11670[(2)]);
var state_11670__$1 = state_11670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11670__$1,inst_11668);
} else {
if((state_val_11671 === (4))){
var inst_11659 = (state_11670[(8)]);
var inst_11659__$1 = (state_11670[(2)]);
var inst_11660 = (inst_11659__$1 == null);
var state_11670__$1 = (function (){var statearr_11674 = state_11670;
(statearr_11674[(8)] = inst_11659__$1);

return statearr_11674;
})();
if(cljs.core.truth_(inst_11660)){
var statearr_11675_11689 = state_11670__$1;
(statearr_11675_11689[(1)] = (5));

} else {
var statearr_11676_11690 = state_11670__$1;
(statearr_11676_11690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11671 === (5))){
var inst_11656 = (state_11670[(7)]);
var state_11670__$1 = state_11670;
var statearr_11677_11691 = state_11670__$1;
(statearr_11677_11691[(2)] = inst_11656);

(statearr_11677_11691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11671 === (6))){
var inst_11656 = (state_11670[(7)]);
var inst_11659 = (state_11670[(8)]);
var inst_11663 = f.call(null,inst_11656,inst_11659);
var inst_11656__$1 = inst_11663;
var state_11670__$1 = (function (){var statearr_11678 = state_11670;
(statearr_11678[(7)] = inst_11656__$1);

return statearr_11678;
})();
var statearr_11679_11692 = state_11670__$1;
(statearr_11679_11692[(2)] = null);

(statearr_11679_11692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11671 === (7))){
var inst_11666 = (state_11670[(2)]);
var state_11670__$1 = state_11670;
var statearr_11680_11693 = state_11670__$1;
(statearr_11680_11693[(2)] = inst_11666);

(statearr_11680_11693[(1)] = (3));


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
});})(c__7634__auto__))
;
return ((function (switch__7572__auto__,c__7634__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7573__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7573__auto____0 = (function (){
var statearr_11684 = [null,null,null,null,null,null,null,null,null];
(statearr_11684[(0)] = cljs$core$async$reduce_$_state_machine__7573__auto__);

(statearr_11684[(1)] = (1));

return statearr_11684;
});
var cljs$core$async$reduce_$_state_machine__7573__auto____1 = (function (state_11670){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_11670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e11685){if((e11685 instanceof Object)){
var ex__7576__auto__ = e11685;
var statearr_11686_11694 = state_11670;
(statearr_11686_11694[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11695 = state_11670;
state_11670 = G__11695;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7573__auto__ = function(state_11670){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7573__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7573__auto____1.call(this,state_11670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7573__auto____0;
cljs$core$async$reduce_$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7573__auto____1;
return cljs$core$async$reduce_$_state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto__))
})();
var state__7636__auto__ = (function (){var statearr_11687 = f__7635__auto__.call(null);
(statearr_11687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto__);

return statearr_11687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto__))
);

return c__7634__auto__;
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
var G__11697 = arguments.length;
switch (G__11697) {
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
var c__7634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto__){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto__){
return (function (state_11722){
var state_val_11723 = (state_11722[(1)]);
if((state_val_11723 === (7))){
var inst_11704 = (state_11722[(2)]);
var state_11722__$1 = state_11722;
var statearr_11724_11748 = state_11722__$1;
(statearr_11724_11748[(2)] = inst_11704);

(statearr_11724_11748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11723 === (1))){
var inst_11698 = cljs.core.seq.call(null,coll);
var inst_11699 = inst_11698;
var state_11722__$1 = (function (){var statearr_11725 = state_11722;
(statearr_11725[(7)] = inst_11699);

return statearr_11725;
})();
var statearr_11726_11749 = state_11722__$1;
(statearr_11726_11749[(2)] = null);

(statearr_11726_11749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11723 === (4))){
var inst_11699 = (state_11722[(7)]);
var inst_11702 = cljs.core.first.call(null,inst_11699);
var state_11722__$1 = state_11722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11722__$1,(7),ch,inst_11702);
} else {
if((state_val_11723 === (13))){
var inst_11716 = (state_11722[(2)]);
var state_11722__$1 = state_11722;
var statearr_11727_11750 = state_11722__$1;
(statearr_11727_11750[(2)] = inst_11716);

(statearr_11727_11750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11723 === (6))){
var inst_11707 = (state_11722[(2)]);
var state_11722__$1 = state_11722;
if(cljs.core.truth_(inst_11707)){
var statearr_11728_11751 = state_11722__$1;
(statearr_11728_11751[(1)] = (8));

} else {
var statearr_11729_11752 = state_11722__$1;
(statearr_11729_11752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11723 === (3))){
var inst_11720 = (state_11722[(2)]);
var state_11722__$1 = state_11722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11722__$1,inst_11720);
} else {
if((state_val_11723 === (12))){
var state_11722__$1 = state_11722;
var statearr_11730_11753 = state_11722__$1;
(statearr_11730_11753[(2)] = null);

(statearr_11730_11753[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11723 === (2))){
var inst_11699 = (state_11722[(7)]);
var state_11722__$1 = state_11722;
if(cljs.core.truth_(inst_11699)){
var statearr_11731_11754 = state_11722__$1;
(statearr_11731_11754[(1)] = (4));

} else {
var statearr_11732_11755 = state_11722__$1;
(statearr_11732_11755[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11723 === (11))){
var inst_11713 = cljs.core.async.close_BANG_.call(null,ch);
var state_11722__$1 = state_11722;
var statearr_11733_11756 = state_11722__$1;
(statearr_11733_11756[(2)] = inst_11713);

(statearr_11733_11756[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11723 === (9))){
var state_11722__$1 = state_11722;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11734_11757 = state_11722__$1;
(statearr_11734_11757[(1)] = (11));

} else {
var statearr_11735_11758 = state_11722__$1;
(statearr_11735_11758[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11723 === (5))){
var inst_11699 = (state_11722[(7)]);
var state_11722__$1 = state_11722;
var statearr_11736_11759 = state_11722__$1;
(statearr_11736_11759[(2)] = inst_11699);

(statearr_11736_11759[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11723 === (10))){
var inst_11718 = (state_11722[(2)]);
var state_11722__$1 = state_11722;
var statearr_11737_11760 = state_11722__$1;
(statearr_11737_11760[(2)] = inst_11718);

(statearr_11737_11760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11723 === (8))){
var inst_11699 = (state_11722[(7)]);
var inst_11709 = cljs.core.next.call(null,inst_11699);
var inst_11699__$1 = inst_11709;
var state_11722__$1 = (function (){var statearr_11738 = state_11722;
(statearr_11738[(7)] = inst_11699__$1);

return statearr_11738;
})();
var statearr_11739_11761 = state_11722__$1;
(statearr_11739_11761[(2)] = null);

(statearr_11739_11761[(1)] = (2));


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
});})(c__7634__auto__))
;
return ((function (switch__7572__auto__,c__7634__auto__){
return (function() {
var cljs$core$async$state_machine__7573__auto__ = null;
var cljs$core$async$state_machine__7573__auto____0 = (function (){
var statearr_11743 = [null,null,null,null,null,null,null,null];
(statearr_11743[(0)] = cljs$core$async$state_machine__7573__auto__);

(statearr_11743[(1)] = (1));

return statearr_11743;
});
var cljs$core$async$state_machine__7573__auto____1 = (function (state_11722){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_11722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e11744){if((e11744 instanceof Object)){
var ex__7576__auto__ = e11744;
var statearr_11745_11762 = state_11722;
(statearr_11745_11762[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11763 = state_11722;
state_11722 = G__11763;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
cljs$core$async$state_machine__7573__auto__ = function(state_11722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7573__auto____1.call(this,state_11722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7573__auto____0;
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7573__auto____1;
return cljs$core$async$state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto__))
})();
var state__7636__auto__ = (function (){var statearr_11746 = f__7635__auto__.call(null);
(statearr_11746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto__);

return statearr_11746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto__))
);

return c__7634__auto__;
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

cljs.core.async.Mux = (function (){var obj11765 = {};
return obj11765;
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


cljs.core.async.Mult = (function (){var obj11767 = {};
return obj11767;
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
if(typeof cljs.core.async.t11989 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11989 = (function (mult,ch,cs,meta11990){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta11990 = meta11990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t11989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11991,meta11990__$1){
var self__ = this;
var _11991__$1 = this;
return (new cljs.core.async.t11989(self__.mult,self__.ch,self__.cs,meta11990__$1));
});})(cs))
;

cljs.core.async.t11989.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11991){
var self__ = this;
var _11991__$1 = this;
return self__.meta11990;
});})(cs))
;

cljs.core.async.t11989.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t11989.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t11989.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t11989.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t11989.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t11989.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t11989.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11990","meta11990",-287807930,null)], null);
});})(cs))
;

cljs.core.async.t11989.cljs$lang$type = true;

cljs.core.async.t11989.cljs$lang$ctorStr = "cljs.core.async/t11989";

cljs.core.async.t11989.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t11989");
});})(cs))
;

cljs.core.async.__GT_t11989 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t11989(mult__$1,ch__$1,cs__$1,meta11990){
return (new cljs.core.async.t11989(mult__$1,ch__$1,cs__$1,meta11990));
});})(cs))
;

}

return (new cljs.core.async.t11989(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7634__auto___12210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto___12210,cs,m,dchan,dctr,done){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto___12210,cs,m,dchan,dctr,done){
return (function (state_12122){
var state_val_12123 = (state_12122[(1)]);
if((state_val_12123 === (7))){
var inst_12118 = (state_12122[(2)]);
var state_12122__$1 = state_12122;
var statearr_12124_12211 = state_12122__$1;
(statearr_12124_12211[(2)] = inst_12118);

(statearr_12124_12211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (20))){
var inst_12023 = (state_12122[(7)]);
var inst_12033 = cljs.core.first.call(null,inst_12023);
var inst_12034 = cljs.core.nth.call(null,inst_12033,(0),null);
var inst_12035 = cljs.core.nth.call(null,inst_12033,(1),null);
var state_12122__$1 = (function (){var statearr_12125 = state_12122;
(statearr_12125[(8)] = inst_12034);

return statearr_12125;
})();
if(cljs.core.truth_(inst_12035)){
var statearr_12126_12212 = state_12122__$1;
(statearr_12126_12212[(1)] = (22));

} else {
var statearr_12127_12213 = state_12122__$1;
(statearr_12127_12213[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (27))){
var inst_12065 = (state_12122[(9)]);
var inst_12063 = (state_12122[(10)]);
var inst_12070 = (state_12122[(11)]);
var inst_11994 = (state_12122[(12)]);
var inst_12070__$1 = cljs.core._nth.call(null,inst_12063,inst_12065);
var inst_12071 = cljs.core.async.put_BANG_.call(null,inst_12070__$1,inst_11994,done);
var state_12122__$1 = (function (){var statearr_12128 = state_12122;
(statearr_12128[(11)] = inst_12070__$1);

return statearr_12128;
})();
if(cljs.core.truth_(inst_12071)){
var statearr_12129_12214 = state_12122__$1;
(statearr_12129_12214[(1)] = (30));

} else {
var statearr_12130_12215 = state_12122__$1;
(statearr_12130_12215[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (1))){
var state_12122__$1 = state_12122;
var statearr_12131_12216 = state_12122__$1;
(statearr_12131_12216[(2)] = null);

(statearr_12131_12216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (24))){
var inst_12023 = (state_12122[(7)]);
var inst_12040 = (state_12122[(2)]);
var inst_12041 = cljs.core.next.call(null,inst_12023);
var inst_12003 = inst_12041;
var inst_12004 = null;
var inst_12005 = (0);
var inst_12006 = (0);
var state_12122__$1 = (function (){var statearr_12132 = state_12122;
(statearr_12132[(13)] = inst_12006);

(statearr_12132[(14)] = inst_12004);

(statearr_12132[(15)] = inst_12003);

(statearr_12132[(16)] = inst_12005);

(statearr_12132[(17)] = inst_12040);

return statearr_12132;
})();
var statearr_12133_12217 = state_12122__$1;
(statearr_12133_12217[(2)] = null);

(statearr_12133_12217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (39))){
var state_12122__$1 = state_12122;
var statearr_12137_12218 = state_12122__$1;
(statearr_12137_12218[(2)] = null);

(statearr_12137_12218[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (4))){
var inst_11994 = (state_12122[(12)]);
var inst_11994__$1 = (state_12122[(2)]);
var inst_11995 = (inst_11994__$1 == null);
var state_12122__$1 = (function (){var statearr_12138 = state_12122;
(statearr_12138[(12)] = inst_11994__$1);

return statearr_12138;
})();
if(cljs.core.truth_(inst_11995)){
var statearr_12139_12219 = state_12122__$1;
(statearr_12139_12219[(1)] = (5));

} else {
var statearr_12140_12220 = state_12122__$1;
(statearr_12140_12220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (15))){
var inst_12006 = (state_12122[(13)]);
var inst_12004 = (state_12122[(14)]);
var inst_12003 = (state_12122[(15)]);
var inst_12005 = (state_12122[(16)]);
var inst_12019 = (state_12122[(2)]);
var inst_12020 = (inst_12006 + (1));
var tmp12134 = inst_12004;
var tmp12135 = inst_12003;
var tmp12136 = inst_12005;
var inst_12003__$1 = tmp12135;
var inst_12004__$1 = tmp12134;
var inst_12005__$1 = tmp12136;
var inst_12006__$1 = inst_12020;
var state_12122__$1 = (function (){var statearr_12141 = state_12122;
(statearr_12141[(13)] = inst_12006__$1);

(statearr_12141[(14)] = inst_12004__$1);

(statearr_12141[(15)] = inst_12003__$1);

(statearr_12141[(16)] = inst_12005__$1);

(statearr_12141[(18)] = inst_12019);

return statearr_12141;
})();
var statearr_12142_12221 = state_12122__$1;
(statearr_12142_12221[(2)] = null);

(statearr_12142_12221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (21))){
var inst_12044 = (state_12122[(2)]);
var state_12122__$1 = state_12122;
var statearr_12146_12222 = state_12122__$1;
(statearr_12146_12222[(2)] = inst_12044);

(statearr_12146_12222[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (31))){
var inst_12070 = (state_12122[(11)]);
var inst_12074 = done.call(null,null);
var inst_12075 = cljs.core.async.untap_STAR_.call(null,m,inst_12070);
var state_12122__$1 = (function (){var statearr_12147 = state_12122;
(statearr_12147[(19)] = inst_12074);

return statearr_12147;
})();
var statearr_12148_12223 = state_12122__$1;
(statearr_12148_12223[(2)] = inst_12075);

(statearr_12148_12223[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (32))){
var inst_12062 = (state_12122[(20)]);
var inst_12065 = (state_12122[(9)]);
var inst_12064 = (state_12122[(21)]);
var inst_12063 = (state_12122[(10)]);
var inst_12077 = (state_12122[(2)]);
var inst_12078 = (inst_12065 + (1));
var tmp12143 = inst_12062;
var tmp12144 = inst_12064;
var tmp12145 = inst_12063;
var inst_12062__$1 = tmp12143;
var inst_12063__$1 = tmp12145;
var inst_12064__$1 = tmp12144;
var inst_12065__$1 = inst_12078;
var state_12122__$1 = (function (){var statearr_12149 = state_12122;
(statearr_12149[(22)] = inst_12077);

(statearr_12149[(20)] = inst_12062__$1);

(statearr_12149[(9)] = inst_12065__$1);

(statearr_12149[(21)] = inst_12064__$1);

(statearr_12149[(10)] = inst_12063__$1);

return statearr_12149;
})();
var statearr_12150_12224 = state_12122__$1;
(statearr_12150_12224[(2)] = null);

(statearr_12150_12224[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (40))){
var inst_12090 = (state_12122[(23)]);
var inst_12094 = done.call(null,null);
var inst_12095 = cljs.core.async.untap_STAR_.call(null,m,inst_12090);
var state_12122__$1 = (function (){var statearr_12151 = state_12122;
(statearr_12151[(24)] = inst_12094);

return statearr_12151;
})();
var statearr_12152_12225 = state_12122__$1;
(statearr_12152_12225[(2)] = inst_12095);

(statearr_12152_12225[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (33))){
var inst_12081 = (state_12122[(25)]);
var inst_12083 = cljs.core.chunked_seq_QMARK_.call(null,inst_12081);
var state_12122__$1 = state_12122;
if(inst_12083){
var statearr_12153_12226 = state_12122__$1;
(statearr_12153_12226[(1)] = (36));

} else {
var statearr_12154_12227 = state_12122__$1;
(statearr_12154_12227[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (13))){
var inst_12013 = (state_12122[(26)]);
var inst_12016 = cljs.core.async.close_BANG_.call(null,inst_12013);
var state_12122__$1 = state_12122;
var statearr_12155_12228 = state_12122__$1;
(statearr_12155_12228[(2)] = inst_12016);

(statearr_12155_12228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (22))){
var inst_12034 = (state_12122[(8)]);
var inst_12037 = cljs.core.async.close_BANG_.call(null,inst_12034);
var state_12122__$1 = state_12122;
var statearr_12156_12229 = state_12122__$1;
(statearr_12156_12229[(2)] = inst_12037);

(statearr_12156_12229[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (36))){
var inst_12081 = (state_12122[(25)]);
var inst_12085 = cljs.core.chunk_first.call(null,inst_12081);
var inst_12086 = cljs.core.chunk_rest.call(null,inst_12081);
var inst_12087 = cljs.core.count.call(null,inst_12085);
var inst_12062 = inst_12086;
var inst_12063 = inst_12085;
var inst_12064 = inst_12087;
var inst_12065 = (0);
var state_12122__$1 = (function (){var statearr_12157 = state_12122;
(statearr_12157[(20)] = inst_12062);

(statearr_12157[(9)] = inst_12065);

(statearr_12157[(21)] = inst_12064);

(statearr_12157[(10)] = inst_12063);

return statearr_12157;
})();
var statearr_12158_12230 = state_12122__$1;
(statearr_12158_12230[(2)] = null);

(statearr_12158_12230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (41))){
var inst_12081 = (state_12122[(25)]);
var inst_12097 = (state_12122[(2)]);
var inst_12098 = cljs.core.next.call(null,inst_12081);
var inst_12062 = inst_12098;
var inst_12063 = null;
var inst_12064 = (0);
var inst_12065 = (0);
var state_12122__$1 = (function (){var statearr_12159 = state_12122;
(statearr_12159[(20)] = inst_12062);

(statearr_12159[(9)] = inst_12065);

(statearr_12159[(21)] = inst_12064);

(statearr_12159[(27)] = inst_12097);

(statearr_12159[(10)] = inst_12063);

return statearr_12159;
})();
var statearr_12160_12231 = state_12122__$1;
(statearr_12160_12231[(2)] = null);

(statearr_12160_12231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (43))){
var state_12122__$1 = state_12122;
var statearr_12161_12232 = state_12122__$1;
(statearr_12161_12232[(2)] = null);

(statearr_12161_12232[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (29))){
var inst_12106 = (state_12122[(2)]);
var state_12122__$1 = state_12122;
var statearr_12162_12233 = state_12122__$1;
(statearr_12162_12233[(2)] = inst_12106);

(statearr_12162_12233[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (44))){
var inst_12115 = (state_12122[(2)]);
var state_12122__$1 = (function (){var statearr_12163 = state_12122;
(statearr_12163[(28)] = inst_12115);

return statearr_12163;
})();
var statearr_12164_12234 = state_12122__$1;
(statearr_12164_12234[(2)] = null);

(statearr_12164_12234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (6))){
var inst_12054 = (state_12122[(29)]);
var inst_12053 = cljs.core.deref.call(null,cs);
var inst_12054__$1 = cljs.core.keys.call(null,inst_12053);
var inst_12055 = cljs.core.count.call(null,inst_12054__$1);
var inst_12056 = cljs.core.reset_BANG_.call(null,dctr,inst_12055);
var inst_12061 = cljs.core.seq.call(null,inst_12054__$1);
var inst_12062 = inst_12061;
var inst_12063 = null;
var inst_12064 = (0);
var inst_12065 = (0);
var state_12122__$1 = (function (){var statearr_12165 = state_12122;
(statearr_12165[(20)] = inst_12062);

(statearr_12165[(29)] = inst_12054__$1);

(statearr_12165[(9)] = inst_12065);

(statearr_12165[(21)] = inst_12064);

(statearr_12165[(10)] = inst_12063);

(statearr_12165[(30)] = inst_12056);

return statearr_12165;
})();
var statearr_12166_12235 = state_12122__$1;
(statearr_12166_12235[(2)] = null);

(statearr_12166_12235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (28))){
var inst_12081 = (state_12122[(25)]);
var inst_12062 = (state_12122[(20)]);
var inst_12081__$1 = cljs.core.seq.call(null,inst_12062);
var state_12122__$1 = (function (){var statearr_12167 = state_12122;
(statearr_12167[(25)] = inst_12081__$1);

return statearr_12167;
})();
if(inst_12081__$1){
var statearr_12168_12236 = state_12122__$1;
(statearr_12168_12236[(1)] = (33));

} else {
var statearr_12169_12237 = state_12122__$1;
(statearr_12169_12237[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (25))){
var inst_12065 = (state_12122[(9)]);
var inst_12064 = (state_12122[(21)]);
var inst_12067 = (inst_12065 < inst_12064);
var inst_12068 = inst_12067;
var state_12122__$1 = state_12122;
if(cljs.core.truth_(inst_12068)){
var statearr_12170_12238 = state_12122__$1;
(statearr_12170_12238[(1)] = (27));

} else {
var statearr_12171_12239 = state_12122__$1;
(statearr_12171_12239[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (34))){
var state_12122__$1 = state_12122;
var statearr_12172_12240 = state_12122__$1;
(statearr_12172_12240[(2)] = null);

(statearr_12172_12240[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (17))){
var state_12122__$1 = state_12122;
var statearr_12173_12241 = state_12122__$1;
(statearr_12173_12241[(2)] = null);

(statearr_12173_12241[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (3))){
var inst_12120 = (state_12122[(2)]);
var state_12122__$1 = state_12122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12122__$1,inst_12120);
} else {
if((state_val_12123 === (12))){
var inst_12049 = (state_12122[(2)]);
var state_12122__$1 = state_12122;
var statearr_12174_12242 = state_12122__$1;
(statearr_12174_12242[(2)] = inst_12049);

(statearr_12174_12242[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (2))){
var state_12122__$1 = state_12122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12122__$1,(4),ch);
} else {
if((state_val_12123 === (23))){
var state_12122__$1 = state_12122;
var statearr_12175_12243 = state_12122__$1;
(statearr_12175_12243[(2)] = null);

(statearr_12175_12243[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (35))){
var inst_12104 = (state_12122[(2)]);
var state_12122__$1 = state_12122;
var statearr_12176_12244 = state_12122__$1;
(statearr_12176_12244[(2)] = inst_12104);

(statearr_12176_12244[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (19))){
var inst_12023 = (state_12122[(7)]);
var inst_12027 = cljs.core.chunk_first.call(null,inst_12023);
var inst_12028 = cljs.core.chunk_rest.call(null,inst_12023);
var inst_12029 = cljs.core.count.call(null,inst_12027);
var inst_12003 = inst_12028;
var inst_12004 = inst_12027;
var inst_12005 = inst_12029;
var inst_12006 = (0);
var state_12122__$1 = (function (){var statearr_12177 = state_12122;
(statearr_12177[(13)] = inst_12006);

(statearr_12177[(14)] = inst_12004);

(statearr_12177[(15)] = inst_12003);

(statearr_12177[(16)] = inst_12005);

return statearr_12177;
})();
var statearr_12178_12245 = state_12122__$1;
(statearr_12178_12245[(2)] = null);

(statearr_12178_12245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (11))){
var inst_12023 = (state_12122[(7)]);
var inst_12003 = (state_12122[(15)]);
var inst_12023__$1 = cljs.core.seq.call(null,inst_12003);
var state_12122__$1 = (function (){var statearr_12179 = state_12122;
(statearr_12179[(7)] = inst_12023__$1);

return statearr_12179;
})();
if(inst_12023__$1){
var statearr_12180_12246 = state_12122__$1;
(statearr_12180_12246[(1)] = (16));

} else {
var statearr_12181_12247 = state_12122__$1;
(statearr_12181_12247[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (9))){
var inst_12051 = (state_12122[(2)]);
var state_12122__$1 = state_12122;
var statearr_12182_12248 = state_12122__$1;
(statearr_12182_12248[(2)] = inst_12051);

(statearr_12182_12248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (5))){
var inst_12001 = cljs.core.deref.call(null,cs);
var inst_12002 = cljs.core.seq.call(null,inst_12001);
var inst_12003 = inst_12002;
var inst_12004 = null;
var inst_12005 = (0);
var inst_12006 = (0);
var state_12122__$1 = (function (){var statearr_12183 = state_12122;
(statearr_12183[(13)] = inst_12006);

(statearr_12183[(14)] = inst_12004);

(statearr_12183[(15)] = inst_12003);

(statearr_12183[(16)] = inst_12005);

return statearr_12183;
})();
var statearr_12184_12249 = state_12122__$1;
(statearr_12184_12249[(2)] = null);

(statearr_12184_12249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (14))){
var state_12122__$1 = state_12122;
var statearr_12185_12250 = state_12122__$1;
(statearr_12185_12250[(2)] = null);

(statearr_12185_12250[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (45))){
var inst_12112 = (state_12122[(2)]);
var state_12122__$1 = state_12122;
var statearr_12186_12251 = state_12122__$1;
(statearr_12186_12251[(2)] = inst_12112);

(statearr_12186_12251[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (26))){
var inst_12054 = (state_12122[(29)]);
var inst_12108 = (state_12122[(2)]);
var inst_12109 = cljs.core.seq.call(null,inst_12054);
var state_12122__$1 = (function (){var statearr_12187 = state_12122;
(statearr_12187[(31)] = inst_12108);

return statearr_12187;
})();
if(inst_12109){
var statearr_12188_12252 = state_12122__$1;
(statearr_12188_12252[(1)] = (42));

} else {
var statearr_12189_12253 = state_12122__$1;
(statearr_12189_12253[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (16))){
var inst_12023 = (state_12122[(7)]);
var inst_12025 = cljs.core.chunked_seq_QMARK_.call(null,inst_12023);
var state_12122__$1 = state_12122;
if(inst_12025){
var statearr_12190_12254 = state_12122__$1;
(statearr_12190_12254[(1)] = (19));

} else {
var statearr_12191_12255 = state_12122__$1;
(statearr_12191_12255[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (38))){
var inst_12101 = (state_12122[(2)]);
var state_12122__$1 = state_12122;
var statearr_12192_12256 = state_12122__$1;
(statearr_12192_12256[(2)] = inst_12101);

(statearr_12192_12256[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (30))){
var state_12122__$1 = state_12122;
var statearr_12193_12257 = state_12122__$1;
(statearr_12193_12257[(2)] = null);

(statearr_12193_12257[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (10))){
var inst_12006 = (state_12122[(13)]);
var inst_12004 = (state_12122[(14)]);
var inst_12012 = cljs.core._nth.call(null,inst_12004,inst_12006);
var inst_12013 = cljs.core.nth.call(null,inst_12012,(0),null);
var inst_12014 = cljs.core.nth.call(null,inst_12012,(1),null);
var state_12122__$1 = (function (){var statearr_12194 = state_12122;
(statearr_12194[(26)] = inst_12013);

return statearr_12194;
})();
if(cljs.core.truth_(inst_12014)){
var statearr_12195_12258 = state_12122__$1;
(statearr_12195_12258[(1)] = (13));

} else {
var statearr_12196_12259 = state_12122__$1;
(statearr_12196_12259[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (18))){
var inst_12047 = (state_12122[(2)]);
var state_12122__$1 = state_12122;
var statearr_12197_12260 = state_12122__$1;
(statearr_12197_12260[(2)] = inst_12047);

(statearr_12197_12260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (42))){
var state_12122__$1 = state_12122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12122__$1,(45),dchan);
} else {
if((state_val_12123 === (37))){
var inst_12081 = (state_12122[(25)]);
var inst_12090 = (state_12122[(23)]);
var inst_11994 = (state_12122[(12)]);
var inst_12090__$1 = cljs.core.first.call(null,inst_12081);
var inst_12091 = cljs.core.async.put_BANG_.call(null,inst_12090__$1,inst_11994,done);
var state_12122__$1 = (function (){var statearr_12198 = state_12122;
(statearr_12198[(23)] = inst_12090__$1);

return statearr_12198;
})();
if(cljs.core.truth_(inst_12091)){
var statearr_12199_12261 = state_12122__$1;
(statearr_12199_12261[(1)] = (39));

} else {
var statearr_12200_12262 = state_12122__$1;
(statearr_12200_12262[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12123 === (8))){
var inst_12006 = (state_12122[(13)]);
var inst_12005 = (state_12122[(16)]);
var inst_12008 = (inst_12006 < inst_12005);
var inst_12009 = inst_12008;
var state_12122__$1 = state_12122;
if(cljs.core.truth_(inst_12009)){
var statearr_12201_12263 = state_12122__$1;
(statearr_12201_12263[(1)] = (10));

} else {
var statearr_12202_12264 = state_12122__$1;
(statearr_12202_12264[(1)] = (11));

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
});})(c__7634__auto___12210,cs,m,dchan,dctr,done))
;
return ((function (switch__7572__auto__,c__7634__auto___12210,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7573__auto__ = null;
var cljs$core$async$mult_$_state_machine__7573__auto____0 = (function (){
var statearr_12206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12206[(0)] = cljs$core$async$mult_$_state_machine__7573__auto__);

(statearr_12206[(1)] = (1));

return statearr_12206;
});
var cljs$core$async$mult_$_state_machine__7573__auto____1 = (function (state_12122){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_12122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e12207){if((e12207 instanceof Object)){
var ex__7576__auto__ = e12207;
var statearr_12208_12265 = state_12122;
(statearr_12208_12265[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12266 = state_12122;
state_12122 = G__12266;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7573__auto__ = function(state_12122){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7573__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7573__auto____1.call(this,state_12122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7573__auto____0;
cljs$core$async$mult_$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7573__auto____1;
return cljs$core$async$mult_$_state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto___12210,cs,m,dchan,dctr,done))
})();
var state__7636__auto__ = (function (){var statearr_12209 = f__7635__auto__.call(null);
(statearr_12209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto___12210);

return statearr_12209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto___12210,cs,m,dchan,dctr,done))
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
var G__12268 = arguments.length;
switch (G__12268) {
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

cljs.core.async.Mix = (function (){var obj12271 = {};
return obj12271;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12276){
var map__12277 = p__12276;
var map__12277__$1 = ((cljs.core.seq_QMARK_.call(null,map__12277))?cljs.core.apply.call(null,cljs.core.hash_map,map__12277):map__12277);
var opts = map__12277__$1;
var statearr_12278_12281 = state;
(statearr_12278_12281[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4422__auto__ = cljs.core.async.do_alts.call(null,((function (map__12277,map__12277__$1,opts){
return (function (val){
var statearr_12279_12282 = state;
(statearr_12279_12282[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12277,map__12277__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4422__auto__)){
var cb = temp__4422__auto__;
var statearr_12280_12283 = state;
(statearr_12280_12283[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12272){
var G__12273 = cljs.core.first.call(null,seq12272);
var seq12272__$1 = cljs.core.next.call(null,seq12272);
var G__12274 = cljs.core.first.call(null,seq12272__$1);
var seq12272__$2 = cljs.core.next.call(null,seq12272__$1);
var G__12275 = cljs.core.first.call(null,seq12272__$2);
var seq12272__$3 = cljs.core.next.call(null,seq12272__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12273,G__12274,G__12275,seq12272__$3);
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
if(typeof cljs.core.async.t12403 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12403 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12404){
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
this.meta12404 = meta12404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12405,meta12404__$1){
var self__ = this;
var _12405__$1 = this;
return (new cljs.core.async.t12403(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12404__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12403.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12405){
var self__ = this;
var _12405__$1 = this;
return self__.meta12404;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12403.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12403.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12403.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t12403.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12403.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12403.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12403.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12403.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t12403.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12404","meta12404",-1027437519,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12403.cljs$lang$type = true;

cljs.core.async.t12403.cljs$lang$ctorStr = "cljs.core.async/t12403";

cljs.core.async.t12403.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t12403");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t12403 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t12403(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12404){
return (new cljs.core.async.t12403(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12404));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t12403(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7634__auto___12522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto___12522,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto___12522,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12475){
var state_val_12476 = (state_12475[(1)]);
if((state_val_12476 === (7))){
var inst_12419 = (state_12475[(7)]);
var inst_12424 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12419);
var state_12475__$1 = state_12475;
var statearr_12477_12523 = state_12475__$1;
(statearr_12477_12523[(2)] = inst_12424);

(statearr_12477_12523[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (20))){
var inst_12434 = (state_12475[(8)]);
var state_12475__$1 = state_12475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12475__$1,(23),out,inst_12434);
} else {
if((state_val_12476 === (1))){
var inst_12409 = (state_12475[(9)]);
var inst_12409__$1 = calc_state.call(null);
var inst_12410 = cljs.core.seq_QMARK_.call(null,inst_12409__$1);
var state_12475__$1 = (function (){var statearr_12478 = state_12475;
(statearr_12478[(9)] = inst_12409__$1);

return statearr_12478;
})();
if(inst_12410){
var statearr_12479_12524 = state_12475__$1;
(statearr_12479_12524[(1)] = (2));

} else {
var statearr_12480_12525 = state_12475__$1;
(statearr_12480_12525[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (24))){
var inst_12427 = (state_12475[(10)]);
var inst_12419 = inst_12427;
var state_12475__$1 = (function (){var statearr_12481 = state_12475;
(statearr_12481[(7)] = inst_12419);

return statearr_12481;
})();
var statearr_12482_12526 = state_12475__$1;
(statearr_12482_12526[(2)] = null);

(statearr_12482_12526[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (4))){
var inst_12409 = (state_12475[(9)]);
var inst_12415 = (state_12475[(2)]);
var inst_12416 = cljs.core.get.call(null,inst_12415,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12417 = cljs.core.get.call(null,inst_12415,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12418 = cljs.core.get.call(null,inst_12415,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12419 = inst_12409;
var state_12475__$1 = (function (){var statearr_12483 = state_12475;
(statearr_12483[(7)] = inst_12419);

(statearr_12483[(11)] = inst_12417);

(statearr_12483[(12)] = inst_12416);

(statearr_12483[(13)] = inst_12418);

return statearr_12483;
})();
var statearr_12484_12527 = state_12475__$1;
(statearr_12484_12527[(2)] = null);

(statearr_12484_12527[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (15))){
var state_12475__$1 = state_12475;
var statearr_12485_12528 = state_12475__$1;
(statearr_12485_12528[(2)] = null);

(statearr_12485_12528[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (21))){
var inst_12427 = (state_12475[(10)]);
var inst_12419 = inst_12427;
var state_12475__$1 = (function (){var statearr_12486 = state_12475;
(statearr_12486[(7)] = inst_12419);

return statearr_12486;
})();
var statearr_12487_12529 = state_12475__$1;
(statearr_12487_12529[(2)] = null);

(statearr_12487_12529[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (13))){
var inst_12471 = (state_12475[(2)]);
var state_12475__$1 = state_12475;
var statearr_12488_12530 = state_12475__$1;
(statearr_12488_12530[(2)] = inst_12471);

(statearr_12488_12530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (22))){
var inst_12469 = (state_12475[(2)]);
var state_12475__$1 = state_12475;
var statearr_12489_12531 = state_12475__$1;
(statearr_12489_12531[(2)] = inst_12469);

(statearr_12489_12531[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (6))){
var inst_12473 = (state_12475[(2)]);
var state_12475__$1 = state_12475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12475__$1,inst_12473);
} else {
if((state_val_12476 === (25))){
var state_12475__$1 = state_12475;
var statearr_12490_12532 = state_12475__$1;
(statearr_12490_12532[(2)] = null);

(statearr_12490_12532[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (17))){
var inst_12449 = (state_12475[(14)]);
var state_12475__$1 = state_12475;
var statearr_12491_12533 = state_12475__$1;
(statearr_12491_12533[(2)] = inst_12449);

(statearr_12491_12533[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (3))){
var inst_12409 = (state_12475[(9)]);
var state_12475__$1 = state_12475;
var statearr_12492_12534 = state_12475__$1;
(statearr_12492_12534[(2)] = inst_12409);

(statearr_12492_12534[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (12))){
var inst_12449 = (state_12475[(14)]);
var inst_12428 = (state_12475[(15)]);
var inst_12435 = (state_12475[(16)]);
var inst_12449__$1 = inst_12428.call(null,inst_12435);
var state_12475__$1 = (function (){var statearr_12493 = state_12475;
(statearr_12493[(14)] = inst_12449__$1);

return statearr_12493;
})();
if(cljs.core.truth_(inst_12449__$1)){
var statearr_12494_12535 = state_12475__$1;
(statearr_12494_12535[(1)] = (17));

} else {
var statearr_12495_12536 = state_12475__$1;
(statearr_12495_12536[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (2))){
var inst_12409 = (state_12475[(9)]);
var inst_12412 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12409);
var state_12475__$1 = state_12475;
var statearr_12496_12537 = state_12475__$1;
(statearr_12496_12537[(2)] = inst_12412);

(statearr_12496_12537[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (23))){
var inst_12460 = (state_12475[(2)]);
var state_12475__$1 = state_12475;
if(cljs.core.truth_(inst_12460)){
var statearr_12497_12538 = state_12475__$1;
(statearr_12497_12538[(1)] = (24));

} else {
var statearr_12498_12539 = state_12475__$1;
(statearr_12498_12539[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (19))){
var inst_12457 = (state_12475[(2)]);
var state_12475__$1 = state_12475;
if(cljs.core.truth_(inst_12457)){
var statearr_12499_12540 = state_12475__$1;
(statearr_12499_12540[(1)] = (20));

} else {
var statearr_12500_12541 = state_12475__$1;
(statearr_12500_12541[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (11))){
var inst_12434 = (state_12475[(8)]);
var inst_12440 = (inst_12434 == null);
var state_12475__$1 = state_12475;
if(cljs.core.truth_(inst_12440)){
var statearr_12501_12542 = state_12475__$1;
(statearr_12501_12542[(1)] = (14));

} else {
var statearr_12502_12543 = state_12475__$1;
(statearr_12502_12543[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (9))){
var inst_12427 = (state_12475[(10)]);
var inst_12427__$1 = (state_12475[(2)]);
var inst_12428 = cljs.core.get.call(null,inst_12427__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12429 = cljs.core.get.call(null,inst_12427__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12430 = cljs.core.get.call(null,inst_12427__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12475__$1 = (function (){var statearr_12503 = state_12475;
(statearr_12503[(10)] = inst_12427__$1);

(statearr_12503[(15)] = inst_12428);

(statearr_12503[(17)] = inst_12429);

return statearr_12503;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12475__$1,(10),inst_12430);
} else {
if((state_val_12476 === (5))){
var inst_12419 = (state_12475[(7)]);
var inst_12422 = cljs.core.seq_QMARK_.call(null,inst_12419);
var state_12475__$1 = state_12475;
if(inst_12422){
var statearr_12504_12544 = state_12475__$1;
(statearr_12504_12544[(1)] = (7));

} else {
var statearr_12505_12545 = state_12475__$1;
(statearr_12505_12545[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (14))){
var inst_12435 = (state_12475[(16)]);
var inst_12442 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12435);
var state_12475__$1 = state_12475;
var statearr_12506_12546 = state_12475__$1;
(statearr_12506_12546[(2)] = inst_12442);

(statearr_12506_12546[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (26))){
var inst_12465 = (state_12475[(2)]);
var state_12475__$1 = state_12475;
var statearr_12507_12547 = state_12475__$1;
(statearr_12507_12547[(2)] = inst_12465);

(statearr_12507_12547[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (16))){
var inst_12445 = (state_12475[(2)]);
var inst_12446 = calc_state.call(null);
var inst_12419 = inst_12446;
var state_12475__$1 = (function (){var statearr_12508 = state_12475;
(statearr_12508[(7)] = inst_12419);

(statearr_12508[(18)] = inst_12445);

return statearr_12508;
})();
var statearr_12509_12548 = state_12475__$1;
(statearr_12509_12548[(2)] = null);

(statearr_12509_12548[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (10))){
var inst_12434 = (state_12475[(8)]);
var inst_12435 = (state_12475[(16)]);
var inst_12433 = (state_12475[(2)]);
var inst_12434__$1 = cljs.core.nth.call(null,inst_12433,(0),null);
var inst_12435__$1 = cljs.core.nth.call(null,inst_12433,(1),null);
var inst_12436 = (inst_12434__$1 == null);
var inst_12437 = cljs.core._EQ_.call(null,inst_12435__$1,change);
var inst_12438 = (inst_12436) || (inst_12437);
var state_12475__$1 = (function (){var statearr_12510 = state_12475;
(statearr_12510[(8)] = inst_12434__$1);

(statearr_12510[(16)] = inst_12435__$1);

return statearr_12510;
})();
if(cljs.core.truth_(inst_12438)){
var statearr_12511_12549 = state_12475__$1;
(statearr_12511_12549[(1)] = (11));

} else {
var statearr_12512_12550 = state_12475__$1;
(statearr_12512_12550[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (18))){
var inst_12428 = (state_12475[(15)]);
var inst_12429 = (state_12475[(17)]);
var inst_12435 = (state_12475[(16)]);
var inst_12452 = cljs.core.empty_QMARK_.call(null,inst_12428);
var inst_12453 = inst_12429.call(null,inst_12435);
var inst_12454 = cljs.core.not.call(null,inst_12453);
var inst_12455 = (inst_12452) && (inst_12454);
var state_12475__$1 = state_12475;
var statearr_12513_12551 = state_12475__$1;
(statearr_12513_12551[(2)] = inst_12455);

(statearr_12513_12551[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12476 === (8))){
var inst_12419 = (state_12475[(7)]);
var state_12475__$1 = state_12475;
var statearr_12514_12552 = state_12475__$1;
(statearr_12514_12552[(2)] = inst_12419);

(statearr_12514_12552[(1)] = (9));


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
});})(c__7634__auto___12522,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7572__auto__,c__7634__auto___12522,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7573__auto__ = null;
var cljs$core$async$mix_$_state_machine__7573__auto____0 = (function (){
var statearr_12518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12518[(0)] = cljs$core$async$mix_$_state_machine__7573__auto__);

(statearr_12518[(1)] = (1));

return statearr_12518;
});
var cljs$core$async$mix_$_state_machine__7573__auto____1 = (function (state_12475){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_12475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e12519){if((e12519 instanceof Object)){
var ex__7576__auto__ = e12519;
var statearr_12520_12553 = state_12475;
(statearr_12520_12553[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12554 = state_12475;
state_12475 = G__12554;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7573__auto__ = function(state_12475){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7573__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7573__auto____1.call(this,state_12475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7573__auto____0;
cljs$core$async$mix_$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7573__auto____1;
return cljs$core$async$mix_$_state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto___12522,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7636__auto__ = (function (){var statearr_12521 = f__7635__auto__.call(null);
(statearr_12521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto___12522);

return statearr_12521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto___12522,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj12556 = {};
return obj12556;
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
var G__12558 = arguments.length;
switch (G__12558) {
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
var G__12562 = arguments.length;
switch (G__12562) {
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
return (function (p1__12560_SHARP_){
if(cljs.core.truth_(p1__12560_SHARP_.call(null,topic))){
return p1__12560_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12560_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4309__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t12563 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12563 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12564){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12564 = meta12564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12565,meta12564__$1){
var self__ = this;
var _12565__$1 = this;
return (new cljs.core.async.t12563(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12564__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t12563.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12565){
var self__ = this;
var _12565__$1 = this;
return self__.meta12564;
});})(mults,ensure_mult))
;

cljs.core.async.t12563.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12563.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t12563.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t12563.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t12563.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t12563.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t12563.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t12563.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12564","meta12564",372358350,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t12563.cljs$lang$type = true;

cljs.core.async.t12563.cljs$lang$ctorStr = "cljs.core.async/t12563";

cljs.core.async.t12563.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t12563");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t12563 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t12563(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12564){
return (new cljs.core.async.t12563(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12564));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t12563(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7634__auto___12686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto___12686,mults,ensure_mult,p){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto___12686,mults,ensure_mult,p){
return (function (state_12637){
var state_val_12638 = (state_12637[(1)]);
if((state_val_12638 === (7))){
var inst_12633 = (state_12637[(2)]);
var state_12637__$1 = state_12637;
var statearr_12639_12687 = state_12637__$1;
(statearr_12639_12687[(2)] = inst_12633);

(statearr_12639_12687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (20))){
var state_12637__$1 = state_12637;
var statearr_12640_12688 = state_12637__$1;
(statearr_12640_12688[(2)] = null);

(statearr_12640_12688[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (1))){
var state_12637__$1 = state_12637;
var statearr_12641_12689 = state_12637__$1;
(statearr_12641_12689[(2)] = null);

(statearr_12641_12689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (24))){
var inst_12616 = (state_12637[(7)]);
var inst_12625 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12616);
var state_12637__$1 = state_12637;
var statearr_12642_12690 = state_12637__$1;
(statearr_12642_12690[(2)] = inst_12625);

(statearr_12642_12690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (4))){
var inst_12568 = (state_12637[(8)]);
var inst_12568__$1 = (state_12637[(2)]);
var inst_12569 = (inst_12568__$1 == null);
var state_12637__$1 = (function (){var statearr_12643 = state_12637;
(statearr_12643[(8)] = inst_12568__$1);

return statearr_12643;
})();
if(cljs.core.truth_(inst_12569)){
var statearr_12644_12691 = state_12637__$1;
(statearr_12644_12691[(1)] = (5));

} else {
var statearr_12645_12692 = state_12637__$1;
(statearr_12645_12692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (15))){
var inst_12610 = (state_12637[(2)]);
var state_12637__$1 = state_12637;
var statearr_12646_12693 = state_12637__$1;
(statearr_12646_12693[(2)] = inst_12610);

(statearr_12646_12693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (21))){
var inst_12630 = (state_12637[(2)]);
var state_12637__$1 = (function (){var statearr_12647 = state_12637;
(statearr_12647[(9)] = inst_12630);

return statearr_12647;
})();
var statearr_12648_12694 = state_12637__$1;
(statearr_12648_12694[(2)] = null);

(statearr_12648_12694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (13))){
var inst_12592 = (state_12637[(10)]);
var inst_12594 = cljs.core.chunked_seq_QMARK_.call(null,inst_12592);
var state_12637__$1 = state_12637;
if(inst_12594){
var statearr_12649_12695 = state_12637__$1;
(statearr_12649_12695[(1)] = (16));

} else {
var statearr_12650_12696 = state_12637__$1;
(statearr_12650_12696[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (22))){
var inst_12622 = (state_12637[(2)]);
var state_12637__$1 = state_12637;
if(cljs.core.truth_(inst_12622)){
var statearr_12651_12697 = state_12637__$1;
(statearr_12651_12697[(1)] = (23));

} else {
var statearr_12652_12698 = state_12637__$1;
(statearr_12652_12698[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (6))){
var inst_12568 = (state_12637[(8)]);
var inst_12618 = (state_12637[(11)]);
var inst_12616 = (state_12637[(7)]);
var inst_12616__$1 = topic_fn.call(null,inst_12568);
var inst_12617 = cljs.core.deref.call(null,mults);
var inst_12618__$1 = cljs.core.get.call(null,inst_12617,inst_12616__$1);
var state_12637__$1 = (function (){var statearr_12653 = state_12637;
(statearr_12653[(11)] = inst_12618__$1);

(statearr_12653[(7)] = inst_12616__$1);

return statearr_12653;
})();
if(cljs.core.truth_(inst_12618__$1)){
var statearr_12654_12699 = state_12637__$1;
(statearr_12654_12699[(1)] = (19));

} else {
var statearr_12655_12700 = state_12637__$1;
(statearr_12655_12700[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (25))){
var inst_12627 = (state_12637[(2)]);
var state_12637__$1 = state_12637;
var statearr_12656_12701 = state_12637__$1;
(statearr_12656_12701[(2)] = inst_12627);

(statearr_12656_12701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (17))){
var inst_12592 = (state_12637[(10)]);
var inst_12601 = cljs.core.first.call(null,inst_12592);
var inst_12602 = cljs.core.async.muxch_STAR_.call(null,inst_12601);
var inst_12603 = cljs.core.async.close_BANG_.call(null,inst_12602);
var inst_12604 = cljs.core.next.call(null,inst_12592);
var inst_12578 = inst_12604;
var inst_12579 = null;
var inst_12580 = (0);
var inst_12581 = (0);
var state_12637__$1 = (function (){var statearr_12657 = state_12637;
(statearr_12657[(12)] = inst_12581);

(statearr_12657[(13)] = inst_12579);

(statearr_12657[(14)] = inst_12603);

(statearr_12657[(15)] = inst_12578);

(statearr_12657[(16)] = inst_12580);

return statearr_12657;
})();
var statearr_12658_12702 = state_12637__$1;
(statearr_12658_12702[(2)] = null);

(statearr_12658_12702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (3))){
var inst_12635 = (state_12637[(2)]);
var state_12637__$1 = state_12637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12637__$1,inst_12635);
} else {
if((state_val_12638 === (12))){
var inst_12612 = (state_12637[(2)]);
var state_12637__$1 = state_12637;
var statearr_12659_12703 = state_12637__$1;
(statearr_12659_12703[(2)] = inst_12612);

(statearr_12659_12703[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (2))){
var state_12637__$1 = state_12637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12637__$1,(4),ch);
} else {
if((state_val_12638 === (23))){
var state_12637__$1 = state_12637;
var statearr_12660_12704 = state_12637__$1;
(statearr_12660_12704[(2)] = null);

(statearr_12660_12704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (19))){
var inst_12568 = (state_12637[(8)]);
var inst_12618 = (state_12637[(11)]);
var inst_12620 = cljs.core.async.muxch_STAR_.call(null,inst_12618);
var state_12637__$1 = state_12637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12637__$1,(22),inst_12620,inst_12568);
} else {
if((state_val_12638 === (11))){
var inst_12592 = (state_12637[(10)]);
var inst_12578 = (state_12637[(15)]);
var inst_12592__$1 = cljs.core.seq.call(null,inst_12578);
var state_12637__$1 = (function (){var statearr_12661 = state_12637;
(statearr_12661[(10)] = inst_12592__$1);

return statearr_12661;
})();
if(inst_12592__$1){
var statearr_12662_12705 = state_12637__$1;
(statearr_12662_12705[(1)] = (13));

} else {
var statearr_12663_12706 = state_12637__$1;
(statearr_12663_12706[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (9))){
var inst_12614 = (state_12637[(2)]);
var state_12637__$1 = state_12637;
var statearr_12664_12707 = state_12637__$1;
(statearr_12664_12707[(2)] = inst_12614);

(statearr_12664_12707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (5))){
var inst_12575 = cljs.core.deref.call(null,mults);
var inst_12576 = cljs.core.vals.call(null,inst_12575);
var inst_12577 = cljs.core.seq.call(null,inst_12576);
var inst_12578 = inst_12577;
var inst_12579 = null;
var inst_12580 = (0);
var inst_12581 = (0);
var state_12637__$1 = (function (){var statearr_12665 = state_12637;
(statearr_12665[(12)] = inst_12581);

(statearr_12665[(13)] = inst_12579);

(statearr_12665[(15)] = inst_12578);

(statearr_12665[(16)] = inst_12580);

return statearr_12665;
})();
var statearr_12666_12708 = state_12637__$1;
(statearr_12666_12708[(2)] = null);

(statearr_12666_12708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (14))){
var state_12637__$1 = state_12637;
var statearr_12670_12709 = state_12637__$1;
(statearr_12670_12709[(2)] = null);

(statearr_12670_12709[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (16))){
var inst_12592 = (state_12637[(10)]);
var inst_12596 = cljs.core.chunk_first.call(null,inst_12592);
var inst_12597 = cljs.core.chunk_rest.call(null,inst_12592);
var inst_12598 = cljs.core.count.call(null,inst_12596);
var inst_12578 = inst_12597;
var inst_12579 = inst_12596;
var inst_12580 = inst_12598;
var inst_12581 = (0);
var state_12637__$1 = (function (){var statearr_12671 = state_12637;
(statearr_12671[(12)] = inst_12581);

(statearr_12671[(13)] = inst_12579);

(statearr_12671[(15)] = inst_12578);

(statearr_12671[(16)] = inst_12580);

return statearr_12671;
})();
var statearr_12672_12710 = state_12637__$1;
(statearr_12672_12710[(2)] = null);

(statearr_12672_12710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (10))){
var inst_12581 = (state_12637[(12)]);
var inst_12579 = (state_12637[(13)]);
var inst_12578 = (state_12637[(15)]);
var inst_12580 = (state_12637[(16)]);
var inst_12586 = cljs.core._nth.call(null,inst_12579,inst_12581);
var inst_12587 = cljs.core.async.muxch_STAR_.call(null,inst_12586);
var inst_12588 = cljs.core.async.close_BANG_.call(null,inst_12587);
var inst_12589 = (inst_12581 + (1));
var tmp12667 = inst_12579;
var tmp12668 = inst_12578;
var tmp12669 = inst_12580;
var inst_12578__$1 = tmp12668;
var inst_12579__$1 = tmp12667;
var inst_12580__$1 = tmp12669;
var inst_12581__$1 = inst_12589;
var state_12637__$1 = (function (){var statearr_12673 = state_12637;
(statearr_12673[(12)] = inst_12581__$1);

(statearr_12673[(13)] = inst_12579__$1);

(statearr_12673[(17)] = inst_12588);

(statearr_12673[(15)] = inst_12578__$1);

(statearr_12673[(16)] = inst_12580__$1);

return statearr_12673;
})();
var statearr_12674_12711 = state_12637__$1;
(statearr_12674_12711[(2)] = null);

(statearr_12674_12711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (18))){
var inst_12607 = (state_12637[(2)]);
var state_12637__$1 = state_12637;
var statearr_12675_12712 = state_12637__$1;
(statearr_12675_12712[(2)] = inst_12607);

(statearr_12675_12712[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12638 === (8))){
var inst_12581 = (state_12637[(12)]);
var inst_12580 = (state_12637[(16)]);
var inst_12583 = (inst_12581 < inst_12580);
var inst_12584 = inst_12583;
var state_12637__$1 = state_12637;
if(cljs.core.truth_(inst_12584)){
var statearr_12676_12713 = state_12637__$1;
(statearr_12676_12713[(1)] = (10));

} else {
var statearr_12677_12714 = state_12637__$1;
(statearr_12677_12714[(1)] = (11));

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
});})(c__7634__auto___12686,mults,ensure_mult,p))
;
return ((function (switch__7572__auto__,c__7634__auto___12686,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7573__auto__ = null;
var cljs$core$async$state_machine__7573__auto____0 = (function (){
var statearr_12681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12681[(0)] = cljs$core$async$state_machine__7573__auto__);

(statearr_12681[(1)] = (1));

return statearr_12681;
});
var cljs$core$async$state_machine__7573__auto____1 = (function (state_12637){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_12637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e12682){if((e12682 instanceof Object)){
var ex__7576__auto__ = e12682;
var statearr_12683_12715 = state_12637;
(statearr_12683_12715[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12716 = state_12637;
state_12637 = G__12716;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
cljs$core$async$state_machine__7573__auto__ = function(state_12637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7573__auto____1.call(this,state_12637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7573__auto____0;
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7573__auto____1;
return cljs$core$async$state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto___12686,mults,ensure_mult,p))
})();
var state__7636__auto__ = (function (){var statearr_12684 = f__7635__auto__.call(null);
(statearr_12684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto___12686);

return statearr_12684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto___12686,mults,ensure_mult,p))
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
var G__12718 = arguments.length;
switch (G__12718) {
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
var G__12721 = arguments.length;
switch (G__12721) {
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
var G__12724 = arguments.length;
switch (G__12724) {
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
var c__7634__auto___12794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto___12794,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto___12794,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12763){
var state_val_12764 = (state_12763[(1)]);
if((state_val_12764 === (7))){
var state_12763__$1 = state_12763;
var statearr_12765_12795 = state_12763__$1;
(statearr_12765_12795[(2)] = null);

(statearr_12765_12795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12764 === (1))){
var state_12763__$1 = state_12763;
var statearr_12766_12796 = state_12763__$1;
(statearr_12766_12796[(2)] = null);

(statearr_12766_12796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12764 === (4))){
var inst_12727 = (state_12763[(7)]);
var inst_12729 = (inst_12727 < cnt);
var state_12763__$1 = state_12763;
if(cljs.core.truth_(inst_12729)){
var statearr_12767_12797 = state_12763__$1;
(statearr_12767_12797[(1)] = (6));

} else {
var statearr_12768_12798 = state_12763__$1;
(statearr_12768_12798[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12764 === (15))){
var inst_12759 = (state_12763[(2)]);
var state_12763__$1 = state_12763;
var statearr_12769_12799 = state_12763__$1;
(statearr_12769_12799[(2)] = inst_12759);

(statearr_12769_12799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12764 === (13))){
var inst_12752 = cljs.core.async.close_BANG_.call(null,out);
var state_12763__$1 = state_12763;
var statearr_12770_12800 = state_12763__$1;
(statearr_12770_12800[(2)] = inst_12752);

(statearr_12770_12800[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12764 === (6))){
var state_12763__$1 = state_12763;
var statearr_12771_12801 = state_12763__$1;
(statearr_12771_12801[(2)] = null);

(statearr_12771_12801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12764 === (3))){
var inst_12761 = (state_12763[(2)]);
var state_12763__$1 = state_12763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12763__$1,inst_12761);
} else {
if((state_val_12764 === (12))){
var inst_12749 = (state_12763[(8)]);
var inst_12749__$1 = (state_12763[(2)]);
var inst_12750 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12749__$1);
var state_12763__$1 = (function (){var statearr_12772 = state_12763;
(statearr_12772[(8)] = inst_12749__$1);

return statearr_12772;
})();
if(cljs.core.truth_(inst_12750)){
var statearr_12773_12802 = state_12763__$1;
(statearr_12773_12802[(1)] = (13));

} else {
var statearr_12774_12803 = state_12763__$1;
(statearr_12774_12803[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12764 === (2))){
var inst_12726 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12727 = (0);
var state_12763__$1 = (function (){var statearr_12775 = state_12763;
(statearr_12775[(9)] = inst_12726);

(statearr_12775[(7)] = inst_12727);

return statearr_12775;
})();
var statearr_12776_12804 = state_12763__$1;
(statearr_12776_12804[(2)] = null);

(statearr_12776_12804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12764 === (11))){
var inst_12727 = (state_12763[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12763,(10),Object,null,(9));
var inst_12736 = chs__$1.call(null,inst_12727);
var inst_12737 = done.call(null,inst_12727);
var inst_12738 = cljs.core.async.take_BANG_.call(null,inst_12736,inst_12737);
var state_12763__$1 = state_12763;
var statearr_12777_12805 = state_12763__$1;
(statearr_12777_12805[(2)] = inst_12738);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12763__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12764 === (9))){
var inst_12727 = (state_12763[(7)]);
var inst_12740 = (state_12763[(2)]);
var inst_12741 = (inst_12727 + (1));
var inst_12727__$1 = inst_12741;
var state_12763__$1 = (function (){var statearr_12778 = state_12763;
(statearr_12778[(10)] = inst_12740);

(statearr_12778[(7)] = inst_12727__$1);

return statearr_12778;
})();
var statearr_12779_12806 = state_12763__$1;
(statearr_12779_12806[(2)] = null);

(statearr_12779_12806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12764 === (5))){
var inst_12747 = (state_12763[(2)]);
var state_12763__$1 = (function (){var statearr_12780 = state_12763;
(statearr_12780[(11)] = inst_12747);

return statearr_12780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12763__$1,(12),dchan);
} else {
if((state_val_12764 === (14))){
var inst_12749 = (state_12763[(8)]);
var inst_12754 = cljs.core.apply.call(null,f,inst_12749);
var state_12763__$1 = state_12763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12763__$1,(16),out,inst_12754);
} else {
if((state_val_12764 === (16))){
var inst_12756 = (state_12763[(2)]);
var state_12763__$1 = (function (){var statearr_12781 = state_12763;
(statearr_12781[(12)] = inst_12756);

return statearr_12781;
})();
var statearr_12782_12807 = state_12763__$1;
(statearr_12782_12807[(2)] = null);

(statearr_12782_12807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12764 === (10))){
var inst_12731 = (state_12763[(2)]);
var inst_12732 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12763__$1 = (function (){var statearr_12783 = state_12763;
(statearr_12783[(13)] = inst_12731);

return statearr_12783;
})();
var statearr_12784_12808 = state_12763__$1;
(statearr_12784_12808[(2)] = inst_12732);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12763__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12764 === (8))){
var inst_12745 = (state_12763[(2)]);
var state_12763__$1 = state_12763;
var statearr_12785_12809 = state_12763__$1;
(statearr_12785_12809[(2)] = inst_12745);

(statearr_12785_12809[(1)] = (5));


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
});})(c__7634__auto___12794,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7572__auto__,c__7634__auto___12794,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7573__auto__ = null;
var cljs$core$async$state_machine__7573__auto____0 = (function (){
var statearr_12789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12789[(0)] = cljs$core$async$state_machine__7573__auto__);

(statearr_12789[(1)] = (1));

return statearr_12789;
});
var cljs$core$async$state_machine__7573__auto____1 = (function (state_12763){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_12763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e12790){if((e12790 instanceof Object)){
var ex__7576__auto__ = e12790;
var statearr_12791_12810 = state_12763;
(statearr_12791_12810[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12811 = state_12763;
state_12763 = G__12811;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
cljs$core$async$state_machine__7573__auto__ = function(state_12763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7573__auto____1.call(this,state_12763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7573__auto____0;
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7573__auto____1;
return cljs$core$async$state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto___12794,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7636__auto__ = (function (){var statearr_12792 = f__7635__auto__.call(null);
(statearr_12792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto___12794);

return statearr_12792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto___12794,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__12814 = arguments.length;
switch (G__12814) {
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
var c__7634__auto___12869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto___12869,out){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto___12869,out){
return (function (state_12844){
var state_val_12845 = (state_12844[(1)]);
if((state_val_12845 === (7))){
var inst_12823 = (state_12844[(7)]);
var inst_12824 = (state_12844[(8)]);
var inst_12823__$1 = (state_12844[(2)]);
var inst_12824__$1 = cljs.core.nth.call(null,inst_12823__$1,(0),null);
var inst_12825 = cljs.core.nth.call(null,inst_12823__$1,(1),null);
var inst_12826 = (inst_12824__$1 == null);
var state_12844__$1 = (function (){var statearr_12846 = state_12844;
(statearr_12846[(7)] = inst_12823__$1);

(statearr_12846[(9)] = inst_12825);

(statearr_12846[(8)] = inst_12824__$1);

return statearr_12846;
})();
if(cljs.core.truth_(inst_12826)){
var statearr_12847_12870 = state_12844__$1;
(statearr_12847_12870[(1)] = (8));

} else {
var statearr_12848_12871 = state_12844__$1;
(statearr_12848_12871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12845 === (1))){
var inst_12815 = cljs.core.vec.call(null,chs);
var inst_12816 = inst_12815;
var state_12844__$1 = (function (){var statearr_12849 = state_12844;
(statearr_12849[(10)] = inst_12816);

return statearr_12849;
})();
var statearr_12850_12872 = state_12844__$1;
(statearr_12850_12872[(2)] = null);

(statearr_12850_12872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12845 === (4))){
var inst_12816 = (state_12844[(10)]);
var state_12844__$1 = state_12844;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12844__$1,(7),inst_12816);
} else {
if((state_val_12845 === (6))){
var inst_12840 = (state_12844[(2)]);
var state_12844__$1 = state_12844;
var statearr_12851_12873 = state_12844__$1;
(statearr_12851_12873[(2)] = inst_12840);

(statearr_12851_12873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12845 === (3))){
var inst_12842 = (state_12844[(2)]);
var state_12844__$1 = state_12844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12844__$1,inst_12842);
} else {
if((state_val_12845 === (2))){
var inst_12816 = (state_12844[(10)]);
var inst_12818 = cljs.core.count.call(null,inst_12816);
var inst_12819 = (inst_12818 > (0));
var state_12844__$1 = state_12844;
if(cljs.core.truth_(inst_12819)){
var statearr_12853_12874 = state_12844__$1;
(statearr_12853_12874[(1)] = (4));

} else {
var statearr_12854_12875 = state_12844__$1;
(statearr_12854_12875[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12845 === (11))){
var inst_12816 = (state_12844[(10)]);
var inst_12833 = (state_12844[(2)]);
var tmp12852 = inst_12816;
var inst_12816__$1 = tmp12852;
var state_12844__$1 = (function (){var statearr_12855 = state_12844;
(statearr_12855[(11)] = inst_12833);

(statearr_12855[(10)] = inst_12816__$1);

return statearr_12855;
})();
var statearr_12856_12876 = state_12844__$1;
(statearr_12856_12876[(2)] = null);

(statearr_12856_12876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12845 === (9))){
var inst_12824 = (state_12844[(8)]);
var state_12844__$1 = state_12844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12844__$1,(11),out,inst_12824);
} else {
if((state_val_12845 === (5))){
var inst_12838 = cljs.core.async.close_BANG_.call(null,out);
var state_12844__$1 = state_12844;
var statearr_12857_12877 = state_12844__$1;
(statearr_12857_12877[(2)] = inst_12838);

(statearr_12857_12877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12845 === (10))){
var inst_12836 = (state_12844[(2)]);
var state_12844__$1 = state_12844;
var statearr_12858_12878 = state_12844__$1;
(statearr_12858_12878[(2)] = inst_12836);

(statearr_12858_12878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12845 === (8))){
var inst_12823 = (state_12844[(7)]);
var inst_12825 = (state_12844[(9)]);
var inst_12824 = (state_12844[(8)]);
var inst_12816 = (state_12844[(10)]);
var inst_12828 = (function (){var cs = inst_12816;
var vec__12821 = inst_12823;
var v = inst_12824;
var c = inst_12825;
return ((function (cs,vec__12821,v,c,inst_12823,inst_12825,inst_12824,inst_12816,state_val_12845,c__7634__auto___12869,out){
return (function (p1__12812_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12812_SHARP_);
});
;})(cs,vec__12821,v,c,inst_12823,inst_12825,inst_12824,inst_12816,state_val_12845,c__7634__auto___12869,out))
})();
var inst_12829 = cljs.core.filterv.call(null,inst_12828,inst_12816);
var inst_12816__$1 = inst_12829;
var state_12844__$1 = (function (){var statearr_12859 = state_12844;
(statearr_12859[(10)] = inst_12816__$1);

return statearr_12859;
})();
var statearr_12860_12879 = state_12844__$1;
(statearr_12860_12879[(2)] = null);

(statearr_12860_12879[(1)] = (2));


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
});})(c__7634__auto___12869,out))
;
return ((function (switch__7572__auto__,c__7634__auto___12869,out){
return (function() {
var cljs$core$async$state_machine__7573__auto__ = null;
var cljs$core$async$state_machine__7573__auto____0 = (function (){
var statearr_12864 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12864[(0)] = cljs$core$async$state_machine__7573__auto__);

(statearr_12864[(1)] = (1));

return statearr_12864;
});
var cljs$core$async$state_machine__7573__auto____1 = (function (state_12844){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_12844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e12865){if((e12865 instanceof Object)){
var ex__7576__auto__ = e12865;
var statearr_12866_12880 = state_12844;
(statearr_12866_12880[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12881 = state_12844;
state_12844 = G__12881;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
cljs$core$async$state_machine__7573__auto__ = function(state_12844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7573__auto____1.call(this,state_12844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7573__auto____0;
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7573__auto____1;
return cljs$core$async$state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto___12869,out))
})();
var state__7636__auto__ = (function (){var statearr_12867 = f__7635__auto__.call(null);
(statearr_12867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto___12869);

return statearr_12867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto___12869,out))
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
var G__12883 = arguments.length;
switch (G__12883) {
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
var c__7634__auto___12931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto___12931,out){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto___12931,out){
return (function (state_12907){
var state_val_12908 = (state_12907[(1)]);
if((state_val_12908 === (7))){
var inst_12889 = (state_12907[(7)]);
var inst_12889__$1 = (state_12907[(2)]);
var inst_12890 = (inst_12889__$1 == null);
var inst_12891 = cljs.core.not.call(null,inst_12890);
var state_12907__$1 = (function (){var statearr_12909 = state_12907;
(statearr_12909[(7)] = inst_12889__$1);

return statearr_12909;
})();
if(inst_12891){
var statearr_12910_12932 = state_12907__$1;
(statearr_12910_12932[(1)] = (8));

} else {
var statearr_12911_12933 = state_12907__$1;
(statearr_12911_12933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12908 === (1))){
var inst_12884 = (0);
var state_12907__$1 = (function (){var statearr_12912 = state_12907;
(statearr_12912[(8)] = inst_12884);

return statearr_12912;
})();
var statearr_12913_12934 = state_12907__$1;
(statearr_12913_12934[(2)] = null);

(statearr_12913_12934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12908 === (4))){
var state_12907__$1 = state_12907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12907__$1,(7),ch);
} else {
if((state_val_12908 === (6))){
var inst_12902 = (state_12907[(2)]);
var state_12907__$1 = state_12907;
var statearr_12914_12935 = state_12907__$1;
(statearr_12914_12935[(2)] = inst_12902);

(statearr_12914_12935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12908 === (3))){
var inst_12904 = (state_12907[(2)]);
var inst_12905 = cljs.core.async.close_BANG_.call(null,out);
var state_12907__$1 = (function (){var statearr_12915 = state_12907;
(statearr_12915[(9)] = inst_12904);

return statearr_12915;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12907__$1,inst_12905);
} else {
if((state_val_12908 === (2))){
var inst_12884 = (state_12907[(8)]);
var inst_12886 = (inst_12884 < n);
var state_12907__$1 = state_12907;
if(cljs.core.truth_(inst_12886)){
var statearr_12916_12936 = state_12907__$1;
(statearr_12916_12936[(1)] = (4));

} else {
var statearr_12917_12937 = state_12907__$1;
(statearr_12917_12937[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12908 === (11))){
var inst_12884 = (state_12907[(8)]);
var inst_12894 = (state_12907[(2)]);
var inst_12895 = (inst_12884 + (1));
var inst_12884__$1 = inst_12895;
var state_12907__$1 = (function (){var statearr_12918 = state_12907;
(statearr_12918[(8)] = inst_12884__$1);

(statearr_12918[(10)] = inst_12894);

return statearr_12918;
})();
var statearr_12919_12938 = state_12907__$1;
(statearr_12919_12938[(2)] = null);

(statearr_12919_12938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12908 === (9))){
var state_12907__$1 = state_12907;
var statearr_12920_12939 = state_12907__$1;
(statearr_12920_12939[(2)] = null);

(statearr_12920_12939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12908 === (5))){
var state_12907__$1 = state_12907;
var statearr_12921_12940 = state_12907__$1;
(statearr_12921_12940[(2)] = null);

(statearr_12921_12940[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12908 === (10))){
var inst_12899 = (state_12907[(2)]);
var state_12907__$1 = state_12907;
var statearr_12922_12941 = state_12907__$1;
(statearr_12922_12941[(2)] = inst_12899);

(statearr_12922_12941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12908 === (8))){
var inst_12889 = (state_12907[(7)]);
var state_12907__$1 = state_12907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12907__$1,(11),out,inst_12889);
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
});})(c__7634__auto___12931,out))
;
return ((function (switch__7572__auto__,c__7634__auto___12931,out){
return (function() {
var cljs$core$async$state_machine__7573__auto__ = null;
var cljs$core$async$state_machine__7573__auto____0 = (function (){
var statearr_12926 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12926[(0)] = cljs$core$async$state_machine__7573__auto__);

(statearr_12926[(1)] = (1));

return statearr_12926;
});
var cljs$core$async$state_machine__7573__auto____1 = (function (state_12907){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_12907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e12927){if((e12927 instanceof Object)){
var ex__7576__auto__ = e12927;
var statearr_12928_12942 = state_12907;
(statearr_12928_12942[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12943 = state_12907;
state_12907 = G__12943;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
cljs$core$async$state_machine__7573__auto__ = function(state_12907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7573__auto____1.call(this,state_12907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7573__auto____0;
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7573__auto____1;
return cljs$core$async$state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto___12931,out))
})();
var state__7636__auto__ = (function (){var statearr_12929 = f__7635__auto__.call(null);
(statearr_12929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto___12931);

return statearr_12929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto___12931,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t12951 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12951 = (function (map_LT_,f,ch,meta12952){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12952 = meta12952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12953,meta12952__$1){
var self__ = this;
var _12953__$1 = this;
return (new cljs.core.async.t12951(self__.map_LT_,self__.f,self__.ch,meta12952__$1));
});

cljs.core.async.t12951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12953){
var self__ = this;
var _12953__$1 = this;
return self__.meta12952;
});

cljs.core.async.t12951.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t12951.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t12951.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t12951.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t12951.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t12954 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12954 = (function (map_LT_,f,ch,meta12952,_,fn1,meta12955){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12952 = meta12952;
this._ = _;
this.fn1 = fn1;
this.meta12955 = meta12955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12956,meta12955__$1){
var self__ = this;
var _12956__$1 = this;
return (new cljs.core.async.t12954(self__.map_LT_,self__.f,self__.ch,self__.meta12952,self__._,self__.fn1,meta12955__$1));
});})(___$1))
;

cljs.core.async.t12954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12956){
var self__ = this;
var _12956__$1 = this;
return self__.meta12955;
});})(___$1))
;

cljs.core.async.t12954.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12954.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t12954.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12944_SHARP_){
return f1.call(null,(((p1__12944_SHARP_ == null))?null:self__.f.call(null,p1__12944_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t12954.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12952","meta12952",-582009987,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12955","meta12955",-1463071323,null)], null);
});})(___$1))
;

cljs.core.async.t12954.cljs$lang$type = true;

cljs.core.async.t12954.cljs$lang$ctorStr = "cljs.core.async/t12954";

cljs.core.async.t12954.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t12954");
});})(___$1))
;

cljs.core.async.__GT_t12954 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t12954(map_LT___$1,f__$1,ch__$1,meta12952__$1,___$2,fn1__$1,meta12955){
return (new cljs.core.async.t12954(map_LT___$1,f__$1,ch__$1,meta12952__$1,___$2,fn1__$1,meta12955));
});})(___$1))
;

}

return (new cljs.core.async.t12954(self__.map_LT_,self__.f,self__.ch,self__.meta12952,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t12951.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t12951.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t12951.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12952","meta12952",-582009987,null)], null);
});

cljs.core.async.t12951.cljs$lang$type = true;

cljs.core.async.t12951.cljs$lang$ctorStr = "cljs.core.async/t12951";

cljs.core.async.t12951.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t12951");
});

cljs.core.async.__GT_t12951 = (function cljs$core$async$map_LT__$___GT_t12951(map_LT___$1,f__$1,ch__$1,meta12952){
return (new cljs.core.async.t12951(map_LT___$1,f__$1,ch__$1,meta12952));
});

}

return (new cljs.core.async.t12951(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t12960 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12960 = (function (map_GT_,f,ch,meta12961){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta12961 = meta12961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12962,meta12961__$1){
var self__ = this;
var _12962__$1 = this;
return (new cljs.core.async.t12960(self__.map_GT_,self__.f,self__.ch,meta12961__$1));
});

cljs.core.async.t12960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12962){
var self__ = this;
var _12962__$1 = this;
return self__.meta12961;
});

cljs.core.async.t12960.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t12960.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t12960.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t12960.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t12960.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t12960.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t12960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12961","meta12961",1977208995,null)], null);
});

cljs.core.async.t12960.cljs$lang$type = true;

cljs.core.async.t12960.cljs$lang$ctorStr = "cljs.core.async/t12960";

cljs.core.async.t12960.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t12960");
});

cljs.core.async.__GT_t12960 = (function cljs$core$async$map_GT__$___GT_t12960(map_GT___$1,f__$1,ch__$1,meta12961){
return (new cljs.core.async.t12960(map_GT___$1,f__$1,ch__$1,meta12961));
});

}

return (new cljs.core.async.t12960(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t12966 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12966 = (function (filter_GT_,p,ch,meta12967){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta12967 = meta12967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t12966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12968,meta12967__$1){
var self__ = this;
var _12968__$1 = this;
return (new cljs.core.async.t12966(self__.filter_GT_,self__.p,self__.ch,meta12967__$1));
});

cljs.core.async.t12966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12968){
var self__ = this;
var _12968__$1 = this;
return self__.meta12967;
});

cljs.core.async.t12966.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t12966.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t12966.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t12966.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t12966.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t12966.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t12966.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t12966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12967","meta12967",-1696972169,null)], null);
});

cljs.core.async.t12966.cljs$lang$type = true;

cljs.core.async.t12966.cljs$lang$ctorStr = "cljs.core.async/t12966";

cljs.core.async.t12966.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t12966");
});

cljs.core.async.__GT_t12966 = (function cljs$core$async$filter_GT__$___GT_t12966(filter_GT___$1,p__$1,ch__$1,meta12967){
return (new cljs.core.async.t12966(filter_GT___$1,p__$1,ch__$1,meta12967));
});

}

return (new cljs.core.async.t12966(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12970 = arguments.length;
switch (G__12970) {
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
var c__7634__auto___13013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto___13013,out){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto___13013,out){
return (function (state_12991){
var state_val_12992 = (state_12991[(1)]);
if((state_val_12992 === (7))){
var inst_12987 = (state_12991[(2)]);
var state_12991__$1 = state_12991;
var statearr_12993_13014 = state_12991__$1;
(statearr_12993_13014[(2)] = inst_12987);

(statearr_12993_13014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12992 === (1))){
var state_12991__$1 = state_12991;
var statearr_12994_13015 = state_12991__$1;
(statearr_12994_13015[(2)] = null);

(statearr_12994_13015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12992 === (4))){
var inst_12973 = (state_12991[(7)]);
var inst_12973__$1 = (state_12991[(2)]);
var inst_12974 = (inst_12973__$1 == null);
var state_12991__$1 = (function (){var statearr_12995 = state_12991;
(statearr_12995[(7)] = inst_12973__$1);

return statearr_12995;
})();
if(cljs.core.truth_(inst_12974)){
var statearr_12996_13016 = state_12991__$1;
(statearr_12996_13016[(1)] = (5));

} else {
var statearr_12997_13017 = state_12991__$1;
(statearr_12997_13017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12992 === (6))){
var inst_12973 = (state_12991[(7)]);
var inst_12978 = p.call(null,inst_12973);
var state_12991__$1 = state_12991;
if(cljs.core.truth_(inst_12978)){
var statearr_12998_13018 = state_12991__$1;
(statearr_12998_13018[(1)] = (8));

} else {
var statearr_12999_13019 = state_12991__$1;
(statearr_12999_13019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12992 === (3))){
var inst_12989 = (state_12991[(2)]);
var state_12991__$1 = state_12991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12991__$1,inst_12989);
} else {
if((state_val_12992 === (2))){
var state_12991__$1 = state_12991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12991__$1,(4),ch);
} else {
if((state_val_12992 === (11))){
var inst_12981 = (state_12991[(2)]);
var state_12991__$1 = state_12991;
var statearr_13000_13020 = state_12991__$1;
(statearr_13000_13020[(2)] = inst_12981);

(statearr_13000_13020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12992 === (9))){
var state_12991__$1 = state_12991;
var statearr_13001_13021 = state_12991__$1;
(statearr_13001_13021[(2)] = null);

(statearr_13001_13021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12992 === (5))){
var inst_12976 = cljs.core.async.close_BANG_.call(null,out);
var state_12991__$1 = state_12991;
var statearr_13002_13022 = state_12991__$1;
(statearr_13002_13022[(2)] = inst_12976);

(statearr_13002_13022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12992 === (10))){
var inst_12984 = (state_12991[(2)]);
var state_12991__$1 = (function (){var statearr_13003 = state_12991;
(statearr_13003[(8)] = inst_12984);

return statearr_13003;
})();
var statearr_13004_13023 = state_12991__$1;
(statearr_13004_13023[(2)] = null);

(statearr_13004_13023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12992 === (8))){
var inst_12973 = (state_12991[(7)]);
var state_12991__$1 = state_12991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12991__$1,(11),out,inst_12973);
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
});})(c__7634__auto___13013,out))
;
return ((function (switch__7572__auto__,c__7634__auto___13013,out){
return (function() {
var cljs$core$async$state_machine__7573__auto__ = null;
var cljs$core$async$state_machine__7573__auto____0 = (function (){
var statearr_13008 = [null,null,null,null,null,null,null,null,null];
(statearr_13008[(0)] = cljs$core$async$state_machine__7573__auto__);

(statearr_13008[(1)] = (1));

return statearr_13008;
});
var cljs$core$async$state_machine__7573__auto____1 = (function (state_12991){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_12991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e13009){if((e13009 instanceof Object)){
var ex__7576__auto__ = e13009;
var statearr_13010_13024 = state_12991;
(statearr_13010_13024[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13025 = state_12991;
state_12991 = G__13025;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
cljs$core$async$state_machine__7573__auto__ = function(state_12991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7573__auto____1.call(this,state_12991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7573__auto____0;
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7573__auto____1;
return cljs$core$async$state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto___13013,out))
})();
var state__7636__auto__ = (function (){var statearr_13011 = f__7635__auto__.call(null);
(statearr_13011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto___13013);

return statearr_13011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto___13013,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__13027 = arguments.length;
switch (G__13027) {
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
var c__7634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto__){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto__){
return (function (state_13194){
var state_val_13195 = (state_13194[(1)]);
if((state_val_13195 === (7))){
var inst_13190 = (state_13194[(2)]);
var state_13194__$1 = state_13194;
var statearr_13196_13237 = state_13194__$1;
(statearr_13196_13237[(2)] = inst_13190);

(statearr_13196_13237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (20))){
var inst_13160 = (state_13194[(7)]);
var inst_13171 = (state_13194[(2)]);
var inst_13172 = cljs.core.next.call(null,inst_13160);
var inst_13146 = inst_13172;
var inst_13147 = null;
var inst_13148 = (0);
var inst_13149 = (0);
var state_13194__$1 = (function (){var statearr_13197 = state_13194;
(statearr_13197[(8)] = inst_13146);

(statearr_13197[(9)] = inst_13148);

(statearr_13197[(10)] = inst_13149);

(statearr_13197[(11)] = inst_13147);

(statearr_13197[(12)] = inst_13171);

return statearr_13197;
})();
var statearr_13198_13238 = state_13194__$1;
(statearr_13198_13238[(2)] = null);

(statearr_13198_13238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (1))){
var state_13194__$1 = state_13194;
var statearr_13199_13239 = state_13194__$1;
(statearr_13199_13239[(2)] = null);

(statearr_13199_13239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (4))){
var inst_13135 = (state_13194[(13)]);
var inst_13135__$1 = (state_13194[(2)]);
var inst_13136 = (inst_13135__$1 == null);
var state_13194__$1 = (function (){var statearr_13200 = state_13194;
(statearr_13200[(13)] = inst_13135__$1);

return statearr_13200;
})();
if(cljs.core.truth_(inst_13136)){
var statearr_13201_13240 = state_13194__$1;
(statearr_13201_13240[(1)] = (5));

} else {
var statearr_13202_13241 = state_13194__$1;
(statearr_13202_13241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (15))){
var state_13194__$1 = state_13194;
var statearr_13206_13242 = state_13194__$1;
(statearr_13206_13242[(2)] = null);

(statearr_13206_13242[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (21))){
var state_13194__$1 = state_13194;
var statearr_13207_13243 = state_13194__$1;
(statearr_13207_13243[(2)] = null);

(statearr_13207_13243[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (13))){
var inst_13146 = (state_13194[(8)]);
var inst_13148 = (state_13194[(9)]);
var inst_13149 = (state_13194[(10)]);
var inst_13147 = (state_13194[(11)]);
var inst_13156 = (state_13194[(2)]);
var inst_13157 = (inst_13149 + (1));
var tmp13203 = inst_13146;
var tmp13204 = inst_13148;
var tmp13205 = inst_13147;
var inst_13146__$1 = tmp13203;
var inst_13147__$1 = tmp13205;
var inst_13148__$1 = tmp13204;
var inst_13149__$1 = inst_13157;
var state_13194__$1 = (function (){var statearr_13208 = state_13194;
(statearr_13208[(8)] = inst_13146__$1);

(statearr_13208[(14)] = inst_13156);

(statearr_13208[(9)] = inst_13148__$1);

(statearr_13208[(10)] = inst_13149__$1);

(statearr_13208[(11)] = inst_13147__$1);

return statearr_13208;
})();
var statearr_13209_13244 = state_13194__$1;
(statearr_13209_13244[(2)] = null);

(statearr_13209_13244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (22))){
var state_13194__$1 = state_13194;
var statearr_13210_13245 = state_13194__$1;
(statearr_13210_13245[(2)] = null);

(statearr_13210_13245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (6))){
var inst_13135 = (state_13194[(13)]);
var inst_13144 = f.call(null,inst_13135);
var inst_13145 = cljs.core.seq.call(null,inst_13144);
var inst_13146 = inst_13145;
var inst_13147 = null;
var inst_13148 = (0);
var inst_13149 = (0);
var state_13194__$1 = (function (){var statearr_13211 = state_13194;
(statearr_13211[(8)] = inst_13146);

(statearr_13211[(9)] = inst_13148);

(statearr_13211[(10)] = inst_13149);

(statearr_13211[(11)] = inst_13147);

return statearr_13211;
})();
var statearr_13212_13246 = state_13194__$1;
(statearr_13212_13246[(2)] = null);

(statearr_13212_13246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (17))){
var inst_13160 = (state_13194[(7)]);
var inst_13164 = cljs.core.chunk_first.call(null,inst_13160);
var inst_13165 = cljs.core.chunk_rest.call(null,inst_13160);
var inst_13166 = cljs.core.count.call(null,inst_13164);
var inst_13146 = inst_13165;
var inst_13147 = inst_13164;
var inst_13148 = inst_13166;
var inst_13149 = (0);
var state_13194__$1 = (function (){var statearr_13213 = state_13194;
(statearr_13213[(8)] = inst_13146);

(statearr_13213[(9)] = inst_13148);

(statearr_13213[(10)] = inst_13149);

(statearr_13213[(11)] = inst_13147);

return statearr_13213;
})();
var statearr_13214_13247 = state_13194__$1;
(statearr_13214_13247[(2)] = null);

(statearr_13214_13247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (3))){
var inst_13192 = (state_13194[(2)]);
var state_13194__$1 = state_13194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13194__$1,inst_13192);
} else {
if((state_val_13195 === (12))){
var inst_13180 = (state_13194[(2)]);
var state_13194__$1 = state_13194;
var statearr_13215_13248 = state_13194__$1;
(statearr_13215_13248[(2)] = inst_13180);

(statearr_13215_13248[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (2))){
var state_13194__$1 = state_13194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13194__$1,(4),in$);
} else {
if((state_val_13195 === (23))){
var inst_13188 = (state_13194[(2)]);
var state_13194__$1 = state_13194;
var statearr_13216_13249 = state_13194__$1;
(statearr_13216_13249[(2)] = inst_13188);

(statearr_13216_13249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (19))){
var inst_13175 = (state_13194[(2)]);
var state_13194__$1 = state_13194;
var statearr_13217_13250 = state_13194__$1;
(statearr_13217_13250[(2)] = inst_13175);

(statearr_13217_13250[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (11))){
var inst_13146 = (state_13194[(8)]);
var inst_13160 = (state_13194[(7)]);
var inst_13160__$1 = cljs.core.seq.call(null,inst_13146);
var state_13194__$1 = (function (){var statearr_13218 = state_13194;
(statearr_13218[(7)] = inst_13160__$1);

return statearr_13218;
})();
if(inst_13160__$1){
var statearr_13219_13251 = state_13194__$1;
(statearr_13219_13251[(1)] = (14));

} else {
var statearr_13220_13252 = state_13194__$1;
(statearr_13220_13252[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (9))){
var inst_13182 = (state_13194[(2)]);
var inst_13183 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13194__$1 = (function (){var statearr_13221 = state_13194;
(statearr_13221[(15)] = inst_13182);

return statearr_13221;
})();
if(cljs.core.truth_(inst_13183)){
var statearr_13222_13253 = state_13194__$1;
(statearr_13222_13253[(1)] = (21));

} else {
var statearr_13223_13254 = state_13194__$1;
(statearr_13223_13254[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (5))){
var inst_13138 = cljs.core.async.close_BANG_.call(null,out);
var state_13194__$1 = state_13194;
var statearr_13224_13255 = state_13194__$1;
(statearr_13224_13255[(2)] = inst_13138);

(statearr_13224_13255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (14))){
var inst_13160 = (state_13194[(7)]);
var inst_13162 = cljs.core.chunked_seq_QMARK_.call(null,inst_13160);
var state_13194__$1 = state_13194;
if(inst_13162){
var statearr_13225_13256 = state_13194__$1;
(statearr_13225_13256[(1)] = (17));

} else {
var statearr_13226_13257 = state_13194__$1;
(statearr_13226_13257[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (16))){
var inst_13178 = (state_13194[(2)]);
var state_13194__$1 = state_13194;
var statearr_13227_13258 = state_13194__$1;
(statearr_13227_13258[(2)] = inst_13178);

(statearr_13227_13258[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13195 === (10))){
var inst_13149 = (state_13194[(10)]);
var inst_13147 = (state_13194[(11)]);
var inst_13154 = cljs.core._nth.call(null,inst_13147,inst_13149);
var state_13194__$1 = state_13194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13194__$1,(13),out,inst_13154);
} else {
if((state_val_13195 === (18))){
var inst_13160 = (state_13194[(7)]);
var inst_13169 = cljs.core.first.call(null,inst_13160);
var state_13194__$1 = state_13194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13194__$1,(20),out,inst_13169);
} else {
if((state_val_13195 === (8))){
var inst_13148 = (state_13194[(9)]);
var inst_13149 = (state_13194[(10)]);
var inst_13151 = (inst_13149 < inst_13148);
var inst_13152 = inst_13151;
var state_13194__$1 = state_13194;
if(cljs.core.truth_(inst_13152)){
var statearr_13228_13259 = state_13194__$1;
(statearr_13228_13259[(1)] = (10));

} else {
var statearr_13229_13260 = state_13194__$1;
(statearr_13229_13260[(1)] = (11));

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
});})(c__7634__auto__))
;
return ((function (switch__7572__auto__,c__7634__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7573__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7573__auto____0 = (function (){
var statearr_13233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13233[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7573__auto__);

(statearr_13233[(1)] = (1));

return statearr_13233;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7573__auto____1 = (function (state_13194){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_13194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e13234){if((e13234 instanceof Object)){
var ex__7576__auto__ = e13234;
var statearr_13235_13261 = state_13194;
(statearr_13235_13261[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13262 = state_13194;
state_13194 = G__13262;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7573__auto__ = function(state_13194){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7573__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7573__auto____1.call(this,state_13194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7573__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7573__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto__))
})();
var state__7636__auto__ = (function (){var statearr_13236 = f__7635__auto__.call(null);
(statearr_13236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto__);

return statearr_13236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto__))
);

return c__7634__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__13264 = arguments.length;
switch (G__13264) {
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
var G__13267 = arguments.length;
switch (G__13267) {
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
var G__13270 = arguments.length;
switch (G__13270) {
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
var c__7634__auto___13320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto___13320,out){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto___13320,out){
return (function (state_13294){
var state_val_13295 = (state_13294[(1)]);
if((state_val_13295 === (7))){
var inst_13289 = (state_13294[(2)]);
var state_13294__$1 = state_13294;
var statearr_13296_13321 = state_13294__$1;
(statearr_13296_13321[(2)] = inst_13289);

(statearr_13296_13321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13295 === (1))){
var inst_13271 = null;
var state_13294__$1 = (function (){var statearr_13297 = state_13294;
(statearr_13297[(7)] = inst_13271);

return statearr_13297;
})();
var statearr_13298_13322 = state_13294__$1;
(statearr_13298_13322[(2)] = null);

(statearr_13298_13322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13295 === (4))){
var inst_13274 = (state_13294[(8)]);
var inst_13274__$1 = (state_13294[(2)]);
var inst_13275 = (inst_13274__$1 == null);
var inst_13276 = cljs.core.not.call(null,inst_13275);
var state_13294__$1 = (function (){var statearr_13299 = state_13294;
(statearr_13299[(8)] = inst_13274__$1);

return statearr_13299;
})();
if(inst_13276){
var statearr_13300_13323 = state_13294__$1;
(statearr_13300_13323[(1)] = (5));

} else {
var statearr_13301_13324 = state_13294__$1;
(statearr_13301_13324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13295 === (6))){
var state_13294__$1 = state_13294;
var statearr_13302_13325 = state_13294__$1;
(statearr_13302_13325[(2)] = null);

(statearr_13302_13325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13295 === (3))){
var inst_13291 = (state_13294[(2)]);
var inst_13292 = cljs.core.async.close_BANG_.call(null,out);
var state_13294__$1 = (function (){var statearr_13303 = state_13294;
(statearr_13303[(9)] = inst_13291);

return statearr_13303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13294__$1,inst_13292);
} else {
if((state_val_13295 === (2))){
var state_13294__$1 = state_13294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13294__$1,(4),ch);
} else {
if((state_val_13295 === (11))){
var inst_13274 = (state_13294[(8)]);
var inst_13283 = (state_13294[(2)]);
var inst_13271 = inst_13274;
var state_13294__$1 = (function (){var statearr_13304 = state_13294;
(statearr_13304[(7)] = inst_13271);

(statearr_13304[(10)] = inst_13283);

return statearr_13304;
})();
var statearr_13305_13326 = state_13294__$1;
(statearr_13305_13326[(2)] = null);

(statearr_13305_13326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13295 === (9))){
var inst_13274 = (state_13294[(8)]);
var state_13294__$1 = state_13294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13294__$1,(11),out,inst_13274);
} else {
if((state_val_13295 === (5))){
var inst_13274 = (state_13294[(8)]);
var inst_13271 = (state_13294[(7)]);
var inst_13278 = cljs.core._EQ_.call(null,inst_13274,inst_13271);
var state_13294__$1 = state_13294;
if(inst_13278){
var statearr_13307_13327 = state_13294__$1;
(statearr_13307_13327[(1)] = (8));

} else {
var statearr_13308_13328 = state_13294__$1;
(statearr_13308_13328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13295 === (10))){
var inst_13286 = (state_13294[(2)]);
var state_13294__$1 = state_13294;
var statearr_13309_13329 = state_13294__$1;
(statearr_13309_13329[(2)] = inst_13286);

(statearr_13309_13329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13295 === (8))){
var inst_13271 = (state_13294[(7)]);
var tmp13306 = inst_13271;
var inst_13271__$1 = tmp13306;
var state_13294__$1 = (function (){var statearr_13310 = state_13294;
(statearr_13310[(7)] = inst_13271__$1);

return statearr_13310;
})();
var statearr_13311_13330 = state_13294__$1;
(statearr_13311_13330[(2)] = null);

(statearr_13311_13330[(1)] = (2));


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
});})(c__7634__auto___13320,out))
;
return ((function (switch__7572__auto__,c__7634__auto___13320,out){
return (function() {
var cljs$core$async$state_machine__7573__auto__ = null;
var cljs$core$async$state_machine__7573__auto____0 = (function (){
var statearr_13315 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13315[(0)] = cljs$core$async$state_machine__7573__auto__);

(statearr_13315[(1)] = (1));

return statearr_13315;
});
var cljs$core$async$state_machine__7573__auto____1 = (function (state_13294){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_13294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e13316){if((e13316 instanceof Object)){
var ex__7576__auto__ = e13316;
var statearr_13317_13331 = state_13294;
(statearr_13317_13331[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13332 = state_13294;
state_13294 = G__13332;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
cljs$core$async$state_machine__7573__auto__ = function(state_13294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7573__auto____1.call(this,state_13294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7573__auto____0;
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7573__auto____1;
return cljs$core$async$state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto___13320,out))
})();
var state__7636__auto__ = (function (){var statearr_13318 = f__7635__auto__.call(null);
(statearr_13318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto___13320);

return statearr_13318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto___13320,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__13334 = arguments.length;
switch (G__13334) {
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
var c__7634__auto___13403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto___13403,out){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto___13403,out){
return (function (state_13372){
var state_val_13373 = (state_13372[(1)]);
if((state_val_13373 === (7))){
var inst_13368 = (state_13372[(2)]);
var state_13372__$1 = state_13372;
var statearr_13374_13404 = state_13372__$1;
(statearr_13374_13404[(2)] = inst_13368);

(statearr_13374_13404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (1))){
var inst_13335 = (new Array(n));
var inst_13336 = inst_13335;
var inst_13337 = (0);
var state_13372__$1 = (function (){var statearr_13375 = state_13372;
(statearr_13375[(7)] = inst_13337);

(statearr_13375[(8)] = inst_13336);

return statearr_13375;
})();
var statearr_13376_13405 = state_13372__$1;
(statearr_13376_13405[(2)] = null);

(statearr_13376_13405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (4))){
var inst_13340 = (state_13372[(9)]);
var inst_13340__$1 = (state_13372[(2)]);
var inst_13341 = (inst_13340__$1 == null);
var inst_13342 = cljs.core.not.call(null,inst_13341);
var state_13372__$1 = (function (){var statearr_13377 = state_13372;
(statearr_13377[(9)] = inst_13340__$1);

return statearr_13377;
})();
if(inst_13342){
var statearr_13378_13406 = state_13372__$1;
(statearr_13378_13406[(1)] = (5));

} else {
var statearr_13379_13407 = state_13372__$1;
(statearr_13379_13407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (15))){
var inst_13362 = (state_13372[(2)]);
var state_13372__$1 = state_13372;
var statearr_13380_13408 = state_13372__$1;
(statearr_13380_13408[(2)] = inst_13362);

(statearr_13380_13408[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (13))){
var state_13372__$1 = state_13372;
var statearr_13381_13409 = state_13372__$1;
(statearr_13381_13409[(2)] = null);

(statearr_13381_13409[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (6))){
var inst_13337 = (state_13372[(7)]);
var inst_13358 = (inst_13337 > (0));
var state_13372__$1 = state_13372;
if(cljs.core.truth_(inst_13358)){
var statearr_13382_13410 = state_13372__$1;
(statearr_13382_13410[(1)] = (12));

} else {
var statearr_13383_13411 = state_13372__$1;
(statearr_13383_13411[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (3))){
var inst_13370 = (state_13372[(2)]);
var state_13372__$1 = state_13372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13372__$1,inst_13370);
} else {
if((state_val_13373 === (12))){
var inst_13336 = (state_13372[(8)]);
var inst_13360 = cljs.core.vec.call(null,inst_13336);
var state_13372__$1 = state_13372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13372__$1,(15),out,inst_13360);
} else {
if((state_val_13373 === (2))){
var state_13372__$1 = state_13372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13372__$1,(4),ch);
} else {
if((state_val_13373 === (11))){
var inst_13352 = (state_13372[(2)]);
var inst_13353 = (new Array(n));
var inst_13336 = inst_13353;
var inst_13337 = (0);
var state_13372__$1 = (function (){var statearr_13384 = state_13372;
(statearr_13384[(7)] = inst_13337);

(statearr_13384[(8)] = inst_13336);

(statearr_13384[(10)] = inst_13352);

return statearr_13384;
})();
var statearr_13385_13412 = state_13372__$1;
(statearr_13385_13412[(2)] = null);

(statearr_13385_13412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (9))){
var inst_13336 = (state_13372[(8)]);
var inst_13350 = cljs.core.vec.call(null,inst_13336);
var state_13372__$1 = state_13372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13372__$1,(11),out,inst_13350);
} else {
if((state_val_13373 === (5))){
var inst_13340 = (state_13372[(9)]);
var inst_13337 = (state_13372[(7)]);
var inst_13336 = (state_13372[(8)]);
var inst_13345 = (state_13372[(11)]);
var inst_13344 = (inst_13336[inst_13337] = inst_13340);
var inst_13345__$1 = (inst_13337 + (1));
var inst_13346 = (inst_13345__$1 < n);
var state_13372__$1 = (function (){var statearr_13386 = state_13372;
(statearr_13386[(12)] = inst_13344);

(statearr_13386[(11)] = inst_13345__$1);

return statearr_13386;
})();
if(cljs.core.truth_(inst_13346)){
var statearr_13387_13413 = state_13372__$1;
(statearr_13387_13413[(1)] = (8));

} else {
var statearr_13388_13414 = state_13372__$1;
(statearr_13388_13414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (14))){
var inst_13365 = (state_13372[(2)]);
var inst_13366 = cljs.core.async.close_BANG_.call(null,out);
var state_13372__$1 = (function (){var statearr_13390 = state_13372;
(statearr_13390[(13)] = inst_13365);

return statearr_13390;
})();
var statearr_13391_13415 = state_13372__$1;
(statearr_13391_13415[(2)] = inst_13366);

(statearr_13391_13415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (10))){
var inst_13356 = (state_13372[(2)]);
var state_13372__$1 = state_13372;
var statearr_13392_13416 = state_13372__$1;
(statearr_13392_13416[(2)] = inst_13356);

(statearr_13392_13416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13373 === (8))){
var inst_13336 = (state_13372[(8)]);
var inst_13345 = (state_13372[(11)]);
var tmp13389 = inst_13336;
var inst_13336__$1 = tmp13389;
var inst_13337 = inst_13345;
var state_13372__$1 = (function (){var statearr_13393 = state_13372;
(statearr_13393[(7)] = inst_13337);

(statearr_13393[(8)] = inst_13336__$1);

return statearr_13393;
})();
var statearr_13394_13417 = state_13372__$1;
(statearr_13394_13417[(2)] = null);

(statearr_13394_13417[(1)] = (2));


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
});})(c__7634__auto___13403,out))
;
return ((function (switch__7572__auto__,c__7634__auto___13403,out){
return (function() {
var cljs$core$async$state_machine__7573__auto__ = null;
var cljs$core$async$state_machine__7573__auto____0 = (function (){
var statearr_13398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13398[(0)] = cljs$core$async$state_machine__7573__auto__);

(statearr_13398[(1)] = (1));

return statearr_13398;
});
var cljs$core$async$state_machine__7573__auto____1 = (function (state_13372){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_13372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e13399){if((e13399 instanceof Object)){
var ex__7576__auto__ = e13399;
var statearr_13400_13418 = state_13372;
(statearr_13400_13418[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13419 = state_13372;
state_13372 = G__13419;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
cljs$core$async$state_machine__7573__auto__ = function(state_13372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7573__auto____1.call(this,state_13372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7573__auto____0;
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7573__auto____1;
return cljs$core$async$state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto___13403,out))
})();
var state__7636__auto__ = (function (){var statearr_13401 = f__7635__auto__.call(null);
(statearr_13401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto___13403);

return statearr_13401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto___13403,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__13421 = arguments.length;
switch (G__13421) {
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
var c__7634__auto___13494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto___13494,out){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto___13494,out){
return (function (state_13463){
var state_val_13464 = (state_13463[(1)]);
if((state_val_13464 === (7))){
var inst_13459 = (state_13463[(2)]);
var state_13463__$1 = state_13463;
var statearr_13465_13495 = state_13463__$1;
(statearr_13465_13495[(2)] = inst_13459);

(statearr_13465_13495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13464 === (1))){
var inst_13422 = [];
var inst_13423 = inst_13422;
var inst_13424 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13463__$1 = (function (){var statearr_13466 = state_13463;
(statearr_13466[(7)] = inst_13423);

(statearr_13466[(8)] = inst_13424);

return statearr_13466;
})();
var statearr_13467_13496 = state_13463__$1;
(statearr_13467_13496[(2)] = null);

(statearr_13467_13496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13464 === (4))){
var inst_13427 = (state_13463[(9)]);
var inst_13427__$1 = (state_13463[(2)]);
var inst_13428 = (inst_13427__$1 == null);
var inst_13429 = cljs.core.not.call(null,inst_13428);
var state_13463__$1 = (function (){var statearr_13468 = state_13463;
(statearr_13468[(9)] = inst_13427__$1);

return statearr_13468;
})();
if(inst_13429){
var statearr_13469_13497 = state_13463__$1;
(statearr_13469_13497[(1)] = (5));

} else {
var statearr_13470_13498 = state_13463__$1;
(statearr_13470_13498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13464 === (15))){
var inst_13453 = (state_13463[(2)]);
var state_13463__$1 = state_13463;
var statearr_13471_13499 = state_13463__$1;
(statearr_13471_13499[(2)] = inst_13453);

(statearr_13471_13499[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13464 === (13))){
var state_13463__$1 = state_13463;
var statearr_13472_13500 = state_13463__$1;
(statearr_13472_13500[(2)] = null);

(statearr_13472_13500[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13464 === (6))){
var inst_13423 = (state_13463[(7)]);
var inst_13448 = inst_13423.length;
var inst_13449 = (inst_13448 > (0));
var state_13463__$1 = state_13463;
if(cljs.core.truth_(inst_13449)){
var statearr_13473_13501 = state_13463__$1;
(statearr_13473_13501[(1)] = (12));

} else {
var statearr_13474_13502 = state_13463__$1;
(statearr_13474_13502[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13464 === (3))){
var inst_13461 = (state_13463[(2)]);
var state_13463__$1 = state_13463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13463__$1,inst_13461);
} else {
if((state_val_13464 === (12))){
var inst_13423 = (state_13463[(7)]);
var inst_13451 = cljs.core.vec.call(null,inst_13423);
var state_13463__$1 = state_13463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13463__$1,(15),out,inst_13451);
} else {
if((state_val_13464 === (2))){
var state_13463__$1 = state_13463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13463__$1,(4),ch);
} else {
if((state_val_13464 === (11))){
var inst_13427 = (state_13463[(9)]);
var inst_13431 = (state_13463[(10)]);
var inst_13441 = (state_13463[(2)]);
var inst_13442 = [];
var inst_13443 = inst_13442.push(inst_13427);
var inst_13423 = inst_13442;
var inst_13424 = inst_13431;
var state_13463__$1 = (function (){var statearr_13475 = state_13463;
(statearr_13475[(7)] = inst_13423);

(statearr_13475[(11)] = inst_13441);

(statearr_13475[(8)] = inst_13424);

(statearr_13475[(12)] = inst_13443);

return statearr_13475;
})();
var statearr_13476_13503 = state_13463__$1;
(statearr_13476_13503[(2)] = null);

(statearr_13476_13503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13464 === (9))){
var inst_13423 = (state_13463[(7)]);
var inst_13439 = cljs.core.vec.call(null,inst_13423);
var state_13463__$1 = state_13463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13463__$1,(11),out,inst_13439);
} else {
if((state_val_13464 === (5))){
var inst_13424 = (state_13463[(8)]);
var inst_13427 = (state_13463[(9)]);
var inst_13431 = (state_13463[(10)]);
var inst_13431__$1 = f.call(null,inst_13427);
var inst_13432 = cljs.core._EQ_.call(null,inst_13431__$1,inst_13424);
var inst_13433 = cljs.core.keyword_identical_QMARK_.call(null,inst_13424,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13434 = (inst_13432) || (inst_13433);
var state_13463__$1 = (function (){var statearr_13477 = state_13463;
(statearr_13477[(10)] = inst_13431__$1);

return statearr_13477;
})();
if(cljs.core.truth_(inst_13434)){
var statearr_13478_13504 = state_13463__$1;
(statearr_13478_13504[(1)] = (8));

} else {
var statearr_13479_13505 = state_13463__$1;
(statearr_13479_13505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13464 === (14))){
var inst_13456 = (state_13463[(2)]);
var inst_13457 = cljs.core.async.close_BANG_.call(null,out);
var state_13463__$1 = (function (){var statearr_13481 = state_13463;
(statearr_13481[(13)] = inst_13456);

return statearr_13481;
})();
var statearr_13482_13506 = state_13463__$1;
(statearr_13482_13506[(2)] = inst_13457);

(statearr_13482_13506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13464 === (10))){
var inst_13446 = (state_13463[(2)]);
var state_13463__$1 = state_13463;
var statearr_13483_13507 = state_13463__$1;
(statearr_13483_13507[(2)] = inst_13446);

(statearr_13483_13507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13464 === (8))){
var inst_13423 = (state_13463[(7)]);
var inst_13427 = (state_13463[(9)]);
var inst_13431 = (state_13463[(10)]);
var inst_13436 = inst_13423.push(inst_13427);
var tmp13480 = inst_13423;
var inst_13423__$1 = tmp13480;
var inst_13424 = inst_13431;
var state_13463__$1 = (function (){var statearr_13484 = state_13463;
(statearr_13484[(7)] = inst_13423__$1);

(statearr_13484[(14)] = inst_13436);

(statearr_13484[(8)] = inst_13424);

return statearr_13484;
})();
var statearr_13485_13508 = state_13463__$1;
(statearr_13485_13508[(2)] = null);

(statearr_13485_13508[(1)] = (2));


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
});})(c__7634__auto___13494,out))
;
return ((function (switch__7572__auto__,c__7634__auto___13494,out){
return (function() {
var cljs$core$async$state_machine__7573__auto__ = null;
var cljs$core$async$state_machine__7573__auto____0 = (function (){
var statearr_13489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13489[(0)] = cljs$core$async$state_machine__7573__auto__);

(statearr_13489[(1)] = (1));

return statearr_13489;
});
var cljs$core$async$state_machine__7573__auto____1 = (function (state_13463){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_13463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e13490){if((e13490 instanceof Object)){
var ex__7576__auto__ = e13490;
var statearr_13491_13509 = state_13463;
(statearr_13491_13509[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13510 = state_13463;
state_13463 = G__13510;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
cljs$core$async$state_machine__7573__auto__ = function(state_13463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7573__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7573__auto____1.call(this,state_13463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7573__auto____0;
cljs$core$async$state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7573__auto____1;
return cljs$core$async$state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto___13494,out))
})();
var state__7636__auto__ = (function (){var statearr_13492 = f__7635__auto__.call(null);
(statearr_13492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto___13494);

return statearr_13492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto___13494,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
