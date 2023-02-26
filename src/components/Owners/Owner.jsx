import React from "react";

import { OwnerInformation } from "./OwnerInformation/OwnerInformation";

const Owner = () => {
  return (
    <OwnerInformation
      fullName="Jhon Doe"
      id="1234567890"
      email="jhon.doe@example.es"
      phone="xxx-xxx-xxxx"
      address="Calle falsa 123"
    />
  );
};

export default Owner;
