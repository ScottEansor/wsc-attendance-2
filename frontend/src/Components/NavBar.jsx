import React from "react";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-light bg-light fixed-bottom bottom-nav">
        <div className="container-fluid d-flex justify-content-around">
          <a href="#home" className="nav-item text-center">
            <div>Home</div>
          </a>
          <a href="#profile" className="nav-item text-center">
            <div>Profile</div>
          </a>
          <a href="#settings" className="nav-item text-center">
            <div>Settings</div>
          </a>
        </div>
      </nav>
    </>
  );
}
