(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 4204:
/***/ ((module) => {

// Exports
module.exports = {
	"parallaxSection": "sections_parallaxSection__TzIOF",
	"overlay": "sections_overlay__ZuisB",
	"content": "sections_content__Xb1RM",
	"heading": "sections_heading__hN3Yx",
	"subtitle": "sections_subtitle__kxx7x",
	"mobileSection": "sections_mobileSection__oT7_2",
	"contentWrapper": "sections_contentWrapper__Zx3vC",
	"textContent": "sections_textContent__kGK8t",
	"pointers": "sections_pointers__wfRY5",
	"pointerItem": "sections_pointerItem__ag_Pq",
	"storeLinks": "sections_storeLinks__wVGO8",
	"imageWrapper": "sections_imageWrapper__4_lxO",
	"phoneImage": "sections_phoneImage__u92hW",
	"phoneImage2": "sections_phoneImage2__350vh"
};


/***/ }),

/***/ 4424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/about.json
const about_namespaceObject = JSON.parse('{"TN":"Our Vision for a Healthier, Sustainable Future MyWater.","Oc":"THE FUTURE OF HYDRATION","Rx":{"S":"08","P":"Stages of Advanced Water Purification."},"ev":[{"title":"Our Vision","text":"Our mission is clear: deliver the purest form of mineral drinking water through innovative technology and sleek, modern design. But we don\'t stop at exceptional quality. We go beyond by integrating sustainable practices that contribute to a healthier lifestyle and a cleaner planet."},{"title":"Our Goal","text":"Joining MyWater® means more than enjoying clean water—it means becoming part of a movement. We are dedicated to improving health, protecting the environment, and simplifying hydration with our reliable, user-friendly solutions","button":{"label":"More About Us","link":"/about"}}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/sections/SurveyModal.jsx + 1 modules
var SurveyModal = __webpack_require__(7504);
;// CONCATENATED MODULE: ./src/components/sections/About.jsx





const AboutSection = ()=>{
    const [showSurvey, setShowSurvey] = (0,external_react_.useState)(false);
    const handleShowSurvey = ()=>setShowSurvey(true);
    const handleCloseSurvey = ()=>setShowSurvey(false);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
            className: "onovo-section gap-bottom-120 gap-top-120",
            style: {
                backgroundColor: "#214D9E"
            },
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-xs-12 col-sm-12 col-md-12 col-lg-8",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-xs-12 col-sm-12 col-md-8 col-lg-12",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "onovo-heading gap-bottom-40",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "onovo-subtitle-1 text-white",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: about_namespaceObject.Oc
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                            className: "onovo-title-2 text-white",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                dangerouslySetInnerHTML: {
                                                                    __html: about_namespaceObject.TN
                                                                }
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-xs-12 col-sm-12 col-md-4 col-lg-12 hide-on-desktop gap-bottom-60",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "onovo-number onovo-circle-text mrg-left",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "num onovo-text-white",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: about_namespaceObject.Rx.S
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "label onovo-text-white onovo-circle-text-label text-white",
                                                            children: about_namespaceObject.Rx.P
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "row",
                                        children: about_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "col-xs-12 col-sm-12 col-md-6 col-lg-6",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                        className: "text-uppercase text-white",
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "text-white",
                                                        dangerouslySetInnerHTML: {
                                                            __html: item.text
                                                        }
                                                    }),
                                                    item.button != undefined && /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                        className: "onovo-btn onovo-hover-btn",
                                                        style: {
                                                            backgroundColor: "#00F6FF"
                                                        },
                                                        href: "/about",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "arrow",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {})
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: item.button.label
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, `about-item-${key}`))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xs-12 col-sm-12 col-md-12 col-lg-4 hide-on-mobile",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "onovo-number onovo-circle-text mrg-right",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "num onovo-text-white",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: about_namespaceObject.Rx.S
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "label onovo-text-white onovo-circle-text-label",
                                            children: about_namespaceObject.Rx.P
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(SurveyModal/* default */.Z, {
                    show: showSurvey,
                    handleClose: handleCloseSurvey
                })
            ]
        })
    });
};
/* harmony default export */ const About = (AboutSection);


/***/ }),

/***/ 1360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4204);
/* harmony import */ var _styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SurveyModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7504);



 // Adjust the import based on your file structure

// import SavingsCalculatorModal from "./SavingCalculatorModal";
const CTASection = ()=>{
    const [showSurvey, setShowSurvey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // const [modalShow, setModalShow] = useState(false);
    const handleShowSurvey = ()=>setShowSurvey(true);
    const handleCloseSurvey = ()=>setShowSurvey(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4___default().parallaxSection),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4___default().overlay)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4___default().heading),
                        children: "Revolutionize Your Water Experience"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subtitle),
                        children: "Discover our advanced water filtration system."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        onClick: handleShowSurvey,
                        className: "onovo-btn onovo-hover-btn",
                        href: "",
                        passHref: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "arrow",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Book Now"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SurveyModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                show: showSurvey,
                handleClose: handleCloseSurvey
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CTASection);


/***/ }),

/***/ 2287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Counters)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/counters.json
const counters_namespaceObject = JSON.parse('{"e":[{"value":"66","label":"Litres Consumed","after":"M"},{"value":"7","label":"Bottles Saved","after":"M"},{"value":"7","label":"Happy Customers","after":"K"}]}');
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
;// CONCATENATED MODULE: ./src/components/sections/Counters.jsx



const CountersSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "onovo-section gap-top-140 gap-bottom-140",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: counters_namespaceObject.e.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-4 col-lg-4 align-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "onovo-counter",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "num onovo-text-white js-counter",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((external_react_countup_default()), {
                                            end: item.value,
                                            duration: 7,
                                            enableScrollSpy: true,
                                            scrollSpyOnce: true
                                        })
                                    }),
                                    item.after != "" && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "num-after onovo-text-white",
                                        children: item.after
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "label",
                                        children: item.label
                                    })
                                ]
                            })
                        }, `counters-item-${key}`))
                })
            })
        })
    });
};
/* harmony default export */ const Counters = (CountersSection);


/***/ }),

/***/ 208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4204);
/* harmony import */ var _styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
// components/ParallaxSection.js



 // Adjust the import based on your file structure

const MobileApp = ()=>{
    const appData = {
        title: "Experience the Pinnacle of Pure Water",
        imageUrl: "/images/services/app2.png",
        imageUrl2: "/images/services/app6.png" // Replace with actual path to image
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (_styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mobileSection),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentWrapper),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4___default().textContent),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: "Know Your Smart Technology"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Our app makes you smarter with your water."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4___default().pointers),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4___default().pointerItem),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-check-circle"
                                        }),
                                        " ",
                                        "Real-time health status of filters"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4___default().pointerItem),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-check-circle"
                                        }),
                                        " ",
                                        "Service history"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4___default().pointerItem),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-check-circle"
                                        }),
                                        " ",
                                        "Billing"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4___default().pointerItem),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-check-circle"
                                        }),
                                        " ",
                                        "Water quality scan"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4___default().pointerItem),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-check-circle"
                                        }),
                                        " ",
                                        "Amount of glasses consumed by the user"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4___default().pointerItem),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-check-circle"
                                        }),
                                        " ",
                                        "Number of bottles saved"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4___default().storeLinks),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "https://apps.apple.com/us/app/mywater-app/id1464485043",
                                    passHref: true,
                                    legacyBehavior: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            src: "/images/appstore.png",
                                            alt: "Download on Google Play",
                                            width: 120,
                                            height: 50
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "https://play.google.com/store/apps/details?id=com.mywater.customer.app&pli=1",
                                    passHref: true,
                                    legacyBehavior: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            src: "/images/playstore.png",
                                            alt: "Download on the App Store",
                                            width: 120,
                                            height: 50
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4___default().imageWrapper),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: appData.imageUrl2,
                        alt: "Phone app 2",
                        className: (_styles_scss_sections_module_scss__WEBPACK_IMPORTED_MODULE_4___default().phoneImage2)
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileApp);


/***/ }),

/***/ 7009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);




const PromotionCards = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "promo-container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "card-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "TERRA"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "ADVANCED.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "ALL IN ONE.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "SMART."
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Suitable for any home or office with a sleek design."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "onovo-btn onovo-hover-btn",
                                href: "/products/terra-02",
                                passHref: true,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "arrow",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Know More"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/images/products/promo-test.png",
                        alt: "Neo Product",
                        className: "product-image"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "card",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/images/products/promo-test2.png",
                        alt: "Terra Product",
                        className: "product-image"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "card-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "NEO"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "COMPACT.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "VERSATILE.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "SMART."
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Suitable for any small kitchen or can be used with an existing dispenser."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "onovo-btn onovo-hover-btn",
                                href: "/products/neo-02",
                                passHref: true,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "arrow",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Know More"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "card",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "card-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "LIMITED EDITION"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "ADVANCED.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "ALL IN ONE.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "SMART."
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Perfect for homes and small offices."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "onovo-btn onovo-hover-btn",
                                href: "/products/limited-edition",
                                passHref: true,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "arrow",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Know More"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/images/products/promo-test3.png",
                        alt: "Limited Product",
                        className: "product-image"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "card",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/images/products/promo-test4.png",
                        alt: "Solace Product",
                        className: "product-image"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "card-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "SOLACE"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "UNIVERSAL.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "VERSATILE.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "SMART."
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Perfect for corporate and institutes."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "onovo-btn onovo-hover-btn",
                                href: "/products/solace-02",
                                passHref: true,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "arrow",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Know More"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PromotionCards);


/***/ }),

/***/ 9729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Video)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/video.json
const video_namespaceObject = JSON.parse('{"PS":"Upgrade - You Water - Experience -","lX":"dWOjfNzjDIc","Md":"/images/vid.png"}');
// EXTERNAL MODULE: ./src/common/utilits.js
var utilits = __webpack_require__(6641);
;// CONCATENATED MODULE: ./src/components/sections/Video.jsx




const VideoSection = ()=>{
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* circleText */.V0)();
    }, []);
    const clickedVideoButton = (e)=>{
        e.preventDefault();
        e.target.parentNode.classList.add("active");
        let videoIframe = e.target.parentNode.querySelector(".js-video-iframe");
        let videoUrl = videoIframe.dataset.src;
        videoIframe.setAttribute("src", videoUrl);
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "onovo-section",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "gap-bottom-40 ",
                        children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            children: "What Our Clients Say About Us"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "onovo-video",
                        "data-onovo-overlay": true,
                        "data-onovo-scroll": true,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "image",
                                onClick: (e)=>clickedVideoButton(e),
                                style: {
                                    "backgroundImage": "url(" + video_namespaceObject.Md + ")"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("iframe", {
                                className: "js-video-iframe",
                                "data-src": "https://www.youtube.com/embed/" + video_namespaceObject.lX + "?showinfo=0&rel=0&autoplay=1"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "play onovo-circle-text",
                                onClick: (e)=>clickedVideoButton(e),
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "arrow"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "label onovo-text-black onovo-circle-text-label",
                                        children: video_namespaceObject.PS
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Video = (VideoSection);


/***/ }),

/***/ 8445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Video2)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/video2.json
const video2_namespaceObject = JSON.parse('{"PS":"Upgrade - You Water - Experience -","lX":"bGIiUEO51RQ","Md":"/images/services/3.png"}');
// EXTERNAL MODULE: ./src/common/utilits.js
var utilits = __webpack_require__(6641);
;// CONCATENATED MODULE: ./src/components/sections/Video2.jsx




const VideoSection2 = ()=>{
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* circleText */.V0)();
    }, []);
    const clickedVideoButton = (e)=>{
        e.preventDefault();
        e.target.parentNode.classList.add("active");
        let videoIframe = e.target.parentNode.querySelector(".js-video-iframe");
        let videoUrl = videoIframe.dataset.src;
        videoIframe.setAttribute("src", videoUrl);
    };
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            style: {
                backgroundColor: "#214D9E"
            },
            className: "onovo-section gap-bottom-120",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container video-section",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "gap-bottom-40 ",
                        children: /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            style: {
                                color: "#fff"
                            },
                            children: "How it Works | 8 Stages of Purification ⬇️"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "onovo-video",
                        "data-onovo-overlay": true,
                        "data-onovo-scroll": true,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "image",
                                onClick: (e)=>clickedVideoButton(e),
                                style: {
                                    "backgroundImage": "url(" + video2_namespaceObject.Md + ")"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("iframe", {
                                className: "js-video-iframe",
                                "data-src": "https://www.youtube.com/embed/" + video2_namespaceObject.lX + "?showinfo=0&rel=0&autoplay=1&controls=0&mute=1"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "play onovo-circle-text",
                                onClick: (e)=>clickedVideoButton(e),
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "arrow"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "label onovo-text-black onovo-circle-text-label",
                                        children: video2_namespaceObject.PS
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Video2 = (VideoSection2);


/***/ }),

/***/ 8955:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _library_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(745);
/* harmony import */ var _library_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7374);
/* harmony import */ var _library_team__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3513);
/* harmony import */ var _common_utilits__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6641);
/* harmony import */ var _components_sections_Services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5081);
/* harmony import */ var _components_sections_About__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4424);
/* harmony import */ var _components_sections_Video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9729);
/* harmony import */ var _components_sections_Video2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8445);
/* harmony import */ var _components_sections_Counters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2287);
/* harmony import */ var _components_sections_Partners__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4759);
/* harmony import */ var _components_sections_CTASection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1360);
/* harmony import */ var _components_sections_MobileApp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(208);
/* harmony import */ var _components_sections_PromotionCards__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7009);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_posts__WEBPACK_IMPORTED_MODULE_4__, _library_projects__WEBPACK_IMPORTED_MODULE_5__, _library_team__WEBPACK_IMPORTED_MODULE_6__]);
([_library_posts__WEBPACK_IMPORTED_MODULE_4__, _library_projects__WEBPACK_IMPORTED_MODULE_5__, _library_team__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









//import HeroSection from "@components/sections/Hero";


// import ShowcaseSection from "@components/sections/Showcase";
// import TeamSection from "@components/sections/Team";



// import CallToActionSection from "@components/sections/CallToAction";
// import CallToAction2Section from "@components/sections/CallToAction2";
// import LatestPostsSection from "@components/sections/LatestPosts";

// import Pointers from "../components/sections/Pointers";



// const HeroSection = dynamic( () => import("@components/sections/Hero"), { ssr: false } );
const Hero2Slider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "@components/sliders/Hero2"
        ]
    },
    ssr: false
});
const TickerSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "@components/sliders/Ticker"
        ]
    },
    ssr: false
});
const TestimonialSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "@components/sliders/Testimonial"
        ]
    },
    ssr: false
});
const HistorySlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "@components/sliders/History"
        ]
    },
    ssr: false
});
const Home1 = (props)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_common_utilits__WEBPACK_IMPORTED_MODULE_16__/* .circleText */ .V0)();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        header: 2,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Hero2Slider, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Services__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_About__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Video2__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HistorySlider, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_MobileApp__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TickerSlider, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_PromotionCards__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TestimonialSlider, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Video__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Counters__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_CTASection__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Partners__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    paddingTop: 2
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home1);
async function getStaticProps() {
    const allPosts = (0,_library_posts__WEBPACK_IMPORTED_MODULE_4__/* .getSortedPostsData */ .ld)();
    const allProjects = (0,_library_projects__WEBPACK_IMPORTED_MODULE_5__/* .getSortedProjectsData */ .ET)();
    const allTeam = (0,_library_team__WEBPACK_IMPORTED_MODULE_6__/* .getSortedTeamData */ .n8)();
    return {
        props: {
            posts: allPosts,
            projects: allProjects,
            team: allTeam
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2296:
/***/ ((module) => {

"use strict";
module.exports = require("formik");

/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 609:
/***/ ((module) => {

"use strict";
module.exports = require("react-countup");

/***/ }),

/***/ 1774:
/***/ ((module) => {

"use strict";
module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

"use strict";
module.exports = import("remark-html");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5893,7142,2636,5726,2806,95,7374,4759,745,3513,7504,5081], () => (__webpack_exec__(8955)));
module.exports = __webpack_exports__;

})();