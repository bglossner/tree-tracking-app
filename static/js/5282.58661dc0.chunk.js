"use strict";(self.webpackChunkufe_tree_tracking_app=self.webpackChunkufe_tree_tracking_app||[]).push([[5282],{65282:function(n,e,r){r.r(e),r.d(e,{registerFunctions:function(){return u}});var t=r(62357),o=r(44715),a=r(29876);function i(n){return n&&n.domain?"coded-value"===n.domain.type||"codedValue"===n.domain.type?t.Z.convertObjectToArcadeDictionary({type:"codedValue",name:n.domain.name,dataType:a.yE[n.field.type],codedValues:n.domain.codedValues.map((function(n){return{name:n.name,code:n.code}}))}):t.Z.convertObjectToArcadeDictionary({type:"range",name:n.domain.name,dataType:a.yE[n.field.type],min:n.domain.min,max:n.domain.max}):null}function u(n){"async"===n.mode&&(n.functions.domain=function(e,r){return n.standardFunctionAsync(e,r,(function(n,e,r){if((0,o.p)(r,2,3),(0,o.k)(r[0]))return i((0,o.T)(r[0],(0,o.d)(r[1]),void 0===r[2]?void 0:(0,o.t)(r[2])));if((0,o.q)(r[0]))return r[0]._ensureLoaded().then((function(){return i((0,o.Z)((0,o.d)(r[1]),r[0],null,void 0===r[2]?void 0:(0,o.t)(r[2])))}));throw new Error("Invalid Parameter")}))},n.functions.subtypes=function(e,r){return n.standardFunctionAsync(e,r,(function(n,e,r){if((0,o.p)(r,1,1),(0,o.k)(r[0])){var a=(0,o.Q)(r[0]);return a?t.Z.convertObjectToArcadeDictionary(a):null}if((0,o.q)(r[0]))return r[0]._ensureLoaded().then((function(){var n=r[0].subtypes();return n?t.Z.convertObjectToArcadeDictionary(n):null}));throw new Error("Invalid Parameter")}))},n.functions.domainname=function(e,r){return n.standardFunctionAsync(e,r,(function(n,e,r){if((0,o.p)(r,2,4),(0,o.k)(r[0]))return(0,o.U)(r[0],(0,o.d)(r[1]),r[2],void 0===r[3]?void 0:(0,o.t)(r[3]));if((0,o.q)(r[0]))return r[0]._ensureLoaded().then((function(){var n=(0,o.Z)((0,o.d)(r[1]),r[0],null,void 0===r[3]?void 0:(0,o.t)(r[3]));return(0,o._)(n,r[2])}));throw new Error("Invalid Parameter")}))},n.signatures.push({name:"domainname",min:"2",max:"4"}),n.functions.domaincode=function(e,r){return n.standardFunctionAsync(e,r,(function(n,e,r){if((0,o.p)(r,2,4),(0,o.k)(r[0]))return(0,o.V)(r[0],(0,o.d)(r[1]),r[2],void 0===r[3]?void 0:(0,o.t)(r[3]));if((0,o.q)(r[0]))return r[0]._ensureLoaded().then((function(){var n=(0,o.Z)((0,o.d)(r[1]),r[0],null,void 0===r[3]?void 0:(0,o.t)(r[3]));return(0,o.$)(n,r[2])}));throw new Error("Invalid Parameter")}))},n.signatures.push({name:"domaincode",min:"2",max:"4"})),n.functions.text=function(e,r){return n.standardFunctionAsync(e,r,(function(n,e,r){if((0,o.p)(r,1,2),!(0,o.q)(r[0]))return(0,o.u)(r[0],r[1]);var t=(0,o.C)(r[1],"");return""===t?r[0].castToText():"schema"===t.toLowerCase()?r[0].convertToText("schema",n.abortSignal):"featureset"===t.toLowerCase()?r[0].convertToText("featureset",n.abortSignal):void 0}))},n.functions.gdbversion=function(e,r){return n.standardFunctionAsync(e,r,(function(n,e,r){if((0,o.p)(r,1,1),(0,o.k)(r[0]))return r[0].gdbVersion();if((0,o.q)(r[0]))return r[0].load().then((function(n){return n.gdbVersion}));throw new Error("Invalid Parameter")}))},n.functions.schema=function(e,r){return n.standardFunctionAsync(e,r,(function(n,e,r){if((0,o.p)(r,1,1),(0,o.q)(r[0]))return r[0].load().then((function(){return t.Z.convertObjectToArcadeDictionary(r[0].schema())}));if((0,o.k)(r[0])){var a=(0,o.P)(r[0]);return a?t.Z.convertObjectToArcadeDictionary(a):null}throw new Error("Invalid Parameter")}))}}}}]);
//# sourceMappingURL=5282.58661dc0.chunk.js.map