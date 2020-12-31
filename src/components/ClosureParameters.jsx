import React, { Component } from "react";
import { Form, Table } from "react-bootstrap";

class ClosureParameters extends Component {
  state = {};
  render() {
    return (
      <Table>
        <tr>
          <td>
            <Form.Group controlId="fixedContactAperture">
              <Form.Label>
                For fixed contact aperture during shut-in enter 1,else enter 2
              </Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="constantContactAperture">
              <Form.Label>
                Enter value of constant contact aperture for all fractures (m)
              </Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="percentageFractureWidths">
              <Form.Label>
                For variable contact aperture enter % of fracture widths right
                before injection
              </Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </td>
        </tr>
        <tr>
          <td>
            <Form.Group controlId="enterSigmaRef">
              <Form.Label>Enter sigma_ref</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="percentageStageFractures">
              <Form.Label>
                Percentage of retained widths for previous stage fractures for
                stage to stage stress shadow calculation
              </Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </td>
        </tr>
      </Table>
    );
  }
}

export default ClosureParameters;
