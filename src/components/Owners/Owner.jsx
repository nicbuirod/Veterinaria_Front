import React, { useState } from "react";
import { Information } from "./information";
import styles from "./owner.module.scss";
import logo from "../../images/dog_login.png";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { PetModal } from "./PetModal";

const Owner = () => {
  const { visible: modal } = useSelector((state) => state.ownerModal);

  return (
    <div className={styles.container}>
      {modal && <PetModal />}
      <div className={styles.header}>
        <div className={styles.header_information}>
          <img src={logo} alt="logo" className={styles.pet_header} />
          <h2 className={styles.title}>Nombre de aplicación</h2>
          <div className={styles.container_search}>
            <input className={styles.search} type="text" placeholder="Buscar" />
            <button className={styles.button_search}>
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
      <Information />
    </div>
  );
};

export default Owner;
