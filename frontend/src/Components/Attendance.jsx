import React, { useEffect, useState } from "react";
import DateDisplay from "./DateDisplay.jsx";
import CoachDisplay from "./CoachDisplay.jsx";
import AthleteSelect from "./AthleteSelect.jsx";
import { getAttendance, saveAttendance } from "../api.js"; // api js import here to talk to backend :D

export default function Attendance() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCoach, setSelectedCoach] = useState("");
  const [presentAthletes, setPresentAthletes] = useState([]);

  const validData = selectedDate && selectedCoach && presentAthletes.length > 0;

  useEffect(() => {
    let running = true;
    async function fetchAttendance() {
      const json = await getAttendance(selectedDate, selectedCoach);
      if (!running) return;
      setPresentAthletes(json);
    }
    fetchAttendance();
  }, [selectedDate, selectedCoach]);

  //
  useEffect(() => {
    let running = true;
    async function fetchAttendance() {
      if (selectedDate && selectedCoach) {
        // Only fetch when both date and coach are selected
        const json = await getAttendance(selectedDate, selectedCoach);
        if (!running) return;
        setPresentAthletes(json); // Assuming you want to update present athletes with fetched data
      }
    }
    fetchAttendance();
    return () => {
      running = false;
    };
  }, [selectedDate, selectedCoach]);

  const onMarkPresent = async (clickedAthlete) => {
    if (!validData) {
      return;
    }
    //
    const body = { selectedCoach, selectedDate, athlete: clickedAthlete };
    console.log(body);

    try {
      // await saveAttendance(body);

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
