import React, { Component } from "react";
import { Form, Col, Button, Alert } from "react-bootstrap";
import NavBar from "../components/NavBar";
import FileUploader from "../customComponents/FileUploader";


class FldInput extends Component {
  state = {formData: {
    fileData: {
      xRange: "",
      yRange: "",
      resolution: "",
      useAboveValue: ""
    }
  },
    };

    handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      let formData = { ...this.state.formData };
      formData["fileData"][name] = value;
      this.setState({ formData: formData });
    };

    handleRead = (fileUpload) => {

      var fr = new FileReader();
      console.log("file", fileUpload);
      const fileName = fileUpload;
      fr.readAsText(fileName);
      const self = this;
      fr.onload = function () {
        let data = fr.result;
        let formData = { ...self.state.formData };
        
        data = data
          .split("\n")
          .filter(
            (e) =>
              e !==
              "*************************************************************"
          );
        formData["fileData"]["xRange"] = data[2];
        formData["fileData"]["yRange"] = data[4];
        formData["fileData"]["resolution"] = data[6];
        formData["fileData"]["useAboveValue"] = data[8];

        self.setState({ formData: formData });
      };
    };
  handleSubmit = () => {
    let data =
      "*******For 3D Stress and pore pressure Field Plot************* \n" +
      "X RANGE FOR FIELD plot GENERATION (X_MIN,X_MAX)	(m) \n";
    data += this.state.formData.fileData.xRange + "\n";
    data +=
      "Y RANGE FOR FIELD plot GENERATION (Y_MIN,Y_MAX)	(m) \n" +
      this.state.formData.fileData.yRange +
      "\n";

    data += "RESOLUTION IN X AND Y DIRECTIONS \n" + this.state.formData.fileData.resolution + "\n";

    data +=
      "Specify (Z) the horizontal XY plane where the 6 stress comeponents are evaluated. Z=0 to represents " +
      "horizontal plane passing through the center of fractures \n" +
      this.state.formData.fileData.useAboveValue +
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
              <Form.Control type="text"
              name="xRange"
              value={this.state.formData.fileData["xRange"] || ""}
              onChange={this.handleChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Col} controlId="yRange">
            <Form.Label column sm="4">
              Yrange for field plot generation(Ymin, Ymax) (m)
            </Form.Label>
            <Col sm="3">
              <Form.Control type="text"
              name="yRange"
              value={this.state.formData.fileData["yRange"] || ""}
              onChange={this.handleChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Col} controlId="resolution">
            <Form.Label column sm="4">
              Resolution in X and Y direction
            </Form.Label>
            <Col sm="3">
              <Form.Control type="text"
              name="resolution"
              value={this.state.formData.fileData["resolution"] || ""}
              onChange={this.handleChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Col} controlId="useAboveValue">
            <Form.Label column sm="4">
              To use above values enter 0 else 1
            </Form.Label>
            <Col sm="3">
              <Form.Control type="text"
              name="useAboveValue"
              value={this.state.formData.fileData["useAboveValue"] || ""}
              onChange={this.handleChange} />
            </Col>
          </Form.Group>
        </Form>

        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
        {"   "}
        <FileUploader handleFile={this.handleRead}/>
       
      </div>
    );
  }
}

export default FldInput;
