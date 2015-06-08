// Compiled by ClojureScript 0.0-3308 {}
goog.provide('metaverse.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('metaverse.util');
metaverse.core.render = (function metaverse$core$render(ts,renderer,scene,camera){
requestAnimationFrame((function (p1__62107_SHARP_){
return metaverse$core$render.call(null,p1__62107_SHARP_,renderer,scene,camera);
}));

return renderer.render(scene,camera);
});
metaverse.core.add_single_cube = (function metaverse$core$add_single_cube(c){
var geom = (new THREE.BoxGeometry((1),(1),(1)));
var material = (new THREE.MeshBasicMaterial({"color": (15746048)}));
var cube = (new THREE.Mesh(geom,material));
var c__12926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto__,geom,material,cube){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto__,geom,material,cube){
return (function (state_62135){
var state_val_62136 = (state_62135[(1)]);
if((state_val_62136 === (1))){
var inst_62126 = [new cljs.core.Keyword(null,"geometry","geometry",-405034994)];
var inst_62127 = [new cljs.core.Keyword(null,"0x0000","0x0000",1541547801)];
var inst_62128 = [cube];
var inst_62129 = cljs.core.PersistentHashMap.fromArrays(inst_62127,inst_62128);
var inst_62130 = [inst_62129];
var inst_62131 = cljs.core.PersistentHashMap.fromArrays(inst_62126,inst_62130);
var state_62135__$1 = state_62135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62135__$1,(2),c,inst_62131);
} else {
if((state_val_62136 === (2))){
var inst_62133 = (state_62135[(2)]);
var state_62135__$1 = state_62135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62135__$1,inst_62133);
} else {
return null;
}
}
});})(c__12926__auto__,geom,material,cube))
;
return ((function (switch__12864__auto__,c__12926__auto__,geom,material,cube){
return (function() {
var metaverse$core$add_single_cube_$_state_machine__12865__auto__ = null;
var metaverse$core$add_single_cube_$_state_machine__12865__auto____0 = (function (){
var statearr_62140 = [null,null,null,null,null,null,null];
(statearr_62140[(0)] = metaverse$core$add_single_cube_$_state_machine__12865__auto__);

(statearr_62140[(1)] = (1));

return statearr_62140;
});
var metaverse$core$add_single_cube_$_state_machine__12865__auto____1 = (function (state_62135){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_62135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e62141){if((e62141 instanceof Object)){
var ex__12868__auto__ = e62141;
var statearr_62142_62144 = state_62135;
(statearr_62142_62144[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62145 = state_62135;
state_62135 = G__62145;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
metaverse$core$add_single_cube_$_state_machine__12865__auto__ = function(state_62135){
switch(arguments.length){
case 0:
return metaverse$core$add_single_cube_$_state_machine__12865__auto____0.call(this);
case 1:
return metaverse$core$add_single_cube_$_state_machine__12865__auto____1.call(this,state_62135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metaverse$core$add_single_cube_$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = metaverse$core$add_single_cube_$_state_machine__12865__auto____0;
metaverse$core$add_single_cube_$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = metaverse$core$add_single_cube_$_state_machine__12865__auto____1;
return metaverse$core$add_single_cube_$_state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto__,geom,material,cube))
})();
var state__12928__auto__ = (function (){var statearr_62143 = f__12927__auto__.call(null);
(statearr_62143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto__);

return statearr_62143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto__,geom,material,cube))
);

return c__12926__auto__;
});
metaverse.core.set_initial_camera_position = (function metaverse$core$set_initial_camera_position(c){
var c__12926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto__){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto__){
return (function (state_62173){
var state_val_62174 = (state_62173[(1)]);
if((state_val_62174 === (1))){
var inst_62164 = [new cljs.core.Keyword(null,"camera","camera",-1190348585)];
var inst_62165 = [new cljs.core.Keyword(null,"z","z",-789527183)];
var inst_62166 = [(5)];
var inst_62167 = cljs.core.PersistentHashMap.fromArrays(inst_62165,inst_62166);
var inst_62168 = [inst_62167];
var inst_62169 = cljs.core.PersistentHashMap.fromArrays(inst_62164,inst_62168);
var state_62173__$1 = state_62173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62173__$1,(2),c,inst_62169);
} else {
if((state_val_62174 === (2))){
var inst_62171 = (state_62173[(2)]);
var state_62173__$1 = state_62173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62173__$1,inst_62171);
} else {
return null;
}
}
});})(c__12926__auto__))
;
return ((function (switch__12864__auto__,c__12926__auto__){
return (function() {
var metaverse$core$set_initial_camera_position_$_state_machine__12865__auto__ = null;
var metaverse$core$set_initial_camera_position_$_state_machine__12865__auto____0 = (function (){
var statearr_62178 = [null,null,null,null,null,null,null];
(statearr_62178[(0)] = metaverse$core$set_initial_camera_position_$_state_machine__12865__auto__);

(statearr_62178[(1)] = (1));

return statearr_62178;
});
var metaverse$core$set_initial_camera_position_$_state_machine__12865__auto____1 = (function (state_62173){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_62173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e62179){if((e62179 instanceof Object)){
var ex__12868__auto__ = e62179;
var statearr_62180_62182 = state_62173;
(statearr_62180_62182[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62183 = state_62173;
state_62173 = G__62183;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
metaverse$core$set_initial_camera_position_$_state_machine__12865__auto__ = function(state_62173){
switch(arguments.length){
case 0:
return metaverse$core$set_initial_camera_position_$_state_machine__12865__auto____0.call(this);
case 1:
return metaverse$core$set_initial_camera_position_$_state_machine__12865__auto____1.call(this,state_62173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metaverse$core$set_initial_camera_position_$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = metaverse$core$set_initial_camera_position_$_state_machine__12865__auto____0;
metaverse$core$set_initial_camera_position_$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = metaverse$core$set_initial_camera_position_$_state_machine__12865__auto____1;
return metaverse$core$set_initial_camera_position_$_state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto__))
})();
var state__12928__auto__ = (function (){var statearr_62181 = f__12927__auto__.call(null);
(statearr_62181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto__);

return statearr_62181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto__))
);

return c__12926__auto__;
});
metaverse.core.rotate_fn = (function metaverse$core$rotate_fn(c){
var c__12926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto__){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto__){
return (function (state_62235){
var state_val_62236 = (state_62235[(1)]);
if((state_val_62236 === (1))){
var inst_62215 = [new cljs.core.Keyword(null,"modifications","modifications",2043415709)];
var inst_62216 = [new cljs.core.Keyword(null,"0x0000","0x0000",1541547801)];
var inst_62217 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62218 = ["rotation","x"];
var inst_62219 = (new cljs.core.PersistentVector(null,2,(5),inst_62217,inst_62218,null));
var inst_62220 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62221 = ["rotation","y"];
var inst_62222 = (new cljs.core.PersistentVector(null,2,(5),inst_62220,inst_62221,null));
var inst_62223 = [inst_62219,inst_62222];
var inst_62224 = (function (){return ((function (inst_62215,inst_62216,inst_62217,inst_62218,inst_62219,inst_62220,inst_62221,inst_62222,inst_62223,state_val_62236,c__12926__auto__){
return (function (p1__62184_SHARP_){
return (p1__62184_SHARP_ + 0.1);
});
;})(inst_62215,inst_62216,inst_62217,inst_62218,inst_62219,inst_62220,inst_62221,inst_62222,inst_62223,state_val_62236,c__12926__auto__))
})();
var inst_62225 = (function (){return ((function (inst_62215,inst_62216,inst_62217,inst_62218,inst_62219,inst_62220,inst_62221,inst_62222,inst_62223,inst_62224,state_val_62236,c__12926__auto__){
return (function (p1__62185_SHARP_){
return (p1__62185_SHARP_ + 0.1);
});
;})(inst_62215,inst_62216,inst_62217,inst_62218,inst_62219,inst_62220,inst_62221,inst_62222,inst_62223,inst_62224,state_val_62236,c__12926__auto__))
})();
var inst_62226 = [inst_62224,inst_62225];
var inst_62227 = cljs.core.PersistentHashMap.fromArrays(inst_62223,inst_62226);
var inst_62228 = [inst_62227];
var inst_62229 = cljs.core.PersistentHashMap.fromArrays(inst_62216,inst_62228);
var inst_62230 = [inst_62229];
var inst_62231 = cljs.core.PersistentHashMap.fromArrays(inst_62215,inst_62230);
var state_62235__$1 = state_62235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62235__$1,(2),c,inst_62231);
} else {
if((state_val_62236 === (2))){
var inst_62233 = (state_62235[(2)]);
var state_62235__$1 = state_62235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62235__$1,inst_62233);
} else {
return null;
}
}
});})(c__12926__auto__))
;
return ((function (switch__12864__auto__,c__12926__auto__){
return (function() {
var metaverse$core$rotate_fn_$_state_machine__12865__auto__ = null;
var metaverse$core$rotate_fn_$_state_machine__12865__auto____0 = (function (){
var statearr_62240 = [null,null,null,null,null,null,null];
(statearr_62240[(0)] = metaverse$core$rotate_fn_$_state_machine__12865__auto__);

(statearr_62240[(1)] = (1));

return statearr_62240;
});
var metaverse$core$rotate_fn_$_state_machine__12865__auto____1 = (function (state_62235){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_62235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e62241){if((e62241 instanceof Object)){
var ex__12868__auto__ = e62241;
var statearr_62242_62244 = state_62235;
(statearr_62242_62244[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62245 = state_62235;
state_62235 = G__62245;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
metaverse$core$rotate_fn_$_state_machine__12865__auto__ = function(state_62235){
switch(arguments.length){
case 0:
return metaverse$core$rotate_fn_$_state_machine__12865__auto____0.call(this);
case 1:
return metaverse$core$rotate_fn_$_state_machine__12865__auto____1.call(this,state_62235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metaverse$core$rotate_fn_$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = metaverse$core$rotate_fn_$_state_machine__12865__auto____0;
metaverse$core$rotate_fn_$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = metaverse$core$rotate_fn_$_state_machine__12865__auto____1;
return metaverse$core$rotate_fn_$_state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto__))
})();
var state__12928__auto__ = (function (){var statearr_62243 = f__12927__auto__.call(null);
(statearr_62243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto__);

return statearr_62243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto__))
);

return c__12926__auto__;
});
metaverse.core.main = (function metaverse$core$main(){
var render_state = cljs.core.async.chan.call(null);
var scene = (new THREE.Scene());
var camera = (new THREE.PerspectiveCamera((75),((window["innerWidth"]) / (window["innerHeight"])),0.1,(1000)));
var renderer = (new THREE.WebGLRenderer());
renderer.setSize((window["innerWidth"]),(window["innerHeight"]));

document.body.appendChild(renderer.domElement);

var c__12926__auto___63240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12926__auto___63240,render_state,scene,camera,renderer){
return (function (){
var f__12927__auto__ = (function (){var switch__12864__auto__ = ((function (c__12926__auto___63240,render_state,scene,camera,renderer){
return (function (state_63077){
var state_val_63078 = (state_63077[(1)]);
if((state_val_63078 === (65))){
var state_63077__$1 = state_63077;
var statearr_63082_63241 = state_63077__$1;
(statearr_63082_63241[(2)] = null);

(statearr_63082_63241[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (70))){
var inst_62984 = (state_63077[(7)]);
var inst_63017 = (state_63077[(8)]);
var inst_63017__$1 = cljs.core.seq.call(null,inst_62984);
var state_63077__$1 = (function (){var statearr_63083 = state_63077;
(statearr_63083[(8)] = inst_63017__$1);

return statearr_63083;
})();
if(inst_63017__$1){
var statearr_63084_63242 = state_63077__$1;
(statearr_63084_63242[(1)] = (75));

} else {
var statearr_63085_63243 = state_63077__$1;
(statearr_63085_63243[(1)] = (76));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (62))){
var inst_62976 = (state_63077[(9)]);
var inst_62751 = (state_63077[(10)]);
var inst_62963 = (state_63077[(11)]);
var inst_62973 = cljs.core.first.call(null,inst_62963);
var inst_62974 = cljs.core.nth.call(null,inst_62973,(0),null);
var inst_62975 = cljs.core.nth.call(null,inst_62973,(1),null);
var inst_62976__$1 = cljs.core.get.call(null,inst_62751,inst_62974);
var state_63077__$1 = (function (){var statearr_63089 = state_63077;
(statearr_63089[(9)] = inst_62976__$1);

(statearr_63089[(12)] = inst_62975);

return statearr_63089;
})();
if(cljs.core.truth_(inst_62976__$1)){
var statearr_63090_63244 = state_63077__$1;
(statearr_63090_63244[(1)] = (64));

} else {
var statearr_63091_63245 = state_63077__$1;
(statearr_63091_63245[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (74))){
var inst_62986 = (state_63077[(13)]);
var inst_62995 = (state_63077[(14)]);
var inst_62985 = (state_63077[(15)]);
var inst_62999 = (state_63077[(16)]);
var inst_62984 = (state_63077[(7)]);
var inst_62996 = (state_63077[(17)]);
var inst_62987 = (state_63077[(18)]);
var inst_63007 = (state_63077[(2)]);
var inst_63008 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63009 = inst_62995.call(null,inst_62996);
var inst_63010 = [inst_63009];
var inst_63011 = (new cljs.core.PersistentVector(null,1,(5),inst_63008,inst_63010,null));
var inst_63012 = cljs.core.concat.call(null,inst_62999,inst_63007,inst_63011);
var inst_63013 = cljs.core.apply.call(null,cljs.core.aset,inst_63012);
var inst_63014 = (inst_62987 + (1));
var tmp63079 = inst_62986;
var tmp63080 = inst_62985;
var tmp63081 = inst_62984;
var inst_62984__$1 = tmp63081;
var inst_62985__$1 = tmp63080;
var inst_62986__$1 = tmp63079;
var inst_62987__$1 = inst_63014;
var state_63077__$1 = (function (){var statearr_63092 = state_63077;
(statearr_63092[(13)] = inst_62986__$1);

(statearr_63092[(19)] = inst_63013);

(statearr_63092[(15)] = inst_62985__$1);

(statearr_63092[(7)] = inst_62984__$1);

(statearr_63092[(18)] = inst_62987__$1);

return statearr_63092;
})();
var statearr_63093_63246 = state_63077__$1;
(statearr_63093_63246[(2)] = null);

(statearr_63093_63246[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (7))){
var inst_62760 = (state_63077[(20)]);
var inst_62761 = (state_63077[(21)]);
var inst_62759 = (state_63077[(22)]);
var inst_62758 = (state_63077[(23)]);
var inst_62767 = cljs.core._nth.call(null,inst_62759,inst_62761);
var inst_62768 = cljs.core.nth.call(null,inst_62767,(0),null);
var inst_62769 = cljs.core.nth.call(null,inst_62767,(1),null);
var inst_62770 = scene.add(inst_62769);
var inst_62771 = (inst_62761 + (1));
var tmp63086 = inst_62760;
var tmp63087 = inst_62759;
var tmp63088 = inst_62758;
var inst_62758__$1 = tmp63088;
var inst_62759__$1 = tmp63087;
var inst_62760__$1 = tmp63086;
var inst_62761__$1 = inst_62771;
var state_63077__$1 = (function (){var statearr_63094 = state_63077;
(statearr_63094[(24)] = inst_62770);

(statearr_63094[(20)] = inst_62760__$1);

(statearr_63094[(21)] = inst_62761__$1);

(statearr_63094[(25)] = inst_62768);

(statearr_63094[(22)] = inst_62759__$1);

(statearr_63094[(23)] = inst_62758__$1);

return statearr_63094;
})();
var statearr_63095_63247 = state_63077__$1;
(statearr_63095_63247[(2)] = null);

(statearr_63095_63247[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (59))){
var state_63077__$1 = state_63077;
var statearr_63096_63248 = state_63077__$1;
(statearr_63096_63248[(2)] = null);

(statearr_63096_63248[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (20))){
var inst_62853 = (state_63077[(2)]);
var state_63077__$1 = state_63077;
var statearr_63097_63249 = state_63077__$1;
(statearr_63097_63249[(2)] = inst_62853);

(statearr_63097_63249[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (72))){
var inst_62994 = (state_63077[(26)]);
var state_63077__$1 = state_63077;
var statearr_63098_63250 = state_63077__$1;
(statearr_63098_63250[(2)] = inst_62994);

(statearr_63098_63250[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (58))){
var inst_62963 = (state_63077[(11)]);
var inst_62965 = cljs.core.chunked_seq_QMARK_.call(null,inst_62963);
var state_63077__$1 = state_63077;
if(inst_62965){
var statearr_63099_63251 = state_63077__$1;
(statearr_63099_63251[(1)] = (61));

} else {
var statearr_63100_63252 = state_63077__$1;
(statearr_63100_63252[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (60))){
var inst_63068 = (state_63077[(2)]);
var state_63077__$1 = state_63077;
var statearr_63101_63253 = state_63077__$1;
(statearr_63101_63253[(2)] = inst_63068);

(statearr_63101_63253[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (27))){
var inst_62827 = (state_63077[(27)]);
var inst_62831 = cljs.core.chunk_first.call(null,inst_62827);
var inst_62832 = cljs.core.chunk_rest.call(null,inst_62827);
var inst_62833 = cljs.core.count.call(null,inst_62831);
var inst_62807 = inst_62832;
var inst_62808 = inst_62831;
var inst_62809 = inst_62833;
var inst_62810 = (0);
var state_63077__$1 = (function (){var statearr_63102 = state_63077;
(statearr_63102[(28)] = inst_62810);

(statearr_63102[(29)] = inst_62809);

(statearr_63102[(30)] = inst_62808);

(statearr_63102[(31)] = inst_62807);

return statearr_63102;
})();
var statearr_63103_63254 = state_63077__$1;
(statearr_63103_63254[(2)] = null);

(statearr_63103_63254[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (1))){
var inst_62743 = cljs.core.PersistentHashMap.EMPTY;
var inst_62744 = inst_62743;
var state_63077__$1 = (function (){var statearr_63104 = state_63077;
(statearr_63104[(32)] = inst_62744);

return statearr_63104;
})();
var statearr_63105_63255 = state_63077__$1;
(statearr_63105_63255[(2)] = null);

(statearr_63105_63255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (69))){
var inst_62976 = (state_63077[(9)]);
var inst_62994 = (state_63077[(26)]);
var inst_62985 = (state_63077[(15)]);
var inst_62987 = (state_63077[(18)]);
var inst_62993 = cljs.core._nth.call(null,inst_62985,inst_62987);
var inst_62994__$1 = cljs.core.nth.call(null,inst_62993,(0),null);
var inst_62995 = cljs.core.nth.call(null,inst_62993,(1),null);
var inst_62996 = cljs.core.apply.call(null,cljs.core.aget,inst_62976,inst_62994__$1);
var inst_62997 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62998 = [inst_62976];
var inst_62999 = (new cljs.core.PersistentVector(null,1,(5),inst_62997,inst_62998,null));
var inst_63000 = cljs.core.sequential_QMARK_.call(null,inst_62994__$1);
var state_63077__$1 = (function (){var statearr_63106 = state_63077;
(statearr_63106[(26)] = inst_62994__$1);

(statearr_63106[(14)] = inst_62995);

(statearr_63106[(16)] = inst_62999);

(statearr_63106[(17)] = inst_62996);

return statearr_63106;
})();
if(inst_63000){
var statearr_63107_63256 = state_63077__$1;
(statearr_63107_63256[(1)] = (72));

} else {
var statearr_63108_63257 = state_63077__$1;
(statearr_63108_63257[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (24))){
var inst_62827 = (state_63077[(27)]);
var inst_62829 = cljs.core.chunked_seq_QMARK_.call(null,inst_62827);
var state_63077__$1 = state_63077;
if(inst_62829){
var statearr_63109_63258 = state_63077__$1;
(statearr_63109_63258[(1)] = (27));

} else {
var statearr_63110_63259 = state_63077__$1;
(statearr_63110_63259[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (55))){
var inst_62926 = (state_63077[(33)]);
var state_63077__$1 = state_63077;
var statearr_63111_63260 = state_63077__$1;
(statearr_63111_63260[(2)] = inst_62926);

(statearr_63111_63260[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (39))){
var state_63077__$1 = state_63077;
var statearr_63112_63261 = state_63077__$1;
(statearr_63112_63261[(2)] = null);

(statearr_63112_63261[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (46))){
var inst_62892 = (state_63077[(34)]);
var state_63077__$1 = state_63077;
var statearr_63113_63262 = state_63077__$1;
(statearr_63113_63262[(2)] = inst_62892);

(statearr_63113_63262[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (4))){
var inst_62744 = (state_63077[(32)]);
var inst_62747 = (state_63077[(2)]);
var inst_62748 = new cljs.core.Keyword(null,"geometry","geometry",-405034994).cljs$core$IFn$_invoke$arity$1(inst_62747);
var inst_62749 = new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(inst_62747);
var inst_62750 = new cljs.core.Keyword(null,"modifications","modifications",2043415709).cljs$core$IFn$_invoke$arity$1(inst_62747);
var inst_62751 = cljs.core.merge.call(null,inst_62744,inst_62748);
var inst_62756 = cljs.core.seq.call(null,inst_62748);
var inst_62757 = cljs.core.seq.call(null,inst_62756);
var inst_62758 = inst_62757;
var inst_62759 = null;
var inst_62760 = (0);
var inst_62761 = (0);
var state_63077__$1 = (function (){var statearr_63114 = state_63077;
(statearr_63114[(20)] = inst_62760);

(statearr_63114[(21)] = inst_62761);

(statearr_63114[(35)] = inst_62749);

(statearr_63114[(10)] = inst_62751);

(statearr_63114[(36)] = inst_62750);

(statearr_63114[(22)] = inst_62759);

(statearr_63114[(23)] = inst_62758);

return statearr_63114;
})();
var statearr_63115_63263 = state_63077__$1;
(statearr_63115_63263[(2)] = null);

(statearr_63115_63263[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (77))){
var inst_63054 = (state_63077[(2)]);
var state_63077__$1 = state_63077;
var statearr_63116_63264 = state_63077__$1;
(statearr_63116_63264[(2)] = inst_63054);

(statearr_63116_63264[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (54))){
var inst_62949 = (state_63077[(2)]);
var state_63077__$1 = state_63077;
var statearr_63120_63265 = state_63077__$1;
(statearr_63120_63265[(2)] = inst_62949);

(statearr_63120_63265[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (15))){
var inst_62791 = (state_63077[(2)]);
var state_63077__$1 = state_63077;
var statearr_63121_63266 = state_63077__$1;
(statearr_63121_63266[(2)] = inst_62791);

(statearr_63121_63266[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (48))){
var inst_62884 = (state_63077[(37)]);
var inst_62897 = (state_63077[(38)]);
var inst_62885 = (state_63077[(39)]);
var inst_62882 = (state_63077[(40)]);
var inst_62883 = (state_63077[(41)]);
var inst_62894 = (state_63077[(42)]);
var inst_62893 = (state_63077[(43)]);
var inst_62905 = (state_63077[(2)]);
var inst_62906 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62907 = inst_62893.call(null,inst_62894);
var inst_62908 = [inst_62907];
var inst_62909 = (new cljs.core.PersistentVector(null,1,(5),inst_62906,inst_62908,null));
var inst_62910 = cljs.core.concat.call(null,inst_62897,inst_62905,inst_62909);
var inst_62911 = cljs.core.apply.call(null,cljs.core.aset,inst_62910);
var inst_62912 = (inst_62885 + (1));
var tmp63117 = inst_62884;
var tmp63118 = inst_62882;
var tmp63119 = inst_62883;
var inst_62882__$1 = tmp63118;
var inst_62883__$1 = tmp63119;
var inst_62884__$1 = tmp63117;
var inst_62885__$1 = inst_62912;
var state_63077__$1 = (function (){var statearr_63122 = state_63077;
(statearr_63122[(37)] = inst_62884__$1);

(statearr_63122[(39)] = inst_62885__$1);

(statearr_63122[(40)] = inst_62882__$1);

(statearr_63122[(41)] = inst_62883__$1);

(statearr_63122[(44)] = inst_62911);

return statearr_63122;
})();
var statearr_63123_63267 = state_63077__$1;
(statearr_63123_63267[(2)] = null);

(statearr_63123_63267[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (50))){
var state_63077__$1 = state_63077;
var statearr_63124_63268 = state_63077__$1;
(statearr_63124_63268[(2)] = null);

(statearr_63124_63268[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (75))){
var inst_63017 = (state_63077[(8)]);
var inst_63019 = cljs.core.chunked_seq_QMARK_.call(null,inst_63017);
var state_63077__$1 = state_63077;
if(inst_63019){
var statearr_63125_63269 = state_63077__$1;
(statearr_63125_63269[(1)] = (78));

} else {
var statearr_63126_63270 = state_63077__$1;
(statearr_63126_63270[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (21))){
var inst_62749 = (state_63077[(35)]);
var inst_62815 = (state_63077[(45)]);
var inst_62818 = cljs.core.name.call(null,inst_62815);
var inst_62819 = cljs.core.get.call(null,inst_62749,inst_62815);
var inst_62820 = (camera["position"][inst_62818] = inst_62819);
var state_63077__$1 = state_63077;
var statearr_63127_63271 = state_63077__$1;
(statearr_63127_63271[(2)] = inst_62820);

(statearr_63127_63271[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (31))){
var state_63077__$1 = state_63077;
var statearr_63131_63272 = state_63077__$1;
(statearr_63131_63272[(2)] = null);

(statearr_63131_63272[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (32))){
var inst_62827 = (state_63077[(27)]);
var inst_62844 = (state_63077[(2)]);
var inst_62845 = cljs.core.next.call(null,inst_62827);
var inst_62807 = inst_62845;
var inst_62808 = null;
var inst_62809 = (0);
var inst_62810 = (0);
var state_63077__$1 = (function (){var statearr_63132 = state_63077;
(statearr_63132[(28)] = inst_62810);

(statearr_63132[(29)] = inst_62809);

(statearr_63132[(46)] = inst_62844);

(statearr_63132[(30)] = inst_62808);

(statearr_63132[(31)] = inst_62807);

return statearr_63132;
})();
var statearr_63133_63273 = state_63077__$1;
(statearr_63133_63273[(2)] = null);

(statearr_63133_63273[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (40))){
var inst_62863 = (state_63077[(47)]);
var inst_62865 = (state_63077[(48)]);
var inst_62864 = (state_63077[(49)]);
var inst_62862 = (state_63077[(50)]);
var inst_62959 = (state_63077[(2)]);
var inst_62960 = (inst_62865 + (1));
var tmp63128 = inst_62863;
var tmp63129 = inst_62864;
var tmp63130 = inst_62862;
var inst_62862__$1 = tmp63130;
var inst_62863__$1 = tmp63128;
var inst_62864__$1 = tmp63129;
var inst_62865__$1 = inst_62960;
var state_63077__$1 = (function (){var statearr_63134 = state_63077;
(statearr_63134[(47)] = inst_62863__$1);

(statearr_63134[(51)] = inst_62959);

(statearr_63134[(48)] = inst_62865__$1);

(statearr_63134[(49)] = inst_62864__$1);

(statearr_63134[(50)] = inst_62862__$1);

return statearr_63134;
})();
var statearr_63135_63274 = state_63077__$1;
(statearr_63135_63274[(2)] = null);

(statearr_63135_63274[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (56))){
var inst_62926 = (state_63077[(33)]);
var inst_62935 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62936 = [inst_62926];
var inst_62937 = (new cljs.core.PersistentVector(null,1,(5),inst_62935,inst_62936,null));
var state_63077__$1 = state_63077;
var statearr_63136_63275 = state_63077__$1;
(statearr_63136_63275[(2)] = inst_62937);

(statearr_63136_63275[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (33))){
var inst_62865 = (state_63077[(48)]);
var inst_62864 = (state_63077[(49)]);
var inst_62867 = (inst_62865 < inst_62864);
var inst_62868 = inst_62867;
var state_63077__$1 = state_63077;
if(cljs.core.truth_(inst_62868)){
var statearr_63137_63276 = state_63077__$1;
(statearr_63137_63276[(1)] = (35));

} else {
var statearr_63138_63277 = state_63077__$1;
(statearr_63138_63277[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (13))){
var inst_62774 = (state_63077[(52)]);
var inst_62778 = cljs.core.chunk_first.call(null,inst_62774);
var inst_62779 = cljs.core.chunk_rest.call(null,inst_62774);
var inst_62780 = cljs.core.count.call(null,inst_62778);
var inst_62758 = inst_62779;
var inst_62759 = inst_62778;
var inst_62760 = inst_62780;
var inst_62761 = (0);
var state_63077__$1 = (function (){var statearr_63139 = state_63077;
(statearr_63139[(20)] = inst_62760);

(statearr_63139[(21)] = inst_62761);

(statearr_63139[(22)] = inst_62759);

(statearr_63139[(23)] = inst_62758);

return statearr_63139;
})();
var statearr_63140_63278 = state_63077__$1;
(statearr_63140_63278[(2)] = null);

(statearr_63140_63278[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (22))){
var state_63077__$1 = state_63077;
var statearr_63141_63279 = state_63077__$1;
(statearr_63141_63279[(2)] = null);

(statearr_63141_63279[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (36))){
var inst_62963 = (state_63077[(11)]);
var inst_62862 = (state_63077[(50)]);
var inst_62963__$1 = cljs.core.seq.call(null,inst_62862);
var state_63077__$1 = (function (){var statearr_63142 = state_63077;
(statearr_63142[(11)] = inst_62963__$1);

return statearr_63142;
})();
if(inst_62963__$1){
var statearr_63143_63280 = state_63077__$1;
(statearr_63143_63280[(1)] = (58));

} else {
var statearr_63144_63281 = state_63077__$1;
(statearr_63144_63281[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (41))){
var inst_62884 = (state_63077[(37)]);
var inst_62885 = (state_63077[(39)]);
var inst_62887 = (inst_62885 < inst_62884);
var inst_62888 = inst_62887;
var state_63077__$1 = state_63077;
if(cljs.core.truth_(inst_62888)){
var statearr_63145_63282 = state_63077__$1;
(statearr_63145_63282[(1)] = (43));

} else {
var statearr_63146_63283 = state_63077__$1;
(statearr_63146_63283[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (43))){
var inst_62885 = (state_63077[(39)]);
var inst_62883 = (state_63077[(41)]);
var inst_62892 = (state_63077[(34)]);
var inst_62874 = (state_63077[(53)]);
var inst_62891 = cljs.core._nth.call(null,inst_62883,inst_62885);
var inst_62892__$1 = cljs.core.nth.call(null,inst_62891,(0),null);
var inst_62893 = cljs.core.nth.call(null,inst_62891,(1),null);
var inst_62894 = cljs.core.apply.call(null,cljs.core.aget,inst_62874,inst_62892__$1);
var inst_62895 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62896 = [inst_62874];
var inst_62897 = (new cljs.core.PersistentVector(null,1,(5),inst_62895,inst_62896,null));
var inst_62898 = cljs.core.sequential_QMARK_.call(null,inst_62892__$1);
var state_63077__$1 = (function (){var statearr_63147 = state_63077;
(statearr_63147[(38)] = inst_62897);

(statearr_63147[(42)] = inst_62894);

(statearr_63147[(34)] = inst_62892__$1);

(statearr_63147[(43)] = inst_62893);

return statearr_63147;
})();
if(inst_62898){
var statearr_63148_63284 = state_63077__$1;
(statearr_63148_63284[(1)] = (46));

} else {
var statearr_63149_63285 = state_63077__$1;
(statearr_63149_63285[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (61))){
var inst_62963 = (state_63077[(11)]);
var inst_62967 = cljs.core.chunk_first.call(null,inst_62963);
var inst_62968 = cljs.core.chunk_rest.call(null,inst_62963);
var inst_62969 = cljs.core.count.call(null,inst_62967);
var inst_62862 = inst_62968;
var inst_62863 = inst_62967;
var inst_62864 = inst_62969;
var inst_62865 = (0);
var state_63077__$1 = (function (){var statearr_63150 = state_63077;
(statearr_63150[(47)] = inst_62863);

(statearr_63150[(48)] = inst_62865);

(statearr_63150[(49)] = inst_62864);

(statearr_63150[(50)] = inst_62862);

return statearr_63150;
})();
var statearr_63151_63286 = state_63077__$1;
(statearr_63151_63286[(2)] = null);

(statearr_63151_63286[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (29))){
var inst_62848 = (state_63077[(2)]);
var state_63077__$1 = state_63077;
var statearr_63152_63287 = state_63077__$1;
(statearr_63152_63287[(2)] = inst_62848);

(statearr_63152_63287[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (44))){
var inst_62882 = (state_63077[(40)]);
var inst_62915 = (state_63077[(54)]);
var inst_62915__$1 = cljs.core.seq.call(null,inst_62882);
var state_63077__$1 = (function (){var statearr_63153 = state_63077;
(statearr_63153[(54)] = inst_62915__$1);

return statearr_63153;
})();
if(inst_62915__$1){
var statearr_63154_63288 = state_63077__$1;
(statearr_63154_63288[(1)] = (49));

} else {
var statearr_63155_63289 = state_63077__$1;
(statearr_63155_63289[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (6))){
var inst_62798 = (state_63077[(2)]);
var inst_62803 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62804 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)];
var inst_62805 = (new cljs.core.PersistentVector(null,3,(5),inst_62803,inst_62804,null));
var inst_62806 = cljs.core.seq.call(null,inst_62805);
var inst_62807 = inst_62806;
var inst_62808 = null;
var inst_62809 = (0);
var inst_62810 = (0);
var state_63077__$1 = (function (){var statearr_63156 = state_63077;
(statearr_63156[(28)] = inst_62810);

(statearr_63156[(29)] = inst_62809);

(statearr_63156[(55)] = inst_62798);

(statearr_63156[(30)] = inst_62808);

(statearr_63156[(31)] = inst_62807);

return statearr_63156;
})();
var statearr_63157_63290 = state_63077__$1;
(statearr_63157_63290[(2)] = null);

(statearr_63157_63290[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (28))){
var inst_62827 = (state_63077[(27)]);
var inst_62836 = (state_63077[(56)]);
var inst_62749 = (state_63077[(35)]);
var inst_62836__$1 = cljs.core.first.call(null,inst_62827);
var inst_62837 = cljs.core.contains_QMARK_.call(null,inst_62749,inst_62836__$1);
var state_63077__$1 = (function (){var statearr_63158 = state_63077;
(statearr_63158[(56)] = inst_62836__$1);

return statearr_63158;
})();
if(inst_62837){
var statearr_63159_63291 = state_63077__$1;
(statearr_63159_63291[(1)] = (30));

} else {
var statearr_63160_63292 = state_63077__$1;
(statearr_63160_63292[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (64))){
var inst_62975 = (state_63077[(12)]);
var inst_62982 = cljs.core.seq.call(null,inst_62975);
var inst_62983 = cljs.core.seq.call(null,inst_62982);
var inst_62984 = inst_62983;
var inst_62985 = null;
var inst_62986 = (0);
var inst_62987 = (0);
var state_63077__$1 = (function (){var statearr_63161 = state_63077;
(statearr_63161[(13)] = inst_62986);

(statearr_63161[(15)] = inst_62985);

(statearr_63161[(7)] = inst_62984);

(statearr_63161[(18)] = inst_62987);

return statearr_63161;
})();
var statearr_63162_63293 = state_63077__$1;
(statearr_63162_63293[(2)] = null);

(statearr_63162_63293[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (51))){
var inst_62952 = (state_63077[(2)]);
var state_63077__$1 = state_63077;
var statearr_63163_63294 = state_63077__$1;
(statearr_63163_63294[(2)] = inst_62952);

(statearr_63163_63294[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (25))){
var state_63077__$1 = state_63077;
var statearr_63164_63295 = state_63077__$1;
(statearr_63164_63295[(2)] = null);

(statearr_63164_63295[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (34))){
var inst_62751 = (state_63077[(10)]);
var inst_63072 = (state_63077[(2)]);
var inst_62744 = inst_62751;
var state_63077__$1 = (function (){var statearr_63165 = state_63077;
(statearr_63165[(57)] = inst_63072);

(statearr_63165[(32)] = inst_62744);

return statearr_63165;
})();
var statearr_63166_63296 = state_63077__$1;
(statearr_63166_63296[(2)] = null);

(statearr_63166_63296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (17))){
var inst_62750 = (state_63077[(36)]);
var inst_62855 = (state_63077[(2)]);
var inst_62860 = cljs.core.seq.call(null,inst_62750);
var inst_62861 = cljs.core.seq.call(null,inst_62860);
var inst_62862 = inst_62861;
var inst_62863 = null;
var inst_62864 = (0);
var inst_62865 = (0);
var state_63077__$1 = (function (){var statearr_63167 = state_63077;
(statearr_63167[(47)] = inst_62863);

(statearr_63167[(48)] = inst_62865);

(statearr_63167[(49)] = inst_62864);

(statearr_63167[(58)] = inst_62855);

(statearr_63167[(50)] = inst_62862);

return statearr_63167;
})();
var statearr_63168_63297 = state_63077__$1;
(statearr_63168_63297[(2)] = null);

(statearr_63168_63297[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (3))){
var inst_63075 = (state_63077[(2)]);
var state_63077__$1 = state_63077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63077__$1,inst_63075);
} else {
if((state_val_63078 === (12))){
var inst_62794 = (state_63077[(2)]);
var state_63077__$1 = state_63077;
var statearr_63169_63298 = state_63077__$1;
(statearr_63169_63298[(2)] = inst_62794);

(statearr_63169_63298[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (2))){
var state_63077__$1 = state_63077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63077__$1,(4),render_state);
} else {
if((state_val_63078 === (66))){
var inst_62963 = (state_63077[(11)]);
var inst_63061 = (state_63077[(2)]);
var inst_63062 = cljs.core.next.call(null,inst_62963);
var inst_62862 = inst_63062;
var inst_62863 = null;
var inst_62864 = (0);
var inst_62865 = (0);
var state_63077__$1 = (function (){var statearr_63173 = state_63077;
(statearr_63173[(59)] = inst_63061);

(statearr_63173[(47)] = inst_62863);

(statearr_63173[(48)] = inst_62865);

(statearr_63173[(49)] = inst_62864);

(statearr_63173[(50)] = inst_62862);

return statearr_63173;
})();
var statearr_63174_63299 = state_63077__$1;
(statearr_63174_63299[(2)] = null);

(statearr_63174_63299[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (23))){
var inst_62810 = (state_63077[(28)]);
var inst_62809 = (state_63077[(29)]);
var inst_62808 = (state_63077[(30)]);
var inst_62807 = (state_63077[(31)]);
var inst_62823 = (state_63077[(2)]);
var inst_62824 = (inst_62810 + (1));
var tmp63170 = inst_62809;
var tmp63171 = inst_62808;
var tmp63172 = inst_62807;
var inst_62807__$1 = tmp63172;
var inst_62808__$1 = tmp63171;
var inst_62809__$1 = tmp63170;
var inst_62810__$1 = inst_62824;
var state_63077__$1 = (function (){var statearr_63175 = state_63077;
(statearr_63175[(28)] = inst_62810__$1);

(statearr_63175[(29)] = inst_62809__$1);

(statearr_63175[(60)] = inst_62823);

(statearr_63175[(30)] = inst_62808__$1);

(statearr_63175[(31)] = inst_62807__$1);

return statearr_63175;
})();
var statearr_63176_63300 = state_63077__$1;
(statearr_63176_63300[(2)] = null);

(statearr_63176_63300[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (47))){
var inst_62892 = (state_63077[(34)]);
var inst_62901 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62902 = [inst_62892];
var inst_62903 = (new cljs.core.PersistentVector(null,1,(5),inst_62901,inst_62902,null));
var state_63077__$1 = state_63077;
var statearr_63177_63301 = state_63077__$1;
(statearr_63177_63301[(2)] = inst_62903);

(statearr_63177_63301[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (35))){
var inst_62863 = (state_63077[(47)]);
var inst_62865 = (state_63077[(48)]);
var inst_62751 = (state_63077[(10)]);
var inst_62874 = (state_63077[(53)]);
var inst_62871 = cljs.core._nth.call(null,inst_62863,inst_62865);
var inst_62872 = cljs.core.nth.call(null,inst_62871,(0),null);
var inst_62873 = cljs.core.nth.call(null,inst_62871,(1),null);
var inst_62874__$1 = cljs.core.get.call(null,inst_62751,inst_62872);
var state_63077__$1 = (function (){var statearr_63178 = state_63077;
(statearr_63178[(61)] = inst_62873);

(statearr_63178[(53)] = inst_62874__$1);

return statearr_63178;
})();
if(cljs.core.truth_(inst_62874__$1)){
var statearr_63179_63302 = state_63077__$1;
(statearr_63179_63302[(1)] = (38));

} else {
var statearr_63180_63303 = state_63077__$1;
(statearr_63180_63303[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (82))){
var inst_63028 = (state_63077[(62)]);
var inst_63037 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63038 = [inst_63028];
var inst_63039 = (new cljs.core.PersistentVector(null,1,(5),inst_63037,inst_63038,null));
var state_63077__$1 = state_63077;
var statearr_63181_63304 = state_63077__$1;
(statearr_63181_63304[(2)] = inst_63039);

(statearr_63181_63304[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (76))){
var state_63077__$1 = state_63077;
var statearr_63182_63305 = state_63077__$1;
(statearr_63182_63305[(2)] = null);

(statearr_63182_63305[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (19))){
var inst_62827 = (state_63077[(27)]);
var inst_62807 = (state_63077[(31)]);
var inst_62827__$1 = cljs.core.seq.call(null,inst_62807);
var state_63077__$1 = (function (){var statearr_63183 = state_63077;
(statearr_63183[(27)] = inst_62827__$1);

return statearr_63183;
})();
if(inst_62827__$1){
var statearr_63184_63306 = state_63077__$1;
(statearr_63184_63306[(1)] = (24));

} else {
var statearr_63185_63307 = state_63077__$1;
(statearr_63185_63307[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (57))){
var inst_62928 = (state_63077[(63)]);
var inst_62927 = (state_63077[(64)]);
var inst_62915 = (state_63077[(54)]);
var inst_62931 = (state_63077[(65)]);
var inst_62939 = (state_63077[(2)]);
var inst_62940 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62941 = inst_62927.call(null,inst_62928);
var inst_62942 = [inst_62941];
var inst_62943 = (new cljs.core.PersistentVector(null,1,(5),inst_62940,inst_62942,null));
var inst_62944 = cljs.core.concat.call(null,inst_62931,inst_62939,inst_62943);
var inst_62945 = cljs.core.apply.call(null,cljs.core.aset,inst_62944);
var inst_62946 = cljs.core.next.call(null,inst_62915);
var inst_62882 = inst_62946;
var inst_62883 = null;
var inst_62884 = (0);
var inst_62885 = (0);
var state_63077__$1 = (function (){var statearr_63186 = state_63077;
(statearr_63186[(37)] = inst_62884);

(statearr_63186[(39)] = inst_62885);

(statearr_63186[(40)] = inst_62882);

(statearr_63186[(41)] = inst_62883);

(statearr_63186[(66)] = inst_62945);

return statearr_63186;
})();
var statearr_63187_63308 = state_63077__$1;
(statearr_63187_63308[(2)] = null);

(statearr_63187_63308[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (68))){
var inst_63058 = (state_63077[(2)]);
var state_63077__$1 = state_63077;
var statearr_63188_63309 = state_63077__$1;
(statearr_63188_63309[(2)] = inst_63058);

(statearr_63188_63309[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (11))){
var state_63077__$1 = state_63077;
var statearr_63189_63310 = state_63077__$1;
(statearr_63189_63310[(2)] = null);

(statearr_63189_63310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (9))){
var inst_62796 = (state_63077[(2)]);
var state_63077__$1 = state_63077;
var statearr_63190_63311 = state_63077__$1;
(statearr_63190_63311[(2)] = inst_62796);

(statearr_63190_63311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (5))){
var inst_62760 = (state_63077[(20)]);
var inst_62761 = (state_63077[(21)]);
var inst_62763 = (inst_62761 < inst_62760);
var inst_62764 = inst_62763;
var state_63077__$1 = state_63077;
if(cljs.core.truth_(inst_62764)){
var statearr_63191_63312 = state_63077__$1;
(statearr_63191_63312[(1)] = (7));

} else {
var statearr_63192_63313 = state_63077__$1;
(statearr_63192_63313[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (83))){
var inst_63033 = (state_63077[(67)]);
var inst_63029 = (state_63077[(68)]);
var inst_63017 = (state_63077[(8)]);
var inst_63030 = (state_63077[(69)]);
var inst_63041 = (state_63077[(2)]);
var inst_63042 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63043 = inst_63029.call(null,inst_63030);
var inst_63044 = [inst_63043];
var inst_63045 = (new cljs.core.PersistentVector(null,1,(5),inst_63042,inst_63044,null));
var inst_63046 = cljs.core.concat.call(null,inst_63033,inst_63041,inst_63045);
var inst_63047 = cljs.core.apply.call(null,cljs.core.aset,inst_63046);
var inst_63048 = cljs.core.next.call(null,inst_63017);
var inst_62984 = inst_63048;
var inst_62985 = null;
var inst_62986 = (0);
var inst_62987 = (0);
var state_63077__$1 = (function (){var statearr_63193 = state_63077;
(statearr_63193[(13)] = inst_62986);

(statearr_63193[(15)] = inst_62985);

(statearr_63193[(7)] = inst_62984);

(statearr_63193[(70)] = inst_63047);

(statearr_63193[(18)] = inst_62987);

return statearr_63193;
})();
var statearr_63194_63314 = state_63077__$1;
(statearr_63194_63314[(2)] = null);

(statearr_63194_63314[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (14))){
var inst_62774 = (state_63077[(52)]);
var inst_62784 = cljs.core.first.call(null,inst_62774);
var inst_62785 = cljs.core.nth.call(null,inst_62784,(0),null);
var inst_62786 = cljs.core.nth.call(null,inst_62784,(1),null);
var inst_62787 = scene.add(inst_62786);
var inst_62788 = cljs.core.next.call(null,inst_62774);
var inst_62758 = inst_62788;
var inst_62759 = null;
var inst_62760 = (0);
var inst_62761 = (0);
var state_63077__$1 = (function (){var statearr_63195 = state_63077;
(statearr_63195[(20)] = inst_62760);

(statearr_63195[(21)] = inst_62761);

(statearr_63195[(71)] = inst_62785);

(statearr_63195[(72)] = inst_62787);

(statearr_63195[(22)] = inst_62759);

(statearr_63195[(23)] = inst_62758);

return statearr_63195;
})();
var statearr_63196_63315 = state_63077__$1;
(statearr_63196_63315[(2)] = null);

(statearr_63196_63315[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (45))){
var inst_62954 = (state_63077[(2)]);
var state_63077__$1 = state_63077;
var statearr_63197_63316 = state_63077__$1;
(statearr_63197_63316[(2)] = inst_62954);

(statearr_63197_63316[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (53))){
var inst_62926 = (state_63077[(33)]);
var inst_62915 = (state_63077[(54)]);
var inst_62874 = (state_63077[(53)]);
var inst_62925 = cljs.core.first.call(null,inst_62915);
var inst_62926__$1 = cljs.core.nth.call(null,inst_62925,(0),null);
var inst_62927 = cljs.core.nth.call(null,inst_62925,(1),null);
var inst_62928 = cljs.core.apply.call(null,cljs.core.aget,inst_62874,inst_62926__$1);
var inst_62929 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62930 = [inst_62874];
var inst_62931 = (new cljs.core.PersistentVector(null,1,(5),inst_62929,inst_62930,null));
var inst_62932 = cljs.core.sequential_QMARK_.call(null,inst_62926__$1);
var state_63077__$1 = (function (){var statearr_63198 = state_63077;
(statearr_63198[(33)] = inst_62926__$1);

(statearr_63198[(63)] = inst_62928);

(statearr_63198[(64)] = inst_62927);

(statearr_63198[(65)] = inst_62931);

return statearr_63198;
})();
if(inst_62932){
var statearr_63199_63317 = state_63077__$1;
(statearr_63199_63317[(1)] = (55));

} else {
var statearr_63200_63318 = state_63077__$1;
(statearr_63200_63318[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (78))){
var inst_63017 = (state_63077[(8)]);
var inst_63021 = cljs.core.chunk_first.call(null,inst_63017);
var inst_63022 = cljs.core.chunk_rest.call(null,inst_63017);
var inst_63023 = cljs.core.count.call(null,inst_63021);
var inst_62984 = inst_63022;
var inst_62985 = inst_63021;
var inst_62986 = inst_63023;
var inst_62987 = (0);
var state_63077__$1 = (function (){var statearr_63201 = state_63077;
(statearr_63201[(13)] = inst_62986);

(statearr_63201[(15)] = inst_62985);

(statearr_63201[(7)] = inst_62984);

(statearr_63201[(18)] = inst_62987);

return statearr_63201;
})();
var statearr_63202_63319 = state_63077__$1;
(statearr_63202_63319[(2)] = null);

(statearr_63202_63319[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (26))){
var inst_62851 = (state_63077[(2)]);
var state_63077__$1 = state_63077;
var statearr_63203_63320 = state_63077__$1;
(statearr_63203_63320[(2)] = inst_62851);

(statearr_63203_63320[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (16))){
var inst_62810 = (state_63077[(28)]);
var inst_62809 = (state_63077[(29)]);
var inst_62812 = (inst_62810 < inst_62809);
var inst_62813 = inst_62812;
var state_63077__$1 = state_63077;
if(cljs.core.truth_(inst_62813)){
var statearr_63204_63321 = state_63077__$1;
(statearr_63204_63321[(1)] = (18));

} else {
var statearr_63205_63322 = state_63077__$1;
(statearr_63205_63322[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (81))){
var inst_63028 = (state_63077[(62)]);
var state_63077__$1 = state_63077;
var statearr_63206_63323 = state_63077__$1;
(statearr_63206_63323[(2)] = inst_63028);

(statearr_63206_63323[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (79))){
var inst_62976 = (state_63077[(9)]);
var inst_63028 = (state_63077[(62)]);
var inst_63017 = (state_63077[(8)]);
var inst_63027 = cljs.core.first.call(null,inst_63017);
var inst_63028__$1 = cljs.core.nth.call(null,inst_63027,(0),null);
var inst_63029 = cljs.core.nth.call(null,inst_63027,(1),null);
var inst_63030 = cljs.core.apply.call(null,cljs.core.aget,inst_62976,inst_63028__$1);
var inst_63031 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63032 = [inst_62976];
var inst_63033 = (new cljs.core.PersistentVector(null,1,(5),inst_63031,inst_63032,null));
var inst_63034 = cljs.core.sequential_QMARK_.call(null,inst_63028__$1);
var state_63077__$1 = (function (){var statearr_63207 = state_63077;
(statearr_63207[(67)] = inst_63033);

(statearr_63207[(62)] = inst_63028__$1);

(statearr_63207[(68)] = inst_63029);

(statearr_63207[(69)] = inst_63030);

return statearr_63207;
})();
if(inst_63034){
var statearr_63208_63324 = state_63077__$1;
(statearr_63208_63324[(1)] = (81));

} else {
var statearr_63209_63325 = state_63077__$1;
(statearr_63209_63325[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (38))){
var inst_62873 = (state_63077[(61)]);
var inst_62880 = cljs.core.seq.call(null,inst_62873);
var inst_62881 = cljs.core.seq.call(null,inst_62880);
var inst_62882 = inst_62881;
var inst_62883 = null;
var inst_62884 = (0);
var inst_62885 = (0);
var state_63077__$1 = (function (){var statearr_63210 = state_63077;
(statearr_63210[(37)] = inst_62884);

(statearr_63210[(39)] = inst_62885);

(statearr_63210[(40)] = inst_62882);

(statearr_63210[(41)] = inst_62883);

return statearr_63210;
})();
var statearr_63211_63326 = state_63077__$1;
(statearr_63211_63326[(2)] = null);

(statearr_63211_63326[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (30))){
var inst_62836 = (state_63077[(56)]);
var inst_62749 = (state_63077[(35)]);
var inst_62839 = cljs.core.name.call(null,inst_62836);
var inst_62840 = cljs.core.get.call(null,inst_62749,inst_62836);
var inst_62841 = (camera["position"][inst_62839] = inst_62840);
var state_63077__$1 = state_63077;
var statearr_63212_63327 = state_63077__$1;
(statearr_63212_63327[(2)] = inst_62841);

(statearr_63212_63327[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (73))){
var inst_62994 = (state_63077[(26)]);
var inst_63003 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63004 = [inst_62994];
var inst_63005 = (new cljs.core.PersistentVector(null,1,(5),inst_63003,inst_63004,null));
var state_63077__$1 = state_63077;
var statearr_63213_63328 = state_63077__$1;
(statearr_63213_63328[(2)] = inst_63005);

(statearr_63213_63328[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (10))){
var inst_62774 = (state_63077[(52)]);
var inst_62776 = cljs.core.chunked_seq_QMARK_.call(null,inst_62774);
var state_63077__$1 = state_63077;
if(inst_62776){
var statearr_63214_63329 = state_63077__$1;
(statearr_63214_63329[(1)] = (13));

} else {
var statearr_63215_63330 = state_63077__$1;
(statearr_63215_63330[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (18))){
var inst_62810 = (state_63077[(28)]);
var inst_62749 = (state_63077[(35)]);
var inst_62808 = (state_63077[(30)]);
var inst_62815 = (state_63077[(45)]);
var inst_62815__$1 = cljs.core._nth.call(null,inst_62808,inst_62810);
var inst_62816 = cljs.core.contains_QMARK_.call(null,inst_62749,inst_62815__$1);
var state_63077__$1 = (function (){var statearr_63216 = state_63077;
(statearr_63216[(45)] = inst_62815__$1);

return statearr_63216;
})();
if(inst_62816){
var statearr_63217_63331 = state_63077__$1;
(statearr_63217_63331[(1)] = (21));

} else {
var statearr_63218_63332 = state_63077__$1;
(statearr_63218_63332[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (52))){
var inst_62915 = (state_63077[(54)]);
var inst_62919 = cljs.core.chunk_first.call(null,inst_62915);
var inst_62920 = cljs.core.chunk_rest.call(null,inst_62915);
var inst_62921 = cljs.core.count.call(null,inst_62919);
var inst_62882 = inst_62920;
var inst_62883 = inst_62919;
var inst_62884 = inst_62921;
var inst_62885 = (0);
var state_63077__$1 = (function (){var statearr_63219 = state_63077;
(statearr_63219[(37)] = inst_62884);

(statearr_63219[(39)] = inst_62885);

(statearr_63219[(40)] = inst_62882);

(statearr_63219[(41)] = inst_62883);

return statearr_63219;
})();
var statearr_63220_63333 = state_63077__$1;
(statearr_63220_63333[(2)] = null);

(statearr_63220_63333[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (67))){
var inst_62986 = (state_63077[(13)]);
var inst_62987 = (state_63077[(18)]);
var inst_62989 = (inst_62987 < inst_62986);
var inst_62990 = inst_62989;
var state_63077__$1 = state_63077;
if(cljs.core.truth_(inst_62990)){
var statearr_63221_63334 = state_63077__$1;
(statearr_63221_63334[(1)] = (69));

} else {
var statearr_63222_63335 = state_63077__$1;
(statearr_63222_63335[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (71))){
var inst_63056 = (state_63077[(2)]);
var state_63077__$1 = state_63077;
var statearr_63223_63336 = state_63077__$1;
(statearr_63223_63336[(2)] = inst_63056);

(statearr_63223_63336[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (42))){
var inst_62956 = (state_63077[(2)]);
var state_63077__$1 = state_63077;
var statearr_63224_63337 = state_63077__$1;
(statearr_63224_63337[(2)] = inst_62956);

(statearr_63224_63337[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (80))){
var inst_63051 = (state_63077[(2)]);
var state_63077__$1 = state_63077;
var statearr_63225_63338 = state_63077__$1;
(statearr_63225_63338[(2)] = inst_63051);

(statearr_63225_63338[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (37))){
var inst_63070 = (state_63077[(2)]);
var state_63077__$1 = state_63077;
var statearr_63226_63339 = state_63077__$1;
(statearr_63226_63339[(2)] = inst_63070);

(statearr_63226_63339[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (63))){
var inst_63065 = (state_63077[(2)]);
var state_63077__$1 = state_63077;
var statearr_63227_63340 = state_63077__$1;
(statearr_63227_63340[(2)] = inst_63065);

(statearr_63227_63340[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (8))){
var inst_62774 = (state_63077[(52)]);
var inst_62758 = (state_63077[(23)]);
var inst_62774__$1 = cljs.core.seq.call(null,inst_62758);
var state_63077__$1 = (function (){var statearr_63228 = state_63077;
(statearr_63228[(52)] = inst_62774__$1);

return statearr_63228;
})();
if(inst_62774__$1){
var statearr_63229_63341 = state_63077__$1;
(statearr_63229_63341[(1)] = (10));

} else {
var statearr_63230_63342 = state_63077__$1;
(statearr_63230_63342[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63078 === (49))){
var inst_62915 = (state_63077[(54)]);
var inst_62917 = cljs.core.chunked_seq_QMARK_.call(null,inst_62915);
var state_63077__$1 = state_63077;
if(inst_62917){
var statearr_63231_63343 = state_63077__$1;
(statearr_63231_63343[(1)] = (52));

} else {
var statearr_63232_63344 = state_63077__$1;
(statearr_63232_63344[(1)] = (53));

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
});})(c__12926__auto___63240,render_state,scene,camera,renderer))
;
return ((function (switch__12864__auto__,c__12926__auto___63240,render_state,scene,camera,renderer){
return (function() {
var metaverse$core$main_$_state_machine__12865__auto__ = null;
var metaverse$core$main_$_state_machine__12865__auto____0 = (function (){
var statearr_63236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63236[(0)] = metaverse$core$main_$_state_machine__12865__auto__);

(statearr_63236[(1)] = (1));

return statearr_63236;
});
var metaverse$core$main_$_state_machine__12865__auto____1 = (function (state_63077){
while(true){
var ret_value__12866__auto__ = (function (){try{while(true){
var result__12867__auto__ = switch__12864__auto__.call(null,state_63077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12867__auto__;
}
break;
}
}catch (e63237){if((e63237 instanceof Object)){
var ex__12868__auto__ = e63237;
var statearr_63238_63345 = state_63077;
(statearr_63238_63345[(5)] = ex__12868__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63346 = state_63077;
state_63077 = G__63346;
continue;
} else {
return ret_value__12866__auto__;
}
break;
}
});
metaverse$core$main_$_state_machine__12865__auto__ = function(state_63077){
switch(arguments.length){
case 0:
return metaverse$core$main_$_state_machine__12865__auto____0.call(this);
case 1:
return metaverse$core$main_$_state_machine__12865__auto____1.call(this,state_63077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metaverse$core$main_$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$0 = metaverse$core$main_$_state_machine__12865__auto____0;
metaverse$core$main_$_state_machine__12865__auto__.cljs$core$IFn$_invoke$arity$1 = metaverse$core$main_$_state_machine__12865__auto____1;
return metaverse$core$main_$_state_machine__12865__auto__;
})()
;})(switch__12864__auto__,c__12926__auto___63240,render_state,scene,camera,renderer))
})();
var state__12928__auto__ = (function (){var statearr_63239 = f__12927__auto__.call(null);
(statearr_63239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12926__auto___63240);

return statearr_63239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12928__auto__);
});})(c__12926__auto___63240,render_state,scene,camera,renderer))
);


metaverse.core.add_single_cube.call(null,render_state);

metaverse.core.set_initial_camera_position.call(null,render_state);

metaverse.util.recur_infinitely.call(null,cljs.core.partial.call(null,metaverse.core.rotate_fn,render_state),(200));

return metaverse.core.render.call(null,(0),renderer,scene,camera);
});
metaverse.util.append_onload.call(null,metaverse.core.main);
