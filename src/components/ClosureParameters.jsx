import React, { Component } from "react";
import { Form, Table, Col } from "react-bootstrap";

class ClosureParameters extends Component {
  state = {};
  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="fixedContactAperture">
            <Form.Label>
              For fixed contact aperture during shut-in enter 1,else enter 2
            </Form.Label>
            <Form.Control type="text" 
            className="smaller-input"
              type="text"
              name="fixed contact aperture"
              value={
                this.state.fileData["fixed contact aperture"] || ""
              }
              onChange={this.handleChange}
            placeholder="" />
          </Form.Group>

          <Form.Group as={Col} controlId="constantContactAperture">
            <Form.Label>
              Enter value of constant contact aperture for all fractures (m)
            </Form.Label>
            <Form.Control type="text" 
            className="smaller-input"
              type="text"
              name="constant contact aperture"
              value={
                this.state.fileData["constant contact aperture"] || ""
              }
              onChange={this.handleChange}
            placeholder="" />
          </Form.Group>

          <Form.Group as={Col} controlId="percentageFractureWidths">
            <Form.Label>
              For variable contact aperture enter % of fracture widths right
              before injection
            </Form.Label>
            <Form.Control type="text" 
            className="smaller-input"
              type="text"
              name="% of fracture widths"
              value={
                this.state.fileData["% of fracture widths"] || ""
              }
              onChange={this.handleChange}
            placeholder="" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="enterSigmaRef">
            <Form.Label>Enter sigma_ref</Form.Label>
            <Form.Control type="text" 
            className="smaller-input"
              type="text"
              name="sigma_ref"
              value={
                this.state.fileData["sigma_ref"] || ""
              }
              onChange={this.handleChange}
            placeholder="" />
          </Form.Group>

          <Form.Group as={Col} controlId="percentageStageFractures">
            <Form.Label>
              Percentage of retained widths for previous stage fractures for
              stage to stage stress shadow calculation
            </Form.Label>
            <Form.Control type="text" 
            className="smaller-input"
              type="text"
              name="percentage of retained widths"
              value={
                this.state.fileData["percentage of retained widths"] || ""
              }
              onChange={this.handleChange}
            placeholder="" />
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}

export default ClosureParameters;
