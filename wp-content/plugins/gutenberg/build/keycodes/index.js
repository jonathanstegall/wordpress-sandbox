this.wp=this.wp||{},this.wp.keycodes=function(t){var n={};function r(e){if(n[e])return n[e].exports;var u=n[e]={i:e,l:!1,exports:{}};return t[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var u in t)r.d(e,u,function(n){return t[n]}.bind(null,u));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=326)}({1:function(t,n){!function(){t.exports=this.wp.i18n}()},10:function(t,n,r){"use strict";function e(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}r.d(n,"a",(function(){return e}))},18:function(t,n,r){"use strict";var e=r(31);function u(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||Object(e.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(n,"a",(function(){return u}))},2:function(t,n){!function(){t.exports=this.lodash}()},31:function(t,n,r){"use strict";function e(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}r.d(n,"a",(function(){return e}))},326:function(t,n,r){"use strict";r.r(n);var e=r(10),u=r(18),o=r(2),c=r(1);function i(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:window).navigator.platform;return-1!==t.indexOf("Mac")||Object(o.includes)(["iPad","iPhone"],t)}r.d(n,"BACKSPACE",(function(){return a})),r.d(n,"TAB",(function(){return f})),r.d(n,"ENTER",(function(){return l})),r.d(n,"ESCAPE",(function(){return d})),r.d(n,"SPACE",(function(){return b})),r.d(n,"LEFT",(function(){return s})),r.d(n,"UP",(function(){return j})),r.d(n,"RIGHT",(function(){return O})),r.d(n,"DOWN",(function(){return p})),r.d(n,"DELETE",(function(){return y})),r.d(n,"F10",(function(){return v})),r.d(n,"ALT",(function(){return h})),r.d(n,"CTRL",(function(){return m})),r.d(n,"COMMAND",(function(){return g})),r.d(n,"SHIFT",(function(){return S})),r.d(n,"modifiers",(function(){return A})),r.d(n,"rawShortcut",(function(){return w})),r.d(n,"displayShortcutList",(function(){return C})),r.d(n,"displayShortcut",(function(){return P})),r.d(n,"shortcutAriaLabel",(function(){return E})),r.d(n,"isKeyboardEvent",(function(){return _}));var a=8,f=9,l=13,d=27,b=32,s=37,j=38,O=39,p=40,y=46,v=121,h="alt",m="ctrl",g="meta",S="shift",A={primary:function(t){return t()?[g]:[m]},primaryShift:function(t){return t()?[S,g]:[m,S]},primaryAlt:function(t){return t()?[h,g]:[m,h]},secondary:function(t){return t()?[S,h,g]:[m,S,h]},access:function(t){return t()?[m,h]:[S,h]},ctrl:function(){return[m]},alt:function(){return[h]},ctrlShift:function(){return[m,S]},shift:function(){return[S]},shiftAlt:function(){return[S,h]}},w=Object(o.mapValues)(A,(function(t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return[].concat(Object(u.a)(t(r)),[n.toLowerCase()]).join("+")}})),C=Object(o.mapValues)(A,(function(t){return function(n){var r,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,a=c(),f=(r={},Object(e.a)(r,h,a?"⌥":"Alt"),Object(e.a)(r,m,a?"^":"Ctrl"),Object(e.a)(r,g,"⌘"),Object(e.a)(r,S,a?"⇧":"Shift"),r),l=t(c).reduce((function(t,n){var r=Object(o.get)(f,n,n);return[].concat(Object(u.a)(t),a?[r]:[r,"+"])}),[]),d=Object(o.capitalize)(n);return[].concat(Object(u.a)(l),[d])}})),P=Object(o.mapValues)(C,(function(t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return t(n,r).join("")}})),E=Object(o.mapValues)(A,(function(t){return function(n){var r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,f=a(),l=(r={},Object(e.a)(r,S,"Shift"),Object(e.a)(r,g,f?"Command":"Control"),Object(e.a)(r,m,"Control"),Object(e.a)(r,h,f?"Option":"Alt"),Object(e.a)(r,",",Object(c.__)("Comma")),Object(e.a)(r,".",Object(c.__)("Period")),Object(e.a)(r,"`",Object(c.__)("Backtick")),r);return[].concat(Object(u.a)(t(a)),[n]).map((function(t){return Object(o.capitalize)(Object(o.get)(l,t,t))})).join(f?" ":" + ")}})),_=Object(o.mapValues)(A,(function(t){return function(n,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,u=t(e);return!!u.every((function(t){return n["".concat(t,"Key")]}))&&(r?n.key===r:Object(o.includes)(u,n.key.toLowerCase()))}}))}});