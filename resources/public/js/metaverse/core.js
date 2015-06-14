// Compiled by ClojureScript 0.0-3308 {}
goog.provide('metaverse.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('metaverse.util');
metaverse.core.render = (function metaverse$core$render(ts,renderer,scene,camera){
requestAnimationFrame((function (p1__18947_SHARP_){
return metaverse$core$render.call(null,p1__18947_SHARP_,renderer,scene,camera);
}));

return renderer.render(scene,camera);
});
metaverse.core.add_single_cube = (function metaverse$core$add_single_cube(c){
var geom = (new THREE.BoxGeometry((1),(1),(1)));
var material = (new THREE.MeshBasicMaterial({"color": (15746048)}));
var cube = (new THREE.Mesh(geom,material));
var c__7634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto__,geom,material,cube){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto__,geom,material,cube){
return (function (state_18975){
var state_val_18976 = (state_18975[(1)]);
if((state_val_18976 === (1))){
var inst_18966 = [new cljs.core.Keyword(null,"geometry","geometry",-405034994)];
var inst_18967 = [new cljs.core.Keyword(null,"0x0000","0x0000",1541547801)];
var inst_18968 = [cube];
var inst_18969 = cljs.core.PersistentHashMap.fromArrays(inst_18967,inst_18968);
var inst_18970 = [inst_18969];
var inst_18971 = cljs.core.PersistentHashMap.fromArrays(inst_18966,inst_18970);
var state_18975__$1 = state_18975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18975__$1,(2),c,inst_18971);
} else {
if((state_val_18976 === (2))){
var inst_18973 = (state_18975[(2)]);
var state_18975__$1 = state_18975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18975__$1,inst_18973);
} else {
return null;
}
}
});})(c__7634__auto__,geom,material,cube))
;
return ((function (switch__7572__auto__,c__7634__auto__,geom,material,cube){
return (function() {
var metaverse$core$add_single_cube_$_state_machine__7573__auto__ = null;
var metaverse$core$add_single_cube_$_state_machine__7573__auto____0 = (function (){
var statearr_18980 = [null,null,null,null,null,null,null];
(statearr_18980[(0)] = metaverse$core$add_single_cube_$_state_machine__7573__auto__);

(statearr_18980[(1)] = (1));

return statearr_18980;
});
var metaverse$core$add_single_cube_$_state_machine__7573__auto____1 = (function (state_18975){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_18975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e18981){if((e18981 instanceof Object)){
var ex__7576__auto__ = e18981;
var statearr_18982_18984 = state_18975;
(statearr_18982_18984[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18985 = state_18975;
state_18975 = G__18985;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
metaverse$core$add_single_cube_$_state_machine__7573__auto__ = function(state_18975){
switch(arguments.length){
case 0:
return metaverse$core$add_single_cube_$_state_machine__7573__auto____0.call(this);
case 1:
return metaverse$core$add_single_cube_$_state_machine__7573__auto____1.call(this,state_18975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metaverse$core$add_single_cube_$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = metaverse$core$add_single_cube_$_state_machine__7573__auto____0;
metaverse$core$add_single_cube_$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = metaverse$core$add_single_cube_$_state_machine__7573__auto____1;
return metaverse$core$add_single_cube_$_state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto__,geom,material,cube))
})();
var state__7636__auto__ = (function (){var statearr_18983 = f__7635__auto__.call(null);
(statearr_18983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto__);

return statearr_18983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto__,geom,material,cube))
);

return c__7634__auto__;
});
metaverse.core.set_initial_camera_position = (function metaverse$core$set_initial_camera_position(c){
var c__7634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto__){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto__){
return (function (state_19013){
var state_val_19014 = (state_19013[(1)]);
if((state_val_19014 === (1))){
var inst_19004 = [new cljs.core.Keyword(null,"camera","camera",-1190348585)];
var inst_19005 = [new cljs.core.Keyword(null,"z","z",-789527183)];
var inst_19006 = [(5)];
var inst_19007 = cljs.core.PersistentHashMap.fromArrays(inst_19005,inst_19006);
var inst_19008 = [inst_19007];
var inst_19009 = cljs.core.PersistentHashMap.fromArrays(inst_19004,inst_19008);
var state_19013__$1 = state_19013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19013__$1,(2),c,inst_19009);
} else {
if((state_val_19014 === (2))){
var inst_19011 = (state_19013[(2)]);
var state_19013__$1 = state_19013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19013__$1,inst_19011);
} else {
return null;
}
}
});})(c__7634__auto__))
;
return ((function (switch__7572__auto__,c__7634__auto__){
return (function() {
var metaverse$core$set_initial_camera_position_$_state_machine__7573__auto__ = null;
var metaverse$core$set_initial_camera_position_$_state_machine__7573__auto____0 = (function (){
var statearr_19018 = [null,null,null,null,null,null,null];
(statearr_19018[(0)] = metaverse$core$set_initial_camera_position_$_state_machine__7573__auto__);

(statearr_19018[(1)] = (1));

return statearr_19018;
});
var metaverse$core$set_initial_camera_position_$_state_machine__7573__auto____1 = (function (state_19013){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_19013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e19019){if((e19019 instanceof Object)){
var ex__7576__auto__ = e19019;
var statearr_19020_19022 = state_19013;
(statearr_19020_19022[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19023 = state_19013;
state_19013 = G__19023;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
metaverse$core$set_initial_camera_position_$_state_machine__7573__auto__ = function(state_19013){
switch(arguments.length){
case 0:
return metaverse$core$set_initial_camera_position_$_state_machine__7573__auto____0.call(this);
case 1:
return metaverse$core$set_initial_camera_position_$_state_machine__7573__auto____1.call(this,state_19013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metaverse$core$set_initial_camera_position_$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = metaverse$core$set_initial_camera_position_$_state_machine__7573__auto____0;
metaverse$core$set_initial_camera_position_$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = metaverse$core$set_initial_camera_position_$_state_machine__7573__auto____1;
return metaverse$core$set_initial_camera_position_$_state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto__))
})();
var state__7636__auto__ = (function (){var statearr_19021 = f__7635__auto__.call(null);
(statearr_19021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto__);

return statearr_19021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto__))
);

return c__7634__auto__;
});
metaverse.core.rotate_fn = (function metaverse$core$rotate_fn(c){
var c__7634__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto__){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto__){
return (function (state_19075){
var state_val_19076 = (state_19075[(1)]);
if((state_val_19076 === (1))){
var inst_19055 = [new cljs.core.Keyword(null,"modifications","modifications",2043415709)];
var inst_19056 = [new cljs.core.Keyword(null,"0x0000","0x0000",1541547801)];
var inst_19057 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19058 = ["rotation","x"];
var inst_19059 = (new cljs.core.PersistentVector(null,2,(5),inst_19057,inst_19058,null));
var inst_19060 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19061 = ["rotation","y"];
var inst_19062 = (new cljs.core.PersistentVector(null,2,(5),inst_19060,inst_19061,null));
var inst_19063 = [inst_19059,inst_19062];
var inst_19064 = (function (){return ((function (inst_19055,inst_19056,inst_19057,inst_19058,inst_19059,inst_19060,inst_19061,inst_19062,inst_19063,state_val_19076,c__7634__auto__){
return (function (p1__19024_SHARP_){
return (p1__19024_SHARP_ + 0.1);
});
;})(inst_19055,inst_19056,inst_19057,inst_19058,inst_19059,inst_19060,inst_19061,inst_19062,inst_19063,state_val_19076,c__7634__auto__))
})();
var inst_19065 = (function (){return ((function (inst_19055,inst_19056,inst_19057,inst_19058,inst_19059,inst_19060,inst_19061,inst_19062,inst_19063,inst_19064,state_val_19076,c__7634__auto__){
return (function (p1__19025_SHARP_){
return (p1__19025_SHARP_ + 0.1);
});
;})(inst_19055,inst_19056,inst_19057,inst_19058,inst_19059,inst_19060,inst_19061,inst_19062,inst_19063,inst_19064,state_val_19076,c__7634__auto__))
})();
var inst_19066 = [inst_19064,inst_19065];
var inst_19067 = cljs.core.PersistentHashMap.fromArrays(inst_19063,inst_19066);
var inst_19068 = [inst_19067];
var inst_19069 = cljs.core.PersistentHashMap.fromArrays(inst_19056,inst_19068);
var inst_19070 = [inst_19069];
var inst_19071 = cljs.core.PersistentHashMap.fromArrays(inst_19055,inst_19070);
var state_19075__$1 = state_19075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19075__$1,(2),c,inst_19071);
} else {
if((state_val_19076 === (2))){
var inst_19073 = (state_19075[(2)]);
var state_19075__$1 = state_19075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19075__$1,inst_19073);
} else {
return null;
}
}
});})(c__7634__auto__))
;
return ((function (switch__7572__auto__,c__7634__auto__){
return (function() {
var metaverse$core$rotate_fn_$_state_machine__7573__auto__ = null;
var metaverse$core$rotate_fn_$_state_machine__7573__auto____0 = (function (){
var statearr_19080 = [null,null,null,null,null,null,null];
(statearr_19080[(0)] = metaverse$core$rotate_fn_$_state_machine__7573__auto__);

(statearr_19080[(1)] = (1));

return statearr_19080;
});
var metaverse$core$rotate_fn_$_state_machine__7573__auto____1 = (function (state_19075){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_19075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e19081){if((e19081 instanceof Object)){
var ex__7576__auto__ = e19081;
var statearr_19082_19084 = state_19075;
(statearr_19082_19084[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19085 = state_19075;
state_19075 = G__19085;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
metaverse$core$rotate_fn_$_state_machine__7573__auto__ = function(state_19075){
switch(arguments.length){
case 0:
return metaverse$core$rotate_fn_$_state_machine__7573__auto____0.call(this);
case 1:
return metaverse$core$rotate_fn_$_state_machine__7573__auto____1.call(this,state_19075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metaverse$core$rotate_fn_$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = metaverse$core$rotate_fn_$_state_machine__7573__auto____0;
metaverse$core$rotate_fn_$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = metaverse$core$rotate_fn_$_state_machine__7573__auto____1;
return metaverse$core$rotate_fn_$_state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto__))
})();
var state__7636__auto__ = (function (){var statearr_19083 = f__7635__auto__.call(null);
(statearr_19083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto__);

return statearr_19083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto__))
);

return c__7634__auto__;
});
metaverse.core.main = (function metaverse$core$main(){
var render_state = cljs.core.async.chan.call(null);
var scene = (new THREE.Scene());
var camera = (new THREE.PerspectiveCamera((75),((window["innerWidth"]) / (window["innerHeight"])),0.1,(1000)));
var renderer = (new THREE.WebGLRenderer());
renderer.setSize((window["innerWidth"]),(window["innerHeight"]));

document.body.appendChild(renderer.domElement);

var c__7634__auto___20080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7634__auto___20080,render_state,scene,camera,renderer){
return (function (){
var f__7635__auto__ = (function (){var switch__7572__auto__ = ((function (c__7634__auto___20080,render_state,scene,camera,renderer){
return (function (state_19917){
var state_val_19918 = (state_19917[(1)]);
if((state_val_19918 === (65))){
var state_19917__$1 = state_19917;
var statearr_19922_20081 = state_19917__$1;
(statearr_19922_20081[(2)] = null);

(statearr_19922_20081[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (70))){
var inst_19857 = (state_19917[(7)]);
var inst_19824 = (state_19917[(8)]);
var inst_19857__$1 = cljs.core.seq.call(null,inst_19824);
var state_19917__$1 = (function (){var statearr_19923 = state_19917;
(statearr_19923[(7)] = inst_19857__$1);

return statearr_19923;
})();
if(inst_19857__$1){
var statearr_19924_20082 = state_19917__$1;
(statearr_19924_20082[(1)] = (75));

} else {
var statearr_19925_20083 = state_19917__$1;
(statearr_19925_20083[(1)] = (76));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (62))){
var inst_19591 = (state_19917[(9)]);
var inst_19803 = (state_19917[(10)]);
var inst_19816 = (state_19917[(11)]);
var inst_19813 = cljs.core.first.call(null,inst_19803);
var inst_19814 = cljs.core.nth.call(null,inst_19813,(0),null);
var inst_19815 = cljs.core.nth.call(null,inst_19813,(1),null);
var inst_19816__$1 = cljs.core.get.call(null,inst_19591,inst_19814);
var state_19917__$1 = (function (){var statearr_19929 = state_19917;
(statearr_19929[(12)] = inst_19815);

(statearr_19929[(11)] = inst_19816__$1);

return statearr_19929;
})();
if(cljs.core.truth_(inst_19816__$1)){
var statearr_19930_20084 = state_19917__$1;
(statearr_19930_20084[(1)] = (64));

} else {
var statearr_19931_20085 = state_19917__$1;
(statearr_19931_20085[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (74))){
var inst_19826 = (state_19917[(13)]);
var inst_19825 = (state_19917[(14)]);
var inst_19835 = (state_19917[(15)]);
var inst_19836 = (state_19917[(16)]);
var inst_19824 = (state_19917[(8)]);
var inst_19827 = (state_19917[(17)]);
var inst_19839 = (state_19917[(18)]);
var inst_19847 = (state_19917[(2)]);
var inst_19848 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19849 = inst_19835.call(null,inst_19836);
var inst_19850 = [inst_19849];
var inst_19851 = (new cljs.core.PersistentVector(null,1,(5),inst_19848,inst_19850,null));
var inst_19852 = cljs.core.concat.call(null,inst_19839,inst_19847,inst_19851);
var inst_19853 = cljs.core.apply.call(null,cljs.core.aset,inst_19852);
var inst_19854 = (inst_19827 + (1));
var tmp19919 = inst_19826;
var tmp19920 = inst_19825;
var tmp19921 = inst_19824;
var inst_19824__$1 = tmp19921;
var inst_19825__$1 = tmp19920;
var inst_19826__$1 = tmp19919;
var inst_19827__$1 = inst_19854;
var state_19917__$1 = (function (){var statearr_19932 = state_19917;
(statearr_19932[(13)] = inst_19826__$1);

(statearr_19932[(19)] = inst_19853);

(statearr_19932[(14)] = inst_19825__$1);

(statearr_19932[(8)] = inst_19824__$1);

(statearr_19932[(17)] = inst_19827__$1);

return statearr_19932;
})();
var statearr_19933_20086 = state_19917__$1;
(statearr_19933_20086[(2)] = null);

(statearr_19933_20086[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (7))){
var inst_19598 = (state_19917[(20)]);
var inst_19599 = (state_19917[(21)]);
var inst_19601 = (state_19917[(22)]);
var inst_19600 = (state_19917[(23)]);
var inst_19607 = cljs.core._nth.call(null,inst_19599,inst_19601);
var inst_19608 = cljs.core.nth.call(null,inst_19607,(0),null);
var inst_19609 = cljs.core.nth.call(null,inst_19607,(1),null);
var inst_19610 = scene.add(inst_19609);
var inst_19611 = (inst_19601 + (1));
var tmp19926 = inst_19598;
var tmp19927 = inst_19599;
var tmp19928 = inst_19600;
var inst_19598__$1 = tmp19926;
var inst_19599__$1 = tmp19927;
var inst_19600__$1 = tmp19928;
var inst_19601__$1 = inst_19611;
var state_19917__$1 = (function (){var statearr_19934 = state_19917;
(statearr_19934[(24)] = inst_19610);

(statearr_19934[(25)] = inst_19608);

(statearr_19934[(20)] = inst_19598__$1);

(statearr_19934[(21)] = inst_19599__$1);

(statearr_19934[(22)] = inst_19601__$1);

(statearr_19934[(23)] = inst_19600__$1);

return statearr_19934;
})();
var statearr_19935_20087 = state_19917__$1;
(statearr_19935_20087[(2)] = null);

(statearr_19935_20087[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (59))){
var state_19917__$1 = state_19917;
var statearr_19936_20088 = state_19917__$1;
(statearr_19936_20088[(2)] = null);

(statearr_19936_20088[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (20))){
var inst_19693 = (state_19917[(2)]);
var state_19917__$1 = state_19917;
var statearr_19937_20089 = state_19917__$1;
(statearr_19937_20089[(2)] = inst_19693);

(statearr_19937_20089[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (72))){
var inst_19834 = (state_19917[(26)]);
var state_19917__$1 = state_19917;
var statearr_19938_20090 = state_19917__$1;
(statearr_19938_20090[(2)] = inst_19834);

(statearr_19938_20090[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (58))){
var inst_19803 = (state_19917[(10)]);
var inst_19805 = cljs.core.chunked_seq_QMARK_.call(null,inst_19803);
var state_19917__$1 = state_19917;
if(inst_19805){
var statearr_19939_20091 = state_19917__$1;
(statearr_19939_20091[(1)] = (61));

} else {
var statearr_19940_20092 = state_19917__$1;
(statearr_19940_20092[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (60))){
var inst_19908 = (state_19917[(2)]);
var state_19917__$1 = state_19917;
var statearr_19941_20093 = state_19917__$1;
(statearr_19941_20093[(2)] = inst_19908);

(statearr_19941_20093[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (27))){
var inst_19667 = (state_19917[(27)]);
var inst_19671 = cljs.core.chunk_first.call(null,inst_19667);
var inst_19672 = cljs.core.chunk_rest.call(null,inst_19667);
var inst_19673 = cljs.core.count.call(null,inst_19671);
var inst_19647 = inst_19672;
var inst_19648 = inst_19671;
var inst_19649 = inst_19673;
var inst_19650 = (0);
var state_19917__$1 = (function (){var statearr_19942 = state_19917;
(statearr_19942[(28)] = inst_19649);

(statearr_19942[(29)] = inst_19650);

(statearr_19942[(30)] = inst_19648);

(statearr_19942[(31)] = inst_19647);

return statearr_19942;
})();
var statearr_19943_20094 = state_19917__$1;
(statearr_19943_20094[(2)] = null);

(statearr_19943_20094[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (1))){
var inst_19583 = cljs.core.PersistentHashMap.EMPTY;
var inst_19584 = inst_19583;
var state_19917__$1 = (function (){var statearr_19944 = state_19917;
(statearr_19944[(32)] = inst_19584);

return statearr_19944;
})();
var statearr_19945_20095 = state_19917__$1;
(statearr_19945_20095[(2)] = null);

(statearr_19945_20095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (69))){
var inst_19825 = (state_19917[(14)]);
var inst_19834 = (state_19917[(26)]);
var inst_19816 = (state_19917[(11)]);
var inst_19827 = (state_19917[(17)]);
var inst_19833 = cljs.core._nth.call(null,inst_19825,inst_19827);
var inst_19834__$1 = cljs.core.nth.call(null,inst_19833,(0),null);
var inst_19835 = cljs.core.nth.call(null,inst_19833,(1),null);
var inst_19836 = cljs.core.apply.call(null,cljs.core.aget,inst_19816,inst_19834__$1);
var inst_19837 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19838 = [inst_19816];
var inst_19839 = (new cljs.core.PersistentVector(null,1,(5),inst_19837,inst_19838,null));
var inst_19840 = cljs.core.sequential_QMARK_.call(null,inst_19834__$1);
var state_19917__$1 = (function (){var statearr_19946 = state_19917;
(statearr_19946[(26)] = inst_19834__$1);

(statearr_19946[(15)] = inst_19835);

(statearr_19946[(16)] = inst_19836);

(statearr_19946[(18)] = inst_19839);

return statearr_19946;
})();
if(inst_19840){
var statearr_19947_20096 = state_19917__$1;
(statearr_19947_20096[(1)] = (72));

} else {
var statearr_19948_20097 = state_19917__$1;
(statearr_19948_20097[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (24))){
var inst_19667 = (state_19917[(27)]);
var inst_19669 = cljs.core.chunked_seq_QMARK_.call(null,inst_19667);
var state_19917__$1 = state_19917;
if(inst_19669){
var statearr_19949_20098 = state_19917__$1;
(statearr_19949_20098[(1)] = (27));

} else {
var statearr_19950_20099 = state_19917__$1;
(statearr_19950_20099[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (55))){
var inst_19766 = (state_19917[(33)]);
var state_19917__$1 = state_19917;
var statearr_19951_20100 = state_19917__$1;
(statearr_19951_20100[(2)] = inst_19766);

(statearr_19951_20100[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (39))){
var state_19917__$1 = state_19917;
var statearr_19952_20101 = state_19917__$1;
(statearr_19952_20101[(2)] = null);

(statearr_19952_20101[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (46))){
var inst_19732 = (state_19917[(34)]);
var state_19917__$1 = state_19917;
var statearr_19953_20102 = state_19917__$1;
(statearr_19953_20102[(2)] = inst_19732);

(statearr_19953_20102[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (4))){
var inst_19584 = (state_19917[(32)]);
var inst_19587 = (state_19917[(2)]);
var inst_19588 = new cljs.core.Keyword(null,"geometry","geometry",-405034994).cljs$core$IFn$_invoke$arity$1(inst_19587);
var inst_19589 = new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(inst_19587);
var inst_19590 = new cljs.core.Keyword(null,"modifications","modifications",2043415709).cljs$core$IFn$_invoke$arity$1(inst_19587);
var inst_19591 = cljs.core.merge.call(null,inst_19584,inst_19588);
var inst_19596 = cljs.core.seq.call(null,inst_19588);
var inst_19597 = cljs.core.seq.call(null,inst_19596);
var inst_19598 = inst_19597;
var inst_19599 = null;
var inst_19600 = (0);
var inst_19601 = (0);
var state_19917__$1 = (function (){var statearr_19954 = state_19917;
(statearr_19954[(9)] = inst_19591);

(statearr_19954[(35)] = inst_19590);

(statearr_19954[(36)] = inst_19589);

(statearr_19954[(20)] = inst_19598);

(statearr_19954[(21)] = inst_19599);

(statearr_19954[(22)] = inst_19601);

(statearr_19954[(23)] = inst_19600);

return statearr_19954;
})();
var statearr_19955_20103 = state_19917__$1;
(statearr_19955_20103[(2)] = null);

(statearr_19955_20103[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (77))){
var inst_19894 = (state_19917[(2)]);
var state_19917__$1 = state_19917;
var statearr_19956_20104 = state_19917__$1;
(statearr_19956_20104[(2)] = inst_19894);

(statearr_19956_20104[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (54))){
var inst_19789 = (state_19917[(2)]);
var state_19917__$1 = state_19917;
var statearr_19960_20105 = state_19917__$1;
(statearr_19960_20105[(2)] = inst_19789);

(statearr_19960_20105[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (15))){
var inst_19631 = (state_19917[(2)]);
var state_19917__$1 = state_19917;
var statearr_19961_20106 = state_19917__$1;
(statearr_19961_20106[(2)] = inst_19631);

(statearr_19961_20106[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (48))){
var inst_19733 = (state_19917[(37)]);
var inst_19734 = (state_19917[(38)]);
var inst_19722 = (state_19917[(39)]);
var inst_19737 = (state_19917[(40)]);
var inst_19725 = (state_19917[(41)]);
var inst_19723 = (state_19917[(42)]);
var inst_19724 = (state_19917[(43)]);
var inst_19745 = (state_19917[(2)]);
var inst_19746 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19747 = inst_19733.call(null,inst_19734);
var inst_19748 = [inst_19747];
var inst_19749 = (new cljs.core.PersistentVector(null,1,(5),inst_19746,inst_19748,null));
var inst_19750 = cljs.core.concat.call(null,inst_19737,inst_19745,inst_19749);
var inst_19751 = cljs.core.apply.call(null,cljs.core.aset,inst_19750);
var inst_19752 = (inst_19725 + (1));
var tmp19957 = inst_19722;
var tmp19958 = inst_19723;
var tmp19959 = inst_19724;
var inst_19722__$1 = tmp19957;
var inst_19723__$1 = tmp19958;
var inst_19724__$1 = tmp19959;
var inst_19725__$1 = inst_19752;
var state_19917__$1 = (function (){var statearr_19962 = state_19917;
(statearr_19962[(39)] = inst_19722__$1);

(statearr_19962[(41)] = inst_19725__$1);

(statearr_19962[(44)] = inst_19751);

(statearr_19962[(42)] = inst_19723__$1);

(statearr_19962[(43)] = inst_19724__$1);

return statearr_19962;
})();
var statearr_19963_20107 = state_19917__$1;
(statearr_19963_20107[(2)] = null);

(statearr_19963_20107[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (50))){
var state_19917__$1 = state_19917;
var statearr_19964_20108 = state_19917__$1;
(statearr_19964_20108[(2)] = null);

(statearr_19964_20108[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (75))){
var inst_19857 = (state_19917[(7)]);
var inst_19859 = cljs.core.chunked_seq_QMARK_.call(null,inst_19857);
var state_19917__$1 = state_19917;
if(inst_19859){
var statearr_19965_20109 = state_19917__$1;
(statearr_19965_20109[(1)] = (78));

} else {
var statearr_19966_20110 = state_19917__$1;
(statearr_19966_20110[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (21))){
var inst_19655 = (state_19917[(45)]);
var inst_19589 = (state_19917[(36)]);
var inst_19658 = cljs.core.name.call(null,inst_19655);
var inst_19659 = cljs.core.get.call(null,inst_19589,inst_19655);
var inst_19660 = (camera["position"][inst_19658] = inst_19659);
var state_19917__$1 = state_19917;
var statearr_19967_20111 = state_19917__$1;
(statearr_19967_20111[(2)] = inst_19660);

(statearr_19967_20111[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (31))){
var state_19917__$1 = state_19917;
var statearr_19971_20112 = state_19917__$1;
(statearr_19971_20112[(2)] = null);

(statearr_19971_20112[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (32))){
var inst_19667 = (state_19917[(27)]);
var inst_19684 = (state_19917[(2)]);
var inst_19685 = cljs.core.next.call(null,inst_19667);
var inst_19647 = inst_19685;
var inst_19648 = null;
var inst_19649 = (0);
var inst_19650 = (0);
var state_19917__$1 = (function (){var statearr_19972 = state_19917;
(statearr_19972[(28)] = inst_19649);

(statearr_19972[(46)] = inst_19684);

(statearr_19972[(29)] = inst_19650);

(statearr_19972[(30)] = inst_19648);

(statearr_19972[(31)] = inst_19647);

return statearr_19972;
})();
var statearr_19973_20113 = state_19917__$1;
(statearr_19973_20113[(2)] = null);

(statearr_19973_20113[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (40))){
var inst_19703 = (state_19917[(47)]);
var inst_19705 = (state_19917[(48)]);
var inst_19702 = (state_19917[(49)]);
var inst_19704 = (state_19917[(50)]);
var inst_19799 = (state_19917[(2)]);
var inst_19800 = (inst_19705 + (1));
var tmp19968 = inst_19703;
var tmp19969 = inst_19702;
var tmp19970 = inst_19704;
var inst_19702__$1 = tmp19969;
var inst_19703__$1 = tmp19968;
var inst_19704__$1 = tmp19970;
var inst_19705__$1 = inst_19800;
var state_19917__$1 = (function (){var statearr_19974 = state_19917;
(statearr_19974[(47)] = inst_19703__$1);

(statearr_19974[(51)] = inst_19799);

(statearr_19974[(48)] = inst_19705__$1);

(statearr_19974[(49)] = inst_19702__$1);

(statearr_19974[(50)] = inst_19704__$1);

return statearr_19974;
})();
var statearr_19975_20114 = state_19917__$1;
(statearr_19975_20114[(2)] = null);

(statearr_19975_20114[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (56))){
var inst_19766 = (state_19917[(33)]);
var inst_19775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19776 = [inst_19766];
var inst_19777 = (new cljs.core.PersistentVector(null,1,(5),inst_19775,inst_19776,null));
var state_19917__$1 = state_19917;
var statearr_19976_20115 = state_19917__$1;
(statearr_19976_20115[(2)] = inst_19777);

(statearr_19976_20115[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (33))){
var inst_19705 = (state_19917[(48)]);
var inst_19704 = (state_19917[(50)]);
var inst_19707 = (inst_19705 < inst_19704);
var inst_19708 = inst_19707;
var state_19917__$1 = state_19917;
if(cljs.core.truth_(inst_19708)){
var statearr_19977_20116 = state_19917__$1;
(statearr_19977_20116[(1)] = (35));

} else {
var statearr_19978_20117 = state_19917__$1;
(statearr_19978_20117[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (13))){
var inst_19614 = (state_19917[(52)]);
var inst_19618 = cljs.core.chunk_first.call(null,inst_19614);
var inst_19619 = cljs.core.chunk_rest.call(null,inst_19614);
var inst_19620 = cljs.core.count.call(null,inst_19618);
var inst_19598 = inst_19619;
var inst_19599 = inst_19618;
var inst_19600 = inst_19620;
var inst_19601 = (0);
var state_19917__$1 = (function (){var statearr_19979 = state_19917;
(statearr_19979[(20)] = inst_19598);

(statearr_19979[(21)] = inst_19599);

(statearr_19979[(22)] = inst_19601);

(statearr_19979[(23)] = inst_19600);

return statearr_19979;
})();
var statearr_19980_20118 = state_19917__$1;
(statearr_19980_20118[(2)] = null);

(statearr_19980_20118[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (22))){
var state_19917__$1 = state_19917;
var statearr_19981_20119 = state_19917__$1;
(statearr_19981_20119[(2)] = null);

(statearr_19981_20119[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (36))){
var inst_19702 = (state_19917[(49)]);
var inst_19803 = (state_19917[(10)]);
var inst_19803__$1 = cljs.core.seq.call(null,inst_19702);
var state_19917__$1 = (function (){var statearr_19982 = state_19917;
(statearr_19982[(10)] = inst_19803__$1);

return statearr_19982;
})();
if(inst_19803__$1){
var statearr_19983_20120 = state_19917__$1;
(statearr_19983_20120[(1)] = (58));

} else {
var statearr_19984_20121 = state_19917__$1;
(statearr_19984_20121[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (41))){
var inst_19725 = (state_19917[(41)]);
var inst_19724 = (state_19917[(43)]);
var inst_19727 = (inst_19725 < inst_19724);
var inst_19728 = inst_19727;
var state_19917__$1 = state_19917;
if(cljs.core.truth_(inst_19728)){
var statearr_19985_20122 = state_19917__$1;
(statearr_19985_20122[(1)] = (43));

} else {
var statearr_19986_20123 = state_19917__$1;
(statearr_19986_20123[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (43))){
var inst_19732 = (state_19917[(34)]);
var inst_19725 = (state_19917[(41)]);
var inst_19714 = (state_19917[(53)]);
var inst_19723 = (state_19917[(42)]);
var inst_19731 = cljs.core._nth.call(null,inst_19723,inst_19725);
var inst_19732__$1 = cljs.core.nth.call(null,inst_19731,(0),null);
var inst_19733 = cljs.core.nth.call(null,inst_19731,(1),null);
var inst_19734 = cljs.core.apply.call(null,cljs.core.aget,inst_19714,inst_19732__$1);
var inst_19735 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19736 = [inst_19714];
var inst_19737 = (new cljs.core.PersistentVector(null,1,(5),inst_19735,inst_19736,null));
var inst_19738 = cljs.core.sequential_QMARK_.call(null,inst_19732__$1);
var state_19917__$1 = (function (){var statearr_19987 = state_19917;
(statearr_19987[(37)] = inst_19733);

(statearr_19987[(38)] = inst_19734);

(statearr_19987[(34)] = inst_19732__$1);

(statearr_19987[(40)] = inst_19737);

return statearr_19987;
})();
if(inst_19738){
var statearr_19988_20124 = state_19917__$1;
(statearr_19988_20124[(1)] = (46));

} else {
var statearr_19989_20125 = state_19917__$1;
(statearr_19989_20125[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (61))){
var inst_19803 = (state_19917[(10)]);
var inst_19807 = cljs.core.chunk_first.call(null,inst_19803);
var inst_19808 = cljs.core.chunk_rest.call(null,inst_19803);
var inst_19809 = cljs.core.count.call(null,inst_19807);
var inst_19702 = inst_19808;
var inst_19703 = inst_19807;
var inst_19704 = inst_19809;
var inst_19705 = (0);
var state_19917__$1 = (function (){var statearr_19990 = state_19917;
(statearr_19990[(47)] = inst_19703);

(statearr_19990[(48)] = inst_19705);

(statearr_19990[(49)] = inst_19702);

(statearr_19990[(50)] = inst_19704);

return statearr_19990;
})();
var statearr_19991_20126 = state_19917__$1;
(statearr_19991_20126[(2)] = null);

(statearr_19991_20126[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (29))){
var inst_19688 = (state_19917[(2)]);
var state_19917__$1 = state_19917;
var statearr_19992_20127 = state_19917__$1;
(statearr_19992_20127[(2)] = inst_19688);

(statearr_19992_20127[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (44))){
var inst_19755 = (state_19917[(54)]);
var inst_19722 = (state_19917[(39)]);
var inst_19755__$1 = cljs.core.seq.call(null,inst_19722);
var state_19917__$1 = (function (){var statearr_19993 = state_19917;
(statearr_19993[(54)] = inst_19755__$1);

return statearr_19993;
})();
if(inst_19755__$1){
var statearr_19994_20128 = state_19917__$1;
(statearr_19994_20128[(1)] = (49));

} else {
var statearr_19995_20129 = state_19917__$1;
(statearr_19995_20129[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (6))){
var inst_19638 = (state_19917[(2)]);
var inst_19643 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19644 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)];
var inst_19645 = (new cljs.core.PersistentVector(null,3,(5),inst_19643,inst_19644,null));
var inst_19646 = cljs.core.seq.call(null,inst_19645);
var inst_19647 = inst_19646;
var inst_19648 = null;
var inst_19649 = (0);
var inst_19650 = (0);
var state_19917__$1 = (function (){var statearr_19996 = state_19917;
(statearr_19996[(28)] = inst_19649);

(statearr_19996[(55)] = inst_19638);

(statearr_19996[(29)] = inst_19650);

(statearr_19996[(30)] = inst_19648);

(statearr_19996[(31)] = inst_19647);

return statearr_19996;
})();
var statearr_19997_20130 = state_19917__$1;
(statearr_19997_20130[(2)] = null);

(statearr_19997_20130[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (28))){
var inst_19667 = (state_19917[(27)]);
var inst_19589 = (state_19917[(36)]);
var inst_19676 = (state_19917[(56)]);
var inst_19676__$1 = cljs.core.first.call(null,inst_19667);
var inst_19677 = cljs.core.contains_QMARK_.call(null,inst_19589,inst_19676__$1);
var state_19917__$1 = (function (){var statearr_19998 = state_19917;
(statearr_19998[(56)] = inst_19676__$1);

return statearr_19998;
})();
if(inst_19677){
var statearr_19999_20131 = state_19917__$1;
(statearr_19999_20131[(1)] = (30));

} else {
var statearr_20000_20132 = state_19917__$1;
(statearr_20000_20132[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (64))){
var inst_19815 = (state_19917[(12)]);
var inst_19822 = cljs.core.seq.call(null,inst_19815);
var inst_19823 = cljs.core.seq.call(null,inst_19822);
var inst_19824 = inst_19823;
var inst_19825 = null;
var inst_19826 = (0);
var inst_19827 = (0);
var state_19917__$1 = (function (){var statearr_20001 = state_19917;
(statearr_20001[(13)] = inst_19826);

(statearr_20001[(14)] = inst_19825);

(statearr_20001[(8)] = inst_19824);

(statearr_20001[(17)] = inst_19827);

return statearr_20001;
})();
var statearr_20002_20133 = state_19917__$1;
(statearr_20002_20133[(2)] = null);

(statearr_20002_20133[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (51))){
var inst_19792 = (state_19917[(2)]);
var state_19917__$1 = state_19917;
var statearr_20003_20134 = state_19917__$1;
(statearr_20003_20134[(2)] = inst_19792);

(statearr_20003_20134[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (25))){
var state_19917__$1 = state_19917;
var statearr_20004_20135 = state_19917__$1;
(statearr_20004_20135[(2)] = null);

(statearr_20004_20135[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (34))){
var inst_19591 = (state_19917[(9)]);
var inst_19912 = (state_19917[(2)]);
var inst_19584 = inst_19591;
var state_19917__$1 = (function (){var statearr_20005 = state_19917;
(statearr_20005[(57)] = inst_19912);

(statearr_20005[(32)] = inst_19584);

return statearr_20005;
})();
var statearr_20006_20136 = state_19917__$1;
(statearr_20006_20136[(2)] = null);

(statearr_20006_20136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (17))){
var inst_19590 = (state_19917[(35)]);
var inst_19695 = (state_19917[(2)]);
var inst_19700 = cljs.core.seq.call(null,inst_19590);
var inst_19701 = cljs.core.seq.call(null,inst_19700);
var inst_19702 = inst_19701;
var inst_19703 = null;
var inst_19704 = (0);
var inst_19705 = (0);
var state_19917__$1 = (function (){var statearr_20007 = state_19917;
(statearr_20007[(47)] = inst_19703);

(statearr_20007[(48)] = inst_19705);

(statearr_20007[(49)] = inst_19702);

(statearr_20007[(50)] = inst_19704);

(statearr_20007[(58)] = inst_19695);

return statearr_20007;
})();
var statearr_20008_20137 = state_19917__$1;
(statearr_20008_20137[(2)] = null);

(statearr_20008_20137[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (3))){
var inst_19915 = (state_19917[(2)]);
var state_19917__$1 = state_19917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19917__$1,inst_19915);
} else {
if((state_val_19918 === (12))){
var inst_19634 = (state_19917[(2)]);
var state_19917__$1 = state_19917;
var statearr_20009_20138 = state_19917__$1;
(statearr_20009_20138[(2)] = inst_19634);

(statearr_20009_20138[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (2))){
var state_19917__$1 = state_19917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19917__$1,(4),render_state);
} else {
if((state_val_19918 === (66))){
var inst_19803 = (state_19917[(10)]);
var inst_19901 = (state_19917[(2)]);
var inst_19902 = cljs.core.next.call(null,inst_19803);
var inst_19702 = inst_19902;
var inst_19703 = null;
var inst_19704 = (0);
var inst_19705 = (0);
var state_19917__$1 = (function (){var statearr_20013 = state_19917;
(statearr_20013[(47)] = inst_19703);

(statearr_20013[(48)] = inst_19705);

(statearr_20013[(49)] = inst_19702);

(statearr_20013[(50)] = inst_19704);

(statearr_20013[(59)] = inst_19901);

return statearr_20013;
})();
var statearr_20014_20139 = state_19917__$1;
(statearr_20014_20139[(2)] = null);

(statearr_20014_20139[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (23))){
var inst_19649 = (state_19917[(28)]);
var inst_19650 = (state_19917[(29)]);
var inst_19648 = (state_19917[(30)]);
var inst_19647 = (state_19917[(31)]);
var inst_19663 = (state_19917[(2)]);
var inst_19664 = (inst_19650 + (1));
var tmp20010 = inst_19649;
var tmp20011 = inst_19648;
var tmp20012 = inst_19647;
var inst_19647__$1 = tmp20012;
var inst_19648__$1 = tmp20011;
var inst_19649__$1 = tmp20010;
var inst_19650__$1 = inst_19664;
var state_19917__$1 = (function (){var statearr_20015 = state_19917;
(statearr_20015[(60)] = inst_19663);

(statearr_20015[(28)] = inst_19649__$1);

(statearr_20015[(29)] = inst_19650__$1);

(statearr_20015[(30)] = inst_19648__$1);

(statearr_20015[(31)] = inst_19647__$1);

return statearr_20015;
})();
var statearr_20016_20140 = state_19917__$1;
(statearr_20016_20140[(2)] = null);

(statearr_20016_20140[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (47))){
var inst_19732 = (state_19917[(34)]);
var inst_19741 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19742 = [inst_19732];
var inst_19743 = (new cljs.core.PersistentVector(null,1,(5),inst_19741,inst_19742,null));
var state_19917__$1 = state_19917;
var statearr_20017_20141 = state_19917__$1;
(statearr_20017_20141[(2)] = inst_19743);

(statearr_20017_20141[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (35))){
var inst_19703 = (state_19917[(47)]);
var inst_19591 = (state_19917[(9)]);
var inst_19705 = (state_19917[(48)]);
var inst_19714 = (state_19917[(53)]);
var inst_19711 = cljs.core._nth.call(null,inst_19703,inst_19705);
var inst_19712 = cljs.core.nth.call(null,inst_19711,(0),null);
var inst_19713 = cljs.core.nth.call(null,inst_19711,(1),null);
var inst_19714__$1 = cljs.core.get.call(null,inst_19591,inst_19712);
var state_19917__$1 = (function (){var statearr_20018 = state_19917;
(statearr_20018[(61)] = inst_19713);

(statearr_20018[(53)] = inst_19714__$1);

return statearr_20018;
})();
if(cljs.core.truth_(inst_19714__$1)){
var statearr_20019_20142 = state_19917__$1;
(statearr_20019_20142[(1)] = (38));

} else {
var statearr_20020_20143 = state_19917__$1;
(statearr_20020_20143[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (82))){
var inst_19868 = (state_19917[(62)]);
var inst_19877 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19878 = [inst_19868];
var inst_19879 = (new cljs.core.PersistentVector(null,1,(5),inst_19877,inst_19878,null));
var state_19917__$1 = state_19917;
var statearr_20021_20144 = state_19917__$1;
(statearr_20021_20144[(2)] = inst_19879);

(statearr_20021_20144[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (76))){
var state_19917__$1 = state_19917;
var statearr_20022_20145 = state_19917__$1;
(statearr_20022_20145[(2)] = null);

(statearr_20022_20145[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (19))){
var inst_19667 = (state_19917[(27)]);
var inst_19647 = (state_19917[(31)]);
var inst_19667__$1 = cljs.core.seq.call(null,inst_19647);
var state_19917__$1 = (function (){var statearr_20023 = state_19917;
(statearr_20023[(27)] = inst_19667__$1);

return statearr_20023;
})();
if(inst_19667__$1){
var statearr_20024_20146 = state_19917__$1;
(statearr_20024_20146[(1)] = (24));

} else {
var statearr_20025_20147 = state_19917__$1;
(statearr_20025_20147[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (57))){
var inst_19755 = (state_19917[(54)]);
var inst_19771 = (state_19917[(63)]);
var inst_19768 = (state_19917[(64)]);
var inst_19767 = (state_19917[(65)]);
var inst_19779 = (state_19917[(2)]);
var inst_19780 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19781 = inst_19767.call(null,inst_19768);
var inst_19782 = [inst_19781];
var inst_19783 = (new cljs.core.PersistentVector(null,1,(5),inst_19780,inst_19782,null));
var inst_19784 = cljs.core.concat.call(null,inst_19771,inst_19779,inst_19783);
var inst_19785 = cljs.core.apply.call(null,cljs.core.aset,inst_19784);
var inst_19786 = cljs.core.next.call(null,inst_19755);
var inst_19722 = inst_19786;
var inst_19723 = null;
var inst_19724 = (0);
var inst_19725 = (0);
var state_19917__$1 = (function (){var statearr_20026 = state_19917;
(statearr_20026[(39)] = inst_19722);

(statearr_20026[(66)] = inst_19785);

(statearr_20026[(41)] = inst_19725);

(statearr_20026[(42)] = inst_19723);

(statearr_20026[(43)] = inst_19724);

return statearr_20026;
})();
var statearr_20027_20148 = state_19917__$1;
(statearr_20027_20148[(2)] = null);

(statearr_20027_20148[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (68))){
var inst_19898 = (state_19917[(2)]);
var state_19917__$1 = state_19917;
var statearr_20028_20149 = state_19917__$1;
(statearr_20028_20149[(2)] = inst_19898);

(statearr_20028_20149[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (11))){
var state_19917__$1 = state_19917;
var statearr_20029_20150 = state_19917__$1;
(statearr_20029_20150[(2)] = null);

(statearr_20029_20150[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (9))){
var inst_19636 = (state_19917[(2)]);
var state_19917__$1 = state_19917;
var statearr_20030_20151 = state_19917__$1;
(statearr_20030_20151[(2)] = inst_19636);

(statearr_20030_20151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (5))){
var inst_19601 = (state_19917[(22)]);
var inst_19600 = (state_19917[(23)]);
var inst_19603 = (inst_19601 < inst_19600);
var inst_19604 = inst_19603;
var state_19917__$1 = state_19917;
if(cljs.core.truth_(inst_19604)){
var statearr_20031_20152 = state_19917__$1;
(statearr_20031_20152[(1)] = (7));

} else {
var statearr_20032_20153 = state_19917__$1;
(statearr_20032_20153[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (83))){
var inst_19870 = (state_19917[(67)]);
var inst_19873 = (state_19917[(68)]);
var inst_19857 = (state_19917[(7)]);
var inst_19869 = (state_19917[(69)]);
var inst_19881 = (state_19917[(2)]);
var inst_19882 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19883 = inst_19869.call(null,inst_19870);
var inst_19884 = [inst_19883];
var inst_19885 = (new cljs.core.PersistentVector(null,1,(5),inst_19882,inst_19884,null));
var inst_19886 = cljs.core.concat.call(null,inst_19873,inst_19881,inst_19885);
var inst_19887 = cljs.core.apply.call(null,cljs.core.aset,inst_19886);
var inst_19888 = cljs.core.next.call(null,inst_19857);
var inst_19824 = inst_19888;
var inst_19825 = null;
var inst_19826 = (0);
var inst_19827 = (0);
var state_19917__$1 = (function (){var statearr_20033 = state_19917;
(statearr_20033[(13)] = inst_19826);

(statearr_20033[(14)] = inst_19825);

(statearr_20033[(70)] = inst_19887);

(statearr_20033[(8)] = inst_19824);

(statearr_20033[(17)] = inst_19827);

return statearr_20033;
})();
var statearr_20034_20154 = state_19917__$1;
(statearr_20034_20154[(2)] = null);

(statearr_20034_20154[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (14))){
var inst_19614 = (state_19917[(52)]);
var inst_19624 = cljs.core.first.call(null,inst_19614);
var inst_19625 = cljs.core.nth.call(null,inst_19624,(0),null);
var inst_19626 = cljs.core.nth.call(null,inst_19624,(1),null);
var inst_19627 = scene.add(inst_19626);
var inst_19628 = cljs.core.next.call(null,inst_19614);
var inst_19598 = inst_19628;
var inst_19599 = null;
var inst_19600 = (0);
var inst_19601 = (0);
var state_19917__$1 = (function (){var statearr_20035 = state_19917;
(statearr_20035[(20)] = inst_19598);

(statearr_20035[(21)] = inst_19599);

(statearr_20035[(71)] = inst_19625);

(statearr_20035[(72)] = inst_19627);

(statearr_20035[(22)] = inst_19601);

(statearr_20035[(23)] = inst_19600);

return statearr_20035;
})();
var statearr_20036_20155 = state_19917__$1;
(statearr_20036_20155[(2)] = null);

(statearr_20036_20155[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (45))){
var inst_19794 = (state_19917[(2)]);
var state_19917__$1 = state_19917;
var statearr_20037_20156 = state_19917__$1;
(statearr_20037_20156[(2)] = inst_19794);

(statearr_20037_20156[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (53))){
var inst_19755 = (state_19917[(54)]);
var inst_19766 = (state_19917[(33)]);
var inst_19714 = (state_19917[(53)]);
var inst_19765 = cljs.core.first.call(null,inst_19755);
var inst_19766__$1 = cljs.core.nth.call(null,inst_19765,(0),null);
var inst_19767 = cljs.core.nth.call(null,inst_19765,(1),null);
var inst_19768 = cljs.core.apply.call(null,cljs.core.aget,inst_19714,inst_19766__$1);
var inst_19769 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19770 = [inst_19714];
var inst_19771 = (new cljs.core.PersistentVector(null,1,(5),inst_19769,inst_19770,null));
var inst_19772 = cljs.core.sequential_QMARK_.call(null,inst_19766__$1);
var state_19917__$1 = (function (){var statearr_20038 = state_19917;
(statearr_20038[(63)] = inst_19771);

(statearr_20038[(64)] = inst_19768);

(statearr_20038[(33)] = inst_19766__$1);

(statearr_20038[(65)] = inst_19767);

return statearr_20038;
})();
if(inst_19772){
var statearr_20039_20157 = state_19917__$1;
(statearr_20039_20157[(1)] = (55));

} else {
var statearr_20040_20158 = state_19917__$1;
(statearr_20040_20158[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (78))){
var inst_19857 = (state_19917[(7)]);
var inst_19861 = cljs.core.chunk_first.call(null,inst_19857);
var inst_19862 = cljs.core.chunk_rest.call(null,inst_19857);
var inst_19863 = cljs.core.count.call(null,inst_19861);
var inst_19824 = inst_19862;
var inst_19825 = inst_19861;
var inst_19826 = inst_19863;
var inst_19827 = (0);
var state_19917__$1 = (function (){var statearr_20041 = state_19917;
(statearr_20041[(13)] = inst_19826);

(statearr_20041[(14)] = inst_19825);

(statearr_20041[(8)] = inst_19824);

(statearr_20041[(17)] = inst_19827);

return statearr_20041;
})();
var statearr_20042_20159 = state_19917__$1;
(statearr_20042_20159[(2)] = null);

(statearr_20042_20159[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (26))){
var inst_19691 = (state_19917[(2)]);
var state_19917__$1 = state_19917;
var statearr_20043_20160 = state_19917__$1;
(statearr_20043_20160[(2)] = inst_19691);

(statearr_20043_20160[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (16))){
var inst_19649 = (state_19917[(28)]);
var inst_19650 = (state_19917[(29)]);
var inst_19652 = (inst_19650 < inst_19649);
var inst_19653 = inst_19652;
var state_19917__$1 = state_19917;
if(cljs.core.truth_(inst_19653)){
var statearr_20044_20161 = state_19917__$1;
(statearr_20044_20161[(1)] = (18));

} else {
var statearr_20045_20162 = state_19917__$1;
(statearr_20045_20162[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (81))){
var inst_19868 = (state_19917[(62)]);
var state_19917__$1 = state_19917;
var statearr_20046_20163 = state_19917__$1;
(statearr_20046_20163[(2)] = inst_19868);

(statearr_20046_20163[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (79))){
var inst_19857 = (state_19917[(7)]);
var inst_19816 = (state_19917[(11)]);
var inst_19868 = (state_19917[(62)]);
var inst_19867 = cljs.core.first.call(null,inst_19857);
var inst_19868__$1 = cljs.core.nth.call(null,inst_19867,(0),null);
var inst_19869 = cljs.core.nth.call(null,inst_19867,(1),null);
var inst_19870 = cljs.core.apply.call(null,cljs.core.aget,inst_19816,inst_19868__$1);
var inst_19871 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19872 = [inst_19816];
var inst_19873 = (new cljs.core.PersistentVector(null,1,(5),inst_19871,inst_19872,null));
var inst_19874 = cljs.core.sequential_QMARK_.call(null,inst_19868__$1);
var state_19917__$1 = (function (){var statearr_20047 = state_19917;
(statearr_20047[(67)] = inst_19870);

(statearr_20047[(68)] = inst_19873);

(statearr_20047[(69)] = inst_19869);

(statearr_20047[(62)] = inst_19868__$1);

return statearr_20047;
})();
if(inst_19874){
var statearr_20048_20164 = state_19917__$1;
(statearr_20048_20164[(1)] = (81));

} else {
var statearr_20049_20165 = state_19917__$1;
(statearr_20049_20165[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (38))){
var inst_19713 = (state_19917[(61)]);
var inst_19720 = cljs.core.seq.call(null,inst_19713);
var inst_19721 = cljs.core.seq.call(null,inst_19720);
var inst_19722 = inst_19721;
var inst_19723 = null;
var inst_19724 = (0);
var inst_19725 = (0);
var state_19917__$1 = (function (){var statearr_20050 = state_19917;
(statearr_20050[(39)] = inst_19722);

(statearr_20050[(41)] = inst_19725);

(statearr_20050[(42)] = inst_19723);

(statearr_20050[(43)] = inst_19724);

return statearr_20050;
})();
var statearr_20051_20166 = state_19917__$1;
(statearr_20051_20166[(2)] = null);

(statearr_20051_20166[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (30))){
var inst_19589 = (state_19917[(36)]);
var inst_19676 = (state_19917[(56)]);
var inst_19679 = cljs.core.name.call(null,inst_19676);
var inst_19680 = cljs.core.get.call(null,inst_19589,inst_19676);
var inst_19681 = (camera["position"][inst_19679] = inst_19680);
var state_19917__$1 = state_19917;
var statearr_20052_20167 = state_19917__$1;
(statearr_20052_20167[(2)] = inst_19681);

(statearr_20052_20167[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (73))){
var inst_19834 = (state_19917[(26)]);
var inst_19843 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19844 = [inst_19834];
var inst_19845 = (new cljs.core.PersistentVector(null,1,(5),inst_19843,inst_19844,null));
var state_19917__$1 = state_19917;
var statearr_20053_20168 = state_19917__$1;
(statearr_20053_20168[(2)] = inst_19845);

(statearr_20053_20168[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (10))){
var inst_19614 = (state_19917[(52)]);
var inst_19616 = cljs.core.chunked_seq_QMARK_.call(null,inst_19614);
var state_19917__$1 = state_19917;
if(inst_19616){
var statearr_20054_20169 = state_19917__$1;
(statearr_20054_20169[(1)] = (13));

} else {
var statearr_20055_20170 = state_19917__$1;
(statearr_20055_20170[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (18))){
var inst_19655 = (state_19917[(45)]);
var inst_19589 = (state_19917[(36)]);
var inst_19650 = (state_19917[(29)]);
var inst_19648 = (state_19917[(30)]);
var inst_19655__$1 = cljs.core._nth.call(null,inst_19648,inst_19650);
var inst_19656 = cljs.core.contains_QMARK_.call(null,inst_19589,inst_19655__$1);
var state_19917__$1 = (function (){var statearr_20056 = state_19917;
(statearr_20056[(45)] = inst_19655__$1);

return statearr_20056;
})();
if(inst_19656){
var statearr_20057_20171 = state_19917__$1;
(statearr_20057_20171[(1)] = (21));

} else {
var statearr_20058_20172 = state_19917__$1;
(statearr_20058_20172[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (52))){
var inst_19755 = (state_19917[(54)]);
var inst_19759 = cljs.core.chunk_first.call(null,inst_19755);
var inst_19760 = cljs.core.chunk_rest.call(null,inst_19755);
var inst_19761 = cljs.core.count.call(null,inst_19759);
var inst_19722 = inst_19760;
var inst_19723 = inst_19759;
var inst_19724 = inst_19761;
var inst_19725 = (0);
var state_19917__$1 = (function (){var statearr_20059 = state_19917;
(statearr_20059[(39)] = inst_19722);

(statearr_20059[(41)] = inst_19725);

(statearr_20059[(42)] = inst_19723);

(statearr_20059[(43)] = inst_19724);

return statearr_20059;
})();
var statearr_20060_20173 = state_19917__$1;
(statearr_20060_20173[(2)] = null);

(statearr_20060_20173[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (67))){
var inst_19826 = (state_19917[(13)]);
var inst_19827 = (state_19917[(17)]);
var inst_19829 = (inst_19827 < inst_19826);
var inst_19830 = inst_19829;
var state_19917__$1 = state_19917;
if(cljs.core.truth_(inst_19830)){
var statearr_20061_20174 = state_19917__$1;
(statearr_20061_20174[(1)] = (69));

} else {
var statearr_20062_20175 = state_19917__$1;
(statearr_20062_20175[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (71))){
var inst_19896 = (state_19917[(2)]);
var state_19917__$1 = state_19917;
var statearr_20063_20176 = state_19917__$1;
(statearr_20063_20176[(2)] = inst_19896);

(statearr_20063_20176[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (42))){
var inst_19796 = (state_19917[(2)]);
var state_19917__$1 = state_19917;
var statearr_20064_20177 = state_19917__$1;
(statearr_20064_20177[(2)] = inst_19796);

(statearr_20064_20177[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (80))){
var inst_19891 = (state_19917[(2)]);
var state_19917__$1 = state_19917;
var statearr_20065_20178 = state_19917__$1;
(statearr_20065_20178[(2)] = inst_19891);

(statearr_20065_20178[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (37))){
var inst_19910 = (state_19917[(2)]);
var state_19917__$1 = state_19917;
var statearr_20066_20179 = state_19917__$1;
(statearr_20066_20179[(2)] = inst_19910);

(statearr_20066_20179[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (63))){
var inst_19905 = (state_19917[(2)]);
var state_19917__$1 = state_19917;
var statearr_20067_20180 = state_19917__$1;
(statearr_20067_20180[(2)] = inst_19905);

(statearr_20067_20180[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (8))){
var inst_19598 = (state_19917[(20)]);
var inst_19614 = (state_19917[(52)]);
var inst_19614__$1 = cljs.core.seq.call(null,inst_19598);
var state_19917__$1 = (function (){var statearr_20068 = state_19917;
(statearr_20068[(52)] = inst_19614__$1);

return statearr_20068;
})();
if(inst_19614__$1){
var statearr_20069_20181 = state_19917__$1;
(statearr_20069_20181[(1)] = (10));

} else {
var statearr_20070_20182 = state_19917__$1;
(statearr_20070_20182[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19918 === (49))){
var inst_19755 = (state_19917[(54)]);
var inst_19757 = cljs.core.chunked_seq_QMARK_.call(null,inst_19755);
var state_19917__$1 = state_19917;
if(inst_19757){
var statearr_20071_20183 = state_19917__$1;
(statearr_20071_20183[(1)] = (52));

} else {
var statearr_20072_20184 = state_19917__$1;
(statearr_20072_20184[(1)] = (53));

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7634__auto___20080,render_state,scene,camera,renderer))
;
return ((function (switch__7572__auto__,c__7634__auto___20080,render_state,scene,camera,renderer){
return (function() {
var metaverse$core$main_$_state_machine__7573__auto__ = null;
var metaverse$core$main_$_state_machine__7573__auto____0 = (function (){
var statearr_20076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20076[(0)] = metaverse$core$main_$_state_machine__7573__auto__);

(statearr_20076[(1)] = (1));

return statearr_20076;
});
var metaverse$core$main_$_state_machine__7573__auto____1 = (function (state_19917){
while(true){
var ret_value__7574__auto__ = (function (){try{while(true){
var result__7575__auto__ = switch__7572__auto__.call(null,state_19917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7575__auto__;
}
break;
}
}catch (e20077){if((e20077 instanceof Object)){
var ex__7576__auto__ = e20077;
var statearr_20078_20185 = state_19917;
(statearr_20078_20185[(5)] = ex__7576__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20186 = state_19917;
state_19917 = G__20186;
continue;
} else {
return ret_value__7574__auto__;
}
break;
}
});
metaverse$core$main_$_state_machine__7573__auto__ = function(state_19917){
switch(arguments.length){
case 0:
return metaverse$core$main_$_state_machine__7573__auto____0.call(this);
case 1:
return metaverse$core$main_$_state_machine__7573__auto____1.call(this,state_19917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metaverse$core$main_$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$0 = metaverse$core$main_$_state_machine__7573__auto____0;
metaverse$core$main_$_state_machine__7573__auto__.cljs$core$IFn$_invoke$arity$1 = metaverse$core$main_$_state_machine__7573__auto____1;
return metaverse$core$main_$_state_machine__7573__auto__;
})()
;})(switch__7572__auto__,c__7634__auto___20080,render_state,scene,camera,renderer))
})();
var state__7636__auto__ = (function (){var statearr_20079 = f__7635__auto__.call(null);
(statearr_20079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7634__auto___20080);

return statearr_20079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7636__auto__);
});})(c__7634__auto___20080,render_state,scene,camera,renderer))
);


metaverse.core.add_single_cube.call(null,render_state);

metaverse.core.set_initial_camera_position.call(null,render_state);

metaverse.util.recur_infinitely.call(null,cljs.core.partial.call(null,metaverse.core.rotate_fn,render_state),(50));

return metaverse.core.render.call(null,(0),renderer,scene,camera);
});
metaverse.util.append_onload.call(null,metaverse.core.main);
