import React from "react";
import NavBar from "../NavBar";
import DateDisplay from "./DateDisplay";
import CoachDisplay from "./CoachDisplay.jsx";

export default function Attendance() {
  return (
    <div className="app-container">
      <DateDisplay />
      <CoachDisplay />
      <NavBar />
    </div>
  );
}
