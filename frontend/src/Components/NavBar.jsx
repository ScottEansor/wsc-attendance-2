import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-bottom bottom-nav">
        <div className="container-fluid d-flex justify-content-around">
          <Link to="/utility" className="nav-item text-center nav-link">
            <div>Utility</div>
          </Link>
          <Link to="/" className="nav-item text-center nav-link">
            <div>Attendance</div>
          </Link>
          <Link to="/coachreview" className="nav-item text-center nav-link">
            <div>Coach Review</div>
          </Link>
        </div>
      </nav>
    </>
  );
}
