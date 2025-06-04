import ButtonCustom from "./ButtonCustom";
import { useState } from "react";

export default function IncidentCard(props) {
  const [moreDetails, setMoreDetails] = useState(false);
  const colorPriority = "green";

  const incidentCard = {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    border: "1px gray solid",
    borderRadius: "5px",
    margin: "5px",
    padding: "10px",
  };

  let priorityColorStyle = {};

  if (props.priority === "High") {
    priorityColorStyle = { color: "red" };
  } else if (props.priority === "Normal") {
    priorityColorStyle = { color: "green" };
  } else {
    priorityColorStyle = { color: "orange" };
  }

  return (
    <div style={incidentCard}>
      <h2> {props.title}</h2>
      <div className="details">
        <div>Status: {props.status}</div>
        <div>Name of room: {props.room}</div>
        <div>Device: {props.device}</div>
      </div>
      <ButtonCustom
        label="More details"
        onClick={() => {
          setMoreDetails(!moreDetails);
        }}
      />
      {moreDetails && (
        <div>
          <div>{props.description}</div>
          <div style={priorityColorStyle}>{props.priority}</div>
          <div>{props.createdAt}</div>
        </div>
      )}
    </div>
  );
}
