"use strict";(self.webpackChunkufe_tree_tracking_app=self.webpackChunkufe_tree_tracking_app||[]).push([[8178],{58178:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(37762),u=r(15861),a=r(15671),i=r(43144),s=r(87757),o=r(10064),c=r(32718),p=r(92026),l=r(75298),f=r(92975),h=r(83406),y=r(97114),d=r(19995),v=r(33382),g=r(47615),m=r(68808),_=r(68716),w=r(52410),x=function(){function e(){var t=this;(0,a.Z)(this,e),this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=function(){var e=(0,u.Z)(s.mark((function e(r){var u,a,i,o,c,y,v,w,x,k,Z;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=t._queryEngine.objectIdField,e.next=3,(0,_.Bm)(t._getFeatureUrl,t._featureType.typeName,t._getFeatureOutputFormat,{customParameters:t._customParameters,dateFields:t._queryEngine.fieldsIndex.dateFields.map((function(e){return e.name})),signal:r});case 3:return a=e.sent,e.next=6,(0,g.O3)(a);case 6:if((0,l.k_)(r),i=(0,g.lG)(a,{geometryType:t._queryEngine.geometryType,hasZ:!1,objectIdField:u}),!(0,f.fS)(t._queryEngine.spatialReference,f.Zn)){o=(0,n.Z)(i);try{for(o.s();!(c=o.n()).done;)y=c.value,(0,p.pC)(y.geometry)&&(y.geometry=(0,h.GH)((0,d.iV)((0,h.di)(y.geometry,t._queryEngine.geometryType,!1,!1),f.Zn,t._queryEngine.spatialReference)))}catch(s){o.e(s)}finally{o.f()}}v=1,w=(0,n.Z)(i);try{for(w.s();!(x=w.n()).done;)k=x.value,Z={},(0,m.O0)(t._fieldsIndex,Z,k.attributes,!0),k.attributes=Z,null==k.attributes[u]&&(k.objectId=k.attributes[u]=v++)}catch(s){w.e(s)}finally{w.f()}return e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return(0,i.Z)(e,[{key:"destroy",value:function(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null}},{key:"load",value:function(){var e=(0,u.Z)(s.mark((function e(t,r){var n,u,a,i,o,c,f,h,d;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.getFeatureUrl,u=t.getFeatureOutputFormat,a=t.spatialReference,i=t.fields,o=t.geometryType,c=t.featureType,f=t.objectIdField,h=t.customParameters,this._featureType=c,this._customParameters=h,this._getFeatureUrl=n,this._getFeatureOutputFormat=u,this._fieldsIndex=new w.Z(i),e.next=8,this._checkProjection(a);case 8:return(0,l.k_)(r),this._queryEngine=new v.Z({fields:i,geometryType:o,hasM:!1,hasZ:!1,objectIdField:f,spatialReference:a,timeInfo:null,featureStore:new y.Z({geometryType:o,hasM:!1,hasZ:!1})}),e.next=12,this._snapshotFeatures((0,p.Wg)(r.signal));case 12:return d=e.sent,e.abrupt("return",(this._queryEngine.featureStore.addMany(d),{extent:this._queryEngine.fullExtent}));case 14:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,u.Z)(s.mark((function e(){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new o.Z("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,u.Z)(s.mark((function e(){var t,r,n=arguments;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQuery(t,r.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=(0,u.Z)(s.mark((function e(){var t,r,n=arguments;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForCount(t,r.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=(0,u.Z)(s.mark((function e(){var t,r,n=arguments;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForIds(t,r.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=(0,u.Z)(s.mark((function e(){var t,r,n=arguments;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForExtent(t,r.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"querySnapping",value:function(){var e=(0,u.Z)(s.mark((function e(t){var r,n=arguments;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this._waitSnapshotComplete();case 3:return e.abrupt("return",this._queryEngine.executeQueryForSnapping(t,r.signal));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=(0,u.Z)(s.mark((function e(t){var r,n=this;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._customParameters=t,null==(r=this._snapshotTask)||r.abort(),this._snapshotTask=(0,l.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((function(e){n._queryEngine.featureStore.clear(),e&&n._queryEngine.featureStore.addMany(e)}),(function(e){n._queryEngine.featureStore.clear(),(0,l.D_)(e)||c.Z.getLogger("esri.layers.WFSLayer").error(new o.Z("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))})),e.next=6,this._waitSnapshotComplete();case 6:return e.abrupt("return",{extent:this._queryEngine.fullExtent});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_waitSnapshotComplete",value:function(){var e=(0,u.Z)(s.mark((function e(){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._snapshotTask||this._snapshotTask.finished){e.next=9;break}return e.prev=1,e.next=4,this._snapshotTask.promise;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.abrupt("return",this._waitSnapshotComplete());case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"_checkProjection",value:function(){var e=(0,u.Z)(s.mark((function e(t){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d._W)(f.Zn,t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new o.Z("unsupported-projection","Projection not supported",{spatialReference:t});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()},68808:function(e,t,r){r.d(t,{av:function(){return f},d1:function(){return y},b:function(){return k},O0:function(){return g},og:function(){return _}});var n=r(15861),u=r(37762),a=r(43144),i=r(15671),s=r(87757),o=r(92975),c=r(80031),p=(0,a.Z)((function e(){(0,i.Z)(this,e),this.code=null,this.description=null})),l=(0,a.Z)((function e(t){(0,i.Z)(this,e),this.error=new p,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}));function f(e){return new l(e)}var h=(0,a.Z)((function e(t){(0,i.Z)(this,e),this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}));function y(e){return new h(e)}var d,v=new Set;function g(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4?arguments[4]:void 0;for(var i in v.clear(),r){var s=e.get(i);if(s){var o=r[i],p=m(s,o);if(p!==o&&a&&a.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:s,originalValue:o,sanitizedValue:p}}),v.add(s.name),s&&(n||s.editable)){var l=(0,c.Qc)(s,p);if(l)return f((0,c.vP)(l,s,p));t[s.name]=p}}}var h,y=(0,u.Z)(e.requiredFields);try{for(y.s();!(h=y.n()).done;){var d=h.value;if(!v.has(d.name))return f('missing required field "'.concat(d.name,'"'))}}catch(g){y.e(g)}finally{y.f()}return null}function m(e,t){var r=t;return"string"==typeof t&&(0,c.H7)(e)?r=parseFloat(t):null!=t&&(0,c.qN)(e)&&"string"!=typeof t&&(r=String(t)),(0,c.Pz)(r)}function _(e,t){if(!e||!(0,o.JY)(t))return e;if("rings"in e||"paths"in e){if(!d)throw new TypeError("geometry engine not loaded");return d.simplify(t,e)}return e}function w(){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(s.mark((function e(){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=d,e.t0){e.next=6;break}return e.next=4,Promise.all([r.e(9058),r.e(309)]).then(r.bind(r,50309));case 4:d=e.sent,e.t0=d;case 6:return e.abrupt("return",e.t0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){return Z.apply(this,arguments)}function Z(){return(Z=(0,n.Z)(s.mark((function e(t,r){return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!(0,o.JY)(t)||"esriGeometryPolygon"!==r&&"esriGeometryPolyline"!==r,e.t0){e.next=4;break}return e.next=4,w();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=8178.280b042d.chunk.js.map