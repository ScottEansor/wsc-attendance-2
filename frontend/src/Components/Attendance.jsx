import React from "react";
import DateDisplay from "./DateDisplay.jsx";
import CoachDisplay from "./CoachDisplay.jsx";
import AthleteSelect from "./AthleteSelect.jsx";

export default function Attendance() {
  return (
    <div className="app-container">
      <DateDisplay />
      <CoachDisplay />
      <AthleteSelect />
    </div>
  );
}
