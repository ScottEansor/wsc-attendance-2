import React, { useEffect, useMemo, useState } from "react";
import DateDisplay from "./DateDisplay.jsx";
import CoachDisplay from "./CoachDisplay.jsx";
import AthleteSelect from "./AthleteSelect.jsx";
import { getAllAthletes, getAttendance, markAsPresent } from "../api.js"; // api js import here to talk to backend :D

export default function Attendance() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCoach, setSelectedCoach] = useState("");
  const [attendanceRecords, setAttendanceRecords] = useState(null);
  const [athletes, setAthletes] = useState(null);

  useEffect(() => {
    let running = true;
    async function fetchAttendance() {
      if (selectedDate) {
        const json = await getAttendance(selectedDate);
        if (!running) return;
        setAttendanceRecords(json);
      }
    }
    fetchAttendance();
    return () => {
      running = false;
    };
  }, [selectedDate]);

  useEffect(() => {
    let running = true;
    async function fetchAthletes() {
      const json = await getAllAthletes();
      if (!running) return;
      setAthletes(json);
    }
    fetchAthletes();
    return () => {
      running = false;
    };
  }, []);
  // const { absent, present } = useMemo(() => {
  //   if (attendanceRecords === null) {
  //     return { absent: null, present: null };
  //   }
  //   const absent = [];
  //   const present = [];
  //   for (let record of attendanceRecords) {
  //     if (record.coach) {
  //       present.push(record);
  //     } else {
  //       absent.push(record.athlete);
  //     }
  //   }
  //   return { absent, present };
  // }, [attendanceRecords]);

  const present = useMemo(() => {
    if (!attendanceRecords || !selectedCoach) {
      return null;
    }
    return attendanceRecords.filter((attendanceRecord) => {
      return attendanceRecord.coach._id === selectedCoach;
    });
  }, [attendanceRecords, selectedCoach]);

  //--start here 12/18--
  const absent = useMemo(() => {
    if (!attendanceRecords || !athletes) {
      return null;
    }

    const presentIds = attendanceRecords
      .filter((attendanceRecord) => attendanceRecord.coach)
      .map((attendanceRecord) => attendanceRecord.athlete._id);

    const absentAthletes = athletes.filter(
      (athlete) => !presentIds.includes(athlete._id)
    );

    console.log("Absent Athletes:", absentAthletes);
    return absentAthletes;
  }, [attendanceRecords, athletes]);
  //tried for 20 min couldnt figure it out
  //calculate the absent based off the attendance records
  //for each athlete if they do not have an entry in attendance records
  //they are absent

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
