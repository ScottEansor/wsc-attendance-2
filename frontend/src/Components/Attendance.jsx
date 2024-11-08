import React, { useEffect, useMemo, useState } from "react";
import DateDisplay from "./DateDisplay.jsx";
import CoachDisplay from "./CoachDisplay.jsx";
import AthleteSelect from "./AthleteSelect.jsx";
import { getAttendance, saveAttendance } from "../api.js"; // api js import here to talk to backend :D

export default function Attendance() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCoach, setSelectedCoach] = useState("");
  const [attendanceRecords, setAttendanceRecords] = useState(null);

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
        present.push(record);
      } else {
        absent.push(record.athlete);
      }
    }
    return { absent, present };
  }, [attendanceRecords]);

  const onMarkPresent = async (athleteId) => {
    const body = {
      coach: selectedCoach,
      date: selectedDate,
      athlete: athleteId,
    };
    try {
      await saveAttendance(body);
      setAttendanceRecords((prevAttendanceRecords) =>
        prevAttendanceRecords.map((attendanceRecord) =>
          attendanceRecord.athlete._id === athleteId
            ? { ...attendanceRecord, coach: selectedCoach }
            : attendanceRecord
        )
      );
    } catch (err) {
      console.error("error saving attendance please check code");
    }
  };

  const onMarkAbsent = async (attendanceRecordId) => {
    console.log(attendanceRecordId);
  };

  return (
    <div className="app-container">
      <DateDisplay onDateChange={setSelectedDate} selectedDate={selectedDate} />
      <CoachDisplay
        onCoachChange={setSelectedCoach}
        selectedCoach={selectedCoach}
      />
      {selectedDate && selectedCoach && attendanceRecords && (
        <AthleteSelect
          presentAthletes={present}
          absentAthletes={absent}
          onMarkPresent={onMarkPresent}
          onMarkAbsent={onMarkAbsent}
        />
      )}
    </div>
  );
}
