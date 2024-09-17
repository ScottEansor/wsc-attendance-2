import React, { useState } from "react";
import DateDisplay from "./DateDisplay.jsx";
import CoachDisplay from "./CoachDisplay.jsx";
import AthleteSelect from "./AthleteSelect.jsx";

export default function Attendance() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCoach, setSelectedCoach] = useState("");
  const [presentAthletes, setPresentAthletes] = useState([]);

  const validData = selectedDate && selectedCoach && presentAthletes.length > 0;
  const onMarkPresent = (clickedAthlete) => {
    setPresentAthletes((currentPresent) => [...currentPresent, clickedAthlete]);
    const body = { selectedCoach, selectedDate, athlete: clickedAthlete };
    console.log(body);
  };
  const handleSubmit = () => {
    if (!validData) {
      return;
    }
  };

  return (
    <div className="app-container">
      <DateDisplay onDateChange={setSelectedDate} selectedDate={selectedDate} />
      <CoachDisplay
        onCoachChange={setSelectedCoach}
        selectedCoach={selectedCoach}
      />
      {selectedDate && selectedCoach && (
        <AthleteSelect
          presentAthletes={presentAthletes}
          onMarkPresent={onMarkPresent}
        />
      )}
    </div>
  );
}
