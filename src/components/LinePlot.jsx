import React, { Component } from "react";
import NavBar from "../components/NavBar";
import PlotsNavBar from "./PlotsNavBar";
import { Form, Col, Button, ButtonGroup } from "react-bootstrap";

class LinePlot extends Component {
  state = {
    formData: {
      apertureFractureValue: "",
      flowRateValue: "",
      lenghtFracValue: "",
      perforationFricClusterValue: "",
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
      const response = await fetch("/plot", {
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
                  onClick={this._onOptionChange.bind(
                    this,
                    "apertureFractureValue"
                  )}
                  active={
                    this.state.formData.option === "apertureFractureValue"
                  }
                  // onChange={this.handleChange}
                >
                  Aper at injec frac
                </Button>
                <Button
                  className="btn btn-secondary"
                  onClick={this._onOptionChange.bind(this, "flowRateValue")}
                  active={this.state.formData.option === "flowRateValue"}
                  // onChange={this.handleChange}
                >
                  Flowrate cluster
                </Button>
                <Button
                  className="btn btn-secondary"
                  onClick={this._onOptionChange.bind(this, "lenghtFracValue")}
                  active={this.state.formData.option === "lenghtFracValue"}
                  // onChange={this.handleChange}
                >
                  Length Frac
                </Button>
                <Button
                  className="btn btn-secondary"
                  onClick={this._onOptionChange.bind(
                    this,
                    "perforationFricClusterValue"
                  )}
                  active={
                    this.state.formData.option === "perforationFricClusterValue"
                  }
                  // onChange={this.handleChange}
                >
                  Perforation fric cluster
                </Button>
              </ButtonGroup>

              <Form.Row>
                <Form.Group as={Col} controlId="apertureFractureValue">
                  <Form.Control
                    as="select"
                    value={this.state.formData["apertureFractureValue"]}
                    name="apertureFractureValue"
                    onChange={this.handleChange}
                  >
                    <option>Choose...</option>
                    <option>Aper_at_injec_Frac-1</option>
                    <option>Aper_at_injec_Frac-2</option>
                    <option>Aper_at_injec_Frac-3</option>
                    <option>Aper_at_injec_Frac-4</option>
                    <option>Aper_at_injec_Frac-5</option>
                    <option>Aper_at_injec_Frac-6</option>
                    <option>Aper_at_injec_Frac-7</option>
                    <option>Aper_at_injec_Frac-8</option>
                    <option>Aper_at_injec_Frac-9</option>
                    <option>Aper_at_injec_Frac-10</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="flowRateValue">
                  <Form.Control
                    as="select"
                    value={this.state.formData["flowRateValue"]}
                    name="flowRateValue"
                    onChange={this.handleChange}
                  >
                    <option>Choose...</option>
                    <option>Flowrate_Cluster-1</option>
                    <option>Flowrate_Cluster-2</option>
                    <option>Flowrate_Cluster-3</option>
                    <option>Flowrate_Cluster-4</option>
                    <option>Flowrate_Cluster-5</option>
                    <option>Flowrate_Cluster-6</option>
                    <option>Flowrate_Cluster-7</option>
                    <option>Flowrate_Cluster-8</option>
                    <option>Flowrate_Cluster-9</option>
                    <option>Flowrate_Cluster-10</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="lenghtFracValue">
                  <Form.Control
                    as="select"
                    value={this.state.formData["lenghtFracValue"]}
                    name="lenghtFracValue"
                    onChange={this.handleChange}
                  >
                    <option>Choose...</option>
                    <option>Length_Frac-1</option>
                    <option>Length_Frac-2</option>
                    <option>Length_Frac-3</option>
                    <option>Length_Frac-4</option>
                    <option>Length_Frac-5</option>
                    <option>Length_Frac-6</option>
                    <option>Length_Frac-7</option>
                    <option>Length_Frac-8</option>
                    <option>Length_Frac-9</option>
                    <option>Length_Frac-10</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="perforationFricClusterValue">
                  <Form.Control
                    as="select"
                    value={this.state.formData["perforationFricClusterValue"]}
                    name="perforationFricClusterValue"
                    onChange={this.handleChange}
                  >
                    <option>Choose...</option>
                    <option>Perforation_Fric_Cluster-1</option>
                    <option>Perforation_Fric_Cluster-2</option>
                    <option>Perforation_Fric_Cluster-3</option>
                    <option>Perforation_Fric_Cluster-4</option>
                    <option>Perforation_Fric_Cluster-5</option>
                    <option>Perforation_Fric_Cluster-6</option>
                    <option>Perforation_Fric_Cluster-7</option>
                    <option>Perforation_Fric_Cluster-8</option>
                    <option>Perforation_Fric_Cluster-9</option>
                    <option>Perforation_Fric_Cluster-10</option>
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
