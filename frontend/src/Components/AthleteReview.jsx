import React from "react";

export default function AthleteReview({ absentAthletes, presentAthletes }) {
  return (
    <div className="athlete-review-container d-flex justify-content-between">
      <div className="athlete-review-absent p-3">
        <h3>Absent</h3>
        <ul className="list-group">
          {absentAthletes.map((absentAthlete) => (
            <li key={absentAthlete.athlete} className="list-group-item">
              {absentAthlete.athlete}
            </li>
          ))}
        </ul>
      </div>
      <div className="athlete-review-present p-3">
        <h3>Present</h3>
        <ul className="list-group">
          {presentAthletes.map((presentAthlete) => (
            <li key={presentAthlete.athlete} className="list-group-item">
              {presentAthlete.athlete}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
