import React, { useState } from "react";
import Add from "./Add";

export default function Utility() {
  const [athleteName, setAthleteName] = useState("");
  const [coachName, setCoachName] = useState("");

  const handleAddAthleteCoach = () => {
    console.log(`New Athlete added: ${athleteName}`);
    console.log(`New Coach added: ${coachName}`);
    setAthleteName("");
    setCoachName("");
  };

  return (
    <div>
      <Add
        athleteName={athleteName}
        coachName={coachName}
        setAthleteName={setAthleteName}
        setCoachName={setCoachName}
        onSubmit={handleAddAthleteCoach}
      ></Add>
    </div>
  );
}
