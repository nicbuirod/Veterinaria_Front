import React from "react";
import { FormInput } from "../PetContainerReg/FormInput";
import { FormSelect } from "../PetContainerReg/FormSelect";
import { FormButton } from "../PetContainerReg/FormButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import "./vacunacion_reg.scss";

const VacunacionReg = () => {
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
        <Box marginTop={2} marginBottom={2}>
          <Typography
            variant="h4"
            gutterBottom
            style={{ fontFamily: "'Dosis'" }}
          >
            Nueva Consulta
          </Typography>
        </Box>
        <form>
          <Box marginBottom={2}>
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

          <Box marginBottom={2}>
            <input
              accept="image/*"
              id="file-upload"
              type="file"
              style={{ display: "none" }}
            />
            <label htmlFor="file-upload">
              <Button variant="contained" component="span">
                Adjuntar archivos
              </Button>
            </label>
          </Box>

          <Button type="submit" variant="contained" color="primary">
            Guardar
          </Button>
        </form>
      </div>
    </div>
  );
};
export default VacunacionReg;
