import React, { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [inputValue, setInputValue] = useState("32");

  const handleInputChanged = (event) => {
    const value = event.target.value;

    setInputValue(value);

    let errorText;
    if (isNaN(value) || value <= 0) {
      errorText = "Only positive numbers are allowed";
    } else {
      errorText = "";
      setCurrentNOE(value);
    }
    setErrorAlert(errorText);
  };

  return (
    <div id="events-number">
      <input type="text" value={inputValue} onChange={handleInputChanged} />
    </div>
  );
};

export default NumberOfEvents;
