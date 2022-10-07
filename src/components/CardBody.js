const CardBody = ({ children, disabled, py }) => {
  const backgroundColor = disabled ? "#dddddd" : "transparent";
  const color = disabled ? "gray" : "black";
  const userSelect = disabled ? "none" : "unset";

  return (
    <div
      style={{
        userSelect,
        backgroundColor,
        color,
        paddingTop: py + "em",
        paddingBottom: py + "em",
        textAlign: "justify"
      }}
    >
      {children}
    </div>
  );
};

export default CardBody;
