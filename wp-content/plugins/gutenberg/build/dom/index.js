this.wp=this.wp||{},this.wp.dom=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=435)}({2:function(e,t){!function(){e.exports=this.lodash}()},435:function(e,t,n){"use strict";n.r(t),n.d(t,"focus",(function(){return Z})),n.d(t,"isHorizontalEdge",(function(){return A})),n.d(t,"isVerticalEdge",(function(){return R})),n.d(t,"getRectangleFromRange",(function(){return j})),n.d(t,"computeCaretRect",(function(){return x})),n.d(t,"placeCaretAtHorizontalEdge",(function(){return D})),n.d(t,"placeCaretAtVerticalEdge",(function(){return L})),n.d(t,"isTextField",(function(){return M})),n.d(t,"isNumberInput",(function(){return _})),n.d(t,"documentHasTextSelection",(function(){return H})),n.d(t,"documentHasUncollapsedSelection",(function(){return B})),n.d(t,"documentHasSelection",(function(){return V})),n.d(t,"isEntirelySelected",(function(){return U})),n.d(t,"getScrollContainer",(function(){return F})),n.d(t,"getOffsetParent",(function(){return k})),n.d(t,"replace",(function(){return X})),n.d(t,"remove",(function(){return q})),n.d(t,"insertAfter",(function(){return z})),n.d(t,"unwrap",(function(){return G})),n.d(t,"replaceTag",(function(){return W})),n.d(t,"wrap",(function(){return Y})),n.d(t,"__unstableStripHTML",(function(){return J})),n.d(t,"isEmpty",(function(){return K})),n.d(t,"removeInvalidHTML",(function(){return Q})),n.d(t,"getPhrasingContentSchema",(function(){return C})),n.d(t,"isPhrasingContent",(function(){return w})),n.d(t,"isTextContent",(function(){return T}));var r={};n.r(r),n.d(r,"find",(function(){return u}));var i={};n.r(i),n.d(i,"isTabbableIndex",(function(){return d})),n.d(i,"find",(function(){return b})),n.d(i,"findPrevious",(function(){return h})),n.d(i,"findNext",(function(){return g}));var o=["[tabindex]","a[href]","button:not([disabled])",'input:not([type="hidden"]):not([disabled])',"select:not([disabled])","textarea:not([disabled])","iframe","object","embed","area[href]","[contenteditable]:not([contenteditable=false])"].join(",");function a(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0}function u(e){var t=e.querySelectorAll(o);return Array.from(t).filter((function(e){return!(!a(e)||function(e){return"iframe"===e.nodeName.toLowerCase()&&"-1"===e.getAttribute("tabindex")}(e))&&("AREA"!==e.nodeName||function(e){var t=e.closest("map[name]");if(!t)return!1;var n=e.ownerDocument.querySelector('img[usemap="#'+t.name+'"]');return!!n&&a(n)}(e))}))}var c=n(2);function l(e){var t=e.getAttribute("tabindex");return null===t?0:parseInt(t,10)}function d(e){return-1!==l(e)}function s(e,t){return{element:e,index:t}}function f(e){return e.element}function m(e,t){var n=l(e.element),r=l(t.element);return n===r?e.index-t.index:n-r}function p(e){return e.filter(d).map(s).sort(m).map(f).reduce((t={},function(e,n){var r=n.nodeName,i=n.type,o=n.checked,a=n.name;if("INPUT"!==r||"radio"!==i||!a)return e.concat(n);var u=t.hasOwnProperty(a);if(!o&&u)return e;if(u){var l=t[a];e=Object(c.without)(e,l)}return t[a]=n,e.concat(n)}),[]);var t}function b(e){return p(u(e))}function h(e){var t=u(e.ownerDocument.body),n=t.indexOf(e);return t.length=n,Object(c.last)(p(t))}function g(e){var t=u(e.ownerDocument.body),n=t.indexOf(e),r=t.slice(n+1).filter((function(t){return!e.contains(t)}));return Object(c.first)(p(r))}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O={strong:{},em:{},s:{},del:{},ins:{},a:{attributes:["href","target","rel"]},code:{},abbr:{attributes:["title"]},sub:{},sup:{},br:{},small:{},q:{attributes:["cite"]},dfn:{attributes:["title"]},data:{attributes:["value"]},time:{attributes:["datetime"]},var:{},samp:{},kbd:{},i:{},b:{},u:{},mark:{},ruby:{},rt:{},rp:{},bdi:{attributes:["dir"]},bdo:{attributes:["dir"]},wbr:{},"#text":{}};Object(c.without)(Object.keys(O),"#text","br").forEach((function(e){O[e].children=Object(c.omit)(O,e)}));var E=N(N({},O),{audio:{attributes:["src","preload","autoplay","mediagroup","loop","muted"]},canvas:{attributes:["width","height"]},embed:{attributes:["src","type","width","height"]},img:{attributes:["alt","src","srcset","usemap","ismap","width","height"]},object:{attributes:["data","type","name","usemap","form","width","height"]},video:{attributes:["src","poster","preload","autoplay","mediagroup","loop","muted","controls","width","height"]}});function C(e){return"paste"!==e?E:Object(c.omit)(N(N({},E),{},{ins:{children:E.ins.children},del:{children:E.del.children}}),["u","abbr","data","time","wbr","bdi","bdo"])}function w(e){var t=e.nodeName.toLowerCase();return C().hasOwnProperty(t)||"span"===t}function T(e){var t=e.nodeName.toLowerCase();return O.hasOwnProperty(t)||"span"===t}function P(e){return e.ownerDocument.defaultView.getComputedStyle(e)}function S(e,t,n){if(Object(c.includes)(["INPUT","TEXTAREA"],e.tagName))return e.selectionStart===e.selectionEnd&&(t?0===e.selectionStart:e.value.length===e.selectionStart);if(!e.isContentEditable)return!0;var r=e.ownerDocument,i=r.defaultView.getSelection();if(!i.rangeCount)return!1;var o=i.getRangeAt(0),a=o.cloneRange(),u=function(e){var t=e.anchorNode,n=e.focusNode,r=e.anchorOffset,i=e.focusOffset,o=t.compareDocumentPosition(n);return!(o&t.DOCUMENT_POSITION_PRECEDING)&&(!!(o&t.DOCUMENT_POSITION_FOLLOWING)||(0!==o||r<=i))}(i),l=i.isCollapsed;l||a.collapse(!u);var d=j(a);if(!d)return!1;var s=P(e),f=parseInt(s.lineHeight,10)||0;if(!l&&d.height>f&&u===t)return!1;var m=parseInt(s["padding".concat(t?"Top":"Bottom")],10)||0,p=3*parseInt(f,10)/4,b=e.getBoundingClientRect(),h=j(o);if(!(t?b.top+m>h.top-p:b.bottom-m<h.bottom+p))return!1;if(n)return!0;var g="rtl"===s.direction?!t:t,v=I(r,g?b.left+1:b.right-1,t?b.top+p:b.bottom-p,e);if(!v)return!1;var y=g?"left":"right",N=j(v);return Math.abs(N[y]-d[y])<=1}function A(e,t){return S(e,t)}function R(e,t){return S(e,t,!0)}function j(e){if(!e.collapsed)return e.getBoundingClientRect();var t=e.startContainer,n=t.ownerDocument;if("BR"===t.nodeName){var r=t.parentNode,i=Array.from(r.childNodes).indexOf(t);(e=n.createRange()).setStart(r,i),e.setEnd(r,i)}var o=e.getClientRects()[0];if(!o){var a=n.createTextNode("​");(e=e.cloneRange()).insertNode(a),o=e.getClientRects()[0],a.parentNode.removeChild(a)}return o}function x(e){var t=e.getSelection(),n=t.rangeCount?t.getRangeAt(0):null;if(n)return j(n)}function D(e,t){if(e){if(Object(c.includes)(["INPUT","TEXTAREA"],e.tagName))return e.focus(),void(t?(e.selectionStart=e.value.length,e.selectionEnd=e.value.length):(e.selectionStart=0,e.selectionEnd=0));if(e.focus(),e.isContentEditable){var n=e[t?"lastChild":"firstChild"];if(n){var r=e.ownerDocument,i=r.defaultView.getSelection(),o=r.createRange();o.selectNodeContents(n),o.collapse(!t),i.removeAllRanges(),i.addRange(o)}}}}function I(e,t,n,r){var i=r.style.zIndex,o=r.style.position;r.style.zIndex="10000",r.style.position="relative";var a=function(e,t,n){if(e.caretRangeFromPoint)return e.caretRangeFromPoint(t,n);if(!e.caretPositionFromPoint)return null;var r=e.caretPositionFromPoint(t,n);if(!r)return null;var i=e.createRange();return i.setStart(r.offsetNode,r.offset),i.collapse(!0),i}(e,t,n);return r.style.zIndex=i,r.style.position=o,a}function L(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(e)if(n&&e.isContentEditable){var i=n.height/2,o=e.getBoundingClientRect(),a=n.left,u=t?o.bottom-i:o.top+i,c=e.ownerDocument,l=c.defaultView,d=I(c,a,u,e);if(!d||!e.contains(d.startContainer))return!r||d&&d.startContainer&&d.startContainer.contains(e)?void D(e,t):(e.scrollIntoView(t),void L(e,t,n,!1));var s=l.getSelection();s.removeAllRanges(),s.addRange(d),e.focus(),s.removeAllRanges(),s.addRange(d)}else D(e,t)}function M(e){var t=e.nodeName,n=e.contentEditable;return"INPUT"===t&&!["button","checkbox","hidden","file","radio","image","range","reset","submit","number"].includes(e.type)||"TEXTAREA"===t||"true"===n}function _(e){var t=e.nodeName,n=e.type,r=e.valueAsNumber;return"INPUT"===t&&"number"===n&&!!r}function H(e){var t=e.defaultView.getSelection(),n=t.rangeCount?t.getRangeAt(0):null;return n&&!n.collapsed}function B(e){return H(e)||function(e){if(!M(e)&&!_(e))return!1;try{var t=e.selectionStart,n=e.selectionEnd;return null!==t&&t!==n}catch(e){return!1}}(e.activeElement)}function V(e){return M(e.activeElement)||_(e.activeElement)||H(e)}function U(e){if(Object(c.includes)(["INPUT","TEXTAREA"],e.nodeName))return 0===e.selectionStart&&e.value.length===e.selectionEnd;if(!e.isContentEditable)return!0;var t=e.ownerDocument.defaultView.getSelection(),n=t.rangeCount?t.getRangeAt(0):null;if(!n)return!0;var r=n.startContainer,i=n.endContainer,o=n.startOffset,a=n.endOffset;if(r===e&&i===e&&0===o&&a===e.childNodes.length)return!0;var u=e.lastChild,l=u.nodeType===u.TEXT_NODE?u.data.length:u.childNodes.length;return r===e.firstChild&&i===e.lastChild&&0===o&&a===l}function F(e){if(e){if(e.scrollHeight>e.clientHeight){var t=P(e).overflowY;if(/(auto|scroll)/.test(t))return e}return F(e.parentNode)}}function k(e){for(var t;(t=e.parentNode)&&t.nodeType!==t.ELEMENT_NODE;);return t?"static"!==P(t).position?t:t.offsetParent:null}function X(e,t){z(t,e.parentNode),q(e)}function q(e){e.parentNode.removeChild(e)}function z(e,t){t.parentNode.insertBefore(e,t.nextSibling)}function G(e){for(var t=e.parentNode;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e)}function W(e,t){for(var n=e.ownerDocument.createElement(t);e.firstChild;)n.appendChild(e.firstChild);return e.parentNode.replaceChild(n,e),n}function Y(e,t){t.parentNode.insertBefore(e,t),e.appendChild(t)}function J(e){return(new window.DOMParser).parseFromString(e,"text/html").body.textContent||""}function K(e){return!e.hasChildNodes()||Array.from(e.childNodes).every((function(e){return e.nodeType===e.TEXT_NODE?!e.nodeValue.trim():e.nodeType!==e.ELEMENT_NODE||("BR"===e.nodeName||!e.hasAttributes()&&K(e))}))}function Q(e,t,n){var r=document.implementation.createHTMLDocument("");return r.body.innerHTML=e,function e(t,n,r,i){Array.from(t).forEach((function(t){var o=t.nodeName.toLowerCase();if(!r.hasOwnProperty(o)||r[o].isMatch&&!r[o].isMatch(t))e(t.childNodes,n,r,i),i&&!w(t)&&t.nextElementSibling&&z(n.createElement("br"),t),G(t);else if(t.nodeType===t.ELEMENT_NODE){var a=r[o],u=a.attributes,l=void 0===u?[]:u,d=a.classes,s=void 0===d?[]:d,f=a.children,m=a.require,p=void 0===m?[]:m,b=a.allowEmpty;if(f&&!b&&K(t))return void q(t);if(t.hasAttributes()&&(Array.from(t.attributes).forEach((function(e){var n=e.name;"class"===n||Object(c.includes)(l,n)||t.removeAttribute(n)})),t.classList&&t.classList.length)){var h=s.map((function(e){return"string"==typeof e?function(t){return t===e}:e instanceof RegExp?function(t){return e.test(t)}:c.noop}));Array.from(t.classList).forEach((function(e){h.some((function(t){return t(e)}))||t.classList.remove(e)})),t.classList.length||t.removeAttribute("class")}if(t.hasChildNodes()){if("*"===f)return;if(f)p.length&&!t.querySelector(p.join(","))?(e(t.childNodes,n,r,i),G(t)):"BODY"===t.parentNode.nodeName&&w(t)?(e(t.childNodes,n,r,i),Array.from(t.childNodes).some((function(e){return!w(e)}))&&G(t)):e(t.childNodes,n,f,i);else for(;t.firstChild;)q(t.firstChild)}}}))}(r.body.childNodes,r,t,n),r.body.innerHTML}var Z={focusable:r,tabbable:i}}});