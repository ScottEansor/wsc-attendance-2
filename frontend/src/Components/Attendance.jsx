import React, { useState } from "react";
import DateDisplay from "./DateDisplay.jsx";
import CoachDisplay from "./CoachDisplay.jsx";
import AthleteSelect from "./AthleteSelect.jsx";
import { saveAttendance } from "../api.js"; // api js import here to talk to backend :D

export default function Attendance() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCoach, setSelectedCoach] = useState("");
  const [presentAthletes, setPresentAthletes] = useState([]);

  const validData = selectedDate && selectedCoach && presentAthletes.length > 0;

  const onMarkPresent = async (clickedAthlete) => {
    if (!validData) {
      return;
    }

    const body = { selectedCoach, selectedDate, athlete: clickedAthlete };
    console.log(body);

    try {
      const response = await saveAttendance(body);
      console.log("attendance saved:", response);

      setPresentAthletes((currentPresent) => [
        ...currentPresent,
        clickedAthlete,
      ]);
    } catch (err) {
      console.error("error saving attendance please check code");
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
