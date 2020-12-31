import React, { Component } from "react";
import { Form, Table } from "react-bootstrap";

class PropogationData extends Component {
  state = {};
  render() {
    return (
      <Table>
        <tr>
          <td>
            <Form.Group controlId="nonPlanar">
              <Form.Label>
                For non-planar fracture enter 1, else enter 2
              </Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="shearInteraction">
              <Form.Label>
                To turn-off shear interaction enter 2, else enter 1
              </Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </td>
        </tr>
      </Table>
    );
  }
}

export default PropogationData;
