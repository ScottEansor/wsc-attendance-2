import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Attendance.css";

export default function DateDisplay() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="date-display-container text-center">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<CustomInput date={startDate} />}
        calendarClassName="datepicker-calendar"
        wrapperClassName="datepicker-wrapper"
      />
    </div>
  );
}

const CustomInput = forwardRef(({ value, onClick, date }, ref) => (
  <button className="btn btn-light" onClick={onClick} ref={ref}>
    {date.toDateString()}
  </button>
));
