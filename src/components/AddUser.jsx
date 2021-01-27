import React, { Component } from "react";
import { Form, Container, Col, FormGroup, Button } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { withRouter } from "react-router-dom";

class AddUser extends Component {
  state = {
    details: {
      username: "",
      password: "",
    },
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log("inside handle change");
    console.log("target value", target);
    console.log("value", value);
    console.log("name", name);

    let details = { ...this.state.details };

    console.log("details", details);
    details[name] = value;
    this.setState({ details });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let { details } = this.state;
    if (localStorage.getItem("jwt-token") === null) {
      document.getElementById("message").innerHTML = "You are not logged in";
      document.getElementById("message").style.color = "red";
    } else {
      let token = "Bearer " + JSON.parse(localStorage.getItem("jwt-token")).jwt;
      const response = await fetch("/api/addnewuser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(details),
      });
      console.log(response.status === 404);
      if (response.status !== 200) {
        const body = await response.json();
        //console.log(body);
        document.getElementById("message").innerHTML = body;
        document.getElementById("message").style.color = "red";
      } else {
        document.getElementById("message").innerHTML =
          "User created successfully";
        document.getElementById("message").style.color = "green";
        this.props.history.push("/users");
      }
    }
  };

  render() {
    const { details } = this.state;
    return (
      <div>
        <NavBar />
        <Container className="base-container">
          <p id="message"></p>
          <h2 style={{ padding: 10 }}>Add new user</h2>
          <Form onSubmit={this.handleSubmit}>
            <Col>
              <FormGroup>
                <Form.Label for="userName">Enter User Name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  id="username"
                  value={"" || details.username}
                  onChange={this.handleChange}
                  autoComplete="username"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Form.Label for="password"> Enter Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  id="password"
                  value={"" || details.password}
                  onChange={this.handleChange}
                  autoComplete="password"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Button color="primary" type="submit" size="sm">
                  Create
                </Button>
              </FormGroup>
            </Col>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(AddUser);
