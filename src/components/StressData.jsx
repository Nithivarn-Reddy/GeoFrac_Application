import React, { Component } from "react";
import { Form, Table, Col } from "react-bootstrap";
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
              name="function SXX=aX+bY+c"
              value={
                this.state.fileData["function SXX=aX+bY+c"] || ""
              }
              onChange={this.handleChange}
              // placeholder=""
            />
          </Form.Group>

          <Form.Group as={Col} controlId="errorConstInStressSyyFunc">
            <Form.Label>Enter constants in Syy stress function</Form.Label>
            <Form.Control
              type="text"
              name="function SYY=aX+bY+c"
              value={
                this.state.fileData["function SYY=aX+bY+c"] || ""
              }
              onChange={this.handleChange}
              // placeholder=""
            />
          </Form.Group>

          <Form.Group as={Col} controlId="errorConstInStressSxyFunc">
            <Form.Label>Enter constansts in Sxy stress function</Form.Label>
            <Form.Control
              type="text"
              name="function SXY=aX+bY+c"
              value={
                this.state.fileData["function SXY=aX+bY+c"] || ""
              }
              onChange={this.handleChange}
              // placeholder="Enter constansts in Sxy stress function"
            />
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}

export default StressData;
