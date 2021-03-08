import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class PlotsNavBar extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="contour">Contour</Nav.Link>
          <Nav.Link href="linePlot">Line Plot</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default PlotsNavBar;
