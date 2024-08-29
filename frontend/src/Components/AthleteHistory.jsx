import React, { useState, useMemo, useEffect } from "react";
import "./utility.css"; // Ensure the path is correct

export default function AthleteHistory({ history }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAthlete, setSelectedAthlete] = useState("");

  const selectedAthleteAbsentDates = useMemo(() => {
    let absentDates = [];
    history.forEach((testAthlete) => {
      if (
        testAthlete.name.toLowerCase() === selectedAthlete.toLowerCase() &&
        !testAthlete.coach
      ) {
        absentDates.push(testAthlete.date);
      }
    });
    return absentDates;
  }, [selectedAthlete, history]);

  const filteredAthletes = useMemo(
    () => [
      ...new Set(
        history
          .filter((athlete) =>
            athlete.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((filteredAthlete) => filteredAthlete.name)
      ),
    ],
    [searchTerm, history]
  );

  useEffect(() => {
    if (searchTerm) {
      setSelectedAthlete(filteredAthletes[0] || "");
    }
  }, [filteredAthletes, searchTerm]);

  return (
    <div className="main-container p-3 mb-2">
      <input
        type="text"
        className="form-control"
        placeholder="Search Athlete Data..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className="form-select custom-select"
        value={selectedAthlete}
        onChange={(e) => setSelectedAthlete(e.target.value)}
      >
        <option value="">Please select athlete</option>
        {filteredAthletes.map((athlete) => (
          <option key={athlete}>{athlete}</option>
        ))}
      </select>
      {selectedAthlete && (
        <>
          <div className="days-missed-container">
            Days missed: {selectedAthleteAbsentDates.length}
          </div>
          <div className="dates-list-container">
            {selectedAthleteAbsentDates.map((selectedAthleteAbsentDate) => (
              <div key={selectedAthleteAbsentDate} className="date-item">
                {selectedAthleteAbsentDate}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
