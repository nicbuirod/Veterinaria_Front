import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import Dog from "./dog_login.png";

const LoginUser = () => {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/loby");
  }

  return (
    <div className={styles.login}>
      <img src={Dog} alt="logo" className={styles.login_img} />
      <div className={styles.login__container}>
        <h1 className={styles.login_h1}>Bienvenid@</h1>
        <form onSubmit={handleSubmit}>
          <ul className={styles.login_ul}>
            <li className={styles.login_li}>
              <label htmlFor="user">Usuario</label>
              <input type="text" name="user" id="user" />
            </li>
            <li className={styles.login_li}>
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" id="password" />
            </li>
          </ul>
          <button className={styles.login_button} type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
