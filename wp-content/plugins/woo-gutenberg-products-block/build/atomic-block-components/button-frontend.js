(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[3],{300:function(t,e){},301:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var c=n(9),o=n.n(c),r=n(0),a=n(11),i=n(14),u=n(18),d=n(38),s=n(50),b=function(t,e){var n=t.find((function(t){return t.id===e}));return n?n.quantity:0},l=function(t){var e=Object(a.useDispatch)(i.CART_STORE_KEY).addItemToCart,n=Object(d.a)(),c=n.cartItems,l=n.cartIsLoading,f=Object(s.a)(),p=f.addErrorNotice,O=f.removeNotice,v=Object(r.useState)(!1),j=o()(v,2),m=j[0],_=j[1],g=Object(r.useRef)(b(c,t));return Object(r.useEffect)((function(){var e=b(c,t);e!==g.current&&(g.current=e)}),[c,t]),{cartQuantity:Number.isFinite(g.current)?g.current:0,addingToCart:m,cartIsLoading:l,addToCart:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return _(!0),e(t,n).then((function(){O("add-to-cart")})).catch((function(t){p(Object(u.decodeEntities)(t.message),{context:"wc/all-products",id:"add-to-cart",isDismissible:!0})})).finally((function(){_(!1)}))}}}},311:function(t,e,n){"use strict";n.r(e);var c=n(10),o=n.n(c),r=n(7),a=n.n(r),i=(n(3),n(4)),u=n.n(i),d=n(1),s=n(54),b=n(301),l=n(18),f=n(84),p=n(211),O=(n(300),function(t){var e=t.product,n=e.id,c=e.permalink,r=e.add_to_cart,a=e.has_options,i=e.is_purchasable,f=e.is_in_stock,p=Object(s.a)().dispatchStoreEvent,O=Object(b.a)(n),v=O.cartQuantity,j=O.addingToCart,m=O.addToCart,_=Number.isFinite(v)&&v>0,g=!a&&i&&f,w=Object(l.decodeEntities)((null==r?void 0:r.description)||""),h=_?Object(d.sprintf)(Object(d._n)("%d in cart","%d in cart",v,"woo-gutenberg-products-block"),v):Object(l.decodeEntities)((null==r?void 0:r.text)||Object(d.__)("Add to cart","woo-gutenberg-products-block")),k=g?"button":"a",N={};return g?N.onClick=function(){m(),p("cart-add-item",{product:e})}:(N.href=c,N.rel="nofollow",N.onClick=function(){p("product-view-link",{product:e})}),React.createElement(k,o()({"aria-label":w,className:u()("wp-block-button__link","add_to_cart_button","wc-block-components-product-button__button",{loading:j,added:_}),disabled:j},N),h)}),v=function(){return React.createElement("button",{className:u()("wp-block-button__link","add_to_cart_button","wc-block-components-product-button__button","wc-block-components-product-button__button--placeholder"),disabled:!0})};e.default=Object(p.withProductDataContext)((function(t){var e=t.className,n=Object(f.useInnerBlockLayoutContext)().parentClassName,c=Object(f.useProductDataContext)().product;return React.createElement("div",{className:u()(e,"wp-block-button","wc-block-components-product-button",a()({},"".concat(n,"__product-add-to-cart"),n))},c.id?React.createElement(O,{product:c}):React.createElement(v,null))}))},50:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var c=n(7),o=n.n(c),r=n(0),a=n(125);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d=function(){var t=Object(a.b)(),e=t.notices,n=t.createNotice,c=t.removeNotice,o=t.createSnackbarNotice,i=t.setIsSuppressed,d=Object(r.useRef)(e);Object(r.useEffect)((function(){d.current=e}),[e]);var s=Object(r.useMemo)((function(){return{hasNoticesOfType:function(t){return d.current.some((function(e){return e.type===t}))},removeNotices:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;d.current.forEach((function(e){null!==t&&e.status!==t||c(e.id)}))},removeNotice:c}}),[c]),b=Object(r.useMemo)((function(){return{addDefaultNotice:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n("default",t,u({},e))},addErrorNotice:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n("error",t,u({},e))},addWarningNotice:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n("warning",t,u({},e))},addInfoNotice:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n("info",t,u({},e))},addSuccessNotice:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n("success",t,u({},e))},addSnackbarNotice:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(t,e)}}}),[n,o]);return u(u(u({notices:e},s),b),{},{setIsSuppressed:i})}}}]);