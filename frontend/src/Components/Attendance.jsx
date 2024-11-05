import React, { useEffect, useMemo, useState } from "react";
import DateDisplay from "./DateDisplay.jsx";
import CoachDisplay from "./CoachDisplay.jsx";
import AthleteSelect from "./AthleteSelect.jsx";
import { getAttendance } from "../api.js"; // api js import here to talk to backend :D

export default function Attendance() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCoach, setSelectedCoach] = useState("");
  const [presentAthletes, setPresentAthletes] = useState([]);
  const [attendanceRecords, setAttendanceRecords] = useState(null);

  const validData = selectedDate && selectedCoach && presentAthletes.length > 0;

  useEffect(() => {
    let running = true;
    async function fetchAttendance() {
      if (selectedDate && selectedCoach) {
        const json = await getAttendance(selectedDate, selectedCoach);
        if (!running) return;
        setAttendanceRecords(json);
      }
    }
    fetchAttendance();
    return () => {
      running = false;
    };
  }, [selectedDate, selectedCoach]);

  const { absent, present } = useMemo(() => {
    if (attendanceRecords === null) {
      return { absent: [], present: [] };
    }
    const absent = [];
    const present = [];
    for (let record of attendanceRecords) {
      if (record.coach) {
        present.push(record.athlete);
      } else {
        absent.push(record.athlete);
      }
    }
    return { absent, present };
  }, [attendanceRecords]);

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
