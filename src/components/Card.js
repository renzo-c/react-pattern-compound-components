import React, { useState } from "react";

const Card = ({ children, py }) => {
  const [disabled, setDisabled] = useState(false);
  const buttonLabel = disabled ? "Enable" : "Disable";
  const onClickButton = () => setDisabled(!disabled);

  return (
    <div>
      <div>
        <button onClick={onClickButton}>{buttonLabel}</button>
      </div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { disabled, py });
      })}
    </div>
  );
};

export default Card;
