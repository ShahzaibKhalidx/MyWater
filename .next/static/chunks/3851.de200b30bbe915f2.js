(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3851,4196],{1422:function(e,r,t){"use strict";t.d(r,{b:function(){return a}});var n=t(8592);t(6268),t(333),t(4940),n.Z.use([n.Mousewheel,n.Pagination,n.Navigation,n.EffectFade,n.Autoplay,n.Grid,n.EffectCreative,n.Virtual,n.Pagination,n.HashNavigation,n.History,n.Thumbs,n.Scrollbar,n.Keyboard,n.A11y]);let a={hero2Slider:{slidesPerView:1,spaceBetween:0,loop:!0,speed:1200,parallax:!0,autoplay:{delay:6e3},grabCursor:!1,watchSlidesProgress:!0,pagination:{el:".js-hero-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".js-hero-slider-next",prevEl:".js-hero-slider-prev"},onSlideChange:function(e){let r=e.el.querySelector(".swiper-pagination-bullet-active").offsetLeft;e.el.querySelector(".swiper-nav-active").style.left=r+"px"},onProgress:function(e){for(var r=0;r<e.slides.length;r++){var t=e.slides[r].progress*(.5*e.width);e.slides[r].querySelector(".image").style.transform="translateX("+t+"px)"}},onTouchStart:function(e){for(var r=0;r<e.slides.length;r++)e.slides[r].style.transition=""},onSetTransition:function(e,r){for(var t=0;t<e.slides.length;t++)e.slides[t].style.transition=r+"ms",e.slides[t].querySelector(".image").style.transition=r+"ms"},onAfterInit:function(e){e.el.querySelectorAll(".image").forEach(e=>{let r=e.dataset.dimg,t=e.dataset.mimg;window.innerWidth<768?void 0!=t?e.style.backgroundImage="url("+t+")":e.style.backgroundImage="url("+r+")":void 0!=r&&(e.style.backgroundImage="url("+r+")")})}},hero3Slider:{slidesPerView:"auto",loop:!1,centeredSlides:!0,rewind:!0,noSwipingSelector:"a",preventInteractionOnTransition:!0,mousewheel:!1,autoplay:{delay:6e3},spaceBetween:20,pagination:!1,navigation:{nextEl:".js-hero-carousel-next",prevEl:".js-hero-carousel-prev"},onSlideChangeEnd:function(e){e.update(!0)}},hero4Slider:{slidesPerView:1,spaceBetween:0,speed:800,autoplay:{delay:6e3},parallax:!0,loop:!0,mousewheel:!0,noSwipingSelector:"a",direction:"vertical",pagination:{el:".js-hero-parallax-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".js-hero-parallax-next",prevEl:".js-hero-parallax-prev"},onSlideChange:function(e){let r=e.el.querySelector(".swiper-pagination-bullet-active").offsetTop;e.el.querySelector(".swiper-nav-active").style.top=r+"px"},onAfterInit:function(e){let r=e.el.querySelector(".swiper-pagination-bullet-active").offsetTop;e.el.querySelector(".swiper-nav-active").style.top=r+"px",e.el.querySelector(".onovo-paginations-container-vertical").style.opacity=1,e.el.querySelectorAll(".image").forEach(e=>{let r=e.dataset.dimg,t=e.dataset.mimg;window.innerWidth<768?void 0!=t?e.style.backgroundImage="url("+t+")":e.style.backgroundImage="url("+r+")":void 0!=r&&(e.style.backgroundImage="url("+r+")")})}},tickerSlider:{spaceBetween:30,centeredSlides:!0,speed:12e3,autoplay:{delay:0},loop:!0,slidesPerView:"auto",allowTouchMove:!1},testimonialSlider:{slidesPerView:1,effect:"fade",loop:!1,autoplay:!1,spaceBetween:50,pagination:!1,navigation:{nextEl:".js-reviews-carousel-next",prevEl:".js-reviews-carousel-prev"}},historySlider:{slidesPerView:1,noSwipingSelector:"a",watchSlidesProgress:!0,loop:!1,autoplay:!1,spaceBetween:20,pagination:{el:".js-history-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".js-history-next",prevEl:".js-history-prev"},onSlideChange:function(e){let r=e.el.querySelector(".swiper-pagination-bullet-active").offsetLeft;e.el.querySelector(".swiper-nav-active").style.left=r+"px"}},blogSlider:{slidesPerView:2,noSwipingSelector:"a",watchSlidesProgress:!0,loop:!1,autoplay:{delay:6e3},spaceBetween:20,pagination:{el:".js-blog-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".js-blog-carousel-next",prevEl:".js-blog-carousel-prev"},breakpoints:{0:{slidesPerView:1},1024:{slidesPerView:2}},onSlideChange:function(e){var r=e.el.parentNode.querySelector(".swiper-pagination-bullet-active").offsetLeft;e.el.parentNode.querySelector(".swiper-nav-active").style.left=r+"px"}},heroProduct:{slidesPerView:1,spaceBetween:0,loop:!0,speed:1200,parallax:!0,autoplay:{delay:6e3},grabCursor:!1,watchSlidesProgress:!0,pagination:{el:".js-hero-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".js-hero-slider-next",prevEl:".js-hero-slider-prev"},onSlideChange:function(e){let r=e.el.querySelector(".swiper-pagination-bullet-active").offsetLeft;e.el.querySelector(".swiper-nav-active").style.left=r+"px"},onProgress:function(e){for(var r=0;r<e.slides.length;r++){var t=e.slides[r].progress*(.5*e.width);e.slides[r].querySelector(".image").style.transform="translateX("+t+"px)"}},onTouchStart:function(e){for(var r=0;r<e.slides.length;r++)e.slides[r].style.transition=""},onSetTransition:function(e,r){for(var t=0;t<e.slides.length;t++)e.slides[t].style.transition=r+"ms",e.slides[t].querySelector(".image").style.transition=r+"ms"},onAfterInit:function(e){e.el.querySelectorAll(".image").forEach(e=>{let r=e.dataset.dimg,t=e.dataset.mimg;window.innerWidth<768?void 0!=t?e.style.backgroundImage="url("+t+")":e.style.backgroundImage="url("+r+")":void 0!=r&&(e.style.backgroundImage="url("+r+")")})}}}},3851:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var n=t(5893),a=t(1422),l=t(1532),i={j:8},s=t(1664),o=t.n(s);let c=e=>{let{projects:r}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("section",{className:"onovo-section onovo-section-full align-center",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"onovo-hero-carousel-wrap",children:(0,n.jsxs)("div",{className:"onovo-hero-carousel",children:[(0,n.jsx)(l.tq,{...a.b.hero3Slider,className:"swiper-container js-hero-carousel",children:r.slice(0,i.j).map((e,r)=>(0,n.jsx)(l.o5,{className:"swiper-slide",children:(0,n.jsxs)("div",{className:"onovo-hero-carousel-item",children:[(0,n.jsx)("div",{className:"slide",children:(0,n.jsx)(o(),{href:"/projects/".concat(e.id),children:(0,n.jsx)("span",{className:"img",style:{backgroundImage:"url("+e.image+")"}})})}),(0,n.jsxs)("div",{className:"titles",children:[(0,n.jsx)("div",{className:"subtitle",children:(0,n.jsx)("div",{className:"text-line-inner",children:(0,n.jsx)("span",{"data-splitting":!0,children:e.category})})}),(0,n.jsx)("h5",{className:"title",children:(0,n.jsx)("div",{className:"text-line-inner",children:(0,n.jsx)(o(),{href:"/projects/".concat(e.id),children:(0,n.jsx)("span",{"data-splitting":!0,children:e.title})})})})]})]})},"h2s-slide-".concat(r)))}),(0,n.jsxs)("div",{className:"js-hero-carousel-navs",children:[(0,n.jsx)("div",{className:"onovo-prev js-hero-carousel-prev onovo-hover-2",children:(0,n.jsx)("i",{})}),(0,n.jsx)("div",{className:"onovo-next js-hero-carousel-next onovo-hover-2",children:(0,n.jsx)("i",{})})]})]})})})})})};var u=c},333:function(){},4940:function(){},6268:function(){},1532:function(e,r,t){"use strict";t.d(r,{tq:function(){return d},o5:function(){return f}});var n=t(7294),a=t(6236),l=t(2546);let i=e=>{e&&!e.destroyed&&e.params.virtual&&(!e.params.virtual||e.params.virtual.enabled)&&(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function c(e,r){return"undefined"==typeof window?(0,n.useEffect)(e,r):(0,n.useLayoutEffect)(e,r)}let u=(0,n.createContext)(null),p=(0,n.createContext)(null),d=(0,n.forwardRef)(function(e,r){let{className:t,tag:u="div",wrapperTag:d="div",children:f,onSwiper:v,...g}=void 0===e?{}:e,h=!1,[m,y]=(0,n.useState)("swiper"),[w,x]=(0,n.useState)(null),[b,S]=(0,n.useState)(!1),E=(0,n.useRef)(!1),j=(0,n.useRef)(null),N=(0,n.useRef)(null),k=(0,n.useRef)(null),P=(0,n.useRef)(null),C=(0,n.useRef)(null),q=(0,n.useRef)(null),O=(0,n.useRef)(null),I=(0,n.useRef)(null),{params:$,passedParams:_,rest:A,events:R}=function(e,r){void 0===e&&(e={}),void 0===r&&(r=!0);let t={on:{}},n={},i={};(0,l.e)(t,a.S.defaults),(0,l.e)(t,a.S.extendedDefaults),t._emitClasses=!0,t.init=!1;let s={},o=l.p.map(e=>e.replace(/_/,"")),c=Object.assign({},e);return Object.keys(c).forEach(a=>{void 0!==e[a]&&(o.indexOf(a)>=0?(0,l.i)(e[a])?(t[a]={},i[a]={},(0,l.e)(t[a],e[a]),(0,l.e)(i[a],e[a])):(t[a]=e[a],i[a]=e[a]):0===a.search(/on[A-Z]/)&&"function"==typeof e[a]?r?n[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:t.on[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:s[a]=e[a])}),["navigation","pagination","scrollbar"].forEach(e=>{!0===t[e]&&(t[e]={}),!1===t[e]&&delete t[e]}),{params:t,passedParams:i,rest:s,events:n}}(g),{slides:T,slots:V}=function(e){let r=[],t={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return n.Children.toArray(e).forEach(e=>{if(o(e))r.push(e);else if(e.props&&e.props.slot&&t[e.props.slot])t[e.props.slot].push(e);else if(e.props&&e.props.children){let a=function e(r){let t=[];return n.Children.toArray(r).forEach(r=>{o(r)?t.push(r):r.props&&r.props.children&&e(r.props.children).forEach(e=>t.push(e))}),t}(e.props.children);a.length>0?a.forEach(e=>r.push(e)):t["container-end"].push(e)}else t["container-end"].push(e)}),{slides:r,slots:t}}(f),B=()=>{S(!b)};Object.assign($.on,{_containerClasses(e,r){y(r)}});let L=()=>{Object.assign($.on,R),h=!0;let e={...$};if(delete e.wrapperClass,N.current=new a.S(e),N.current.virtual&&N.current.params.virtual.enabled){N.current.virtual.slides=T;let e={cache:!1,slides:T,renderExternal:x,renderExternalUpdate:!1};(0,l.e)(N.current.params.virtual,e),(0,l.e)(N.current.originalParams.virtual,e)}};j.current||L(),N.current&&N.current.on("_beforeBreakpoint",B);let z=()=>{!h&&R&&N.current&&Object.keys(R).forEach(e=>{N.current.on(e,R[e])})},F=()=>{R&&N.current&&Object.keys(R).forEach(e=>{N.current.off(e,R[e])})};return(0,n.useEffect)(()=>()=>{N.current&&N.current.off("_beforeBreakpoint",B)}),(0,n.useEffect)(()=>{!E.current&&N.current&&(N.current.emitSlidesClasses(),E.current=!0)}),c(()=>{if(r&&(r.current=j.current),j.current)return N.current.destroyed&&L(),function(e,r){let{el:t,nextEl:n,prevEl:a,paginationEl:i,scrollbarEl:s,swiper:o}=e;(0,l.n)(r)&&n&&a&&(o.params.navigation.nextEl=n,o.originalParams.navigation.nextEl=n,o.params.navigation.prevEl=a,o.originalParams.navigation.prevEl=a),(0,l.a)(r)&&i&&(o.params.pagination.el=i,o.originalParams.pagination.el=i),(0,l.b)(r)&&s&&(o.params.scrollbar.el=s,o.originalParams.scrollbar.el=s),o.init(t)}({el:j.current,nextEl:C.current,prevEl:q.current,paginationEl:O.current,scrollbarEl:I.current,swiper:N.current},$),v&&v(N.current),()=>{N.current&&!N.current.destroyed&&N.current.destroy(!0,!1)}},[]),c(()=>{z();let e=function(e,r,t,n,a){let i=[];if(!r)return i;let s=e=>{0>i.indexOf(e)&&i.push(e)};if(t&&n){let e=n.map(a),r=t.map(a);e.join("")!==r.join("")&&s("children"),n.length!==t.length&&s("children")}let o=l.p.filter(e=>"_"===e[0]).map(e=>e.replace(/_/,""));return o.forEach(t=>{if(t in e&&t in r){if((0,l.i)(e[t])&&(0,l.i)(r[t])){let n=Object.keys(e[t]),a=Object.keys(r[t]);n.length!==a.length?s(t):(n.forEach(n=>{e[t][n]!==r[t][n]&&s(t)}),a.forEach(n=>{e[t][n]!==r[t][n]&&s(t)}))}else e[t]!==r[t]&&s(t)}}),i}(_,k.current,T,P.current,e=>e.key);return k.current=_,P.current=T,e.length&&N.current&&!N.current.destroyed&&(0,l.u)({swiper:N.current,slides:T,passedParams:_,changedParams:e,nextEl:C.current,prevEl:q.current,scrollbarEl:I.current,paginationEl:O.current}),()=>{F()}}),c(()=>{i(N.current)},[w]),n.createElement(u,s({ref:j,className:(0,l.d)(`${m}${t?` ${t}`:""}`)},A),n.createElement(p.Provider,{value:N.current},V["container-start"],n.createElement(d,{className:(0,l.w)($.wrapperClass)},V["wrapper-start"],$.virtual?function(e,r,t){if(!t)return null;let a=e=>{let t=e;return e<0?t=r.length+e:t>=r.length&&(t-=r.length),t},l=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${t.offset}px`}:{top:`${t.offset}px`},{from:i,to:s}=t,o=e.params.loop?-r.length:0,c=e.params.loop?2*r.length:r.length,u=[];for(let e=o;e<c;e+=1)e>=i&&e<=s&&u.push(r[a(e)]);return u.map((r,t)=>n.cloneElement(r,{swiper:e,style:l,key:`slide-${t}`}))}(N.current,T,w):T.map((e,r)=>n.cloneElement(e,{swiper:N.current,swiperSlideIndex:r})),V["wrapper-end"]),(0,l.n)($)&&n.createElement(n.Fragment,null,n.createElement("div",{ref:q,className:"swiper-button-prev"}),n.createElement("div",{ref:C,className:"swiper-button-next"})),(0,l.b)($)&&n.createElement("div",{ref:I,className:"swiper-scrollbar"}),(0,l.a)($)&&n.createElement("div",{ref:O,className:"swiper-pagination"}),V["container-end"]))});d.displayName="Swiper";let f=(0,n.forwardRef)(function(e,r){let{tag:t="div",children:a,className:i="",swiper:o,zoom:p,lazy:d,virtualIndex:f,swiperSlideIndex:v,...g}=void 0===e?{}:e,h=(0,n.useRef)(null),[m,y]=(0,n.useState)("swiper-slide"),[w,x]=(0,n.useState)(!1);function b(e,r,t){r===h.current&&y(t)}c(()=>{if(void 0!==v&&(h.current.swiperSlideIndex=v),r&&(r.current=h.current),h.current&&o){if(o.destroyed){"swiper-slide"!==m&&y("swiper-slide");return}return o.on("_slideClass",b),()=>{o&&o.off("_slideClass",b)}}}),c(()=>{o&&h.current&&!o.destroyed&&y(o.getSlideClasses(h.current))},[o]);let S={isActive:m.indexOf("swiper-slide-active")>=0,isVisible:m.indexOf("swiper-slide-visible")>=0,isPrev:m.indexOf("swiper-slide-prev")>=0,isNext:m.indexOf("swiper-slide-next")>=0},E=()=>"function"==typeof a?a(S):a,j=()=>{x(!0)};return n.createElement(t,s({ref:h,className:(0,l.d)(`${m}${i?` ${i}`:""}`),"data-swiper-slide-index":f,onLoad:j},g),p&&n.createElement(u.Provider,{value:S},n.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":"number"==typeof p?p:void 0},E(),d&&!w&&n.createElement("div",{className:"swiper-lazy-preloader"}))),!p&&n.createElement(u.Provider,{value:S},E(),d&&!w&&n.createElement("div",{className:"swiper-lazy-preloader"})))});f.displayName="SwiperSlide"},8592:function(e,r,t){"use strict";t.d(r,{Z:function(){return n.S}});var n=t(6236)}}]);