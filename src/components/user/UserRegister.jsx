import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import styles from "./user.module.scss";
import userRegister from "../../images/user-register.png";

import { FotoUser } from "./foto";

import { setPhotoUser } from "../../store/slices/register";

const UserRegister = () => {
  const [typeUser, setTypeUser] = React.useState("usuario");

  const handleUser = (event, newTypeUser) => {
    setTypeUser(newTypeUser);
  };
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    dispatch(setPhotoUser(url));
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className={styles.userregister}>
      <div className={styles.userregister__contain}>
        <div className={styles.img_container}>
          <img
            src={userRegister}
            alt="doctor"
            className={styles.picture_register}
          />
        </div>
        <div className={styles.register}>
          <div className={styles.userregister__contain__header}>
            <div className={styles.upload_image}>
              <FotoUser />
              <div className={styles.upload_image__button}>
                <input
                  accept=".jpg, .png. .jpeg"
                  className={styles.upload_image__button}
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                />
                <Button
                  className={styles.button_upload}
                  onClick={handleButtonClick}
                >
                  Cargar foto
                </Button>
              </div>
            </div>
          </div>
          <form className={styles.userregister__contain__input}>
            <div className={styles.container_toggle}>
              <ToggleButtonGroup
                value={typeUser}
                exclusive
                onChange={handleUser}
                aria-label="Tipo de usuaro"
              >
                <ToggleButton
                  className={styles.toggle_button}
                  value="medico"
                  aria-label="medico"
                >
                  <h3>Medico</h3>
                </ToggleButton>

                <ToggleButton
                  className={styles.toggle_button}
                  value="usuario"
                  aria-label="usuario"
                >
                  <h3>usuario</h3>
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "30ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField required id="outlined-required" label="Nombre" />
              <TextField required id="outlined-required" label="Apellido" />
              <TextField required id="outlined-required" label="e-mail" />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              <TextField
                id="outlined-password-input"
                label="Confirmar Password"
                type="password"
                autoComplete="current-password"
              />
            </Box>
            <div className={styles.crear}>
              <Button
                className={styles.button}
                type="submit"
                variant="contained"
              >
                Registrar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
