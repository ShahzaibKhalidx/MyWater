"use strict";
exports.id = 1413;
exports.ids = [1413];
exports.modules = {

/***/ 1413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Pricing)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/pricing.json
const pricing_namespaceObject = JSON.parse('{"Oc":"Promo Offers","TN":"Two Months Free Service<br>Promo Offer","ev":[{"active":0,"title":"Free Service","subtitle":"2 Months","price":"TERRA","icon":"fas fa-crown","list":[{"label":"OTC: PKR 55,000","included":1},{"label":"MRC: PKR 5,500","included":1},{"label":"Inclusive of Taxes","included":1},{"label":"Monthly rental will be charged after 2nd month","included":1}],"button":{"label":"Book Now","link":"/products/terra-ms-02"}},{"active":1,"title":"Free Service","subtitle":"2 Months","price":"NEO-02","icon":"fas fa-crown","list":[{"label":"OTC: PKR 45,000","included":1},{"label":"MRC: PKR 4,500","included":1},{"label":"Inclusive of Taxes","included":1},{"label":"Monthly rental will be charged after 2nd month","included":1}],"button":{"label":"Book Now","link":"/products/neo-02"}},{"active":0,"title":"Free Service","subtitle":"2 Months","price":"LIMITED EDITION","icon":"fas fa-crown","list":[{"label":"OTC: PKR 60,000","included":1},{"label":"MRC: PKR 5,500","included":1},{"label":"Inclusive of Taxes","included":1},{"label":"Monthly rental will be charged after 2nd month","included":1}],"button":{"label":"Book Now","link":"/products/limited-edition"}}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/Pricing.jsx



const PricingSection = ({ bg , hiddenHeading  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: `onovo-section onovo-section-${bg} gap-top-140 gap-bottom-140`,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    hiddenHeading == undefined && /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "onovo-heading gap-bottom-40",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "onovo-subtitle-1",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: pricing_namespaceObject.Oc
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: "onovo-title-2",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        dangerouslySetInnerHTML: {
                                            __html: pricing_namespaceObject.TN
                                        }
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row gap-row",
                        children: pricing_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-xs-12 col-sm-12 col-md-6 col-lg-4",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "onovo-pricing",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: item.active == 1 ? "onovo-pricing-item active--default" : "onovo-pricing-item",
                                        children: [
                                            item.active == 1 && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "pricing--badge onovo-text-white",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Recommended"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "title",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "name",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: item.title
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "subname",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: item.subtitle
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "price",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: item.price
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "desc",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "pricing--overlay onovo-hover-3 onovo-hover-black"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "image onovo-text-white",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            "aria-hidden": "true",
                                                            className: item.icon
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "list",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                                children: item.list.map((element, element_key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                        style: {
                                                                            "textDecoration": element.included == 0 ? "line-through" : "none"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "far fa-check-square"
                                                                            }),
                                                                            element.label
                                                                        ]
                                                                    }, `pricinglist${key}-item-${element_key}`))
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        className: "onovo-btn onovo-hover-btn btn--border btn--full btn--color",
                                                        href: item.button.link,
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: item.button.label
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }, `pricing-item-${key}`))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Pricing = (PricingSection);


/***/ })

};
;