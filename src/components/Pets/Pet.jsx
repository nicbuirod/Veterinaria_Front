import React from "react";

import PetInformation from "./PetInformation/PetInformation";
import { PetHistory } from "./PetHistory";
const Pet = () => {
  return (
    <>
      <PetInformation></PetInformation>
      <PetHistory></PetHistory>
    </>
  );
};

export { Pet };
