import React, { Component } from "react";
// import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            GeoFrac
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/wellboreRockData"
              >
                Wellbore and Rock Data
              </NavLink>
              <NavLink className="nav-link" to="/pumpingData">
                Pumping Data
              </NavLink>
              <NavLink className="nav-link" to="/technicalData">
                Technical Data
              </NavLink>
              <NavLink className="nav-link" to="/fldInput">
                FLD Input
              </NavLink>
              <NavLink className="nav-link" to="/execution">
                exe Execution
              </NavLink>
              <NavLink className="nav-link" to="/plots">
                Plots
              </NavLink>
              <NavLink className="nav-link" to="/manual">
                Manual
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
