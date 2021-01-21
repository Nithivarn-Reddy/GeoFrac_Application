import React, { Component } from "react";

import { Container, Form, Col, FormGroup, Button, Row } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";

class Login extends Component {
  state = {
    credentials: {
      userName: "",
      password: "",
    },
  };

  handleSubmit = () => {
    const { credentials } = { ...this.state };
    if (credentials.userName !== "Admin") {
      console.log("please enter correct username");
      this.props.history.push("/");
      document.getElementById("message").innerHTML =
        "Please enter correct credentials";
      document.getElementById("message").style.color = "red";
    } else if (credentials.password !== "1234") {
      console.log("please enter correct password");
      this.props.history.push("/");
      document.getElementById("message").innerHTML =
        "Please enter correct credentials";
      document.getElementById("message").style.color = "red";
    } else {
      sessionStorage.setItem("userName", "Admin");
      sessionStorage.setItem("password", "1234");
      this.props.history.push("/wellboreRockData");
    }
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let credentials = { ...this.state.credentials };
    credentials[name] = value;
    this.setState({ credentials });
  };

  render() {
    const { credentials } = this.state;
    return (
      <Container className="base-container">
        <p id="message"></p>
        <h2 style={{ padding: 10 }}>Login</h2>
        <Form>
          <Col sm="3">
            <Form.Group>
              <Form.Label for="userName">User Name</Form.Label>

              <Form.Control
                type="text"
                name="userName"
                id="userName"
                value={"" || credentials.userName}
                onChange={this.handleChange}
                autoComplete="userName"
              />
            </Form.Group>
          </Col>
          <Col sm="3">
            <Form.Group>
              <Form.Label for="password">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
                value={"" || credentials.password}
                onChange={this.handleChange}
                autoComplete="password"
              />
            </Form.Group>
          </Col>
          <Col>
            <FormGroup>
              <Button color="primary" onClick={this.handleSubmit} size="sm">
                Login
              </Button>
            </FormGroup>
          </Col>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Login);
