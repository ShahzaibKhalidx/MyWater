exports.id = 1422;
exports.ids = [1422];
exports.modules = {

/***/ 1422:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ sliderProps)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3877);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7644);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3039);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5392);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_0__]);
swiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_0__.Mousewheel,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Grid,
    swiper__WEBPACK_IMPORTED_MODULE_0__.EffectCreative,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Virtual,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_0__.HashNavigation,
    swiper__WEBPACK_IMPORTED_MODULE_0__.History,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Thumbs,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Keyboard,
    swiper__WEBPACK_IMPORTED_MODULE_0__.A11y
]);



const sliderProps = {
    hero2Slider: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 1200,
        parallax: true,
        autoplay: {
            delay: 6000
        },
        grabCursor: false,
        watchSlidesProgress: true,
        pagination: {
            el: ".js-hero-pagination",
            type: "bullets",
            clickable: true
        },
        navigation: {
            nextEl: ".js-hero-slider-next",
            prevEl: ".js-hero-slider-prev"
        },
        onSlideChange: function(swiper) {
            let current_pos = swiper.el.querySelector(".swiper-pagination-bullet-active").offsetLeft;
            swiper.el.querySelector(".swiper-nav-active").style.left = current_pos + "px";
        },
        onProgress: function(swiper) {
            for(var i = 0; i < swiper.slides.length; i++){
                var slideProgress = swiper.slides[i].progress, innerOffset = swiper.width * 0.5, innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector(".image").style.transform = "translateX(" + innerTranslate + "px)";
            }
        },
        onTouchStart: function(swiper) {
            for(var i = 0; i < swiper.slides.length; i++){
                swiper.slides[i].style.transition = "";
            }
        },
        onSetTransition: function(swiper, speed) {
            for(var i = 0; i < swiper.slides.length; i++){
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".image").style.transition = speed + "ms";
            }
        },
        onAfterInit: function(swiper) {
            let allImages = swiper.el.querySelectorAll(".image");
            allImages.forEach((element)=>{
                let img_d = element.dataset.dimg;
                let img_m = element.dataset.mimg;
                if (window.innerWidth < 768) {
                    if (img_m != undefined) {
                        element.style.backgroundImage = "url(" + img_m + ")";
                    } else {
                        element.style.backgroundImage = "url(" + img_d + ")";
                    }
                } else {
                    if (img_d != undefined) {
                        element.style.backgroundImage = "url(" + img_d + ")";
                    }
                }
            });
        }
    },
    hero3Slider: {
        slidesPerView: "auto",
        loop: false,
        centeredSlides: true,
        rewind: true,
        noSwipingSelector: "a",
        preventInteractionOnTransition: true,
        mousewheel: false,
        autoplay: {
            delay: 6000
        },
        spaceBetween: 20,
        pagination: false,
        navigation: {
            nextEl: ".js-hero-carousel-next",
            prevEl: ".js-hero-carousel-prev"
        },
        onSlideChangeEnd: function(swiper) {
            swiper.update(true);
        }
    },
    hero4Slider: {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        autoplay: {
            delay: 6000
        },
        parallax: true,
        loop: true,
        mousewheel: true,
        noSwipingSelector: "a",
        direction: "vertical",
        pagination: {
            el: ".js-hero-parallax-pagination",
            type: "bullets",
            clickable: true
        },
        navigation: {
            nextEl: ".js-hero-parallax-next",
            prevEl: ".js-hero-parallax-prev"
        },
        onSlideChange: function(swiper) {
            let current_pos = swiper.el.querySelector(".swiper-pagination-bullet-active").offsetTop;
            swiper.el.querySelector(".swiper-nav-active").style.top = current_pos + "px";
        },
        onAfterInit: function(swiper) {
            let current_pos = swiper.el.querySelector(".swiper-pagination-bullet-active").offsetTop;
            swiper.el.querySelector(".swiper-nav-active").style.top = current_pos + "px";
            swiper.el.querySelector(".onovo-paginations-container-vertical").style.opacity = 1;
            let allImages = swiper.el.querySelectorAll(".image");
            allImages.forEach((element)=>{
                let img_d = element.dataset.dimg;
                let img_m = element.dataset.mimg;
                if (window.innerWidth < 768) {
                    if (img_m != undefined) {
                        element.style.backgroundImage = "url(" + img_m + ")";
                    } else {
                        element.style.backgroundImage = "url(" + img_d + ")";
                    }
                } else {
                    if (img_d != undefined) {
                        element.style.backgroundImage = "url(" + img_d + ")";
                    }
                }
            });
        }
    },
    tickerSlider: {
        spaceBetween: 30,
        centeredSlides: true,
        speed: 12000,
        autoplay: {
            delay: 0
        },
        loop: true,
        slidesPerView: "auto",
        allowTouchMove: false
    },
    testimonialSlider: {
        slidesPerView: 1,
        effect: "fade",
        loop: false,
        autoplay: false,
        spaceBetween: 50,
        pagination: false,
        navigation: {
            nextEl: ".js-reviews-carousel-next",
            prevEl: ".js-reviews-carousel-prev"
        }
    },
    historySlider: {
        slidesPerView: 1,
        noSwipingSelector: "a",
        watchSlidesProgress: true,
        loop: false,
        autoplay: false,
        spaceBetween: 20,
        pagination: {
            el: ".js-history-pagination",
            type: "bullets",
            clickable: true
        },
        navigation: {
            nextEl: ".js-history-next",
            prevEl: ".js-history-prev"
        },
        onSlideChange: function(swiper) {
            let current_pos = swiper.el.querySelector(".swiper-pagination-bullet-active").offsetLeft;
            swiper.el.querySelector(".swiper-nav-active").style.left = current_pos + "px";
        }
    },
    blogSlider: {
        slidesPerView: 2,
        noSwipingSelector: "a",
        watchSlidesProgress: true,
        loop: false,
        autoplay: {
            delay: 6000
        },
        spaceBetween: 20,
        pagination: {
            el: ".js-blog-pagination",
            type: "bullets",
            clickable: true
        },
        navigation: {
            nextEl: ".js-blog-carousel-next",
            prevEl: ".js-blog-carousel-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 2
            }
        },
        onSlideChange: function(swiper) {
            var current_pos = swiper.el.parentNode.querySelector(".swiper-pagination-bullet-active").offsetLeft;
            swiper.el.parentNode.querySelector(".swiper-nav-active").style.left = current_pos + "px";
        }
    },
    heroProduct: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 1200,
        parallax: true,
        autoplay: {
            delay: 6000
        },
        grabCursor: false,
        watchSlidesProgress: true,
        pagination: {
            el: ".js-hero-pagination",
            type: "bullets",
            clickable: true
        },
        navigation: {
            nextEl: ".js-hero-slider-next",
            prevEl: ".js-hero-slider-prev"
        },
        onSlideChange: function(swiper) {
            let current_pos = swiper.el.querySelector(".swiper-pagination-bullet-active").offsetLeft;
            swiper.el.querySelector(".swiper-nav-active").style.left = current_pos + "px";
        },
        onProgress: function(swiper) {
            for(var i = 0; i < swiper.slides.length; i++){
                var slideProgress = swiper.slides[i].progress, innerOffset = swiper.width * 0.5, innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector(".image").style.transform = "translateX(" + innerTranslate + "px)";
            }
        },
        onTouchStart: function(swiper) {
            for(var i = 0; i < swiper.slides.length; i++){
                swiper.slides[i].style.transition = "";
            }
        },
        onSetTransition: function(swiper, speed) {
            for(var i = 0; i < swiper.slides.length; i++){
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".image").style.transition = speed + "ms";
            }
        },
        onAfterInit: function(swiper) {
            let allImages = swiper.el.querySelectorAll(".image");
            allImages.forEach((element)=>{
                let img_d = element.dataset.dimg;
                let img_m = element.dataset.mimg;
                if (window.innerWidth < 768) {
                    if (img_m != undefined) {
                        element.style.backgroundImage = "url(" + img_m + ")";
                    } else {
                        element.style.backgroundImage = "url(" + img_d + ")";
                    }
                } else {
                    if (img_d != undefined) {
                        element.style.backgroundImage = "url(" + img_d + ")";
                    }
                }
            });
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3039:
/***/ (() => {



/***/ }),

/***/ 5392:
/***/ (() => {



/***/ }),

/***/ 7644:
/***/ (() => {



/***/ })

};
;