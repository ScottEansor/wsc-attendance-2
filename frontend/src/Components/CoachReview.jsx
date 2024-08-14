import React, { useState } from "react";
import DateDisplay from "./DateDisplay";
import CoachDisplay from "./CoachDisplay";
import AthleteReview from "./AthleteReview";

// Sample data (This would normally come from a backend or state)
const testAthletes = [
  { name: "Tyson", coach: "Coach Tony", date: "2024-08-01", present: true },
  { name: "Winston", coach: "Coach Andy", date: "2024-08-01", present: false },
  { name: "Grayson", coach: "Coach Tony", date: "2024-08-01", present: true },
  { name: "Theo", coach: "Coach Scotty", date: "2024-08-01", present: false },
  { name: "Stevey", coach: "Coach Tony", date: "2024-08-01", present: true },
];

export default function CoachReview() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCoach, setSelectedCoach] = useState("");

  //still need some review on this ->
  const filteredAthletes = testAthletes.filter(
    (athlete) =>
      athlete.date === selectedDate &&
      (!selectedCoach || athlete.coach === selectedCoach)
  );

  const absentAthletes = filteredAthletes.filter(
    (athlete) => athlete.present === false
  );
  const presentAthletes = filteredAthletes.filter(
    (athlete) => athlete.present === true
  );

  return (
    <div>
      <DateDisplay onDateChange={setSelectedDate} />
      {<CoachDisplay onCoachChange={setSelectedCoach} />}
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
