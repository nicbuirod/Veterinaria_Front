import React from "react";
import "./form_radio_button.scss";

const FormRadioButton = ({ fieldName, id, list }) => {
  return (
    <div>
      <label className="radio-button-group" for={id}>
        <span>{fieldName}</span>
        <div className="radio-button-group__opcion">
          {list.length >= 1 &&
            list.map(({ nameItem }, index) => (
              <>
                <span>{nameItem}</span>
                <input
                  type={"radio"}
                  id={index}
                  name={fieldName}
                  value={nameItem}
                />
              </>
            ))}
        </div>
      </label>
    </div>
  );
};
export default FormRadioButton;
