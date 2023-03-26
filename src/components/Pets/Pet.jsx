import React from "react";

import PetInformation from "./PetInformation/PetInformation";
import { PetHistory } from "./PetHistory";

const Pet = () => {
  return (
    <div>
      <PetInformation></PetInformation>

      <PetHistory></PetHistory>
    </div>
  );
};

export { Pet };
