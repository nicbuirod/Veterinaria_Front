import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu.css";
import user from "../../images/user.png";
import owner from "../../images/ouner.png";
import pug from "../../images/pug.png";
import huellas from "../../images/huellas.png";
import niño from "../../images/niño.png";

function Menu() {
  const navigate = useNavigate();
  return (
    <nav className="button-container-menu">
      <ul className="list">
        <li className="item">
          <button className="button-page" onClick={() => navigate("/users")}>
            <h2 className="text-menu">Registro de usuario</h2>
            <img src={user} alt="page" className="image-button" />
          </button>
        </li>
        <li className="item">
          <button
            className="button-page"
            onClick={() => navigate("/owners-register")}
          >
            <h2 className="text-menu">Registro de propietarios</h2>
            <img src={owner} alt="page" className="image-button" />
          </button>
        </li>
        <li className="item">
          <button
            className="button-page"
            onClick={() => navigate("/pets-register")}
          >
            <h2 className="text-menu">Registro de mascotas</h2>
            <img src={huellas} alt="page" className="image-button" />
          </button>
        </li>
        <li className="item">
          <button className="button-page" onClick={() => navigate("/owners")}>
            <h2 className="text-menu">Propietarios</h2>
            <img src={niño} alt="page" className="image-button" />
          </button>
        </li>
        <li className="item">
          <button className="button-page" onClick={() => navigate("/pets")}>
            <h2 className="text-menu">Mascotas</h2>
            <img src={pug} alt="page" className="image-button" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
