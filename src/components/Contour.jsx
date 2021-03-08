import React, { Component } from "react";
import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons';
import { Form, Col, Button, Check } from "react-bootstrap";
import NavBar from "../components/NavBar";
import PlotsNavBar from "./PlotsNavBar";

class Contour extends Component {
    state = {};

render() {
    return (
        <div> 
        <NavBar />
        <PlotsNavBar />

        <div style={ { padding: 16 } }>
        <h4>Vertical Radio Buttons</h4>
        <RadioGroup onChange={ this.onChange }>
          <RadioButton value="apple">
            Aperture R3D
          </RadioButton>
          <RadioButton value="orange">
            Pore Pressure
          </RadioButton>
          <ReversedRadioButton value="melon">
            Stress
          </ReversedRadioButton>
        </RadioGroup>
        </div>
        <Button variant="primary" type="submit" >
        Submit
      </Button></div>
    );

};
}

export default Contour;