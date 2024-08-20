import React, { useState } from "react";

export default function AddAthlete() {
  const [athleteName, setAthleteName] = useState("");

  const handleClick = () => {
    console.log(`New Athlete added: ${athleteName}`);
    setAthleteName("");
  };

  return (
    <div className="add-container form-control mb-2">
      <input
        type="text"
        placeholder="Add Athlete"
        value={athleteName}
        onChange={(e) => setAthleteName(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
