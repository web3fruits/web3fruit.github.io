System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///_virtual/cjs-loader.mjs",[],(function(e){return{execute:function(){e("default",new(function(){function e(){this._registry={},this._moduleCache={}}var r=e.prototype;return r.define=function(e,r,t){this._registry[e]={factory:r,resolveMap:t}},r.require=function(e){return this._require(e)},r.throwInvalidWrapper=function(e,r){throw new Error("Module '"+e+"' imported from '"+r+"' is expected be an ESM-wrapped CommonJS module but it doesn't.")},r._require=function(e,r){var t=this._moduleCache[e];if(t)return t.exports;var o={id:e,exports:{}};return this._moduleCache[e]=o,this._tryModuleLoad(o,e),o.exports},r._resolve=function(e,r){return this._resolveFromInfos(e,r)||this._throwUnresolved(e,r)},r._resolveFromInfos=function(e,r){var t,o;return e in cjsInfos?e:r&&null!=(t=null==(o=cjsInfos[r])?void 0:o.resolveCache[e])?t:void 0},r._tryModuleLoad=function(e,r){var t=!0;try{this._load(e,r),t=!1}finally{t&&delete this._moduleCache[r]}},r._load=function(e,r){var t=this._loadWrapper(r),o=t.factory,n=t.resolveMap,i=this._createRequire(e),u=n?this._createRequireWithResolveMap("function"==typeof n?n():n,i):i;o(e.exports,u,e)},r._loadWrapper=function(e){return e in this._registry?this._registry[e]:this._loadHostProvidedModules(e)},r._loadHostProvidedModules=function(e){return{factory:function(r,t,o){if("undefined"==typeof require)throw new Error("Current environment does not provide a require() for requiring '"+e+"'.");try{o.exports=require(e)}catch(r){throw new Error("Exception thrown when calling host defined require('"+e+"').",{cause:r})}}}},r._createRequire=function(e){var r=this;return function(t){return r._require(t,e)}},r._createRequireWithResolveMap=function(e,r){return function(t){var o=e[t];if(o)return r(o);throw new Error("Unresolved specifier "+t)}},r._throwUnresolved=function(e,r){throw new Error("Unable to resolve "+e+" from "+parent+".")},e}()))}}}));

System.register("chunks:///_virtual/detect-provider.min.js",["./cjs-loader.mjs"],(function(e,t){var o;return{setters:[function(e){o=e.default}],execute:function(){e("default",void 0);var n=e("__cjsMetaURL",t.meta.url);o.define(n,(function(t,o,n,i,r){!function(e){"object"==typeof t&&void 0!==n?n.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).detectEthereumProvider=e()}((function(){return function(e){var t=void 0===e?{}:e,o=t.mustBeMetaMask,n=void 0!==o&&o,i=t.silent,r=void 0!==i&&i,d=t.timeout,a=void 0===d?3e3:d;!function(){if("boolean"!=typeof n)throw new Error("@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.");if("boolean"!=typeof r)throw new Error("@metamask/detect-provider: Expected option 'silent' to be a boolean.");if("number"!=typeof a)throw new Error("@metamask/detect-provider: Expected option 'timeout' to be a number.")}();var u=!1;return new Promise((function(e){function t(){if(!u){u=!0,window.removeEventListener("ethereum#initialized",t);var o=window.ethereum;if(!o||n&&!o.isMetaMask){var i=n&&o?"Non-MetaMask window.ethereum detected.":"Unable to detect window.ethereum.";!r&&console.error("@metamask/detect-provider:",i),e(null)}else e(o)}}window.ethereum?t():(window.addEventListener("ethereum#initialized",t,{once:!0}),setTimeout((function(){t()}),a))}))}})),e("default",n.exports)}),{})}}}));

System.register("chunks:///_virtual/detect-provider.min.mjs_cjs=&original=.js",["./detect-provider.min.js","./cjs-loader.mjs"],(function(e,t){var r,i;return{setters:[function(t){r=t.__cjsMetaURL;var i={};i.__cjsMetaURL=t.__cjsMetaURL,i.default=t.default,e(i)},function(e){i=e.default}],execute:function(){r||i.throwInvalidWrapper("./detect-provider.min.js",t.meta.url),i.require(r)}}}));

System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js",[],(function(t){return{execute:function(){function e(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function r(){return(r=t("extends",Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t})).apply(this,arguments)}function n(e){return(n=t("getPrototypeOf",Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)}))(e)}function o(e,r){return(o=t("setPrototypeOf",Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t}))(e,r)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function a(e,r,n){return(a=i()?t("construct",Reflect.construct.bind()):t("construct",(function(t,e,r){var n=[null];n.push.apply(n,e);var i=new(Function.bind.apply(t,n));return r&&o(i,r.prototype),i}))).apply(null,arguments)}function c(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function u(e){var r="function"==typeof Map?new Map:void 0;return(u=t("wrapNativeSuper",(function(t){if(null===t||!c(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return a(t,arguments,n(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)})))(e)}t({applyDecoratedDescriptor:function(t,e,r,n,o){var i={};Object.keys(n).forEach((function(t){i[t]=n[t]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0);i=r.slice().reverse().reduce((function(r,n){return n(t,e,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0);void 0===i.initializer&&(Object.defineProperty(t,e,i),i=null);return i},assertThisInitialized:function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},asyncToGenerator:function(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}},construct:a,extends:r,getPrototypeOf:n,inheritsLoose:function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,o(t,e)},initializerDefineProperty:function(t,e,r,n){if(!r)return;Object.defineProperty(t,e,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})},isNativeFunction:c,isNativeReflectConstruct:i,regeneratorRuntime:function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
t("regeneratorRuntime",(function(){return e}));var e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new P(n||[]);return o(a,"_invoke",{value:x(t,r,c)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h={};function p(){}function y(){}function v(){}var d={};l(d,a,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(_([])));b&&b!==r&&n.call(b,a)&&(d=b);var m=v.prototype=p.prototype=Object.create(d);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function x(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t||""===t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return y.prototype=v,o(m,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:y,configurable:!0}),y.displayName=l(v,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(m),t},e.awrap=function(t){return{__await:t}},w(O.prototype),l(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(m),l(m,u,"Generator"),l(m,a,(function(){return this})),l(m,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=_,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e},setPrototypeOf:o,wrapNativeSuper:u})}}}));


System.register("chunks:///_virtual/web3.min.mjs_cjs=&original=.js",["./web3.min.js","./cjs-loader.mjs"],(function(e,t){var r,n;return{setters:[function(t){r=t.__cjsMetaURL;var n={};n.__cjsMetaURL=t.__cjsMetaURL,n.default=t.default,e(n)},function(e){n=e.default}],execute:function(){r||n.throwInvalidWrapper("./web3.min.js",t.meta.url),n.require(r)}}}));

} }; });