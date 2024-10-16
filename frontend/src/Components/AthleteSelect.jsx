import React, { useState, useMemo, useEffect } from "react";
import { getAthletes } from "../api";
import "./Attendance.css";

export default function AthleteSelect({ presentAthletes, onMarkPresent }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [athletes, setAthletes] = useState(null);

  useEffect(() => {
    let running = true;
    async function fetchAthletes() {
      const json = await getAthletes();
      if (!running) return;
      setAthletes(json);
    }
    fetchAthletes();
    return () => {
      running = false;
    };
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  function handlePresent(clickedAthlete) {
    onMarkPresent(clickedAthlete);
  }

  const filteredAthletes = useMemo(
    () =>
      athletes?.filter(
        ({ name }) =>
          !presentAthletes.includes(name) &&
          name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [athletes, searchTerm, presentAthletes]
  );

  if (athletes === null) {
    return <div>Loading..</div>;
  }

  return (
    <div className="athlete-list-container container-fluid d-flex flex-column justify-between">
      {/* search */}
      <div className="search-bar mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search athlete..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {/* lists */}
      <div className="d-flex flex-grow-1">
        {/* abscent list */}
        <div className="absent-list flex-fill p-3">
          <h3>Absent</h3>
          <ul className="list-group">
            {/* finishd here >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            {filteredAthletes.map(({ _id, name }) => (
              <li
                key={_id}
                className="list-group-item list-group-item-action"
                onClick={() => handlePresent(_id)}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
        {/* present list */}
        <div className="present-list flex-fill p-3">
          <h3>Present</h3>
          <ul className="list-group">
            {presentAthletes.map(({ athlete, _id = athlete }) => (
              <li key={_id} className="list-group-item">
                {athlete}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
