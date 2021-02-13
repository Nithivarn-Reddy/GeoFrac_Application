import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";

class DisplayAndPrintOptions extends Component {
  state = {};
  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="timeSkip">
            <Form.Label>Time to skip printing</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="timeSkip"
              value={this.props.fileData["timeSkip"] || ""}
              onChange={this.props.handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="displayContours">
            <Form.Label>Display contours</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="displayContours"
              value={this.props.fileData["displayContours"] || ""}
              onChange={this.props.handleChange}
            />
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}

export default DisplayAndPrintOptions;
