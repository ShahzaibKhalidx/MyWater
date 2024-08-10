"use strict";
exports.id = 8874;
exports.ids = [8874];
exports.modules = {

/***/ 8874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services4)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/services-4.json
const services_4_namespaceObject = JSON.parse('{"Oc":"Our Process","TN":"Powerful & Natural Purification","jX":6}');
;// CONCATENATED MODULE: ./src/components/sections/Services4.jsx




const Services4Section = ({ services  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "onovo-section gap-bottom-140 gap-top-40",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "onovo-heading gap-bottom-40",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "onovo-subtitle-1 text-center",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: services_4_namespaceObject.Oc
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "onovo-title-2 text-center",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: services_4_namespaceObject.TN
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "onovo-services-list",
                        children: services.slice(0, services_4_namespaceObject.jX).map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "onovo-service-item-list",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "onovo-service-item-list-inner",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "image onovo-hover-1",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: `/services/${item.id}`,
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: item.icon,
                                                    alt: item.title
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "num",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                children: [
                                                    " 0",
                                                    key + 1,
                                                    ". "
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                            className: "title",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: `/services/${item.id}`,
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: item.title
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "onovo-text",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: item.short
                                                })
                                            })
                                        })
                                    ]
                                })
                            }, `services4-item-${key}`))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Services4 = (Services4Section);


/***/ })

};
;