import React from "react";
import NavButton from "../../navbutton/NavButton";
import styles from "./pet-history.module.scss";

const PetHistory = () => {
  return (
    <div className={styles.history}>
      <div className={styles.history__events_div}>
        <div className={styles.history_info}>
          <div className={styles.history_info__details}>
            <span class={styles.material_symbols_outlined}>tag</span>
            <p>Numero de consulta: 1234</p>
          </div>
          <div className={styles.history_info__details}>
            <span class={styles.material_symbols_outlined}>calendar_today</span>
            <p>Fecha: 2/26/2023</p>
          </div>
          <div className={styles.history_info__details}>
            <span class={styles.material_symbols_outlined}>stethoscope</span>
            <p>Profesional: Médico</p>
          </div>
          <div className={styles.history_info__details}>
            <span class={styles.material_symbols_outlined}>schedule</span>
            <p>Hora: 10:30</p>
          </div>
        </div>
        <div className={styles.history_container}>
          <div className={styles.history_event}>
            <div className={styles.history_event__reason}>
              <p>Motivo de consulta</p>
            </div>

            <div className={styles.history_event__title}>
              <p>Le está doliendo la boca para comer</p>
            </div>

            <div className={styles.history_event__detail}>
              <p>
                Lleva varios días comiendo poco, como que le duele la boca para
                comer, porque hace unos movimientos raros cuando mastica el
                concentrado, de hecho solo quiere comida húmeda
              </p>
            </div>
          </div>
          <div className={styles.history_buttons}>
            <NavButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetHistory;
