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
              // placeholder=""
            />
          </Form.Group>

          <Form.Group as={Col} controlId="errorConstInStressSyyFunc">
            <Form.Label>Enter constants in Syy stress function</Form.Label>
            <Form.Control
              type="text"
              // placeholder=""
            />
          </Form.Group>

          <Form.Group as={Col} controlId="errorConstInStressSxyFunc">
            <Form.Label>Enter constansts in Sxy stress function</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter constansts in Sxy stress function"
            />
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}

export default StressData;
