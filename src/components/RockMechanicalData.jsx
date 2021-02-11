import React, { Component } from "react";
import { Form, Table, Col } from "react-bootstrap";

class RockMechanicalData extends Component {
  state = {};
  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="payZoneThickness">
            <Form.Label>Payzone thickness (m)</Form.Label>
            <Form.Control
              className="smaller-input"
              type="text"
              name="payzone thickness"
              value={
                this.state.fileData["payzone thickness"] || ""
              }
              onChange={this.handleChange}
              // placeholder=""
            />
          </Form.Group>

          <Form.Group as={Col} controlId="stressBarriers">
            <Form.Label>Stress barriers</Form.Label>
            <Form.Control
              className="smaller-input"
              as="select"
              defaultValue="Choose..."
            >
              <option>Choose...</option>
              <option>symetric</option>
              <option>asymetric</option>
              <option>no_barrier</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="excessStressTopBottom">
            <Form.Label>
              Excess stress in top and bottom barriers respectively (Pa)
            </Form.Label>
            <Form.Control
              className="smaller-input"
              type="text"
              name="excess stress in top"
              value={
                this.state.fileData["excess stress in top"] || ""
              }
              onChange={this.handleChange}
              // placeholder="Enter excess stress in top and bottom barriers respectively (Pa)"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="maxHeightGrowth">
            <Form.Label>
              Maximum value of excess height growth allowed into top and bottom
              barrier respectively (m)
            </Form.Label>
            <Form.Control
              className="smaller-input"
              type="text"
              name="excess height growth"
              value={
                this.state.fileData["excess height growth"] || ""
              }
              onChange={this.handleChange}
              // placeholder="Enter maximum value of excess height growth allowed into top and bottom barrier respectively (m)"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="fluidLeakModel">
            <Form.Label>Fluid leak-off model</Form.Label>
            <br />
            <br />
            <Form.Control
              className="smaller-input"
              type="text"
              name="Fluid Leak-off model"
              value={
                this.state.fileData["Fluid Leak-off model"] || ""
              }
              onChange={this.handleChange}
              // placeholder="Enter fluid leak-off model"
            ></Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="youngModulus">
            <Form.Label>Young's modulus</Form.Label>
            <Form.Control
              className="smaller-input"
              type="text"
              name="YOUNG'S MODULUS"
              value={
                this.state.fileData["YOUNG'S MODULUS"] || ""
              }
              onChange={this.handleChange}
              // placeholder="Enter young's modulus"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="poissonRatio">
            <Form.Label>Poisson's ratio</Form.Label>
            <Form.Control
              className="smaller-input"
              type="text"
              name="POISSON'S RATIO"
              value={
                this.state.fileData["POISSON'S RATIO"] || ""
              }
              onChange={this.handleChange}
              // placeholder="Enter poisson's ratio"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="fractureToughness">
            <Form.Label>Fracture toughness of the rock</Form.Label>
            <Form.Control
              className="smaller-input"
              type="text"
              name="TOUGHNESS OF THE ROCK"
              value={
                this.state.fileData["TOUGHNESS OF THE ROCK"] || ""
              }
              onChange={this.handleChange}
              // placeholder="Enter fracture toughness of the rock"
            ></Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="porosity">
            <Form.Label>Porosity</Form.Label>
            <Form.Control
              className="smaller-input"
              type="text"
              name="porosity"
              value={
                this.state.fileData["porosity"] || ""
              }
              onChange={this.handleChange}
              // placeholder="Enter porosity"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="permeability">
            <Form.Label>Permeability</Form.Label>
            <Form.Control
              className="smaller-input"
              type="text"
              name="permeability"
              value={
                this.state.fileData["permeability"] || ""
              }
              onChange={this.handleChange}
              // placeholder="Enter permeability"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="initialPorePressure">
            <Form.Label>Intitial pore pressure</Form.Label>
            <Form.Control
              className="smaller-input"
              type="text"
              name="initial pore pressure"
              value={
                this.state.fileData["initial pore pressure"] || ""
              }
              onChange={this.handleChange}
              // placeholder="Enter intitial pore pressure"
            ></Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="fractureToughnessTop">
            <Form.Label>
              Enter fracture toughness in vertical direction for top bounding
              layers
            </Form.Label>
            <Form.Control
              className="smaller-input"
              type="text"
              name="toughness in vertical direction"
              value={
                this.state.fileData["toughness in vertical direction"] || ""
              }
              onChange={this.handleChange}
              // placeholder="Enter fracture toughness in vertical direction for top bounding layers"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="fractureToughnessBottom">
            <Form.Label>
              Enter fracture toughness in vertical direction for bottom bounding
              layers
            </Form.Label>
            <Form.Control
              className="smaller-input"
              type="text"
              name="toughness in vertical direction"
              value={
                this.state.fileData["toughness in vertical direction"] || ""
              }
              onChange={this.handleChange}
              // placeholder="Enter fracture toughness in vertical direction for bottom bounding layers"
            />
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}

export default RockMechanicalData;
