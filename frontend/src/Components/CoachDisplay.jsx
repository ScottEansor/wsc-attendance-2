import React, { useEffect, useState } from "react";
import "./Attendance.css";
import { getCoaches } from "../api";

export default function CoachDisplay({ onCoachChange, selectedCoach }) {
  const [coaches, setCoaches] = useState(null);

  useEffect(() => {
    let running = true;
    async function fetchCoaches() {
      const json = await getCoaches();
      if (!running) return;
      setCoaches(json);
    }
    fetchCoaches();
    return () => {
      running = false;
    };
  }, []);

  function handleCoachSelectChange(e) {
    onCoachChange(e.target.value);
  }

  return (
    <select
      id="coach-select"
      value={selectedCoach}
      onChange={handleCoachSelectChange}
      className="coach-select-dropdown"
    >
      <option value="">Choose Coach</option>
      {coaches?.map(({ name, _id }) => (
        <option key={_id} value={_id}>
          {name}
        </option>
      ))}
    </select>
  );
}
