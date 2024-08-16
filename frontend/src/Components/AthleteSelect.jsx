import React, { useState, useMemo } from "react";
import "./Attendance.css";

export default function AthleteSelect({ presentAthletes, setPresentAthletes }) {
  const athletes = ["Tyson", "Winston", "Grayson", "Theo", "Stevey"];
  const [searchTerm, setSearchTerm] = useState("");
  // functions
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  function handlePresent(clickedAthlete) {
    setPresentAthletes((currentPresent) => [...currentPresent, clickedAthlete]);
  }

  const filteredAthletes = useMemo(
    () =>
      athletes.filter(
        (athlete) =>
          !presentAthletes.includes(athlete) &&
          athlete.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [athletes, searchTerm, presentAthletes]
  );

  return (
    <div className="athlete-list-container container-fluid d-flex flex-column justify-between">
      {/* search */}
      <div className="search-bar mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search athlete..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {/* lists */}
      <div className="d-flex flex-grow-1">
        {/* abscent list */}
        <div className="absent-list flex-fill p-3">
          <h3>Absent</h3>
          <ul className="list-group">
            {filteredAthletes.map((athlete) => (
              <li
                key={athlete}
                className="list-group-item list-group-item-action"
                onClick={() => handlePresent(athlete)}
              >
                {athlete}
              </li>
            ))}
          </ul>
        </div>
        {/* present list */}
        <div className="present-list flex-fill p-3">
          <h3>Present</h3>
          <ul className="list-group">
            {presentAthletes.map((athlete) => (
              <li key={athlete} className="list-group-item">
                {athlete}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
