"use strict";(self.webpackChunkufe_tree_tracking_app=self.webpackChunkufe_tree_tracking_app||[]).push([[4605],{59896:function(e,t,n){function r(e){return 32+e.length}function i(e){if(!e)return 0;var t=32;for(var n in e)if(e.hasOwnProperty(n)){var i=e[n];switch(typeof i){case"string":t+=r(i);break;case"number":t+=16;break;case"boolean":t+=4}}return t}function o(e,t){return 32+e.length*t}var a;n.d(t,{Y8:function(){return a},f2:function(){return i},do:function(){return o}}),function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(a||(a={}))},58971:function(e,t,n){n.d(t,{vY:function(){return u},J9:function(){return d},U1:function(){return p},Ie:function(){return y},G6:function(){return m}});var r=n(29439),i=n(92026);n(77981);var o=function(e,t,n){return[t,n]},a=function(e,t,n){return[t,n,e[2]]},s=function(e,t,n){return[t,n,e[2],e[3]]};function u(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:(0,i.pC)(e.extent)?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function l(e,t){var n=e.scale,r=e.translate;return t*n[0]+r[0]}function h(e,t){var n=e.scale;return e.translate[1]-t*n[1]}function f(e,t,n){var i=new Array(n.length);if(!n.length)return i;var o=(0,r.Z)(e.scale,2),a=o[0],s=o[1],u=l(e,n[0][0]),f=h(e,n[0][1]);i[0]=t(n[0],u,f);for(var c=1;c<n.length;c++){var d=n[c];u+=d[0]*a,f-=d[1]*s,i[c]=t(d,u,f)}return i}function c(e,t,n){for(var r=new Array(n.length),i=0;i<n.length;i++)r[i]=f(e,t,n[i]);return r}function d(e,t,n,r,u){return(0,i.pC)(n)&&(t.points=function(e,t,n,r){return f(e,n?r?s:a:r?a:o,t)}(e,n.points,r,u)),t}function p(e,t,n,r,o){return(0,i.Wi)(n)||(t.x=l(e,n.x),t.y=h(e,n.y),t!==n&&(r&&(t.z=n.z),o&&(t.m=n.m))),t}function y(e,t,n,r,u){return(0,i.pC)(n)&&(t.rings=function(e,t,n,r){return c(e,n?r?s:a:r?a:o,t)}(e,n.rings,r,u)),t}function m(e,t,n,r,u){return(0,i.pC)(n)&&(t.paths=function(e,t,n,r){return c(e,n?r?s:a:r?a:o,t)}(e,n.paths,r,u)),t}},44605:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(1413),i=n(15671),o=n(43144),a=n(37762),s=n(41644),u=n(92026),l=n(95439),h=n(78952),f=n(93501),c=(n(59896),n(93169),n(41414)),d=n(65156),p=(n(58971),n(27823),n(83040));var y=(0,o.Z)((function e(t,n,r){(0,i.Z)(this,e),this.uid=t,this.geometry=n,this.attributes=r,this.visible=!0,this.objectId=null,this.centroid=null}));var m=(0,o.Z)((function e(){(0,i.Z)(this,e),this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}));(0,c.Ue)(),(0,d.Ue)();var v=n(83406);function g(e,t){return t}function k(e,t,n,r){switch(n){case 0:return _(e,t+r,0);case 1:return"lowerLeft"===e.originPosition?_(e,t+r,1):function(e,t,n){var r=e.translate,i=e.scale;return r[n]-t*i[n]}(e,t+r,1)}}function C(e,t,n,r){return 2===n?_(e,t,2):k(e,t,n,r)}function P(e,t,n,r){return 2===n?_(e,t,3):k(e,t,n,r)}function b(e,t,n,r){return 3===n?_(e,t,3):C(e,t,n,r)}function _(e,t,n){var r=e.translate,i=e.scale;return r[n]+t*i[n]}var Z=function(){function e(t){(0,i.Z)(this,e),this.options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=g,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this._attributesConstructor=function(){}}return(0,o.Z)(e,[{key:"createFeatureResult",value:function(){return new m}},{key:"finishFeatureResult",value:function(e){if(this.options.applyTransform&&(e.transform=null),this._attributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,e.hasZ){var t=(0,f.k)(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(!(0,u.Wi)(t)){var n,r=(0,a.Z)(e.features);try{for(r.s();!(n=r.n()).done;){t(n.value.geometry)}}catch(i){r.e(i)}finally{r.f()}}}}},{key:"createSpatialReference",value:function(){return new h.Z}},{key:"addField",value:function(e,t){e.fields.push(p.Z.fromJSON(t));var n=e.fields.map((function(e){return e.name}));this._attributesConstructor=function(){var e,t=(0,a.Z)(n);try{for(t.s();!(e=t.n()).done;){this[e.value]=null}}catch(r){t.e(r)}finally{t.f()}}}},{key:"addFeature",value:function(e,t){var n=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(n>0)for(var r in t.attributes){var i=t.attributes[r];"string"==typeof i&&i.length>n&&(t.attributes[r]="")}e.features.push(t)}},{key:"addQueryGeometry",value:function(e,t){var n=t.queryGeometry,r=t.queryGeometryType,i=(0,v.$g)(n.clone(),n,!1,!1,this.transform),o=(0,v.di)(i,r,!1,!1),a=null;switch(r){case"esriGeometryPoint":a="point";break;case"esriGeometryPolygon":a="polygon";break;case"esriGeometryPolyline":a="polyline";break;case"esriGeometryMultipoint":a="multipoint"}o.type=a,e.queryGeometryType=r,e.queryGeometry=o}},{key:"prepareFeatures",value:function(e){var t=this;switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this._deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"point":this.addCoordinate=function(e,n,r){return t.addCoordinatePoint(e,n,r)},this.createGeometry=function(e){return t.createPointGeometry(e)};break;case"polygon":this.addCoordinate=function(e,n,r){return t._addCoordinatePolygon(e,n,r)},this.createGeometry=function(e){return t._createPolygonGeometry(e)};break;case"polyline":this.addCoordinate=function(e,n,r){return t._addCoordinatePolyline(e,n,r)},this.createGeometry=function(e){return t._createPolylineGeometry(e)};break;case"multipoint":this.addCoordinate=function(e,n,r){return t._addCoordinateMultipoint(e,n,r)},this.createGeometry=function(e){return t._createMultipointGeometry(e)};break;case"mesh":case"extent":break;default:(0,s.Bg)(e.geometryType)}}},{key:"createFeature",value:function(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,new y((0,l.D)(),null,new this._attributesConstructor)}},{key:"allocateCoordinates",value:function(){var e=this.lengths.reduce((function(e,t){return e+t}),0);this.coordinateBuffer=new Float64Array(e*this.vertexDimension),this.coordinateBufferPtr=0}},{key:"addLength",value:function(e,t,n){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t)}},{key:"createPointGeometry",value:function(e){var t={type:"point",x:0,y:0,spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM};return t.hasZ&&(t.z=0),t.hasM&&(t.m=0),t}},{key:"addCoordinatePoint",value:function(e,t,n){switch(t=this.applyTransform(this.transform,t,n,0),n){case 0:e.x=t;break;case 1:e.y=t;break;case 2:e.hasZ?e.z=t:e.m=t;break;case 3:e.m=t}}},{key:"_transformPathLikeValue",value:function(e,t){var n=0;return t<=1&&(n=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,n)}},{key:"_addCoordinatePolyline",value:function(e,t,n){this._dehydratedAddPointsCoordinate(e.paths,t,n)}},{key:"_addCoordinatePolygon",value:function(e,t,n){this._dehydratedAddPointsCoordinate(e.rings,t,n)}},{key:"_addCoordinateMultipoint",value:function(e,t,n){0===n&&e.points.push([]);var r=this._transformPathLikeValue(t,n);e.points[e.points.length-1].push(r)}},{key:"_createPolygonGeometry",value:function(e){return{type:"polygon",rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}},{key:"_createPolylineGeometry",value:function(e){return{type:"polyline",paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}},{key:"_createMultipointGeometry",value:function(e){return{type:"multipoint",points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}},{key:"_dehydratedAddPointsCoordinate",value:function(e,t,n){0===n&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);var r=this._transformPathLikeValue(t,n),i=e[e.length-1];0===n&&i.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=r}},{key:"_deriveApplyTransform",value:function(e){var t=e.hasZ,n=e.hasM;return t&&n?b:t?C:n?P:k}}]),e}(),G=n(27607),T=function(){function e(){(0,i.Z)(this,e)}return(0,o.Z)(e,[{key:"_parseFeatureQuery",value:function(e){var t=(0,G.C)(e.buffer,new Z(e.options)),n=(0,r.Z)((0,r.Z)({},t),{},{spatialReference:t.spatialReference.toJSON(),fields:t.fields?t.fields.map((function(e){return e.toJSON()})):void 0});return Promise.resolve(n)}}]),e}();function x(){return new T}}}]);
//# sourceMappingURL=4605.d2266bb4.chunk.js.map