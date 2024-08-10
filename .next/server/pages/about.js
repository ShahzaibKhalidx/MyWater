"use strict";
(() => {
var exports = {};
exports.id = 2521;
exports.ids = [2521];
exports.modules = {

/***/ 4619:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/awards.json
const awards_namespaceObject = {};
;// CONCATENATED MODULE: ./src/components/sections/Awards.jsx


const AwardsSection = ()=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("section", {
            className: "onovo-section gap-bottom-140",
            children: /*#__PURE__*/ _jsxs("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "onovo-heading",
                        children: /*#__PURE__*/ _jsx("h5", {
                            className: "onovo-subtitle-1",
                            children: /*#__PURE__*/ _jsx("span", {
                                dangerouslySetInnerHTML: {
                                    __html: Data.subtitle
                                }
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "row gap-row",
                        children: Data.items.map((item, key)=>/*#__PURE__*/ _jsxs("div", {
                                className: "col-xs-12 col-sm-12 col-md-4 col-lg-4",
                                children: [
                                    /*#__PURE__*/ _jsx("p", {
                                        children: /*#__PURE__*/ _jsx("img", {
                                            src: item.image,
                                            alt: item.alt
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("h5", {
                                        className: "onovo-title-1",
                                        children: item.value
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        dangerouslySetInnerHTML: {
                                            __html: item.label
                                        }
                                    })
                                ]
                            }, `awards-item-${key}`))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Awards = ((/* unused pure expression or super */ null && (AwardsSection)));


/***/ }),

/***/ 5439:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95);
/* harmony import */ var _library_team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3513);
/* harmony import */ var _library_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8654);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_utilits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6641);
/* harmony import */ var _components_PageBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(163);
/* harmony import */ var _components_sections_Team2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5434);
/* harmony import */ var _components_sections_Partners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4759);
/* harmony import */ var _components_sections_Awards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4619);
/* harmony import */ var _components_sections_Services4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8874);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_team__WEBPACK_IMPORTED_MODULE_4__, _library_services__WEBPACK_IMPORTED_MODULE_5__]);
([_library_team__WEBPACK_IMPORTED_MODULE_4__, _library_services__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const HistorySlider = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "about.jsx -> " + "@components/sliders/History"
        ]
    },
    ssr: false
});
const Testimonial2Slider = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "about.jsx -> " + "@components/sliders/Testimonial2"
        ]
    },
    ssr: false
});
const About = (props)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_common_utilits__WEBPACK_IMPORTED_MODULE_12__/* .circleText */ .V0)();
    }, []);
    const clickedVideoButton = (e)=>{
        e.preventDefault();
        e.target.parentNode.classList.add("active");
        let videoIframe = e.target.parentNode.querySelector(".js-video-iframe");
        let videoUrl = videoIframe.dataset.src;
        videoIframe.setAttribute("src", videoUrl);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        header: 2,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageBanner__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                pageTitle: "About Us",
                pageDesc: "MyWater, Turn your tap water into purified, mineralized, still or sparkling water."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "onovo-section gap-top-140 gap-bottom-140",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-12 col-lg-8",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "onovo-heading gap-bottom-60",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "onovo-subtitle-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: " Welcome to MyWater "
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "onovo-title-2",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        " PAKISTAN’S FIRST SMART ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        "WATER PURIFIER  "
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "onovo-text",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "MyWater™ provides the highest quality of mineral drinking water using cutting edge technology and modern design. Our water purifier is patented making it the smartest water system in the world. Through the use of sensors and our smart app you can receive live updates and leave the responsibility of maintenance to our team. "
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-12 col-lg-3 offset-lg-1 hide-on-mobile",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/images/67.png",
                                        alt: ""
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row gap-row gap-bottom-100",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-4 col-lg-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "onovo-counter",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "num onovo-text-white js-counter",
                                                "data-end-value": "7",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    end: "7",
                                                    duration: 7,
                                                    enableScrollSpy: true,
                                                    scrollSpyOnce: true
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "num-after onovo-text-white",
                                                children: " M "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "label",
                                                children: " Bottles Saved"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-4 col-lg-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "onovo-counter",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "num onovo-text-white js-counter",
                                                "data-end-value": "66",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    end: "66",
                                                    duration: 7,
                                                    enableScrollSpy: true,
                                                    scrollSpyOnce: true
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "num-after onovo-text-white",
                                                children: " M "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "label",
                                                children: " Litres Consumed "
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-4 col-lg-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "onovo-counter",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "num onovo-text-white js-counter",
                                                "data-end-value": "7",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    end: "7",
                                                    duration: 7,
                                                    enableScrollSpy: true,
                                                    scrollSpyOnce: true
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "num-after onovo-text-white",
                                                children: " K "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "label",
                                                children: " Happy Customers "
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "onovo-video",
                            "data-onovo-overlay": true,
                            "data-onovo-scroll": true,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "image",
                                    onClick: (e)=>clickedVideoButton(e),
                                    style: {
                                        "backgroundImage": "url(/images/vid.png)"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                    className: "js-video-iframe",
                                    "data-src": "https://www.youtube.com/embed/dWOjfNzjDIc?showinfo=0&rel=0&autoplay=1"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "play onovo-circle-text",
                                    onClick: (e)=>clickedVideoButton(e),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "arrow"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "label onovo-text-black onovo-circle-text-label",
                                            children: "Upgrade - You Water - Experience - "
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row gap-top-100",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-4 col-lg-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "text-uppercase",
                                        children: "Our Mission"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-8 col-lg-9",
                                    children: "To serve the highest quality of mineral drinking water using cutting edge technology and modern design. Our products not only give you one of the cleanest drinking water available but also provides you with an experience of a healthier lifestyle by reducing usage of plastic bottles. Your journey with mywater\xae will transform perspectives on matters such as health, environmental concern and comfort in all aspects of your life. We want to set better standards of a hassle-free service for our customers."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row gap-top-60",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-4 col-lg-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: "text-uppercase",
                                        children: "Quality Policy"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-8 col-lg-9",
                                    children: "At Mywater, we are committed to providing the highest quality of mineral drinking water using cutting edge technology and modern design by eliminating the use of plastic bottles. We are dedicated to continuously improve our Quality Management System to comply with ISO 9001 standard and other regulatory requirements by setting attainable and measurable quality objectives to ensure customer satisfaction and enhance our reputation as a reliable and sustainable global manufacturer and distributor of smart home appliances."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row gap-top-100",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://play.google.com/store/apps/details?id=com.mywater.customer.app&pli=1",
                                        className: "mfp-image",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/about1.jpg",
                                            alt: ""
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-6 col-lg-6 gap-top-60",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/products",
                                        className: "mfp-image",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/images/about2.jpg",
                                            alt: ""
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Services4__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                services: props.services
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HistorySlider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Testimonial2Slider, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Partners__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);
async function getStaticProps() {
    const allTeam = (0,_library_team__WEBPACK_IMPORTED_MODULE_4__/* .getSortedTeamData */ .n8)();
    const allServices = (0,_library_services__WEBPACK_IMPORTED_MODULE_5__/* .getSortedServicesData */ .M9)();
    return {
        props: {
            team: allTeam,
            services: allServices
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

/***/ 609:
/***/ ((module) => {

module.exports = require("react-countup");

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5893,7142,2806,95,163,4759,8654,3513,5434,8874], () => (__webpack_exec__(5439)));
module.exports = __webpack_exports__;

})();