this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-top-rated"]=function(t){function e(e){for(var n,u,i=e[0],s=e[1],a=e[2],p=0,b=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&b.push(o[u][0]),o[u]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(l&&l(e);b.length;)b.shift()();return c.push.apply(c,a||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,i=1;i<r.length;i++){var s=r[i];0!==o[s]&&(n=!1)}n&&(c.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},o={34:0},c=[];function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var i=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var a=0;a<i.length;a++)e(i[a]);var l=s;return c.push([821,0]),r()}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},106:function(t,e){},107:function(t,e){},108:function(t,e){},109:function(t,e){},110:function(t,e){},111:function(t,e){},112:function(t,e){},113:function(t,e){},114:function(t,e){},115:function(t,e){},116:function(t,e){},117:function(t,e){},118:function(t,e){},12:function(t,e){!function(){t.exports=this.regeneratorRuntime}()},126:function(t,e){},14:function(t,e,r){"use strict";r.d(e,"m",(function(){return c})),r.d(e,"k",(function(){return u})),r.d(e,"l",(function(){return i})),r.d(e,"h",(function(){return a})),r.d(e,"c",(function(){return l})),r.d(e,"d",(function(){return p})),r.d(e,"g",(function(){return b})),r.d(e,"f",(function(){return f})),r.d(e,"j",(function(){return d})),r.d(e,"i",(function(){return g})),r.d(e,"a",(function(){return O})),r.d(e,"b",(function(){return h})),r.d(e,"e",(function(){return m})),r.d(e,"p",(function(){return j})),r.d(e,"q",(function(){return v})),r.d(e,"n",(function(){return y})),r.d(e,"o",(function(){return _}));var n,o=r(5),c=Object(o.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,restApiRoutes:{},wordCountType:"words"}),u=c.pluginUrl+"assets/",i=c.pluginUrl+"build/",s=c.buildPhase,a=null===(n=o.STORE_PAGES.shop)||void 0===n?void 0:n.permalink,l=o.STORE_PAGES.checkout.id,p=o.STORE_PAGES.checkout.permalink,b=o.STORE_PAGES.privacy.permalink,f=o.STORE_PAGES.privacy.title,d=o.STORE_PAGES.terms.permalink,g=o.STORE_PAGES.terms.title,O=o.STORE_PAGES.cart.id,h=o.STORE_PAGES.cart.permalink,m=o.STORE_PAGES.myaccount.permalink?o.STORE_PAGES.myaccount.permalink:Object(o.getSetting)("wpLoginUrl","/wp-login.php"),w=r(25),j=function(t,e){if(s>2)return Object(w.registerBlockType)(t,e)},v=function(t,e){if(s>1)return Object(w.registerBlockType)(t,e)},y=function(){return s>2},_=function(){return s>1}},175:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(0),o=r(14),c=Object(n.createElement)("img",{src:o.k+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})},19:function(t,e){!function(){t.exports=this.wp.apiFetch}()},20:function(t,e){!function(){t.exports=this.wp.url}()},21:function(t,e){!function(){t.exports=this.wp.data}()},22:function(t,e){!function(){t.exports=this.wp.blockEditor}()},25:function(t,e){!function(){t.exports=this.wp.blocks}()},26:function(t,e){!function(){t.exports=this.wp.htmlEntities}()},27:function(t,e){!function(){t.exports=this.moment}()},3:function(t,e){!function(){t.exports=this.wp.components}()},31:function(t,e){!function(){t.exports=this.wp.primitives}()},34:function(t,e){!function(){t.exports=this.wp.dataControls}()},35:function(t,e,r){"use strict";r.d(e,"h",(function(){return f})),r.d(e,"e",(function(){return d})),r.d(e,"b",(function(){return g})),r.d(e,"i",(function(){return O})),r.d(e,"f",(function(){return h})),r.d(e,"c",(function(){return m})),r.d(e,"d",(function(){return w})),r.d(e,"g",(function(){return j})),r.d(e,"a",(function(){return v}));var n=r(4),o=r.n(n),c=r(20),u=r(19),i=r.n(u),s=r(6),a=r(5),l=r(14);function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,u=t.queryArgs,a=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,u=t.queryArgs,i=void 0===u?[]:u,s=l.m.productCount>100,a={per_page:s?100:0,catalog_visibility:"any",search:o,orderby:"title",order:"asc"},p=[Object(c.addQueryArgs)("/wc/store/products",b(b({},a),i))];return s&&r.length&&p.push(Object(c.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:r})),p}({selected:r,search:o,queryArgs:void 0===u?[]:u});return Promise.all(a.map((function(t){return i()({path:t})}))).then((function(t){return Object(s.uniqBy)(Object(s.flatten)(t),"id").map((function(t){return b(b({},t),{},{parent:0})}))})).catch((function(t){throw t}))},d=function(t){return i()({path:"/wc/store/products/".concat(t)})},g=function(){return i()({path:"wc/store/products/attributes"})},O=function(t){return i()({path:"wc/store/products/attributes/".concat(t,"/terms")})},h=function(t){var e=t.selected,r=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=Object(a.getSetting)("limitTags",!1),u=[Object(c.addQueryArgs)("wc/store/products/tags",{per_page:o?100:0,orderby:o?"count":"name",order:o?"desc":"asc",search:n})];return o&&r.length&&u.push(Object(c.addQueryArgs)("wc/store/products/tags",{include:r})),u}({selected:void 0===e?[]:e,search:t.search});return Promise.all(r.map((function(t){return i()({path:t})}))).then((function(t){return Object(s.uniqBy)(Object(s.flatten)(t),"id")}))},m=function(t){return i()({path:Object(c.addQueryArgs)("wc/store/products/categories",b({per_page:0},t))})},w=function(t){return i()({path:"wc/store/products/categories/".concat(t)})},j=function(t){return i()({path:Object(c.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:t})})},v=function(t,e){if(!t.title.raw)return t.slug;var r=1===e.filter((function(e){return e.title.raw===t.title.raw})).length;return t.title.raw+(r?"":" - ".concat(t.slug))}},37:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return a}));var n=r(28),o=r.n(n),c=r(12),u=r.n(c),i=r(1),s=function(){var t=o()(u.a.mark((function t(e){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e.json){t.next=11;break}return t.prev=1,t.next=4,e.json();case 4:return r=t.sent,t.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",{message:t.t0.message,type:"general"});case 11:return t.abrupt("return",{message:e.message,type:e.type||"general"});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),a=function(t){if(t.data&&"rest_invalid_param"===t.code){var e=Object.values(t.data.params);if(e[0])return e[0]}return(null==t?void 0:t.message)||Object(i.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block")}},42:function(t,e){!function(){t.exports=this.wp.escapeHtml}()},43:function(t,e,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(42));e.a=function(t){var e,r,u,i=t.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(e=i).message,u=e.type,r?"general"===u?Object(n.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===u?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},48:function(t,e){!function(){t.exports=this.wp.keycodes}()},5:function(t,e){!function(){t.exports=this.wc.wcSettings}()},54:function(t,e){!function(){t.exports=this.wp.hooks}()},56:function(t,e,r){"use strict";var n=r(4),o=r.n(n),c=r(24),u=r.n(c),i=r(0);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}e.a=function(t){var e=t.srcElement,r=t.size,n=void 0===r?24:r,c=u()(t,["srcElement","size"]);return Object(i.isValidElement)(e)?Object(i.cloneElement)(e,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({width:n,height:n},c)):null}},6:function(t,e){!function(){t.exports=this.lodash}()},65:function(t,e){!function(){t.exports=this.wp.deprecated}()},66:function(t,e){!function(){t.exports=this.wp.serverSideRender}()},70:function(t,e){!function(){t.exports=this.wp.dom}()},78:function(t,e){!function(){t.exports=this.ReactDOM}()},79:function(t,e,r){"use strict";var n=r(4),o=r.n(n),c=r(0),u=r(1),i=(r(2),r(3));function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=function(t){var e=t.onChange,r=t.settings,n=r.button,o=r.price,s=r.rating,l=r.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(i.ToggleControl,{label:Object(u.__)("Product title","woo-gutenberg-products-block"),help:l?Object(u.__)("Product title is visible.","woo-gutenberg-products-block"):Object(u.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return e(a(a({},r),{},{title:!l}))}}),Object(c.createElement)(i.ToggleControl,{label:Object(u.__)("Product price","woo-gutenberg-products-block"),help:o?Object(u.__)("Product price is visible.","woo-gutenberg-products-block"):Object(u.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return e(a(a({},r),{},{price:!o}))}}),Object(c.createElement)(i.ToggleControl,{label:Object(u.__)("Product rating","woo-gutenberg-products-block"),help:s?Object(u.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(u.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:s,onChange:function(){return e(a(a({},r),{},{rating:!s}))}}),Object(c.createElement)(i.ToggleControl,{label:Object(u.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(u.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(u.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return e(a(a({},r),{},{button:!n}))}}))}},8:function(t,e){!function(){t.exports=this.React}()},80:function(t,e,r){"use strict";var n=r(0),o=r(1),c=r(6),u=(r(2),r(3));e.a=function(t){var e=t.columns,r=t.rows,i=t.setAttributes,s=t.alignButtons,a=t.minColumns,l=void 0===a?1:a,p=t.maxColumns,b=void 0===p?6:p,f=t.minRows,d=void 0===f?1:f,g=t.maxRows,O=void 0===g?6:g;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(u.RangeControl,{label:Object(o.__)("Columns","woo-gutenberg-products-block"),value:e,onChange:function(t){var e=Object(c.clamp)(t,l,b);i({columns:Number.isNaN(e)?"":e})},min:l,max:b}),Object(n.createElement)(u.RangeControl,{label:Object(o.__)("Rows","woo-gutenberg-products-block"),value:r,onChange:function(t){var e=Object(c.clamp)(t,d,O);i({rows:Number.isNaN(e)?"":e})},min:d,max:O}),Object(n.createElement)(u.ToggleControl,{label:Object(o.__)("Align Last Block","woo-gutenberg-products-block"),help:s?Object(o.__)("The last inner block will be aligned vertically.","woo-gutenberg-products-block"):Object(o.__)("The last inner block will follow other content.","woo-gutenberg-products-block"),checked:s,onChange:function(){return i({alignButtons:!s})}}))}},821:function(t,e,r){t.exports=r(914)},83:function(t,e){!function(){t.exports=this.wp.viewport}()},84:function(t,e){!function(){t.exports=this.wp.date}()},86:function(t,e,r){"use strict";var n=r(10),o=r.n(n),c=r(0),u=r(1),i=r(6),s=(r(2),r(45)),a=r(3),l=r(28),p=r.n(l),b=r(15),f=r.n(b),d=r(16),g=r.n(d),O=r(11),h=r.n(O),m=r(17),w=r.n(m),j=r(18),v=r.n(j),y=r(9),_=r.n(y),k=r(12),P=r.n(k),E=r(142),S=r(35),C=r(37);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=_()(t);if(e){var o=_()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v()(this,r)}}var R=Object(E.a)((function(t){return function(e){w()(n,e);var r=x(n);function n(){var t;return f()(this,n),(t=r.apply(this,arguments)).state={error:null,loading:!1,categories:null},t.loadCategories=t.loadCategories.bind(h()(t)),t}return g()(n,[{key:"componentDidMount",value:function(){this.loadCategories()}},{key:"loadCategories",value:function(){var t=this;this.setState({loading:!0}),Object(S.c)().then((function(e){t.setState({categories:e,loading:!1,error:null})})).catch(function(){var e=p()(P.a.mark((function e(r){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)(r);case 2:n=e.sent,t.setState({categories:null,loading:!1,error:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this.state,r=e.error,n=e.loading,u=e.categories;return Object(c.createElement)(t,o()({},this.props,{error:r,isLoading:n,categories:u}))}}]),n}(c.Component)}),"withCategories"),A=r(43),T=(r(126),function(t){var e=t.categories,r=t.error,n=t.isLoading,l=t.onChange,p=t.onOperatorChange,b=t.operator,f=t.selected,d=t.isSingle,g=t.showReviewCount,O={clear:Object(u.__)("Clear all product categories","woo-gutenberg-products-block"),list:Object(u.__)("Product Categories","woo-gutenberg-products-block"),noItems:Object(u.__)("Your store doesn't have any product categories.","woo-gutenberg-products-block"),search:Object(u.__)("Search for product categories","woo-gutenberg-products-block"),selected:function(t){return Object(u.sprintf)(Object(u._n)("%d category selected","%d categories selected",t,"woo-gutenberg-products-block"),t)},updated:Object(u.__)("Category search results updated.","woo-gutenberg-products-block")};return r?Object(c.createElement)(A.a,{error:r}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(s.a,{className:"woocommerce-product-categories",list:e,isLoading:n,selected:f.map((function(t){return Object(i.find)(e,{id:t})})).filter(Boolean),onChange:l,renderItem:function(t){var e=t.item,r=t.search,n=t.depth,i=void 0===n?0:n,a=["woocommerce-product-categories__item"];r.length&&a.push("is-searching"),0===i&&0!==e.parent&&a.push("is-skip-level");var l=e.breadcrumbs.length?"".concat(e.breadcrumbs.join(", "),", ").concat(e.name):e.name,p=g?Object(u.sprintf)(Object(u._n)("%1$s, has %2$d review","%1$s, has %2$d reviews",e.review_count,"woo-gutenberg-products-block"),l,e.review_count):Object(u.sprintf)(Object(u._n)("%1$s, has %2$d product","%1$s, has %2$d products",e.count,"woo-gutenberg-products-block"),l,e.count),b=g?Object(u.sprintf)(Object(u._n)("%d Review","%d Reviews",e.review_count,"woo-gutenberg-products-block"),e.review_count):Object(u.sprintf)(Object(u._n)("%d Product","%d Products",e.count,"woo-gutenberg-products-block"),e.count);return Object(c.createElement)(s.b,o()({className:a.join(" ")},t,{showCount:!0,countLabel:b,"aria-label":p}))},messages:O,isHierarchical:!0,isSingle:d}),!!p&&Object(c.createElement)("div",{className:f.length<2?"screen-reader-text":""},Object(c.createElement)(a.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(u.__)("Display products matching","woo-gutenberg-products-block"),help:Object(u.__)("Pick at least two categories to use this setting.","woo-gutenberg-products-block"),value:b,onChange:p,options:[{label:Object(u.__)("Any selected categories","woo-gutenberg-products-block"),value:"any"},{label:Object(u.__)("All selected categories","woo-gutenberg-products-block"),value:"all"}]})))});T.defaultProps={operator:"any",isSingle:!1};e.a=R(T)},914:function(t,e,r){"use strict";r.r(e);var n=r(4),o=r.n(n),c=r(0),u=r(1),i=r(25),s=r(56),a=r(31),l=Object(c.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(c.createElement)("path",{opacity:".87",fill:"none",d:"M0 0h24v24H0V0z"}),Object(c.createElement)("path",{d:"M21 8h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4l-3 7H9V9l4.34-4.34L12.23 10H21v2zM1 9h4v12H1z"})),p=r(6),b=r(15),f=r.n(b),d=r(16),g=r.n(d),O=r(17),h=r.n(O),m=r(18),w=r.n(m),j=r(9),v=r.n(j),y=r(3),_=r(22),k=r(66),P=r.n(k),E=(r(2),r(79)),S=r(80),C=r(86),x=r(175),R=r(5);function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=v()(t);if(e){var o=v()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return w()(this,r)}}var T=function(t){h()(r,t);var e=A(r);function r(){return f()(this,r),e.apply(this,arguments)}return g()(r,[{key:"getInspectorControls",value:function(){var t=this.props,e=t.attributes,r=t.setAttributes,n=e.categories,o=e.catOperator,i=e.columns,s=e.contentVisibility,a=e.rows,l=e.alignButtons;return Object(c.createElement)(_.InspectorControls,{key:"inspector"},Object(c.createElement)(y.PanelBody,{title:Object(u.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(S.a,{columns:i,rows:a,alignButtons:l,setAttributes:r,minColumns:Object(R.getSetting)("min_columns",1),maxColumns:Object(R.getSetting)("max_columns",6),minRows:Object(R.getSetting)("min_rows",1),maxRows:Object(R.getSetting)("max_rows",6)})),Object(c.createElement)(y.PanelBody,{title:Object(u.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(E.a,{settings:s,onChange:function(t){return r({contentVisibility:t})}})),Object(c.createElement)(y.PanelBody,{title:Object(u.__)("Filter by Product Category","woo-gutenberg-products-block"),initialOpen:!1},Object(c.createElement)(C.a,{selected:n,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.map((function(t){return t.id}));r({categories:e})},operator:o,onOperatorChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return r({catOperator:t})}})))}},{key:"render",value:function(){var t=this.props,e=t.name,r=t.attributes;return r.isPreview?x.a:Object(c.createElement)(c.Fragment,null,this.getInspectorControls(),Object(c.createElement)(y.Disabled,null,Object(c.createElement)(P.a,{block:e,attributes:r})))}}]),r}(c.Component),B=r(95);function D(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}Object(i.registerBlockType)("woocommerce/product-top-rated",{title:Object(u.__)("Top Rated Products","woo-gutenberg-products-block"),icon:{src:Object(c.createElement)(s.a,{srcElement:l}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(u.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(u.__)("Display a grid of your top rated products.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?D(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},B.a),transforms:{from:[{type:"block",blocks:Object(p.without)(B.b,"woocommerce/product-top-rated"),transform:function(t){return Object(i.createBlock)("woocommerce/product-top-rated",t)}}]},edit:function(t){return Object(c.createElement)(T,t)},save:function(){return null}})},95:function(t,e,r){"use strict";r.d(e,"b",(function(){return o}));var n=r(5),o=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];e.a={columns:{type:"number",default:Object(n.getSetting)("default_columns",3)},rows:{type:"number",default:Object(n.getSetting)("default_rows",3)},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},isPreview:{type:"boolean",default:!1}}}});