import React from "react";
import "./inputPassword.scss";

const InputPassword = ({ label }) => {
  return (
    <div className="password">
      <label htmlFor="password">{label}</label>
      <input
        type="password"
        id="password"
        name="password"
        className="input-password"
      />
    </div>
  );
};

export default InputPassword;
