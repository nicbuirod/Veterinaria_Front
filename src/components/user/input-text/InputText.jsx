import React from "react";
import "./inputText.scss";

const InputText = ({ label }) => {
  return (
    <div className="input__user">
      <label htmlFor={label} className="input__user__label">
        {label}
      </label>
      <input
        type="text"
        id={label}
        name={label}
        className="input__user__input"
      />
    </div>
  );
};

export default InputText;
