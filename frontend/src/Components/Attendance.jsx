import React, { useEffect, useMemo, useState } from "react";
import DateDisplay from "./DateDisplay.jsx";
import CoachDisplay from "./CoachDisplay.jsx";
import AthleteSelect from "./AthleteSelect.jsx";
import { getAttendance, markAsPresent } from "../api.js"; // api js import here to talk to backend :D

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
      return { absent: null, present: null };
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
      const newAttendanceRecord = await markAsPresent(body);
      setAttendanceRecords((prevAttendanceRecords) =>
        prevAttendanceRecords.map((attendanceRecord) =>
          attendanceRecord.athlete._id === athleteId
            ? newAttendanceRecord
            : attendanceRecord
        )
      );
    } catch (err) {
      console.error(err);
      console.error("error saving attendance please check code");
    }
  };

  const onMarkAbsent = async (attendanceRecordId) => {
    try {
      //work on markAsAbsent --start here --
      console.log(`Marking record ${attendanceRecordId} as absent`);
      setAttendanceRecords((prevAttendanceRecords) =>
        prevAttendanceRecords.map((attendanceRecord) => {
          if (attendanceRecord._id === attendanceRecordId) {
            return { ...attendanceRecord, coach: null, _id: null };
          }
          return attendanceRecord; // Keep other records unchanged
        })
      );
    } catch (error) {
      console.error("Failed to mark as absent:", error);
    }
  };

  return (
    <div className="app-container">
      <DateDisplay onDateChange={setSelectedDate} selectedDate={selectedDate} />
      <CoachDisplay
        onCoachChange={setSelectedCoach}
        selectedCoach={selectedCoach}
      />
      {present && absent && (
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
