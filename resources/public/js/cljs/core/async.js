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
if(typeof cljs.core.async.t15073 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15073 = (function (fn_handler,f,meta15074){
this.fn_handler = fn_handler;
this.f = f;
this.meta15074 = meta15074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15075,meta15074__$1){
var self__ = this;
var _15075__$1 = this;
return (new cljs.core.async.t15073(self__.fn_handler,self__.f,meta15074__$1));
});

cljs.core.async.t15073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15075){
var self__ = this;
var _15075__$1 = this;
return self__.meta15074;
});

cljs.core.async.t15073.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15073.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t15073.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t15073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta15074","meta15074",369506679,null)], null);
});

cljs.core.async.t15073.cljs$lang$type = true;

cljs.core.async.t15073.cljs$lang$ctorStr = "cljs.core.async/t15073";

cljs.core.async.t15073.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t15073");
});

cljs.core.async.__GT_t15073 = (function cljs$core$async$fn_handler_$___GT_t15073(fn_handler__$1,f__$1,meta15074){
return (new cljs.core.async.t15073(fn_handler__$1,f__$1,meta15074));
});

}

return (new cljs.core.async.t15073(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15077 = buff;
if(G__15077){
var bit__4983__auto__ = null;
if(cljs.core.truth_((function (){var or__4309__auto__ = bit__4983__auto__;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return G__15077.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__15077.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15077);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15077);
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
var G__15079 = arguments.length;
switch (G__15079) {
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
var G__15082 = arguments.length;
switch (G__15082) {
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
var val_15084 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15084);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15084,ret){
return (function (){
return fn1.call(null,val_15084);
});})(val_15084,ret))
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
var G__15086 = arguments.length;
switch (G__15086) {
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
var n__5194__auto___15088 = n;
var x_15089 = (0);
while(true){
if((x_15089 < n__5194__auto___15088)){
(a[x_15089] = (0));

var G__15090 = (x_15089 + (1));
x_15089 = G__15090;
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

var G__15091 = (i + (1));
i = G__15091;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t15095 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15095 = (function (alt_flag,flag,meta15096){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta15096 = meta15096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15097,meta15096__$1){
var self__ = this;
var _15097__$1 = this;
return (new cljs.core.async.t15095(self__.alt_flag,self__.flag,meta15096__$1));
});})(flag))
;

cljs.core.async.t15095.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15097){
var self__ = this;
var _15097__$1 = this;
return self__.meta15096;
});})(flag))
;

cljs.core.async.t15095.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15095.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t15095.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t15095.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15096","meta15096",748223803,null)], null);
});})(flag))
;

cljs.core.async.t15095.cljs$lang$type = true;

cljs.core.async.t15095.cljs$lang$ctorStr = "cljs.core.async/t15095";

cljs.core.async.t15095.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t15095");
});})(flag))
;

cljs.core.async.__GT_t15095 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t15095(alt_flag__$1,flag__$1,meta15096){
return (new cljs.core.async.t15095(alt_flag__$1,flag__$1,meta15096));
});})(flag))
;

}

return (new cljs.core.async.t15095(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t15101 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15101 = (function (alt_handler,flag,cb,meta15102){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta15102 = meta15102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t15101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15103,meta15102__$1){
var self__ = this;
var _15103__$1 = this;
return (new cljs.core.async.t15101(self__.alt_handler,self__.flag,self__.cb,meta15102__$1));
});

cljs.core.async.t15101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15103){
var self__ = this;
var _15103__$1 = this;
return self__.meta15102;
});

cljs.core.async.t15101.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15101.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t15101.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t15101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15102","meta15102",-451582793,null)], null);
});

cljs.core.async.t15101.cljs$lang$type = true;

cljs.core.async.t15101.cljs$lang$ctorStr = "cljs.core.async/t15101";

cljs.core.async.t15101.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t15101");
});

cljs.core.async.__GT_t15101 = (function cljs$core$async$alt_handler_$___GT_t15101(alt_handler__$1,flag__$1,cb__$1,meta15102){
return (new cljs.core.async.t15101(alt_handler__$1,flag__$1,cb__$1,meta15102));
});

}

return (new cljs.core.async.t15101(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15104_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15104_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15105_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15105_SHARP_,port], null));
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
var G__15106 = (i + (1));
i = G__15106;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15109){
var map__15110 = p__15109;
var map__15110__$1 = ((cljs.core.seq_QMARK_.call(null,map__15110))?cljs.core.apply.call(null,cljs.core.hash_map,map__15110):map__15110);
var opts = map__15110__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15107){
var G__15108 = cljs.core.first.call(null,seq15107);
var seq15107__$1 = cljs.core.next.call(null,seq15107);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15108,seq15107__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__15112 = arguments.length;
switch (G__15112) {
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
var c__12926__auto___15161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto___15161){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto___15161){
return (function (state_15136){
var state_val_15137 = (state_15136[(1)]);
if((state_val_15137 === (7))){
var inst_15132 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
var statearr_15138_15162 = state_15136__$1;
(statearr_15138_15162[(2)] = inst_15132);

(statearr_15138_15162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (1))){
var state_15136__$1 = state_15136;
var statearr_15139_15163 = state_15136__$1;
(statearr_15139_15163[(2)] = null);

(statearr_15139_15163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (4))){
var inst_15115 = (state_15136[(7)]);
var inst_15115__$1 = (state_15136[(2)]);
var inst_15116 = (inst_15115__$1 == null);
var state_15136__$1 = (function (){var statearr_15140 = state_15136;
(statearr_15140[(7)] = inst_15115__$1);

return statearr_15140;
})();
if(cljs.core.truth_(inst_15116)){
var statearr_15141_15164 = state_15136__$1;
(statearr_15141_15164[(1)] = (5));

} else {
var statearr_15142_15165 = state_15136__$1;
(statearr_15142_15165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (13))){
var state_15136__$1 = state_15136;
var statearr_15143_15166 = state_15136__$1;
(statearr_15143_15166[(2)] = null);

(statearr_15143_15166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (6))){
var inst_15115 = (state_15136[(7)]);
var state_15136__$1 = state_15136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15136__$1,(11),to,inst_15115);
} else {
if((state_val_15137 === (3))){
var inst_15134 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15136__$1,inst_15134);
} else {
if((state_val_15137 === (12))){
var state_15136__$1 = state_15136;
var statearr_15144_15167 = state_15136__$1;
(statearr_15144_15167[(2)] = null);

(statearr_15144_15167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (2))){
var state_15136__$1 = state_15136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15136__$1,(4),from);
} else {
if((state_val_15137 === (11))){
var inst_15125 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
if(cljs.core.truth_(inst_15125)){
var statearr_15145_15168 = state_15136__$1;
(statearr_15145_15168[(1)] = (12));

} else {
var statearr_15146_15169 = state_15136__$1;
(statearr_15146_15169[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (9))){
var state_15136__$1 = state_15136;
var statearr_15147_15170 = state_15136__$1;
(statearr_15147_15170[(2)] = null);

(statearr_15147_15170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (5))){
var state_15136__$1 = state_15136;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15148_15171 = state_15136__$1;
(statearr_15148_15171[(1)] = (8));

} else {
var statearr_15149_15172 = state_15136__$1;
(statearr_15149_15172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (14))){
var inst_15130 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
var statearr_15150_15173 = state_15136__$1;
(statearr_15150_15173[(2)] = inst_15130);

(statearr_15150_15173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (10))){
var inst_15122 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
var statearr_15151_15174 = state_15136__$1;
(statearr_15151_15174[(2)] = inst_15122);

(statearr_15151_15174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (8))){
var inst_15119 = cljs.core.async.close_BANG_.call(null,to);
var state_15136__$1 = state_15136;
var statearr_15152_15175 = state_15136__$1;
(statearr_15152_15175[(2)] = inst_15119);

(statearr_15152_15175[(1)] = (10));


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
});})(c__12926__auto___15161))
;
return ((function (switch__12864__auto__,c__12926__auto___15161){
return (function() {
var cljs$core$async$state_machine__12865__auto__ = null;
var cljs$core$async$state_machine__12865__auto____0 = (function (){
var statearr_15156 = [null,null,null,null,null,null,null,null];
(statearr_15156[(0)] = cljs$core$async$state_machine__12865__auto__);

(statearr_15156[(1)] = (1));

return statearr_15156;
});
var cljs$core$async$state_machine__12865__auto____1 = (function (state_15136){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_15136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e15157){if((e15157 instanceof Object)){
var ex__12868__auto__ = e15157;
var statearr_15158_15176 = state_15136;
(statearr_15158_15176[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15177 = state_15136;
state_15136 = G__15177;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
cljs$core$async$state_machine__12865__auto__ = function(state_15136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12865__auto____1.call(this,state_15136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12865__auto____0;
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12865__auto____1;
return cljs$core$async$state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto___15161))
})();
var state__12928__auto__ = (function (){var statearr_15159 = f__12927__auto__.call(null);
(statearr_15159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto___15161);

return statearr_15159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto___15161))
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
return (function (p__15361){
var vec__15362 = p__15361;
var v = cljs.core.nth.call(null,vec__15362,(0),null);
var p = cljs.core.nth.call(null,vec__15362,(1),null);
var job = vec__15362;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12926__auto___15544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto___15544,res,vec__15362,v,p,job,jobs,results){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto___15544,res,vec__15362,v,p,job,jobs,results){
return (function (state_15367){
var state_val_15368 = (state_15367[(1)]);
if((state_val_15368 === (1))){
var state_15367__$1 = state_15367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15367__$1,(2),res,v);
} else {
if((state_val_15368 === (2))){
var inst_15364 = (state_15367[(2)]);
var inst_15365 = cljs.core.async.close_BANG_.call(null,res);
var state_15367__$1 = (function (){var statearr_15369 = state_15367;
(statearr_15369[(7)] = inst_15364);

return statearr_15369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15367__$1,inst_15365);
} else {
return null;
}
}
});})(c__12926__auto___15544,res,vec__15362,v,p,job,jobs,results))
;
return ((function (switch__12864__auto__,c__12926__auto___15544,res,vec__15362,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____0 = (function (){
var statearr_15373 = [null,null,null,null,null,null,null,null];
(statearr_15373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__);

(statearr_15373[(1)] = (1));

return statearr_15373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____1 = (function (state_15367){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_15367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e15374){if((e15374 instanceof Object)){
var ex__12868__auto__ = e15374;
var statearr_15375_15545 = state_15367;
(statearr_15375_15545[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15546 = state_15367;
state_15367 = G__15546;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__ = function(state_15367){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____1.call(this,state_15367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto___15544,res,vec__15362,v,p,job,jobs,results))
})();
var state__12928__auto__ = (function (){var statearr_15376 = f__12927__auto__.call(null);
(statearr_15376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto___15544);

return statearr_15376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto___15544,res,vec__15362,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15377){
var vec__15378 = p__15377;
var v = cljs.core.nth.call(null,vec__15378,(0),null);
var p = cljs.core.nth.call(null,vec__15378,(1),null);
var job = vec__15378;
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
var n__5194__auto___15547 = n;
var __15548 = (0);
while(true){
if((__15548 < n__5194__auto___15547)){
var G__15379_15549 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15379_15549) {
case "compute":
var c__12926__auto___15551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15548,c__12926__auto___15551,G__15379_15549,n__5194__auto___15547,jobs,results,process,async){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (__15548,c__12926__auto___15551,G__15379_15549,n__5194__auto___15547,jobs,results,process,async){
return (function (state_15392){
var state_val_15393 = (state_15392[(1)]);
if((state_val_15393 === (1))){
var state_15392__$1 = state_15392;
var statearr_15394_15552 = state_15392__$1;
(statearr_15394_15552[(2)] = null);

(statearr_15394_15552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15393 === (2))){
var state_15392__$1 = state_15392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15392__$1,(4),jobs);
} else {
if((state_val_15393 === (3))){
var inst_15390 = (state_15392[(2)]);
var state_15392__$1 = state_15392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15392__$1,inst_15390);
} else {
if((state_val_15393 === (4))){
var inst_15382 = (state_15392[(2)]);
var inst_15383 = process.call(null,inst_15382);
var state_15392__$1 = state_15392;
if(cljs.core.truth_(inst_15383)){
var statearr_15395_15553 = state_15392__$1;
(statearr_15395_15553[(1)] = (5));

} else {
var statearr_15396_15554 = state_15392__$1;
(statearr_15396_15554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15393 === (5))){
var state_15392__$1 = state_15392;
var statearr_15397_15555 = state_15392__$1;
(statearr_15397_15555[(2)] = null);

(statearr_15397_15555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15393 === (6))){
var state_15392__$1 = state_15392;
var statearr_15398_15556 = state_15392__$1;
(statearr_15398_15556[(2)] = null);

(statearr_15398_15556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15393 === (7))){
var inst_15388 = (state_15392[(2)]);
var state_15392__$1 = state_15392;
var statearr_15399_15557 = state_15392__$1;
(statearr_15399_15557[(2)] = inst_15388);

(statearr_15399_15557[(1)] = (3));


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
});})(__15548,c__12926__auto___15551,G__15379_15549,n__5194__auto___15547,jobs,results,process,async))
;
return ((function (__15548,switch__12864__auto__,c__12926__auto___15551,G__15379_15549,n__5194__auto___15547,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____0 = (function (){
var statearr_15403 = [null,null,null,null,null,null,null];
(statearr_15403[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__);

(statearr_15403[(1)] = (1));

return statearr_15403;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____1 = (function (state_15392){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_15392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e15404){if((e15404 instanceof Object)){
var ex__12868__auto__ = e15404;
var statearr_15405_15558 = state_15392;
(statearr_15405_15558[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15559 = state_15392;
state_15392 = G__15559;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__ = function(state_15392){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____1.call(this,state_15392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__;
})()
;})(__15548,switch__12864__auto__,c__12926__auto___15551,G__15379_15549,n__5194__auto___15547,jobs,results,process,async))
})();
var state__12928__auto__ = (function (){var statearr_15406 = f__12927__auto__.call(null);
(statearr_15406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto___15551);

return statearr_15406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(__15548,c__12926__auto___15551,G__15379_15549,n__5194__auto___15547,jobs,results,process,async))
);


break;
case "async":
var c__12926__auto___15560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15548,c__12926__auto___15560,G__15379_15549,n__5194__auto___15547,jobs,results,process,async){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (__15548,c__12926__auto___15560,G__15379_15549,n__5194__auto___15547,jobs,results,process,async){
return (function (state_15419){
var state_val_15420 = (state_15419[(1)]);
if((state_val_15420 === (1))){
var state_15419__$1 = state_15419;
var statearr_15421_15561 = state_15419__$1;
(statearr_15421_15561[(2)] = null);

(statearr_15421_15561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15420 === (2))){
var state_15419__$1 = state_15419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15419__$1,(4),jobs);
} else {
if((state_val_15420 === (3))){
var inst_15417 = (state_15419[(2)]);
var state_15419__$1 = state_15419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15419__$1,inst_15417);
} else {
if((state_val_15420 === (4))){
var inst_15409 = (state_15419[(2)]);
var inst_15410 = async.call(null,inst_15409);
var state_15419__$1 = state_15419;
if(cljs.core.truth_(inst_15410)){
var statearr_15422_15562 = state_15419__$1;
(statearr_15422_15562[(1)] = (5));

} else {
var statearr_15423_15563 = state_15419__$1;
(statearr_15423_15563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15420 === (5))){
var state_15419__$1 = state_15419;
var statearr_15424_15564 = state_15419__$1;
(statearr_15424_15564[(2)] = null);

(statearr_15424_15564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15420 === (6))){
var state_15419__$1 = state_15419;
var statearr_15425_15565 = state_15419__$1;
(statearr_15425_15565[(2)] = null);

(statearr_15425_15565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15420 === (7))){
var inst_15415 = (state_15419[(2)]);
var state_15419__$1 = state_15419;
var statearr_15426_15566 = state_15419__$1;
(statearr_15426_15566[(2)] = inst_15415);

(statearr_15426_15566[(1)] = (3));


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
});})(__15548,c__12926__auto___15560,G__15379_15549,n__5194__auto___15547,jobs,results,process,async))
;
return ((function (__15548,switch__12864__auto__,c__12926__auto___15560,G__15379_15549,n__5194__auto___15547,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____0 = (function (){
var statearr_15430 = [null,null,null,null,null,null,null];
(statearr_15430[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__);

(statearr_15430[(1)] = (1));

return statearr_15430;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____1 = (function (state_15419){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_15419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e15431){if((e15431 instanceof Object)){
var ex__12868__auto__ = e15431;
var statearr_15432_15567 = state_15419;
(statearr_15432_15567[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15568 = state_15419;
state_15419 = G__15568;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__ = function(state_15419){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____1.call(this,state_15419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__;
})()
;})(__15548,switch__12864__auto__,c__12926__auto___15560,G__15379_15549,n__5194__auto___15547,jobs,results,process,async))
})();
var state__12928__auto__ = (function (){var statearr_15433 = f__12927__auto__.call(null);
(statearr_15433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto___15560);

return statearr_15433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(__15548,c__12926__auto___15560,G__15379_15549,n__5194__auto___15547,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15569 = (__15548 + (1));
__15548 = G__15569;
continue;
} else {
}
break;
}

var c__12926__auto___15570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto___15570,jobs,results,process,async){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto___15570,jobs,results,process,async){
return (function (state_15455){
var state_val_15456 = (state_15455[(1)]);
if((state_val_15456 === (1))){
var state_15455__$1 = state_15455;
var statearr_15457_15571 = state_15455__$1;
(statearr_15457_15571[(2)] = null);

(statearr_15457_15571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (2))){
var state_15455__$1 = state_15455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15455__$1,(4),from);
} else {
if((state_val_15456 === (3))){
var inst_15453 = (state_15455[(2)]);
var state_15455__$1 = state_15455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15455__$1,inst_15453);
} else {
if((state_val_15456 === (4))){
var inst_15436 = (state_15455[(7)]);
var inst_15436__$1 = (state_15455[(2)]);
var inst_15437 = (inst_15436__$1 == null);
var state_15455__$1 = (function (){var statearr_15458 = state_15455;
(statearr_15458[(7)] = inst_15436__$1);

return statearr_15458;
})();
if(cljs.core.truth_(inst_15437)){
var statearr_15459_15572 = state_15455__$1;
(statearr_15459_15572[(1)] = (5));

} else {
var statearr_15460_15573 = state_15455__$1;
(statearr_15460_15573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (5))){
var inst_15439 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15455__$1 = state_15455;
var statearr_15461_15574 = state_15455__$1;
(statearr_15461_15574[(2)] = inst_15439);

(statearr_15461_15574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (6))){
var inst_15436 = (state_15455[(7)]);
var inst_15441 = (state_15455[(8)]);
var inst_15441__$1 = cljs.core.async.chan.call(null,(1));
var inst_15442 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15443 = [inst_15436,inst_15441__$1];
var inst_15444 = (new cljs.core.PersistentVector(null,2,(5),inst_15442,inst_15443,null));
var state_15455__$1 = (function (){var statearr_15462 = state_15455;
(statearr_15462[(8)] = inst_15441__$1);

return statearr_15462;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15455__$1,(8),jobs,inst_15444);
} else {
if((state_val_15456 === (7))){
var inst_15451 = (state_15455[(2)]);
var state_15455__$1 = state_15455;
var statearr_15463_15575 = state_15455__$1;
(statearr_15463_15575[(2)] = inst_15451);

(statearr_15463_15575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (8))){
var inst_15441 = (state_15455[(8)]);
var inst_15446 = (state_15455[(2)]);
var state_15455__$1 = (function (){var statearr_15464 = state_15455;
(statearr_15464[(9)] = inst_15446);

return statearr_15464;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15455__$1,(9),results,inst_15441);
} else {
if((state_val_15456 === (9))){
var inst_15448 = (state_15455[(2)]);
var state_15455__$1 = (function (){var statearr_15465 = state_15455;
(statearr_15465[(10)] = inst_15448);

return statearr_15465;
})();
var statearr_15466_15576 = state_15455__$1;
(statearr_15466_15576[(2)] = null);

(statearr_15466_15576[(1)] = (2));


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
});})(c__12926__auto___15570,jobs,results,process,async))
;
return ((function (switch__12864__auto__,c__12926__auto___15570,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____0 = (function (){
var statearr_15470 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15470[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__);

(statearr_15470[(1)] = (1));

return statearr_15470;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____1 = (function (state_15455){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_15455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e15471){if((e15471 instanceof Object)){
var ex__12868__auto__ = e15471;
var statearr_15472_15577 = state_15455;
(statearr_15472_15577[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15578 = state_15455;
state_15455 = G__15578;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__ = function(state_15455){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____1.call(this,state_15455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto___15570,jobs,results,process,async))
})();
var state__12928__auto__ = (function (){var statearr_15473 = f__12927__auto__.call(null);
(statearr_15473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto___15570);

return statearr_15473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto___15570,jobs,results,process,async))
);


var c__12926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto__,jobs,results,process,async){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto__,jobs,results,process,async){
return (function (state_15511){
var state_val_15512 = (state_15511[(1)]);
if((state_val_15512 === (7))){
var inst_15507 = (state_15511[(2)]);
var state_15511__$1 = state_15511;
var statearr_15513_15579 = state_15511__$1;
(statearr_15513_15579[(2)] = inst_15507);

(statearr_15513_15579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (20))){
var state_15511__$1 = state_15511;
var statearr_15514_15580 = state_15511__$1;
(statearr_15514_15580[(2)] = null);

(statearr_15514_15580[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (1))){
var state_15511__$1 = state_15511;
var statearr_15515_15581 = state_15511__$1;
(statearr_15515_15581[(2)] = null);

(statearr_15515_15581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (4))){
var inst_15476 = (state_15511[(7)]);
var inst_15476__$1 = (state_15511[(2)]);
var inst_15477 = (inst_15476__$1 == null);
var state_15511__$1 = (function (){var statearr_15516 = state_15511;
(statearr_15516[(7)] = inst_15476__$1);

return statearr_15516;
})();
if(cljs.core.truth_(inst_15477)){
var statearr_15517_15582 = state_15511__$1;
(statearr_15517_15582[(1)] = (5));

} else {
var statearr_15518_15583 = state_15511__$1;
(statearr_15518_15583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (15))){
var inst_15489 = (state_15511[(8)]);
var state_15511__$1 = state_15511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15511__$1,(18),to,inst_15489);
} else {
if((state_val_15512 === (21))){
var inst_15502 = (state_15511[(2)]);
var state_15511__$1 = state_15511;
var statearr_15519_15584 = state_15511__$1;
(statearr_15519_15584[(2)] = inst_15502);

(statearr_15519_15584[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (13))){
var inst_15504 = (state_15511[(2)]);
var state_15511__$1 = (function (){var statearr_15520 = state_15511;
(statearr_15520[(9)] = inst_15504);

return statearr_15520;
})();
var statearr_15521_15585 = state_15511__$1;
(statearr_15521_15585[(2)] = null);

(statearr_15521_15585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (6))){
var inst_15476 = (state_15511[(7)]);
var state_15511__$1 = state_15511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15511__$1,(11),inst_15476);
} else {
if((state_val_15512 === (17))){
var inst_15497 = (state_15511[(2)]);
var state_15511__$1 = state_15511;
if(cljs.core.truth_(inst_15497)){
var statearr_15522_15586 = state_15511__$1;
(statearr_15522_15586[(1)] = (19));

} else {
var statearr_15523_15587 = state_15511__$1;
(statearr_15523_15587[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (3))){
var inst_15509 = (state_15511[(2)]);
var state_15511__$1 = state_15511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15511__$1,inst_15509);
} else {
if((state_val_15512 === (12))){
var inst_15486 = (state_15511[(10)]);
var state_15511__$1 = state_15511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15511__$1,(14),inst_15486);
} else {
if((state_val_15512 === (2))){
var state_15511__$1 = state_15511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15511__$1,(4),results);
} else {
if((state_val_15512 === (19))){
var state_15511__$1 = state_15511;
var statearr_15524_15588 = state_15511__$1;
(statearr_15524_15588[(2)] = null);

(statearr_15524_15588[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (11))){
var inst_15486 = (state_15511[(2)]);
var state_15511__$1 = (function (){var statearr_15525 = state_15511;
(statearr_15525[(10)] = inst_15486);

return statearr_15525;
})();
var statearr_15526_15589 = state_15511__$1;
(statearr_15526_15589[(2)] = null);

(statearr_15526_15589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (9))){
var state_15511__$1 = state_15511;
var statearr_15527_15590 = state_15511__$1;
(statearr_15527_15590[(2)] = null);

(statearr_15527_15590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (5))){
var state_15511__$1 = state_15511;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15528_15591 = state_15511__$1;
(statearr_15528_15591[(1)] = (8));

} else {
var statearr_15529_15592 = state_15511__$1;
(statearr_15529_15592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (14))){
var inst_15491 = (state_15511[(11)]);
var inst_15489 = (state_15511[(8)]);
var inst_15489__$1 = (state_15511[(2)]);
var inst_15490 = (inst_15489__$1 == null);
var inst_15491__$1 = cljs.core.not.call(null,inst_15490);
var state_15511__$1 = (function (){var statearr_15530 = state_15511;
(statearr_15530[(11)] = inst_15491__$1);

(statearr_15530[(8)] = inst_15489__$1);

return statearr_15530;
})();
if(inst_15491__$1){
var statearr_15531_15593 = state_15511__$1;
(statearr_15531_15593[(1)] = (15));

} else {
var statearr_15532_15594 = state_15511__$1;
(statearr_15532_15594[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (16))){
var inst_15491 = (state_15511[(11)]);
var state_15511__$1 = state_15511;
var statearr_15533_15595 = state_15511__$1;
(statearr_15533_15595[(2)] = inst_15491);

(statearr_15533_15595[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (10))){
var inst_15483 = (state_15511[(2)]);
var state_15511__$1 = state_15511;
var statearr_15534_15596 = state_15511__$1;
(statearr_15534_15596[(2)] = inst_15483);

(statearr_15534_15596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (18))){
var inst_15494 = (state_15511[(2)]);
var state_15511__$1 = state_15511;
var statearr_15535_15597 = state_15511__$1;
(statearr_15535_15597[(2)] = inst_15494);

(statearr_15535_15597[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15512 === (8))){
var inst_15480 = cljs.core.async.close_BANG_.call(null,to);
var state_15511__$1 = state_15511;
var statearr_15536_15598 = state_15511__$1;
(statearr_15536_15598[(2)] = inst_15480);

(statearr_15536_15598[(1)] = (10));


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
});})(c__12926__auto__,jobs,results,process,async))
;
return ((function (switch__12864__auto__,c__12926__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____0 = (function (){
var statearr_15540 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15540[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__);

(statearr_15540[(1)] = (1));

return statearr_15540;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____1 = (function (state_15511){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_15511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e15541){if((e15541 instanceof Object)){
var ex__12868__auto__ = e15541;
var statearr_15542_15599 = state_15511;
(statearr_15542_15599[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15600 = state_15511;
state_15511 = G__15600;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__ = function(state_15511){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____1.call(this,state_15511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12865__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto__,jobs,results,process,async))
})();
var state__12928__auto__ = (function (){var statearr_15543 = f__12927__auto__.call(null);
(statearr_15543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto__);

return statearr_15543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto__,jobs,results,process,async))
);

return c__12926__auto__;
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
var G__15602 = arguments.length;
switch (G__15602) {
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
var G__15605 = arguments.length;
switch (G__15605) {
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
var G__15608 = arguments.length;
switch (G__15608) {
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
var c__12926__auto___15660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto___15660,tc,fc){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto___15660,tc,fc){
return (function (state_15634){
var state_val_15635 = (state_15634[(1)]);
if((state_val_15635 === (7))){
var inst_15630 = (state_15634[(2)]);
var state_15634__$1 = state_15634;
var statearr_15636_15661 = state_15634__$1;
(statearr_15636_15661[(2)] = inst_15630);

(statearr_15636_15661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15635 === (1))){
var state_15634__$1 = state_15634;
var statearr_15637_15662 = state_15634__$1;
(statearr_15637_15662[(2)] = null);

(statearr_15637_15662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15635 === (4))){
var inst_15611 = (state_15634[(7)]);
var inst_15611__$1 = (state_15634[(2)]);
var inst_15612 = (inst_15611__$1 == null);
var state_15634__$1 = (function (){var statearr_15638 = state_15634;
(statearr_15638[(7)] = inst_15611__$1);

return statearr_15638;
})();
if(cljs.core.truth_(inst_15612)){
var statearr_15639_15663 = state_15634__$1;
(statearr_15639_15663[(1)] = (5));

} else {
var statearr_15640_15664 = state_15634__$1;
(statearr_15640_15664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15635 === (13))){
var state_15634__$1 = state_15634;
var statearr_15641_15665 = state_15634__$1;
(statearr_15641_15665[(2)] = null);

(statearr_15641_15665[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15635 === (6))){
var inst_15611 = (state_15634[(7)]);
var inst_15617 = p.call(null,inst_15611);
var state_15634__$1 = state_15634;
if(cljs.core.truth_(inst_15617)){
var statearr_15642_15666 = state_15634__$1;
(statearr_15642_15666[(1)] = (9));

} else {
var statearr_15643_15667 = state_15634__$1;
(statearr_15643_15667[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15635 === (3))){
var inst_15632 = (state_15634[(2)]);
var state_15634__$1 = state_15634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15634__$1,inst_15632);
} else {
if((state_val_15635 === (12))){
var state_15634__$1 = state_15634;
var statearr_15644_15668 = state_15634__$1;
(statearr_15644_15668[(2)] = null);

(statearr_15644_15668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15635 === (2))){
var state_15634__$1 = state_15634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15634__$1,(4),ch);
} else {
if((state_val_15635 === (11))){
var inst_15611 = (state_15634[(7)]);
var inst_15621 = (state_15634[(2)]);
var state_15634__$1 = state_15634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15634__$1,(8),inst_15621,inst_15611);
} else {
if((state_val_15635 === (9))){
var state_15634__$1 = state_15634;
var statearr_15645_15669 = state_15634__$1;
(statearr_15645_15669[(2)] = tc);

(statearr_15645_15669[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15635 === (5))){
var inst_15614 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15615 = cljs.core.async.close_BANG_.call(null,fc);
var state_15634__$1 = (function (){var statearr_15646 = state_15634;
(statearr_15646[(8)] = inst_15614);

return statearr_15646;
})();
var statearr_15647_15670 = state_15634__$1;
(statearr_15647_15670[(2)] = inst_15615);

(statearr_15647_15670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15635 === (14))){
var inst_15628 = (state_15634[(2)]);
var state_15634__$1 = state_15634;
var statearr_15648_15671 = state_15634__$1;
(statearr_15648_15671[(2)] = inst_15628);

(statearr_15648_15671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15635 === (10))){
var state_15634__$1 = state_15634;
var statearr_15649_15672 = state_15634__$1;
(statearr_15649_15672[(2)] = fc);

(statearr_15649_15672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15635 === (8))){
var inst_15623 = (state_15634[(2)]);
var state_15634__$1 = state_15634;
if(cljs.core.truth_(inst_15623)){
var statearr_15650_15673 = state_15634__$1;
(statearr_15650_15673[(1)] = (12));

} else {
var statearr_15651_15674 = state_15634__$1;
(statearr_15651_15674[(1)] = (13));

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
});})(c__12926__auto___15660,tc,fc))
;
return ((function (switch__12864__auto__,c__12926__auto___15660,tc,fc){
return (function() {
var cljs$core$async$state_machine__12865__auto__ = null;
var cljs$core$async$state_machine__12865__auto____0 = (function (){
var statearr_15655 = [null,null,null,null,null,null,null,null,null];
(statearr_15655[(0)] = cljs$core$async$state_machine__12865__auto__);

(statearr_15655[(1)] = (1));

return statearr_15655;
});
var cljs$core$async$state_machine__12865__auto____1 = (function (state_15634){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_15634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e15656){if((e15656 instanceof Object)){
var ex__12868__auto__ = e15656;
var statearr_15657_15675 = state_15634;
(statearr_15657_15675[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15676 = state_15634;
state_15634 = G__15676;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
cljs$core$async$state_machine__12865__auto__ = function(state_15634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12865__auto____1.call(this,state_15634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12865__auto____0;
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12865__auto____1;
return cljs$core$async$state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto___15660,tc,fc))
})();
var state__12928__auto__ = (function (){var statearr_15658 = f__12927__auto__.call(null);
(statearr_15658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto___15660);

return statearr_15658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto___15660,tc,fc))
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
var c__12926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto__){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto__){
return (function (state_15723){
var state_val_15724 = (state_15723[(1)]);
if((state_val_15724 === (1))){
var inst_15709 = init;
var state_15723__$1 = (function (){var statearr_15725 = state_15723;
(statearr_15725[(7)] = inst_15709);

return statearr_15725;
})();
var statearr_15726_15741 = state_15723__$1;
(statearr_15726_15741[(2)] = null);

(statearr_15726_15741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (2))){
var state_15723__$1 = state_15723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15723__$1,(4),ch);
} else {
if((state_val_15724 === (3))){
var inst_15721 = (state_15723[(2)]);
var state_15723__$1 = state_15723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15723__$1,inst_15721);
} else {
if((state_val_15724 === (4))){
var inst_15712 = (state_15723[(8)]);
var inst_15712__$1 = (state_15723[(2)]);
var inst_15713 = (inst_15712__$1 == null);
var state_15723__$1 = (function (){var statearr_15727 = state_15723;
(statearr_15727[(8)] = inst_15712__$1);

return statearr_15727;
})();
if(cljs.core.truth_(inst_15713)){
var statearr_15728_15742 = state_15723__$1;
(statearr_15728_15742[(1)] = (5));

} else {
var statearr_15729_15743 = state_15723__$1;
(statearr_15729_15743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (5))){
var inst_15709 = (state_15723[(7)]);
var state_15723__$1 = state_15723;
var statearr_15730_15744 = state_15723__$1;
(statearr_15730_15744[(2)] = inst_15709);

(statearr_15730_15744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (6))){
var inst_15709 = (state_15723[(7)]);
var inst_15712 = (state_15723[(8)]);
var inst_15716 = f.call(null,inst_15709,inst_15712);
var inst_15709__$1 = inst_15716;
var state_15723__$1 = (function (){var statearr_15731 = state_15723;
(statearr_15731[(7)] = inst_15709__$1);

return statearr_15731;
})();
var statearr_15732_15745 = state_15723__$1;
(statearr_15732_15745[(2)] = null);

(statearr_15732_15745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (7))){
var inst_15719 = (state_15723[(2)]);
var state_15723__$1 = state_15723;
var statearr_15733_15746 = state_15723__$1;
(statearr_15733_15746[(2)] = inst_15719);

(statearr_15733_15746[(1)] = (3));


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
});})(c__12926__auto__))
;
return ((function (switch__12864__auto__,c__12926__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12865__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12865__auto____0 = (function (){
var statearr_15737 = [null,null,null,null,null,null,null,null,null];
(statearr_15737[(0)] = cljs$core$async$reduce_$_state_machine__12865__auto__);

(statearr_15737[(1)] = (1));

return statearr_15737;
});
var cljs$core$async$reduce_$_state_machine__12865__auto____1 = (function (state_15723){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_15723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e15738){if((e15738 instanceof Object)){
var ex__12868__auto__ = e15738;
var statearr_15739_15747 = state_15723;
(statearr_15739_15747[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15748 = state_15723;
state_15723 = G__15748;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12865__auto__ = function(state_15723){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12865__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12865__auto____1.call(this,state_15723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12865__auto____0;
cljs$core$async$reduce_$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12865__auto____1;
return cljs$core$async$reduce_$_state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto__))
})();
var state__12928__auto__ = (function (){var statearr_15740 = f__12927__auto__.call(null);
(statearr_15740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto__);

return statearr_15740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto__))
);

return c__12926__auto__;
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
var G__15750 = arguments.length;
switch (G__15750) {
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
var c__12926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto__){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto__){
return (function (state_15775){
var state_val_15776 = (state_15775[(1)]);
if((state_val_15776 === (7))){
var inst_15757 = (state_15775[(2)]);
var state_15775__$1 = state_15775;
var statearr_15777_15801 = state_15775__$1;
(statearr_15777_15801[(2)] = inst_15757);

(statearr_15777_15801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (1))){
var inst_15751 = cljs.core.seq.call(null,coll);
var inst_15752 = inst_15751;
var state_15775__$1 = (function (){var statearr_15778 = state_15775;
(statearr_15778[(7)] = inst_15752);

return statearr_15778;
})();
var statearr_15779_15802 = state_15775__$1;
(statearr_15779_15802[(2)] = null);

(statearr_15779_15802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (4))){
var inst_15752 = (state_15775[(7)]);
var inst_15755 = cljs.core.first.call(null,inst_15752);
var state_15775__$1 = state_15775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15775__$1,(7),ch,inst_15755);
} else {
if((state_val_15776 === (13))){
var inst_15769 = (state_15775[(2)]);
var state_15775__$1 = state_15775;
var statearr_15780_15803 = state_15775__$1;
(statearr_15780_15803[(2)] = inst_15769);

(statearr_15780_15803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (6))){
var inst_15760 = (state_15775[(2)]);
var state_15775__$1 = state_15775;
if(cljs.core.truth_(inst_15760)){
var statearr_15781_15804 = state_15775__$1;
(statearr_15781_15804[(1)] = (8));

} else {
var statearr_15782_15805 = state_15775__$1;
(statearr_15782_15805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (3))){
var inst_15773 = (state_15775[(2)]);
var state_15775__$1 = state_15775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15775__$1,inst_15773);
} else {
if((state_val_15776 === (12))){
var state_15775__$1 = state_15775;
var statearr_15783_15806 = state_15775__$1;
(statearr_15783_15806[(2)] = null);

(statearr_15783_15806[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (2))){
var inst_15752 = (state_15775[(7)]);
var state_15775__$1 = state_15775;
if(cljs.core.truth_(inst_15752)){
var statearr_15784_15807 = state_15775__$1;
(statearr_15784_15807[(1)] = (4));

} else {
var statearr_15785_15808 = state_15775__$1;
(statearr_15785_15808[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (11))){
var inst_15766 = cljs.core.async.close_BANG_.call(null,ch);
var state_15775__$1 = state_15775;
var statearr_15786_15809 = state_15775__$1;
(statearr_15786_15809[(2)] = inst_15766);

(statearr_15786_15809[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (9))){
var state_15775__$1 = state_15775;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15787_15810 = state_15775__$1;
(statearr_15787_15810[(1)] = (11));

} else {
var statearr_15788_15811 = state_15775__$1;
(statearr_15788_15811[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (5))){
var inst_15752 = (state_15775[(7)]);
var state_15775__$1 = state_15775;
var statearr_15789_15812 = state_15775__$1;
(statearr_15789_15812[(2)] = inst_15752);

(statearr_15789_15812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (10))){
var inst_15771 = (state_15775[(2)]);
var state_15775__$1 = state_15775;
var statearr_15790_15813 = state_15775__$1;
(statearr_15790_15813[(2)] = inst_15771);

(statearr_15790_15813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (8))){
var inst_15752 = (state_15775[(7)]);
var inst_15762 = cljs.core.next.call(null,inst_15752);
var inst_15752__$1 = inst_15762;
var state_15775__$1 = (function (){var statearr_15791 = state_15775;
(statearr_15791[(7)] = inst_15752__$1);

return statearr_15791;
})();
var statearr_15792_15814 = state_15775__$1;
(statearr_15792_15814[(2)] = null);

(statearr_15792_15814[(1)] = (2));


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
});})(c__12926__auto__))
;
return ((function (switch__12864__auto__,c__12926__auto__){
return (function() {
var cljs$core$async$state_machine__12865__auto__ = null;
var cljs$core$async$state_machine__12865__auto____0 = (function (){
var statearr_15796 = [null,null,null,null,null,null,null,null];
(statearr_15796[(0)] = cljs$core$async$state_machine__12865__auto__);

(statearr_15796[(1)] = (1));

return statearr_15796;
});
var cljs$core$async$state_machine__12865__auto____1 = (function (state_15775){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_15775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e15797){if((e15797 instanceof Object)){
var ex__12868__auto__ = e15797;
var statearr_15798_15815 = state_15775;
(statearr_15798_15815[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15816 = state_15775;
state_15775 = G__15816;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
cljs$core$async$state_machine__12865__auto__ = function(state_15775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12865__auto____1.call(this,state_15775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12865__auto____0;
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12865__auto____1;
return cljs$core$async$state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto__))
})();
var state__12928__auto__ = (function (){var statearr_15799 = f__12927__auto__.call(null);
(statearr_15799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto__);

return statearr_15799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto__))
);

return c__12926__auto__;
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

cljs.core.async.Mux = (function (){var obj15818 = {};
return obj15818;
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


cljs.core.async.Mult = (function (){var obj15820 = {};
return obj15820;
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
if(typeof cljs.core.async.t16042 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16042 = (function (mult,ch,cs,meta16043){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta16043 = meta16043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16044,meta16043__$1){
var self__ = this;
var _16044__$1 = this;
return (new cljs.core.async.t16042(self__.mult,self__.ch,self__.cs,meta16043__$1));
});})(cs))
;

cljs.core.async.t16042.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16044){
var self__ = this;
var _16044__$1 = this;
return self__.meta16043;
});})(cs))
;

cljs.core.async.t16042.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16042.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t16042.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t16042.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t16042.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t16042.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t16042.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16043","meta16043",63718003,null)], null);
});})(cs))
;

cljs.core.async.t16042.cljs$lang$type = true;

cljs.core.async.t16042.cljs$lang$ctorStr = "cljs.core.async/t16042";

cljs.core.async.t16042.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t16042");
});})(cs))
;

cljs.core.async.__GT_t16042 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t16042(mult__$1,ch__$1,cs__$1,meta16043){
return (new cljs.core.async.t16042(mult__$1,ch__$1,cs__$1,meta16043));
});})(cs))
;

}

return (new cljs.core.async.t16042(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12926__auto___16263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto___16263,cs,m,dchan,dctr,done){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto___16263,cs,m,dchan,dctr,done){
return (function (state_16175){
var state_val_16176 = (state_16175[(1)]);
if((state_val_16176 === (7))){
var inst_16171 = (state_16175[(2)]);
var state_16175__$1 = state_16175;
var statearr_16177_16264 = state_16175__$1;
(statearr_16177_16264[(2)] = inst_16171);

(statearr_16177_16264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (20))){
var inst_16076 = (state_16175[(7)]);
var inst_16086 = cljs.core.first.call(null,inst_16076);
var inst_16087 = cljs.core.nth.call(null,inst_16086,(0),null);
var inst_16088 = cljs.core.nth.call(null,inst_16086,(1),null);
var state_16175__$1 = (function (){var statearr_16178 = state_16175;
(statearr_16178[(8)] = inst_16087);

return statearr_16178;
})();
if(cljs.core.truth_(inst_16088)){
var statearr_16179_16265 = state_16175__$1;
(statearr_16179_16265[(1)] = (22));

} else {
var statearr_16180_16266 = state_16175__$1;
(statearr_16180_16266[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (27))){
var inst_16123 = (state_16175[(9)]);
var inst_16118 = (state_16175[(10)]);
var inst_16047 = (state_16175[(11)]);
var inst_16116 = (state_16175[(12)]);
var inst_16123__$1 = cljs.core._nth.call(null,inst_16116,inst_16118);
var inst_16124 = cljs.core.async.put_BANG_.call(null,inst_16123__$1,inst_16047,done);
var state_16175__$1 = (function (){var statearr_16181 = state_16175;
(statearr_16181[(9)] = inst_16123__$1);

return statearr_16181;
})();
if(cljs.core.truth_(inst_16124)){
var statearr_16182_16267 = state_16175__$1;
(statearr_16182_16267[(1)] = (30));

} else {
var statearr_16183_16268 = state_16175__$1;
(statearr_16183_16268[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (1))){
var state_16175__$1 = state_16175;
var statearr_16184_16269 = state_16175__$1;
(statearr_16184_16269[(2)] = null);

(statearr_16184_16269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (24))){
var inst_16076 = (state_16175[(7)]);
var inst_16093 = (state_16175[(2)]);
var inst_16094 = cljs.core.next.call(null,inst_16076);
var inst_16056 = inst_16094;
var inst_16057 = null;
var inst_16058 = (0);
var inst_16059 = (0);
var state_16175__$1 = (function (){var statearr_16185 = state_16175;
(statearr_16185[(13)] = inst_16057);

(statearr_16185[(14)] = inst_16093);

(statearr_16185[(15)] = inst_16059);

(statearr_16185[(16)] = inst_16058);

(statearr_16185[(17)] = inst_16056);

return statearr_16185;
})();
var statearr_16186_16270 = state_16175__$1;
(statearr_16186_16270[(2)] = null);

(statearr_16186_16270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (39))){
var state_16175__$1 = state_16175;
var statearr_16190_16271 = state_16175__$1;
(statearr_16190_16271[(2)] = null);

(statearr_16190_16271[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (4))){
var inst_16047 = (state_16175[(11)]);
var inst_16047__$1 = (state_16175[(2)]);
var inst_16048 = (inst_16047__$1 == null);
var state_16175__$1 = (function (){var statearr_16191 = state_16175;
(statearr_16191[(11)] = inst_16047__$1);

return statearr_16191;
})();
if(cljs.core.truth_(inst_16048)){
var statearr_16192_16272 = state_16175__$1;
(statearr_16192_16272[(1)] = (5));

} else {
var statearr_16193_16273 = state_16175__$1;
(statearr_16193_16273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (15))){
var inst_16057 = (state_16175[(13)]);
var inst_16059 = (state_16175[(15)]);
var inst_16058 = (state_16175[(16)]);
var inst_16056 = (state_16175[(17)]);
var inst_16072 = (state_16175[(2)]);
var inst_16073 = (inst_16059 + (1));
var tmp16187 = inst_16057;
var tmp16188 = inst_16058;
var tmp16189 = inst_16056;
var inst_16056__$1 = tmp16189;
var inst_16057__$1 = tmp16187;
var inst_16058__$1 = tmp16188;
var inst_16059__$1 = inst_16073;
var state_16175__$1 = (function (){var statearr_16194 = state_16175;
(statearr_16194[(18)] = inst_16072);

(statearr_16194[(13)] = inst_16057__$1);

(statearr_16194[(15)] = inst_16059__$1);

(statearr_16194[(16)] = inst_16058__$1);

(statearr_16194[(17)] = inst_16056__$1);

return statearr_16194;
})();
var statearr_16195_16274 = state_16175__$1;
(statearr_16195_16274[(2)] = null);

(statearr_16195_16274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (21))){
var inst_16097 = (state_16175[(2)]);
var state_16175__$1 = state_16175;
var statearr_16199_16275 = state_16175__$1;
(statearr_16199_16275[(2)] = inst_16097);

(statearr_16199_16275[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (31))){
var inst_16123 = (state_16175[(9)]);
var inst_16127 = done.call(null,null);
var inst_16128 = cljs.core.async.untap_STAR_.call(null,m,inst_16123);
var state_16175__$1 = (function (){var statearr_16200 = state_16175;
(statearr_16200[(19)] = inst_16127);

return statearr_16200;
})();
var statearr_16201_16276 = state_16175__$1;
(statearr_16201_16276[(2)] = inst_16128);

(statearr_16201_16276[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (32))){
var inst_16117 = (state_16175[(20)]);
var inst_16118 = (state_16175[(10)]);
var inst_16115 = (state_16175[(21)]);
var inst_16116 = (state_16175[(12)]);
var inst_16130 = (state_16175[(2)]);
var inst_16131 = (inst_16118 + (1));
var tmp16196 = inst_16117;
var tmp16197 = inst_16115;
var tmp16198 = inst_16116;
var inst_16115__$1 = tmp16197;
var inst_16116__$1 = tmp16198;
var inst_16117__$1 = tmp16196;
var inst_16118__$1 = inst_16131;
var state_16175__$1 = (function (){var statearr_16202 = state_16175;
(statearr_16202[(20)] = inst_16117__$1);

(statearr_16202[(10)] = inst_16118__$1);

(statearr_16202[(21)] = inst_16115__$1);

(statearr_16202[(22)] = inst_16130);

(statearr_16202[(12)] = inst_16116__$1);

return statearr_16202;
})();
var statearr_16203_16277 = state_16175__$1;
(statearr_16203_16277[(2)] = null);

(statearr_16203_16277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (40))){
var inst_16143 = (state_16175[(23)]);
var inst_16147 = done.call(null,null);
var inst_16148 = cljs.core.async.untap_STAR_.call(null,m,inst_16143);
var state_16175__$1 = (function (){var statearr_16204 = state_16175;
(statearr_16204[(24)] = inst_16147);

return statearr_16204;
})();
var statearr_16205_16278 = state_16175__$1;
(statearr_16205_16278[(2)] = inst_16148);

(statearr_16205_16278[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (33))){
var inst_16134 = (state_16175[(25)]);
var inst_16136 = cljs.core.chunked_seq_QMARK_.call(null,inst_16134);
var state_16175__$1 = state_16175;
if(inst_16136){
var statearr_16206_16279 = state_16175__$1;
(statearr_16206_16279[(1)] = (36));

} else {
var statearr_16207_16280 = state_16175__$1;
(statearr_16207_16280[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (13))){
var inst_16066 = (state_16175[(26)]);
var inst_16069 = cljs.core.async.close_BANG_.call(null,inst_16066);
var state_16175__$1 = state_16175;
var statearr_16208_16281 = state_16175__$1;
(statearr_16208_16281[(2)] = inst_16069);

(statearr_16208_16281[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (22))){
var inst_16087 = (state_16175[(8)]);
var inst_16090 = cljs.core.async.close_BANG_.call(null,inst_16087);
var state_16175__$1 = state_16175;
var statearr_16209_16282 = state_16175__$1;
(statearr_16209_16282[(2)] = inst_16090);

(statearr_16209_16282[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (36))){
var inst_16134 = (state_16175[(25)]);
var inst_16138 = cljs.core.chunk_first.call(null,inst_16134);
var inst_16139 = cljs.core.chunk_rest.call(null,inst_16134);
var inst_16140 = cljs.core.count.call(null,inst_16138);
var inst_16115 = inst_16139;
var inst_16116 = inst_16138;
var inst_16117 = inst_16140;
var inst_16118 = (0);
var state_16175__$1 = (function (){var statearr_16210 = state_16175;
(statearr_16210[(20)] = inst_16117);

(statearr_16210[(10)] = inst_16118);

(statearr_16210[(21)] = inst_16115);

(statearr_16210[(12)] = inst_16116);

return statearr_16210;
})();
var statearr_16211_16283 = state_16175__$1;
(statearr_16211_16283[(2)] = null);

(statearr_16211_16283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (41))){
var inst_16134 = (state_16175[(25)]);
var inst_16150 = (state_16175[(2)]);
var inst_16151 = cljs.core.next.call(null,inst_16134);
var inst_16115 = inst_16151;
var inst_16116 = null;
var inst_16117 = (0);
var inst_16118 = (0);
var state_16175__$1 = (function (){var statearr_16212 = state_16175;
(statearr_16212[(20)] = inst_16117);

(statearr_16212[(27)] = inst_16150);

(statearr_16212[(10)] = inst_16118);

(statearr_16212[(21)] = inst_16115);

(statearr_16212[(12)] = inst_16116);

return statearr_16212;
})();
var statearr_16213_16284 = state_16175__$1;
(statearr_16213_16284[(2)] = null);

(statearr_16213_16284[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (43))){
var state_16175__$1 = state_16175;
var statearr_16214_16285 = state_16175__$1;
(statearr_16214_16285[(2)] = null);

(statearr_16214_16285[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (29))){
var inst_16159 = (state_16175[(2)]);
var state_16175__$1 = state_16175;
var statearr_16215_16286 = state_16175__$1;
(statearr_16215_16286[(2)] = inst_16159);

(statearr_16215_16286[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (44))){
var inst_16168 = (state_16175[(2)]);
var state_16175__$1 = (function (){var statearr_16216 = state_16175;
(statearr_16216[(28)] = inst_16168);

return statearr_16216;
})();
var statearr_16217_16287 = state_16175__$1;
(statearr_16217_16287[(2)] = null);

(statearr_16217_16287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (6))){
var inst_16107 = (state_16175[(29)]);
var inst_16106 = cljs.core.deref.call(null,cs);
var inst_16107__$1 = cljs.core.keys.call(null,inst_16106);
var inst_16108 = cljs.core.count.call(null,inst_16107__$1);
var inst_16109 = cljs.core.reset_BANG_.call(null,dctr,inst_16108);
var inst_16114 = cljs.core.seq.call(null,inst_16107__$1);
var inst_16115 = inst_16114;
var inst_16116 = null;
var inst_16117 = (0);
var inst_16118 = (0);
var state_16175__$1 = (function (){var statearr_16218 = state_16175;
(statearr_16218[(20)] = inst_16117);

(statearr_16218[(10)] = inst_16118);

(statearr_16218[(21)] = inst_16115);

(statearr_16218[(12)] = inst_16116);

(statearr_16218[(30)] = inst_16109);

(statearr_16218[(29)] = inst_16107__$1);

return statearr_16218;
})();
var statearr_16219_16288 = state_16175__$1;
(statearr_16219_16288[(2)] = null);

(statearr_16219_16288[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (28))){
var inst_16134 = (state_16175[(25)]);
var inst_16115 = (state_16175[(21)]);
var inst_16134__$1 = cljs.core.seq.call(null,inst_16115);
var state_16175__$1 = (function (){var statearr_16220 = state_16175;
(statearr_16220[(25)] = inst_16134__$1);

return statearr_16220;
})();
if(inst_16134__$1){
var statearr_16221_16289 = state_16175__$1;
(statearr_16221_16289[(1)] = (33));

} else {
var statearr_16222_16290 = state_16175__$1;
(statearr_16222_16290[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (25))){
var inst_16117 = (state_16175[(20)]);
var inst_16118 = (state_16175[(10)]);
var inst_16120 = (inst_16118 < inst_16117);
var inst_16121 = inst_16120;
var state_16175__$1 = state_16175;
if(cljs.core.truth_(inst_16121)){
var statearr_16223_16291 = state_16175__$1;
(statearr_16223_16291[(1)] = (27));

} else {
var statearr_16224_16292 = state_16175__$1;
(statearr_16224_16292[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (34))){
var state_16175__$1 = state_16175;
var statearr_16225_16293 = state_16175__$1;
(statearr_16225_16293[(2)] = null);

(statearr_16225_16293[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (17))){
var state_16175__$1 = state_16175;
var statearr_16226_16294 = state_16175__$1;
(statearr_16226_16294[(2)] = null);

(statearr_16226_16294[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (3))){
var inst_16173 = (state_16175[(2)]);
var state_16175__$1 = state_16175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16175__$1,inst_16173);
} else {
if((state_val_16176 === (12))){
var inst_16102 = (state_16175[(2)]);
var state_16175__$1 = state_16175;
var statearr_16227_16295 = state_16175__$1;
(statearr_16227_16295[(2)] = inst_16102);

(statearr_16227_16295[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (2))){
var state_16175__$1 = state_16175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16175__$1,(4),ch);
} else {
if((state_val_16176 === (23))){
var state_16175__$1 = state_16175;
var statearr_16228_16296 = state_16175__$1;
(statearr_16228_16296[(2)] = null);

(statearr_16228_16296[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (35))){
var inst_16157 = (state_16175[(2)]);
var state_16175__$1 = state_16175;
var statearr_16229_16297 = state_16175__$1;
(statearr_16229_16297[(2)] = inst_16157);

(statearr_16229_16297[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (19))){
var inst_16076 = (state_16175[(7)]);
var inst_16080 = cljs.core.chunk_first.call(null,inst_16076);
var inst_16081 = cljs.core.chunk_rest.call(null,inst_16076);
var inst_16082 = cljs.core.count.call(null,inst_16080);
var inst_16056 = inst_16081;
var inst_16057 = inst_16080;
var inst_16058 = inst_16082;
var inst_16059 = (0);
var state_16175__$1 = (function (){var statearr_16230 = state_16175;
(statearr_16230[(13)] = inst_16057);

(statearr_16230[(15)] = inst_16059);

(statearr_16230[(16)] = inst_16058);

(statearr_16230[(17)] = inst_16056);

return statearr_16230;
})();
var statearr_16231_16298 = state_16175__$1;
(statearr_16231_16298[(2)] = null);

(statearr_16231_16298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (11))){
var inst_16076 = (state_16175[(7)]);
var inst_16056 = (state_16175[(17)]);
var inst_16076__$1 = cljs.core.seq.call(null,inst_16056);
var state_16175__$1 = (function (){var statearr_16232 = state_16175;
(statearr_16232[(7)] = inst_16076__$1);

return statearr_16232;
})();
if(inst_16076__$1){
var statearr_16233_16299 = state_16175__$1;
(statearr_16233_16299[(1)] = (16));

} else {
var statearr_16234_16300 = state_16175__$1;
(statearr_16234_16300[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (9))){
var inst_16104 = (state_16175[(2)]);
var state_16175__$1 = state_16175;
var statearr_16235_16301 = state_16175__$1;
(statearr_16235_16301[(2)] = inst_16104);

(statearr_16235_16301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (5))){
var inst_16054 = cljs.core.deref.call(null,cs);
var inst_16055 = cljs.core.seq.call(null,inst_16054);
var inst_16056 = inst_16055;
var inst_16057 = null;
var inst_16058 = (0);
var inst_16059 = (0);
var state_16175__$1 = (function (){var statearr_16236 = state_16175;
(statearr_16236[(13)] = inst_16057);

(statearr_16236[(15)] = inst_16059);

(statearr_16236[(16)] = inst_16058);

(statearr_16236[(17)] = inst_16056);

return statearr_16236;
})();
var statearr_16237_16302 = state_16175__$1;
(statearr_16237_16302[(2)] = null);

(statearr_16237_16302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (14))){
var state_16175__$1 = state_16175;
var statearr_16238_16303 = state_16175__$1;
(statearr_16238_16303[(2)] = null);

(statearr_16238_16303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (45))){
var inst_16165 = (state_16175[(2)]);
var state_16175__$1 = state_16175;
var statearr_16239_16304 = state_16175__$1;
(statearr_16239_16304[(2)] = inst_16165);

(statearr_16239_16304[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (26))){
var inst_16107 = (state_16175[(29)]);
var inst_16161 = (state_16175[(2)]);
var inst_16162 = cljs.core.seq.call(null,inst_16107);
var state_16175__$1 = (function (){var statearr_16240 = state_16175;
(statearr_16240[(31)] = inst_16161);

return statearr_16240;
})();
if(inst_16162){
var statearr_16241_16305 = state_16175__$1;
(statearr_16241_16305[(1)] = (42));

} else {
var statearr_16242_16306 = state_16175__$1;
(statearr_16242_16306[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (16))){
var inst_16076 = (state_16175[(7)]);
var inst_16078 = cljs.core.chunked_seq_QMARK_.call(null,inst_16076);
var state_16175__$1 = state_16175;
if(inst_16078){
var statearr_16243_16307 = state_16175__$1;
(statearr_16243_16307[(1)] = (19));

} else {
var statearr_16244_16308 = state_16175__$1;
(statearr_16244_16308[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (38))){
var inst_16154 = (state_16175[(2)]);
var state_16175__$1 = state_16175;
var statearr_16245_16309 = state_16175__$1;
(statearr_16245_16309[(2)] = inst_16154);

(statearr_16245_16309[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (30))){
var state_16175__$1 = state_16175;
var statearr_16246_16310 = state_16175__$1;
(statearr_16246_16310[(2)] = null);

(statearr_16246_16310[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (10))){
var inst_16057 = (state_16175[(13)]);
var inst_16059 = (state_16175[(15)]);
var inst_16065 = cljs.core._nth.call(null,inst_16057,inst_16059);
var inst_16066 = cljs.core.nth.call(null,inst_16065,(0),null);
var inst_16067 = cljs.core.nth.call(null,inst_16065,(1),null);
var state_16175__$1 = (function (){var statearr_16247 = state_16175;
(statearr_16247[(26)] = inst_16066);

return statearr_16247;
})();
if(cljs.core.truth_(inst_16067)){
var statearr_16248_16311 = state_16175__$1;
(statearr_16248_16311[(1)] = (13));

} else {
var statearr_16249_16312 = state_16175__$1;
(statearr_16249_16312[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (18))){
var inst_16100 = (state_16175[(2)]);
var state_16175__$1 = state_16175;
var statearr_16250_16313 = state_16175__$1;
(statearr_16250_16313[(2)] = inst_16100);

(statearr_16250_16313[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (42))){
var state_16175__$1 = state_16175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16175__$1,(45),dchan);
} else {
if((state_val_16176 === (37))){
var inst_16134 = (state_16175[(25)]);
var inst_16143 = (state_16175[(23)]);
var inst_16047 = (state_16175[(11)]);
var inst_16143__$1 = cljs.core.first.call(null,inst_16134);
var inst_16144 = cljs.core.async.put_BANG_.call(null,inst_16143__$1,inst_16047,done);
var state_16175__$1 = (function (){var statearr_16251 = state_16175;
(statearr_16251[(23)] = inst_16143__$1);

return statearr_16251;
})();
if(cljs.core.truth_(inst_16144)){
var statearr_16252_16314 = state_16175__$1;
(statearr_16252_16314[(1)] = (39));

} else {
var statearr_16253_16315 = state_16175__$1;
(statearr_16253_16315[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16176 === (8))){
var inst_16059 = (state_16175[(15)]);
var inst_16058 = (state_16175[(16)]);
var inst_16061 = (inst_16059 < inst_16058);
var inst_16062 = inst_16061;
var state_16175__$1 = state_16175;
if(cljs.core.truth_(inst_16062)){
var statearr_16254_16316 = state_16175__$1;
(statearr_16254_16316[(1)] = (10));

} else {
var statearr_16255_16317 = state_16175__$1;
(statearr_16255_16317[(1)] = (11));

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
});})(c__12926__auto___16263,cs,m,dchan,dctr,done))
;
return ((function (switch__12864__auto__,c__12926__auto___16263,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12865__auto__ = null;
var cljs$core$async$mult_$_state_machine__12865__auto____0 = (function (){
var statearr_16259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16259[(0)] = cljs$core$async$mult_$_state_machine__12865__auto__);

(statearr_16259[(1)] = (1));

return statearr_16259;
});
var cljs$core$async$mult_$_state_machine__12865__auto____1 = (function (state_16175){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_16175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e16260){if((e16260 instanceof Object)){
var ex__12868__auto__ = e16260;
var statearr_16261_16318 = state_16175;
(statearr_16261_16318[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16319 = state_16175;
state_16175 = G__16319;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12865__auto__ = function(state_16175){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12865__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12865__auto____1.call(this,state_16175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12865__auto____0;
cljs$core$async$mult_$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12865__auto____1;
return cljs$core$async$mult_$_state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto___16263,cs,m,dchan,dctr,done))
})();
var state__12928__auto__ = (function (){var statearr_16262 = f__12927__auto__.call(null);
(statearr_16262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto___16263);

return statearr_16262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto___16263,cs,m,dchan,dctr,done))
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
var G__16321 = arguments.length;
switch (G__16321) {
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

cljs.core.async.Mix = (function (){var obj16324 = {};
return obj16324;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16329){
var map__16330 = p__16329;
var map__16330__$1 = ((cljs.core.seq_QMARK_.call(null,map__16330))?cljs.core.apply.call(null,cljs.core.hash_map,map__16330):map__16330);
var opts = map__16330__$1;
var statearr_16331_16334 = state;
(statearr_16331_16334[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4422__auto__ = cljs.core.async.do_alts.call(null,((function (map__16330,map__16330__$1,opts){
return (function (val){
var statearr_16332_16335 = state;
(statearr_16332_16335[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16330,map__16330__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4422__auto__)){
var cb = temp__4422__auto__;
var statearr_16333_16336 = state;
(statearr_16333_16336[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16325){
var G__16326 = cljs.core.first.call(null,seq16325);
var seq16325__$1 = cljs.core.next.call(null,seq16325);
var G__16327 = cljs.core.first.call(null,seq16325__$1);
var seq16325__$2 = cljs.core.next.call(null,seq16325__$1);
var G__16328 = cljs.core.first.call(null,seq16325__$2);
var seq16325__$3 = cljs.core.next.call(null,seq16325__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16326,G__16327,G__16328,seq16325__$3);
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
if(typeof cljs.core.async.t16456 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16456 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16457){
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
this.meta16457 = meta16457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16458,meta16457__$1){
var self__ = this;
var _16458__$1 = this;
return (new cljs.core.async.t16456(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16457__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16458){
var self__ = this;
var _16458__$1 = this;
return self__.meta16457;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16456.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16456.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16456.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t16456.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16456.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16456.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16456.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16456.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t16456.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16457","meta16457",1168134323,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t16456.cljs$lang$type = true;

cljs.core.async.t16456.cljs$lang$ctorStr = "cljs.core.async/t16456";

cljs.core.async.t16456.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t16456");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t16456 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t16456(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16457){
return (new cljs.core.async.t16456(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16457));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t16456(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12926__auto___16575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto___16575,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto___16575,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16528){
var state_val_16529 = (state_16528[(1)]);
if((state_val_16529 === (7))){
var inst_16472 = (state_16528[(7)]);
var inst_16477 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16472);
var state_16528__$1 = state_16528;
var statearr_16530_16576 = state_16528__$1;
(statearr_16530_16576[(2)] = inst_16477);

(statearr_16530_16576[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (20))){
var inst_16487 = (state_16528[(8)]);
var state_16528__$1 = state_16528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16528__$1,(23),out,inst_16487);
} else {
if((state_val_16529 === (1))){
var inst_16462 = (state_16528[(9)]);
var inst_16462__$1 = calc_state.call(null);
var inst_16463 = cljs.core.seq_QMARK_.call(null,inst_16462__$1);
var state_16528__$1 = (function (){var statearr_16531 = state_16528;
(statearr_16531[(9)] = inst_16462__$1);

return statearr_16531;
})();
if(inst_16463){
var statearr_16532_16577 = state_16528__$1;
(statearr_16532_16577[(1)] = (2));

} else {
var statearr_16533_16578 = state_16528__$1;
(statearr_16533_16578[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (24))){
var inst_16480 = (state_16528[(10)]);
var inst_16472 = inst_16480;
var state_16528__$1 = (function (){var statearr_16534 = state_16528;
(statearr_16534[(7)] = inst_16472);

return statearr_16534;
})();
var statearr_16535_16579 = state_16528__$1;
(statearr_16535_16579[(2)] = null);

(statearr_16535_16579[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (4))){
var inst_16462 = (state_16528[(9)]);
var inst_16468 = (state_16528[(2)]);
var inst_16469 = cljs.core.get.call(null,inst_16468,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16470 = cljs.core.get.call(null,inst_16468,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16471 = cljs.core.get.call(null,inst_16468,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16472 = inst_16462;
var state_16528__$1 = (function (){var statearr_16536 = state_16528;
(statearr_16536[(11)] = inst_16469);

(statearr_16536[(12)] = inst_16471);

(statearr_16536[(13)] = inst_16470);

(statearr_16536[(7)] = inst_16472);

return statearr_16536;
})();
var statearr_16537_16580 = state_16528__$1;
(statearr_16537_16580[(2)] = null);

(statearr_16537_16580[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (15))){
var state_16528__$1 = state_16528;
var statearr_16538_16581 = state_16528__$1;
(statearr_16538_16581[(2)] = null);

(statearr_16538_16581[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (21))){
var inst_16480 = (state_16528[(10)]);
var inst_16472 = inst_16480;
var state_16528__$1 = (function (){var statearr_16539 = state_16528;
(statearr_16539[(7)] = inst_16472);

return statearr_16539;
})();
var statearr_16540_16582 = state_16528__$1;
(statearr_16540_16582[(2)] = null);

(statearr_16540_16582[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (13))){
var inst_16524 = (state_16528[(2)]);
var state_16528__$1 = state_16528;
var statearr_16541_16583 = state_16528__$1;
(statearr_16541_16583[(2)] = inst_16524);

(statearr_16541_16583[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (22))){
var inst_16522 = (state_16528[(2)]);
var state_16528__$1 = state_16528;
var statearr_16542_16584 = state_16528__$1;
(statearr_16542_16584[(2)] = inst_16522);

(statearr_16542_16584[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (6))){
var inst_16526 = (state_16528[(2)]);
var state_16528__$1 = state_16528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16528__$1,inst_16526);
} else {
if((state_val_16529 === (25))){
var state_16528__$1 = state_16528;
var statearr_16543_16585 = state_16528__$1;
(statearr_16543_16585[(2)] = null);

(statearr_16543_16585[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (17))){
var inst_16502 = (state_16528[(14)]);
var state_16528__$1 = state_16528;
var statearr_16544_16586 = state_16528__$1;
(statearr_16544_16586[(2)] = inst_16502);

(statearr_16544_16586[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (3))){
var inst_16462 = (state_16528[(9)]);
var state_16528__$1 = state_16528;
var statearr_16545_16587 = state_16528__$1;
(statearr_16545_16587[(2)] = inst_16462);

(statearr_16545_16587[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (12))){
var inst_16488 = (state_16528[(15)]);
var inst_16481 = (state_16528[(16)]);
var inst_16502 = (state_16528[(14)]);
var inst_16502__$1 = inst_16481.call(null,inst_16488);
var state_16528__$1 = (function (){var statearr_16546 = state_16528;
(statearr_16546[(14)] = inst_16502__$1);

return statearr_16546;
})();
if(cljs.core.truth_(inst_16502__$1)){
var statearr_16547_16588 = state_16528__$1;
(statearr_16547_16588[(1)] = (17));

} else {
var statearr_16548_16589 = state_16528__$1;
(statearr_16548_16589[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (2))){
var inst_16462 = (state_16528[(9)]);
var inst_16465 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16462);
var state_16528__$1 = state_16528;
var statearr_16549_16590 = state_16528__$1;
(statearr_16549_16590[(2)] = inst_16465);

(statearr_16549_16590[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (23))){
var inst_16513 = (state_16528[(2)]);
var state_16528__$1 = state_16528;
if(cljs.core.truth_(inst_16513)){
var statearr_16550_16591 = state_16528__$1;
(statearr_16550_16591[(1)] = (24));

} else {
var statearr_16551_16592 = state_16528__$1;
(statearr_16551_16592[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (19))){
var inst_16510 = (state_16528[(2)]);
var state_16528__$1 = state_16528;
if(cljs.core.truth_(inst_16510)){
var statearr_16552_16593 = state_16528__$1;
(statearr_16552_16593[(1)] = (20));

} else {
var statearr_16553_16594 = state_16528__$1;
(statearr_16553_16594[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (11))){
var inst_16487 = (state_16528[(8)]);
var inst_16493 = (inst_16487 == null);
var state_16528__$1 = state_16528;
if(cljs.core.truth_(inst_16493)){
var statearr_16554_16595 = state_16528__$1;
(statearr_16554_16595[(1)] = (14));

} else {
var statearr_16555_16596 = state_16528__$1;
(statearr_16555_16596[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (9))){
var inst_16480 = (state_16528[(10)]);
var inst_16480__$1 = (state_16528[(2)]);
var inst_16481 = cljs.core.get.call(null,inst_16480__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16482 = cljs.core.get.call(null,inst_16480__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16483 = cljs.core.get.call(null,inst_16480__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16528__$1 = (function (){var statearr_16556 = state_16528;
(statearr_16556[(17)] = inst_16482);

(statearr_16556[(16)] = inst_16481);

(statearr_16556[(10)] = inst_16480__$1);

return statearr_16556;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16528__$1,(10),inst_16483);
} else {
if((state_val_16529 === (5))){
var inst_16472 = (state_16528[(7)]);
var inst_16475 = cljs.core.seq_QMARK_.call(null,inst_16472);
var state_16528__$1 = state_16528;
if(inst_16475){
var statearr_16557_16597 = state_16528__$1;
(statearr_16557_16597[(1)] = (7));

} else {
var statearr_16558_16598 = state_16528__$1;
(statearr_16558_16598[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (14))){
var inst_16488 = (state_16528[(15)]);
var inst_16495 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16488);
var state_16528__$1 = state_16528;
var statearr_16559_16599 = state_16528__$1;
(statearr_16559_16599[(2)] = inst_16495);

(statearr_16559_16599[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (26))){
var inst_16518 = (state_16528[(2)]);
var state_16528__$1 = state_16528;
var statearr_16560_16600 = state_16528__$1;
(statearr_16560_16600[(2)] = inst_16518);

(statearr_16560_16600[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (16))){
var inst_16498 = (state_16528[(2)]);
var inst_16499 = calc_state.call(null);
var inst_16472 = inst_16499;
var state_16528__$1 = (function (){var statearr_16561 = state_16528;
(statearr_16561[(18)] = inst_16498);

(statearr_16561[(7)] = inst_16472);

return statearr_16561;
})();
var statearr_16562_16601 = state_16528__$1;
(statearr_16562_16601[(2)] = null);

(statearr_16562_16601[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (10))){
var inst_16488 = (state_16528[(15)]);
var inst_16487 = (state_16528[(8)]);
var inst_16486 = (state_16528[(2)]);
var inst_16487__$1 = cljs.core.nth.call(null,inst_16486,(0),null);
var inst_16488__$1 = cljs.core.nth.call(null,inst_16486,(1),null);
var inst_16489 = (inst_16487__$1 == null);
var inst_16490 = cljs.core._EQ_.call(null,inst_16488__$1,change);
var inst_16491 = (inst_16489) || (inst_16490);
var state_16528__$1 = (function (){var statearr_16563 = state_16528;
(statearr_16563[(15)] = inst_16488__$1);

(statearr_16563[(8)] = inst_16487__$1);

return statearr_16563;
})();
if(cljs.core.truth_(inst_16491)){
var statearr_16564_16602 = state_16528__$1;
(statearr_16564_16602[(1)] = (11));

} else {
var statearr_16565_16603 = state_16528__$1;
(statearr_16565_16603[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (18))){
var inst_16482 = (state_16528[(17)]);
var inst_16488 = (state_16528[(15)]);
var inst_16481 = (state_16528[(16)]);
var inst_16505 = cljs.core.empty_QMARK_.call(null,inst_16481);
var inst_16506 = inst_16482.call(null,inst_16488);
var inst_16507 = cljs.core.not.call(null,inst_16506);
var inst_16508 = (inst_16505) && (inst_16507);
var state_16528__$1 = state_16528;
var statearr_16566_16604 = state_16528__$1;
(statearr_16566_16604[(2)] = inst_16508);

(statearr_16566_16604[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16529 === (8))){
var inst_16472 = (state_16528[(7)]);
var state_16528__$1 = state_16528;
var statearr_16567_16605 = state_16528__$1;
(statearr_16567_16605[(2)] = inst_16472);

(statearr_16567_16605[(1)] = (9));


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
});})(c__12926__auto___16575,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12864__auto__,c__12926__auto___16575,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12865__auto__ = null;
var cljs$core$async$mix_$_state_machine__12865__auto____0 = (function (){
var statearr_16571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16571[(0)] = cljs$core$async$mix_$_state_machine__12865__auto__);

(statearr_16571[(1)] = (1));

return statearr_16571;
});
var cljs$core$async$mix_$_state_machine__12865__auto____1 = (function (state_16528){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_16528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e16572){if((e16572 instanceof Object)){
var ex__12868__auto__ = e16572;
var statearr_16573_16606 = state_16528;
(statearr_16573_16606[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16607 = state_16528;
state_16528 = G__16607;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12865__auto__ = function(state_16528){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12865__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12865__auto____1.call(this,state_16528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12865__auto____0;
cljs$core$async$mix_$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12865__auto____1;
return cljs$core$async$mix_$_state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto___16575,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12928__auto__ = (function (){var statearr_16574 = f__12927__auto__.call(null);
(statearr_16574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto___16575);

return statearr_16574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto___16575,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj16609 = {};
return obj16609;
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
var G__16611 = arguments.length;
switch (G__16611) {
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
var G__16615 = arguments.length;
switch (G__16615) {
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
return (function (p1__16613_SHARP_){
if(cljs.core.truth_(p1__16613_SHARP_.call(null,topic))){
return p1__16613_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16613_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4309__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t16616 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16616 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16617){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16617 = meta16617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16618,meta16617__$1){
var self__ = this;
var _16618__$1 = this;
return (new cljs.core.async.t16616(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16617__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t16616.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16618){
var self__ = this;
var _16618__$1 = this;
return self__.meta16617;
});})(mults,ensure_mult))
;

cljs.core.async.t16616.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16616.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t16616.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t16616.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t16616.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t16616.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t16616.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t16616.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16617","meta16617",83494773,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t16616.cljs$lang$type = true;

cljs.core.async.t16616.cljs$lang$ctorStr = "cljs.core.async/t16616";

cljs.core.async.t16616.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t16616");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t16616 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t16616(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16617){
return (new cljs.core.async.t16616(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16617));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t16616(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12926__auto___16739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto___16739,mults,ensure_mult,p){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto___16739,mults,ensure_mult,p){
return (function (state_16690){
var state_val_16691 = (state_16690[(1)]);
if((state_val_16691 === (7))){
var inst_16686 = (state_16690[(2)]);
var state_16690__$1 = state_16690;
var statearr_16692_16740 = state_16690__$1;
(statearr_16692_16740[(2)] = inst_16686);

(statearr_16692_16740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (20))){
var state_16690__$1 = state_16690;
var statearr_16693_16741 = state_16690__$1;
(statearr_16693_16741[(2)] = null);

(statearr_16693_16741[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (1))){
var state_16690__$1 = state_16690;
var statearr_16694_16742 = state_16690__$1;
(statearr_16694_16742[(2)] = null);

(statearr_16694_16742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (24))){
var inst_16669 = (state_16690[(7)]);
var inst_16678 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16669);
var state_16690__$1 = state_16690;
var statearr_16695_16743 = state_16690__$1;
(statearr_16695_16743[(2)] = inst_16678);

(statearr_16695_16743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (4))){
var inst_16621 = (state_16690[(8)]);
var inst_16621__$1 = (state_16690[(2)]);
var inst_16622 = (inst_16621__$1 == null);
var state_16690__$1 = (function (){var statearr_16696 = state_16690;
(statearr_16696[(8)] = inst_16621__$1);

return statearr_16696;
})();
if(cljs.core.truth_(inst_16622)){
var statearr_16697_16744 = state_16690__$1;
(statearr_16697_16744[(1)] = (5));

} else {
var statearr_16698_16745 = state_16690__$1;
(statearr_16698_16745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (15))){
var inst_16663 = (state_16690[(2)]);
var state_16690__$1 = state_16690;
var statearr_16699_16746 = state_16690__$1;
(statearr_16699_16746[(2)] = inst_16663);

(statearr_16699_16746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (21))){
var inst_16683 = (state_16690[(2)]);
var state_16690__$1 = (function (){var statearr_16700 = state_16690;
(statearr_16700[(9)] = inst_16683);

return statearr_16700;
})();
var statearr_16701_16747 = state_16690__$1;
(statearr_16701_16747[(2)] = null);

(statearr_16701_16747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (13))){
var inst_16645 = (state_16690[(10)]);
var inst_16647 = cljs.core.chunked_seq_QMARK_.call(null,inst_16645);
var state_16690__$1 = state_16690;
if(inst_16647){
var statearr_16702_16748 = state_16690__$1;
(statearr_16702_16748[(1)] = (16));

} else {
var statearr_16703_16749 = state_16690__$1;
(statearr_16703_16749[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (22))){
var inst_16675 = (state_16690[(2)]);
var state_16690__$1 = state_16690;
if(cljs.core.truth_(inst_16675)){
var statearr_16704_16750 = state_16690__$1;
(statearr_16704_16750[(1)] = (23));

} else {
var statearr_16705_16751 = state_16690__$1;
(statearr_16705_16751[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (6))){
var inst_16669 = (state_16690[(7)]);
var inst_16621 = (state_16690[(8)]);
var inst_16671 = (state_16690[(11)]);
var inst_16669__$1 = topic_fn.call(null,inst_16621);
var inst_16670 = cljs.core.deref.call(null,mults);
var inst_16671__$1 = cljs.core.get.call(null,inst_16670,inst_16669__$1);
var state_16690__$1 = (function (){var statearr_16706 = state_16690;
(statearr_16706[(7)] = inst_16669__$1);

(statearr_16706[(11)] = inst_16671__$1);

return statearr_16706;
})();
if(cljs.core.truth_(inst_16671__$1)){
var statearr_16707_16752 = state_16690__$1;
(statearr_16707_16752[(1)] = (19));

} else {
var statearr_16708_16753 = state_16690__$1;
(statearr_16708_16753[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (25))){
var inst_16680 = (state_16690[(2)]);
var state_16690__$1 = state_16690;
var statearr_16709_16754 = state_16690__$1;
(statearr_16709_16754[(2)] = inst_16680);

(statearr_16709_16754[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (17))){
var inst_16645 = (state_16690[(10)]);
var inst_16654 = cljs.core.first.call(null,inst_16645);
var inst_16655 = cljs.core.async.muxch_STAR_.call(null,inst_16654);
var inst_16656 = cljs.core.async.close_BANG_.call(null,inst_16655);
var inst_16657 = cljs.core.next.call(null,inst_16645);
var inst_16631 = inst_16657;
var inst_16632 = null;
var inst_16633 = (0);
var inst_16634 = (0);
var state_16690__$1 = (function (){var statearr_16710 = state_16690;
(statearr_16710[(12)] = inst_16634);

(statearr_16710[(13)] = inst_16656);

(statearr_16710[(14)] = inst_16633);

(statearr_16710[(15)] = inst_16631);

(statearr_16710[(16)] = inst_16632);

return statearr_16710;
})();
var statearr_16711_16755 = state_16690__$1;
(statearr_16711_16755[(2)] = null);

(statearr_16711_16755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (3))){
var inst_16688 = (state_16690[(2)]);
var state_16690__$1 = state_16690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16690__$1,inst_16688);
} else {
if((state_val_16691 === (12))){
var inst_16665 = (state_16690[(2)]);
var state_16690__$1 = state_16690;
var statearr_16712_16756 = state_16690__$1;
(statearr_16712_16756[(2)] = inst_16665);

(statearr_16712_16756[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (2))){
var state_16690__$1 = state_16690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16690__$1,(4),ch);
} else {
if((state_val_16691 === (23))){
var state_16690__$1 = state_16690;
var statearr_16713_16757 = state_16690__$1;
(statearr_16713_16757[(2)] = null);

(statearr_16713_16757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (19))){
var inst_16621 = (state_16690[(8)]);
var inst_16671 = (state_16690[(11)]);
var inst_16673 = cljs.core.async.muxch_STAR_.call(null,inst_16671);
var state_16690__$1 = state_16690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16690__$1,(22),inst_16673,inst_16621);
} else {
if((state_val_16691 === (11))){
var inst_16631 = (state_16690[(15)]);
var inst_16645 = (state_16690[(10)]);
var inst_16645__$1 = cljs.core.seq.call(null,inst_16631);
var state_16690__$1 = (function (){var statearr_16714 = state_16690;
(statearr_16714[(10)] = inst_16645__$1);

return statearr_16714;
})();
if(inst_16645__$1){
var statearr_16715_16758 = state_16690__$1;
(statearr_16715_16758[(1)] = (13));

} else {
var statearr_16716_16759 = state_16690__$1;
(statearr_16716_16759[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (9))){
var inst_16667 = (state_16690[(2)]);
var state_16690__$1 = state_16690;
var statearr_16717_16760 = state_16690__$1;
(statearr_16717_16760[(2)] = inst_16667);

(statearr_16717_16760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (5))){
var inst_16628 = cljs.core.deref.call(null,mults);
var inst_16629 = cljs.core.vals.call(null,inst_16628);
var inst_16630 = cljs.core.seq.call(null,inst_16629);
var inst_16631 = inst_16630;
var inst_16632 = null;
var inst_16633 = (0);
var inst_16634 = (0);
var state_16690__$1 = (function (){var statearr_16718 = state_16690;
(statearr_16718[(12)] = inst_16634);

(statearr_16718[(14)] = inst_16633);

(statearr_16718[(15)] = inst_16631);

(statearr_16718[(16)] = inst_16632);

return statearr_16718;
})();
var statearr_16719_16761 = state_16690__$1;
(statearr_16719_16761[(2)] = null);

(statearr_16719_16761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (14))){
var state_16690__$1 = state_16690;
var statearr_16723_16762 = state_16690__$1;
(statearr_16723_16762[(2)] = null);

(statearr_16723_16762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (16))){
var inst_16645 = (state_16690[(10)]);
var inst_16649 = cljs.core.chunk_first.call(null,inst_16645);
var inst_16650 = cljs.core.chunk_rest.call(null,inst_16645);
var inst_16651 = cljs.core.count.call(null,inst_16649);
var inst_16631 = inst_16650;
var inst_16632 = inst_16649;
var inst_16633 = inst_16651;
var inst_16634 = (0);
var state_16690__$1 = (function (){var statearr_16724 = state_16690;
(statearr_16724[(12)] = inst_16634);

(statearr_16724[(14)] = inst_16633);

(statearr_16724[(15)] = inst_16631);

(statearr_16724[(16)] = inst_16632);

return statearr_16724;
})();
var statearr_16725_16763 = state_16690__$1;
(statearr_16725_16763[(2)] = null);

(statearr_16725_16763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (10))){
var inst_16634 = (state_16690[(12)]);
var inst_16633 = (state_16690[(14)]);
var inst_16631 = (state_16690[(15)]);
var inst_16632 = (state_16690[(16)]);
var inst_16639 = cljs.core._nth.call(null,inst_16632,inst_16634);
var inst_16640 = cljs.core.async.muxch_STAR_.call(null,inst_16639);
var inst_16641 = cljs.core.async.close_BANG_.call(null,inst_16640);
var inst_16642 = (inst_16634 + (1));
var tmp16720 = inst_16633;
var tmp16721 = inst_16631;
var tmp16722 = inst_16632;
var inst_16631__$1 = tmp16721;
var inst_16632__$1 = tmp16722;
var inst_16633__$1 = tmp16720;
var inst_16634__$1 = inst_16642;
var state_16690__$1 = (function (){var statearr_16726 = state_16690;
(statearr_16726[(17)] = inst_16641);

(statearr_16726[(12)] = inst_16634__$1);

(statearr_16726[(14)] = inst_16633__$1);

(statearr_16726[(15)] = inst_16631__$1);

(statearr_16726[(16)] = inst_16632__$1);

return statearr_16726;
})();
var statearr_16727_16764 = state_16690__$1;
(statearr_16727_16764[(2)] = null);

(statearr_16727_16764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (18))){
var inst_16660 = (state_16690[(2)]);
var state_16690__$1 = state_16690;
var statearr_16728_16765 = state_16690__$1;
(statearr_16728_16765[(2)] = inst_16660);

(statearr_16728_16765[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16691 === (8))){
var inst_16634 = (state_16690[(12)]);
var inst_16633 = (state_16690[(14)]);
var inst_16636 = (inst_16634 < inst_16633);
var inst_16637 = inst_16636;
var state_16690__$1 = state_16690;
if(cljs.core.truth_(inst_16637)){
var statearr_16729_16766 = state_16690__$1;
(statearr_16729_16766[(1)] = (10));

} else {
var statearr_16730_16767 = state_16690__$1;
(statearr_16730_16767[(1)] = (11));

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
});})(c__12926__auto___16739,mults,ensure_mult,p))
;
return ((function (switch__12864__auto__,c__12926__auto___16739,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12865__auto__ = null;
var cljs$core$async$state_machine__12865__auto____0 = (function (){
var statearr_16734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16734[(0)] = cljs$core$async$state_machine__12865__auto__);

(statearr_16734[(1)] = (1));

return statearr_16734;
});
var cljs$core$async$state_machine__12865__auto____1 = (function (state_16690){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_16690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e16735){if((e16735 instanceof Object)){
var ex__12868__auto__ = e16735;
var statearr_16736_16768 = state_16690;
(statearr_16736_16768[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16769 = state_16690;
state_16690 = G__16769;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
cljs$core$async$state_machine__12865__auto__ = function(state_16690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12865__auto____1.call(this,state_16690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12865__auto____0;
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12865__auto____1;
return cljs$core$async$state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto___16739,mults,ensure_mult,p))
})();
var state__12928__auto__ = (function (){var statearr_16737 = f__12927__auto__.call(null);
(statearr_16737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto___16739);

return statearr_16737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto___16739,mults,ensure_mult,p))
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
var G__16771 = arguments.length;
switch (G__16771) {
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
var G__16774 = arguments.length;
switch (G__16774) {
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
var G__16777 = arguments.length;
switch (G__16777) {
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
var c__12926__auto___16847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto___16847,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto___16847,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16816){
var state_val_16817 = (state_16816[(1)]);
if((state_val_16817 === (7))){
var state_16816__$1 = state_16816;
var statearr_16818_16848 = state_16816__$1;
(statearr_16818_16848[(2)] = null);

(statearr_16818_16848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (1))){
var state_16816__$1 = state_16816;
var statearr_16819_16849 = state_16816__$1;
(statearr_16819_16849[(2)] = null);

(statearr_16819_16849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (4))){
var inst_16780 = (state_16816[(7)]);
var inst_16782 = (inst_16780 < cnt);
var state_16816__$1 = state_16816;
if(cljs.core.truth_(inst_16782)){
var statearr_16820_16850 = state_16816__$1;
(statearr_16820_16850[(1)] = (6));

} else {
var statearr_16821_16851 = state_16816__$1;
(statearr_16821_16851[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (15))){
var inst_16812 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
var statearr_16822_16852 = state_16816__$1;
(statearr_16822_16852[(2)] = inst_16812);

(statearr_16822_16852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (13))){
var inst_16805 = cljs.core.async.close_BANG_.call(null,out);
var state_16816__$1 = state_16816;
var statearr_16823_16853 = state_16816__$1;
(statearr_16823_16853[(2)] = inst_16805);

(statearr_16823_16853[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (6))){
var state_16816__$1 = state_16816;
var statearr_16824_16854 = state_16816__$1;
(statearr_16824_16854[(2)] = null);

(statearr_16824_16854[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (3))){
var inst_16814 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16816__$1,inst_16814);
} else {
if((state_val_16817 === (12))){
var inst_16802 = (state_16816[(8)]);
var inst_16802__$1 = (state_16816[(2)]);
var inst_16803 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16802__$1);
var state_16816__$1 = (function (){var statearr_16825 = state_16816;
(statearr_16825[(8)] = inst_16802__$1);

return statearr_16825;
})();
if(cljs.core.truth_(inst_16803)){
var statearr_16826_16855 = state_16816__$1;
(statearr_16826_16855[(1)] = (13));

} else {
var statearr_16827_16856 = state_16816__$1;
(statearr_16827_16856[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (2))){
var inst_16779 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16780 = (0);
var state_16816__$1 = (function (){var statearr_16828 = state_16816;
(statearr_16828[(9)] = inst_16779);

(statearr_16828[(7)] = inst_16780);

return statearr_16828;
})();
var statearr_16829_16857 = state_16816__$1;
(statearr_16829_16857[(2)] = null);

(statearr_16829_16857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (11))){
var inst_16780 = (state_16816[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16816,(10),Object,null,(9));
var inst_16789 = chs__$1.call(null,inst_16780);
var inst_16790 = done.call(null,inst_16780);
var inst_16791 = cljs.core.async.take_BANG_.call(null,inst_16789,inst_16790);
var state_16816__$1 = state_16816;
var statearr_16830_16858 = state_16816__$1;
(statearr_16830_16858[(2)] = inst_16791);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16816__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (9))){
var inst_16780 = (state_16816[(7)]);
var inst_16793 = (state_16816[(2)]);
var inst_16794 = (inst_16780 + (1));
var inst_16780__$1 = inst_16794;
var state_16816__$1 = (function (){var statearr_16831 = state_16816;
(statearr_16831[(10)] = inst_16793);

(statearr_16831[(7)] = inst_16780__$1);

return statearr_16831;
})();
var statearr_16832_16859 = state_16816__$1;
(statearr_16832_16859[(2)] = null);

(statearr_16832_16859[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (5))){
var inst_16800 = (state_16816[(2)]);
var state_16816__$1 = (function (){var statearr_16833 = state_16816;
(statearr_16833[(11)] = inst_16800);

return statearr_16833;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16816__$1,(12),dchan);
} else {
if((state_val_16817 === (14))){
var inst_16802 = (state_16816[(8)]);
var inst_16807 = cljs.core.apply.call(null,f,inst_16802);
var state_16816__$1 = state_16816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16816__$1,(16),out,inst_16807);
} else {
if((state_val_16817 === (16))){
var inst_16809 = (state_16816[(2)]);
var state_16816__$1 = (function (){var statearr_16834 = state_16816;
(statearr_16834[(12)] = inst_16809);

return statearr_16834;
})();
var statearr_16835_16860 = state_16816__$1;
(statearr_16835_16860[(2)] = null);

(statearr_16835_16860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (10))){
var inst_16784 = (state_16816[(2)]);
var inst_16785 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16816__$1 = (function (){var statearr_16836 = state_16816;
(statearr_16836[(13)] = inst_16784);

return statearr_16836;
})();
var statearr_16837_16861 = state_16816__$1;
(statearr_16837_16861[(2)] = inst_16785);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16816__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16817 === (8))){
var inst_16798 = (state_16816[(2)]);
var state_16816__$1 = state_16816;
var statearr_16838_16862 = state_16816__$1;
(statearr_16838_16862[(2)] = inst_16798);

(statearr_16838_16862[(1)] = (5));


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
});})(c__12926__auto___16847,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12864__auto__,c__12926__auto___16847,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12865__auto__ = null;
var cljs$core$async$state_machine__12865__auto____0 = (function (){
var statearr_16842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16842[(0)] = cljs$core$async$state_machine__12865__auto__);

(statearr_16842[(1)] = (1));

return statearr_16842;
});
var cljs$core$async$state_machine__12865__auto____1 = (function (state_16816){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_16816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e16843){if((e16843 instanceof Object)){
var ex__12868__auto__ = e16843;
var statearr_16844_16863 = state_16816;
(statearr_16844_16863[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16864 = state_16816;
state_16816 = G__16864;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
cljs$core$async$state_machine__12865__auto__ = function(state_16816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12865__auto____1.call(this,state_16816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12865__auto____0;
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12865__auto____1;
return cljs$core$async$state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto___16847,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12928__auto__ = (function (){var statearr_16845 = f__12927__auto__.call(null);
(statearr_16845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto___16847);

return statearr_16845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto___16847,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__16867 = arguments.length;
switch (G__16867) {
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
var c__12926__auto___16922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto___16922,out){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto___16922,out){
return (function (state_16897){
var state_val_16898 = (state_16897[(1)]);
if((state_val_16898 === (7))){
var inst_16877 = (state_16897[(7)]);
var inst_16876 = (state_16897[(8)]);
var inst_16876__$1 = (state_16897[(2)]);
var inst_16877__$1 = cljs.core.nth.call(null,inst_16876__$1,(0),null);
var inst_16878 = cljs.core.nth.call(null,inst_16876__$1,(1),null);
var inst_16879 = (inst_16877__$1 == null);
var state_16897__$1 = (function (){var statearr_16899 = state_16897;
(statearr_16899[(7)] = inst_16877__$1);

(statearr_16899[(9)] = inst_16878);

(statearr_16899[(8)] = inst_16876__$1);

return statearr_16899;
})();
if(cljs.core.truth_(inst_16879)){
var statearr_16900_16923 = state_16897__$1;
(statearr_16900_16923[(1)] = (8));

} else {
var statearr_16901_16924 = state_16897__$1;
(statearr_16901_16924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (1))){
var inst_16868 = cljs.core.vec.call(null,chs);
var inst_16869 = inst_16868;
var state_16897__$1 = (function (){var statearr_16902 = state_16897;
(statearr_16902[(10)] = inst_16869);

return statearr_16902;
})();
var statearr_16903_16925 = state_16897__$1;
(statearr_16903_16925[(2)] = null);

(statearr_16903_16925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (4))){
var inst_16869 = (state_16897[(10)]);
var state_16897__$1 = state_16897;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16897__$1,(7),inst_16869);
} else {
if((state_val_16898 === (6))){
var inst_16893 = (state_16897[(2)]);
var state_16897__$1 = state_16897;
var statearr_16904_16926 = state_16897__$1;
(statearr_16904_16926[(2)] = inst_16893);

(statearr_16904_16926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (3))){
var inst_16895 = (state_16897[(2)]);
var state_16897__$1 = state_16897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16897__$1,inst_16895);
} else {
if((state_val_16898 === (2))){
var inst_16869 = (state_16897[(10)]);
var inst_16871 = cljs.core.count.call(null,inst_16869);
var inst_16872 = (inst_16871 > (0));
var state_16897__$1 = state_16897;
if(cljs.core.truth_(inst_16872)){
var statearr_16906_16927 = state_16897__$1;
(statearr_16906_16927[(1)] = (4));

} else {
var statearr_16907_16928 = state_16897__$1;
(statearr_16907_16928[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (11))){
var inst_16869 = (state_16897[(10)]);
var inst_16886 = (state_16897[(2)]);
var tmp16905 = inst_16869;
var inst_16869__$1 = tmp16905;
var state_16897__$1 = (function (){var statearr_16908 = state_16897;
(statearr_16908[(11)] = inst_16886);

(statearr_16908[(10)] = inst_16869__$1);

return statearr_16908;
})();
var statearr_16909_16929 = state_16897__$1;
(statearr_16909_16929[(2)] = null);

(statearr_16909_16929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (9))){
var inst_16877 = (state_16897[(7)]);
var state_16897__$1 = state_16897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16897__$1,(11),out,inst_16877);
} else {
if((state_val_16898 === (5))){
var inst_16891 = cljs.core.async.close_BANG_.call(null,out);
var state_16897__$1 = state_16897;
var statearr_16910_16930 = state_16897__$1;
(statearr_16910_16930[(2)] = inst_16891);

(statearr_16910_16930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (10))){
var inst_16889 = (state_16897[(2)]);
var state_16897__$1 = state_16897;
var statearr_16911_16931 = state_16897__$1;
(statearr_16911_16931[(2)] = inst_16889);

(statearr_16911_16931[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16898 === (8))){
var inst_16877 = (state_16897[(7)]);
var inst_16878 = (state_16897[(9)]);
var inst_16876 = (state_16897[(8)]);
var inst_16869 = (state_16897[(10)]);
var inst_16881 = (function (){var cs = inst_16869;
var vec__16874 = inst_16876;
var v = inst_16877;
var c = inst_16878;
return ((function (cs,vec__16874,v,c,inst_16877,inst_16878,inst_16876,inst_16869,state_val_16898,c__12926__auto___16922,out){
return (function (p1__16865_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16865_SHARP_);
});
;})(cs,vec__16874,v,c,inst_16877,inst_16878,inst_16876,inst_16869,state_val_16898,c__12926__auto___16922,out))
})();
var inst_16882 = cljs.core.filterv.call(null,inst_16881,inst_16869);
var inst_16869__$1 = inst_16882;
var state_16897__$1 = (function (){var statearr_16912 = state_16897;
(statearr_16912[(10)] = inst_16869__$1);

return statearr_16912;
})();
var statearr_16913_16932 = state_16897__$1;
(statearr_16913_16932[(2)] = null);

(statearr_16913_16932[(1)] = (2));


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
});})(c__12926__auto___16922,out))
;
return ((function (switch__12864__auto__,c__12926__auto___16922,out){
return (function() {
var cljs$core$async$state_machine__12865__auto__ = null;
var cljs$core$async$state_machine__12865__auto____0 = (function (){
var statearr_16917 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16917[(0)] = cljs$core$async$state_machine__12865__auto__);

(statearr_16917[(1)] = (1));

return statearr_16917;
});
var cljs$core$async$state_machine__12865__auto____1 = (function (state_16897){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_16897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e16918){if((e16918 instanceof Object)){
var ex__12868__auto__ = e16918;
var statearr_16919_16933 = state_16897;
(statearr_16919_16933[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16934 = state_16897;
state_16897 = G__16934;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
cljs$core$async$state_machine__12865__auto__ = function(state_16897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12865__auto____1.call(this,state_16897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12865__auto____0;
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12865__auto____1;
return cljs$core$async$state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto___16922,out))
})();
var state__12928__auto__ = (function (){var statearr_16920 = f__12927__auto__.call(null);
(statearr_16920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto___16922);

return statearr_16920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto___16922,out))
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
var G__16936 = arguments.length;
switch (G__16936) {
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
var c__12926__auto___16984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto___16984,out){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto___16984,out){
return (function (state_16960){
var state_val_16961 = (state_16960[(1)]);
if((state_val_16961 === (7))){
var inst_16942 = (state_16960[(7)]);
var inst_16942__$1 = (state_16960[(2)]);
var inst_16943 = (inst_16942__$1 == null);
var inst_16944 = cljs.core.not.call(null,inst_16943);
var state_16960__$1 = (function (){var statearr_16962 = state_16960;
(statearr_16962[(7)] = inst_16942__$1);

return statearr_16962;
})();
if(inst_16944){
var statearr_16963_16985 = state_16960__$1;
(statearr_16963_16985[(1)] = (8));

} else {
var statearr_16964_16986 = state_16960__$1;
(statearr_16964_16986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16961 === (1))){
var inst_16937 = (0);
var state_16960__$1 = (function (){var statearr_16965 = state_16960;
(statearr_16965[(8)] = inst_16937);

return statearr_16965;
})();
var statearr_16966_16987 = state_16960__$1;
(statearr_16966_16987[(2)] = null);

(statearr_16966_16987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16961 === (4))){
var state_16960__$1 = state_16960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16960__$1,(7),ch);
} else {
if((state_val_16961 === (6))){
var inst_16955 = (state_16960[(2)]);
var state_16960__$1 = state_16960;
var statearr_16967_16988 = state_16960__$1;
(statearr_16967_16988[(2)] = inst_16955);

(statearr_16967_16988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16961 === (3))){
var inst_16957 = (state_16960[(2)]);
var inst_16958 = cljs.core.async.close_BANG_.call(null,out);
var state_16960__$1 = (function (){var statearr_16968 = state_16960;
(statearr_16968[(9)] = inst_16957);

return statearr_16968;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16960__$1,inst_16958);
} else {
if((state_val_16961 === (2))){
var inst_16937 = (state_16960[(8)]);
var inst_16939 = (inst_16937 < n);
var state_16960__$1 = state_16960;
if(cljs.core.truth_(inst_16939)){
var statearr_16969_16989 = state_16960__$1;
(statearr_16969_16989[(1)] = (4));

} else {
var statearr_16970_16990 = state_16960__$1;
(statearr_16970_16990[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16961 === (11))){
var inst_16937 = (state_16960[(8)]);
var inst_16947 = (state_16960[(2)]);
var inst_16948 = (inst_16937 + (1));
var inst_16937__$1 = inst_16948;
var state_16960__$1 = (function (){var statearr_16971 = state_16960;
(statearr_16971[(8)] = inst_16937__$1);

(statearr_16971[(10)] = inst_16947);

return statearr_16971;
})();
var statearr_16972_16991 = state_16960__$1;
(statearr_16972_16991[(2)] = null);

(statearr_16972_16991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16961 === (9))){
var state_16960__$1 = state_16960;
var statearr_16973_16992 = state_16960__$1;
(statearr_16973_16992[(2)] = null);

(statearr_16973_16992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16961 === (5))){
var state_16960__$1 = state_16960;
var statearr_16974_16993 = state_16960__$1;
(statearr_16974_16993[(2)] = null);

(statearr_16974_16993[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16961 === (10))){
var inst_16952 = (state_16960[(2)]);
var state_16960__$1 = state_16960;
var statearr_16975_16994 = state_16960__$1;
(statearr_16975_16994[(2)] = inst_16952);

(statearr_16975_16994[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16961 === (8))){
var inst_16942 = (state_16960[(7)]);
var state_16960__$1 = state_16960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16960__$1,(11),out,inst_16942);
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
});})(c__12926__auto___16984,out))
;
return ((function (switch__12864__auto__,c__12926__auto___16984,out){
return (function() {
var cljs$core$async$state_machine__12865__auto__ = null;
var cljs$core$async$state_machine__12865__auto____0 = (function (){
var statearr_16979 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16979[(0)] = cljs$core$async$state_machine__12865__auto__);

(statearr_16979[(1)] = (1));

return statearr_16979;
});
var cljs$core$async$state_machine__12865__auto____1 = (function (state_16960){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_16960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e16980){if((e16980 instanceof Object)){
var ex__12868__auto__ = e16980;
var statearr_16981_16995 = state_16960;
(statearr_16981_16995[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16996 = state_16960;
state_16960 = G__16996;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
cljs$core$async$state_machine__12865__auto__ = function(state_16960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12865__auto____1.call(this,state_16960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12865__auto____0;
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12865__auto____1;
return cljs$core$async$state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto___16984,out))
})();
var state__12928__auto__ = (function (){var statearr_16982 = f__12927__auto__.call(null);
(statearr_16982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto___16984);

return statearr_16982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto___16984,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t17004 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17004 = (function (map_LT_,f,ch,meta17005){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17005 = meta17005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17006,meta17005__$1){
var self__ = this;
var _17006__$1 = this;
return (new cljs.core.async.t17004(self__.map_LT_,self__.f,self__.ch,meta17005__$1));
});

cljs.core.async.t17004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17006){
var self__ = this;
var _17006__$1 = this;
return self__.meta17005;
});

cljs.core.async.t17004.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17004.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17004.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t17004.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17004.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t17007 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17007 = (function (map_LT_,f,ch,meta17005,_,fn1,meta17008){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17005 = meta17005;
this._ = _;
this.fn1 = fn1;
this.meta17008 = meta17008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17009,meta17008__$1){
var self__ = this;
var _17009__$1 = this;
return (new cljs.core.async.t17007(self__.map_LT_,self__.f,self__.ch,self__.meta17005,self__._,self__.fn1,meta17008__$1));
});})(___$1))
;

cljs.core.async.t17007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17009){
var self__ = this;
var _17009__$1 = this;
return self__.meta17008;
});})(___$1))
;

cljs.core.async.t17007.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17007.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t17007.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16997_SHARP_){
return f1.call(null,(((p1__16997_SHARP_ == null))?null:self__.f.call(null,p1__16997_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t17007.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17005","meta17005",-832257897,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17008","meta17008",-1536455316,null)], null);
});})(___$1))
;

cljs.core.async.t17007.cljs$lang$type = true;

cljs.core.async.t17007.cljs$lang$ctorStr = "cljs.core.async/t17007";

cljs.core.async.t17007.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t17007");
});})(___$1))
;

cljs.core.async.__GT_t17007 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t17007(map_LT___$1,f__$1,ch__$1,meta17005__$1,___$2,fn1__$1,meta17008){
return (new cljs.core.async.t17007(map_LT___$1,f__$1,ch__$1,meta17005__$1,___$2,fn1__$1,meta17008));
});})(___$1))
;

}

return (new cljs.core.async.t17007(self__.map_LT_,self__.f,self__.ch,self__.meta17005,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t17004.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17004.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t17004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17005","meta17005",-832257897,null)], null);
});

cljs.core.async.t17004.cljs$lang$type = true;

cljs.core.async.t17004.cljs$lang$ctorStr = "cljs.core.async/t17004";

cljs.core.async.t17004.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t17004");
});

cljs.core.async.__GT_t17004 = (function cljs$core$async$map_LT__$___GT_t17004(map_LT___$1,f__$1,ch__$1,meta17005){
return (new cljs.core.async.t17004(map_LT___$1,f__$1,ch__$1,meta17005));
});

}

return (new cljs.core.async.t17004(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t17013 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17013 = (function (map_GT_,f,ch,meta17014){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta17014 = meta17014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17015,meta17014__$1){
var self__ = this;
var _17015__$1 = this;
return (new cljs.core.async.t17013(self__.map_GT_,self__.f,self__.ch,meta17014__$1));
});

cljs.core.async.t17013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17015){
var self__ = this;
var _17015__$1 = this;
return self__.meta17014;
});

cljs.core.async.t17013.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17013.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17013.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17013.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t17013.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17013.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t17013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17014","meta17014",926873232,null)], null);
});

cljs.core.async.t17013.cljs$lang$type = true;

cljs.core.async.t17013.cljs$lang$ctorStr = "cljs.core.async/t17013";

cljs.core.async.t17013.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t17013");
});

cljs.core.async.__GT_t17013 = (function cljs$core$async$map_GT__$___GT_t17013(map_GT___$1,f__$1,ch__$1,meta17014){
return (new cljs.core.async.t17013(map_GT___$1,f__$1,ch__$1,meta17014));
});

}

return (new cljs.core.async.t17013(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t17019 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17019 = (function (filter_GT_,p,ch,meta17020){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta17020 = meta17020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17021,meta17020__$1){
var self__ = this;
var _17021__$1 = this;
return (new cljs.core.async.t17019(self__.filter_GT_,self__.p,self__.ch,meta17020__$1));
});

cljs.core.async.t17019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17021){
var self__ = this;
var _17021__$1 = this;
return self__.meta17020;
});

cljs.core.async.t17019.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t17019.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t17019.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t17019.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t17019.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t17019.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t17019.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t17019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17020","meta17020",1326758879,null)], null);
});

cljs.core.async.t17019.cljs$lang$type = true;

cljs.core.async.t17019.cljs$lang$ctorStr = "cljs.core.async/t17019";

cljs.core.async.t17019.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"cljs.core.async/t17019");
});

cljs.core.async.__GT_t17019 = (function cljs$core$async$filter_GT__$___GT_t17019(filter_GT___$1,p__$1,ch__$1,meta17020){
return (new cljs.core.async.t17019(filter_GT___$1,p__$1,ch__$1,meta17020));
});

}

return (new cljs.core.async.t17019(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17023 = arguments.length;
switch (G__17023) {
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
var c__12926__auto___17066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto___17066,out){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto___17066,out){
return (function (state_17044){
var state_val_17045 = (state_17044[(1)]);
if((state_val_17045 === (7))){
var inst_17040 = (state_17044[(2)]);
var state_17044__$1 = state_17044;
var statearr_17046_17067 = state_17044__$1;
(statearr_17046_17067[(2)] = inst_17040);

(statearr_17046_17067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17045 === (1))){
var state_17044__$1 = state_17044;
var statearr_17047_17068 = state_17044__$1;
(statearr_17047_17068[(2)] = null);

(statearr_17047_17068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17045 === (4))){
var inst_17026 = (state_17044[(7)]);
var inst_17026__$1 = (state_17044[(2)]);
var inst_17027 = (inst_17026__$1 == null);
var state_17044__$1 = (function (){var statearr_17048 = state_17044;
(statearr_17048[(7)] = inst_17026__$1);

return statearr_17048;
})();
if(cljs.core.truth_(inst_17027)){
var statearr_17049_17069 = state_17044__$1;
(statearr_17049_17069[(1)] = (5));

} else {
var statearr_17050_17070 = state_17044__$1;
(statearr_17050_17070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17045 === (6))){
var inst_17026 = (state_17044[(7)]);
var inst_17031 = p.call(null,inst_17026);
var state_17044__$1 = state_17044;
if(cljs.core.truth_(inst_17031)){
var statearr_17051_17071 = state_17044__$1;
(statearr_17051_17071[(1)] = (8));

} else {
var statearr_17052_17072 = state_17044__$1;
(statearr_17052_17072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17045 === (3))){
var inst_17042 = (state_17044[(2)]);
var state_17044__$1 = state_17044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17044__$1,inst_17042);
} else {
if((state_val_17045 === (2))){
var state_17044__$1 = state_17044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17044__$1,(4),ch);
} else {
if((state_val_17045 === (11))){
var inst_17034 = (state_17044[(2)]);
var state_17044__$1 = state_17044;
var statearr_17053_17073 = state_17044__$1;
(statearr_17053_17073[(2)] = inst_17034);

(statearr_17053_17073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17045 === (9))){
var state_17044__$1 = state_17044;
var statearr_17054_17074 = state_17044__$1;
(statearr_17054_17074[(2)] = null);

(statearr_17054_17074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17045 === (5))){
var inst_17029 = cljs.core.async.close_BANG_.call(null,out);
var state_17044__$1 = state_17044;
var statearr_17055_17075 = state_17044__$1;
(statearr_17055_17075[(2)] = inst_17029);

(statearr_17055_17075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17045 === (10))){
var inst_17037 = (state_17044[(2)]);
var state_17044__$1 = (function (){var statearr_17056 = state_17044;
(statearr_17056[(8)] = inst_17037);

return statearr_17056;
})();
var statearr_17057_17076 = state_17044__$1;
(statearr_17057_17076[(2)] = null);

(statearr_17057_17076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17045 === (8))){
var inst_17026 = (state_17044[(7)]);
var state_17044__$1 = state_17044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17044__$1,(11),out,inst_17026);
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
});})(c__12926__auto___17066,out))
;
return ((function (switch__12864__auto__,c__12926__auto___17066,out){
return (function() {
var cljs$core$async$state_machine__12865__auto__ = null;
var cljs$core$async$state_machine__12865__auto____0 = (function (){
var statearr_17061 = [null,null,null,null,null,null,null,null,null];
(statearr_17061[(0)] = cljs$core$async$state_machine__12865__auto__);

(statearr_17061[(1)] = (1));

return statearr_17061;
});
var cljs$core$async$state_machine__12865__auto____1 = (function (state_17044){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_17044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e17062){if((e17062 instanceof Object)){
var ex__12868__auto__ = e17062;
var statearr_17063_17077 = state_17044;
(statearr_17063_17077[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17078 = state_17044;
state_17044 = G__17078;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
cljs$core$async$state_machine__12865__auto__ = function(state_17044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12865__auto____1.call(this,state_17044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12865__auto____0;
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12865__auto____1;
return cljs$core$async$state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto___17066,out))
})();
var state__12928__auto__ = (function (){var statearr_17064 = f__12927__auto__.call(null);
(statearr_17064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto___17066);

return statearr_17064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto___17066,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__17080 = arguments.length;
switch (G__17080) {
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
var c__12926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto__){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto__){
return (function (state_17247){
var state_val_17248 = (state_17247[(1)]);
if((state_val_17248 === (7))){
var inst_17243 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
var statearr_17249_17290 = state_17247__$1;
(statearr_17249_17290[(2)] = inst_17243);

(statearr_17249_17290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (20))){
var inst_17213 = (state_17247[(7)]);
var inst_17224 = (state_17247[(2)]);
var inst_17225 = cljs.core.next.call(null,inst_17213);
var inst_17199 = inst_17225;
var inst_17200 = null;
var inst_17201 = (0);
var inst_17202 = (0);
var state_17247__$1 = (function (){var statearr_17250 = state_17247;
(statearr_17250[(8)] = inst_17201);

(statearr_17250[(9)] = inst_17224);

(statearr_17250[(10)] = inst_17200);

(statearr_17250[(11)] = inst_17202);

(statearr_17250[(12)] = inst_17199);

return statearr_17250;
})();
var statearr_17251_17291 = state_17247__$1;
(statearr_17251_17291[(2)] = null);

(statearr_17251_17291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (1))){
var state_17247__$1 = state_17247;
var statearr_17252_17292 = state_17247__$1;
(statearr_17252_17292[(2)] = null);

(statearr_17252_17292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (4))){
var inst_17188 = (state_17247[(13)]);
var inst_17188__$1 = (state_17247[(2)]);
var inst_17189 = (inst_17188__$1 == null);
var state_17247__$1 = (function (){var statearr_17253 = state_17247;
(statearr_17253[(13)] = inst_17188__$1);

return statearr_17253;
})();
if(cljs.core.truth_(inst_17189)){
var statearr_17254_17293 = state_17247__$1;
(statearr_17254_17293[(1)] = (5));

} else {
var statearr_17255_17294 = state_17247__$1;
(statearr_17255_17294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (15))){
var state_17247__$1 = state_17247;
var statearr_17259_17295 = state_17247__$1;
(statearr_17259_17295[(2)] = null);

(statearr_17259_17295[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (21))){
var state_17247__$1 = state_17247;
var statearr_17260_17296 = state_17247__$1;
(statearr_17260_17296[(2)] = null);

(statearr_17260_17296[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (13))){
var inst_17201 = (state_17247[(8)]);
var inst_17200 = (state_17247[(10)]);
var inst_17202 = (state_17247[(11)]);
var inst_17199 = (state_17247[(12)]);
var inst_17209 = (state_17247[(2)]);
var inst_17210 = (inst_17202 + (1));
var tmp17256 = inst_17201;
var tmp17257 = inst_17200;
var tmp17258 = inst_17199;
var inst_17199__$1 = tmp17258;
var inst_17200__$1 = tmp17257;
var inst_17201__$1 = tmp17256;
var inst_17202__$1 = inst_17210;
var state_17247__$1 = (function (){var statearr_17261 = state_17247;
(statearr_17261[(14)] = inst_17209);

(statearr_17261[(8)] = inst_17201__$1);

(statearr_17261[(10)] = inst_17200__$1);

(statearr_17261[(11)] = inst_17202__$1);

(statearr_17261[(12)] = inst_17199__$1);

return statearr_17261;
})();
var statearr_17262_17297 = state_17247__$1;
(statearr_17262_17297[(2)] = null);

(statearr_17262_17297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (22))){
var state_17247__$1 = state_17247;
var statearr_17263_17298 = state_17247__$1;
(statearr_17263_17298[(2)] = null);

(statearr_17263_17298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (6))){
var inst_17188 = (state_17247[(13)]);
var inst_17197 = f.call(null,inst_17188);
var inst_17198 = cljs.core.seq.call(null,inst_17197);
var inst_17199 = inst_17198;
var inst_17200 = null;
var inst_17201 = (0);
var inst_17202 = (0);
var state_17247__$1 = (function (){var statearr_17264 = state_17247;
(statearr_17264[(8)] = inst_17201);

(statearr_17264[(10)] = inst_17200);

(statearr_17264[(11)] = inst_17202);

(statearr_17264[(12)] = inst_17199);

return statearr_17264;
})();
var statearr_17265_17299 = state_17247__$1;
(statearr_17265_17299[(2)] = null);

(statearr_17265_17299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (17))){
var inst_17213 = (state_17247[(7)]);
var inst_17217 = cljs.core.chunk_first.call(null,inst_17213);
var inst_17218 = cljs.core.chunk_rest.call(null,inst_17213);
var inst_17219 = cljs.core.count.call(null,inst_17217);
var inst_17199 = inst_17218;
var inst_17200 = inst_17217;
var inst_17201 = inst_17219;
var inst_17202 = (0);
var state_17247__$1 = (function (){var statearr_17266 = state_17247;
(statearr_17266[(8)] = inst_17201);

(statearr_17266[(10)] = inst_17200);

(statearr_17266[(11)] = inst_17202);

(statearr_17266[(12)] = inst_17199);

return statearr_17266;
})();
var statearr_17267_17300 = state_17247__$1;
(statearr_17267_17300[(2)] = null);

(statearr_17267_17300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (3))){
var inst_17245 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17247__$1,inst_17245);
} else {
if((state_val_17248 === (12))){
var inst_17233 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
var statearr_17268_17301 = state_17247__$1;
(statearr_17268_17301[(2)] = inst_17233);

(statearr_17268_17301[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (2))){
var state_17247__$1 = state_17247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17247__$1,(4),in$);
} else {
if((state_val_17248 === (23))){
var inst_17241 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
var statearr_17269_17302 = state_17247__$1;
(statearr_17269_17302[(2)] = inst_17241);

(statearr_17269_17302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (19))){
var inst_17228 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
var statearr_17270_17303 = state_17247__$1;
(statearr_17270_17303[(2)] = inst_17228);

(statearr_17270_17303[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (11))){
var inst_17213 = (state_17247[(7)]);
var inst_17199 = (state_17247[(12)]);
var inst_17213__$1 = cljs.core.seq.call(null,inst_17199);
var state_17247__$1 = (function (){var statearr_17271 = state_17247;
(statearr_17271[(7)] = inst_17213__$1);

return statearr_17271;
})();
if(inst_17213__$1){
var statearr_17272_17304 = state_17247__$1;
(statearr_17272_17304[(1)] = (14));

} else {
var statearr_17273_17305 = state_17247__$1;
(statearr_17273_17305[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (9))){
var inst_17235 = (state_17247[(2)]);
var inst_17236 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17247__$1 = (function (){var statearr_17274 = state_17247;
(statearr_17274[(15)] = inst_17235);

return statearr_17274;
})();
if(cljs.core.truth_(inst_17236)){
var statearr_17275_17306 = state_17247__$1;
(statearr_17275_17306[(1)] = (21));

} else {
var statearr_17276_17307 = state_17247__$1;
(statearr_17276_17307[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (5))){
var inst_17191 = cljs.core.async.close_BANG_.call(null,out);
var state_17247__$1 = state_17247;
var statearr_17277_17308 = state_17247__$1;
(statearr_17277_17308[(2)] = inst_17191);

(statearr_17277_17308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (14))){
var inst_17213 = (state_17247[(7)]);
var inst_17215 = cljs.core.chunked_seq_QMARK_.call(null,inst_17213);
var state_17247__$1 = state_17247;
if(inst_17215){
var statearr_17278_17309 = state_17247__$1;
(statearr_17278_17309[(1)] = (17));

} else {
var statearr_17279_17310 = state_17247__$1;
(statearr_17279_17310[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (16))){
var inst_17231 = (state_17247[(2)]);
var state_17247__$1 = state_17247;
var statearr_17280_17311 = state_17247__$1;
(statearr_17280_17311[(2)] = inst_17231);

(statearr_17280_17311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17248 === (10))){
var inst_17200 = (state_17247[(10)]);
var inst_17202 = (state_17247[(11)]);
var inst_17207 = cljs.core._nth.call(null,inst_17200,inst_17202);
var state_17247__$1 = state_17247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17247__$1,(13),out,inst_17207);
} else {
if((state_val_17248 === (18))){
var inst_17213 = (state_17247[(7)]);
var inst_17222 = cljs.core.first.call(null,inst_17213);
var state_17247__$1 = state_17247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17247__$1,(20),out,inst_17222);
} else {
if((state_val_17248 === (8))){
var inst_17201 = (state_17247[(8)]);
var inst_17202 = (state_17247[(11)]);
var inst_17204 = (inst_17202 < inst_17201);
var inst_17205 = inst_17204;
var state_17247__$1 = state_17247;
if(cljs.core.truth_(inst_17205)){
var statearr_17281_17312 = state_17247__$1;
(statearr_17281_17312[(1)] = (10));

} else {
var statearr_17282_17313 = state_17247__$1;
(statearr_17282_17313[(1)] = (11));

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
});})(c__12926__auto__))
;
return ((function (switch__12864__auto__,c__12926__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12865__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12865__auto____0 = (function (){
var statearr_17286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17286[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12865__auto__);

(statearr_17286[(1)] = (1));

return statearr_17286;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12865__auto____1 = (function (state_17247){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_17247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e17287){if((e17287 instanceof Object)){
var ex__12868__auto__ = e17287;
var statearr_17288_17314 = state_17247;
(statearr_17288_17314[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17315 = state_17247;
state_17247 = G__17315;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12865__auto__ = function(state_17247){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12865__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12865__auto____1.call(this,state_17247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12865__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12865__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto__))
})();
var state__12928__auto__ = (function (){var statearr_17289 = f__12927__auto__.call(null);
(statearr_17289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto__);

return statearr_17289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto__))
);

return c__12926__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__17317 = arguments.length;
switch (G__17317) {
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
var G__17320 = arguments.length;
switch (G__17320) {
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
var G__17323 = arguments.length;
switch (G__17323) {
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
var c__12926__auto___17373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto___17373,out){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto___17373,out){
return (function (state_17347){
var state_val_17348 = (state_17347[(1)]);
if((state_val_17348 === (7))){
var inst_17342 = (state_17347[(2)]);
var state_17347__$1 = state_17347;
var statearr_17349_17374 = state_17347__$1;
(statearr_17349_17374[(2)] = inst_17342);

(statearr_17349_17374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (1))){
var inst_17324 = null;
var state_17347__$1 = (function (){var statearr_17350 = state_17347;
(statearr_17350[(7)] = inst_17324);

return statearr_17350;
})();
var statearr_17351_17375 = state_17347__$1;
(statearr_17351_17375[(2)] = null);

(statearr_17351_17375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (4))){
var inst_17327 = (state_17347[(8)]);
var inst_17327__$1 = (state_17347[(2)]);
var inst_17328 = (inst_17327__$1 == null);
var inst_17329 = cljs.core.not.call(null,inst_17328);
var state_17347__$1 = (function (){var statearr_17352 = state_17347;
(statearr_17352[(8)] = inst_17327__$1);

return statearr_17352;
})();
if(inst_17329){
var statearr_17353_17376 = state_17347__$1;
(statearr_17353_17376[(1)] = (5));

} else {
var statearr_17354_17377 = state_17347__$1;
(statearr_17354_17377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (6))){
var state_17347__$1 = state_17347;
var statearr_17355_17378 = state_17347__$1;
(statearr_17355_17378[(2)] = null);

(statearr_17355_17378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (3))){
var inst_17344 = (state_17347[(2)]);
var inst_17345 = cljs.core.async.close_BANG_.call(null,out);
var state_17347__$1 = (function (){var statearr_17356 = state_17347;
(statearr_17356[(9)] = inst_17344);

return statearr_17356;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17347__$1,inst_17345);
} else {
if((state_val_17348 === (2))){
var state_17347__$1 = state_17347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17347__$1,(4),ch);
} else {
if((state_val_17348 === (11))){
var inst_17327 = (state_17347[(8)]);
var inst_17336 = (state_17347[(2)]);
var inst_17324 = inst_17327;
var state_17347__$1 = (function (){var statearr_17357 = state_17347;
(statearr_17357[(10)] = inst_17336);

(statearr_17357[(7)] = inst_17324);

return statearr_17357;
})();
var statearr_17358_17379 = state_17347__$1;
(statearr_17358_17379[(2)] = null);

(statearr_17358_17379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (9))){
var inst_17327 = (state_17347[(8)]);
var state_17347__$1 = state_17347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17347__$1,(11),out,inst_17327);
} else {
if((state_val_17348 === (5))){
var inst_17327 = (state_17347[(8)]);
var inst_17324 = (state_17347[(7)]);
var inst_17331 = cljs.core._EQ_.call(null,inst_17327,inst_17324);
var state_17347__$1 = state_17347;
if(inst_17331){
var statearr_17360_17380 = state_17347__$1;
(statearr_17360_17380[(1)] = (8));

} else {
var statearr_17361_17381 = state_17347__$1;
(statearr_17361_17381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (10))){
var inst_17339 = (state_17347[(2)]);
var state_17347__$1 = state_17347;
var statearr_17362_17382 = state_17347__$1;
(statearr_17362_17382[(2)] = inst_17339);

(statearr_17362_17382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (8))){
var inst_17324 = (state_17347[(7)]);
var tmp17359 = inst_17324;
var inst_17324__$1 = tmp17359;
var state_17347__$1 = (function (){var statearr_17363 = state_17347;
(statearr_17363[(7)] = inst_17324__$1);

return statearr_17363;
})();
var statearr_17364_17383 = state_17347__$1;
(statearr_17364_17383[(2)] = null);

(statearr_17364_17383[(1)] = (2));


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
});})(c__12926__auto___17373,out))
;
return ((function (switch__12864__auto__,c__12926__auto___17373,out){
return (function() {
var cljs$core$async$state_machine__12865__auto__ = null;
var cljs$core$async$state_machine__12865__auto____0 = (function (){
var statearr_17368 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17368[(0)] = cljs$core$async$state_machine__12865__auto__);

(statearr_17368[(1)] = (1));

return statearr_17368;
});
var cljs$core$async$state_machine__12865__auto____1 = (function (state_17347){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_17347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e17369){if((e17369 instanceof Object)){
var ex__12868__auto__ = e17369;
var statearr_17370_17384 = state_17347;
(statearr_17370_17384[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17385 = state_17347;
state_17347 = G__17385;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
cljs$core$async$state_machine__12865__auto__ = function(state_17347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12865__auto____1.call(this,state_17347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12865__auto____0;
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12865__auto____1;
return cljs$core$async$state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto___17373,out))
})();
var state__12928__auto__ = (function (){var statearr_17371 = f__12927__auto__.call(null);
(statearr_17371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto___17373);

return statearr_17371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto___17373,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__17387 = arguments.length;
switch (G__17387) {
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
var c__12926__auto___17456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto___17456,out){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto___17456,out){
return (function (state_17425){
var state_val_17426 = (state_17425[(1)]);
if((state_val_17426 === (7))){
var inst_17421 = (state_17425[(2)]);
var state_17425__$1 = state_17425;
var statearr_17427_17457 = state_17425__$1;
(statearr_17427_17457[(2)] = inst_17421);

(statearr_17427_17457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17426 === (1))){
var inst_17388 = (new Array(n));
var inst_17389 = inst_17388;
var inst_17390 = (0);
var state_17425__$1 = (function (){var statearr_17428 = state_17425;
(statearr_17428[(7)] = inst_17390);

(statearr_17428[(8)] = inst_17389);

return statearr_17428;
})();
var statearr_17429_17458 = state_17425__$1;
(statearr_17429_17458[(2)] = null);

(statearr_17429_17458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17426 === (4))){
var inst_17393 = (state_17425[(9)]);
var inst_17393__$1 = (state_17425[(2)]);
var inst_17394 = (inst_17393__$1 == null);
var inst_17395 = cljs.core.not.call(null,inst_17394);
var state_17425__$1 = (function (){var statearr_17430 = state_17425;
(statearr_17430[(9)] = inst_17393__$1);

return statearr_17430;
})();
if(inst_17395){
var statearr_17431_17459 = state_17425__$1;
(statearr_17431_17459[(1)] = (5));

} else {
var statearr_17432_17460 = state_17425__$1;
(statearr_17432_17460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17426 === (15))){
var inst_17415 = (state_17425[(2)]);
var state_17425__$1 = state_17425;
var statearr_17433_17461 = state_17425__$1;
(statearr_17433_17461[(2)] = inst_17415);

(statearr_17433_17461[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17426 === (13))){
var state_17425__$1 = state_17425;
var statearr_17434_17462 = state_17425__$1;
(statearr_17434_17462[(2)] = null);

(statearr_17434_17462[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17426 === (6))){
var inst_17390 = (state_17425[(7)]);
var inst_17411 = (inst_17390 > (0));
var state_17425__$1 = state_17425;
if(cljs.core.truth_(inst_17411)){
var statearr_17435_17463 = state_17425__$1;
(statearr_17435_17463[(1)] = (12));

} else {
var statearr_17436_17464 = state_17425__$1;
(statearr_17436_17464[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17426 === (3))){
var inst_17423 = (state_17425[(2)]);
var state_17425__$1 = state_17425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17425__$1,inst_17423);
} else {
if((state_val_17426 === (12))){
var inst_17389 = (state_17425[(8)]);
var inst_17413 = cljs.core.vec.call(null,inst_17389);
var state_17425__$1 = state_17425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17425__$1,(15),out,inst_17413);
} else {
if((state_val_17426 === (2))){
var state_17425__$1 = state_17425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17425__$1,(4),ch);
} else {
if((state_val_17426 === (11))){
var inst_17405 = (state_17425[(2)]);
var inst_17406 = (new Array(n));
var inst_17389 = inst_17406;
var inst_17390 = (0);
var state_17425__$1 = (function (){var statearr_17437 = state_17425;
(statearr_17437[(7)] = inst_17390);

(statearr_17437[(8)] = inst_17389);

(statearr_17437[(10)] = inst_17405);

return statearr_17437;
})();
var statearr_17438_17465 = state_17425__$1;
(statearr_17438_17465[(2)] = null);

(statearr_17438_17465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17426 === (9))){
var inst_17389 = (state_17425[(8)]);
var inst_17403 = cljs.core.vec.call(null,inst_17389);
var state_17425__$1 = state_17425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17425__$1,(11),out,inst_17403);
} else {
if((state_val_17426 === (5))){
var inst_17390 = (state_17425[(7)]);
var inst_17398 = (state_17425[(11)]);
var inst_17389 = (state_17425[(8)]);
var inst_17393 = (state_17425[(9)]);
var inst_17397 = (inst_17389[inst_17390] = inst_17393);
var inst_17398__$1 = (inst_17390 + (1));
var inst_17399 = (inst_17398__$1 < n);
var state_17425__$1 = (function (){var statearr_17439 = state_17425;
(statearr_17439[(12)] = inst_17397);

(statearr_17439[(11)] = inst_17398__$1);

return statearr_17439;
})();
if(cljs.core.truth_(inst_17399)){
var statearr_17440_17466 = state_17425__$1;
(statearr_17440_17466[(1)] = (8));

} else {
var statearr_17441_17467 = state_17425__$1;
(statearr_17441_17467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17426 === (14))){
var inst_17418 = (state_17425[(2)]);
var inst_17419 = cljs.core.async.close_BANG_.call(null,out);
var state_17425__$1 = (function (){var statearr_17443 = state_17425;
(statearr_17443[(13)] = inst_17418);

return statearr_17443;
})();
var statearr_17444_17468 = state_17425__$1;
(statearr_17444_17468[(2)] = inst_17419);

(statearr_17444_17468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17426 === (10))){
var inst_17409 = (state_17425[(2)]);
var state_17425__$1 = state_17425;
var statearr_17445_17469 = state_17425__$1;
(statearr_17445_17469[(2)] = inst_17409);

(statearr_17445_17469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17426 === (8))){
var inst_17398 = (state_17425[(11)]);
var inst_17389 = (state_17425[(8)]);
var tmp17442 = inst_17389;
var inst_17389__$1 = tmp17442;
var inst_17390 = inst_17398;
var state_17425__$1 = (function (){var statearr_17446 = state_17425;
(statearr_17446[(7)] = inst_17390);

(statearr_17446[(8)] = inst_17389__$1);

return statearr_17446;
})();
var statearr_17447_17470 = state_17425__$1;
(statearr_17447_17470[(2)] = null);

(statearr_17447_17470[(1)] = (2));


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
});})(c__12926__auto___17456,out))
;
return ((function (switch__12864__auto__,c__12926__auto___17456,out){
return (function() {
var cljs$core$async$state_machine__12865__auto__ = null;
var cljs$core$async$state_machine__12865__auto____0 = (function (){
var statearr_17451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17451[(0)] = cljs$core$async$state_machine__12865__auto__);

(statearr_17451[(1)] = (1));

return statearr_17451;
});
var cljs$core$async$state_machine__12865__auto____1 = (function (state_17425){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_17425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e17452){if((e17452 instanceof Object)){
var ex__12868__auto__ = e17452;
var statearr_17453_17471 = state_17425;
(statearr_17453_17471[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17472 = state_17425;
state_17425 = G__17472;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
cljs$core$async$state_machine__12865__auto__ = function(state_17425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12865__auto____1.call(this,state_17425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12865__auto____0;
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12865__auto____1;
return cljs$core$async$state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto___17456,out))
})();
var state__12928__auto__ = (function (){var statearr_17454 = f__12927__auto__.call(null);
(statearr_17454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto___17456);

return statearr_17454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto___17456,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__17474 = arguments.length;
switch (G__17474) {
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
var c__12926__auto___17547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto___17547,out){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto___17547,out){
return (function (state_17516){
var state_val_17517 = (state_17516[(1)]);
if((state_val_17517 === (7))){
var inst_17512 = (state_17516[(2)]);
var state_17516__$1 = state_17516;
var statearr_17518_17548 = state_17516__$1;
(statearr_17518_17548[(2)] = inst_17512);

(statearr_17518_17548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17517 === (1))){
var inst_17475 = [];
var inst_17476 = inst_17475;
var inst_17477 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17516__$1 = (function (){var statearr_17519 = state_17516;
(statearr_17519[(7)] = inst_17477);

(statearr_17519[(8)] = inst_17476);

return statearr_17519;
})();
var statearr_17520_17549 = state_17516__$1;
(statearr_17520_17549[(2)] = null);

(statearr_17520_17549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17517 === (4))){
var inst_17480 = (state_17516[(9)]);
var inst_17480__$1 = (state_17516[(2)]);
var inst_17481 = (inst_17480__$1 == null);
var inst_17482 = cljs.core.not.call(null,inst_17481);
var state_17516__$1 = (function (){var statearr_17521 = state_17516;
(statearr_17521[(9)] = inst_17480__$1);

return statearr_17521;
})();
if(inst_17482){
var statearr_17522_17550 = state_17516__$1;
(statearr_17522_17550[(1)] = (5));

} else {
var statearr_17523_17551 = state_17516__$1;
(statearr_17523_17551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17517 === (15))){
var inst_17506 = (state_17516[(2)]);
var state_17516__$1 = state_17516;
var statearr_17524_17552 = state_17516__$1;
(statearr_17524_17552[(2)] = inst_17506);

(statearr_17524_17552[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17517 === (13))){
var state_17516__$1 = state_17516;
var statearr_17525_17553 = state_17516__$1;
(statearr_17525_17553[(2)] = null);

(statearr_17525_17553[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17517 === (6))){
var inst_17476 = (state_17516[(8)]);
var inst_17501 = inst_17476.length;
var inst_17502 = (inst_17501 > (0));
var state_17516__$1 = state_17516;
if(cljs.core.truth_(inst_17502)){
var statearr_17526_17554 = state_17516__$1;
(statearr_17526_17554[(1)] = (12));

} else {
var statearr_17527_17555 = state_17516__$1;
(statearr_17527_17555[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17517 === (3))){
var inst_17514 = (state_17516[(2)]);
var state_17516__$1 = state_17516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17516__$1,inst_17514);
} else {
if((state_val_17517 === (12))){
var inst_17476 = (state_17516[(8)]);
var inst_17504 = cljs.core.vec.call(null,inst_17476);
var state_17516__$1 = state_17516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17516__$1,(15),out,inst_17504);
} else {
if((state_val_17517 === (2))){
var state_17516__$1 = state_17516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17516__$1,(4),ch);
} else {
if((state_val_17517 === (11))){
var inst_17484 = (state_17516[(10)]);
var inst_17480 = (state_17516[(9)]);
var inst_17494 = (state_17516[(2)]);
var inst_17495 = [];
var inst_17496 = inst_17495.push(inst_17480);
var inst_17476 = inst_17495;
var inst_17477 = inst_17484;
var state_17516__$1 = (function (){var statearr_17528 = state_17516;
(statearr_17528[(7)] = inst_17477);

(statearr_17528[(8)] = inst_17476);

(statearr_17528[(11)] = inst_17494);

(statearr_17528[(12)] = inst_17496);

return statearr_17528;
})();
var statearr_17529_17556 = state_17516__$1;
(statearr_17529_17556[(2)] = null);

(statearr_17529_17556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17517 === (9))){
var inst_17476 = (state_17516[(8)]);
var inst_17492 = cljs.core.vec.call(null,inst_17476);
var state_17516__$1 = state_17516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17516__$1,(11),out,inst_17492);
} else {
if((state_val_17517 === (5))){
var inst_17484 = (state_17516[(10)]);
var inst_17480 = (state_17516[(9)]);
var inst_17477 = (state_17516[(7)]);
var inst_17484__$1 = f.call(null,inst_17480);
var inst_17485 = cljs.core._EQ_.call(null,inst_17484__$1,inst_17477);
var inst_17486 = cljs.core.keyword_identical_QMARK_.call(null,inst_17477,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17487 = (inst_17485) || (inst_17486);
var state_17516__$1 = (function (){var statearr_17530 = state_17516;
(statearr_17530[(10)] = inst_17484__$1);

return statearr_17530;
})();
if(cljs.core.truth_(inst_17487)){
var statearr_17531_17557 = state_17516__$1;
(statearr_17531_17557[(1)] = (8));

} else {
var statearr_17532_17558 = state_17516__$1;
(statearr_17532_17558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17517 === (14))){
var inst_17509 = (state_17516[(2)]);
var inst_17510 = cljs.core.async.close_BANG_.call(null,out);
var state_17516__$1 = (function (){var statearr_17534 = state_17516;
(statearr_17534[(13)] = inst_17509);

return statearr_17534;
})();
var statearr_17535_17559 = state_17516__$1;
(statearr_17535_17559[(2)] = inst_17510);

(statearr_17535_17559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17517 === (10))){
var inst_17499 = (state_17516[(2)]);
var state_17516__$1 = state_17516;
var statearr_17536_17560 = state_17516__$1;
(statearr_17536_17560[(2)] = inst_17499);

(statearr_17536_17560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17517 === (8))){
var inst_17484 = (state_17516[(10)]);
var inst_17480 = (state_17516[(9)]);
var inst_17476 = (state_17516[(8)]);
var inst_17489 = inst_17476.push(inst_17480);
var tmp17533 = inst_17476;
var inst_17476__$1 = tmp17533;
var inst_17477 = inst_17484;
var state_17516__$1 = (function (){var statearr_17537 = state_17516;
(statearr_17537[(14)] = inst_17489);

(statearr_17537[(7)] = inst_17477);

(statearr_17537[(8)] = inst_17476__$1);

return statearr_17537;
})();
var statearr_17538_17561 = state_17516__$1;
(statearr_17538_17561[(2)] = null);

(statearr_17538_17561[(1)] = (2));


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
});})(c__12926__auto___17547,out))
;
return ((function (switch__12864__auto__,c__12926__auto___17547,out){
return (function() {
var cljs$core$async$state_machine__12865__auto__ = null;
var cljs$core$async$state_machine__12865__auto____0 = (function (){
var statearr_17542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17542[(0)] = cljs$core$async$state_machine__12865__auto__);

(statearr_17542[(1)] = (1));

return statearr_17542;
});
var cljs$core$async$state_machine__12865__auto____1 = (function (state_17516){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_17516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e17543){if((e17543 instanceof Object)){
var ex__12868__auto__ = e17543;
var statearr_17544_17562 = state_17516;
(statearr_17544_17562[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17563 = state_17516;
state_17516 = G__17563;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
cljs$core$async$state_machine__12865__auto__ = function(state_17516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12865__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12865__auto____1.call(this,state_17516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12865__auto____0;
cljs$core$async$state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12865__auto____1;
return cljs$core$async$state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto___17547,out))
})();
var state__12928__auto__ = (function (){var statearr_17545 = f__12927__auto__.call(null);
(statearr_17545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto___17547);

return statearr_17545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto___17547,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
