import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${classes.bgcolor}`}>
      <div className="container-lg d-flex justify-content-between">
        <a className="navbar-brand" href="#">
          MindOptimizers
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-grow-0"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="/matching">
              Resume Matching
            </a>
            <a className="nav-link" href="#">
              Reports
            </a>
            <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
              About Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
