(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,t,n){e.exports=n("tjUo")},XbZt:function(e,t,n){},pYmE:function(e,t,n){},tjUo:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),c=n("i8i4"),i=n.n(c),o=(n("DQNa"),n("07d7"),n("JfAA"),n("yQr1")),l=n.n(o),s=n("FLGM"),u=n.n(s),m=n("06Pm"),f=n.n(m),p=n("kA7L"),d=n.n(p),v=n("hO3g"),h=n.n(v),w=n("X5/F"),y=n.n(w),g=n("3SUL"),b=n.n(g),x=n("eYnF"),E=n.n(x),k=n("04Ix"),X=n.n(k),N=n.p+"static/images/11.6ad43376.jpg",j=n.p+"static/images/12.4c3535f9.jpg",A=n.p+"static/images/13.38e7ee2c.jpg",L=n.p+"static/images/14.1110c7ef.jpg",C=n.p+"static/images/15.11437598.jpg",F=n("o+MX"),M=n.n(F),T=n("MAKL"),z=n.n(T),O=n("Kwsy"),P=n.n(O),S=n("zLi2"),q=n.n(S),R=n("17x9"),D=n.n(R),Y=n("LYCE"),J=n.n(Y),H=n("HnXd"),I=n.n(H),U=n("qjzJ"),K=n.n(U),Q=n("RXMP"),W=n.n(Q),Z=n("fHi0"),B=n.n(Z),G=n("5PDf"),V=n.n(G),$=n("OWCx"),_=n.n($),ee=n("+oHS"),te=n.n(ee);function ne(e,t){var n=te()(e);if(_.a){var a=_()(e);t&&(a=V()(a).call(a,(function(t){return B()(e,t).enumerable}))),n.push.apply(n,a)}return n}function ae(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n,a=null!=arguments[t]?arguments[t]:{};if(t%2)W()(n=ne(Object(a),!0)).call(n,(function(t){X()(e,t,a[t])}));else if(K.a)I()(e,K()(a));else{var r;W()(r=ne(Object(a))).call(r,(function(t){J()(e,t,B()(a,t))}))}}return e}({},e,{},t)}var re=function(e,t,n,a){return-n*(e/=a)*(e-2)+t};!function(){if(!window.requestAnimationFrame){for(var e=["webkit","moz"],t=0;t<e.length;t++)if(window.requestAnimationFrame=window["".concat(e[t],"RequestAnimationFrame")],ce)return void(window.cancelAnimationFrame=window["".concat(e[t],"CancelAnimationFrame")]);var n=0;window.requestAnimationFrame=function(e){var t=z()(),a=Math.max(0,16-(t-n));return P()((function(){n=z()(),e()}),a)},window.cancelAnimationFrame=function(e){clearTimeout(e),e=null}}}();var ce=window.requestAnimationFrame,ie=window.cancelAnimationFrame,oe=(n("XbZt"),{indicator:1});function le(e){var t=Object(a.useRef)(null),n=Object(a.useRef)(null),c=function(e,t){var n=Object(a.useState)((function(){return t})),r=q()(n,2),c=r[0],i=r[1];return[c,function(t){i("function"==typeof t?function(n){return e(n,t(n))}:e(c,t))}]}(ae,oe),i=q()(c,2),o=i[0],l=i[1],s=e.children,m=e.autoPlay,f=e.interval,p=e.indicatorColor,d=e.indicatorSize,v=e.indicatorClass,h=Object(a.useMemo)((function(){var e=s.length,t=s[0],a=s[e-1];return r.a.createElement("div",{className:"mt-carousel-wrapper-x",style:{width:"".concat(e>1?100*(e+2):100,"%")},ref:n},e>1&&r.a.cloneElement(a,{className:a.props.className?a.props.className+" mt-carousel-wrapper-x-item":"mt-carousel-wrapper-x-item"}),u()(s).call(s,(function(e){return r.a.cloneElement(e,{className:e.props.className?e.props.className+" mt-carousel-wrapper-x-item":"mt-carousel-wrapper-x-item"})})),e>1&&r.a.cloneElement(t,{className:t.props.className?t.props.className+" mt-carousel-wrapper-x-item":"mt-carousel-wrapper-x-item"}))}),[s]);return Object(a.useEffect)((function(){var e=t.current.clientWidth,a=-e;if(!(s.length<=1)){n.current.style.transform="translateX(".concat(a,"px)"),n.current.style.webkitTransform="translateX(".concat(a,"px)");var r=1,c=null,i=null,o=null,u=null,p=null,d=null,v=null,h=null,w="running",y=.5*e,g=function(t,r){l((function(){return{indicator:t}}));var c=-t*e,i=0,o=c-a,s=Math.abs(o/10);!function e(){i++,d=re(i,a,o,s),i+1>=s&&(d=c),n.current.style.transform="translateX(".concat(d,"px)"),n.current.style.webkitTransform="translateX(".concat(d,"px)"),i<s?v=ce(e):(ie(v),v=null,a=c,r&&r())}()},b=function t(){h=P()((function(){++r>s.length&&(a=-((r=1)-1)*e,n.current.style.transform="translateX(".concat(a,"px)"),n.current.style.webkitTransform="translateX(".concat(a,"px)")),g(r),t()}),f)};m&&b();var x=function(e){h&&(clearTimeout(h),h=null),v&&(ie(v),v=null,a=d),i=e.touches[0].clientX,o=e.touches[0].clientY,c=z()(),w="running"},E=function(e){u=e.changedTouches[0].clientX-i,p=e.changedTouches[0].clientY-o,Math.abs(u)>=Math.abs(p)&&"running"===w?(e.preventDefault(),w="horizontal"):Math.abs(u)<Math.abs(p)&&"running"===w&&(w="vertical"),"vertical"!==w&&(n.current.style.transform="translateX(".concat(a+u,"px)"),n.current.style.webkitTransform="translateX(".concat(a+u,"px)"))},k=function(){"vertical"!==w?(z()()-c<=200?u>20?r--:u<-20&&r++:u>0&&u>=y?r--:u<0&&-u>=y&&r++,r<1?(r=s.length,a=-(r+1)*e+u,n.current.style.transform="translateX(".concat(a,"px)"),n.current.style.webkitTransform="translateX(".concat(a,"px)")):r>s.length?(a=-((r=1)-1)*e+u,n.current.style.transform="translateX(".concat(a,"px)"),n.current.style.webkitTransform="translateX(".concat(a,"px)")):a+=u,d=a,g(r),m&&b()):g(r)};return t.current.addEventListener("touchstart",x,!1),t.current.addEventListener("touchmove",E,!1),t.current.addEventListener("touchend",k,!1),function(){t.current.removeEventListener("touchstart",x,!1),t.current.removeEventListener("touchmove",E,!1),t.current.removeEventListener("touchend",k,!1),h&&(clearTimeout(h),h=null),v&&(ie(v),v=null)}}}),[]),r.a.createElement("div",{className:"mt-carousel-wrapper",ref:t},h,r.a.createElement("ul",{className:"mt-carousel-indicator middle".concat(v?" "+v:""),style:{color:p}},s.length>1&&u()(s).call(s,(function(e,t){var n;return r.a.createElement("li",{key:"children-".concat(t),className:M()(n="mt-carousel-indicator-item ".concat(d)).call(n,t===o.indicator-1?" active":"")})}))))}le.propTypes={children:D.a.array,autoPlay:D.a.bool,interval:D.a.number,indicatorSize:D.a.string,indicatorColor:D.a.string,indicatorClass:D.a.string},le.defaultProps={children:[],autoPlay:!0,interval:3e3,indicatorSize:"middle",indicatorColor:"#f80",indicatorClass:""};var se=Object(a.memo)(le);n("pYmE");function ue(){if("undefined"==typeof Reflect||!l.a)return!1;if(l.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(l()(Date,[],(function(){}))),!0}catch(e){return!1}}var me=[N,j,A,L,C],fe=function(e){y()(a,e);var t,n=(t=a,function(){var e,n=E()(t);if(ue()){var a=E()(this).constructor;e=l()(n,arguments,a)}else e=n.apply(this,arguments);return b()(this,e)});function a(){var e;return f()(this,a),e=n.call(this),X()(h()(e),"handleResize",(function(){e.setState((function(e){return{key:e.key+1}})),console.log(e.state.key)})),e.state={key:0},e}return d()(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize,!1)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(se,{key:this.state.key,interval:3e3,autoPlay:!0,indicatorColor:"red",indicatorSize:"small",indicatorClass:"indicator"},u()(me).call(me,(function(e,t){return r.a.createElement("a",{className:"carousel-item-a",key:t},r.a.createElement("img",{src:e,alt:"\u8f6e\u64ad\u56fe",className:"carousel-item-a-img"}))}))),r.a.createElement("div",null,"\u8bf7\u4f7f\u7528\u79fb\u52a8\u8bbe\u5907\u67e5\u770bdemo\u6f14\u793a"))}}]),a}(a.PureComponent);i.a.render(r.a.createElement(fe,null),document.getElementById("root"))}},[[0,1,2]]]);