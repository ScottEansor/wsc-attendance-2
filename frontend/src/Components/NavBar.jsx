import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-bottom bottom-nav">
        <div className="container-fluid d-flex justify-content-around">
          <a href="#home" className="nav-item text-center nav-link">
            <div>Utility</div>
          </a>
          <a href="#profile" className="nav-item text-center nav-link">
            <div>Attendance</div>
          </a>
          <a href="#settings" className="nav-item text-center nav-link">
            <div>Coach Review</div>
          </a>
        </div>
      </nav>
    </>
  );
}
