"use strict";(self.webpackChunkufe_tree_tracking_app=self.webpackChunkufe_tree_tracking_app||[]).push([[3406],{3182:function(e,r,t){t.d(r,{u_:function(){return a},nd:function(){return h},S6:function(){return l}});var n=t(60136),o=t(54062),s=t(15671),i=t(43144),u=t(92026),a=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;(0,s.Z)(this,e),this.geometry=r,this.attributes=t,this.centroid=n,this.objectId=o,this.displayId=0,this.geohashX=0,this.geohashY=0}return(0,i.Z)(e,[{key:"weakClone",value:function(){var r=new e(this.geometry,this.attributes,this.centroid,this.objectId);return r.displayId=this.displayId,r.geohashX=this.geohashX,r.geohashY=this.geohashY,r}}]),e}();function l(e){return!((0,u.Wi)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)}var h=function(e){(0,n.Z)(t,e);var r=(0,o.Z)(t);function t(){return(0,s.Z)(this,t),r.apply(this,arguments)}return(0,i.Z)(t)}(a)},6908:function(e,r,t){t.d(r,{Z:function(){return s}});var n=t(15671),o=t(43144),s=function(){function e(){(0,n.Z)(this,e),this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}return(0,o.Z)(e,[{key:"weakClone",value:function(){var r=new e;return r.objectIdFieldName=this.objectIdFieldName,r.globalIdFieldName=this.globalIdFieldName,r.geohashFieldName=this.geohashFieldName,r.geometryProperties=this.geometryProperties,r.geometryType=this.geometryType,r.spatialReference=this.spatialReference,r.hasZ=this.hasZ,r.hasM=this.hasM,r.features=this.features,r.fields=this.fields,r.transform=this.transform,r.exceededTransferLimit=this.exceededTransferLimit,r.uniqueIdField=this.uniqueIdField,r.queryGeometry=this.queryGeometry,r.queryGeometryType=this.queryGeometryType,r}}]),e}()},80457:function(e,r,t){t.d(r,{Z:function(){return i}});var n=t(93433),o=t(15671),s=t(43144),i=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];(0,o.Z)(this,e),this.lengths=null!=r?r:[],this.coords=null!=t?t:[],this.hasIndeterminateRingOrder=n}return(0,s.Z)(e,[{key:"isPoint",get:function(){return 0===this.lengths.length}},{key:"maxLength",get:function(){return Math.max.apply(Math,(0,n.Z)(this.lengths))}},{key:"size",get:function(){return this.lengths.reduce((function(e,r){return e+r}))}},{key:"forEachVertex",value:function(e){var r=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(var t=0;t<this.lengths.length;t++){for(var n=this.lengths[t],o=0;o<n;o++)e(this.coords[2*(o+r)],this.coords[2*(o+r)+1]);r+=n}}},{key:"clone",value:function(r){return r?(r.set(this.coords),new e(this.lengths.slice(),r,this.hasIndeterminateRingOrder)):new e(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}]),e}()},83406:function(e,r,t){t.d(r,{XA:function(){return $},h_:function(){return re},Yn:function(){return B},GH:function(){return Q},Uy:function(){return V},EI:function(){return H},cn:function(){return ee},di:function(){return D},Iv:function(){return z},fQ:function(){return G},eG:function(){return O},J6:function(){return Y},oB:function(){return de},zj:function(){return se},$:function(){return ae},lz:function(){return fe},RZ:function(){return ne},Nh:function(){return oe},Jd:function(){return b},IN:function(){return w},hY:function(){return he},lM:function(){return te},$g:function(){return le}});var n=t(93433),o=t(29439),s=t(37762),i=t(10064),u=t(32718),a=t(92026),l=t(77981),h=t(3182),c=t(6908),f=t(80457);function d(e,r){return e?r?4:3:r?3:2}var g=u.Z.getLogger("esri.layers.graphics.featureConversionUtils"),y={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},v=function(e,r,t,n,o,s){e[t]=o,e[t+1]=s},m=function(e,r,t,n,o,s){e[t]=o,e[t+1]=s,e[t+2]=r[n+2]},p=function(e,r,t,n,o,s){e[t]=o,e[t+1]=s,e[t+2]=r[n+3]},Z=function(e,r,t,n,o,s){e[t]=o,e[t+1]=s,e[t+2]=r[n+2],e[t+3]=r[n+3]};function I(e,r,t,n){if(e){if(t)return r&&n?Z:m;if(r&&n)return p}else if(r&&n)return m;return v}function b(e,r){var t=e.scale,n=e.translate;return Math.round((r-n[0])/t[0])}function w(e,r){var t=e.scale,n=e.translate;return Math.round((n[1]-r)/t[1])}function M(e,r){var t=e.scale,n=e.translate;return r*t[0]+n[0]}function N(e,r){var t=e.scale;return e.translate[1]-r*t[1]}function G(e,r,t){return e?r?t?j(e):k(e):t?P(e):T(e):null}function T(e){var r=e.coords;return{x:r[0],y:r[1]}}function F(e,r){return e.coords[0]=r.x,e.coords[1]=r.y,e}function k(e){var r=e.coords;return{x:r[0],y:r[1],z:r[2]}}function x(e,r){return e.coords[0]=r.x,e.coords[1]=r.y,e.coords[2]=r.z,e}function P(e){var r=e.coords;return{x:r[0],y:r[1],m:r[2]}}function _(e,r){return e.coords[0]=r.x,e.coords[1]=r.y,e.coords[2]=r.m,e}function j(e){var r=e.coords;return{x:r[0],y:r[1],z:r[2],m:r[3]}}function q(e,r){return e.coords[0]=r.x,e.coords[1]=r.y,e.coords[2]=r.z,e.coords[3]=r.m,e}function C(e,r){return e&&r?q:e?x:r?_:F}function R(e,r,t,n,o){var i,u=C(t,n),a=(0,s.Z)(r);try{for(a.s();!(i=a.n()).done;){var l=i.value,c=l.geometry,d=l.attributes,g=void 0;c&&(g=u(new f.Z,c)),e.push(new h.u_(g,d,null,d[o]))}}catch(y){a.e(y)}finally{a.f()}return e}function z(e,r,t){if((0,a.Wi)(e))return null;for(var n=d(r,t),o=[],s=0;s<e.coords.length;s+=n){for(var i=[],u=0;u<n;u++)i.push(e.coords[s+u]);o.push(i)}return r?t?{points:o,hasZ:r,hasM:t}:{points:o,hasZ:r}:t?{points:o,hasM:t}:{points:o}}function L(e,r,t,n,o){var i,u=d(t,n),a=(0,s.Z)(r);try{for(a.s();!(i=a.n()).done;){var l=i.value,c=l.geometry,g=l.attributes,y=void 0;c&&(y=W(new f.Z,c,u)),e.push(new h.u_(y,g,null,g[o]))}}catch(v){a.e(v)}finally{a.f()}return e}function W(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d(r.hasZ,r.hasM);e.lengths[0]=r.points.length;var n,o=e.coords,i=0,u=(0,s.Z)(r.points);try{for(u.s();!(n=u.n()).done;)for(var a=n.value,l=0;l<t;l++)o[i++]=a[l]}catch(h){u.e(h)}finally{u.f()}return e}function Y(e,r,t){if(!e)return null;var n,o=d(r,t),i=e.coords,u=e.lengths,a=[],l=0,h=(0,s.Z)(u);try{for(h.s();!(n=h.n()).done;){for(var c=n.value,f=[],g=0;g<c;g++){for(var y=[],v=0;v<o;v++)y.push(i[l++]);f.push(y)}a.push(f)}}catch(m){h.e(m)}finally{h.f()}return r?t?{paths:a,hasZ:r,hasM:t}:{paths:a,hasZ:r}:t?{paths:a,hasM:t}:{paths:a}}function E(e,r,t,n,o){var i,u=d(t,n),a=(0,s.Z)(r);try{for(a.s();!(i=a.n()).done;){var l=i.value,c=l.geometry,g=l.attributes,y=void 0;c&&(y=U(new f.Z,c,u)),e.push(new h.u_(y,g,null,g[o]))}}catch(v){a.e(v)}finally{a.f()}return e}function U(e,r){var t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d(r.hasZ,r.hasM),o=e.lengths,i=e.coords,u=0,a=(0,s.Z)(r.paths);try{for(a.s();!(t=a.n()).done;){var l,h=t.value,c=(0,s.Z)(h);try{for(c.s();!(l=c.n()).done;)for(var f=l.value,g=0;g<n;g++)i[u++]=f[g]}catch(y){c.e(y)}finally{c.f()}o.push(h.length)}}catch(y){a.e(y)}finally{a.f()}return e}function O(e,r,t){if(!e)return null;var n,o=d(r,t),i=e.coords,u=e.lengths,a=[],l=0,h=(0,s.Z)(u);try{for(h.s();!(n=h.n()).done;){for(var c=n.value,f=[],g=0;g<c;g++){for(var y=[],v=0;v<o;v++)y.push(i[l++]);f.push(y)}a.push(f)}}catch(m){h.e(m)}finally{h.f()}return r?t?{rings:a,hasZ:r,hasM:t}:{rings:a,hasZ:r}:t?{rings:a,hasM:t}:{rings:a}}function S(e,r,t,n,o){var i,u=(0,s.Z)(r);try{for(u.s();!(i=u.n()).done;){var l=i.value,c=l.geometry,d=l.centroid,g=l.attributes,y=void 0;c&&(y=V(new f.Z,c,t,n)),(0,a.pC)(d)?e.push(new h.u_(y,g,F(new f.Z,d),g[o])):e.push(new h.u_(y,g,null,g[o]))}}catch(v){u.e(v)}finally{u.f()}return e}function V(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.hasZ,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r.hasM;return X(e,r.rings,t,n),e}function X(e,r,t,n){var o=d(t,n),i=e.lengths,u=e.coords,a=0;i.length=u.length=0;var l,h=(0,s.Z)(r);try{for(h.s();!(l=h.n()).done;){var c,f=l.value,g=(0,s.Z)(f);try{for(g.s();!(c=g.n()).done;)for(var y=c.value,v=0;v<o;v++)u[a++]=y[v]}catch(m){g.e(m)}finally{g.f()}i.push(f.length)}}catch(m){h.e(m)}finally{h.f()}return e}var A=[],J=[];function $(e,r,t,n,s){A[0]=e;var i=B(J,A,r,t,n,s),u=(0,o.Z)(i,1)[0];return A.length=J.length=0,u}function B(e,r,t,n,o,u){if(e.length=0,!t){var a,l=(0,s.Z)(r);try{for(l.s();!(a=l.n()).done;){var c=a.value,f=c.attributes[u];e.push(new h.u_(null,c.attributes,null,f))}}catch(d){l.e(d)}finally{l.f()}return e}switch(t){case"esriGeometryPoint":return R(e,r,n,o,u);case"esriGeometryMultipoint":return L(e,r,n,o,u);case"esriGeometryPolyline":return E(e,r,n,o,u);case"esriGeometryPolygon":return S(e,r,n,o,u);default:g.error("convertToFeatureSet:unknown-geometry",new i.Z("Unable to parse unknown geometry type '".concat(t,"'"))),e.length=0}return e}function H(e,r,t,n){J[0]=e,K(A,J,r,t,n);var o=A[0];return A.length=J.length=0,o}function Q(e,r,t){if((0,a.Wi)(e))return null;var n=new f.Z;return"hasZ"in e&&null==r&&(r=e.hasZ),"hasM"in e&&null==t&&(t=e.hasM),(0,l.wp)(e)?C(null!=r?r:null!=e.z,null!=t?t:null!=e.m)(n,e):(0,l.oU)(e)?V(n,e,r,t):(0,l.l9)(e)?U(n,e,d(r,t)):(0,l.aW)(e)?W(n,e,d(r,t)):void g.error("convertFromGeometry:unknown-geometry",new i.Z("Unable to parse unknown geometry type '".concat(e,"'")))}function D(e,r,t,n){var o=e&&("coords"in e?e:e.geometry);if((0,a.Wi)(o))return null;switch(r){case"esriGeometryPoint":var s=T;return t&&n?s=j:t?s=k:n&&(s=P),s(o);case"esriGeometryMultipoint":return z(o,t,n);case"esriGeometryPolyline":return Y(o,t,n);case"esriGeometryPolygon":return O(o,t,n);default:return void g.error("convertToGeometry:unknown-geometry",new i.Z("Unable to parse unknown geometry type '".concat(r,"'")))}}function K(e,r,t,n,o){if(e.length=0,(0,a.Wi)(t))return function(e,r){var t,n=(0,s.Z)(r);try{for(n.s();!(t=n.n()).done;){var o=t.value;e.push({attributes:o.attributes})}}catch(i){n.e(i)}finally{n.f()}return e}(e,r);switch(t){case"esriGeometryPoint":return function(e,r,t,n){var o=T;t&&n?o=j:t?o=k:n&&(o=P);var i,u=(0,s.Z)(r);try{for(u.s();!(i=u.n()).done;){var l=i.value,h=l.geometry,c=l.attributes,f=(0,a.pC)(h)?o(h):null;e.push({attributes:c,geometry:f})}}catch(d){u.e(d)}finally{u.f()}return e}(e,r,n,o);case"esriGeometryMultipoint":return function(e,r,t,n){var o,i=(0,s.Z)(r);try{for(i.s();!(o=i.n()).done;){var u=o.value,a=u.geometry,l=u.attributes,h=void 0;a&&(h=z(a,t,n)),e.push({attributes:l,geometry:h})}}catch(c){i.e(c)}finally{i.f()}return e}(e,r,n,o);case"esriGeometryPolyline":return function(e,r,t,n){var o,i=(0,s.Z)(r);try{for(i.s();!(o=i.n()).done;){var u=o.value,l=u.geometry,h=u.attributes,c=void 0;(0,a.pC)(l)&&(c=Y(l,t,n)),e.push({attributes:h,geometry:c})}}catch(f){i.e(f)}finally{i.f()}return e}(e,r,n,o);case"esriGeometryPolygon":return function(e,r,t,n){var o,i=(0,s.Z)(r);try{for(i.s();!(o=i.n()).done;){var u=o.value,l=u.geometry,h=u.attributes,c=u.centroid,f=void 0;if((0,a.pC)(l)&&(f=O(l,t,n)),(0,a.pC)(c)){var d=T(c);e.push({attributes:h,centroid:d,geometry:f})}else e.push({attributes:h,geometry:f})}}catch(g){i.e(g)}finally{i.f()}return e}(e,r,n,o);default:g.error("convertToFeatureSet:unknown-geometry",new i.Z("Unable to parse unknown geometry type '".concat(t,"'")))}return e}function ee(e){var r=e.objectIdFieldName,t=e.spatialReference,n=e.transform,o=e.fields,s=e.hasM,i=e.hasZ,u=e.features,a=e.geometryType,l=e.exceededTransferLimit,h=e.uniqueIdField,c=e.queryGeometry,f=e.queryGeometryType,d={features:K([],u,a,i,s),fields:o,geometryType:a,objectIdFieldName:r,spatialReference:t,uniqueIdField:h,queryGeometry:D(c,f,!1,!1)};return n&&(d.transform=n),l&&(d.exceededTransferLimit=l),s&&(d.hasM=s),i&&(d.hasZ=i),d}function re(e,r){var t=new c.Z,n=e.hasM,o=e.hasZ,s=e.features,u=e.objectIdFieldName,a=e.spatialReference,l=e.geometryType,h=e.exceededTransferLimit,f=e.transform,d=e.fields;return d&&(t.fields=d),t.geometryType=l,t.objectIdFieldName=u||r,t.spatialReference=a,t.objectIdFieldName?(s&&B(t.features,s,l,o,n,t.objectIdFieldName),h&&(t.exceededTransferLimit=h),n&&(t.hasM=n),o&&(t.hasZ=o),f&&(t.transform=f),t):(g.error(new i.Z("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),t)}function te(e){var r=e.transform,t=e.features,n=e.hasM,o=e.hasZ;if(!r)return e;var i,u=(0,s.Z)(t);try{for(u.s();!(i=u.n()).done;){var l=i.value;(0,a.pC)(l.geometry)&&le(l.geometry,l.geometry,n,o,r),(0,a.pC)(l.centroid)&&le(l.centroid,l.centroid,n,o,r)}}catch(h){u.e(h)}finally{u.f()}return e.transform=null,e}function ne(e,r){var t=r.geometryType,n=r.features,o=r.hasM,s=r.hasZ;if(!e)return r;for(var i=0;i<n.length;i++){var u=n[i],a=u.weakClone();a.geometry=new f.Z,oe(a.geometry,u.geometry,o,s,t,e),u.centroid&&(a.centroid=new f.Z,oe(a.centroid,u.centroid,o,s,"esriGeometryPoint",e)),n[i]=a}return r.transform=e,r}function oe(e,r,t,n,o,i){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:n;if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),(0,a.Wi)(r)||!r.coords.length)return null;var h=y[o],c=r.coords,f=r.lengths,g=d(t,n),v=d(t&&u,n&&l),m=I(t,n,u,l);if(!f.length)return m(e.coords,c,0,0,b(i,c[0]),w(i,c[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=g,e;var p,Z,M,N,G,T=0,F=0,k=F,x=(0,s.Z)(f);try{for(x.s();!(G=x.n()).done;){var P=G.value;if(!(P<h)){var _=0;F=k,M=p=b(i,c[T]),N=Z=w(i,c[T+1]),m(e.coords,c,F,T,M,N),_++,T+=g,F+=v;for(var j=1;j<P;j++,T+=g)M=b(i,c[T]),N=w(i,c[T+1]),M===p&&N===Z||(m(e.coords,c,F,T,M-p,N-Z),F+=v,_++,p=M,Z=N);_>=h&&(e.lengths.push(_),k=F)}}}catch(q){x.e(q)}finally{x.f()}return e.coords.length=k,e.coords.length?e:null}function se(e,r,t,n,o,i){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t,a=arguments.length>7&&void 0!==arguments[7]?arguments[7]:n;if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!r||!r.coords.length)return null;var l=y[o],h=r.coords,c=r.lengths,f=d(t,n),g=d(t&&u,n&&a),v=I(t,n,u,a);if(!c.length)return v(e.coords,h,0,0,h[0],h[1]),e.lengths.length&&(e.lengths.length=0),e.coords.length=f,e;var m,p=0,Z=i*i,b=(0,s.Z)(c);try{for(b.s();!(m=b.n()).done;){var w=m.value;if(w<l)p+=w*f;else{var M=e.coords.length/g,N=p,G=p+(w-1)*f;v(e.coords,h,e.coords.length,N,h[N],h[N+1]),ue(e.coords,h,f,Z,v,N,G),v(e.coords,h,e.coords.length,G,h[G],h[G+1]);var T=e.coords.length/g-M;T>=l?e.lengths.push(T):e.coords.length=M*g,p+=w*f}}}catch(F){b.e(F)}finally{b.f()}return e.coords.length?e:null}function ie(e,r,t,n){var o=e[r],s=e[r+1],i=e[t],u=e[t+1],a=e[n],l=e[n+1],h=i,c=u,f=a-h,d=l-c;if(0!==f||0!==d){var g=((o-h)*f+(s-c)*d)/(f*f+d*d);g>1?(h=a,c=l):g>0&&(h+=f*g,c+=d*g)}return(f=o-h)*f+(d=s-c)*d}function ue(e,r,t,n,o,s,i){for(var u,a=n,l=0,h=s+t;h<i;h+=t)(u=ie(r,h,s,i))>a&&(l=h,a=u);a>n&&(l-s>t&&ue(e,r,t,n,o,s,l),o(e,r,e.length,l,r[l],r[l+1]),i-l>t&&ue(e,r,t,n,o,l,i))}function ae(e,r,t,n){if((0,a.Wi)(r)||!r.coords||!r.coords.length)return null;var o=d(t,n),s=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(r&&r.coords)for(var h=r.coords,c=0;c<h.length;c+=o){var f=h[c],g=h[c+1];s=Math.min(s,f),u=Math.max(u,f),i=Math.min(i,g),l=Math.max(l,g)}return e[0]=s,e[1]=i,e[2]=u,e[3]=l,e}function le(e,r,t,n,s){var i=r.coords,u=r.lengths,a=t?n?Z:m:n?m:v,l=d(t,n);if(!i.length)return e!==r&&(e.lengths.length=0,e.coords.length=0),e;if(!u.length)return a(e.coords,i,0,0,M(s,i[0]),N(s,i[1])),e!==r&&(e.lengths.length=0,e.coords.length=l),e;for(var h=(0,o.Z)(s.scale,2),c=h[0],f=h[1],g=0,y=0;y<u.length;y++){var p=u[y];e.lengths[y]=p;var I=M(s,i[g]),b=N(s,i[g+1]);a(e.coords,i,g,g,I,b),g+=l;for(var w=1;w<p;w++,g+=l)I+=i[g]*c,b-=i[g+1]*f,a(e.coords,i,g,g,I,b)}return e!==r&&(e.lengths.length=u.length,e.coords.length=i.length),e}function he(e,r,t,o,s,i){var u,a=d(t,o),l=I(t,o,s,i),h=r.coords;e.coords.length=0,e.lengths.length=0,(u=e.lengths).push.apply(u,(0,n.Z)(r.lengths));for(var c=0;c<h.length;c+=a)l(e.coords,h,e.coords.length,c,h[c],h[c+1]);return e}function ce(e,r,t,n){for(var o=0,s=e[n*r],i=e[n*(r+1)],u=1;u<t;u++){var a=s+e[n*(r+u)],l=i+e[n*(r+u)+1],h=(a-s)*(l+i);s=a,i=l,o+=h}return.5*o}function fe(e,r){for(var t=e.coords,n=e.lengths,o=0,s=0,i=0;i<n.length;i++)s+=ce(t,o,n[i],r),o+=i;return Math.abs(s)}function de(e,r){if((0,a.Wi)(e))return null;for(var t=e.clone(),n=e.coords,o=e.lengths,s=0,i=0;i<o.length;i++){for(var u=o[i],l=n[r*s],h=n[r*s+1],c=1;c<u;c++){var f=l+n[r*(s+c)],d=h+n[r*(s+c)+1];t.coords[r*(s+c)]=f,t.coords[r*(s+c)+1]=d,l=f,h=d}s+=u}return t}}}]);
//# sourceMappingURL=3406.5701fdce.chunk.js.map