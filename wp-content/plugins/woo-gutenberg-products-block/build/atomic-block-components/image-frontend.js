(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[5,8],{180:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e,t){var r=[];return Object.keys(e).forEach((function(n){if(void 0!==t[n])switch(e[n].type){case"boolean":r[n]="false"!==t[n]&&!1!==t[n];break;case"number":r[n]=parseInt(t[n],10);break;case"array":case"object":r[n]=JSON.parse(t[n]);break;default:r[n]=t[n]}else r[n]=e[n].default})),r}},282:function(e,t,r){"use strict";var n=r(11),c=r.n(n),a=r(180);t.a=function(e){return function(t){return function(r){var n=Object(a.a)(e,r);return React.createElement(t,c()({},r,n))}}}},283:function(e,t){},284:function(e,t,r){"use strict";r.r(t);var n=r(6),c=r.n(n),a=(r(4),r(1)),o=r(5),l=r.n(o),u=r(33),s=r(69),i=r(191);r(283);t.default=Object(i.withProductDataContext)((function(e){var t=e.className,r=e.align,n=Object(s.useInnerBlockLayoutContext)().parentClassName,o=Object(s.useProductDataContext)().product;if(!o.id||!o.on_sale)return null;var i="string"==typeof r?"wc-block-components-product-sale-badge--align-".concat(r):"";return React.createElement("div",{className:l()("wc-block-components-product-sale-badge",t,i,c()({},"".concat(n,"__product-onsale"),n))},React.createElement(u.a,{label:Object(a.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(a.__)("Product on sale","woo-gutenberg-products-block")}))}))},285:function(e,t){},307:function(e,t,r){"use strict";r.r(t);var n=r(26),c=r(282),a=r(6),o=r.n(a),l=r(9),u=r.n(l),s=(r(4),r(0)),i=r(5),p=r.n(i),d=r(8),b=r(69),m=r(191),f=r(7),g=r(284);r(285);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(){return React.createElement("img",{src:d.t,alt:"",width:500,height:500})},y=function(e){var t=e.image,r=e.onLoad,n=e.loaded,c=e.showFullSize,a=t||{},o=a.thumbnail,l=a.src,u=a.srcset,s=a.sizes,i={alt:a.alt,onLoad:r,hidden:!n,src:o};return c&&(i=j(j({},i),{},{src:l,srcSet:u,sizes:s})),React.createElement(React.Fragment,null,React.createElement("img",i),!n&&React.createElement(w,null))},v=Object(m.withProductDataContext)((function(e){var t=e.className,r=e.imageSizing,n=void 0===r?"full-size":r,c=e.productLink,a=void 0===c||c,l=e.showSaleBadge,i=e.saleBadgeAlign,d=void 0===i?"right":i,m=Object(b.useInnerBlockLayoutContext)().parentClassName,O=Object(b.useProductDataContext)().product,j=Object(s.useState)(!1),v=u()(j,2),h=v[0],E=v[1];if(!O.id)return React.createElement("div",{className:p()(t,"wc-block-components-product-image","wc-block-components-product-image--placeholder",o()({},"".concat(m,"__product-image"),m))},React.createElement(w,null));var R=Object(f.isEmpty)(O.images)?null:O.images[0];return React.createElement("div",{className:p()(t,"wc-block-components-product-image",o()({},"".concat(m,"__product-image"),m))},a?React.createElement("a",{href:O.permalink,rel:"nofollow"},!!l&&React.createElement(g.default,{align:d,product:O}),React.createElement(y,{image:R,onLoad:function(){return E(!0)},loaded:h,showFullSize:"cropped"!==n})):React.createElement(React.Fragment,null,!!l&&React.createElement(g.default,{align:d,product:O}),React.createElement(y,{image:R,onLoad:function(){return E(!0)},loaded:h,showFullSize:"cropped"!==n})))})),h={productLink:{type:"boolean",default:!0},showSaleBadge:{type:"boolean",default:!0},saleBadgeAlign:{type:"string",default:"right"},imageSizing:{type:"string",default:"full-size"},productId:{type:"number",default:0}};t.default=Object(n.compose)(Object(c.a)(h))(v)},33:function(e,t,r){"use strict";var n=r(6),c=r.n(n),a=(r(4),r(3)),o=r(5),l=r.n(o);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t,r=e.label,n=e.screenReaderLabel,c=e.wrapperElement,o=e.wrapperProps,u=void 0===o?{}:o,i=null!=r,p=null!=n;return!i&&p?(t=c||"span",u=s(s({},u),{},{className:l()(u.className,"screen-reader-text")}),React.createElement(t,u,n)):(t=c||a.Fragment,i&&p&&r!==n?React.createElement(t,u,React.createElement("span",{"aria-hidden":"true"},r),React.createElement("span",{className:"screen-reader-text"},n)):React.createElement(t,u,r))}}}]);