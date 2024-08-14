import React from "react";

export default function AthleteReview({ absentAthletes, presentAthletes }) {
  return (
    <div className="athlete-review-container d-flex justify-content-between">
      <div className="athlete-review-abscent p-3">
        <h3>Abscent</h3>
        <ul className="list-group">
          {absentAthletes.map((abscentAthlete) => (
            <li key={abscentAthlete.name} className="list-group-item">
              {abscentAthlete.name}
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
