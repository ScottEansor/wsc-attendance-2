import React, { useState, useMemo } from "react";
import "./Attendance.css";

export default function AthleteSelect() {
  const athletes = ["Tyson", "Winston", "Grayson", "Theo", "Stevey"];
  const [searchTerm, setSearchTerm] = useState("");
  const [absentAthletes, setAbsentAthletes] = useState(athletes);
  const [presentAthletes, setPresentAthletes] = useState([]);

  // functions
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  function handlePresent(clickedAthlete) {
    setAbsentAthletes((currentAbsent) =>
      currentAbsent.filter((absentAthlete) => absentAthlete !== clickedAthlete)
    );
    setPresentAthletes((currentPresent) => [...currentPresent, clickedAthlete]);
  }

  const filteredAthletes = useMemo(
    () =>
      absentAthletes.filter((athlete) =>
        athlete.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [absentAthletes, searchTerm]
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
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-primary w-100">Submit</button>
      </div>
    </div>
  );
}
