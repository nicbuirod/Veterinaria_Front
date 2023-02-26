import React from "react";

import "./user.scss";

import { InputText } from "./input-text";
import { Lista } from "./lista";
import { InputPassword } from "./input-password";
import { BotonGuardar } from "./boton";
import { FotoUser } from "./foto";
import { CargarFoto } from "./cargar-foto";

const UserRegister = () => {
  return (
    <div className="userregister">
      <div className="userregister__contain">
        <div className="userregister__contain__input">
          <InputText label="Nombre" />
          <InputText label="Apellido" />
          <InputText label="Usuario" />
          <Lista />
          <InputText label="N° documento" />
          <InputText label="e-mail" />
          <InputPassword label={"Clave"} />
          <InputPassword label={"Confirmar clave"} />
        </div>
        <div>
          <FotoUser />
          <CargarFoto />
        </div>
      </div>
      <div className="crear">
        <BotonGuardar />
      </div>
    </div>
  );
};

export default UserRegister;
