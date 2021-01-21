import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="wellboreRockData">Wellbore and Rock Data</Nav.Link>
            <Nav.Link href="pumpingData">Pumping Data</Nav.Link>
            <Nav.Link href="technicalData">Technical Data</Nav.Link>
            <Nav.Link href="fldInput">FLD Input</Nav.Link>
            <Nav.Link href="execution">exe Execution</Nav.Link>
            <Nav.Link href="plots">Plots</Nav.Link>
            <Nav.Link href="manual">Manual</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
