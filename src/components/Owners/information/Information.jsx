import React from "react";
import styles from "./information.module.scss";
import photo from "../../../images/niño.png";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PetsIcon from "@mui/icons-material/Pets";
import { setOwnerModalState } from "../../../store/slices/owners";
import { useDispatch } from "react-redux";
const Information = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <tr className={styles.column}>
            <th>Photo</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Identificación</th>
            <th>Correo</th>
            <th>Telefono</th>
            <th>Editar</th>
            <th>Mascotas</th>
            <th>Eliminar</th>
          </tr>
          <tr className={styles.column}>
            <td>
              <img className={styles.photo_user} src={photo} alt="niño" />
            </td>
            <td>pedro perez</td>
            <td>castellanos castellanos</td>
            <td>123456789123</td>
            <td>correodeprueba@hotmail.com</td>
            <td>12345678901</td>
            <td>
              <button className={styles.button}>
                <EditIcon />
              </button>
            </td>

            <td>
              <button
                className={styles.button_pet}
                onClick={() => dispatch(setOwnerModalState(true))}
              >
                <PetsIcon />
              </button>
            </td>
            <td>
              <button className={styles.button_delete}>
                <DeleteForeverIcon />
              </button>
            </td>
          </tr>
          <tr className={styles.column}>
            <td>
              <img className={styles.photo_user} src={photo} alt="niño" />
            </td>
            <td>Laura torres</td>
            <td>castellanos castellanos</td>
            <td>123456789123</td>
            <td>correodeprueba@hotmail.com</td>
            <td>12345678901</td>
            <td>
              <button className={styles.button}>
                <EditIcon />
              </button>
            </td>

            <td>
              <button
                className={styles.button_pet}
                onClick={() => dispatch(setOwnerModalState(true))}
              >
                <PetsIcon />
              </button>
            </td>
            <td>
              <button className={styles.button_delete}>
                <DeleteForeverIcon />
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Information;
