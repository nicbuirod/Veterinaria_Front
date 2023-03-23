import React from "react";
import "./pet-history.scss";

const PetHistory = () => {
  return (
    <div className="history">
      <div className="history__events-div">
        <div className="history-info">
          <div className="history-info__details">
            <span class="material-symbols-outlined">tag</span>
            <p>Numero de consulta: 1234</p>
          </div>
          <div className="history-info__details">
            <span class="material-symbols-outlined">calendar_today</span>
            <p>Fecha: 2/26/2023</p>
          </div>
          <div className="history-info__details">
            <span class="material-symbols-outlined">stethoscope</span>
            <p>Profesional: Médico</p>
          </div>
          <div className="history-info__details">
            <span class="material-symbols-outlined">schedule</span>
            <p>Hora: 10:30</p>
          </div>
        </div>
        <div className="history-container">
          <div className="history-event">
            <div className="history-event__reason">
              <p>Motivo de consulta</p>
            </div>

            <div className="history-event__title">
              <p>Le está doliendo la boca para comer</p>
            </div>

            <div className="history-event__detail">
              <p>
                Lleva varios días comiendo poco, como que le duele la boca para
                comer, porque hace unos movimientos raros cuando mastica el
                concentrado, de hecho solo quiere comida húmeda
              </p>
            </div>
          </div>
          <div className="history-buttons">
            <button className="history-buttons__button">
              <span class="material-symbols-outlined">visibility</span>
            </button>
          </div>
        </div>
      </div>

      <div className="history__events-div">
        <div className="history-info">
          <div className="history-info__details">
            <span class="material-symbols-outlined">tag</span>
            <p>Numero de consulta: 1234</p>
          </div>
          <div className="history-info__details">
            <span class="material-symbols-outlined">calendar_today</span>
            <p>Fecha: 2/26/2023</p>
          </div>
          <div className="history-info__details">
            <span class="material-symbols-outlined">stethoscope</span>
            <p>Profesional: Médico</p>
          </div>
          <div className="history-info__details">
            <span class="material-symbols-outlined">schedule</span>
            <p>Hora: 10:30</p>
          </div>
        </div>
        <div className="history-container">
          <div className="history-event">
            <div className="history-event__reason">
              <p>Motivo de consulta</p>
            </div>

            <div className="history-event__title">
              <p>Le está doliendo la boca para comer</p>
            </div>

            <div className="history-event__detail">
              <p>
                Lleva varios días comiendo poco, como que le duele la boca para
                comer, porque hace unos movimientos raros cuando mastica el
                concentrado, de hecho solo quiere comida húmeda
              </p>
            </div>
          </div>
          <div className="history-buttons">
            <button className="history-buttons__button">
              <span class="material-symbols-outlined">visibility</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetHistory;
