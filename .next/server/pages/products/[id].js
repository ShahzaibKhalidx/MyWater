"use strict";
(() => {
var exports = {};
exports.id = 9304;
exports.ids = [9304];
exports.modules = {

/***/ 4747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sections_ComparisonChart)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/comparisonData.json
const comparisonData_namespaceObject = JSON.parse('[{"imageUrl":"/images/products/thechart.png"}]');
;// CONCATENATED MODULE: ./src/components/sections/ComparisonChart.jsx



const ComparisonChart = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "full-width-image__section gap-top-40",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "box",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        style: {
                            color: "#fff",
                            padding: "12px"
                        },
                        children: "Analysis of MyWater & Other Types of Water"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "imgBx4",
                        children: comparisonData_namespaceObject.map((chart, index)=>/*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: chart.imageUrl,
                                alt: index
                            }, index))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const sections_ComparisonChart = (ComparisonChart);


/***/ }),

/***/ 4392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FAQs)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap/Accordion"
var Accordion_ = __webpack_require__(2423);
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
;// CONCATENATED MODULE: ./src/components/sections/FAQs.jsx




const FAQComponent = ({ title , items  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "onovo-section gap-top-80 gap-bottom-40",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                title && /*#__PURE__*/ jsx_runtime.jsx("h2", {
                    className: "section-title text-center gap-bottom-40",
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime.jsx((Accordion_default()), {
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "onovo-faq-items",
                        children: items.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx((Accordion_default()).Item, {
                                eventKey: `faq-acc-${key}`,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "onovo-faq-item onovo-collapse-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((Accordion_default()).Header, {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h5", {
                                                className: "title onovo-collapse-btn",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: item.heading
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "arrow"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((Accordion_default()).Body, {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "onovo-text",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: item.content
                                                    }
                                                })
                                            })
                                        })
                                    ]
                                })
                            }, `faq-item-${key}`))
                    })
                })
            ]
        })
    });
};
FAQComponent.propTypes = {
    title: (external_prop_types_default()).string,
    items: external_prop_types_default().arrayOf(external_prop_types_default().shape({
        heading: (external_prop_types_default()).string.isRequired,
        content: (external_prop_types_default()).string.isRequired
    })).isRequired
};
FAQComponent.defaultProps = {
    title: null
};
/* harmony default export */ const FAQs = (FAQComponent);


/***/ }),

/***/ 2428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sections_LogoSlider2)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/logoData2.json
const logoData2_namespaceObject = JSON.parse('[{"src":"/images/logos/a.png","alt":"Logo 1"},{"src":"/images/logos/b.png","alt":"Logo 2"},{"src":"/images/logos/c.png","alt":"Logo 3"},{"src":"/images/logos/d.png","alt":"Logo 5"},{"src":"/images/logos/e.png","alt":"Logo 7"},{"src":"/images/logos/f.png","alt":"Logo 8"},{"src":"/images/logos/a.png","alt":"Logo 1"},{"src":"/images/logos/b.png","alt":"Logo 2"},{"src":"/images/logos/c.png","alt":"Logo 3"},{"src":"/images/logos/d.png","alt":"Logo 5"},{"src":"/images/logos/e.png","alt":"Logo 7"},{"src":"/images/logos/f.png","alt":"Logo 8"}]');
;// CONCATENATED MODULE: ./src/components/sections/LogoSlider2.jsx


 // Import the data from JSON file
const LogoSlider2 = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "logoSlider",
        style: {
            background: "#214D9E"
        },
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "logoSlideTrack",
            children: logoData2_namespaceObject.map((logo, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "slide",
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: logo.src,
                        alt: logo.alt
                    })
                }, index))
        })
    });
};
/* harmony default export */ const sections_LogoSlider2 = (LogoSlider2);


/***/ }),

/***/ 1771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);



function SavingsCalculatorModal({ show , handleClose  }) {
    const [currentCost, setCurrentCost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [bottlesPerWeek, setBottlesPerWeek] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [systemType, setSystemType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [pricePerBottle, setPricePerBottle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [systemMonthlyCost, setSystemMonthlyCost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        monthlyCost: 0,
        annualCost: 0,
        fiveYearsCost: 0,
        annualSavings: 0,
        fiveYearSavings: 0
    });
    // Calculate savings
    const calculateCosts = ()=>{
        const monthlyCost = parseFloat(pricePerBottle) * parseFloat(bottlesPerWeek) * 4;
        const annualCost = monthlyCost * 12;
        const fiveYearsCost = annualCost * 5;
        const monthlyRentalCost = parseFloat(systemMonthlyCost);
        const annualRentalCost = monthlyRentalCost * 12;
        const fiveYearRentalCost = annualRentalCost * 5;
        const annualSavings = annualCost - annualRentalCost;
        const fiveYearSavings = fiveYearsCost - fiveYearRentalCost;
        setResults({
            monthlyCost,
            annualCost,
            fiveYearsCost,
            annualSavings,
            fiveYearSavings
        });
    };
    // System types and their monthly costs
    const systemCosts = {
        "NEO-2": 4500,
        "TERRA-MS-02": 5500,
        "TERRA-MS-03": 7000,
        "SOLACE-02": 25000
    };
    const handleSystemTypeChange = (newType)=>{
        setSystemType(newType);
        const cost = systemCosts[newType] || 0; // Default to 0 if no type is selected or if it's an invalid type
        setSystemMonthlyCost(cost);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal, {
        show: show,
        onHide: handleClose,
        centered: true,
        size: "lg",
        className: "modalContainer",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Header, {
                closeButton: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Title, {
                    children: "Savings Calculator"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                            controlId: "waterCost",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
                                    children: "How much are you paying for bottle Water:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.InputGroup, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                        as: "select",
                                        value: pricePerBottle,
                                        onChange: (e)=>setPricePerBottle(e.target.value),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "",
                                                children: "Select"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "330",
                                                children: "330 PKR"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "300",
                                                children: "300 PKR"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "290",
                                                children: "290 PKR"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "280",
                                                children: "280 PKR"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    lg: 9,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                                        controlId: "bottleCount",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
                                                children: "How many Bottles of Water are you buying? (Per Week)"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                                                as: "select",
                                                value: bottlesPerWeek,
                                                onChange: (e)=>setBottlesPerWeek(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "Select"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "4",
                                                        children: "4"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "5",
                                                        children: "5"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "6",
                                                        children: "6"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "8",
                                                        children: "8"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "10",
                                                        children: "10"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    lg: 3,
                                    className: "align-self-end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        onClick: calculateCosts,
                                        children: "Calculate Cost"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "results-display",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
                                                    children: "Monthly Cost"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                                                    readOnly: true,
                                                    value: `PKR ${results.monthlyCost}`
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
                                                    children: "Annual Cost"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                                                    readOnly: true,
                                                    value: `PKR ${results.annualCost}`
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
                                                    children: "Five Years Cost"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                                                    readOnly: true,
                                                    value: `PKR ${results.fiveYearsCost}`
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                            controlId: "systemType",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
                                    children: "Select MyWater Purification Type"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                                    as: "select",
                                    value: systemType,
                                    onChange: (e)=>handleSystemTypeChange(e.target.value),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "",
                                            children: "Select System"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "NEO-2",
                                            children: "NEO-2"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "TERRA-MS-02",
                                            children: "TERRA-MS-02"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "TERRA-MS-03",
                                            children: "TERRA-MS-03"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "SOLACE-02",
                                            children: "SOLACE"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    lg: 8,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                                        controlId: "systemMonthlyCost",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
                                                children: "Monthly Rental Price"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                                                type: "number",
                                                placeholder: "Enter monthly rental cost",
                                                value: systemMonthlyCost,
                                                readOnly: true
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                    lg: 4,
                                    className: "align-self-end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        onClick: calculateCosts,
                                        children: "Calculate Savings"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "results-display",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
                                                    children: "Annual Saving"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                                                    readOnly: true,
                                                    value: `PKR ${results.annualSavings}`
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Label, {
                                                    children: "Five Years Saving"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                                                    readOnly: true,
                                                    value: `PKR ${results.fiveYearSavings}`
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal.Footer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "secondary",
                    onClick: handleClose,
                    children: "Close"
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SavingsCalculatorModal);


/***/ }),

/***/ 8012:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ImageView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9781);
/* harmony import */ var _library_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8654);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3015);
/* harmony import */ var _common_sliderProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1422);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4692);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9025);
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _src_components_sections_SurveyModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7504);
/* harmony import */ var _src_components_sections_SavingCalculatorModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1771);
/* harmony import */ var _library_projects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7374);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6158);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _src_components_sections_ComparisonChart__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4747);
/* harmony import */ var _src_components_sections_FAQs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4392);
/* harmony import */ var _src_components_sections_LogoSlider2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2428);
/* harmony import */ var _src_components_sections_Services4__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8874);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_services__WEBPACK_IMPORTED_MODULE_6__, swiper_react__WEBPACK_IMPORTED_MODULE_8__, _common_sliderProps__WEBPACK_IMPORTED_MODULE_9__, _library_projects__WEBPACK_IMPORTED_MODULE_17__]);
([_library_services__WEBPACK_IMPORTED_MODULE_6__, swiper_react__WEBPACK_IMPORTED_MODULE_8__, _common_sliderProps__WEBPACK_IMPORTED_MODULE_9__, _library_projects__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
























const ProjectDetail = (props)=>{
    const [postData, setPostData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.data);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const [showSurvey, setShowSurvey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleShowSurvey = ()=>setShowSurvey(true);
    const handleCloseSurvey = ()=>setShowSurvey(false);
    const [modalShow, setModalShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setPostData(props.data);
    }, [
        props.data
    ]);
    let prev_id, next_id, prev_key, next_key = 0;
    props.projects.forEach(function(item, key) {
        if (item.id == postData.id) {
            prev_key = key - 1;
            next_key = key + 1;
        }
    });
    props.projects.forEach(function(item, key) {
        if (key == prev_key) {
            prev_id = item.id;
        }
        if (key == next_key) {
            next_id = item.id;
        }
    });
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const origin =  false ? 0 : "";
    const shareUrl = `${origin}${asPath}`;
    console.log(shareUrl);
    const faqContent = {
        items: [
            {
                "heading": "Do you deliver water bottles?",
                "content": "No, we do not deliver water. We purify the tap water to provide clean and safe drinking water."
            },
            {
                "heading": "What is the difference between MyWater\xae and other water brands?",
                "content": "MyWater\xae does not use any artificial infused minerals and is plastic free. Our minerals are naturally sourced which gives your water unique taste from other branded water brands"
            },
            {
                "heading": "What are the monthly charges?",
                "content": "The charges are as under: <br> 1.	Neo: PKR 3500/ PM- + Inclusive Tax (Under sink Unit) <br> 2.	Terra: PKR 4500/-PM +Inclusive Tax (Dispenser Unit)"
            },
            {
                "heading": "What are the payment options?",
                "content": "We have different payment options for customer’s ease. Payments can be made by following options: <br>1.	Kuickpay <br>2.	Cheques (Payable to MyWater\xae.pk) <br>3.	Bank Transfer <br>4.	Cash Collections <br>5.	Online Payment Through Master/Visa"
            }
        ]
    };
    const [promo, setPromo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        header: 3,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "onovo-section gap-top-140 projectDetailSection",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row gap-bottom-80",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-xs-12 col-sm-12 col-md-12 col-lg-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                                    className: "onovo-section onovo-hero hero--product",
                                    children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(swiper_react__WEBPACK_IMPORTED_MODULE_8__.Swiper, {
                                        ..._common_sliderProps__WEBPACK_IMPORTED_MODULE_9__/* .sliderProps.heroProduct */ .b.heroProduct,
                                        className: "swiper-container js-hero-slider",
                                        key: postData.id,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "swiper-wrapper",
                                                children: postData.slides.items.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_8__.SwiperSlide, {
                                                        className: "swiper-slide",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "onovo-hero-slide-item",
                                                            children: [
                                                                item.video == undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "image",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                        src: item.image.desktop,
                                                                        fill: true
                                                                    })
                                                                }),
                                                                item.video != undefined && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "image video",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                                            autoPlay: true,
                                                                            muted: true,
                                                                            loop: true,
                                                                            playsInline: true,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                                                                src: item.video,
                                                                                type: "video/mp4"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "ovrl",
                                                                            style: {
                                                                                "opacity": "0.95"
                                                                            }
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }, `h2s-slide-${key}`))
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "onovo-navs js-hero-slider-navs",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "onovo-prev js-hero-slider-prev nav--white onovo-hover-2",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {})
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "onovo-paginations-container pag--white",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "onovo-paginations js-hero-pagination"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "swiper-nav-active"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "onovo-next js-hero-slider-next nav--white onovo-hover-2",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {})
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-content-center pt-4",
                                children: postData.contentHtml != "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "onovo-text",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "bigTitle",
                                                children: postData.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "tagline",
                                                children: postData.tagline
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "reviewStars",
                                                children: [
                                                    Array.from({
                                                        length: 4
                                                    }, (v, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: `fa${i < Math.floor(postData.review_stars) ? "s" : "r"} fa-star`,
                                                            "aria-hidden": "true"
                                                        }, i)),
                                                    postData.review_stars % 1 !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fas fa-star-half-alt",
                                                        "aria-hidden": "true"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_13___default().Container), {
                                                    id: "list-group-tabs-example",
                                                    defaultActiveKey: "#link1",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            className: "price_tabs",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                                sm: 12,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_13___default().Content), {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_13___default().Pane), {
                                                                            eventKey: "#link1",
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                        style: {
                                                                                            display: "inline"
                                                                                        },
                                                                                        children: postData.price
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: " (Exclusive of Taxes)"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_13___default().Pane), {
                                                                            eventKey: "#link2",
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                        style: {
                                                                                            display: "inline"
                                                                                        },
                                                                                        children: postData.price_mrc
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: " (Exclusive of Taxes)"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            className: "price_heading",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                                    sm: 6,
                                                                    lg: 4,
                                                                    md: 6,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_11___default().Item), {
                                                                            action: true,
                                                                            href: "#link1",
                                                                            children: "OTC"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                                    sm: 6,
                                                                    lg: 4,
                                                                    md: 6,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_11___default().Item), {
                                                                            action: true,
                                                                            href: "#link2",
                                                                            children: "MRC"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "shortDescription",
                                                children: postData.short_description
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "shortDescription",
                                                children: postData.short_description2
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_13___default().Container), {
                                                    id: "yearly-programs",
                                                    style: {
                                                        display: `${postData.noyear}`
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            className: "price_heading",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                                    sm: 6,
                                                                    lg: 4,
                                                                    md: 6,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_11___default().Item), {
                                                                            action: true,
                                                                            href: "#three-year",
                                                                            children: "3-Years Plan"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                                    sm: 6,
                                                                    lg: 4,
                                                                    md: 6,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_11___default().Item), {
                                                                            action: true,
                                                                            href: "#five-year",
                                                                            children: "5-Years Plan"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_12___default()), {
                                                            className: "price_tabs",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                                sm: 12,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_13___default().Content), {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_13___default().Pane), {
                                                                            eventKey: "#three-year",
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                                        children: postData.three_year
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: postData.note_1
                                                                                    })
                                                                                ]
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_13___default().Pane), {
                                                                            eventKey: "#five-year",
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                                        children: postData.five_year
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: postData.note_2
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }, postData.id)
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "iconSection",
                                                children: postData.details_icon.items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "iconColumn",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: item.icon,
                                                                alt: item.label,
                                                                className: "icon"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                className: "iconTitle",
                                                                children: item.label
                                                            })
                                                        ]
                                                    }, index))
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                dangerouslySetInnerHTML: {
                                                    __html: postData.contentHtml
                                                }
                                            }),
                                            postData.contentHtml != "" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.Card, {
                                                className: "my-3 p-3 rounded promo_offer text-left",
                                                style: {
                                                    display: `${postData.display}`
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.Card.Header, {
                                                        as: "h5",
                                                        children: "SPECIAL OFFER!"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.Card.Body, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.Card.Title, {
                                                                children: postData.promo_title
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.Card.Text, {
                                                                children: postData.promo_desc
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.Card.Text, {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                                        children: "Offer:"
                                                                    }),
                                                                    " ",
                                                                    postData.promo_offer
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, postData.id),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "buttonGroup",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        className: "onovo-btn onovo-hover-btn ",
                                                        href: "https://wa.me/021111192837",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "arrow",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Buy Now"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        onClick: handleShowSurvey,
                                                        className: "onovo-btn onovo-hover-btn ",
                                                        href: postData.id,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "arrow",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Book Survey"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                        onClick: ()=>setModalShow(true),
                                                        className: "onovo-btn onovo-hover-btn ",
                                                        href: postData.id,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "arrow",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Saving Calculator"
                                                            })
                                                        ]
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
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_sections_ComparisonChart__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_sections_Services4__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                services: props.services
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_sections_LogoSlider2__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_sections_FAQs__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                title: "Frequently Asked Questions",
                items: faqContent.items
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "onovo-section",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "onovo-page-navigation",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "onovo-page-navigation-content",
                            children: [
                                prev_id != 0 && prev_id != undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: `/projects/${prev_id}`,
                                    className: "page-navigation__prev",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "onovo-prev onovo-hover-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {})
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "/projects",
                                    className: "page-navigation__posts",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fas fa-th"
                                    })
                                }),
                                next_id != 0 && next_id != undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: `/projects/${next_id}`,
                                    className: "page-navigation__next",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "onovo-next onovo-hover-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {})
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageView__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_sections_SurveyModal__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                show: showSurvey,
                handleClose: handleCloseSurvey
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_sections_SavingCalculatorModal__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                show: modalShow,
                handleClose: ()=>setModalShow(false)
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectDetail);
async function getStaticPaths() {
    const paths = (0,_library_projects__WEBPACK_IMPORTED_MODULE_17__/* .getAllProjectsIds */ .RH)();
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const postData = await (0,_library_projects__WEBPACK_IMPORTED_MODULE_17__/* .getProjectData */ .xU)(params.id);
    const allProjects = await (0,_library_projects__WEBPACK_IMPORTED_MODULE_17__/* .getSortedProjectsData */ .ET)();
    const allServices = (0,_library_services__WEBPACK_IMPORTED_MODULE_6__/* .getSortedServicesData */ .M9)();
    return {
        props: {
            data: postData,
            projects: allProjects,
            services: allServices
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

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

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 2423:
/***/ ((module) => {

module.exports = require("react-bootstrap/Accordion");

/***/ }),

/***/ 7511:
/***/ ((module) => {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ 4692:
/***/ ((module) => {

module.exports = require("react-bootstrap/ListGroup");

/***/ }),

/***/ 8907:
/***/ ((module) => {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ 9025:
/***/ ((module) => {

module.exports = require("react-bootstrap/Tab");

/***/ }),

/***/ 6158:
/***/ ((module) => {

module.exports = require("react-share");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5893,7142,2636,5726,2806,95,7374,8654,7504,1422,8874], () => (__webpack_exec__(8012)));
module.exports = __webpack_exports__;

})();