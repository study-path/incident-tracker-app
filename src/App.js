import "./styles.css";
import IncidentCard from "./IncidentCard";
import incidents from "./incidents";
import ButtonCustom from "./ButtonCustom";
import { useState } from "react";

export default function App() {
  const [filteredIncidents, setFilteredIncidents] = useState(incidents);
  const handleClick = (label) => {
    console.log("clicked ", label);
    if (label === "open") {
      const open = incidents.filter((incident) => incident.status === "open");
      setFilteredIncidents(open);
    } else if (label === "closed") {
      const closed = incidents.filter(
        (incident) => incident.status === "closed"
      );

      setFilteredIncidents(closed);
    } else {
      setFilteredIncidents(incidents);
    }
  };

  return (
    <div className="App">
      <ButtonCustom label="All" onClick={() => handleClick("All")} />
      <ButtonCustom label="Open" onClick={() => handleClick("open")} />
      <ButtonCustom label="Closed" onClick={() => handleClick("closed")} />

      <div className="cardsList">
        {filteredIncidents.map((incident) => (
          <IncidentCard
            key={incident.id}
            title={incident.title}
            status={incident.status}
            room={incident.room}
            device={incident.device}
            priority={incident.priority}
            description={incident.description}
            createdAt={incident.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
