this.wp=this.wp||{},this.wp.coreData=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=351)}({0:function(e,t){!function(){e.exports=this.wp.element}()},10:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},18:function(e,t,n){"use strict";var r=n(32);function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return a}))},19:function(e,t,n){"use strict";var r=n(35);var a=n(36);function u(e,t){return Object(r.a)(e)||function(e,t){var n=[],r=!0,a=!1,u=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,u=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw u}}return n}(e,t)||Object(a.a)()}n.d(t,"a",(function(){return u}))},2:function(e,t){!function(){e.exports=this.lodash}()},23:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},26:function(e,t){!function(){e.exports=this.wp.url}()},32:function(e,t,n){"use strict";function r(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}n.d(t,"a",(function(){return r}))},34:function(e,t){!function(){e.exports=this.wp.deprecated}()},35:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},351:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"receiveUserQuery",(function(){return q})),n.d(r,"receiveCurrentUser",(function(){return B})),n.d(r,"addEntities",(function(){return Y})),n.d(r,"receiveEntityRecords",(function(){return F})),n.d(r,"receiveThemeSupports",(function(){return K})),n.d(r,"receiveEmbedPreview",(function(){return Q})),n.d(r,"editEntityRecord",(function(){return W})),n.d(r,"undo",(function(){return H})),n.d(r,"redo",(function(){return z})),n.d(r,"__unstableCreateUndoLevel",(function(){return G})),n.d(r,"saveEntityRecord",(function(){return X})),n.d(r,"saveEditedEntityRecord",(function(){return J})),n.d(r,"receiveUploadPermissions",(function(){return Z})),n.d(r,"receiveUserPermission",(function(){return $})),n.d(r,"receiveAutosaves",(function(){return ee}));var a={};n.r(a),n.d(a,"isRequestingEmbedPreview",(function(){return je})),n.d(a,"getAuthors",(function(){return me})),n.d(a,"getCurrentUser",(function(){return xe})),n.d(a,"getUserQueryResults",(function(){return we})),n.d(a,"getEntitiesByKind",(function(){return Re})),n.d(a,"getEntity",(function(){return ke})),n.d(a,"getEntityRecord",(function(){return _e})),n.d(a,"getRawEntityRecord",(function(){return Te})),n.d(a,"getEntityRecords",(function(){return Ie})),n.d(a,"getEntityRecordChangesByRecord",(function(){return Se})),n.d(a,"getEntityRecordEdits",(function(){return Ae})),n.d(a,"getEntityRecordNonTransientEdits",(function(){return Ue})),n.d(a,"hasEditsForEntityRecord",(function(){return Ce})),n.d(a,"getEditedEntityRecord",(function(){return Pe})),n.d(a,"isAutosavingEntityRecord",(function(){return De})),n.d(a,"isSavingEntityRecord",(function(){return Me})),n.d(a,"getLastEntitySaveError",(function(){return Ne})),n.d(a,"getUndoEdit",(function(){return Le})),n.d(a,"getRedoEdit",(function(){return qe})),n.d(a,"hasUndo",(function(){return Be})),n.d(a,"hasRedo",(function(){return Ye})),n.d(a,"getThemeSupports",(function(){return Fe})),n.d(a,"getEmbedPreview",(function(){return Ke})),n.d(a,"isPreviewEmbedFallback",(function(){return Qe})),n.d(a,"hasUploadPermissions",(function(){return We})),n.d(a,"canUser",(function(){return He})),n.d(a,"getAutosaves",(function(){return ze})),n.d(a,"getAutosave",(function(){return Ge})),n.d(a,"hasFetchedAutosaves",(function(){return Xe})),n.d(a,"getReferenceByDistinctEdits",(function(){return Je}));var u={};n.r(u),n.d(u,"getAuthors",(function(){return ot})),n.d(u,"getCurrentUser",(function(){return st})),n.d(u,"getEntityRecord",(function(){return dt})),n.d(u,"getEntityRecords",(function(){return ft})),n.d(u,"getThemeSupports",(function(){return lt})),n.d(u,"getEmbedPreview",(function(){return vt})),n.d(u,"hasUploadPermissions",(function(){return pt})),n.d(u,"canUser",(function(){return bt})),n.d(u,"getAutosaves",(function(){return Et})),n.d(u,"getAutosave",(function(){return ht}));var c=n(6),i=n(4),o=n(19),s=n(18),d=n(10),f=n(2),l=n(48),v=n.n(l);var p=function(e){return function(t){return function(n,r){return void 0===n||e(r)?t(n,r):n}}},b=function(e){return function(t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,a=r[e];if(void 0===a)return n;var u=t(n[a],r);return u===n[a]?n:Object(c.a)({},n,Object(d.a)({},a,u))}}},E=function(e){return function(t){return function(n,r){return t(n,e(r))}}};var h=function(e){var t=new WeakMap;return function(n){var r;return t.has(n)?r=t.get(n):(r=e(n),Object(f.isObjectLike)(n)&&t.set(n,r)),r}};function y(e){return{type:"RECEIVE_ITEMS",items:Object(f.castArray)(e)}}var g=n(37),O=n(64),j=n.n(O),m=n(26);var x=h((function(e){for(var t={stableKey:"",page:1,perPage:10},n=Object.keys(e).sort(),r=0;r<n.length;r++){var a=n[r],u=e[a];switch(a){case"page":t[a]=Number(u);break;case"per_page":t.perPage=Number(u);break;default:t.stableKey+=(t.stableKey?"&":"")+Object(m.addQueryArgs)("",Object(d.a)({},a,u)).slice(1)}}return t})),w=new WeakMap;function R(e,t){var n=x(t),r=n.stableKey,a=n.page,u=n.perPage;if(!e.queries[r])return null;var c=e.queries[r];if(!c)return null;for(var i=-1===u?0:(a-1)*u,o=-1===u?c.length:Math.min(i+u,c.length),s=[],d=i;d<o;d++){var f=c[d];s.push(e.items[f])}return s}var k=Object(g.a)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=w.get(e);if(n){var r=n.get(t);if(void 0!==r)return r}else n=new j.a,w.set(e,n);var a=R(e,t);return n.set(t,a),a})),_=n(23),T=n.n(_),I=n(39),S=n.n(I);function A(e){return{type:"API_FETCH",request:e}}function U(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return{type:"SELECT",selectorName:e,args:n}}function C(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return{type:"RESOLVE_SELECT",selectorName:e,args:n}}var P={API_FETCH:function(e){var t=e.request;return S()(t)},SELECT:Object(i.createRegistryControl)((function(e){return function(t){var n,r=t.selectorName,a=t.args;return(n=e.select("core"))[r].apply(n,Object(s.a)(a))}})),RESOLVE_SELECT:Object(i.createRegistryControl)((function(e){return function(t){var n,r=t.selectorName,a=t.args;return(n=e.__experimentalResolveSelect("core"))[r].apply(n,Object(s.a)(a))}}))},D=T.a.mark(W),M=T.a.mark(H),N=T.a.mark(z),V=T.a.mark(X),L=T.a.mark(J);function q(e,t){return{type:"RECEIVE_USER_QUERY",users:Object(f.castArray)(t),queryID:e}}function B(e){return{type:"RECEIVE_CURRENT_USER",currentUser:e}}function Y(e){return{type:"ADD_ENTITIES",entities:e}}function F(e,t,n,r){var a,u=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return"postType"===e&&(n=Object(f.castArray)(n).map((function(e){return"auto-draft"===e.status?Object(c.a)({},e,{title:""}):e}))),a=r?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(c.a)({},y(e),{query:t})}(n,r):y(n),Object(c.a)({},a,{kind:e,name:t,invalidateCache:u})}function K(e){return{type:"RECEIVE_THEME_SUPPORTS",themeSupports:e}}function Q(e,t){return{type:"RECEIVE_EMBED_PREVIEW",url:e,preview:t}}function W(e,t,n,r){var a,u,i,o,s,d,l,v,p,b=arguments;return T.a.wrap((function(E){for(;;)switch(E.prev=E.next){case 0:return a=b.length>4&&void 0!==b[4]?b[4]:{},E.next=3,U("getEntity",e,t);case 3:if(u=E.sent){E.next=6;break}throw new Error("The entity being edited (".concat(e,", ").concat(t,") does not have a loaded config."));case 6:return i=u.transientEdits,o=void 0===i?{}:i,s=u.mergedEdits,d=void 0===s?{}:s,E.next=9,U("getRawEntityRecord",e,t,n);case 9:return l=E.sent,E.next=12,U("getEditedEntityRecord",e,t,n);case 12:return v=E.sent,p={kind:e,name:t,recordId:n,edits:Object.keys(r).reduce((function(e,t){var n=l[t],a=v[t],u=d[t]?Object(c.a)({},a,r[t]):r[t];return e[t]=Object(f.isEqual)(n,u)?void 0:u,e}),{}),transientEdits:o},E.abrupt("return",Object(c.a)({type:"EDIT_ENTITY_RECORD"},p,{meta:{undo:!a.undoIgnore&&Object(c.a)({},p,{edits:Object.keys(r).reduce((function(e,t){return e[t]=v[t],e}),{})})}}));case 15:case"end":return E.stop()}}),D)}function H(){var e;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U("getUndoEdit");case 2:if(e=t.sent){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,Object(c.a)({type:"EDIT_ENTITY_RECORD"},e,{meta:{isUndo:!0}});case 7:case"end":return t.stop()}}),M)}function z(){var e;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U("getRedoEdit");case 2:if(e=t.sent){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,Object(c.a)({type:"EDIT_ENTITY_RECORD"},e,{meta:{isRedo:!0}});case 7:case"end":return t.stop()}}),N)}function G(){return{type:"CREATE_UNDO_LEVEL"}}function X(e,t,n){var r,a,u,i,s,l,v,p,b,E,h,y,g,O,j,m,x,w,R,k,_,I,S,C,P,D=arguments;return T.a.wrap((function(T){for(;;)switch(T.prev=T.next){case 0:return r=D.length>3&&void 0!==D[3]?D[3]:{isAutosave:!1},a=r.isAutosave,u=void 0!==a&&a,T.next=3,de(e);case 3:if(i=T.sent,s=Object(f.find)(i,{kind:e,name:t})){T.next=7;break}return T.abrupt("return");case 7:l=s.key||ae,v=n[l],p=0,b=Object.entries(n);case 10:if(!(p<b.length)){T.next=24;break}if(E=Object(o.a)(b[p],2),h=E[0],"function"!=typeof(y=E[1])){T.next=21;break}return T.t0=y,T.next=16,U("getEditedEntityRecord",e,t,v);case 16:return T.t1=T.sent,g=(0,T.t0)(T.t1),T.next=20,W(e,t,v,Object(d.a)({},h,g),{undoIgnore:!0});case 20:n[h]=g;case 21:p++,T.next=10;break;case 24:return T.next=26,{type:"SAVE_ENTITY_RECORD_START",kind:e,name:t,recordId:v,isAutosave:u};case 26:return T.prev=26,w="".concat(s.baseURL).concat(v?"/"+v:""),T.next=30,U("getRawEntityRecord",e,t,v);case 30:if(R=T.sent,!u){T.next=55;break}return T.next=34,U("getCurrentUser");case 34:return k=T.sent,_=k?k.id:void 0,T.next=38,U("getAutosave",R.type,R.id,_);case 38:return I=T.sent,S=Object(c.a)({},R,I,n),S=Object.keys(S).reduce((function(e,t){return["title","excerpt","content"].includes(t)&&(e[t]=Object(f.get)(S[t],"raw",S[t])),e}),{status:"auto-draft"===S.status?"draft":S.status}),T.next=43,A({path:"".concat(w,"/autosaves"),method:"POST",data:S});case 43:if(O=T.sent,R.id!==O.id){T.next=51;break}return C=Object(c.a)({},R,S,O),C=Object.keys(C).reduce((function(e,t){return["title","excerpt","content"].includes(t)?e[t]=Object(f.get)(C[t],"raw",C[t]):e[t]="status"===t?"auto-draft"===R.status&&"draft"===C.status?C.status:R.status:Object(f.get)(R[t],"raw",R[t]),e}),{}),T.next=49,F(e,t,C,void 0,!0);case 49:T.next=53;break;case 51:return T.next=53,ee(R.id,O);case 53:T.next=70;break;case 55:return P=n,"postType"===e&&R&&"auto-draft"===R.status&&(P.status||(P=Object(c.a)({},P,{status:"draft"})),P.title&&"Auto Draft"!==P.title||(P=Object(c.a)({},P,{title:""}))),T.next=59,U("getEntityRecord",e,t,v);case 59:return m=T.sent,T.next=62,U("getEntityRecordEdits",e,t,v);case 62:return x=T.sent,T.next=65,F(e,t,Object(c.a)({},m,P),void 0,!0);case 65:return T.next=67,A({path:w,method:v?"PUT":"POST",data:P});case 67:return O=T.sent,T.next=70,F(e,t,O,void 0,!0);case 70:T.next=92;break;case 72:if(T.prev=72,T.t2=T.catch(26),j=T.t2,!m||!x){T.next=92;break}return T.next=78,F(e,t,m,void 0,!0);case 78:return T.t3=W,T.t4=e,T.t5=t,T.t6=v,T.t7=c.a,T.t8={},T.t9=x,T.next=87,U("getEntityRecordEdits",e,t,v);case 87:return T.t10=T.sent,T.t11=(0,T.t7)(T.t8,T.t9,T.t10),T.t12={undoIgnore:!0},T.next=92,(0,T.t3)(T.t4,T.t5,T.t6,T.t11,T.t12);case 92:return T.next=94,{type:"SAVE_ENTITY_RECORD_FINISH",kind:e,name:t,recordId:v,error:j,isAutosave:u};case 94:return T.abrupt("return",O);case 95:case"end":return T.stop()}}),V,null,[[26,72]])}function J(e,t,n,r){var a,u;return T.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,U("hasEditsForEntityRecord",e,t,n);case 2:if(i.sent){i.next=4;break}return i.abrupt("return");case 4:return i.next=6,U("getEntityRecordNonTransientEdits",e,t,n);case 6:return a=i.sent,u=Object(c.a)({id:n},a),i.delegateYield(X(e,t,u,r),"t0",9);case 9:case"end":return i.stop()}}),L)}function Z(e){return{type:"RECEIVE_USER_PERMISSION",key:"create/media",isAllowed:e}}function $(e,t){return{type:"RECEIVE_USER_PERMISSION",key:e,isAllowed:t}}function ee(e,t){return{type:"RECEIVE_AUTOSAVES",postId:e,autosaves:Object(f.castArray)(t)}}var te=T.a.mark(ie),ne=T.a.mark(oe),re=T.a.mark(de),ae="id",ue=[{name:"site",kind:"root",baseURL:"/wp/v2/settings"},{name:"postType",kind:"root",key:"slug",baseURL:"/wp/v2/types"},{name:"media",kind:"root",baseURL:"/wp/v2/media",plural:"mediaItems"},{name:"taxonomy",kind:"root",key:"slug",baseURL:"/wp/v2/taxonomies",plural:"taxonomies"},{name:"widgetArea",kind:"root",baseURL:"/__experimental/widget-areas",plural:"widgetAreas",transientEdits:{blocks:!0}},{name:"user",kind:"root",baseURL:"/wp/v2/users",plural:"users"}],ce=[{name:"postType",loadEntities:ie},{name:"taxonomy",loadEntities:oe}];function ie(){var e;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A({path:"/wp/v2/types?context=edit"});case 2:return e=t.sent,t.abrupt("return",Object(f.map)(e,(function(e,t){return{kind:"postType",baseURL:"/wp/v2/"+e.rest_base,name:t,transientEdits:{blocks:!0,selectionStart:!0,selectionEnd:!0},mergedEdits:{meta:!0}}})));case 4:case"end":return t.stop()}}),te)}function oe(){var e;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A({path:"/wp/v2/taxonomies?context=edit"});case 2:return e=t.sent,t.abrupt("return",Object(f.map)(e,(function(e,t){return{kind:"taxonomy",baseURL:"/wp/v2/"+e.rest_base,name:t}})));case 4:case"end":return t.stop()}}),ne)}var se=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=Object(f.find)(ue,{kind:e,name:t}),u="root"===e?"":Object(f.upperFirst)(Object(f.camelCase)(e)),c=Object(f.upperFirst)(Object(f.camelCase)(t))+(r?"s":""),i=r&&a.plural?Object(f.upperFirst)(Object(f.camelCase)(a.plural)):c;return"".concat(n).concat(u).concat(i)};function de(e){var t,n;return T.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,U("getEntitiesByKind",e);case 2:if(!(t=r.sent)||0===t.length){r.next=5;break}return r.abrupt("return",t);case 5:if(n=Object(f.find)(ce,{name:e})){r.next=8;break}return r.abrupt("return",[]);case 8:return r.next=10,n.loadEntities();case 10:return t=r.sent,r.next=13,Y(t);case 13:return r.abrupt("return",t);case 14:case"end":return r.stop()}}),re)}function fe(e,t,n,r){for(var a=(n-1)*r,u=Math.max(e.length,a+t.length),c=new Array(u),i=0;i<u;i++){var o=i>=a&&i<a+t.length;c[i]=o?t[i-a]:e[i]}return c}var le=Object(f.flowRight)([p((function(e){return"query"in e})),E((function(e){return e.query?Object(c.a)({},e,x(e.query)):e})),b("stableKey")])((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.page,a=t.perPage,u=t.key,c=void 0===u?ae:u;return"RECEIVE_ITEMS"!==n?e:fe(e||[],Object(f.map)(t.items,c),r,a)})),ve=Object(i.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_ITEMS":var n=t.key||ae;return Object(c.a)({},e,t.items.reduce((function(t,r){var a=r[n];return t[a]=function(e,t){if(!e)return t;var n=!1,r={};for(var a in t)Object(f.isEqual)(e[a],t[a])?r[a]=e[a]:(n=!0,r[a]=t[a]);return n?r:e}(e[a],r),t}),{}))}return e},queries:le});function pe(e){return Object(f.flowRight)([p((function(t){return t.name&&t.kind&&t.name===e.name&&t.kind===e.kind})),E((function(t){return Object(c.a)({},t,{key:e.key||ae})}))])(Object(i.combineReducers)({queriedData:ve,edits:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_ITEMS":var n=Object(c.a)({},e),r=!0,a=!1,u=void 0;try{for(var i,o=function(){var e=i.value,r=e[t.key],a=n[r];if(!a)return"continue";var u=Object.keys(a).reduce((function(t,n){return Object(f.isEqual)(a[n],Object(f.get)(e[n],"raw",e[n]))||(t[n]=a[n]),t}),{});Object.keys(u).length?n[r]=u:delete n[r]},s=t.items[Symbol.iterator]();!(r=(i=s.next()).done);r=!0)o()}catch(e){a=!0,u=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw u}}return n;case"EDIT_ENTITY_RECORD":var l=Object(c.a)({},e[t.recordId],t.edits);return Object.keys(l).forEach((function(e){void 0===l[e]&&delete l[e]})),Object(c.a)({},e,Object(d.a)({},t.recordId,l))}return e},saving:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_ENTITY_RECORD_START":case"SAVE_ENTITY_RECORD_FINISH":return Object(c.a)({},e,Object(d.a)({},t.recordId,{pending:"SAVE_ENTITY_RECORD_START"===t.type,error:t.error,isAutosave:t.isAutosave}))}return e}}))}function be(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ENTITIES":return[].concat(Object(s.a)(e),Object(s.a)(t.entities))}return e}var Ee,he=[];he.offset=0;var ye=Object(i.combineReducers)({terms:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_TERMS":return Object(c.a)({},e,Object(d.a)({},t.taxonomy,t.terms))}return e},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{byId:{},queries:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_USER_QUERY":return{byId:Object(c.a)({},e.byId,Object(f.keyBy)(t.users,"id")),queries:Object(c.a)({},e.queries,Object(d.a)({},t.queryID,Object(f.map)(t.users,(function(e){return e.id}))))}}return e},currentUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_CURRENT_USER":return t.currentUser}return e},taxonomies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_TAXONOMIES":return t.taxonomies}return e},themeSupports:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_THEME_SUPPORTS":return Object(c.a)({},e,t.themeSupports)}return e},entities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=be(e.config,t),r=e.reducer;if(!r||n!==e.config){var a=Object(f.groupBy)(n,"kind");r=Object(i.combineReducers)(Object.entries(a).reduce((function(e,t){var n=Object(o.a)(t,2),r=n[0],a=n[1],u=Object(i.combineReducers)(a.reduce((function(e,t){return Object(c.a)({},e,Object(d.a)({},t.name,pe(t)))}),{}));return e[r]=u,e}),{}))}var u=r(e.data,t);return u===e.data&&n===e.config&&r===e.reducer?e:{reducer:r,data:u,config:n}},undo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_ENTITY_RECORD":case"CREATE_UNDO_LEVEL":var n,r="CREATE_UNDO_LEVEL"===t.type,a=!r&&(t.meta.isUndo||t.meta.isRedo);if(r?t=Ee:a||(Ee=Object.keys(t.edits).some((function(e){return!t.transientEdits[e]}))?t:Object(c.a)({},t,{edits:Object(c.a)({},Ee&&Ee.edits,t.edits)})),a){if((n=Object(s.a)(e)).offset=e.offset+(t.meta.isUndo?-1:1),!e.flattenedUndo)return n;r=!0,t=Ee}if(!t.meta.undo)return e;if(!r&&!Object.keys(t.edits).some((function(e){return!t.transientEdits[e]})))return(n=Object(s.a)(e)).flattenedUndo=Object(c.a)({},e.flattenedUndo,t.edits),n.offset=e.offset,n;(n=n||e.slice(0,e.offset||void 0)).offset=n.offset||0,n.pop(),r||n.push({kind:t.meta.undo.kind,name:t.meta.undo.name,recordId:t.meta.undo.recordId,edits:Object(c.a)({},e.flattenedUndo,t.meta.undo.edits)});var u=Object.values(t.meta.undo.edits).filter((function(e){return"function"!=typeof e})),i=Object.values(t.edits).filter((function(e){return"function"!=typeof e}));return v()(u,i)||n.push({kind:t.kind,name:t.name,recordId:t.recordId,edits:r?Object(c.a)({},e.flattenedUndo,t.edits):t.edits}),n}return e},embedPreviews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_EMBED_PREVIEW":var n=t.url,r=t.preview;return Object(c.a)({},e,Object(d.a)({},n,r))}return e},userPermissions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_USER_PERMISSION":return Object(c.a)({},e,Object(d.a)({},t.key,t.isAllowed))}return e},autosaves:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_AUTOSAVES":var n=t.postId,r=t.autosaves;return Object(c.a)({},e,Object(d.a)({},n,r))}return e}}),ge=n(34),Oe=n.n(ge),je=Object(i.createRegistrySelector)((function(e){return function(t,n){return e("core/data").isResolving("core","getEmbedPreview",[n])}}));function me(e){return we(e,"authors")}function xe(e){return e.currentUser}var we=Object(g.a)((function(e,t){var n=e.users.queries[t];return Object(f.map)(n,(function(t){return e.users.byId[t]}))}),(function(e,t){return[e.users.queries[t],e.users.byId]}));function Re(e,t){return Object(f.filter)(e.entities.config,{kind:t})}function ke(e,t,n){return Object(f.find)(e.entities.config,{kind:t,name:n})}function _e(e,t,n,r){return Object(f.get)(e.entities.data,[t,n,"queriedData","items",r])}var Te=Object(g.a)((function(e,t,n,r){var a=_e(e,t,n,r);return a&&Object.keys(a).reduce((function(e,t){return e[t]=Object(f.get)(a[t],"raw",a[t]),e}),{})}),(function(e){return[e.entities.data]}));function Ie(e,t,n,r){var a=Object(f.get)(e.entities.data,[t,n,"queriedData"]);return a?k(a,r):[]}var Se=Object(g.a)((function(e){var t=e.entities.data;return Object.keys(t).reduce((function(n,r){return Object.keys(t[r]).forEach((function(a){var u=Object.keys(t[r][a].edits).filter((function(t){return Ce(e,r,a,t)}));u.length&&(n[r]||(n[r]={}),n[r][a]||(n[r][a]={}),u.forEach((function(t){return n[r][a][t]={rawRecord:Te(e,r,a,t),edits:Ue(e,r,a,t)}})))})),n}),{})}),(function(e){return[e.entities.data]}));function Ae(e,t,n,r){return Object(f.get)(e.entities.data,[t,n,"edits",r])}var Ue=Object(g.a)((function(e,t,n,r){var a=(ke(e,t,n)||{}).transientEdits,u=Ae(e,t,n,r)||{};return a?Object.keys(u).reduce((function(e,t){return a[t]||(e[t]=u[t]),e}),{}):u}),(function(e){return[e.entities.config,e.entities.data]}));function Ce(e,t,n,r){return Me(e,t,n,r)||Object.keys(Ue(e,t,n,r)).length>0}var Pe=Object(g.a)((function(e,t,n,r){return Object(c.a)({},Te(e,t,n,r),Ae(e,t,n,r))}),(function(e){return[e.entities.data]}));function De(e,t,n,r){var a=Object(f.get)(e.entities.data,[t,n,"saving",r],{}),u=a.pending,c=a.isAutosave;return Boolean(u&&c)}function Me(e,t,n,r){return Object(f.get)(e.entities.data,[t,n,"saving",r,"pending"],!1)}function Ne(e,t,n,r){return Object(f.get)(e.entities.data,[t,n,"saving",r,"error"])}function Ve(e){return e.undo.offset}function Le(e){return e.undo[e.undo.length-2+Ve(e)]}function qe(e){return e.undo[e.undo.length+Ve(e)]}function Be(e){return Boolean(Le(e))}function Ye(e){return Boolean(qe(e))}function Fe(e){return e.themeSupports}function Ke(e,t){return e.embedPreviews[t]}function Qe(e,t){var n=e.embedPreviews[t],r='<a href="'+t+'">'+t+"</a>";return!!n&&n.html===r}function We(e){return Oe()("select( 'core' ).hasUploadPermissions()",{alternative:"select( 'core' ).canUser( 'create', 'media' )"}),Object(f.defaultTo)(He(e,"create","media"),!0)}function He(e,t,n,r){var a=Object(f.compact)([t,n,r]).join("/");return Object(f.get)(e,["userPermissions",a])}function ze(e,t,n){return e.autosaves[n]}function Ge(e,t,n,r){if(void 0!==r){var a=e.autosaves[n];return Object(f.find)(a,{author:r})}}var Xe=Object(i.createRegistrySelector)((function(e){return function(t,n,r){return e("core").hasFinishedResolution("getAutosaves",[n,r])}})),Je=Object(g.a)((function(){return[]}),(function(e){return[e.undo.length,e.undo.offset]})),Ze=T.a.mark(ot),$e=T.a.mark(st),et=T.a.mark(dt),tt=T.a.mark(ft),nt=T.a.mark(lt),rt=T.a.mark(vt),at=T.a.mark(pt),ut=T.a.mark(bt),ct=T.a.mark(Et),it=T.a.mark(ht);function ot(){var e;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A({path:"/wp/v2/users/?who=authors&per_page=-1"});case 2:return e=t.sent,t.next=5,q("authors",e);case 5:case"end":return t.stop()}}),Ze)}function st(){var e;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A({path:"/wp/v2/users/me"});case 2:return e=t.sent,t.next=5,B(e);case 5:case"end":return t.stop()}}),$e)}function dt(e,t){var n,r,a,u,c=arguments;return T.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return n=c.length>2&&void 0!==c[2]?c[2]:"",i.next=3,de(e);case 3:if(r=i.sent,a=Object(f.find)(r,{kind:e,name:t})){i.next=7;break}return i.abrupt("return");case 7:return i.next=9,A({path:"".concat(a.baseURL,"/").concat(n,"?context=edit")});case 9:return u=i.sent,i.next=12,F(e,t,u);case 12:case"end":return i.stop()}}),et)}function ft(e,t){var n,r,a,u,i,o=arguments;return T.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n=o.length>2&&void 0!==o[2]?o[2]:{},s.next=3,de(e);case 3:if(r=s.sent,a=Object(f.find)(r,{kind:e,name:t})){s.next=7;break}return s.abrupt("return");case 7:return u=Object(m.addQueryArgs)(a.baseURL,Object(c.a)({},n,{context:"edit"})),s.next=10,A({path:u});case 10:return i=s.sent,s.next=13,F(e,t,Object.values(i),n);case 13:case"end":return s.stop()}}),tt)}function lt(){var e;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A({path:"/wp/v2/themes?status=active"});case 2:return e=t.sent,t.next=5,K(e[0].theme_supports);case 5:case"end":return t.stop()}}),nt)}function vt(e){var t;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,A({path:Object(m.addQueryArgs)("/oembed/1.0/proxy",{url:e})});case 3:return t=n.sent,n.next=6,Q(e,t);case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Q(e,!1);case 12:case"end":return n.stop()}}),rt,null,[[0,8]])}function pt(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Oe()("select( 'core' ).hasUploadPermissions()",{alternative:"select( 'core' ).canUser( 'create', 'media' )"}),e.delegateYield(bt("create","media"),"t0",2);case 2:case"end":return e.stop()}}),at)}function bt(e,t,n){var r,a,u,c,i,o;return T.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(r={create:"POST",read:"GET",update:"PUT",delete:"DELETE"}[e]){s.next=4;break}throw new Error("'".concat(e,"' is not a valid action."));case 4:return a=n?"/wp/v2/".concat(t,"/").concat(n):"/wp/v2/".concat(t),s.prev=5,s.next=8,A({path:a,method:n?"GET":"OPTIONS",parse:!1});case 8:u=s.sent,s.next=14;break;case 11:return s.prev=11,s.t0=s.catch(5),s.abrupt("return");case 14:return c=Object(f.hasIn)(u,["headers","get"])?u.headers.get("allow"):Object(f.get)(u,["headers","Allow"],""),i=Object(f.compact)([e,t,n]).join("/"),o=Object(f.includes)(c,r),s.next=19,$(i,o);case 19:case"end":return s.stop()}}),ut,null,[[5,11]])}function Et(e,t){var n,r,a;return T.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,C("getPostType",e);case 2:return n=u.sent,r=n.rest_base,u.next=6,A({path:"/wp/v2/".concat(r,"/").concat(t,"/autosaves?context=edit")});case 6:if(!(a=u.sent)||!a.length){u.next=10;break}return u.next=10,ee(t,a);case 10:case"end":return u.stop()}}),ct)}function ht(e,t){return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C("getAutosaves",e,t);case 2:case"end":return n.stop()}}),it)}ft.shouldInvalidate=function(e,t,n){return"RECEIVE_ITEMS"===e.type&&e.invalidateCache&&t===e.kind&&n===e.name};var yt=n(0),gt=n(9),Ot=Object(c.a)({},ue.reduce((function(e,t){return e[t.kind]||(e[t.kind]={}),e[t.kind][t.name]={context:Object(yt.createContext)()},e}),{}),ce.reduce((function(e,t){return e[t.name]={},e}),{})),jt=function(e,t){if(!Ot[e])throw new Error("Missing entity config for kind: ".concat(e,"."));return Ot[e][t]||(Ot[e][t]={context:Object(yt.createContext)()}),Ot[e][t]};function mt(e){var t=e.kind,n=e.type,r=e.id,a=e.children,u=jt(t,n).context.Provider;return Object(yt.createElement)(u,{value:r},a)}function xt(e,t){return Object(yt.useContext)(jt(e,t).context)}function wt(e,t,n){var r=xt(e,t),a=Object(i.useSelect)((function(a){var u=a("core"),c=u.getEntityRecord,i=u.getEditedEntityRecord;c(e,t,r);var o=i(e,t,r);return o&&o[n]}),[e,t,r,n]),u=Object(i.useDispatch)("core").editEntityRecord;return[a,Object(yt.useCallback)((function(a){u(e,t,r,Object(d.a)({},n,a))}),[e,t,r,n])]}function Rt(e,t,n){var r=xt(e,t),a=Object(i.useSelect)((function(a){var u=a("core"),c=u.getEntityRecordNonTransientEdits,i=u.isSavingEntityRecord,o=Object.keys(c(e,t,r));return[n?o.some((function(e){return"string"==typeof n?e===n:n.includes(e)})):o.length>0,i(e,t,r),a]}),[e,t,r,n]),u=Object(o.a)(a,3),s=u[0],f=u[1],l=u[2],v=Object(i.useDispatch)("core").saveEntityRecord;return[s,f,Object(yt.useCallback)((function(){var a=l("core").getEntityRecordNonTransientEdits(e,t,r);"string"==typeof n?a=Object(d.a)({},n,a[n]):n&&(a=Object.keys(a).reduce((function(e,t){return n.includes(t)&&(e[t]=a[t]),e}),{})),v(e,t,Object(c.a)({id:r},a))}),[e,t,r,n,l])]}function kt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.initialEdits,a=n.blocksProp,u=void 0===a?"blocks":a,c=n.contentProp,s=wt(e,t,void 0===c?"content":c),d=Object(o.a)(s,2),f=d[0],l=d[1],v=Object(i.useDispatch)("core").editEntityRecord,p=xt(e,t),b=Object(yt.useMemo)((function(){if(r&&v(e,t,p,r,{undoIgnore:!0}),"function"!=typeof f){var n=Object(gt.parse)(f);return n.length?n:[]}}),[p]),E=wt(e,t,u),h=Object(o.a)(E,2),y=h[0],g=void 0===y?b:y,O=h[1],j=Object(yt.useCallback)((function(e){O(e),l((function(e){var t=e.blocks;return Object(gt.serialize)(t)}))}),[O,l]);return[g,O,j]}n.d(t,"EntityProvider",(function(){return mt})),n.d(t,"useEntityId",(function(){return xt})),n.d(t,"useEntityProp",(function(){return wt})),n.d(t,"__experimentalUseEntitySaving",(function(){return Rt})),n.d(t,"useEntityBlockEditor",(function(){return kt}));var _t=ue.reduce((function(e,t){var n=t.kind,r=t.name;return e[se(n,r)]=function(e,t){return _e(e,n,r,t)},e[se(n,r,"get",!0)]=function(e){for(var t=arguments.length,u=new Array(t>1?t-1:0),c=1;c<t;c++)u[c-1]=arguments[c];return Ie.apply(a,[e,n,r].concat(u))},e}),{}),Tt=ue.reduce((function(e,t){var n=t.kind,r=t.name;e[se(n,r)]=function(e){return dt(n,r,e)};var a=se(n,r,"get",!0);return e[a]=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return ft.apply(u,[n,r].concat(t))},e[a].shouldInvalidate=function(e){for(var t,a=arguments.length,u=new Array(a>1?a-1:0),c=1;c<a;c++)u[c-1]=arguments[c];return(t=ft).shouldInvalidate.apply(t,[e,n,r].concat(u))},e}),{}),It=ue.reduce((function(e,t){var n=t.kind,r=t.name;return e[se(n,r,"save")]=function(e){return X(n,r,e)},e}),{});Object(i.registerStore)("core",{reducer:ye,controls:P,actions:Object(c.a)({},r,It),selectors:Object(c.a)({},a,_t),resolvers:Object(c.a)({},u,Tt)})},36:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}n.d(t,"a",(function(){return r}))},37:function(e,t,n){"use strict";var r,a;function u(e){return[e]}function c(){var e={clear:function(){e.head=null}};return e}function i(e,t,n){var r;if(e.length!==t.length)return!1;for(r=n;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}r={},a="undefined"!=typeof WeakMap,t.a=function(e,t){var n,o;function s(){n=a?new WeakMap:c()}function d(){var n,r,a,u,c,s=arguments.length;for(u=new Array(s),a=0;a<s;a++)u[a]=arguments[a];for(c=t.apply(null,u),(n=o(c)).isUniqueByDependants||(n.lastDependants&&!i(c,n.lastDependants,0)&&n.clear(),n.lastDependants=c),r=n.head;r;){if(i(r.args,u,1))return r!==n.head&&(r.prev.next=r.next,r.next&&(r.next.prev=r.prev),r.next=n.head,r.prev=null,n.head.prev=r,n.head=r),r.val;r=r.next}return r={val:e.apply(null,u)},u[0]=null,r.args=u,n.head&&(n.head.prev=r,r.next=n.head),n.head=r,r.val}return t||(t=u),o=a?function(e){var t,a,u,i,o,s=n,d=!0;for(t=0;t<e.length;t++){if(a=e[t],!(o=a)||"object"!=typeof o){d=!1;break}s.has(a)?s=s.get(a):(u=new WeakMap,s.set(a,u),s=u)}return s.has(r)||((i=c()).isUniqueByDependants=d,s.set(r,i)),s.get(r)}:function(){return n},d.getDependants=t,d.clear=s,s(),d}},39:function(e,t){!function(){e.exports=this.wp.apiFetch}()},4:function(e,t){!function(){e.exports=this.wp.data}()},48:function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(10);function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){Object(r.a)(e,t,n[t])}))}return e}},64:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){var n=e._map,r=e._arrayTreeMap,a=e._objectTreeMap;if(n.has(t))return n.get(t);for(var u=Object.keys(t).sort(),c=Array.isArray(t)?r:a,i=0;i<u.length;i++){var o=u[i];if(void 0===(c=c.get(o)))return;var s=t[o];if(void 0===(c=c.get(s)))return}var d=c.get("_ekm_value");return d?(n.delete(d[0]),d[0]=t,c.set("_ekm_value",d),n.set(t,d),d):void 0}var c=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.clear(),t instanceof e){var n=[];t.forEach((function(e,t){n.push([t,e])})),t=n}if(null!=t)for(var r=0;r<t.length;r++)this.set(t[r][0],t[r][1])}var t,n,c;return t=e,(n=[{key:"set",value:function(t,n){if(null===t||"object"!==r(t))return this._map.set(t,n),this;for(var a=Object.keys(t).sort(),u=[t,n],c=Array.isArray(t)?this._arrayTreeMap:this._objectTreeMap,i=0;i<a.length;i++){var o=a[i];c.has(o)||c.set(o,new e),c=c.get(o);var s=t[o];c.has(s)||c.set(s,new e),c=c.get(s)}var d=c.get("_ekm_value");return d&&this._map.delete(d[0]),c.set("_ekm_value",u),this._map.set(t,u),this}},{key:"get",value:function(e){if(null===e||"object"!==r(e))return this._map.get(e);var t=u(this,e);return t?t[1]:void 0}},{key:"has",value:function(e){return null===e||"object"!==r(e)?this._map.has(e):void 0!==u(this,e)}},{key:"delete",value:function(e){return!!this.has(e)&&(this.set(e,void 0),!0)}},{key:"forEach",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;this._map.forEach((function(a,u){null!==u&&"object"===r(u)&&(a=a[1]),e.call(n,a,u,t)}))}},{key:"clear",value:function(){this._map=new Map,this._arrayTreeMap=new Map,this._objectTreeMap=new Map}},{key:"size",get:function(){return this._map.size}}])&&a(t.prototype,n),c&&a(t,c),e}();e.exports=c},9:function(e,t){!function(){e.exports=this.wp.blocks}()}});