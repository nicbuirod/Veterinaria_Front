import React from "react";

import styles from "./pet_information.module.scss";
import Image from "../assets/perro.jpg";
import { ButtonPet } from "../../button-pet";
const PetInformation = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__card}>
        <div className={styles.color_header}>
          <div className={styles.div_img}>
            <img className={styles.div_img__img_redonda} src={Image} alt="" />
          </div>

          <div className={styles.div_info}>
            <div className={styles.div_info__title}>
              <h1>Belen</h1>
            </div>

            <div className={styles.div_info__details}>
              <div className={styles.div_info___detail}>
                <p>Genero: Hembra</p>
              </div>
              <div className={styles.div_info___detail}>
                <p>Raza: Criollo</p>
              </div>
              <div className={styles.div_info___detail}>
                <p>Especie: Canino</p>
              </div>
              <div className={styles.div_info___detail}>
                <p>Color: Negro y café</p>
              </div>
              <div className={styles.div_info___detail}>
                <p>Peso: 20Kg</p>
              </div>
              <div className={styles.div_info___detail}>
                Observaciones: jdhfksdjhfksjdhfksdjhfksdjhfksjdhf
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.button_menu}>
        <ButtonPet />
      </div>
    </div>
  );
};

export default PetInformation;
