import React, { useState } from "react";

export default function AddCoach() {
  const [coachName, setCoachName] = useState("");

  const handleClick = () => {
    console.log(`New Coach added: ${coachName}`);
    setCoachName("");
  };
  return (
    <div className="add-container form-control mb-2">
      <input
        type="text"
        placeholder="Add Coach"
        value={coachName}
        onChange={(e) => setCoachName(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
