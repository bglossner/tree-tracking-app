"use strict";(self.webpackChunkufe_tree_tracking_app=self.webpackChunkufe_tree_tracking_app||[]).push([[2389],{42977:function(e,r,t){t.r(r),t.d(r,{default:function(){return B}});var n=t(1413),a=t(15671),i=t(43144),o=t(60136),l=t(54062),s=t(27366),u=t(76200),c=t(10064),p=t(41691),f=t(92026),y=t(97642),d=t(75298),v=t(35995),h=t(49861),_=(t(63780),t(93169),t(89125)),g=t(38511),m=t(69912),S=t(31201),b=t(78952),C=t(74184),k=t(27961),T=t(17775),Z=t(6741),w=t(11936),O=t(6693),I=t(46671),R=t(6061),L=t(29598),D=t(71684),x=t(56811),M=t(18870),N=t(25899),j=t(45948),U=t(77990),W=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"],A=function(e){(0,o.Z)(t,e);var r=(0,l.Z)(t);function t(){var e;(0,a.Z)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=r.call.apply(r,[this].concat(i))).listMode="show",e.isReference=null,e.operationalLayerType="ArcGISTiledMapServiceLayer",e.resampling=!0,e.sourceJSON=null,e.spatialReference=null,e.path=null,e.sublayers=null,e.type="tile",e.url=null,e}return(0,i.Z)(t,[{key:"normalizeCtorArgs",value:function(e,r){return"string"==typeof e?(0,n.Z)({url:e},r):e}},{key:"load",value:function(e){var r=this,t=(0,f.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(d.r9).then((function(){return r._fetchService(t)}))),Promise.resolve(this)}},{key:"attributionDataUrl",get:function(){var e,r=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return r&&this._getDefaultAttribution(this._getMapName(r))}},{key:"readSpatialReference",value:function(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&b.Z.fromJSON(e)}},{key:"writeSublayers",value:function(e,r,t,a){if(this.loaded&&e){var i=e.slice().reverse().flatten((function(e){var r=e.sublayers;return r&&r.toArray().reverse()})).toArray(),o=[],l=(0,n.Z)({writeSublayerStructure:!1},a);i.forEach((function(e){var r=e.write({},l);o.push(r)})),o.some((function(e){return Object.keys(e).length>1}))&&(r.layers=o)}}},{key:"tileServers",get:function(){return this._getDefaultTileServers(this.parsedUrl.path)}},{key:"castTileServers",value:function(e){return Array.isArray(e)?e.map((function(e){return(0,v.mN)(e).path})):null}},{key:"fetchTile",value:function(e,r,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=a.signal,o=this.getTileUrl(e,r,t),l={responseType:"image",signal:i,query:(0,n.Z)({},this.refreshParameters)};return(0,u.default)(o,l).then((function(e){return e.data}))}},{key:"getTileUrl",value:function(e,r,t){var a=!this.tilemapCache&&this.supportsBlankTile,i=(0,v.B7)((0,n.Z)((0,n.Z)((0,n.Z)({},this.parsedUrl.query),{},{blankTile:!a&&null},this.customParameters),{},{token:this.apiKey})),o=this.tileServers;return"".concat(o&&o.length?o[r%o.length]:this.parsedUrl.path,"/tile/").concat(e,"/").concat(r,"/").concat(t).concat(i?"?"+i:"")}},{key:"_fetchService",value:function(e){var r=this;return new Promise((function(t,a){if(r.sourceJSON){if(null!=r.sourceJSON.bandCount&&null!=r.sourceJSON.pixelSizeX)throw new c.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");t({data:r.sourceJSON})}else{if(!r.parsedUrl)throw new c.Z("tile-layer:undefined-url","layer's url is not defined");var i=(0,N.Qc)(r.parsedUrl.path);if((0,f.pC)(i)&&"ImageServer"===i.serverType)throw new c.Z("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,u.default)(r.parsedUrl.path,{query:(0,n.Z)((0,n.Z)((0,n.Z)({f:"json"},r.parsedUrl.query),r.customParameters),{},{token:r.apiKey}),responseType:"json",signal:e}).then(t,a)}})).then((function(t){if(t.ssl&&(r.url=r.url.replace(/^http:/i,"https:")),r.sourceJSON=t.data,r.read(t.data,{origin:"service",url:r.parsedUrl}),10.1===r.version&&!(0,N.M8)(r.url))return r._fetchServerVersion(r.url,e).then((function(e){r.read({currentVersion:e})})).catch((function(){}))}))}},{key:"_fetchServerVersion",value:function(e,r){if(!(0,N.B5)(e))return Promise.reject();var t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return(0,u.default)(t,{query:(0,n.Z)((0,n.Z)({f:"json"},this.customParameters),{},{token:this.apiKey}),responseType:"json",signal:r}).then((function(e){if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new c.Z("tile-layer:version-not-available")}))}},{key:"_getMapName",value:function(e){var r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}},{key:"_getDefaultAttribution",value:function(e){if(e){var r;e=e.toLowerCase();for(var t=0,n=W.length;t<n;t++)if((r=W[t]).toLowerCase().indexOf(e)>-1)return(0,v.hF)("//static.arcgis.com/attribution/"+r)}}},{key:"_getDefaultTileServers",value:function(e){var r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}},{key:"hasOverriddenFetchTile",get:function(){return!this.fetchTile.__isDefault__}}]),t}((0,O.h)((0,M.x)((0,x.M)((0,R.q)((0,L.I)((0,T.Z)((0,Z.O)((0,w.Y)((0,y.R)((0,p.p)((0,D.Q)((0,k.V)((0,I.N)(C.Z))))))))))))));(0,s._)([(0,h.Cb)({readOnly:!0})],A.prototype,"attributionDataUrl",null),(0,s._)([(0,h.Cb)({type:["show","hide","hide-children"]})],A.prototype,"listMode",void 0),(0,s._)([(0,h.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],A.prototype,"isReference",void 0),(0,s._)([(0,h.Cb)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],A.prototype,"operationalLayerType",void 0),(0,s._)([(0,h.Cb)({type:Boolean})],A.prototype,"resampling",void 0),(0,s._)([(0,h.Cb)()],A.prototype,"sourceJSON",void 0),(0,s._)([(0,h.Cb)({type:b.Z})],A.prototype,"spatialReference",void 0),(0,s._)([(0,g.r)("spatialReference",["spatialReference","tileInfo"])],A.prototype,"readSpatialReference",null),(0,s._)([(0,h.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],A.prototype,"path",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],A.prototype,"sublayers",void 0),(0,s._)([(0,S.c)("sublayers",{layers:{type:[U.Z]}})],A.prototype,"writeSublayers",null),(0,s._)([(0,h.Cb)({json:{read:!1,write:!1}})],A.prototype,"popupEnabled",void 0),(0,s._)([(0,h.Cb)()],A.prototype,"tileServers",null),(0,s._)([(0,_.p)("tileServers")],A.prototype,"castTileServers",null),(0,s._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],A.prototype,"type",void 0),(0,s._)([(0,h.Cb)(j.HQ)],A.prototype,"url",void 0),(A=(0,s._)([(0,m.j)("esri.layers.TileLayer")],A)).prototype.fetchTile.__isDefault__=!0;var B=A},17775:function(e,r,t){t.d(r,{Z:function(){return d}});var n=t(15671),a=t(43144),i=t(60136),o=t(54062),l=t(27366),s=(t(59486),t(49861)),u=(t(63780),t(93169),t(25243),t(38511)),c=t(69912),p=t(71466),f=t(23638),y=t(78952),d=function(e){var r=function(e){(0,i.Z)(t,e);var r=(0,o.Z)(t);function t(){var e;return(0,n.Z)(this,t),(e=r.apply(this,arguments)).copyright=null,e.minScale=0,e.maxScale=0,e.spatialReference=null,e.tileInfo=null,e.tilemapCache=null,e}return(0,a.Z)(t,[{key:"readMinScale",value:function(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}},{key:"readMaxScale",value:function(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}},{key:"supportsBlankTile",get:function(){return this.version>=10.2}},{key:"readTilemapCache",value:function(e,r){return r.capabilities&&r.capabilities.indexOf("Tilemap")>-1?new f.y({layer:this}):null}}]),t}(e);return(0,l._)([(0,s.Cb)({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),(0,l._)([(0,s.Cb)()],r.prototype,"minScale",void 0),(0,l._)([(0,u.r)("service","minScale")],r.prototype,"readMinScale",null),(0,l._)([(0,s.Cb)()],r.prototype,"maxScale",void 0),(0,l._)([(0,u.r)("service","maxScale")],r.prototype,"readMaxScale",null),(0,l._)([(0,s.Cb)({type:y.Z})],r.prototype,"spatialReference",void 0),(0,l._)([(0,s.Cb)({readOnly:!0})],r.prototype,"supportsBlankTile",null),(0,l._)([(0,s.Cb)(p.h)],r.prototype,"tileInfo",void 0),(0,l._)([(0,s.Cb)()],r.prototype,"tilemapCache",void 0),(0,l._)([(0,u.r)("service","tilemapCache",["capabilities"])],r.prototype,"readTilemapCache",null),(0,l._)([(0,s.Cb)()],r.prototype,"version",void 0),r=(0,l._)([(0,c.j)("esri.layers.mixins.ArcGISCachedService")],r)}},10141:function(e,r,t){function n(e){var r,t=e.layer;return"floorInfo"in t&&null!=(r=t.floorInfo)&&r.floorField&&"floors"in e.view?o(e.view.floors,t.floorInfo.floorField):null}function a(e,r){var t;return"floorInfo"in r&&null!=(t=r.floorInfo)&&t.floorField?o(e,r.floorInfo.floorField):null}function i(e,r){var t=r.definitionExpression;return e?t?"(".concat(t,") AND (").concat(e,")"):e:t}function o(e,r){if(null==e||!e.length)return null;var t=e.filter((function(e){return""!==e})).map((function(e){return"'".concat(e,"'")}));return t.push("''"),"".concat(r," IN (").concat(t.join(","),") OR ").concat(r," IS NULL")}t.d(r,{Hp:function(){return i},cx:function(){return n},ff:function(){return a}})}}]);
//# sourceMappingURL=2389.90ed581f.chunk.js.map