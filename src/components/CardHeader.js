const CardHeader = ({ children, disabled, py }) => {
  const backgroundColor = disabled ? "#dddddd" : "transparent";
  const color = disabled ? "gray" : "black";
  const userSelect = disabled ? "none" : "unset";

  return (
    <div
      style={{
        userSelect,
        position: "relative",
        backgroundColor,
        color,
        paddingTop: py + "em",
        paddingBottom: py + "em"
      }}
    >
      {children}
    </div>
  );
};

export default CardHeader;
