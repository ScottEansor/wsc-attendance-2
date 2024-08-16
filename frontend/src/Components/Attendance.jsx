import React, { useState } from "react";
import DateDisplay from "./DateDisplay.jsx";
import CoachDisplay from "./CoachDisplay.jsx";
import AthleteSelect from "./AthleteSelect.jsx";

export default function Attendance() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCoach, setSelectedCoach] = useState("");
  const [presentAthletes, setPresentAthletes] = useState([]);
  return (
    <div className="app-container">
      <DateDisplay onDateChange={setSelectedDate} selectedDate={selectedDate} />
      <CoachDisplay
        onCoachChange={setSelectedCoach}
        selectedCoach={selectedCoach}
      />
      <AthleteSelect
        presentAthletes={presentAthletes}
        setPresentAthletes={setPresentAthletes}
      />
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-primary w-100">Submit</button>
      </div>
    </div>
  );
}
