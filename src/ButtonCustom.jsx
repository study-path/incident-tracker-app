export default function ButtonCustom(props) {
  const customButtonStyle = {
    fontSize: "20px",
    color: "green",
    margin: "5px",
    padding: "5px",
    width: "150px",
  };
  return (
    <button style={customButtonStyle} type="text" onClick={props.onClick}>
      {props.label}
    </button>
  );
}
