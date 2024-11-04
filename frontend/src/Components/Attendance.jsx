import React, { useEffect, useState } from "react";
import DateDisplay from "./DateDisplay.jsx";
import CoachDisplay from "./CoachDisplay.jsx";
import AthleteSelect from "./AthleteSelect.jsx";
import { getAttendance, saveAttendance, getAthletes } from "../api.js"; // api js import here to talk to backend :D

export default function Attendance() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCoach, setSelectedCoach] = useState("");
  const [presentAthletes, setPresentAthletes] = useState([]);

  const validData = selectedDate && selectedCoach && presentAthletes.length > 0;

  useEffect(() => {
    let running = true;
    async function fetchAttendance() {
      if (selectedDate && selectedCoach) {
        const json = await getAttendance(selectedDate, selectedCoach);
        if (!running) return;

        // Map attendance data to include _id by finding athlete in athletes list
        const allAthletes = await getAthletes();
        const fullPresentAthletes = json
          .map((attendance) => {
            const athleteInfo = allAthletes.find(
              (a) => a.name === attendance.athlete
            );
            return athleteInfo
              ? { _id: athleteInfo._id, name: athleteInfo.name }
              : null;
          })
          .filter(Boolean);

        setPresentAthletes(fullPresentAthletes);
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
    //check this with tim some again:
    const isAlreadyPresent = presentAthletes.some(
      (athlete) => athlete._id === clickedAthlete._id
    );
    if (isAlreadyPresent) return;

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
