import React, { useState } from 'react';
import './App.css';
import CardDisplay from './cardDisplay/cardDisplay';
import "./cardDisplay/cardDisplay.css";
import Form from './formDisplay/form';
import Submited from './submited/submited';

function App() {
  const [card, setCard] = useState({
    name: "",
    number: "",
    expMonth: "",
    expYear: "",
    cvc: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleConfirm = () => {
    setIsSubmitted(true);
  };

  const handleContinue = () => {
    setIsSubmitted(false);
    setCard({ name: "", number: "", expMonth: "", expYear: "", cvc: "" });
  };

  return (
    <div className="App">
      <CardDisplay card={card} />
      {!isSubmitted ? (
        <Form setCard={setCard} handleConfirm={handleConfirm} />
      ) : (
        <Submited handleContinue={handleContinue} />
      )}
    </div>
  );
}

export default App;
