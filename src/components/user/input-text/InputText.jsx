import React from "react";
import "./inputText.scss";

const InputText = ({ label }) => {
  return (
    <div className="input">
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} name={label} />
    </div>
  );
};

export default InputText;
