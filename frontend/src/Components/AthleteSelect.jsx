import React, { useState, useMemo, useEffect } from "react";
import "./Attendance.css";

export default function AthleteSelect({
  presentAthletes,
  onMarkPresent,
  onMarkAbsent,
  absentAthletes,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [idToDelete, setIdToDelete] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  function handlePresent(clickedAthleteId) {
    onMarkPresent(clickedAthleteId);
  }
  function handleAbsent(clickedRecordId) {
    setIdToDelete(clickedRecordId);
  }

  const filteredAbsentAthletes = useMemo(
    () =>
      absentAthletes?.filter((athlete) =>
        athlete.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm, absentAthletes]
  );

  return (
    <>
      {idToDelete && (
        <div class="modal show" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="athlete-list-container container-fluid d-flex flex-column justify-between">
        <div className="search-bar mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search athlete..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="d-flex flex-grow-1">
          <div className="absent-list flex-fill p-3">
            <h3>Absent</h3>
            <ul className="list-group">
              {filteredAbsentAthletes.map(({ _id, name }) => (
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
          <div className="present-list flex-fill p-3">
            <h3>Present</h3>
            <ul className="list-group">
              {presentAthletes.map(({ _id, athlete: { name } }) => (
                <li
                  key={_id}
                  className="list-group-item"
                  onClick={() => handleAbsent(_id)}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
