import React from "react";
import { Menu } from "../menu";

import logo from "../../images/dog2.png";
import "./loby.css";

const Loby = () => {
  return (
    <div className="loby">
      <div className="loby-container">
        <div className="loby-head">
          <div className="loby-head__logo">
            <img src={logo} alt="logo" className="image-loby" />
          </div>
          <div className="loby-head__information">
            <h3>nombre de usuario</h3>
            <h3>correo electronico</h3>
          </div>
          <div className="loby-head__image">
            <img src="#" alt="name" />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Loby;
