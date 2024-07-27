import React from "react";
import NavBar from "../NavBar";
import DateDisplay from "./DateDisplay";

export default function Attendance() {
  return (
    <div className="app-container">
      <DateDisplay />
      <NavBar />
    </div>
  );
}
