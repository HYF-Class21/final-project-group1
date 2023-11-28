import React from "react";

const RadioButton = ({ value, name = value, handleRadioChange, filters, btype }) => {
  return (
    <label>
      <input
        type="radio"
        value={value}
        checked={btype === 'country' ? filters.country === value : filters.category === value }
        onChange={
          handleRadioChange
        }
      />
      {name}
    </label>
  );
};
export default RadioButton;

