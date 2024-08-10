"use strict";
exports.id = 5081;
exports.ids = [5081];
exports.modules = {

/***/ 5081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/services.json
const services_namespaceObject = JSON.parse('{"e":[{"image":"/images/serv-icon1.png","title":"Purification","text":"Experience Freshness on Demand: MyWater transforms tap water into refreshing mineral water in moments—not days. Say goodbye to the risks of pre-stored, plastic-bottled water.","link":""},{"image":"/images/serv-icon2.png","title":"No Bottles","text":"Unbottle Your Hydration: Enjoy endless mineral water with our hassle-free monthly subscription. We handle everything from filter replacements to system maintenance, so you can sip without worry.","link":""},{"image":"/images/serv-icon3.png","title":"Cost Saving","text":"Quench More, Spend Less: Cut your monthly expenses on bottled water by up to 70%. Invest in sustainability and savings with our smart purification technology","link":""}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/common/utilits.js
var utilits = __webpack_require__(6641);
;// CONCATENATED MODULE: ./src/components/sections/Services.jsx





const ServicesSection = ()=>{
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* servicesHover */.jx)();
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "onovo-section gap-top-140 gap-bottom-140",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container-xl",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row onovo-services-grid-fw",
                    children: services_namespaceObject.e.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: key == 1 ? "onovo-service-grid-item onovo-hover-1 active active--default" : "onovo-service-grid-item onovo-hover-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "image",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: item.link,
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                decoding: "async",
                                                src: item.image,
                                                alt: item.title
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                        className: "onovo-title-3",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: item.title
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "onovo-text",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "service-text",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: item.text
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "onovo-bubble",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "bubble-1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "bubble-2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "bubble-3"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, `services-item-${key}`))
                })
            })
        })
    });
};
/* harmony default export */ const Services = (ServicesSection);


/***/ })

};
;