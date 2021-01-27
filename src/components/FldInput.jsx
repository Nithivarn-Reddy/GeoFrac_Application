import React, { Component } from "react";
import { Form, Table, Col, Button } from "react-bootstrap";
import NavBar from "../components/NavBar";

class FldInput extends Component {
  state = {};

  handleSubmit = () => {
    const xRange_val = document.getElementById("xRange").value;
    const yRange_val = document.getElementById("yRange").value;
    const resolution_val = document.getElementById("resolution").value;
    const useAboveValue_val = document.getElementById("useAboveValue").value;

    let data =
      "*******For 3D Stress and pore pressure Field Plot************* \n" +
      "X RANGE FOR FIELD plot GENERATION (X_MIN,X_MAX)	(m) \n";
    data += xRange_val + "\n";
    data +=
      "Y RANGE FOR FIELD plot GENERATION (Y_MIN,Y_MAX)	(m) \n" +
      yRange_val +
      "\n";

    data += "RESOLUTION IN X AND Y DIRECTIONS \n" + resolution_val + "\n";

    data +=
      "Specify (Z) the horizontal XY plane where the 6 stress comeponents are evaluated. Z=0 to represents \n" +
      "horizontal plane passing through the center of fractures \n" +
      useAboveValue_val +
      "\n";

    const textToBLOB = new Blob([data], { type: "text/plain" });
    const sFileName = "FLD_POINT_INPUT.txt"; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
    }

    newLink.click();
  };
  render() {
    return (
      <div>
        <NavBar />
        <Form className="margin">
          <Form.Group as={Col} controlId="xRange">
            <Form.Label column sm="4">
              Xrange for field plot generation(Xmin, Xmax) (m)
            </Form.Label>
            <Col sm="3">
              <Form.Control type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Col} controlId="yRange">
            <Form.Label column sm="4">
              Yrange for field plot generation(Ymin, Ymax) (m)
            </Form.Label>
            <Col sm="3">
              <Form.Control type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Col} controlId="resolution">
            <Form.Label column sm="4">
              Resolution in X and Y direction
            </Form.Label>
            <Col sm="3">
              <Form.Control type="text" />
            </Col>
          </Form.Group>

          <Form.Group as={Col} controlId="useAboveValue">
            <Form.Label column sm="4">
              To use above values enter 0 else 1
            </Form.Label>
            <Col sm="3">
              <Form.Control type="text" />
            </Col>
          </Form.Group>
        </Form>

        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
        {"  "}
        <Button variant="primary" type="readFile">
          Read From File
        </Button>
      </div>
    );
  }
}

export default FldInput;
