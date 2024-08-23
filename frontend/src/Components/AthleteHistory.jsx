import React, { useState, useMemo, useEffect } from "react";

const testAthletes = [
  { name: "Tyson", coach: "Coach Tony", date: "2024-08-01" },
  { name: "Winston", date: "2024-08-01" },
  { name: "Grayson", coach: "Coach Tony", date: "2024-08-01" },
  { name: "Theo", date: "2024-08-01" },
  { name: "Stevey", coach: "Coach Tony", date: "2024-08-01" },
  { name: "Tyson", coach: "Coach Tony", date: "2024-08-04" },
  { name: "Winston", date: "2024-08-04" },
  { name: "Grayson", coach: "Coach Tony", date: "2024-08-04" },
  { name: "Theo", coach: "Coach Scotty", date: "2024-08-04" },
  { name: "Stevey", coach: "Coach Tony", date: "2024-08-04" },
];

export default function AthleteHistory() {
  //test make sure data collection correct with Tim
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAthlete, setSelectedAthlete] = useState("");
  const [absentAthleteCount, setAbsentAthleteCount] = useState(0);

  function displayAthleteHistory(selectedAthlete) {
    let counter = 0;
    // Loop through testAthletes to compare names and check if the athlete has a coach
    testAthletes.forEach((testAthlete) => {
      if (
        testAthlete.name.toLowerCase() === selectedAthlete.toLowerCase() &&
        !testAthlete.coach
      ) {
        counter++;
      }
    });
    setAbsentAthleteCount(counter);
  }

  const filteredAthletes = useMemo(
    () => [
      ...new Set(
        //set doesnt allow duplicate values in an array
        testAthletes
          .filter((athlete) =>
            athlete.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((filteredAthlete) => filteredAthlete.name)
      ),
    ],
    [searchTerm]
  );

  useEffect(() => {
    if (searchTerm) {
      setSelectedAthlete(filteredAthletes[0] || "");
    }
  }, [filteredAthletes]);

  useEffect(() => {
    if (selectedAthlete) {
      displayAthleteHistory(selectedAthlete);
    }
  }, [selectedAthlete]);

  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Search Athlete Data.."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className="form-select"
        value={selectedAthlete}
        onChange={(e) => setSelectedAthlete(e.target.value)}
      >
        <option value="">Please select athlete</option>
        {filteredAthletes.map((athlete) => {
          return <option key={athlete}>{athlete}</option>;
        })}
      </select>
      {selectedAthlete && (
        <div>
          {absentAthleteCount > 0 ? (
            <p>
              {selectedAthlete} has been absent {absentAthleteCount} times.
            </p>
          ) : (
            <p>{selectedAthlete} has been present every day!</p>
          )}
        </div>
      )}
    </div>
  );
}
