import React from "react";
import { FormInput } from "../PetContainerReg/FormInput";
import { FormSelect } from "../PetContainerReg/FormSelect";
import { FormButton } from "../PetContainerReg/FormButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styles from "./vacunacion_reg.scss";

const VacunacionReg = ({ handleClose }) => {
  const tipoVacuna = [
    { nameItem: "Parvo Triple (1ra dosis)", id: 1 },
    { nameItem: "Parvo Triple (2da dosis)", id: 2 },
    { nameItem: "Parvo Triple + antirrábica", id: 3 },
    { nameItem: "Triple felina ", id: 4 },
    { nameItem: "Triple felina + antirrábica", id: 5 },
  ];
  const FabricantesList = [
    { nameItem: "Boehringer Ingelheim", id: 1 },
    { nameItem: "Ecuphar", id: 2 },
    { nameItem: "Letipharma - Univetd", id: 3 },
    { nameItem: "Virbac ", id: 4 },
    { nameItem: "Zoetis", id: 5 },
  ];

  return (
    <div className="card_vacuna">
      <div className="card_vacuna__info">
        <Box>
          <Typography
            fontWeight="bold"
            variant="h4"
            gutterBottom
            style={{ fontFamily: "'Dosis'" }}
            marginTop={2}
          >
            Nueva Consulta
          </Typography>
        </Box>
        <form>
          <Box marginBottom={2} width={1000}>
            <TextField
              label="Motivo de la consulta"
              variant="outlined"
              fullWidth
              required
            />
          </Box>

          <Box marginBottom={2}>
            <TextField
              label="Detalle de la consulta"
              multiline
              rows={10}
              variant="outlined"
              fullWidth
              required
            />
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <input
              accept="image/*"
              id="file-upload"
              type="file"
              style={{ display: "none" }}
            />

            <Box className="input_register">
              <Button
                variant="contained"
                component="span"
                className={styles.input_register}
              >
                Adjuntar archivos
              </Button>
            </Box>

            <Box
              width={210}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Box className="input_register">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  component="span"
                >
                  Guardar
                </Button>
              </Box>
              <Box className="input_register">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  component="span"
                  onClick={handleClose}
                >
                  Cerrar
                </Button>
              </Box>
            </Box>
          </Box>
        </form>
      </div>
    </div>
  );
};
export default VacunacionReg;
