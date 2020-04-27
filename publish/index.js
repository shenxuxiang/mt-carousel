module.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=20)}([function(e,n){e.exports=require("react")},function(e,n){e.exports=require("prop-types")},function(e,n){e.exports=require("@babel/runtime-corejs3/core-js-stable/date/now")},function(e,n){e.exports=require("@babel/runtime-corejs3/core-js-stable/set-timeout")},function(e,n){e.exports=require("@babel/runtime-corejs3/helpers/slicedToArray")},function(e,n){e.exports=require("@babel/runtime-corejs3/core-js-stable/instance/map")},function(e,n){e.exports=require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors")},function(e,n){e.exports=require("@babel/runtime-corejs3/core-js-stable/instance/for-each")},function(e,n){e.exports=require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor")},function(e,n){e.exports=require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols")},function(e,n){e.exports=require("@babel/runtime-corejs3/core-js-stable/instance/concat")},function(e,n){e.exports=require("@babel/runtime-corejs3/core-js-stable/object/define-property")},function(e,n){e.exports=require("@babel/runtime-corejs3/core-js-stable/object/define-properties")},function(e,n){e.exports=require("@babel/runtime-corejs3/core-js-stable/instance/filter")},function(e,n){e.exports=require("@babel/runtime-corejs3/core-js-stable/object/keys")},function(e,n){e.exports=require("@babel/runtime-corejs3/helpers/defineProperty")},function(e,n,t){var r=t(17),a=t(18);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},function(e,n,t){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],a=0;a<e.length;a++){var o=e[a],s=n.base?o[0]+n.base:o[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var f=c(u),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:u,updater:h(p,n),references:1}),r.push(u)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var u,f=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function p(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(n,a);else{var o=document.createTextNode(a),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o)}}function d(e,n,t){var r=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,b=0;function h(e,n){var t,r,a;if(n.singleton){var o=b++;t=m||(m=l(n)),r=p.bind(null,t,o,!1),a=p.bind(null,t,o,!0)}else t=l(n),r=d.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=c(t[r]);i[a].references--}for(var o=s(e,n),l=0;l<t.length;l++){var u=c(t[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=o}}}},function(e,n,t){(n=t(19)(!1)).push([e.i,".mt-carousel-wrapper {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.mt-carousel-wrapper-x {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.mt-carousel-wrapper-x-item:nth-child(n) {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  -webkit-flex-basis: 0;\n      -ms-flex-preferred-size: 0;\n          flex-basis: 0;\n}\n.mt-carousel-indicator {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 15px;\n  margin: auto;\n  padding: 0;\n  list-style: none;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.mt-carousel-indicator.large {\n  height: 8px;\n}\n.mt-carousel-indicator.middle {\n  height: 6px;\n}\n.mt-carousel-indicator.small {\n  height: 4px;\n}\n.mt-carousel-indicator-item {\n  background: rgba(255, 255, 255, 0.5);\n  margin: 0 3px;\n  -webkit-transition: width 0.2s linear;\n  transition: width 0.2s linear;\n}\n.mt-carousel-indicator-item.large {\n  width: 8px;\n  height: 8px;\n  margin: 0 5px;\n  border-radius: 4px;\n}\n.mt-carousel-indicator-item.large.active {\n  width: 26px;\n  background: currentColor;\n}\n.mt-carousel-indicator-item.middle {\n  width: 6px;\n  height: 6px;\n  margin: 0 4px;\n  border-radius: 3px;\n}\n.mt-carousel-indicator-item.middle.active {\n  width: 20px;\n  background: currentColor;\n}\n.mt-carousel-indicator-item.small {\n  width: 4px;\n  height: 4px;\n  margin: 0 3px;\n  border-radius: 2px;\n}\n.mt-carousel-indicator-item.small.active {\n  width: 20px;\n  background: currentColor;\n}\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var a=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([a]).join("\n")}var i,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){"use strict";t.r(n);var r=t(10),a=t.n(r),o=t(2),i=t.n(o),c=t(3),s=t.n(c),l=t(5),u=t.n(l),f=t(4),p=t.n(f),d=t(0),m=t.n(d),b=t(1),h=t.n(b),v=t(11),x=t.n(v),w=t(12),g=t.n(w),y=t(6),j=t.n(y),k=t(7),q=t.n(k),T=t(8),C=t.n(T),M=t(13),N=t.n(M),E=t(9),O=t.n(E),S=t(14),A=t.n(S),X=t(15),F=t.n(X);function L(e,n){var t=A()(e);if(O.a){var r=O()(e);n&&(r=N()(r).call(r,(function(n){return C()(e,n).enumerable}))),t.push.apply(t,r)}return t}function P(e,n){return function(e){for(var n=1;n<arguments.length;n++){var t,r=null!=arguments[n]?arguments[n]:{};if(n%2)q()(t=L(Object(r),!0)).call(t,(function(n){F()(e,n,r[n])}));else if(j.a)g()(e,j()(r));else{var a;q()(a=L(Object(r))).call(a,(function(n){x()(e,n,C()(r,n))}))}}return e}({},e,{},n)}var R=function(e,n,t,r){return-t*(e/=r)*(e-2)+n};!function(){if(!window.requestAnimationFrame){for(var e=["webkit","moz"],n=0;n<e.length;n++)if(window.requestAnimationFrame=window["".concat(e[n],"RequestAnimationFrame")],_)return void(window.cancelAnimationFrame=window["".concat(e[n],"CancelAnimationFrame")]);var t=0;window.requestAnimationFrame=function(e){var n=i()(),r=Math.max(0,16-(n-t));return s()((function(){t=i()(),e()}),r)},window.cancelAnimationFrame=function(e){clearTimeout(e),e=null}}}();var _=window.requestAnimationFrame,z=window.cancelAnimationFrame,U=(t(16),{indicator:1});function I(e){var n=Object(d.useRef)(null),t=Object(d.useRef)(null),r=function(e,n){var t=Object(d.useState)((function(){return n})),r=p()(t,2),a=r[0],o=r[1];return[a,function(n){o("function"==typeof n?function(t){return e(t,n(t))}:e(a,n))}]}(P,U),o=p()(r,2),c=o[0],l=o[1],f=e.children,b=e.autoPlay,h=e.interval,v=e.indicatorColor,x=e.indicatorSize,w=e.indicatorClass,g=Object(d.useMemo)((function(){var e=f.length,n=f[0],r=f[e-1];return m.a.createElement("div",{className:"mt-carousel-wrapper-x",style:{width:"".concat(e>1?100*(e+2):100,"%")},ref:t},e>1&&m.a.cloneElement(r,{className:r.props.className?r.props.className+" mt-carousel-wrapper-x-item":"mt-carousel-wrapper-x-item"}),u()(f).call(f,(function(e){return m.a.cloneElement(e,{className:e.props.className?e.props.className+" mt-carousel-wrapper-x-item":"mt-carousel-wrapper-x-item"})})),e>1&&m.a.cloneElement(n,{className:n.props.className?n.props.className+" mt-carousel-wrapper-x-item":"mt-carousel-wrapper-x-item"}))}),[f]);return Object(d.useEffect)((function(){var e=n.current.clientWidth,r=-e;if(!(f.length<=1)){t.current.style.transform="translateX(".concat(r,"px)"),t.current.style.webkitTransform="translateX(".concat(r,"px)");var a=1,o=null,c=null,u=null,p=null,d=null,m=null,v=null,x=null,w="running",g=.5*e,y=function(n,a){l((function(){return{indicator:n}}));var o=-n*e,i=0,c=o-r,s=Math.abs(c/10);!function e(){i++,m=R(i,r,c,s),i+1>=s&&(m=o),t.current.style.transform="translateX(".concat(m,"px)"),t.current.style.webkitTransform="translateX(".concat(m,"px)"),i<s?v=_(e):(z(v),v=null,r=o,a&&a())}()},j=function n(){x=s()((function(){++a>f.length&&(r=-((a=1)-1)*e,t.current.style.transform="translateX(".concat(r,"px)"),t.current.style.webkitTransform="translateX(".concat(r,"px)")),y(a),n()}),h)};b&&j();var k=function(e){x&&(clearTimeout(x),x=null),v&&(z(v),v=null,r=m),c=e.touches[0].clientX,u=e.touches[0].clientY,o=i()(),w="running"},q=function(e){p=e.changedTouches[0].clientX-c,d=e.changedTouches[0].clientY-u,Math.abs(p)>=Math.abs(d)&&"running"===w?(e.preventDefault(),w="horizontal"):Math.abs(p)<Math.abs(d)&&"running"===w&&(w="vertical"),"vertical"!==w&&(t.current.style.transform="translateX(".concat(r+p,"px)"),t.current.style.webkitTransform="translateX(".concat(r+p,"px)"))},T=function(){"vertical"!==w?(i()()-o<=200?p>20?a--:p<-20&&a++:p>0&&p>=g?a--:p<0&&-p>=g&&a++,a<1?(a=f.length,r=-(a+1)*e+p,t.current.style.transform="translateX(".concat(r,"px)"),t.current.style.webkitTransform="translateX(".concat(r,"px)")):a>f.length?(r=-((a=1)-1)*e+p,t.current.style.transform="translateX(".concat(r,"px)"),t.current.style.webkitTransform="translateX(".concat(r,"px)")):r+=p,m=r,y(a),b&&j()):y(a)};return n.current.addEventListener("touchstart",k,!1),n.current.addEventListener("touchmove",q,!1),n.current.addEventListener("touchend",T,!1),function(){n.current.removeEventListener("touchstart",k,!1),n.current.removeEventListener("touchmove",q,!1),n.current.removeEventListener("touchend",T,!1),x&&(clearTimeout(x),x=null),v&&(z(v),v=null)}}}),[f.length]),m.a.createElement("div",{className:"mt-carousel-wrapper",ref:n},g,m.a.createElement("ul",{className:"mt-carousel-indicator middle".concat(w?" "+w:""),style:{color:v}},f.length>1&&u()(f).call(f,(function(e,n){var t;return m.a.createElement("li",{key:"children-".concat(n),className:a()(t="mt-carousel-indicator-item ".concat(x)).call(t,n===c.indicator-1?" active":"")})}))))}I.propTypes={children:h.a.array,autoPlay:h.a.bool,interval:h.a.number,indicatorSize:h.a.string,indicatorColor:h.a.string,indicatorClass:h.a.string},I.defaultProps={children:[],autoPlay:!0,interval:3e3,indicatorSize:"middle",indicatorColor:"#f80",indicatorClass:""};n.default=Object(d.memo)(I)}]);