"use strict";
exports.id = 7504;
exports.ids = [7504];
exports.modules = {

/***/ 7504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sections_SurveyModal)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/survey-core/defaultV2.css
var defaultV2 = __webpack_require__(7462);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/sections/MultiStepForm.jsx



const MultiStepForm = ()=>{
    const [step, setStep] = (0,external_react_.useState)(0); // Current step state
    const [formData, setFormData] = (0,external_react_.useState)({
        problem: [],
        source: "",
        name: "",
        city: "",
        phone: "",
        email: ""
    });
    const nextStep = ()=>setStep(step + 1);
    const prevStep = ()=>setStep(step - 1);
    const handleSubmit = async (values, { resetForm  })=>{
        const formEndpoint = "https://formspree.io/f/meojgend"; // Replace {your_form_id} with your actual Formspree form ID
        try {
            const response = await fetch(formEndpoint, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });
            if (response.ok) {
                alert("Form submitted successfully!");
                resetForm(); // Optionally reset the form
            } else {
                const error = await response.text();
                throw new Error(error);
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("An error occurred. Please try again!");
        }
    };
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "container mt-4 mb-2 text-center multistepForm",
        children: /*#__PURE__*/ jsx_runtime.jsx(external_formik_.Formik, {
            initialValues: formData,
            validate: (values)=>{
                const errors = {};
                if (!values.email) {
                    errors.email = "Required";
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = "Invalid email address";
                }
                return errors;
            },
            onSubmit: handleSubmit,
            children: ({ values , setFieldValue  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(external_formik_.Form, {
                    children: [
                        step === 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    id: "checkbox-group",
                                    children: "What is the problem with your current bottled water?"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    role: "group",
                                    "aria-labelledby": "checkbox-group",
                                    className: "d-flex flex-wrap justify-content-center",
                                    children: [
                                        {
                                            name: "Pricing",
                                            icon: "fa fa-money-bill-wave"
                                        },
                                        {
                                            name: "Hassle",
                                            icon: "fa fa-user-secret"
                                        },
                                        {
                                            name: "Quality",
                                            icon: "fa fa-thumbs-up"
                                        },
                                        {
                                            name: "Plastic Waste",
                                            icon: "fa fa-trash"
                                        }
                                    ].map((option, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "btn option_icon m-2 p-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(external_formik_.Field, {
                                                    type: "checkbox",
                                                    name: "problem",
                                                    required: true,
                                                    value: option.name,
                                                    onChange: (e)=>{
                                                        const set = new Set(values.problem);
                                                        if (set.has(option.name)) {
                                                            set.delete(option.name);
                                                        } else {
                                                            set.add(option.name);
                                                        }
                                                        setFieldValue("problem", Array.from(set));
                                                    }
                                                }),
                                                " ",
                                                option.name,
                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: `${option.icon} fa-2x d-block mt-2`
                                                })
                                            ]
                                        }, index))
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    type: "button",
                                    className: "btn form_btn mt-2",
                                    onClick: nextStep,
                                    children: "Next"
                                })
                            ]
                        }),
                        step === 1 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    id: "radio-group",
                                    className: "mb-4",
                                    children: "How Did You Hear About Us?"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    role: "group",
                                    "aria-labelledby": "radio-group",
                                    className: "mb-3",
                                    children: [
                                        "Event",
                                        "Workplace",
                                        "At someone's home",
                                        "Other"
                                    ].map((option, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                            className: "btn option_icon m-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(external_formik_.Field, {
                                                    required: true,
                                                    type: "radio",
                                                    name: "source",
                                                    value: option
                                                }),
                                                option
                                            ]
                                        }, index))
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    type: "button",
                                    className: "btn",
                                    onClick: prevStep,
                                    children: "Back"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    type: "button",
                                    className: "btn form_btn",
                                    onClick: nextStep,
                                    children: "Next"
                                })
                            ]
                        }),
                        step === 2 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mb-4",
                                    children: "Fill-in Your contact information"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_formik_.Field, {
                                    name: "name",
                                    required: true,
                                    type: "text",
                                    placeholder: "Type Your Full Name Here",
                                    className: "form-control mb-2"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_formik_.Field, {
                                    name: "city",
                                    required: true,
                                    type: "text",
                                    placeholder: "Type Your City Name Here",
                                    className: "form-control mb-2"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_formik_.Field, {
                                    name: "phone",
                                    required: true,
                                    type: "text",
                                    placeholder: "+92 3__-_______",
                                    className: "form-control mb-2"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(external_formik_.Field, {
                                    name: "email",
                                    type: "email",
                                    placeholder: "Type Your E-mail Address Here",
                                    className: "form-control mb-2"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    type: "button",
                                    className: "btn",
                                    onClick: prevStep,
                                    children: "Back"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    type: "submit",
                                    className: "form_btn",
                                    children: "Finish"
                                })
                            ]
                        })
                    ]
                })
        })
    });
};
/* harmony default export */ const sections_MultiStepForm = (MultiStepForm);

;// CONCATENATED MODULE: ./src/components/sections/SurveyModal.jsx




// import emailjs from '@emailjs/browser'
const SurveyModal = ({ show , handleClose  })=>{
    // const model = new Model(surveyJson);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_bootstrap_.Modal, {
        show: show,
        onHide: handleClose,
        centered: true,
        size: "lg",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(external_react_bootstrap_.Modal.Header, {
                closeButton: true,
                children: /*#__PURE__*/ jsx_runtime.jsx(external_react_bootstrap_.Modal.Title, {
                    children: "Book Now"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(external_react_bootstrap_.Modal.Body, {
                children: /*#__PURE__*/ jsx_runtime.jsx(sections_MultiStepForm, {})
            })
        ]
    });
};
/* harmony default export */ const sections_SurveyModal = (SurveyModal);


/***/ })

};
;