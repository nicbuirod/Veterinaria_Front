import React from "react";
import "./login.scss";

const LoginUser = () => {
  return (
    <div className="login">
      <div className="login__container">
        <h1>Bienvenid@</h1>
        <form>
          <ul>
            <li>
              <label htmlFor="user">Usuario</label>
              <input type="text" name="user" id="user" />
            </li>
            <li>
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" id="password" />
            </li>
          </ul>
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
