this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-best-sellers"]=function(t){function e(e){for(var n,i,u=e[0],s=e[1],a=e[2],b=0,p=[];b<u.length;b++)i=u[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(l&&l(e);p.length;)p.shift()();return c.push.apply(c,a||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,u=1;u<r.length;u++){var s=r[u];0!==o[s]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={26:0},c=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var l=s;return c.push([798,0]),r()}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},107:function(t,e){},108:function(t,e){},109:function(t,e){},110:function(t,e){},111:function(t,e){},112:function(t,e){},113:function(t,e){},114:function(t,e){},115:function(t,e){},116:function(t,e){},117:function(t,e){},118:function(t,e){},119:function(t,e){},120:function(t,e){},13:function(t,e){!function(){t.exports=this.wp.apiFetch}()},133:function(t,e){},14:function(t,e){!function(){t.exports=this.wp.blockEditor}()},15:function(t,e){!function(){t.exports=this.regeneratorRuntime}()},17:function(t,e){!function(){t.exports=this.wp.blocks}()},173:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(0),o=r(5),c=Object(n.createElement)("img",{src:o.S+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})},18:function(t,e){!function(){t.exports=this.wp.url}()},25:function(t,e){!function(){t.exports=this.wp.compose}()},3:function(t,e){!function(){t.exports=this.wc.wcSettings}()},33:function(t,e){!function(){t.exports=this.wp.htmlEntities}()},35:function(t,e){!function(){t.exports=this.moment}()},4:function(t,e){!function(){t.exports=this.wp.components}()},40:function(t,e,r){"use strict";r.d(e,"h",(function(){return p})),r.d(e,"e",(function(){return d})),r.d(e,"b",(function(){return g})),r.d(e,"i",(function(){return f})),r.d(e,"f",(function(){return O})),r.d(e,"c",(function(){return h})),r.d(e,"d",(function(){return m})),r.d(e,"g",(function(){return j})),r.d(e,"a",(function(){return w}));var n=r(7),o=r.n(n),c=r(18),i=r(13),u=r.n(i),s=r(6),a=r(5);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,i=t.queryArgs,l=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,i=t.queryArgs,u=void 0===i?[]:i,s={per_page:a.u?100:0,catalog_visibility:"any",search:o,orderby:"title",order:"asc"},l=[Object(c.addQueryArgs)("/wc/store/products",b(b({},s),u))];return a.u&&r.length&&l.push(Object(c.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:r})),l}({selected:r,search:o,queryArgs:void 0===i?[]:i});return Promise.all(l.map((function(t){return u()({path:t})}))).then((function(t){return Object(s.uniqBy)(Object(s.flatten)(t),"id").map((function(t){return b(b({},t),{},{parent:0})}))})).catch((function(t){throw t}))},d=function(t){return u()({path:"/wc/store/products/".concat(t)})},g=function(){return u()({path:"wc/store/products/attributes"})},f=function(t){return u()({path:"wc/store/products/attributes/".concat(t,"/terms")})},O=function(t){var e=t.selected,r=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=[Object(c.addQueryArgs)("wc/store/products/tags",{per_page:a.x?100:0,orderby:a.x?"count":"name",order:a.x?"desc":"asc",search:n})];return a.x&&r.length&&o.push(Object(c.addQueryArgs)("wc/store/products/tags",{include:r})),o}({selected:void 0===e?[]:e,search:t.search});return Promise.all(r.map((function(t){return u()({path:t})}))).then((function(t){return Object(s.uniqBy)(Object(s.flatten)(t),"id")}))},h=function(t){return u()({path:Object(c.addQueryArgs)("wc/store/products/categories",b({per_page:0},t))})},m=function(t){return u()({path:"wc/store/products/categories/".concat(t)})},j=function(t){return u()({path:Object(c.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:t})})},w=function(t,e){if(!t.title.raw)return t.slug;var r=1===e.filter((function(e){return e.title.raw===t.title.raw})).length;return t.title.raw+(r?"":" - ".concat(t.slug))}},43:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(15),o=r.n(n),c=r(37),i=r.n(c),u=function(){var t=i()(o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e.json){t.next=11;break}return t.prev=1,t.next=4,e.json();case 4:return r=t.sent,t.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",{message:t.t0.message,type:"general"});case 11:return t.abrupt("return",{message:e.message,type:e.type||"general"});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},47:function(t,e){!function(){t.exports=this.wp.escapeHtml}()},49:function(t,e,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(47));e.a=function(t){var e,r,i,u=t.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(e=u).message,i=e.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},5:function(t,e,r){"use strict";r.d(e,"k",(function(){return o})),r.d(e,"I",(function(){return c})),r.d(e,"O",(function(){return i})),r.d(e,"y",(function(){return u})),r.d(e,"A",(function(){return s})),r.d(e,"l",(function(){return a})),r.d(e,"z",(function(){return l})),r.d(e,"C",(function(){return b})),r.d(e,"n",(function(){return p})),r.d(e,"B",(function(){return d})),r.d(e,"m",(function(){return g})),r.d(e,"E",(function(){return f})),r.d(e,"u",(function(){return O})),r.d(e,"x",(function(){return h})),r.d(e,"r",(function(){return m})),r.d(e,"s",(function(){return j})),r.d(e,"t",(function(){return w})),r.d(e,"j",(function(){return y})),r.d(e,"K",(function(){return v})),r.d(e,"P",(function(){return _})),r.d(e,"p",(function(){return k})),r.d(e,"q",(function(){return S})),r.d(e,"o",(function(){return P})),r.d(e,"H",(function(){return E})),r.d(e,"c",(function(){return C})),r.d(e,"v",(function(){return x})),r.d(e,"w",(function(){return A})),r.d(e,"S",(function(){return B})),r.d(e,"T",(function(){return R})),r.d(e,"J",(function(){return T})),r.d(e,"a",(function(){return I})),r.d(e,"M",(function(){return M})),r.d(e,"b",(function(){return L})),r.d(e,"L",(function(){return N})),r.d(e,"D",(function(){return z})),r.d(e,"h",(function(){return H})),r.d(e,"N",(function(){return Q})),r.d(e,"g",(function(){return q})),r.d(e,"i",(function(){return U})),r.d(e,"G",(function(){return G})),r.d(e,"F",(function(){return W})),r.d(e,"R",(function(){return J})),r.d(e,"Q",(function(){return K})),r.d(e,"d",(function(){return X})),r.d(e,"e",(function(){return Y})),r.d(e,"f",(function(){return $})),r.d(e,"W",(function(){return tt})),r.d(e,"X",(function(){return et})),r.d(e,"U",(function(){return rt})),r.d(e,"V",(function(){return nt}));var n=r(3),o=Object(n.getSetting)("currentUserIsAdmin",!1),c=Object(n.getSetting)("reviewRatingsEnabled",!0),i=Object(n.getSetting)("showAvatars",!0),u=Object(n.getSetting)("max_columns",6),s=Object(n.getSetting)("min_columns",1),a=Object(n.getSetting)("default_columns",3),l=Object(n.getSetting)("max_rows",6),b=Object(n.getSetting)("min_rows",1),p=Object(n.getSetting)("default_rows",3),d=Object(n.getSetting)("min_height",500),g=Object(n.getSetting)("default_height",500),f=Object(n.getSetting)("placeholderImgSrc",""),O=(Object(n.getSetting)("thumbnail_size",300),Object(n.getSetting)("isLargeCatalog")),h=Object(n.getSetting)("limitTags"),m=Object(n.getSetting)("hasProducts",!0),j=Object(n.getSetting)("hasTags",!0),w=Object(n.getSetting)("homeUrl",""),y=Object(n.getSetting)("couponsEnabled",!0),v=Object(n.getSetting)("shippingEnabled",!0),_=Object(n.getSetting)("taxesEnabled",!0),k=Object(n.getSetting)("displayItemizedTaxes",!1),S=Object(n.getSetting)("hasDarkEditorStyleSupport",!1),P=(Object(n.getSetting)("displayShopPricesIncludingTax",!1),Object(n.getSetting)("displayCartPricesIncludingTax",!1)),E=Object(n.getSetting)("productCount",0),C=Object(n.getSetting)("attributes",[]),x=Object(n.getSetting)("isShippingCalculatorEnabled",!0),A=Object(n.getSetting)("isShippingCostHidden",!1),D=Object(n.getSetting)("woocommerceBlocksPhase",1),B=Object(n.getSetting)("wcBlocksAssetUrl",""),R=Object(n.getSetting)("wcBlocksBuildUrl",""),T=Object(n.getSetting)("shippingCountries",{}),I=Object(n.getSetting)("allowedCountries",{}),M=Object(n.getSetting)("shippingStates",{}),L=Object(n.getSetting)("allowedStates",{}),N=Object(n.getSetting)("shippingMethodsExist",!1),z=Object(n.getSetting)("paymentGatewaySortOrder",[]),H=Object(n.getSetting)("checkoutShowLoginReminder",!0),V={id:0,title:"",permalink:""},F=Object(n.getSetting)("storePages",{shop:V,cart:V,checkout:V,privacy:V,terms:V}),Q=F.shop.permalink,q=F.checkout.id,U=F.checkout.permalink,G=F.privacy.permalink,W=F.privacy.title,J=F.terms.permalink,K=F.terms.title,X=F.cart.id,Y=F.cart.permalink,$=Object(n.getSetting)("checkoutAllowsGuest",!1),Z=(Object(n.getSetting)("checkoutAllowsSignup",!1),r(17)),tt=function(t,e){if(D>2)return Object(Z.registerBlockType)(t,e)},et=function(t,e){if(D>1)return Object(Z.registerBlockType)(t,e)},rt=function(){return D>2},nt=function(){return D>1}},54:function(t,e){!function(){t.exports=this.wp.keycodes}()},6:function(t,e){!function(){t.exports=this.lodash}()},60:function(t,e,r){"use strict";var n=r(7),o=r.n(n),c=r(27),i=r.n(c),u=r(9);r(2);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}e.a=function(t){var e=t.srcElement,r=t.size,n=void 0===r?24:r,c=i()(t,["srcElement","size"]);return Object(u.isValidElement)(e)&&Object(u.cloneElement)(e,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({width:n,height:n},c))}},68:function(t,e){!function(){t.exports=this.wp.editor}()},74:function(t,e){!function(){t.exports=this.wp.hooks}()},75:function(t,e,r){"use strict";r.d(e,"b",(function(){return o}));var n=r(5),o=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];e.a={columns:{type:"number",default:n.l},rows:{type:"number",default:n.n},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},isPreview:{type:"boolean",default:!1}}},77:function(t,e){!function(){t.exports=this.ReactDOM}()},78:function(t,e){!function(){t.exports=this.wp.dom}()},79:function(t,e,r){"use strict";var n=r(7),o=r.n(n),c=r(0),i=r(1),u=(r(2),r(4));function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=function(t){var e=t.onChange,r=t.settings,n=r.button,o=r.price,s=r.rating,l=r.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:l?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return e(a(a({},r),{},{title:!l}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:o?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return e(a(a({},r),{},{price:!o}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:s?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:s,onChange:function(){return e(a(a({},r),{},{rating:!s}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return e(a(a({},r),{},{button:!n}))}}))}},798:function(t,e,r){t.exports=r(910)},80:function(t,e,r){"use strict";var n=r(0),o=r(1),c=r(6),i=(r(2),r(4)),u=r(5);e.a=function(t){var e=t.columns,r=t.rows,s=t.setAttributes,a=t.alignButtons;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Columns","woo-gutenberg-products-block"),value:e,onChange:function(t){var e=Object(c.clamp)(t,u.A,u.y);s({columns:Object(c.isNaN)(e)?"":e})},min:u.A,max:u.y}),Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Rows","woo-gutenberg-products-block"),value:r,onChange:function(t){var e=Object(c.clamp)(t,u.C,u.z);s({rows:Object(c.isNaN)(e)?"":e})},min:u.C,max:u.z}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Align Last Block","woo-gutenberg-products-block"),help:a?Object(o.__)("The last inner block will be aligned vertically.","woo-gutenberg-products-block"):Object(o.__)("The last inner block will follow other content.","woo-gutenberg-products-block"),checked:a,onChange:function(){return s({alignButtons:!a})}}))}},82:function(t,e){!function(){t.exports=this.wp.viewport}()},83:function(t,e,r){"use strict";var n=r(10),o=r.n(n),c=r(0),i=r(1),u=r(6),s=(r(2),r(50)),a=r(4),l=r(15),b=r.n(l),p=r(37),d=r.n(p),g=r(21),f=r.n(g),O=r(24),h=r.n(O),m=r(19),j=r.n(m),w=r(22),y=r.n(w),v=r(23),_=r.n(v),k=r(12),S=r.n(k),P=r(25),E=r(40),C=r(43);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=S()(t);if(e){var o=S()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _()(this,r)}}var A=Object(P.createHigherOrderComponent)((function(t){return function(e){y()(n,e);var r=x(n);function n(){var t;return f()(this,n),(t=r.apply(this,arguments)).state={error:null,loading:!1,categories:null},t.loadCategories=t.loadCategories.bind(j()(t)),t}return h()(n,[{key:"componentDidMount",value:function(){this.loadCategories()}},{key:"loadCategories",value:function(){var t=this;this.setState({loading:!0}),Object(E.c)().then((function(e){t.setState({categories:e,loading:!1,error:null})})).catch(function(){var e=d()(b.a.mark((function e(r){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)(r);case 2:n=e.sent,t.setState({categories:null,loading:!1,error:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this.state,r=e.error,n=e.loading,i=e.categories;return Object(c.createElement)(t,o()({},this.props,{error:r,isLoading:n,categories:i}))}}]),n}(c.Component)}),"withCategories"),D=r(49),B=(r(133),function(t){var e=t.categories,r=t.error,n=t.isLoading,l=t.onChange,b=t.onOperatorChange,p=t.operator,d=t.selected,g=t.isSingle,f=t.showReviewCount,O={clear:Object(i.__)("Clear all product categories","woo-gutenberg-products-block"),list:Object(i.__)("Product Categories","woo-gutenberg-products-block"),noItems:Object(i.__)("Your store doesn't have any product categories.","woo-gutenberg-products-block"),search:Object(i.__)("Search for product categories","woo-gutenberg-products-block"),selected:function(t){return Object(i.sprintf)(Object(i._n)("%d category selected","%d categories selected",t,"woo-gutenberg-products-block"),t)},updated:Object(i.__)("Category search results updated.","woo-gutenberg-products-block")};return r?Object(c.createElement)(D.a,{error:r}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(s.a,{className:"woocommerce-product-categories",list:e,isLoading:n,selected:d.map((function(t){return Object(u.find)(e,{id:t})})).filter(Boolean),onChange:l,renderItem:function(t){var e=t.item,r=t.search,n=t.depth,u=void 0===n?0:n,a=["woocommerce-product-categories__item"];r.length&&a.push("is-searching"),0===u&&0!==e.parent&&a.push("is-skip-level");var l=e.breadcrumbs.length?"".concat(e.breadcrumbs.join(", "),", ").concat(e.name):e.name,b=f?Object(i.sprintf)(Object(i._n)("%s, has %d review","%s, has %d reviews",e.review_count,"woo-gutenberg-products-block"),l,e.review_count):Object(i.sprintf)(Object(i._n)("%s, has %d product","%s, has %d products",e.count,"woo-gutenberg-products-block"),l,e.count),p=f?Object(i.sprintf)(Object(i._n)("%d Review","%d Reviews",e.review_count,"woo-gutenberg-products-block"),e.review_count):Object(i.sprintf)(Object(i._n)("%d Product","%d Products",e.count,"woo-gutenberg-products-block"),e.count);return Object(c.createElement)(s.b,o()({className:a.join(" ")},t,{showCount:!0,countLabel:p,"aria-label":b}))},messages:O,isHierarchical:!0,isSingle:g}),!!b&&Object(c.createElement)("div",{className:d.length<2?"screen-reader-text":""},Object(c.createElement)(a.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(i.__)("Display products matching","woo-gutenberg-products-block"),help:Object(i.__)("Pick at least two categories to use this setting.","woo-gutenberg-products-block"),value:p,onChange:b,options:[{label:Object(i.__)("Any selected categories","woo-gutenberg-products-block"),value:"any"},{label:Object(i.__)("All selected categories","woo-gutenberg-products-block"),value:"all"}]})))});B.defaultProps={operator:"any",isSingle:!1};e.a=A(B)},87:function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var n=r(0),o=r(8),c=r.n(o),i=r(11),u=r.n(i),s=r(5);function a(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,c=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw c}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var b=function(t){return function(e){var r=e.attributes,o=r.align,i=r.contentVisibility,l=c()(o?"align".concat(o):"",{"is-hidden-title":!i.title,"is-hidden-price":!i.price,"is-hidden-rating":!i.rating,"is-hidden-button":!i.button});return Object(n.createElement)(n.RawHTML,{className:l},function(t,e){var r=t.attributes,n=r.attributes,o=r.attrOperator,c=r.categories,i=r.catOperator,l=r.orderby,b=r.products,p=r.columns||s.l,d=r.rows||s.n,g=new Map;switch(g.set("limit",d*p),g.set("columns",p),c&&c.length&&(g.set("category",c.join(",")),i&&"all"===i&&g.set("cat_operator","AND")),n&&n.length&&(g.set("terms",n.map((function(t){return t.id})).join(",")),g.set("attribute",n[0].attr_slug),o&&"all"===o&&g.set("terms_operator","AND")),l&&("price_desc"===l?(g.set("orderby","price"),g.set("order","DESC")):"price_asc"===l?(g.set("orderby","price"),g.set("order","ASC")):"date"===l?(g.set("orderby","date"),g.set("order","DESC")):g.set("orderby",l)),e){case"woocommerce/product-best-sellers":g.set("best_selling","1");break;case"woocommerce/product-top-rated":g.set("orderby","rating");break;case"woocommerce/product-on-sale":g.set("on_sale","1");break;case"woocommerce/product-new":g.set("orderby","date"),g.set("order","DESC");break;case"woocommerce/handpicked-products":if(!b.length)return"";g.set("ids",b.join(",")),g.set("limit",b.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!n||!n.length)return""}var f,O="[products",h=a(g);try{for(h.s();!(f=h.n()).done;){var m=u()(f.value,2);O+=" "+m[0]+'="'+m[1]+'"'}}catch(t){h.e(t)}finally{h.f()}return O+="]"}(e,t))}}},9:function(t,e){!function(){t.exports=this.React}()},910:function(t,e,r){"use strict";r.r(e);var n=r(7),o=r.n(n),c=r(0),i=r(1),u=r(6),s=r(60),a=r(55),l=Object(c.createElement)(a.a,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(c.createElement)("path",{d:"M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99l1.5 1.5z"})),b=r(17),p=r(21),d=r.n(p),g=r(24),f=r.n(g),O=r(22),h=r.n(O),m=r(23),j=r.n(m),w=r(12),y=r.n(w),v=r(4),_=r(14),k=r(68),S=(r(2),r(79)),P=r(80),E=r(83),C=r(173);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=y()(t);if(e){var o=y()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return j()(this,r)}}var A=function(t){h()(r,t);var e=x(r);function r(){return d()(this,r),e.apply(this,arguments)}return f()(r,[{key:"getInspectorControls",value:function(){var t=this.props,e=t.attributes,r=t.setAttributes,n=e.categories,o=e.catOperator,u=e.columns,s=e.contentVisibility,a=e.rows,l=e.alignButtons;return Object(c.createElement)(_.InspectorControls,{key:"inspector"},Object(c.createElement)(v.PanelBody,{title:Object(i.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(P.a,{columns:u,rows:a,alignButtons:l,setAttributes:r})),Object(c.createElement)(v.PanelBody,{title:Object(i.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(S.a,{settings:s,onChange:function(t){return r({contentVisibility:t})}})),Object(c.createElement)(v.PanelBody,{title:Object(i.__)("Filter by Product Category","woo-gutenberg-products-block"),initialOpen:!1},Object(c.createElement)(E.a,{selected:n,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.map((function(t){return t.id}));r({categories:e})},operator:o,onOperatorChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return r({catOperator:t})}})))}},{key:"render",value:function(){var t=this.props,e=t.attributes,r=t.name;return e.isPreview?C.a:Object(c.createElement)(c.Fragment,null,this.getInspectorControls(),Object(c.createElement)(v.Disabled,null,Object(c.createElement)(k.ServerSideRender,{block:r,attributes:e})))}}]),r}(c.Component),D=r(87),B=r(75);function R(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}Object(b.registerBlockType)("woocommerce/product-best-sellers",{title:Object(i.__)("Best Selling Products","woo-gutenberg-products-block"),icon:{src:Object(c.createElement)(s.a,{srcElement:l}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(i.__)("Display a grid of your all-time best selling products.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?R(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},B.a),transforms:{from:[{type:"block",blocks:Object(u.without)(B.b,"woocommerce/product-best-sellers"),transform:function(t){return Object(b.createBlock)("woocommerce/product-best-sellers",t)}}]},deprecated:[{attributes:B.a,save:Object(D.a)("woocommerce/product-best-sellers")}],edit:function(t){return Object(c.createElement)(A,t)},save:function(){return null}})},92:function(t,e){!function(){t.exports=this.wp.date}()}});