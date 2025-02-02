import React, { useState, useEffect } from "react";
import { FormInput } from "../PetContainerReg/FormInput";
import { FormSelect } from "../PetContainerReg/FormSelect";
import { FormButton } from "../PetContainerReg/FormButton";
import { AttachButton } from "./AttachButton";
import { useDispatch, useSelector } from "react-redux";
import {
  createProcedure,
  getProceduresByHistory,
  selectProcedureState,
} from "../../store/slices/procedures/proceduresSlice";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styles from "./vacunacion_reg.scss";

const VacunacionReg = ({ handleClose }) => {
  const [consultation, setConsultation] = useState({
    procedure_title: "",
    procedure_detail: "",
    attached: sessionStorage.getItem("url"),
    idperson: sessionStorage.getItem("idperson"),
    idprocedure_type: 1,
    idhistory: null,
  });

  const dispatch = useDispatch();
  const { response } = useSelector(selectProcedureState) || {};

  useEffect(() => {
    dispatch(
      getProceduresByHistory({
        token: sessionStorage.getItem("token"),
        idhistory: +sessionStorage.getItem("idhistory"),
      })
    );
  }, []);

  function handleSave() {
    dispatch(
      getProceduresByHistory({
        token: sessionStorage.getItem("token"),
        idhistory: +sessionStorage.getItem("idhistory"),
      })
    );
    dispatch(
      createProcedure({
        procedure_title: consultation.procedure_title,
        procedure_detail: consultation.procedure_detail,
        attached: consultation.attached,
        idperson: +consultation.idperson,
        idprocedure_type: +consultation.idprocedure_type,
        idhistory: +sessionStorage.getItem("idhistory"),
        token: sessionStorage.getItem("token"),
      })
    );
    dispatch(
      getProceduresByHistory({
        token: sessionStorage.getItem("token"),
        idhistory: +sessionStorage.getItem("idhistory"),
      })
    );

    handleClose();
    setConsultation({
      procedure_title: "",
      procedure_detail: "",
      attached: "",
      idperson: null,
      idprocedure_type: 1,
      idhistory: null,
    });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConsultation((prevConsultation) => ({
      ...prevConsultation,
      [name]: value,
    }));
  };

  useEffect(() => {
    response;
  }, [dispatch]);

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
        <Box component="form">
          <Box marginBottom={2} width={1000}>
            <TextField
              type="text"
              name="procedure_title"
              label="Motivo de la consulta"
              variant="outlined"
              fullWidth
              required
              onChange={handleInputChange}
            />
          </Box>

          <Box marginBottom={2}>
            <TextField
              label="Detalle de la consulta"
              name="procedure_detail"
              multiline
              rows={10}
              variant="outlined"
              fullWidth
              required
              onChange={handleInputChange}
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

            <AttachButton />

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
                  onClick={handleSave}
                >
                  Guardar
                </Button>
              </Box>
              <Box className="input_register">
                <Button
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
        </Box>
      </div>
    </div>
  );
};
export default VacunacionReg;
