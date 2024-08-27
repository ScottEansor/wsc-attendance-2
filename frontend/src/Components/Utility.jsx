import React from "react";
import AddAthlete from "./AddAthlete";
import AddCoach from "./AddCoach";
import AthleteHistory from "./AthleteHistory";
import MissedAthletes from "./MissedAthletes.jsx";

const testAthletes = [
  { name: "Tyson", coach: "Coach Tony", date: "2024-08-01" },
  { name: "Winston", date: "2024-08-01" },
  { name: "Grayson", coach: "Coach Tony", date: "2024-08-01" },
  { name: "Theo", date: "2024-08-01" },
  { name: "Theo", date: "2024-08-01" },
  { name: "Theo", date: "2024-08-01" },
  { name: "Stevey", coach: "Coach Tony", date: "2024-08-01" },
  { name: "Tyson", coach: "Coach Tony", date: "2024-08-04" },
  { name: "Winston", date: "2024-08-04" },
  { name: "Grayson", coach: "Coach Tony", date: "2024-08-04" },
  { name: "Theo", coach: "Coach Scotty", date: "2024-08-04" },
  { name: "Stevey", coach: "Coach Tony", date: "2024-08-04" },
  { name: "Winston", date: "2024-08-08" },
  { name: "Winston", date: "2024-08-05" },
];

export default function Utility() {
  return (
    <div>
      <AddAthlete />
      <AddCoach />
      <AthleteHistory history={testAthletes} />
      <MissedAthletes history={testAthletes} />
    </div>
  );
}
