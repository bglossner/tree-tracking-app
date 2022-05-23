"use strict";(self.webpackChunkufe_tree_tracking_app=self.webpackChunkufe_tree_tracking_app||[]).push([[9887],{41862:function(e,t,r){r.d(t,{aX:function(){return J}});var a=r(15861),n=r(37762),s=r(87757),i=r(42265),u=r(10064),o=r(32718),l=r(92026),p=r(80885),c=r(29909),d=r(78952),f=r(77981),h={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new c.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:d.Z.WebMercator}),minus180Line:new c.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:d.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new c.Z({paths:[[[180,-180],[180,180]]],spatialReference:d.Z.WGS84}),minus180Line:new c.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:d.Z.WGS84})}};function y(e,t){return Math.ceil((e-t)/(2*t))}function m(e,t){var r,a=g(e),s=(0,n.Z)(a);try{for(s.s();!(r=s.n()).done;){var i,u=r.value,o=(0,n.Z)(u);try{for(o.s();!(i=o.n()).done;){i.value[0]+=t}}catch(l){o.e(l)}finally{o.f()}}}catch(l){s.e(l)}finally{s.f()}return e}function g(e){return(0,f.oU)(e)?e.rings:e.paths}var b=r(92975),v=r(81753),w=r(1413),Z=(r(59486),r(76200)),F=r(35995);function x(e,t,r,a){return A.apply(this,arguments)}function A(){return A=(0,a.Z)(s.mark((function e(t,r,a,n){var i,u,o,l,p,c,d,h;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="string"==typeof t?(0,F.mN)(t):t,u=r[0].spatialReference,o=(0,w.Z)((0,w.Z)({},n),{},{query:(0,w.Z)((0,w.Z)({},i.query),{},{f:"json",sr:JSON.stringify(u),target:JSON.stringify({geometryType:(0,f.Ji)(r[0]),geometries:r}),cutter:JSON.stringify(a)})}),e.next=5,(0,Z.default)(i.path+"/cut",o);case 5:return l=e.sent,p=l.data,c=p.cutIndexes,d=p.geometries,h=void 0===d?[]:d,e.abrupt("return",{cutIndexes:c,geometries:h.map((function(e){var t=(0,f.im)(e);return t.spatialReference=u,t}))});case 11:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}function k(e,t,r){return I.apply(this,arguments)}function I(){return I=(0,a.Z)(s.mark((function e(t,r,a){var n,i,u,o;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="string"==typeof t?(0,F.mN)(t):t,i=r[0].spatialReference,u=(0,f.Ji)(r[0]),o=(0,w.Z)((0,w.Z)({},a),{},{query:(0,w.Z)((0,w.Z)({},n.query),{},{f:"json",sr:i.wkid?i.wkid:JSON.stringify(i),geometries:JSON.stringify(R(r))})}),e.t0=S,e.next=4,(0,Z.default)(n.path+"/simplify",o);case 4:return e.t1=e.sent.data,e.t2=u,e.t3=i,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3));case 8:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function R(e){return{geometryType:(0,f.Ji)(e[0]),geometries:e.map((function(e){return e.toJSON()}))}}function S(e,t,r){var a=(0,f.q9)(t);return e.map((function(e){var t=a.fromJSON(e);return t.spatialReference=r,t}))}var E=o.Z.getLogger("esri.geometry.support.normalizeUtils");function O(e,t,r){if(t){var a=function(e,t){if(!(e instanceof c.Z||e instanceof p.Z)){var r="straightLineDensify: the input geometry is neither polyline nor polygon";throw E.error(r),new u.Z(r)}var a,s=g(e),i=[],o=(0,n.Z)(s);try{for(o.s();!(a=o.n()).done;){var l=a.value,d=[];i.push(d),d.push([l[0][0],l[0][1]]);for(var f=0;f<l.length-1;f++){var h=l[f][0],y=l[f][1],m=l[f+1][0],b=l[f+1][1],v=Math.sqrt((m-h)*(m-h)+(b-y)*(b-y)),w=(b-y)/v,Z=(m-h)/v,F=v/t;if(F>1){for(var x=1;x<=F-1;x++){var A=x*t,k=Z*A+h,I=w*A+y;d.push([k,I])}var R=(v+Math.floor(F-1)*t)/2,S=Z*R+h,O=w*R+y;d.push([S,O])}d.push([m,b])}}}catch(L){o.e(L)}finally{o.f()}return function(e){return"polygon"===e.type}(e)?new p.Z({rings:i,spatialReference:e.spatialReference}):new c.Z({paths:i,spatialReference:e.spatialReference})}(e,1e6);e=(0,v.Sx)(a,!0)}return r&&(e=m(e,r)),e}function L(e,t,r){if(Array.isArray(e)){var a=e[0];if(a>t){var n=y(a,t);e[0]=a+n*(-2*t)}else if(a<r){var s=y(a,r);e[0]=a+s*(-2*r)}}else{var i=e.x;if(i>t){var u=y(i,t);e=e.clone().offset(u*(-2*t),0)}else if(i<r){var o=y(i,r);e=e.clone().offset(o*(-2*r),0)}}return e}function U(e,t){for(var r=-1,a=function(a){for(var s=t.cutIndexes[a],i=t.geometries[a],u=g(i),o=function(e){var t=u[e];t.some((function(r){if(r[0]<180)return!0;for(var a=0,n=0;n<t.length;n++){var s=t[n][0];a=s>a?s:a}for(var u=-360*y(a=Number(a.toFixed(9)),180),o=0;o<t.length;o++){var l=i.getPoint(e,o);i.setPoint(e,o,l.clone().offset(u,0))}return!0}))},l=0;l<u.length;l++)o(l);if(s===r){if(function(e){return"polygon"===e[0].type}(e)){var p,c=(0,n.Z)(g(i));try{for(c.s();!(p=c.n()).done;){var d=p.value;e[s]=e[s].addRing(d)}}catch(b){c.e(b)}finally{c.f()}}else if(function(e){return"polyline"===e[0].type}(e)){var f,h=(0,n.Z)(g(i));try{for(h.s();!(f=h.n()).done;){var m=f.value;e[s]=e[s].addPath(m)}}catch(b){h.e(b)}finally{h.f()}}}else r=s,e[s]=i},s=0;s<t.cutIndexes.length;s++)a(s);return e}function J(e,t,r){return N.apply(this,arguments)}function N(){return N=(0,a.Z)(s.mark((function e(t,r,a){var u,o,d,f,g,w,Z,F,A,I,R,S,E,N,C,W,q,M,X,G,P,_,T,z,B,V,j,$,D,H,K,Q,Y,ee,te,re,ae,ne,se,ie,ue;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Array.isArray(t)){e.next=2;break}return e.abrupt("return",J([t],r));case 2:o=null!=(u=null==r?void 0:r.url)?u:i.Z.geometryServiceUrl,R=0,S=[],E=[],N=(0,n.Z)(t);try{for(N.s();!(C=N.n()).done;)W=C.value,(0,l.Wi)(W)?E.push(W):(d||(d=W.spatialReference,f=(0,b.C5)(d),g=d.isWebMercator,w=h[F=g?102100:4326].maxX,Z=h[F].minX,A=h[F].plus180Line,I=h[F].minus180Line),f?"mesh"===W.type?E.push(W):"point"===W.type?E.push(L(W.clone(),w,Z)):"multipoint"===W.type?((q=W.clone()).points=q.points.map((function(e){return L(e,w,Z)})),E.push(q)):"extent"===W.type?(M=W.clone()._normalize(!1,!1,f),E.push(M.rings?new p.Z(M):M)):W.extent?(X=W.extent,G=y(X.xmin,Z)*(2*w),P=0===G?W.clone():m(W.clone(),G),X.offset(G,0),X.intersects(A)&&X.xmax!==w?(R=X.xmax>R?X.xmax:R,P=O(P,g),S.push(P),E.push("cut")):X.intersects(I)&&X.xmin!==Z?(R=X.xmax*(2*w)>R?X.xmax*(2*w):R,P=O(P,g,360),S.push(P),E.push("cut")):E.push(P)):E.push(W.clone()):E.push(W))}catch(s){N.e(s)}finally{N.f()}for(_=y(R,w),T=-90,z=_,B=new c.Z;_>0;)V=360*_-180,B.addPath([[V,T],[V,-1*T]]),T*=-1,_--;if(!(S.length>0&&z>0)){e.next=28;break}return e.t0=U,e.t1=S,e.next=15,x(o,S,B,a);case 15:for(e.t2=e.sent,j=(0,e.t0)(e.t1,e.t2),$=[],D=[],H=0;H<E.length;H++)"cut"!==(K=E[H])?D.push(K):(Q=j.shift(),Y=t[H],(0,l.pC)(Y)&&"polygon"===Y.type&&Y.rings&&Y.rings.length>1&&Q.rings.length>=Y.rings.length?($.push(Q),D.push("simplify")):D.push(g?(0,v.$)(Q):Q));if($.length){e.next=22;break}return e.abrupt("return",D);case 22:return e.next=24,k(o,$,a);case 24:for(ee=e.sent,te=[],re=0;re<D.length;re++)"simplify"!==(ae=D[re])?te.push(ae):te.push(g?(0,v.$)(ee.shift()):ee.shift());return e.abrupt("return",te);case 28:for(ne=[],se=0;se<E.length;se++)"cut"!==(ie=E[se])?ne.push(ie):(ue=S.shift(),ne.push(!0===g?(0,v.$)(ue):ue));return e.abrupt("return",Promise.resolve(ne));case 31:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}},29887:function(e,t,r){r.r(t),r.d(t,{applyEdits:function(){return h}});var a=r(1413),n=r(15861),s=r(87757),i=r(52639),u=r(81608),o=r(10064),l=r(84652),p=r(92026),c=r(35995),d=r(41862);function f(e){return e&&null!=e.applyEdits}function h(e,t,r){return y.apply(this,arguments)}function y(){return y=(0,n.Z)(s.mark((function e(t,r,a){var n,i,u,o,p,c,d,f,h,y,g=arguments;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g.length>3&&void 0!==g[3]?g[3]:{},o={edits:a,result:new Promise((function(e,t){i=e,u=t}))},t.emit("apply-edits",o),e.prev=3,e.next=6,m(t,r,a,n);case 6:return c=e.sent,d=c.results,f=c.edits,h=function(e){return e.filter((function(e){return!e.error})).map(l.d9)},y={edits:f,addedFeatures:h(d.addFeatureResults),updatedFeatures:h(d.updateFeatureResults),deletedFeatures:h(d.deleteFeatureResults),addedAttachments:h(d.addAttachmentResults),updatedAttachments:h(d.updateAttachmentResults),deletedAttachments:h(d.deleteAttachmentResults)},e.abrupt("return",(null!=(p=d.editedFeatureResults)&&p.length&&(y.editedFeatures=d.editedFeatureResults),(y.addedFeatures.length||y.updatedFeatures.length||y.deletedFeatures.length||y.addedAttachments.length||y.updatedAttachments.length||y.deletedAttachments.length)&&t.emit("edits",y),i(y),d));case 14:throw e.prev=14,e.t0=e.catch(3),u(e.t0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[3,14]])}))),y.apply(this,arguments)}function m(e,t,r,a){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(s.mark((function e(t,r,a,n){var i,u,l;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:if(f(r)){e.next=4;break}return e.abrupt("return",Promise.reject(new o.Z("".concat(t.type,"-layer:no-editing-support"),"Layer source does not support applyEdits capability",{layer:t})));case 4:if(t.editingEnabled){e.next=6;break}throw new o.Z("".concat(t.type,"-layer:editing-disabled"),"Editing is disabled for layer",{layer:t});case 6:return e.next=8,b(t,a,n);case 8:if(i=e.sent,u=i.edits,l=i.options,!(u.addFeatures.length||u.updateFeatures.length||u.deleteFeatures.length||u.addAttachments.length||u.updateAttachments.length||u.deleteAttachments.length)){e.next=19;break}return e.t1=u,e.next=15,r.applyEdits(u,l);case 15:e.t2=e.sent,e.t0={edits:e.t1,results:e.t2},e.next=20;break;case 19:e.t0={edits:u,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}};case 20:return e.abrupt("return",e.t0);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,t,r){return v.apply(this,arguments)}function v(){return v=(0,n.Z)(s.mark((function e(t,r,n){var i,l,p,c,d;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r&&(r.addFeatures||r.updateFeatures||r.deleteFeatures),l=r&&(r.addAttachments||r.updateAttachments||r.deleteAttachments),r&&(i||l)){e.next=3;break}throw new o.Z("".concat(t.type,"-layer:missing-parameters"),"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");case 3:if(t.capabilities.data.isVersioned||!n||!n.gdbVersion){e.next=5;break}throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");case 5:if(t.capabilities.editing.supportsRollbackOnFailure||!n||!n.rollbackOnFailureEnabled){e.next=7;break}throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");case 7:if(t.capabilities.editing.supportsGlobalId||!n||!n.globalIdUsed){e.next=9;break}throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");case 9:if(t.capabilities.editing.supportsGlobalId||!l){e.next=11;break}throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");case 11:if(n&&n.globalIdUsed||!l){e.next=13;break}throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");case 13:if(null!=(p=(0,a.Z)({},n)).rollbackOnFailureEnabled||t.capabilities.editing.supportsRollbackOnFailure||(p.rollbackOnFailureEnabled=!0),!1!==p.rollbackOnFailureEnabled||"original-and-current-features"!==p.returnServiceEditsOption){e.next=16;break}throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");case 16:if(t.capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference||!p.returnServiceEditsInSourceSR){e.next=18;break}throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");case 18:if(!p.returnServiceEditsInSourceSR||"original-and-current-features"===p.returnServiceEditsOption){e.next=20;break}throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"'returnServiceEditsOption' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");case 20:if((c=(0,a.Z)({},r)).addFeatures=r&&u.Z.isCollection(r.addFeatures)?r.addFeatures.toArray():c.addFeatures||[],c.updateFeatures=r&&u.Z.isCollection(r.updateFeatures)?r.updateFeatures.toArray():c.updateFeatures||[],c.deleteFeatures=r&&u.Z.isCollection(r.deleteFeatures)?r.deleteFeatures.toArray():c.deleteFeatures||[],!c.addFeatures.length||t.capabilities.operations.supportsAdd){e.next=23;break}throw new o.Z("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support adding features.");case 23:if(!c.updateFeatures.length||t.capabilities.operations.supportsUpdate){e.next=25;break}throw new o.Z("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support updating features.");case 25:if(!c.deleteFeatures.length||t.capabilities.operations.supportsDelete){e.next=27;break}throw new o.Z("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support deleting features.");case 27:return c.addAttachments=c.addAttachments||[],c.updateAttachments=c.updateAttachments||[],c.deleteAttachments=c.deleteAttachments||[],c.addFeatures=c.addFeatures.map(R),c.updateFeatures=c.updateFeatures.map(R),d=n&&n.globalIdUsed,c.addFeatures.forEach((function(e){return Z(e,t,d)})),c.updateFeatures.forEach((function(e){return x(e,t,d)})),c.deleteFeatures.forEach((function(e){return F(e,t,d)})),c.addAttachments.forEach((function(e){return A(e,t)})),c.updateAttachments.forEach((function(e){return A(e,t)})),e.next=32,k(c);case 32:return e.t0=e.sent,e.t1=p,e.abrupt("return",{edits:e.t0,options:e.t1});case 35:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function w(e,t,r){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&(0,p.pC)(e.geometry)){if(e.geometry.hasZ&&!1===t.capabilities.data.supportsZ)throw new o.Z("".concat(t.type,"-layer:z-unsupported"),"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities.data.supportsM)throw new o.Z("".concat(t.type,"-layer:m-unsupported"),"Layer does not support m values while feature has m values.")}}function Z(e,t,r){w(e,t,r)}function F(e,t,r){w(e,t,r)}function x(e,t,r){if(w(e,t,r),"geometry"in e&&(0,p.pC)(e.geometry)&&!t.capabilities.editing.supportsGeometryUpdate)throw new o.Z("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support geometry updates.")}function A(e,t){var r=e.feature,a=e.attachment;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have reference to 'globalId' of the parent feature");if(!a.globalId)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have 'globalId'");if(!a.data&&!a.uploadId)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have 'data' or 'uploadId'");if(!(a.data instanceof File&&a.data.name)&&!a.name)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&a.uploadId)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof a.data){var n=(0,c.sJ)(a.data);if(n&&!n.isBase64)throw new o.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function k(e){return I.apply(this,arguments)}function I(){return I=(0,n.Z)(s.mark((function e(t){var r,a,n,i,u,o;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.addFeatures,a=t.updateFeatures,n=r.concat(a).map((function(e){return e.geometry})),e.next=5,(0,d.aX)(n);case 5:return i=e.sent,u=r.length,o=a.length,e.abrupt("return",(i.slice(0,u).forEach((function(e,r){return t.addFeatures[r].geometry=e})),i.slice(u,u+o).forEach((function(e,r){return t.updateFeatures[r].geometry=e})),t));case 9:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function R(e){var t=new i.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}}}]);
//# sourceMappingURL=9887.d838bf25.chunk.js.map