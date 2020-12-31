import React, { Component } from "react";
import { Form, Table } from "react-bootstrap";
class StressData extends Component {
  state = {};
  render() {
    return (
      <Table>
        <tr>
          <td>
            <Form.Group controlId="errorConstInStressSxxFunc">
              <Form.Label>Enter constants in Sxx stress function</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="errorConstInStressSyyFunc">
              <Form.Label>Enter constants in Syy stress function</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="errorConstInStressSxyFunc">
              <Form.Label>Enter constansts in Sxy stress function</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter constansts in Sxy stress function"
              />
            </Form.Group>
          </td>
        </tr>
      </Table>
    );
  }
}

export default StressData;
