import React, { useState, useMemo, useEffect } from "react";
// ------review use effect with Tim and talk about function for review. make sure its dialed

//
export default function AthleteHistory({ history }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAthlete, setSelectedAthlete] = useState("");
  //test make sure data collection correct with Tim

  const selectedAthleteAbsentDates = useMemo(() => {
    let absentDates = [];

    // Loop through testAthletes to compare names and check if the athlete has a coach
    history.forEach((testAthlete) => {
      if (
        testAthlete.name.toLowerCase() === selectedAthlete.toLowerCase() &&
        !testAthlete.coach
      ) {
        absentDates.push(testAthlete.date);
      }
    });
    return absentDates;
  }, [selectedAthlete]);

  const filteredAthletes = useMemo(
    () => [
      ...new Set(
        //set doesnt allow duplicate values in an array/ also a data structure type
        history
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

  // was just starting to try to solve the next div functionallity wise
  // useEffect(() => {
  //   if (absentAthleteCount > 3) {
  //     displayAthleteHistory(selectedAthlete);
  //   }
  // }, [absentAthleteCount]);

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
        <>
          <div>Days missed: {selectedAthleteAbsentDates.length}</div>
          <div>
            {selectedAthleteAbsentDates.map((selectedAthleteAbsentDate) => (
              <div key={selectedAthleteAbsentDate}>
                {selectedAthleteAbsentDate}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
