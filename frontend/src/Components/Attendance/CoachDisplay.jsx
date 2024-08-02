import React, { useState } from "react";
import "./Attendance.css";

export default function CoachDisplay() {
  const [selectedCoach, setSelectedCoach] = useState("");

  const testCoaches = ["Coach Tony", "Coach Andy", "Coach Scotty"];

  function handleChange(event) {
    setSelectedCoach(event.target.value);
  }

  return (
    //____________________this still need work. div isnt clickable. only drop down is, this can be confusing. Also need to eliminate/make better display for when coach is picked. Get functionallity and understanding first.
    <div className="coach-display-container">
      <div className="coach-select">
        <select
          id="coach-select"
          value={selectedCoach}
          onChange={handleChange}
          className="coach-select-dropdown"
        >
          <option value="">{selectedCoach || "Choose Coach"}</option>
          {testCoaches.map((coach) => (
            <option key={coach} value={coach}>
              {coach}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
