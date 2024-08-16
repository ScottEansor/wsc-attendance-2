import React from "react";

export default function AthleteReview({ absentAthletes, presentAthletes }) {
  return (
    <div className="athlete-review-container d-flex justify-content-between">
      <div className="athlete-review-absent p-3">
        <h3>Absent</h3>
        <ul className="list-group">
          {absentAthletes.map((absentAthlete) => (
            <li key={absentAthlete.name} className="list-group-item">
              {absentAthlete.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="athlete-review-present p-3">
        <h3>Present</h3>
        <ul className="list-group">
          {presentAthletes.map((presentAthlete) => (
            <li key={presentAthlete.name} className="list-group-item">
              {presentAthlete.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
