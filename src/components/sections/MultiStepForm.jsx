import { Formik, Form, Field } from 'formik';
import { useState } from 'react';


const MultiStepForm = () => {
    const [step, setStep] = useState(0);  // Current step state
    const [formData, setFormData] = useState({
        problem: [],
        source: '',
        name: '',
        city: '',
        phone: '',
        email: ''
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = async (values, { resetForm }) => {
        const formEndpoint = "https://formspree.io/f/xgvwoblq"; // Replace {your_form_id} with your actual Formspree form ID

        try {
            const response = await fetch(formEndpoint, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            if (response.ok) { // Check if POST was successful
                alert('Form submitted successfully!');
                resetForm(); // Optionally reset the form
            } else {
                const error = await response.text();
                throw new Error(error);
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('An error occurred. Please try again!');
        }
    };

    return (
        <div className="container mt-4 mb-2 text-center multistepForm">
            <Formik
                initialValues={formData}
                validate = { values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        {step === 0 && (
                            <div>
                                <div id="checkbox-group">What is the problem with your current bottled water?</div>
                                <div role="group" aria-labelledby="checkbox-group" className="d-flex flex-wrap justify-content-center">
                                    {[
                                        { name: "Pricing", icon: "fa fa-money-bill-wave" },
                                        { name: "Hassle", icon: "fa fa-user-secret" },
                                        { name: "Quality", icon: "fa fa-thumbs-up" },
                                        { name: "Plastic Waste", icon: "fa fa-trash" }
                                    ].map((option, index) => (
                                        <label key={index} className="btn option_icon m-2 p-4">
                                            <Field 
                                                type="checkbox"
                                                name="problem"
                                                required
                                                value={option.name}
                                                onChange={e => {
                                                    const set = new Set(values.problem);
                                                    if (set.has(option.name)) {
                                                        set.delete(option.name);
                                                    } else {
                                                        set.add(option.name);
                                                    }
                                                    setFieldValue("problem", Array.from(set));
                                                }}
                                            /> {option.name}
                                            <i className={`${option.icon} fa-2x d-block mt-2`}></i>
                                        </label>
                                    ))}
                                </div>
                                <button type="button" className="btn form_btn mt-2" onClick={nextStep}>Next</button>
                            </div>
                        )}
                        {step === 1 && (
                            <div>
                                <div id="radio-group" className="mb-4">How Did You Hear About Us?</div>
                                <div role="group" aria-labelledby="radio-group" className="mb-3">
                                    {['Event', 'Workplace', 'At someone\'s home','Other'].map((option, index) => (
                                        <label key={index} className="btn option_icon m-2">
                                            <Field required type="radio" name="source" value={option} />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                                <button type="button" className="btn" onClick={prevStep}>Back</button>
                                <button type="button" className="btn form_btn" onClick={nextStep}>Next</button>
                            </div>
                        )}
                        {step === 2 && (
                            <div>
                                <div className='mb-4'>Fill-in Your contact information</div>
                                <Field name="name" required type="text" placeholder="Type Your Full Name Here" className="form-control mb-2" />
                                <Field name="city" required type="text" placeholder="Type Your City Name Here" className="form-control mb-2" />
                                <Field name="phone" required type="text" placeholder="+92 3__-_______" className="form-control mb-2" />
                                <Field name="email" type="email" placeholder="Type Your E-mail Address Here" className="form-control mb-2" />
                                <button type="button" className="btn" onClick={prevStep}>Back</button>
                                <button type="submit" className="form_btn">Finish</button>
                            </div>
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default MultiStepForm;