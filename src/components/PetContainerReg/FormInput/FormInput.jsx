import React from "react";
import "./form_input.scss";

const FormInput = ({ fieldName, type, id, placeholderText }) => {
  return (
    <div>
      <label className="input-group" for={id}>
        <span>{fieldName}</span>
        <input type={type} id={id} placeholder={placeholderText} />
      </label>
    </div>
  );
};
export default FormInput;
