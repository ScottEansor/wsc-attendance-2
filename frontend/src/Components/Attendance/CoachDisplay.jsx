import React, { useState } from "react";
import "./Attendance.css";

export default function CoachDisplay() {
  const [selectedCoach, setSelectedCoach] = useState("Choose Coach");

  const testCoaches = ["Coach Tony", "Coach Andy", "Coach Scotty"];

  function handleChange(event) {
    setSelectedCoach(event.target.value);
  }
  return (
    <>
      <div className="coach-display-container">
        <div className={`coach-select ${selectedCoach ? "selected" : ""}`}>
          {/* what is htmlfor??? */}
          <label htmlFor="coach-select">Choose Coach:</label>
          <select
            id="coach-select"
            value={selectedCoach}
            onChange={handleChange}
          >
            <option value="">Select a coach</option>
            {testCoaches.map((coach) => (
              <option key={coach} value={coach}>
                {coach}
              </option>
            ))}
          </select>
        </div>

        {selectedCoach && (
          <div className="coach-details">
            <h2>{selectedCoach}</h2>
            <p>Details about {selectedCoach}</p>
          </div>
        )}
      </div>
      {/* review last chatgpt question */}
    </>
  );
}
