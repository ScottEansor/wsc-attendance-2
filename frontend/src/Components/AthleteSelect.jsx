import React, { useState, useMemo } from "react";
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
    console.log("setting id to delete:", clickedRecordId);
    setIdToDelete(clickedRecordId);
  }
  function confirmAbsent() {
    onMarkAbsent(idToDelete);
    setIdToDelete(null);
  }
  const filteredAbsentAthletes = useMemo(
    () =>
      absentAthletes?.filter((athlete) =>
        athlete.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm, absentAthletes]
  );
  console.log("Present athletes:", presentAthletes);
  return (
    <>
      {idToDelete && (
        <div className="modal show" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Absent</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={cancelAbsent}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to mark this athlete as absent?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={cancelAbsent}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={confirmAbsent}
                >
                  Confirm
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
