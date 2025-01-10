import React, { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [inputValue, setInputValue] = useState("32");

  const handleInputChanged = (event) => {
    const value = event.target.value;

    setInputValue(value);
    setCurrentNOE(value);
  };

  return (
    <div id="events-number">
      <input type="text" value={inputValue} onChange={handleInputChanged} />
    </div>
  );
};

export default NumberOfEvents;
