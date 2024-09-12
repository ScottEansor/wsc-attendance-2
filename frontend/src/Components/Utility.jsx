import React, { useEffect, useState } from "react";
import AddAthlete from "./AddAthlete";
import AddCoach from "./AddCoach";
import AthleteHistory from "./AthleteHistory";
import MissedAthletes from "./MissedAthletes.jsx";
import "./utility.css";
import { getAttendance } from "../api.js";

export default function Utility() {
  const [attendance, setAttendance] = useState(null);

  useEffect(() => {
    let running = true;
    async function fetchAttendance() {
      const json = await getAttendance();
      if (!running) return;
      setAttendance(json);
    }
    fetchAttendance();
    return () => {
      running = false;
    };
  }, []);

  if (attendance === null) {
    return <div>Loading..</div>;
  }
  return (
    <div className="utility">
      <div className="add-container d-flex flex-column align-items-center p-3 mb-2">
        <AddAthlete />
        <AddCoach />
      </div>
      <AthleteHistory history={attendance} />
      <MissedAthletes history={attendance} />
    </div>
  );
}
