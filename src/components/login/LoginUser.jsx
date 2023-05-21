import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import Dog from "../../images/dog_login.png";
const LoginUser = () => {
  const navigate = useNavigate();
  const [typeUser, setTypeUser] = React.useState("usuario");

  const handleUser = (event, newTypeUser) => {
    setTypeUser(newTypeUser);
  };

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/loby");
  }

  return (
    <div className={styles.login}>
      <div className={styles.login_container}>
        <div className={styles.back_image}>
          <img src={Dog} alt="logo" className={styles.login_img} />
        </div>
        <div className={styles.container}>
          <div className={styles.user_type}></div>
          <h1 className={styles.login_h1}>Login</h1>
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
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.container_input}>
              <Box
                className={styles.inputs}
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "30ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField required id="outlined-required" label="Correo" />
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
              </Box>
            </div>
            <Button className={styles.button} type="submit" variant="contained">
              Ingresar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
