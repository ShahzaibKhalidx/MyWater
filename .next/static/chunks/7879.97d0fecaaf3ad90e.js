(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7879,4196],{1422:function(e,r,t){"use strict";t.d(r,{b:function(){return n}});var l=t(8592);t(6268),t(333),t(4940),l.Z.use([l.Mousewheel,l.Pagination,l.Navigation,l.EffectFade,l.Autoplay,l.Grid,l.EffectCreative,l.Virtual,l.Pagination,l.HashNavigation,l.History,l.Thumbs,l.Scrollbar,l.Keyboard,l.A11y]);let n={hero2Slider:{slidesPerView:1,spaceBetween:0,loop:!0,speed:1200,parallax:!0,autoplay:{delay:6e3},grabCursor:!1,watchSlidesProgress:!0,pagination:{el:".js-hero-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".js-hero-slider-next",prevEl:".js-hero-slider-prev"},onSlideChange:function(e){let r=e.el.querySelector(".swiper-pagination-bullet-active").offsetLeft;e.el.querySelector(".swiper-nav-active").style.left=r+"px"},onProgress:function(e){for(var r=0;r<e.slides.length;r++){var t=e.slides[r].progress*(.5*e.width);e.slides[r].querySelector(".image").style.transform="translateX("+t+"px)"}},onTouchStart:function(e){for(var r=0;r<e.slides.length;r++)e.slides[r].style.transition=""},onSetTransition:function(e,r){for(var t=0;t<e.slides.length;t++)e.slides[t].style.transition=r+"ms",e.slides[t].querySelector(".image").style.transition=r+"ms"},onAfterInit:function(e){e.el.querySelectorAll(".image").forEach(e=>{let r=e.dataset.dimg,t=e.dataset.mimg;window.innerWidth<768?void 0!=t?e.style.backgroundImage="url("+t+")":e.style.backgroundImage="url("+r+")":void 0!=r&&(e.style.backgroundImage="url("+r+")")})}},hero3Slider:{slidesPerView:"auto",loop:!1,centeredSlides:!0,rewind:!0,noSwipingSelector:"a",preventInteractionOnTransition:!0,mousewheel:!1,autoplay:{delay:6e3},spaceBetween:20,pagination:!1,navigation:{nextEl:".js-hero-carousel-next",prevEl:".js-hero-carousel-prev"},onSlideChangeEnd:function(e){e.update(!0)}},hero4Slider:{slidesPerView:1,spaceBetween:0,speed:800,autoplay:{delay:6e3},parallax:!0,loop:!0,mousewheel:!0,noSwipingSelector:"a",direction:"vertical",pagination:{el:".js-hero-parallax-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".js-hero-parallax-next",prevEl:".js-hero-parallax-prev"},onSlideChange:function(e){let r=e.el.querySelector(".swiper-pagination-bullet-active").offsetTop;e.el.querySelector(".swiper-nav-active").style.top=r+"px"},onAfterInit:function(e){let r=e.el.querySelector(".swiper-pagination-bullet-active").offsetTop;e.el.querySelector(".swiper-nav-active").style.top=r+"px",e.el.querySelector(".onovo-paginations-container-vertical").style.opacity=1,e.el.querySelectorAll(".image").forEach(e=>{let r=e.dataset.dimg,t=e.dataset.mimg;window.innerWidth<768?void 0!=t?e.style.backgroundImage="url("+t+")":e.style.backgroundImage="url("+r+")":void 0!=r&&(e.style.backgroundImage="url("+r+")")})}},tickerSlider:{spaceBetween:30,centeredSlides:!0,speed:12e3,autoplay:{delay:0},loop:!0,slidesPerView:"auto",allowTouchMove:!1},testimonialSlider:{slidesPerView:1,effect:"fade",loop:!1,autoplay:!1,spaceBetween:50,pagination:!1,navigation:{nextEl:".js-reviews-carousel-next",prevEl:".js-reviews-carousel-prev"}},historySlider:{slidesPerView:1,noSwipingSelector:"a",watchSlidesProgress:!0,loop:!1,autoplay:!1,spaceBetween:20,pagination:{el:".js-history-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".js-history-next",prevEl:".js-history-prev"},onSlideChange:function(e){let r=e.el.querySelector(".swiper-pagination-bullet-active").offsetLeft;e.el.querySelector(".swiper-nav-active").style.left=r+"px"}},blogSlider:{slidesPerView:2,noSwipingSelector:"a",watchSlidesProgress:!0,loop:!1,autoplay:{delay:6e3},spaceBetween:20,pagination:{el:".js-blog-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".js-blog-carousel-next",prevEl:".js-blog-carousel-prev"},breakpoints:{0:{slidesPerView:1},1024:{slidesPerView:2}},onSlideChange:function(e){var r=e.el.parentNode.querySelector(".swiper-pagination-bullet-active").offsetLeft;e.el.parentNode.querySelector(".swiper-nav-active").style.left=r+"px"}},heroProduct:{slidesPerView:1,spaceBetween:0,loop:!0,speed:1200,parallax:!0,autoplay:{delay:6e3},grabCursor:!1,watchSlidesProgress:!0,pagination:{el:".js-hero-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".js-hero-slider-next",prevEl:".js-hero-slider-prev"},onSlideChange:function(e){let r=e.el.querySelector(".swiper-pagination-bullet-active").offsetLeft;e.el.querySelector(".swiper-nav-active").style.left=r+"px"},onProgress:function(e){for(var r=0;r<e.slides.length;r++){var t=e.slides[r].progress*(.5*e.width);e.slides[r].querySelector(".image").style.transform="translateX("+t+"px)"}},onTouchStart:function(e){for(var r=0;r<e.slides.length;r++)e.slides[r].style.transition=""},onSetTransition:function(e,r){for(var t=0;t<e.slides.length;t++)e.slides[t].style.transition=r+"ms",e.slides[t].querySelector(".image").style.transition=r+"ms"},onAfterInit:function(e){e.el.querySelectorAll(".image").forEach(e=>{let r=e.dataset.dimg,t=e.dataset.mimg;window.innerWidth<768?void 0!=t?e.style.backgroundImage="url("+t+")":e.style.backgroundImage="url("+r+")":void 0!=r&&(e.style.backgroundImage="url("+r+")")})}}}},7879:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var l=t(5893),n=JSON.parse('{"e":[{"label":"✦ MAKES","link":"/services/service-4"},{"label":" LIFE","link":"/services/service-1"},{"label":" EASY","link":"/services/service-2"},{"label":"✦ ZINDAGI","link":"/services/service-3"},{"label":" ASAAN","link":"/services/service-4"},{"label":" BANAO","link":"/services/service-1"},{"label":"✦ MAKES","link":"/services/service-4"},{"label":" LIFE","link":"/services/service-1"},{"label":" EASY","link":"/services/service-2"},{"label":"✦ ZINDAGI","link":"/services/service-3"},{"label":" ASAAN","link":"/services/service-4"},{"label":" BANAO","link":"/services/service-1"}]}'),a=t(1664),i=t.n(a),s=t(1422),o=t(1532);let c=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("section",{className:"onovo-section gap-bottom-40",children:(0,l.jsx)("div",{className:"onovo-ticker-slider gap-top-90 gap-bottom-100",children:(0,l.jsx)(o.tq,{...s.b.tickerSlider,className:"swiper-container js-ticker-slider",children:n.e.map((e,r)=>(0,l.jsx)(o.o5,{className:"swiper-slide",children:(0,l.jsx)("h5",{className:"title onovo-text-white",children:(0,l.jsx)(i(),{href:e.link,children:(0,l.jsx)("span",{children:e.label})})})},"ticker-slide-".concat(r)))})})})});var u=c},333:function(){},4940:function(){},6268:function(){},1532:function(e,r,t){"use strict";t.d(r,{tq:function(){return d},o5:function(){return f}});var l=t(7294),n=t(6236),a=t(2546);let i=e=>{e&&!e.destroyed&&e.params.virtual&&(!e.params.virtual||e.params.virtual.enabled)&&(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function o(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function c(e,r){return"undefined"==typeof window?(0,l.useEffect)(e,r):(0,l.useLayoutEffect)(e,r)}let u=(0,l.createContext)(null),p=(0,l.createContext)(null),d=(0,l.forwardRef)(function(e,r){let{className:t,tag:u="div",wrapperTag:d="div",children:f,onSwiper:v,...g}=void 0===e?{}:e,h=!1,[m,y]=(0,l.useState)("swiper"),[w,b]=(0,l.useState)(null),[S,E]=(0,l.useState)(!1),x=(0,l.useRef)(!1),k=(0,l.useRef)(null),j=(0,l.useRef)(null),N=(0,l.useRef)(null),P=(0,l.useRef)(null),A=(0,l.useRef)(null),C=(0,l.useRef)(null),q=(0,l.useRef)(null),O=(0,l.useRef)(null),{params:I,passedParams:$,rest:_,events:B}=function(e,r){void 0===e&&(e={}),void 0===r&&(r=!0);let t={on:{}},l={},i={};(0,a.e)(t,n.S.defaults),(0,a.e)(t,n.S.extendedDefaults),t._emitClasses=!0,t.init=!1;let s={},o=a.p.map(e=>e.replace(/_/,"")),c=Object.assign({},e);return Object.keys(c).forEach(n=>{void 0!==e[n]&&(o.indexOf(n)>=0?(0,a.i)(e[n])?(t[n]={},i[n]={},(0,a.e)(t[n],e[n]),(0,a.e)(i[n],e[n])):(t[n]=e[n],i[n]=e[n]):0===n.search(/on[A-Z]/)&&"function"==typeof e[n]?r?l[`${n[2].toLowerCase()}${n.substr(3)}`]=e[n]:t.on[`${n[2].toLowerCase()}${n.substr(3)}`]=e[n]:s[n]=e[n])}),["navigation","pagination","scrollbar"].forEach(e=>{!0===t[e]&&(t[e]={}),!1===t[e]&&delete t[e]}),{params:t,passedParams:i,rest:s,events:l}}(g),{slides:R,slots:T}=function(e){let r=[],t={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return l.Children.toArray(e).forEach(e=>{if(o(e))r.push(e);else if(e.props&&e.props.slot&&t[e.props.slot])t[e.props.slot].push(e);else if(e.props&&e.props.children){let n=function e(r){let t=[];return l.Children.toArray(r).forEach(r=>{o(r)?t.push(r):r.props&&r.props.children&&e(r.props.children).forEach(e=>t.push(e))}),t}(e.props.children);n.length>0?n.forEach(e=>r.push(e)):t["container-end"].push(e)}else t["container-end"].push(e)}),{slides:r,slots:t}}(f),V=()=>{E(!S)};Object.assign(I.on,{_containerClasses(e,r){y(r)}});let L=()=>{Object.assign(I.on,B),h=!0;let e={...I};if(delete e.wrapperClass,j.current=new n.S(e),j.current.virtual&&j.current.params.virtual.enabled){j.current.virtual.slides=R;let e={cache:!1,slides:R,renderExternal:b,renderExternalUpdate:!1};(0,a.e)(j.current.params.virtual,e),(0,a.e)(j.current.originalParams.virtual,e)}};k.current||L(),j.current&&j.current.on("_beforeBreakpoint",V);let z=()=>{!h&&B&&j.current&&Object.keys(B).forEach(e=>{j.current.on(e,B[e])})},F=()=>{B&&j.current&&Object.keys(B).forEach(e=>{j.current.off(e,B[e])})};return(0,l.useEffect)(()=>()=>{j.current&&j.current.off("_beforeBreakpoint",V)}),(0,l.useEffect)(()=>{!x.current&&j.current&&(j.current.emitSlidesClasses(),x.current=!0)}),c(()=>{if(r&&(r.current=k.current),k.current)return j.current.destroyed&&L(),function(e,r){let{el:t,nextEl:l,prevEl:n,paginationEl:i,scrollbarEl:s,swiper:o}=e;(0,a.n)(r)&&l&&n&&(o.params.navigation.nextEl=l,o.originalParams.navigation.nextEl=l,o.params.navigation.prevEl=n,o.originalParams.navigation.prevEl=n),(0,a.a)(r)&&i&&(o.params.pagination.el=i,o.originalParams.pagination.el=i),(0,a.b)(r)&&s&&(o.params.scrollbar.el=s,o.originalParams.scrollbar.el=s),o.init(t)}({el:k.current,nextEl:A.current,prevEl:C.current,paginationEl:q.current,scrollbarEl:O.current,swiper:j.current},I),v&&v(j.current),()=>{j.current&&!j.current.destroyed&&j.current.destroy(!0,!1)}},[]),c(()=>{z();let e=function(e,r,t,l,n){let i=[];if(!r)return i;let s=e=>{0>i.indexOf(e)&&i.push(e)};if(t&&l){let e=l.map(n),r=t.map(n);e.join("")!==r.join("")&&s("children"),l.length!==t.length&&s("children")}let o=a.p.filter(e=>"_"===e[0]).map(e=>e.replace(/_/,""));return o.forEach(t=>{if(t in e&&t in r){if((0,a.i)(e[t])&&(0,a.i)(r[t])){let l=Object.keys(e[t]),n=Object.keys(r[t]);l.length!==n.length?s(t):(l.forEach(l=>{e[t][l]!==r[t][l]&&s(t)}),n.forEach(l=>{e[t][l]!==r[t][l]&&s(t)}))}else e[t]!==r[t]&&s(t)}}),i}($,N.current,R,P.current,e=>e.key);return N.current=$,P.current=R,e.length&&j.current&&!j.current.destroyed&&(0,a.u)({swiper:j.current,slides:R,passedParams:$,changedParams:e,nextEl:A.current,prevEl:C.current,scrollbarEl:O.current,paginationEl:q.current}),()=>{F()}}),c(()=>{i(j.current)},[w]),l.createElement(u,s({ref:k,className:(0,a.d)(`${m}${t?` ${t}`:""}`)},_),l.createElement(p.Provider,{value:j.current},T["container-start"],l.createElement(d,{className:(0,a.w)(I.wrapperClass)},T["wrapper-start"],I.virtual?function(e,r,t){if(!t)return null;let n=e=>{let t=e;return e<0?t=r.length+e:t>=r.length&&(t-=r.length),t},a=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${t.offset}px`}:{top:`${t.offset}px`},{from:i,to:s}=t,o=e.params.loop?-r.length:0,c=e.params.loop?2*r.length:r.length,u=[];for(let e=o;e<c;e+=1)e>=i&&e<=s&&u.push(r[n(e)]);return u.map((r,t)=>l.cloneElement(r,{swiper:e,style:a,key:`slide-${t}`}))}(j.current,R,w):R.map((e,r)=>l.cloneElement(e,{swiper:j.current,swiperSlideIndex:r})),T["wrapper-end"]),(0,a.n)(I)&&l.createElement(l.Fragment,null,l.createElement("div",{ref:C,className:"swiper-button-prev"}),l.createElement("div",{ref:A,className:"swiper-button-next"})),(0,a.b)(I)&&l.createElement("div",{ref:O,className:"swiper-scrollbar"}),(0,a.a)(I)&&l.createElement("div",{ref:q,className:"swiper-pagination"}),T["container-end"]))});d.displayName="Swiper";let f=(0,l.forwardRef)(function(e,r){let{tag:t="div",children:n,className:i="",swiper:o,zoom:p,lazy:d,virtualIndex:f,swiperSlideIndex:v,...g}=void 0===e?{}:e,h=(0,l.useRef)(null),[m,y]=(0,l.useState)("swiper-slide"),[w,b]=(0,l.useState)(!1);function S(e,r,t){r===h.current&&y(t)}c(()=>{if(void 0!==v&&(h.current.swiperSlideIndex=v),r&&(r.current=h.current),h.current&&o){if(o.destroyed){"swiper-slide"!==m&&y("swiper-slide");return}return o.on("_slideClass",S),()=>{o&&o.off("_slideClass",S)}}}),c(()=>{o&&h.current&&!o.destroyed&&y(o.getSlideClasses(h.current))},[o]);let E={isActive:m.indexOf("swiper-slide-active")>=0,isVisible:m.indexOf("swiper-slide-visible")>=0,isPrev:m.indexOf("swiper-slide-prev")>=0,isNext:m.indexOf("swiper-slide-next")>=0},x=()=>"function"==typeof n?n(E):n,k=()=>{b(!0)};return l.createElement(t,s({ref:h,className:(0,a.d)(`${m}${i?` ${i}`:""}`),"data-swiper-slide-index":f,onLoad:k},g),p&&l.createElement(u.Provider,{value:E},l.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":"number"==typeof p?p:void 0},x(),d&&!w&&l.createElement("div",{className:"swiper-lazy-preloader"}))),!p&&l.createElement(u.Provider,{value:E},x(),d&&!w&&l.createElement("div",{className:"swiper-lazy-preloader"})))});f.displayName="SwiperSlide"},8592:function(e,r,t){"use strict";t.d(r,{Z:function(){return l.S}});var l=t(6236)}}]);