import React from "react";

import styles from "./user.module.scss";

import { InputText } from "./input-text";
import { Lista } from "./lista";
import { InputPassword } from "./input-password";
import { BotonGuardar } from "./boton";
import { FotoUser } from "./foto";
import { CargarFoto } from "./cargar-foto";

const UserRegister = () => {
  return (
    <div className={styles.userregister}>
      <div className={styles.userregister__contain}>
        <div className={styles.userregister__contain__header}>
          <div className={styles.upload_image}>
            <FotoUser />
            <div className={styles.upload_image__button}>
              <CargarFoto />
            </div>
          </div>
        </div>
        <div className={styles.userregister__contain__input}>
          <InputText label="Nombre" />
          <InputText label="Apellido" />
          <InputText label="Usuario" />
          <Lista />
          <InputText label="N° documento" />
          <InputText label="e-mail" />
          <InputPassword label={"Clave"} />
          <InputPassword label={"Confirmar clave"} />
        </div>

        <div className={styles.crear}>
          <BotonGuardar />
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
