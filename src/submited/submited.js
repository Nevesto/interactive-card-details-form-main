import React from "react";
import "./submited.css";
import img from "./icon-complete.svg";

function Submited({handleContinue}) {
    return (
        <div>
            <div className="submited">
                <div className="submited-header">
                    <img src={img} />
                    <h1>THANK YOU!</h1>
                    <p>We've added your card details</p>
                    <button onClick={handleContinue}>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Submited;