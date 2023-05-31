import React, { useEffect } from "react";
import { Menu } from "../menu";
import { Footer } from "../footer";
import logo from "../../images/dog_login.png";
import styles from "./loby.module.scss";
import { loadPersonId } from "../../services/loadOwners";
import { useSelector } from "react-redux";

const Loby = () => {
  const image = sessionStorage.getItem("image");

  return (
    <div className={styles.loby}>
      <div className={styles.loby_container}>
        <div className={styles.loby_head}>
          <div className={styles.loby_head__logo}>
            <img src={logo} alt="logo" className={styles.image_loby} />
          </div>
          <div className={styles.information}>
            <div className={styles.loby_head__information}>
              <h3 className={styles.welcome}>Bienvenid@</h3>
              <h3 className={styles.user_information}>
                {sessionStorage.getItem("name") +
                  " " +
                  sessionStorage.getItem("lastname")}
              </h3>
              <h3 className={styles.user_information}>
                {sessionStorage.getItem("email")}
              </h3>
            </div>
            <div className={styles.loby_head__image}>
              <img src={image} alt="name" className={styles.img_user} />
            </div>
          </div>
        </div>
        <Menu />
      </div>
      <Footer />
    </div>
  );
};

export default Loby;
