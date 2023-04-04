import React from "react";

// Navbar component.  Defaults to About page.

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark justify-content-end">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <span className="brand">Bill Stephens</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="resume">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a href="contact">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;