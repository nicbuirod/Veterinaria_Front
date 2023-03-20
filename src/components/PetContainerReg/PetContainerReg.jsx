import React from "react";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";
import { FormRadioButton } from "./FormRadioButton";
import { FormButton } from "./FormButton";

import "./pet_container_reg.scss";

import image from "../../images/pets1.png";

const PetContainerReg = () => {
  const tipoEspecie = [
    { nameItem: "Canino", id: 1 },
    { nameItem: "Felino", id: 2 },
  ];
  const raza = [
    { nameItem: "Beagle", idEspecie: 1 },
    { nameItem: "BorderCollie", idEspecie: 1 },
    { nameItem: "criollo", idEspecie: 1 },
    { nameItem: "Asíatico", idEspecie: 2 },
    { nameItem: "Abisinio", idEspecie: 2 },
  ];
  const generos = [{ nameItem: "Hembra " }, { nameItem: "Macho" }];

  const name = "Firulais";
  return (
    <div className="card_pet">
      <div className="card_pet__petFotograph">
        <div class="card_pet__petFotograph__img">
          <img className="div-img__img-redonda" src={image} alt={name} />
        </div>
        <FormButton fieldName="Agregar Foto" type="submit" />
      </div>
      <div className="card_pet__info">
        <h1>Mascotas</h1>
        <FormInput
          fieldName="Nombre"
          type={"text"}
          id={"inputNombre"}
          placeholderText={"Ingrese el nombre"}
        />
        <FormSelect
          fieldName={"Especie"}
          id={"selectEspecie"}
          list={tipoEspecie}
        />

        <FormSelect fieldName={"Raza"} id={"selectRaza"} list={raza} />

        <FormInput
          fieldName="Fecha Nacimiento"
          type={"date"}
          id={"inputPeso"}
          placeholderText={"Ingrese el peso"}
        />
        <FormRadioButton
          fieldName={"Género"}
          id={"radioGenero"}
          list={generos}
        />

        <FormInput
          fieldName="Talla"
          type={"text"}
          id={"inputTalla"}
          placeholderText={"Ingrese la Talla"}
        />
        <FormInput
          fieldName="Peso"
          type={"text"}
          id={"inputPeso"}
          placeholderText={"Ingrese el peso"}
        />

        <FormInput
          fieldName="Observaciones"
          type={"text"}
          id={"inputObservaciones"}
          placeholderText={"Ingrese las Observaciones"}
        />
        <FormButton fieldName="Guardar" type="submit" />
      </div>
    </div>
  );
};
export default PetContainerReg;
