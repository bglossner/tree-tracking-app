"use strict";(self.webpackChunkufe_tree_tracking_app=self.webpackChunkufe_tree_tracking_app||[]).push([[6761],{67077:function(e,n,t){function r(){return[0,0,0,0]}function o(e,n,t,r){return[e,n,t,r]}function i(e,n){return new Float64Array(e,n,4)}function u(){return[0,0,0,0]}function a(){return o(1,1,1,1)}function f(){return o(1,0,0,0)}function c(){return o(0,1,0,0)}function s(){return o(0,0,1,0)}function l(){return o(0,0,0,1)}t.d(n,{a:function(){return i},c:function(){return r},f:function(){return o}});var d=[0,0,0,0],p=a(),h=f(),y=c(),m=s(),b=l();Object.freeze({__proto__:null,create:r,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:o,fromArray:function(e){for(var n=[0,0,0,0],t=Math.min(4,e.length),r=0;r<t;++r)n[r]=e[r];return n},createView:i,zeros:u,ones:a,unitX:f,unitY:c,unitZ:s,unitW:l,ZEROS:d,ONES:p,UNIT_X:h,UNIT_Y:y,UNIT_Z:m,UNIT_W:b})},6761:function(e,n,t){t.r(n),t.d(n,{destroyContext:function(){return x},dracoDecompressPointCloudData:function(){return v},filterObbsForModifications:function(){return P},filterObbsForModificationsSync:function(){return k},initialize:function(){return S},interpretObbModificationResults:function(){return R},process:function(){return w},setLegacySchema:function(){return L},setModifications:function(){return I},setModificationsSync:function(){return C},test:function(){return O}});var r,o,i=t(15861),u=t(87757),a=t(92026),f=t(18722);!function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(r||(r={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(o||(o={}));var c,s=t(65905);function l(e){return(0,s.V)("esri/libs/i3s/".concat(e))}var d,p,h,y,m;t(67077);!function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"}(d||(d={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(p||(p={}));!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(h||(h={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(y||(y={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(m||(m={}));var b,E;function w(e){return g.apply(this,arguments)}function g(){return g=(0,i.Z)(u.mark((function e(n){var t;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return t=[n.geometryBuffer],e.abrupt("return",{result:F(n,t),transferList:t});case 4:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function v(e){return _.apply(this,arguments)}function _(){return _=(0,i.Z)(u.mark((function e(n){var t,r,o,i,a,c,s,l,d;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:if(r=[n.geometryBuffer],o=n.geometryBuffer,i=o.byteLength,a=E._malloc(i),(c=new Uint8Array(E.HEAPU8.buffer,a,i)).set(new Uint8Array(o)),s=E.dracoDecompressPointCloudData(a,c.byteLength),E._free(a),!(s.error.length>0)){e.next=7;break}throw"i3s.wasm: ".concat(s.error);case 7:return l=(null==(t=s.featureIds)?void 0:t.length)>0?(0,f.tP)(s.featureIds):null,d=(0,f.tP)(s.positions),l&&r.push(l.buffer),r.push(d.buffer),e.abrupt("return",{result:{positions:d,featureIds:l},transferList:r});case 10:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}function P(e){return U.apply(this,arguments)}function U(){return U=(0,i.Z)(u.mark((function e(n){var t;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return k(n),t={buffer:n.buffer},e.abrupt("return",{result:t,transferList:[t.buffer]});case 5:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function I(e){return A.apply(this,arguments)}function A(){return(A=(0,i.Z)(u.mark((function e(n){return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:C(n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return T.apply(this,arguments)}function T(){return(T=(0,i.Z)(u.mark((function e(n){return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:E.setLegacySchema(n.context,n.jsonSchema);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){M(e)}function C(e){for(var n=e.modifications,t=E._malloc(8*n.length),r=new Float64Array(E.HEAPU8.buffer,t,n.length),o=0;o<n.length;++o)r[o]=n[o];E.setModifications(e.context,t,n.length,e.isGeodetic),E._free(t)}function F(e,n){if(!E)return null;var t=e.context,o=e.localOrigin,i=e.globalTrafo,u=e.mbs,c=e.obb,s=e.elevationOffset,l=e.geometryBuffer,d=e.geometryDescriptor,p=e.indexToVertexProjector,h=e.vertexToRenderProjector,y=E._malloc(l.byteLength),m=E._malloc(33*Float64Array.BYTES_PER_ELEMENT),b=new Uint8Array(E.HEAPU8.buffer,y,l.byteLength);b.set(new Uint8Array(l));var w=new Float64Array(E.HEAPU8.buffer,m,33);N(w,o);var g=w.byteOffset+3*w.BYTES_PER_ELEMENT,v=new Float64Array(w.buffer,g);N(v,i),g+=16*w.BYTES_PER_ELEMENT,N(v=new Float64Array(w.buffer,g),u),g+=4*w.BYTES_PER_ELEMENT,(0,a.pC)(c)&&(N(v=new Float64Array(w.buffer,g),c.center),g+=3*w.BYTES_PER_ELEMENT,N(v=new Float64Array(w.buffer,g),c.halfSize),g+=3*w.BYTES_PER_ELEMENT,N(v=new Float64Array(w.buffer,g),c.quaternion));var _=d,P={isDraco:!1,isLegacy:!1,color:e.layouts.some((function(e){return e.some((function(e){return"color"===e.name}))})),normal:e.needNormals&&e.layouts.some((function(e){return e.some((function(e){return"normalCompressed"===e.name}))})),uv0:e.layouts.some((function(e){return e.some((function(e){return"uv0"===e.name}))})),uvRegion:e.layouts.some((function(e){return e.some((function(e){return"uvRegion"===e.name}))})),featureIndex:_.featureIndex},U=E.process(t,!!e.obb,y,b.byteLength,_,P,m,s,p,h,e.normalReferenceFrame);if(E._free(m),E._free(y),U.error.length>0)throw"i3s.wasm: ".concat(U.error);if(U.discarded)return null;var I=U.componentOffsets.length>0?(0,f.tP)(U.componentOffsets):null,A=U.featureIds.length>0?(0,f.tP)(U.featureIds):null,L=(0,f.tP)(U.interleavedVertedData).buffer,T=U.indicesType===r.Int16?(0,f.tP)(new Uint16Array(U.indices.buffer,U.indices.byteOffset,U.indices.byteLength/2)):(0,f.tP)(new Uint32Array(U.indices.buffer,U.indices.byteOffset,U.indices.byteLength/4)),x=(0,f.tP)(U.positions),C=U.positionIndicesType===r.Int16?(0,f.tP)(new Uint16Array(U.positionIndices.buffer,U.positionIndices.byteOffset,U.positionIndices.byteLength/2)):(0,f.tP)(new Uint32Array(U.positionIndices.buffer,U.positionIndices.byteOffset,U.positionIndices.byteLength/4)),F={layout:e.layouts[0],interleavedVertexData:L,indices:T,hasColors:U.hasColors,hasModifications:U.hasModifications,positionData:{data:x,indices:C}};return A&&n.push(A.buffer),I&&n.push(I.buffer),n.push(L),n.push(T.buffer),n.push(x.buffer),n.push(C.buffer),{componentOffsets:I,featureIds:A,transformedGeometry:F,obb:U.obb}}function R(e){return 0===e?p.Unmodified:1===e?p.PotentiallyModified:2===e?p.Culled:p.Unknown}function k(e){var n=e.context,t=e.buffer,r=E._malloc(t.byteLength),o=t.byteLength/Float64Array.BYTES_PER_ELEMENT,i=new Float64Array(E.HEAPU8.buffer,r,o),u=new Float64Array(t);i.set(u),E.filterOBBs(n,r,o),u.set(i),E._free(r)}function M(e){E&&E.destroy(e)}function N(e,n){for(var t=0;t<n.length;++t)e[t]=n[t]}function S(){return E?Promise.resolve():(b||(b=(c||(c=new Promise((function(e){return t.e(7552).then(t.bind(t,57552)).then((function(e){return e.i})).then((function(n){var t=(0,n.default)({locateFile:l,onRuntimeInitialized:function(){return e(t)}});delete t.then}))})).catch((function(e){return Promise.reject(e)}))),c).then((function(e){E=e,b=null}))),b)}var O={transform:F,destroy:M}}}]);
//# sourceMappingURL=6761.d6ab114e.chunk.js.map