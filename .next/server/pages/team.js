"use strict";
(() => {
var exports = {};
exports.id = 9038;
exports.ids = [9038];
exports.modules = {

/***/ 4522:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _common_sliderProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1422);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _data_sliders_testimonial2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8548);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_sliderProps__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
([_common_sliderProps__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Testimonial2Slider = ()=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("section", {
            className: "onovo-section gap-bottom-140",
            children: /*#__PURE__*/ _jsx("div", {
                className: "container",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "onovo-reviews gap-140",
                    style: {
                        "backgroundColor": "#000"
                    },
                    children: [
                        /*#__PURE__*/ _jsx("div", {
                            style: {
                                "backgroundImage": "url(" + Data.bg_image + ")",
                                "backgroundPosition": "center center",
                                "backgroundRepeat": "no-repeat",
                                "backgroundSize": "cover",
                                "position": "absolute",
                                "left": "0",
                                "top": "0",
                                "width": "100%",
                                "height": "100%",
                                "opacity": "0.24"
                            }
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "onovo-reviews-carousel reviews--full onovo-text-white align-center",
                                    children: [
                                        /*#__PURE__*/ _jsx(Swiper, {
                                            ...sliderProps.testimonialSlider,
                                            className: "swiper-container js-reviews-carousel",
                                            children: /*#__PURE__*/ _jsx("div", {
                                                className: "swiper-wrapper",
                                                children: Data.items.map((item, key)=>/*#__PURE__*/ _jsxs(SwiperSlide, {
                                                        className: "swiper-slide onovo-reviews-item",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "text",
                                                                children: /*#__PURE__*/ _jsx("div", {
                                                                    "data-splitting": true,
                                                                    children: /*#__PURE__*/ _jsx("p", {
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: "“" + item.text + "”"
                                                                        }
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("h5", {
                                                                className: "title",
                                                                children: /*#__PURE__*/ _jsx("span", {
                                                                    "data-splitting": true,
                                                                    children: item.name
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "subtitle",
                                                                children: /*#__PURE__*/ _jsx("span", {
                                                                    "data-splitting": true,
                                                                    children: item.role
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "onovo-stars stars--small",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("i", {
                                                                        className: "fas fa-star"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("i", {
                                                                        className: "fas fa-star"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("i", {
                                                                        className: "fas fa-star"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("i", {
                                                                        className: "fas fa-star"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("i", {
                                                                        className: "fas fa-star"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }, `tst2-slide-${key}`))
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "js-reviews-carousel-navs",
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "onovo-prev js-reviews-carousel-prev onovo-hover-2 nav--white",
                                                    children: /*#__PURE__*/ _jsx("i", {})
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "onovo-next js-reviews-carousel-next onovo-hover-2 nav--white",
                                                    children: /*#__PURE__*/ _jsx("i", {})
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Testimonial2Slider)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4117:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_PageBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(163);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _library_team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3513);
/* harmony import */ var _components_sections_CallToAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7741);
/* harmony import */ var _components_sections_Partners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4759);
/* harmony import */ var _components_sliders_Testimonial2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4522);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_team__WEBPACK_IMPORTED_MODULE_4__, _components_sliders_Testimonial2__WEBPACK_IMPORTED_MODULE_7__]);
([_library_team__WEBPACK_IMPORTED_MODULE_4__, _components_sliders_Testimonial2__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Team = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        header: 2,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageBanner__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                pageTitle: "Meet our Team",
                pageDesc: "Meet our devoted company family."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "onovo-section gap-top-40 gap-bottom-140",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "my-container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "onovo-team-detail",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row gap-140 gap-top-60 gap-bottom-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        loading: "lazy",
                                        src: "/images/team/shahrukh.png",
                                        className: "team-detail-img",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                "data-splitting": true,
                                                "data-onovo-scroll": true,
                                                children: "Shahrukh Nadeem"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                "data-splitting": true,
                                                "data-onovo-scroll": true,
                                                children: "CEO"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "onovo-team-info",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "onovo-text",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            "data-splitting": true,
                                                            "data-onovo-scroll": true,
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                children: [
                                                                    "At Mywater, we are inspired by a simple yet profound idea: that everyone deserves access to clean, drinking water. Our journey began with a desire to make a positive impact on health of our people and the environment. We wanted to challenge the status quo and create a solution that would transform everyday tap water into something extraordinary.",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                    "At mywater, we’ve harnessed cutting-edge technology to revolutionize the way we think about hydration. Our innovative dispensers, equipped with IoT devices, not only purify water but also monitor its quality in real-time. This means our customers can enjoy the peace of mind that comes with knowing their water is fresh, safe, and infused with essential minerals.",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                    "But mywater is more than just a product; it’s a movement. We’re committed to reducing plastic waste and promoting sustainability. With each refill, our customers contribute to a healthier planet, and that’s something we can all be proud of. As we continue to grow and evolve, I want to thank you for being a part of our journey. Together, we are redefining hydration and creating a brighter future for generations to come. Here’s to enjoying every drop!"
                                                                ]
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "onovo-social-1 mb-5",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "onovo-social-link onovo-hover-2",
                                                        href: "https://www.linkedin.com/in/shahrukh-nadeem-74774246/",
                                                        title: "title",
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            "aria-hidden": "true",
                                                            className: "fab fa-linkedin-in"
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "onovo-section gap-bottom-140",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row gap-row align-center justify-content-center",
                        children: props.team.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-xs-12 col-sm-12 col-md-6 col-lg-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "onovo-team-two",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "onovo-team-two-item",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "image onovo-hover-3 onovo-hover-black-30",
                                                "data-onovo-overlay": true,
                                                "data-onovo-scroll": true,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        href: "",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: item.image,
                                                            alt: item.name
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "onovo-social-2",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                            children: item.social.map((link, link_key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: "onovo-social-link onovo-hover-2",
                                                                        href: link.link,
                                                                        title: link.title,
                                                                        target: "_blank",
                                                                        style: {
                                                                            background: "#fff"
                                                                        },
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                            "aria-hidden": "true",
                                                                            className: link.icon
                                                                        })
                                                                    }, `teamsocial-item-${link_key}`)
                                                                }, `team-item-${key}-link-${link_key}`))
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "desc",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        className: "title",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            href: `/team/${item.id}`,
                                                            className: "onovo-lnk",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                "data-splitting": true,
                                                                "data-onovo-scroll": true,
                                                                children: item.name
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "onovo-subtitle-1",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            "data-splitting": true,
                                                            "data-onovo-scroll": true,
                                                            children: item.role
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }, `team-item-${key}`))
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Partners__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Team);
async function getStaticProps() {
    const allTeam = (0,_library_team__WEBPACK_IMPORTED_MODULE_4__/* .getSortedTeamData */ .n8)();
    return {
        props: {
            team: allTeam
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 8548:
/***/ ((module) => {

module.exports = {};

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5893,7142,2806,95,163,4759,3513,7741,1422], () => (__webpack_exec__(4117)));
module.exports = __webpack_exports__;

})();