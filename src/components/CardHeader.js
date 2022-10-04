const CardHeader = ({ children, disabled, py }) => {
  const backgroundColor = disabled ? "#dddddd" : "white";
  const color = disabled ? "gray" : "black";

  return (
    <div
      style={{
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
