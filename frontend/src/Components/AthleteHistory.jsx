import React, { useState } from "react";

export default function AthleteHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const athletes = ["Tyson", "Winston", "Grayson", "Theo", "Stevey"];

  const filteredAthletes = useMemo(
    () =>
      athletes.filter((athlete) =>
        athlete.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [athletes, searchTerm]
  );

  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Search Athlete Data.."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select className="form-select">
        {filteredAthletes.map((athlete) => {
          return <option key={athlete}>{athlete}</option>;
        })}
      </select>
    </div>
  );
}
