import React, { Component } from "react";
import { Form, Table, Button } from "react-bootstrap";

class DisplayAndPrintOptions extends Component {
  state = {};
  render() {
    return (
      <Table>
        <tr>
          <td>
            <Form.Group controlId="timeSkip">
              <Form.Label>Time to skip printing</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="displayContours">
              <Form.Label>Display contours</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </td>
        </tr>
        <tr>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </tr>
      </Table>
    );
  }
}

export default DisplayAndPrintOptions;
