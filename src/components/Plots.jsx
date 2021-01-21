import React, { Component } from "react";
import PlotsNavBar from "./PlotsNavBar";
import NavBar from "../components/NavBar";

class Plots extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <PlotsNavBar />
      </div>
    );
  }
}

export default Plots;
