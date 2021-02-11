import React, { Component } from "react";
// import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  state = {};

  logout = () => {
    localStorage.removeItem("jwt-token");
    localStorage.removeItem("role");
    this.hideLogout();
    this.hideUsers();
  };

  showUsers = () => {
    document.getElementById("users").style.display = "block";
  };
  showLogout = () => {
    document.getElementById("logout").style.display = "block";
  };

  hideLogout = () => {
    document.getElementById("logout").style.display = "none";
  };

  hideUsers = () => {
    document.getElementById("users").style.display = "none";
  };

  componentDidMount() {
    if (localStorage.getItem("jwt-token") !== null) {
      if (JSON.parse(localStorage.getItem("role")).role === "admin") {
        this.showUsers();
      }
      this.showLogout();
    } else {
      this.hideLogout();
      this.hideUsers();
    }
  }

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
              <NavLink className="nav-link" to="/fldInput">
                FLD Input
              </NavLink>
              <NavLink className="nav-link" to="/technicalData">
                Technical Data
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
              <NavLink
                className="nav-link"
                id="logout"
                to="/"
                onClick={this.logout}
                style={{ display: "none" }}
              >
                Logout
              </NavLink>
              <NavLink
                className="nav-link"
                id="users"
                to="/users"
                style={{ display: "none" }}
              >
                Users
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
