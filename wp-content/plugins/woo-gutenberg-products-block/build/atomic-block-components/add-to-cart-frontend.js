(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[2],{109:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(6),a=r.n(n),c=r(7);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i="add_event_callback",u="remove_event_callback",l={addEventCallback:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return{id:Object(c.uniqueId)(),type:i,eventType:e,callback:t,priority:r}},removeEventCallback:function(e,t){return{id:t,type:u,eventType:e}}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.eventType,c=t.id,o=t.callback,l=t.priority,d=new Map(e[n]);switch(r){case i:return d.set(c,{priority:l,callback:o}),s(s({},e),{},a()({},n,d));case u:return d.delete(c),s(s({},e),{},a()({},n,d))}return e}},141:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(57),a=(r(4),r(143),function(e){var t=e.errorMessage,r=void 0===t?"":t,a=e.propertyName,c=void 0===a?"":a,o=e.elementId,s=void 0===o?"":o,i=Object(n.b)(),u=i.getValidationError,l=i.getValidationErrorId;if(!r){var d=u(c)||{};if(!d.message||d.hidden)return null;r=d.message}return React.createElement("div",{className:"wc-block-components-validation-error",role:"alert"},React.createElement("p",{id:l(s)},r))})},143:function(e,t){},144:function(e,t){},176:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e,t){var r=[];return Object.keys(e).forEach((function(n){if(void 0!==t[n])switch(e[n].type){case"boolean":r[n]="false"!==t[n]&&!1!==t[n];break;case"number":r[n]=parseInt(t[n],10);break;case"array":case"object":r[n]=JSON.parse(t[n]);break;default:r[n]=t[n]}else r[n]=e[n].default})),r}},187:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=function(e,t){return!!e.type&&e.type===t},a={SUCCESS:"success",FAIL:"failure",ERROR:"error"},c={PAYMENTS:"wc/payment-area",EXPRESS_PAYMENTS:"wc/express-payment-area"},o=function(e){return n(e,a.SUCCESS)},s=function(e){return n(e,a.ERROR)},i=function(e){return n(e,a.FAIL)},u=function(){return{responseTypes:a,noticeContexts:c,isSuccessResponse:o,isErrorResponse:s,isFailResponse:i}}},188:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(109),a=function(e,t){return function(r){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,c=n.a.addEventCallback(e,r,a);return t(c),function(){t(n.a.removeEventCallback(e,c.id))}}}},189:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return p}));var n=r(24),a=r.n(n),c=r(23),o=r.n(c),s=r(50),i=r.n(s);function u(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){s=!0,c=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw c}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=function(e,t){return e[t]?Array.from(e[t].values()).sort((function(e,t){return e.priority-t.priority})):[]},f=function(){var e=i()(a.a.mark((function e(t,r,n){var c,s,i,l,f,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=d(t,r),s=[],i=u(c),e.prev=3,i.s();case 5:if((l=i.n()).done){e.next=19;break}return f=l.value,e.prev=7,e.next=10,Promise.resolve(f.callback(n));case 10:p=e.sent,"object"===o()(p)&&s.push(p),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),console.error(e.t0);case 17:e.next=5;break;case 19:e.next=24;break;case 21:e.prev=21,e.t1=e.catch(3),i.e(e.t1);case 24:return e.prev=24,i.f(),e.finish(24);case 27:return e.abrupt("return",!s.length||s);case 28:case"end":return e.stop()}}),e,null,[[3,21,24,27],[7,14]])})));return function(t,r,n){return e.apply(this,arguments)}}(),p=function(){var e=i()(a.a.mark((function e(t,r,n){var c,s,i,l,f,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=d(t,r),s=!0,i=u(c),e.prev=3,i.s();case 5:if((l=i.n()).done){e.next=24;break}return f=l.value,e.prev=7,e.next=10,Promise.resolve(f.callback(n));case 10:if(p=e.sent,"object"!==o()(p)||void 0!==p.type){e.next=13;break}throw new Error("If you want to abort event emitter processing, your observer must return an object with a type property");case 13:if(!0===(s="object"!==o()(p)||p)){e.next=16;break}return e.abrupt("return",s);case 16:e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(7),console.error(e.t0),e.abrupt("return",{type:"error"});case 22:e.next=5;break;case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(3),i.e(e.t1);case 29:return e.prev=29,i.f(),e.finish(29);case 32:return e.abrupt("return",s);case 33:case"end":return e.stop()}}),e,null,[[3,26,29,32],[7,18]])})));return function(t,r,n){return e.apply(this,arguments)}}()},274:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"c",(function(){return c})),r.d(t,"b",(function(){return o}));var n=window.Event||null,a=function(e,t){var r=t.bubbles,a=void 0!==r&&r,c=t.cancelable,o=void 0!==c&&c,s=t.element;if(s||(s=document.body),"function"==typeof n){var i=new n(e,{bubbles:a,cancelable:o});s.dispatchEvent(i)}else{var u=document.createEvent("Event");u.initEvent(e,a,o),s.dispatchEvent(u)}},c=function(){a("wc_fragment_refresh",{bubbles:!0,cancelable:!0})},o=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("function"!=typeof jQuery)return function(){};var c=function(){a(t,{bubbles:r,cancelable:n})};return jQuery(document).on(e,c),function(){return jQuery(document).off(e,c)}}},275:function(e,t,r){"use strict";var n=r(49),a=React.createElement(n.a,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},React.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),React.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}));t.a=a},279:function(e,t,r){"use strict";var n=r(11),a=r.n(n),c=r(176);t.a=function(e){return function(t){return function(r){var n=Object(c.a)(e,r);return React.createElement(t,a()({},r,n))}}}},287:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(10),a=r.n(n),c=r(0),o=r(13),s=r(80),i=r(14),u=r(16),l=r(79),d=function(e,t){var r=e.find((function(e){return e.id===t}));return r?r.quantity:0},f=function(e){var t=Object(o.useDispatch)(i.CART_STORE_KEY).addItemToCart,r=Object(s.a)(),n=r.cartItems,f=r.cartIsLoading,p=Object(l.a)(),b=p.addErrorNotice,m=p.removeNotice,v=Object(c.useState)(!1),h=a()(v,2),g=h[0],O=h[1],y=Object(c.useRef)(d(n,e));return Object(c.useEffect)((function(){var t=d(n,e);t!==y.current&&(y.current=t)}),[n,e]),{cartQuantity:Number.isFinite(y.current)?y.current:0,addingToCart:g,cartIsLoading:f,addToCart:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;O(!0),t(e,r).then((function(e){!0===e&&m("add-to-cart")})).catch((function(e){b(Object(u.decodeEntities)(e.message),{context:"wc/all-products",id:"add-to-cart",isDismissible:!0})})).finally((function(){O(!1)}))}}}},293:function(e,t){},294:function(e,t){},303:function(e,t,r){"use strict";r.r(t);var n=r(26),a=r(279),c=(r(4),r(5)),o=r.n(c),s=r(57),i=r(10),u=r.n(i),l=r(0),d=r(1),f=r(37),p=r(79),b=r(187),m=function(e){return e.is_purchasable||!1},v="pristine",h="idle",g="disabled",O="processing",y="before_processing",j="after_processing",E={status:v,hasError:!1,quantity:1,processingResponse:null,requestParams:{}},w="set_pristine",P="set_idle",k="set_disabled",_="set_processing",R="set_before_processing",C="set_after_processing",S="set_processing_response",A="set_has_error",x="set_no_error",T="set_quantity",I="set_request_params",D=w,N=P,q=k,V=_,F=R,Q=C,W=S,B=A,L=x,M=T,H=I,Y=function(){return{type:D}},J=function(){return{type:N}},K=function(){return{type:q}},U=function(){return{type:V}},z=function(){return{type:F}},G=function(){return{type:Q}},X=function(e){return{type:W,data:e}},$=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=e?B:L;return{type:t}},Z=function(e){return{type:M,quantity:e}},ee=function(e){return{type:H,data:e}},te=r(6),re=r.n(te);function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){re()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ce=w,oe=P,se=k,ie=_,ue=R,le=C,de=S,fe=A,pe=x,be=T,me=I,ve=v,he=h,ge=g,Oe=O,ye=y,je=j,Ee=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,r=arguments.length>1?arguments[1]:void 0,n=r.quantity,a=r.type,c=r.data;switch(a){case ce:e=E;break;case oe:e=t.status!==he?ae(ae({},t),{},{status:he}):t;break;case se:e=t.status!==ge?ae(ae({},t),{},{status:ge}):t;break;case be:e=n!==t.quantity?ae(ae({},t),{},{quantity:n}):t;break;case me:e=ae(ae({},t),{},{requestParams:ae(ae({},t.requestParams),c)});break;case de:e=ae(ae({},t),{},{processingResponse:c});break;case ie:e=!1===(e=t.status!==Oe?ae(ae({},t),{},{status:Oe,hasError:!1}):t).hasError?e:ae(ae({},e),{},{hasError:!1});break;case ue:e=t.status!==ye?ae(ae({},t),{},{status:ye,hasError:!1}):t;break;case le:e=t.status!==je?ae(ae({},t),{},{status:je}):t;break;case fe:e=t.hasError?t:ae(ae({},t),{},{hasError:!0}),e=t.status===Oe||t.status===ye?ae(ae({},e),{},{status:he}):e;break;case pe:e=t.hasError?ae(ae({},t),{},{hasError:!1}):t}return e!==t&&a!==ce&&e.status===ve&&(e.status=he),e},we=r(109),Pe=r(188),ke="add_to_cart_before_processing",_e="add_to_cart_after_processing_with_success",Re="add_to_cart_after_processing_with_error",Ce=function(e){return{onAddToCartAfterProcessingWithSuccess:Object(Pe.a)(_e,e),onAddToCartProcessingWithError:Object(Pe.a)(Re,e),onAddToCartBeforeProcessing:Object(Pe.a)(ke,e)}},Se=r(189),Ae=Object(l.createContext)({product:{},productType:"simple",productIsPurchasable:!0,productHasOptions:!1,supportsFormElements:!0,showFormElements:!1,quantity:0,minQuantity:1,maxQuantity:99,requestParams:{},isIdle:!1,isDisabled:!1,isProcessing:!1,isBeforeProcessing:!1,isAfterProcessing:!1,hasError:!1,eventRegistration:{onAddToCartAfterProcessingWithSuccess:function(e){},onAddToCartAfterProcessingWithError:function(e){},onAddToCartBeforeProcessing:function(e){}},dispatchActions:{resetForm:function(){},submitForm:function(){},setQuantity:function(e){},setHasError:function(e){},setAfterProcessing:function(e){},setRequestParams:function(e){}}}),xe=function(){return Object(l.useContext)(Ae)},Te=function(e){var t=e.children,r=e.product,n=e.showFormElements,a=Object(l.useReducer)(Ee,E),c=u()(a,2),o=c[0],i=c[1],v=Object(l.useReducer)(we.b,{}),w=u()(v,2),P=w[0],k=w[1],_=Object(f.a)(P),R=Object(p.a)(),C=R.addErrorNotice,S=R.removeNotices,A=Object(s.b)().setValidationErrors,x=Object(b.a)(),T=x.isSuccessResponse,I=x.isErrorResponse,D=x.isFailResponse,N=Object(l.useMemo)((function(){return{onAddToCartAfterProcessingWithSuccess:Ce(k).onAddToCartAfterProcessingWithSuccess,onAddToCartAfterProcessingWithError:Ce(k).onAddToCartAfterProcessingWithError,onAddToCartBeforeProcessing:Ce(k).onAddToCartBeforeProcessing}}),[k]),q=Object(l.useMemo)((function(){return{resetForm:function(){i(Y())},submitForm:function(){i(z())},setQuantity:function(e){i(Z(e))},setHasError:function(e){i($(e))},setRequestParams:function(e){i(ee(e))},setAfterProcessing:function(e){i(X(e)),i(G())}}}),[]);Object(l.useEffect)((function(){var e=o.status,t=!r.id||!m(r);e!==g||t?e!==g&&t&&i(K()):i(J())}),[o.status,r,i]),Object(l.useEffect)((function(){o.status===y&&(S("error"),Object(Se.a)(_,ke,{}).then((function(e){!0!==e?(Array.isArray(e)&&e.forEach((function(e){var t=e.errorMessage,r=e.validationErrors;t&&C(t),r&&A(r)})),i(J())):i(U())})))}),[o.status,A,C,S,i,_]),Object(l.useEffect)((function(){if(o.status===j){var e={processingResponse:o.processingResponse},t=function(e){if(e.message){var t=e.messageContext?{context:e.messageContext}:void 0;C(e.message,t)}};if(o.hasError)return void Object(Se.b)(_,Re,e).then((function(r){if(I(r)||D(r))t(r);else{var n,a=(null===(n=e.processingResponse)||void 0===n?void 0:n.message)||Object(d.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block");C(a,{id:"add-to-cart"})}i(J())}));Object(Se.b)(_,_e,e).then((function(e){I(e)||D(e)?(t(e),i($(!0))):i(J())}))}}),[o.status,o.hasError,o.processingResponse,q,C,I,D,T,_]);var V=function(e){return["simple","variable"].includes(e.type||"simple")}(r),F={product:r,productType:r.type||"simple",productIsPurchasable:m(r),productHasOptions:r.has_options||!1,supportsFormElements:V,showFormElements:n&&V,quantity:o.quantity,minQuantity:1,maxQuantity:r.quantity_limit||99,requestParams:o.requestParams,isIdle:o.status===h,isDisabled:o.status===g,isProcessing:o.status===O,isBeforeProcessing:o.status===y,isAfterProcessing:o.status===j,hasError:o.hasError,eventRegistration:N,dispatchActions:q};return React.createElement(Ae.Provider,{value:F},t)},Ie=r(56),De=r.n(Ie),Ne=r(80),qe=r(16),Ve=r(274);function Fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Qe=function(){var e=xe(),t=e.dispatchActions,r=e.product,n=e.quantity,a=e.eventRegistration,c=e.hasError,o=e.isProcessing,i=e.requestParams,f=Object(s.b)(),b=f.hasValidationErrors,m=f.showAllValidationErrors,v=Object(p.a)(),h=v.addErrorNotice,g=v.removeNotice,O=Object(Ne.a)().receiveCart,y=Object(l.useState)(!1),j=u()(y,2),E=j[0],w=j[1],P=!c&&o,k=Object(l.useCallback)((function(){return!b||(m(),{type:"error"})}),[b,m]);Object(l.useEffect)((function(){var e=a.onAddToCartBeforeProcessing(k,0);return function(){e()}}),[a,k]);var _=Object(l.useCallback)((function(){w(!0),g("add-to-cart");var e=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Fe(Object(r),!0).forEach((function(t){re()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({id:r.id||0,quantity:n},i);De()({path:"/wc/store/cart/add-item",method:"POST",data:e,cache:"no-store",parse:!1}).then((function(e){De.a.setNonce(e.headers),e.json().then((function(r){e.ok?O(r):(r.body&&r.body.message?h(Object(qe.decodeEntities)(r.body.message),{id:"add-to-cart"}):h(Object(d.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block"),{id:"add-to-cart"}),t.setHasError()),t.setAfterProcessing(r),w(!1),Object(Ve.c)()}))})).catch((function(e){e.json().then((function(e){var r;(null===(r=e.data)||void 0===r?void 0:r.cart)&&O(e.data.cart),t.setHasError(),t.setAfterProcessing(e),w(!1)}))}))}),[r,h,g,O,t,n,i]);return Object(l.useEffect)((function(){P&&!E&&_()}),[P,_,E]),null},We=function(e){var t=e.children,r=e.product,n=e.showFormElements;return React.createElement(s.a,null,React.createElement(Te,{product:r,showFormElements:n},t,React.createElement(Qe,null)))},Be=r(67),Le=r(7),Me=r(184),He=(r(293),r(73)),Ye=r(123),Je=r(275),Ke=r(287),Ue=function(e){var t=e.className,r=e.href,n=e.text;return React.createElement(He.a,{className:t,href:r,rel:"nofollow"},n)},ze=function(e){var t=e.className,r=e.quantityInCart,n=e.isProcessing,a=e.isDisabled,c=e.isDone,o=e.onClick;return React.createElement(He.a,{className:t,disabled:a,showSpinner:n,onClick:o},c&&r>0?Object(d.sprintf)(Object(d._n)("%d in cart","%d in cart",r,"woo-gutenberg-products-block"),r):Object(d.__)("Add to cart","woo-gutenberg-products-block"),!!c&&React.createElement(Ye.a,{srcElement:Je.a,alt:Object(d.__)("Done","woo-gutenberg-products-block")}))},Ge=function(){var e=xe(),t=e.showFormElements,r=e.productIsPurchasable,n=e.productHasOptions,a=e.product,c=e.productType,o=e.isDisabled,s=e.isProcessing,i=e.eventRegistration,f=e.hasError,p=e.dispatchActions,b=Object(Ke.a)(a.id||0).cartQuantity,m=Object(l.useState)(!1),v=u()(m,2),h=v[0],g=v[1],O=a.add_to_cart||{url:"",text:""};return Object(l.useEffect)((function(){var e=i.onAddToCartAfterProcessingWithSuccess((function(){return f||g(!0),!0}),0);return function(){e()}}),[i,f]),(t||!n&&"simple"===c)&&r?React.createElement(ze,{className:"wc-block-components-product-add-to-cart-button",quantityInCart:b,isDisabled:o,isProcessing:s,isDone:h,onClick:function(){return p.submitForm()}}):React.createElement(Ue,{className:"wc-block-components-product-add-to-cart-button",href:O.url,text:O.text||Object(d.__)("View Product","woo-gutenberg-products-block")})},Xe=function(e){var t=e.disabled,r=e.min,n=e.max,a=e.value,c=e.onChange;return React.createElement("input",{className:"wc-block-components-product-add-to-cart-quantity",type:"number",value:a,min:r,max:n,hidden:1===n,disabled:t,onChange:function(e){c(e.target.value)}})},$e=function(e){var t=e.reason,r=void 0===t?Object(d.__)("Sorry, this product cannot be purchased.","woo-gutenberg-products-block"):t;return React.createElement("div",{className:"wc-block-components-product-add-to-cart-unavailable"},r)},Ze=function(){var e=xe(),t=e.product,r=e.quantity,n=e.minQuantity,a=e.maxQuantity,c=e.dispatchActions,o=e.isDisabled;return t.id&&!t.is_purchasable?React.createElement($e,null):t.id&&!t.is_in_stock?React.createElement($e,{reason:Object(d.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):React.createElement(React.Fragment,null,React.createElement(Xe,{value:r,min:n,max:a,disabled:o,onChange:c.setQuantity}),React.createElement(Ge,null))},et=(r(294),r(51)),tt=r.n(et),rt=r(186),nt=r(3),at=r(141),ct={value:"",label:Object(d.__)("Select an option","woo-gutenberg-products-block")},ot=function(e){var t=e.attributeName,r=e.options,n=void 0===r?[]:r,a=e.value,c=void 0===a?"":a,i=e.onChange,u=void 0===i?function(){}:i,l=e.errorMessage,f=void 0===l?Object(d.__)("Please select a value.","woo-gutenberg-products-block"):l,p=Object(s.b)(),b=p.getValidationError,m=p.setValidationErrors,v=p.clearValidationError,h=t,g=b(h)||{};return Object(nt.useEffect)((function(){c?v(h):m(re()({},h,{message:f,hidden:!0}))}),[c,h,f,v,m]),Object(nt.useEffect)((function(){return function(){v(h)}}),[h,v]),React.createElement("div",{className:"wc-block-components-product-add-to-cart-attribute-picker__container"},React.createElement(rt.SelectControl,{label:Object(qe.decodeEntities)(t),value:c||"",options:[ct].concat(tt()(n)),onChange:u,required:!0,className:o()("wc-block-components-product-add-to-cart-attribute-picker__select",{"has-error":g.message&&!g.hidden})}),React.createElement(at.a,{propertyName:h,elementId:h}))};function st(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function it(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?st(Object(r),!0).forEach((function(t){re()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):st(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ut=function(e,t,r){var n=Object.values(t).map((function(e){return e.id}));if(Object.values(r).every((function(e){return""===e})))return n;var a=Object.keys(e);return n.filter((function(e){return a.every((function(n){var a=r[n]||"",c=t["id:"+e].attributes[n];return""===a||(null===c||c===a)}))}))},lt=function(e,t,r){var n={},a=Object.keys(e),c=Object.values(r).filter(Boolean).length>0;return a.forEach((function(a){var o=e[a],s=it(it({},r),{},re()({},a,null)),i=c?ut(e,t,s):null,u=null!==i?i.map((function(e){return t["id:"+e].attributes[a]})):null;n[a]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Object.values(e).map((function(e){var r=e.name,n=e.slug;return null===t||t.includes(null)||t.includes(n)?{value:n,label:Object(qe.decodeEntities)(r)}:null})).filter(Boolean)}(o.terms,u)})),n};function dt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ft(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?dt(Object(r),!0).forEach((function(t){re()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):dt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var pt=function(e){var t=e.attributes,r=e.variationAttributes,n=e.setRequestParams,a=Object(f.a)(t),c=Object(f.a)(r),o=Object(l.useState)(0),s=u()(o,2),i=s[0],d=s[1],p=Object(l.useState)({}),b=u()(p,2),m=b[0],v=b[1],h=Object(l.useMemo)((function(){return lt(a,c,m)}),[m,a,c]);return Object(l.useEffect)((function(){Object.values(m).filter((function(e){return""!==e})).length===Object.keys(a).length?d(function(e,t,r){return ut(e,t,r)[0]||0}(a,c,m)):i>0&&d(0)}),[m,i,a,c]),Object(l.useEffect)((function(){n({id:i,variation:Object.keys(m).map((function(e){return{attribute:e,value:m[e]}}))})}),[n,i,m]),React.createElement("div",{className:"wc-block-components-product-add-to-cart-attribute-picker"},Object.keys(a).map((function(e){return React.createElement(ot,{key:e,attributeName:e,options:h[e],value:m[e],onChange:function(t){v(ft(ft({},m),{},re()({},e,t)))}})})))},bt=function(e){var t=e.product,r=e.dispatchers,n=function(e){return e?Object(Le.keyBy)(Object.values(e).filter((function(e){return e.has_variations})),"name"):{}}(t.attributes),a=function(e){if(!e)return{};var t={};return e.forEach((function(e){var r=e.id,n=e.attributes;t["id:".concat(r)]={id:r,attributes:n.reduce((function(e,t){var r=t.name,n=t.value;return e[r]=n,e}),{})}})),t}(t.variations);return 0===Object.keys(n).length||0===a.length?null:React.createElement(pt,{attributes:n,variationAttributes:a,setRequestParams:r.setRequestParams})},mt=function(){var e=xe(),t=e.product,r=e.quantity,n=e.minQuantity,a=e.maxQuantity,c=e.dispatchActions,o=e.isDisabled;return t.id&&!t.is_purchasable?React.createElement($e,null):t.id&&!t.is_in_stock?React.createElement($e,{reason:Object(d.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):React.createElement(React.Fragment,null,React.createElement(bt,{product:t,dispatchers:c}),React.createElement(Xe,{value:r,min:n,max:a,disabled:o,onChange:c.setQuantity}),React.createElement(Ge,null))},vt=function(){return React.createElement(Ge,null)},ht=function(){return React.createElement(rt.Placeholder,{className:"wc-block-components-product-add-to-cart-group-list"},"This is a placeholder for the grouped products form element.")},gt=function(){return React.createElement(ht,null)},Ot=function(){var e=xe(),t=e.showFormElements,r=e.productType;return t?"variable"===r?React.createElement(mt,null):"grouped"===r?React.createElement(gt,null):"external"===r?React.createElement(vt,null):"simple"===r||"variation"===r?React.createElement(Ze,null):null:React.createElement(Ge,null)},yt=Object(Me.withProductDataContext)((function(e){var t=e.className,r=e.showFormElements,n=Object(Be.useProductDataContext)().product,a=o()(t,"wc-block-components-product-add-to-cart",{"wc-block-components-product-add-to-cart--placeholder":Object(Le.isEmpty)(n)});return React.createElement(We,{product:n,showFormElements:r},React.createElement("div",{className:a},React.createElement(Ot,null)))})),jt={showFormElements:{type:"boolean",default:!1},productId:{type:"number",default:0}};t.default=Object(n.compose)(Object(a.a)(jt))(yt)},37:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0),a=r(36),c=r.n(a),o=function(e){var t=Object(n.useRef)();return c()(e,t.current)||(t.current=e),t.current}},50:function(e,t){function r(e,t,r,n,a,c,o){try{var s=e[c](o),i=s.value}catch(e){return void r(e)}s.done?t(i):Promise.resolve(i).then(n,a)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var o=e.apply(t,n);function s(e){r(o,a,c,s,i,"next",e)}function i(e){r(o,a,c,s,i,"throw",e)}s(void 0)}))}}},51:function(e,t,r){var n=r(90),a=r(91),c=r(53),o=r(92);e.exports=function(e){return n(e)||a(e)||c(e)||o()}},57:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"a",(function(){return m}));var n=r(6),a=r.n(n),c=r(10),o=r.n(c),s=r(0),i=r(7),u=r(36),l=r.n(u);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=Object(s.createContext)({getValidationError:function(){return""},setValidationErrors:function(e){},clearValidationError:function(e){},clearAllValidationErrors:function(){},hideValidationError:function(){},showValidationError:function(){},showAllValidationErrors:function(){},hasValidationErrors:!1,getValidationErrorId:function(e){return e}}),b=function(){return Object(s.useContext)(p)},m=function(e){var t=e.children,r=Object(s.useState)({}),n=o()(r,2),c=n[0],u=n[1],d=Object(s.useCallback)((function(e){return c[e]}),[c]),b=Object(s.useCallback)((function(e){var t=c[e];return!t||t.hidden?"":"validate-error-".concat(e)}),[c]),m=Object(s.useCallback)((function(e){u((function(t){return t[e]?Object(i.omit)(t,[e]):t}))}),[]),v=Object(s.useCallback)((function(){u({})}),[]),h=Object(s.useCallback)((function(e){e&&u((function(t){return e=Object(i.pickBy)(e,(function(e,r){return"string"==typeof e.message&&(!t.hasOwnProperty(r)||!l()(t[r],e))})),0===Object.values(e).length?t:f(f({},t),e)}))}),[]),g=Object(s.useCallback)((function(e,t){u((function(r){if(!r.hasOwnProperty(e))return r;var n=f(f({},r[e]),t);return l()(r[e],n)?r:f(f({},r),{},a()({},e,n))}))}),[]),O={getValidationError:d,setValidationErrors:h,clearValidationError:m,clearAllValidationErrors:v,hideValidationError:Object(s.useCallback)((function(e){g(e,{hidden:!0})}),[g]),showValidationError:Object(s.useCallback)((function(e){g(e,{hidden:!1})}),[g]),showAllValidationErrors:Object(s.useCallback)((function(){u((function(e){var t={};return Object.keys(e).forEach((function(r){e[r].hidden&&(t[r]=f(f({},e[r]),{},{hidden:!1}))})),0===Object.values(t).length?e:f(f({},e),t)}))}),[]),hasValidationErrors:Object.keys(c).length>0,getValidationErrorId:b};return React.createElement(p.Provider,{value:O},t)}},73:function(e,t,r){"use strict";var n=r(11),a=r.n(n),c=r(15),o=r.n(c),s=r(75),i=(r(4),r(5)),u=r.n(i);r(144);t.a=function(e){var t=e.className,r=e.showSpinner,n=void 0!==r&&r,c=e.children,i=o()(e,["className","showSpinner","children"]),l=u()("wc-block-components-button",t,{"wc-block-components-button--loading":n});return React.createElement(s.a,a()({className:l},i),n&&React.createElement("span",{className:"wc-block-components-button__spinner","aria-hidden":"true"}),React.createElement("span",{className:"wc-block-components-button__text"},c))}},80:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(14),a=r(13),c=r(114),o=r(16),s=r(7),i={cartCoupons:[],cartItems:[],cartItemsCount:0,cartItemsWeight:0,cartNeedsPayment:!0,cartNeedsShipping:!0,cartItemErrors:[],cartTotals:{},cartIsLoading:!0,cartErrors:[],shippingAddress:{first_name:"",last_name:"",company:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:""},shippingRates:[],shippingRatesLoading:!1,hasShippingAddress:!1,receiveCart:function(){}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{shouldSelect:!0},t=Object(c.a)(),r=t.isEditor,u=t.previewData,l=(null==u?void 0:u.previewCart)||{},d=e.shouldSelect,f=Object(a.useSelect)((function(e,t){var a=t.dispatch;if(!d)return i;if(r)return{cartCoupons:l.coupons,cartItems:l.items,cartItemsCount:l.items_count,cartItemsWeight:l.items_weight,cartNeedsPayment:l.needs_payment,cartNeedsShipping:l.needs_shipping,cartItemErrors:[],cartTotals:l.totals,cartIsLoading:!1,cartErrors:[],shippingAddress:{first_name:"",last_name:"",company:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:""},shippingRates:l.shipping_rates,shippingRatesLoading:!1,hasShippingAddress:!1,receiveCart:"function"==typeof(null==l?void 0:l.receiveCart)?l.receiveCart:function(){}};var c=e(n.CART_STORE_KEY),u=c.getCartData(),f=c.getCartErrors(),p=c.getCartTotals(),b=!c.hasFinishedResolution("getCartData"),m=c.areShippingRatesLoading(),v=a(n.CART_STORE_KEY).receiveCart,h=Object(s.mapValues)(u.shippingAddress,(function(e){return Object(o.decodeEntities)(e)}));return{cartCoupons:u.coupons,cartItems:u.items||[],cartItemsCount:u.itemsCount,cartItemsWeight:u.itemsWeight,cartNeedsPayment:u.needsPayment,cartNeedsShipping:u.needsShipping,cartItemErrors:u.errors||[],cartTotals:p,cartIsLoading:b,cartErrors:f,shippingAddress:h,shippingRates:u.shippingRates||[],shippingRatesLoading:m,hasShippingAddress:!!h.country,receiveCart:v}}),[d]);return f}},90:function(e,t,r){var n=r(54);e.exports=function(e){if(Array.isArray(e))return n(e)}},91:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},92:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}]);