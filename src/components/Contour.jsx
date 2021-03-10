import React, { Component } from "react";
import NavBar from "../components/NavBar";
import PlotsNavBar from "./PlotsNavBar";
import { Form, Col, Button, ButtonGroup } from "react-bootstrap";

class LinePlot extends Component {
  state = {
    formData: {
      porePressureValue: "",
      stressValue: "",
      image: "",
      option: "",
    },
  };

  _onOptionChange(option) {
    let formData = { ...this.state.formData };
    formData["option"] = option;
    this.setState({ formData });
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log("name == " + name + "value == " + value);
    let formData = { ...this.state.formData };
    console.log("formData = ", formData);
    formData[name] = value;
    console.log("formData = " + formData[name]);
    this.setState({ formData });
    console.log("State value", this.state.formData);
  };

  handleSubmit = async () => {
    console.log("submit clicked");
    if (localStorage.getItem("jwt-token") !== null) {
      let token = "Bearer " + JSON.parse(localStorage.getItem("jwt-token")).jwt;
      const response = await fetch("/api/cartesianPlot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "image/webp, image/apng, image/*,*/*;q=0.8",
          Authorization: token,
        },
        body: JSON.stringify({
          fileName: this.state.formData[this.state.formData["option"]],
        }),
      });
      if (response.status === 200) {
        const image = await response.blob();
        let formData = { ...this.state.formData };
        formData["image"] = image;
        this.setState({ formData });
        console.log(this.state.formData);
      } else {
        //document.getElementById("message").style.display = "block";
        console.log("Failed");
      }
    } else {
      console.log("No Token available");
      this.props.history.push("/");
    }
  };

  render() {
    console.log("State updated value =", this.state.formData);
    if (
      this.state.formData["image"] == null ||
      this.state.formData["image"] == ""
    ) {
      return (
        <div>
          <NavBar />
          <PlotsNavBar />
          <div style={{ width: "600px" }}>
            <Form>
              <ButtonGroup>
                <Button
                  className="btn btn-secondary"
                  onClick={this._onOptionChange.bind(this, "porePressureValue")}
                  active={this.state.formData.option === "porePressureValue"}
                  // onChange={this.handleChange}
                >
                  Pore pressure
                </Button>
                <Button
                  className="btn btn-secondary"
                  onClick={this._onOptionChange.bind(this, "stressValue")}
                  active={this.state.formData.option === "stressValue"}
                  // onChange={this.handleChange}
                >
                  Stress
                </Button>
              </ButtonGroup>

              <Form.Row>
                <Form.Group as={Col} controlId="porePressureValue">
                  <Form.Control
                    as="select"
                    value={this.state.formData["porePressureValue"]}
                    name="porePressureValue"
                    onChange={this.handleChange}
                  >
                    <option>Choose...</option>
                    <option>Pore_Pressure</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="stressValue">
                  <Form.Control
                    as="select"
                    value={this.state.formData["stressValue"]}
                    name="stressValue"
                    onChange={this.handleChange}
                  >
                    <option>Choose...</option>
                    <option>Stress-XX</option>
                    <option>Stress-XY</option>
                    <option>Stress-XZ</option>
                    <option>Stress-YY</option>
                    <option>Stress-YZ</option>
                    <option>Stress-ZZ</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              {"   "}
            </Form>
            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <img
            src={window.webkitURL.createObjectURL(this.state.formData["image"])}
          />
        </div>
      );
    }
  }
}

export default LinePlot;
