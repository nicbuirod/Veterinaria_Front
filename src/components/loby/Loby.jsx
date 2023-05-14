import React from "react";
import { Menu } from "../menu";

import logo from "../../images/dog_login.png";
import styles from "./loby.module.scss";

const Loby = () => {
  return (
    <div className={styles.loby}>
      <div className={styles.loby_container}>
        <div className={styles.loby_head}>
          <div className={styles.loby_head__logo}>
            <img src={logo} alt="logo" className={styles.image_loby} />
          </div>
          <div className={styles.loby_head__information}>
            <h3>nombre de usuario</h3>
            <h3>correo electronico</h3>
          </div>
          <div className={styles.loby_head__image}>
            <img src="#" alt="name" />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Loby;
