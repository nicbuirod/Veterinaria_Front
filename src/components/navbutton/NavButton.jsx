import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./nav-button.css";

function NavButton() {
  const [showButtons, setShowButtons] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setShowButtons(!showButtons);
  }

  return (
    <div className="button-container">
      <button onClick={handleClick} className="initial-button">
        <span class="material-symbols-outlined">menu</span>
      </button>
      {showButtons && (
        <div>
          <button
            className="option-button"
            onClick={() => navigate("/new-consultation")}
          >
            Consulta
          </button>
          <button className="option-button" onClick={() => navigate("/follow")}>
            Seguimiento
          </button>
          <button
            className="option-button"
            onClick={() => navigate("/vacunacion")}
          >
            Vacunación
          </button>
          <button
            className="option-button"
            onClick={() => navigate("/desparasitacion")}
          >
            Desparacitación
          </button>
          <button
            className="option-button"
            onClick={() => navigate("/waitingroom")}
          >
            Sala de espera
          </button>
          <button
            className="option-button"
            onClick={() => navigate("/hospitalization")}
          >
            Hospitalización
          </button>
        </div>
      )}
    </div>
  );
}

export default NavButton;
