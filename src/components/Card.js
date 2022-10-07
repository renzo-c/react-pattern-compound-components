import React, { useState } from "react";
import CardHeader from "./CardHeader";

const Card = ({ children, py, ...props }) => {
  const [disabled, setDisabled] = useState(false);
  const onClickButton = () => setDisabled(!disabled);
  const { lockControl } = props;
  const buttonLabel = disabled ? "🔒" : "🔓";
  const backgroundColor = disabled ? "#dddddd" : "transparent";

  const LockControl = () => {
    return (
      <div className="control-button">
        <button onClick={onClickButton}>{buttonLabel}</button>
      </div>
    );
  };
  return (
    <div className="cardContainer" style={{ backgroundColor }}>
      {lockControl && <LockControl />}
      {React.Children.map(children, (child) => {
        if (child.type === CardHeader) {
          return React.cloneElement(child, {
            disabled,
            py,
            onClickButton,
            lockControl
          });
        }
        return React.cloneElement(child, { disabled, py });
      })}
    </div>
  );
};

export default Card;
