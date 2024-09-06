import React from "react";
import frontCardDisplay from "./bg-card-front.png"
import backCardDisplay from "./bg-card-back.png"
import cardLogo from "./card-logo.svg"

function CardDisplay({ card }) {
    return (
        <div>
            <div className="cardDisplay">
                <img src={frontCardDisplay} />
                <img src={backCardDisplay} />
            </div>
            <img src={cardLogo} className="cardLogo" />
            <div className="cardInfos">
                <p className="cardNumber">{card.number || "0000 0000 0000 0000"}</p>
                <div className="cardInfosBottom">
                    <p className="cardName">{card.name || "Jane Appleseed"}</p>
                    <p className="cardDate">
                        {card.expMonth || "00"}/{card.expYear || "00"}
                    </p>
                </div>
                <div className="backCardNumber">{card.cvc || "000"}</div>
            </div>
        </div>
    );
}

export default CardDisplay;