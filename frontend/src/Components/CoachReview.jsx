import React, { useState, useEffect } from "react";
import DateDisplay from "./DateDisplay";
import CoachDisplay from "./CoachDisplay";
import AthleteReview from "./AthleteReview";
import { getAttendance } from "../api";

export default function CoachReview() {
  const [attendances, setAttendance] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCoach, setSelectedCoach] = useState("");

  //10/9/24 continue here api.js (reffer)
  useEffect(() => {
    let running = true;
    async function fetchAttendance() {
      const json = await getAttendance(selectedDate, selectedCoach);
      if (!running) return;
      setAttendance(json);
    }
    fetchAttendance();
    return () => {
      running = false;
    };
  }, [selectedCoach, selectedDate]);

  const absentAthletes = attendances?.filter((athlete) => !athlete.coach);
  const presentAthletes = attendances?.filter((athlete) => athlete.coach);

  if (attendances === null) {
    return <div>Loading..</div>;
  }
  return (
    <div>
      <DateDisplay onDateChange={setSelectedDate} selectedDate={selectedDate} />
      {
        <CoachDisplay
          onCoachChange={setSelectedCoach}
          selectedCoach={selectedCoach}
        />
      }
      {/* Only render AthleteReview if a date is selected */}
      {selectedDate && (
        <AthleteReview
          absentAthletes={absentAthletes}
          presentAthletes={presentAthletes}
        />
      )}
    </div>
  );
}
