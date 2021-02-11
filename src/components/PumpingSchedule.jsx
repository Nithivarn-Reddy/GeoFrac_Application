import React, { Component } from "react";

import { Form, Table, Button, Container, Col, Row } from "react-bootstrap";
import Wells from "../components/Wells";
import NavBar from "../components/NavBar";

class PumpingSchedule extends Component {
  state = {
    showForm: false,
    formData: {
      noOfWells: "",
      noOfStages: "",
      fileData: "",
    },
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let formData = { ...this.state.formData };
    formData[name] = value;
    this.setState({ formData: formData });
  };

  handleSubmit = () => {
    console.log("The submit button is clicked");
    this.setState({ showForm: true });
  };

  handleRead = () => {
    console.log(
      "The Read button is clicked",
      document.getElementById("exampleFormControlFile1").files[0]
    );

    var fr = new FileReader();
    // reader.onload = function (event) {
    //   ContentString = event.target.result;
    // };
    // reader.onerror = function (event) {
    //   alert("Load error!");
    // };
    const fileName = document.getElementById("exampleFormControlFile1")
      .files[0];
    fr.readAsText(fileName);
    const self = this;
    fr.onload = function () {
      let data = fr.result;
      //document.getElementById("output").textContent = fr.result;
      let formData = { ...self.state.formData };
      //console.log("Form data -- " + formData);
      formData["fileData"] = data
        .split("\n")
        .filter(
          (e) =>
            e != "*************************************************************"
        );
      //console.log("File data -- " + formData["fileData"]);
      self.setState({ formData: formData });
    };

    //const fileData = reader.readAsText(fileName /*, "UTF-8"*/);
  };

  render() {
    return (
      <div>
        <NavBar />
        {/* // style={{ backgroundColor: "#f5f2f2" }} */}
        <Container>
          {/* <h1>Pumping Schedule</h1> */}
          {/* style={{ paddingLeft: 200, paddingTop: 30 }} */}
          <div>
            <Row>
              <pre id="output"></pre>
              <Col lg="3">
                <Form.Group>
                  <Form.Label>No. of wells</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder=""
                    name="noOfWells"
                    value={this.state.formData.noOfWells}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
              <Col style={{ marginTop: 30 }} lg="3">
                <Button
                  variant="primary"
                  onClick={this.handleSubmit}
                  style={{ marginRight: 15 }}
                >
                  Submit
                </Button>
              </Col>
            </Row>
            <Row>
              <Col lg="3">
                <Form.Group>
                  <Form.Label>Pumping schedule for wells</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="noOfStages"
                    value={this.state.formData.noOfStages}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Col>
              <Col lg="3" style={{ marginTop: 30 }}>
                <Form.Group>
                  <Form.File
                    id="exampleFormControlFile1"
                    onChange={this.handleRead}
                  />
                  <Button type="submit" onClick={this.handleRead}>
                    Read from a file
                  </Button>
                </Form.Group>
              </Col>
            </Row>

            <div style={{ marginTop: 20 }}>
              {this.state.showForm ? (
                <Wells formData={this.state.formData} />
              ) : null}
            </div>
          </div>
          {console.log(
            "File data from state ",
            this.state.formData["fileData"]
          )}
        </Container>
      </div>
    );
  }
}

export default PumpingSchedule;
