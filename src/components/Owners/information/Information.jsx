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

  const data = [
    {
      id: 1,
      photo: "url",
      name: "Nicolás",
      last_name: "Buitrago",
      identificacion: 1234567890,
      email: "email@test.com",
      phone: 1234567890,
    },
    {
      id: 2,
      photo: "url2",
      name: "Andres",
      last_name: "Pavas",
      identificacion: 1234567890,
      email: "email2@test.com",
      phone: 11651315354,
    },
    {
      id: 2,
      photo: "url2",
      name: "Andres",
      last_name: "Pavas",
      identificacion: 1234567890,
      email: "email2@test.com",
      phone: 11651315354,
    },
    {
      id: 2,
      photo: "url2",
      name: "Andres",
      last_name: "Pavas",
      identificacion: 1234567890,
      email: "email2@test.com",
      phone: 11651315354,
    },
    {
      id: 2,
      photo: "url2",
      name: "Andres",
      last_name: "Pavas",
      identificacion: 1234567890,
      email: "email2@test.com",
      phone: 11651315354,
    },
    {
      id: 2,
      photo: "url2",
      name: "Andres",
      last_name: "Pavas",
      identificacion: 1234567890,
      email: "email2@test.com",
      phone: 11651315354,
    },
    {
      id: 2,
      photo: "url2",
      name: "Andres",
      last_name: "Pavas",
      identificacion: 1234567890,
      email: "email2@test.com",
      phone: 11651315354,
    },
    {
      id: 2,
      photo: "url2",
      name: "Andres",
      last_name: "Pavas",
      identificacion: 1234567890,
      email: "email2@test.com",
      phone: 11651315354,
    },
  ];

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

          {data.map(
            ({ photo, last_name, email, identificacion, phone, name }) => {
              return (
                <tr>
                  <td>{photo}</td>
                  <td>{name}</td>
                  <td>{last_name}</td>
                  <td>{identificacion}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
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
              );
            }
          )}
        </table>
      </div>
    </div>
  );
};

export default Information;
