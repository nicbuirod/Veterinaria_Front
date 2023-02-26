import React from "react";
import "./form_button.scss";

const FormButton = ({ fieldName, type }) => {
  return <button type={type}>{fieldName}</button>;
};
export default FormButton;
