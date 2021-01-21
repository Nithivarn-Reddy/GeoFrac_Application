import React, { Component } from "react";

import { Form, Table, Button, Container, Col, Row } from "react-bootstrap";
import Wells from "../components/Wells";

class PumpingSchedule extends Component {
  state = {
    showForm: false,
    formData: {
      noOfWells: "",
      noOfStages: "",
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
  render() {
    return (
      // style={{ backgroundColor: "#f5f2f2" }}
      <Container>
        {/* <h1>Pumping Schedule</h1> */}
        {/* style={{ paddingLeft: 200, paddingTop: 30 }} */}
        <div>
          <Row>
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
              <Button variant="primary" type="submit">
                Read from file
              </Button>
            </Col>
          </Row>

          <div style={{ marginTop: 20 }}>
            {this.state.showForm ? (
              <Wells formData={this.state.formData} />
            ) : null}
          </div>
        </div>
      </Container>
    );
  }
}

export default PumpingSchedule;
