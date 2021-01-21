import React, { Component } from "react";
import { Form, Table, Col } from "react-bootstrap";

class PropogationData extends Component {
  state = {};
  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="nonPlanar">
            <Form.Label>
              For non-planar fracture enter 1, else enter 2
            </Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group as={Col} controlId="shearInteraction">
            <Form.Label>
              To turn-off shear interaction enter 2, else enter 1
            </Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}

export default PropogationData;
