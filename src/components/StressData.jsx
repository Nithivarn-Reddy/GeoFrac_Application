import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";
class StressData extends Component {
  state = {};
  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="errorConstInStressSxxFunc">
            <Form.Label>Enter constants in Sxx stress function</Form.Label>
            <Form.Control
              type="text"
              name="errorConstInStressSxxFunc"
              value={this.props.fileData["errorConstInStressSxxFunc"] || ""}
              onChange={this.props.handleChange}
              // placeholder=""
            />
          </Form.Group>

          <Form.Group as={Col} controlId="errorConstInStressSyyFunc">
            <Form.Label>Enter constants in Syy stress function</Form.Label>
            <Form.Control
              type="text"
              name="errorConstInStressSyyFunc"
              value={this.props.fileData["errorConstInStressSyyFunc"] || ""}
              onChange={this.props.handleChange}
              // placeholder=""
            />
          </Form.Group>

          <Form.Group as={Col} controlId="errorConstInStressSxyFunc">
            <Form.Label>Enter constansts in Sxy stress function</Form.Label>
            <Form.Control
              type="text"
              name="errorConstInStressSxyFunc"
              value={this.props.fileData["errorConstInStressSxyFunc"] || ""}
              onChange={this.props.handleChange}
              // placeholder="Enter constansts in Sxy stress function"
            />
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}

export default StressData;
