import React, { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li className="event">
      <h2>{event.summary}</h2>
      <p>{new Date(event.created).toISOString().slice(0, 10)}</p>
      <p>{event.location}</p>
      <button
        className="details-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "hide details" : "show details"}
      </button>
      {showDetails && <p className="details">{event.description}</p>}
    </li>
  );
};

export default Event;
