import React, { useState } from "react";
import DateDisplay from "./DateDisplay.jsx";
import CoachDisplay from "./CoachDisplay.jsx";
import AthleteSelect from "./AthleteSelect.jsx";

export default function Attendance() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCoach, setSelectedCoach] = useState("");
  const [presentAthletes, setPresentAthletes] = useState([]);

  const validData = selectedDate && selectedCoach && presentAthletes.length > 0;

  const handleSubmit = () => {
    if (!validData) {
      return;
    }
    const body = { selectedCoach, selectedDate, presentAthletes };
    console.log(body);
  };

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
        <button
          className="btn btn-primary w-100"
          onClick={handleSubmit}
          disabled={!validData}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
