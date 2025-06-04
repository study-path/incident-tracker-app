import ButtonCustom from "./ButtonCustom";

export default function IncidentCard(props) {
  const incidentCard = {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    border: "1px gray solid",
    borderRadius: "5px",
    margin: "5px",
    padding: "10px",
  };

  return (
    <div style={incidentCard}>
      <h2> {props.title}</h2>
      <div className="details">
        <div>Status: {props.status}</div>
        <div>Name of room: {props.room}</div>
        <div>Device: {props.device}</div>
      </div>
      <ButtonCustom label="More details" />
    </div>
  );
}
