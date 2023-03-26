import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import Dog from "./dog2.png";

const LoginUser = () => {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/loby");
  }

  return (
    <div className="login">
      <img src={Dog} alt="logo" className="login-img" />
      <div className="login__container">
        <h1 className="login-h1">Bienvenid@</h1>
        <form onSubmit={handleSubmit}>
          <ul className="login-ul">
            <li className="login-li">
              <label htmlFor="user">Usuario</label>
              <input type="text" name="user" id="user" />
            </li>
            <li className="login-li">
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" id="password" />
            </li>
          </ul>
          <button className="login-button" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
