import React, { useState } from "react";
import "./Attendance.css";

//remove date picker from dependancies
export default function DateDisplay() {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="date-display-container">
      <label htmlFor="date-picker">Choose Date:</label>
      <input
        type="date"
        id="date-picker"
        value={selectedDate}
        onChange={handleDateChange}
        className="date-picker-input"
      />
    </div>
  );
}
