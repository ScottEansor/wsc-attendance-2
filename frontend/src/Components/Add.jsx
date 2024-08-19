import React from "react";

export default function Add({
  athleteName,
  coachName,
  setAthleteName,
  setCoachName,
  onSubmit,
}) {
  return (
    <>
      <div className="add-container form-control mb-2">
        <h3>Add New Athlete and Coach</h3>
        <input
          type="text"
          placeholder="Athlete Name"
          value={athleteName}
          onChange={(e) => setAthleteName(e.target.value)}
        />
      </div>
      <div className="add-container form-control mb-2">
        <input
          type="text"
          placeholder="Coach Name"
          value={coachName}
          onChange={(e) => setCoachName(e.target.value)}
        />
        <button onClick={onSubmit} className="btn btn-primary ">
          Submit
        </button>
      </div>
    </>
  );
}
