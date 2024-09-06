import React, { useState } from "react";
import "./form.css";

function Form({ setCard, handleConfirm }) {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        expMonth: "",
        expYear: "",
        cvc: ""
    });

    const [errors, setErrors] = useState({}); // Estado para armazenar os erros

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => {
            const updatedForm = {
                ...prevState,
                [name]: value
            };
            setCard(updatedForm);
            return updatedForm;
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = "Can't be blank";
        }

        const cardNumberRegex = /^[0-9\s]+$/;
        if (!formData.number.trim()) {
            newErrors.number = "Can't be blank";
        } else if (!cardNumberRegex.test(formData.number)) {
            newErrors.number = "Wrong format, numbers only";
        }

        if (!formData.expMonth.trim() || !formData.expYear.trim()) {
            newErrors.expDate = "Can't be blank";
        }

        if (!formData.cvc.trim()) {
            newErrors.cvc = "Can't be blank";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            handleConfirm();
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <p>CARDHOLDER NAME</p>
                    <input
                        type="text"
                        placeholder="e.g. Jane Appleseed"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={errors.name ? "error" : ""}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}

                    <p>CARD NUMBER</p>
                    <input
                        type="text"
                        placeholder="Card Number"
                        name="number"
                        value={formData.number}
                        onChange={handleInputChange}
                        className={errors.number ? "error" : ""}
                    />
                    {errors.number && <span className="error-message">{errors.number}</span>}

                    <div className="date-cvv">
                        <div className="exp-date">
                            <p>EXP. DATE (MM/YY)</p>
                            <input
                                type="text"
                                placeholder="MM"
                                name="expMonth"
                                value={formData.expMonth}
                                onChange={handleInputChange}
                                className={errors.expDate ? "error" : ""}
                            />
                            <input
                                type="text"
                                placeholder="YY"
                                name="expYear"
                                value={formData.expYear}
                                onChange={handleInputChange}
                                className={errors.expDate ? "error" : ""}
                            />
                        </div>

                        <div className="cvv">
                            <p>CVV</p>
                            <input
                                type="text"
                                placeholder="e.g. 123"
                                name="cvc"
                                value={formData.cvc}
                                onChange={handleInputChange}
                                className={errors.cvc ? "error" : ""}
                            />
                        </div>
                    </div>
                    {errors.expDate && <span className="error-message">{errors.expDate}</span>}
                    <button type="submit">Confirm</button>
                    {errors.cvc && <span className="error-message fix-cvc">{errors.cvc}</span>}
                </form>
            </div>
        </div>
    );
}

export default Form;
