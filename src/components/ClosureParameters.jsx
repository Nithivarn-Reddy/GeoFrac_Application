import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";

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
            <Form.Control
              type="text"
              className="smaller-input"
              type="text"
              name="fixedContactAperture"
              value={this.props.fileData["fixedContactAperture"] || ""}
              onChange={this.props.handleChange}
              placeholder=""
            />
          </Form.Group>

          <Form.Group as={Col} controlId="constantContactAperture">
            <Form.Label>
              Enter value of constant contact aperture for all fractures (m)
            </Form.Label>
            <Form.Control
              type="text"
              className="smaller-input"
              type="text"
              name="constantContactAperture"
              value={this.props.fileData["constantContactAperture"] || ""}
              onChange={this.props.handleChange}
              placeholder=""
            />
          </Form.Group>

          <Form.Group as={Col} controlId="percentageFractureWidths">
            <Form.Label>
              For variable contact aperture enter % of fracture widths right
              before injection
            </Form.Label>
            <Form.Control
              type="text"
              className="smaller-input"
              type="text"
              name="percentageFractureWidths"
              value={this.props.fileData["percentageFractureWidths"] || ""}
              onChange={this.props.handleChange}
              placeholder=""
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="enterSigmaRef">
            <Form.Label>Enter sigma_ref</Form.Label>
            <Form.Control
              type="text"
              className="smaller-input"
              type="text"
              name="enterSigmaRef"
              value={this.props.fileData["enterSigmaRef"] || ""}
              onChange={this.props.handleChange}
              placeholder=""
            />
          </Form.Group>

          <Form.Group as={Col} controlId="percentageStageFractures">
            <Form.Label>
              Percentage of retained widths for previous stage fractures for
              stage to stage stress shadow calculation
            </Form.Label>
            <Form.Control
              type="text"
              className="smaller-input"
              type="text"
              name="percentageStageFractures"
              value={this.props.fileData["percentageStageFractures"] || ""}
              onChange={this.props.handleChange}
              placeholder=""
            />
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}

export default ClosureParameters;
