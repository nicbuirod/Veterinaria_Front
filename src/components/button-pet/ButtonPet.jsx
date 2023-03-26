import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./button-pet.scss";

function ButtonPet() {
  const [showButtons, setShowButtons] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setShowButtons(!showButtons);
  }

  return (
    <div className="button-container-pet">
      <button onClick={handleClick} className="initial-button-pet">
        <span class="material-symbols-outlined">menu</span>
      </button>
      {showButtons && (
        <div>
          <button
            className="option-button-pet"
            onClick={() => navigate("/new-consultation")}
          >
            Consulta
          </button>
          {/* <button className="option-button" onClick={() => navigate("/follow")}>
            Seguimiento
          </button> */}
          <button
            className="option-button-pet"
            onClick={() => navigate("/vacunacion")}
          >
            Vacunación
          </button>
          <button
            className="option-button-pet"
            onClick={() => navigate("/desparasitacion")}
          >
            Desparacitación
          </button>
          {/* <button
            className="option-button-pet"
            onClick={() => navigate("/waitingroom")}
          >
            Sala de espera
          </button> */}
          <button
            className="option-button-pet"
            onClick={() => navigate("/hospitalization")}
          >
            Hospitalización
          </button>
          {/* <button className="option-button-pet">
            <span class="material-symbols-outlined">attach_file</span>
          </button> */}
        </div>
      )}
    </div>
  );
}

export default ButtonPet;
