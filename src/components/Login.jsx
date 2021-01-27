import React, { Component } from "react";

import { Container, Form, Col, FormGroup, Button, Row } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { credentials } = { ...this.state };
    if (credentials.username === "") {
      console.log("please enter correct username");
      this.props.history.push("/");
      document.getElementById("message").innerHTML =
        "Please enter correct credentials";
      document.getElementById("message").style.color = "red";
    } else if (credentials.password === "") {
      console.log("please enter correct password");
      this.props.history.push("/");
      document.getElementById("message").innerHTML =
        "Please enter correct credentials";
      document.getElementById("message").style.color = "red";
    } else {
      // sessionStorage.setItem("username", "Admin");
      // sessionStorage.setItem("password", "1234");
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (response.status !== 200) {
        this.props.history.push("/");
        document.getElementById("message").innerHTML =
          "Please enter correct credentials";
        document.getElementById("message").style.color = "red";
      } else {
        const body = await response.json();
        localStorage.setItem(
          "jwt-token",
          JSON.stringify({ jwt: body.access_token })
        );
        localStorage.setItem("role", JSON.stringify({ role: body.role }));
        this.props.history.push("/wellboreRockData");
      }
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
        <Form onSubmit={this.handleSubmit}>
          <Col sm="3">
            <Form.Group>
              <Form.Label for="username">User Name</Form.Label>

              <Form.Control
                type="text"
                name="username"
                id="username"
                value={"" || credentials.username}
                onChange={this.handleChange}
                autoComplete="username"
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
              <Button color="primary" type="submit" size="sm">
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
