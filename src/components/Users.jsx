import React, { Component } from "react";
import NavBar from "../components/NavBar";
import { Button, Table, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Users extends Component {
  state = {
    users: [],
    showUsers: true,
  };

  async componentDidMount() {
    if (localStorage.getItem("jwt-token") !== null) {
      let token = "Bearer " + JSON.parse(localStorage.getItem("jwt-token")).jwt;
      const response = await fetch("/api/users", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token,
        },
      });
      if (response.status === 200) {
        const body = await response.json();
        this.setState({ users: body.users });
        console.log(this.state.users);
      } else {
        //document.getElementById("message").style.display = "block";
        this.setState({ showUsers: false });
      }
    } else {
      document.getElementById("token").style.display = "block";
      this.props.history.push("/");
    }
  }

  handleDelete = async (id) => {
    let token = "Bearer " + JSON.parse(localStorage.getItem("jwt-token")).jwt;
    await fetch("/api/deleteuser", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ username: id }),
    }).then(() => {
      const users = this.state.users.filter((user) => {
        return user["username"] !== id;
      });
      console.log("users", users);
      this.setState({ users });
    });
  };

  render() {
    if (!this.state.showUsers) {
      return (
        <div>
          <NavBar />
          <p style={{ padding: 10 }} id="message">
            You are not authorized. Please login as appropriate user.
          </p>
        </div>
      );
    } else {
      let users;
      console.log(this.state.users);
      if (this.state.users !== null) {
        users = this.state.users.map((user) => {
          return (
            <tr key={user["username"]}>
              <td>{user["username"]}</td>
              <td>{user["role"]}</td>
              <td>
                <Button
                  size="sm"
                  color="danger"
                  onClick={() => this.handleDelete(user["username"])}
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        });
      }

      return (
        <div>
          <NavBar />
          <Container fluid>
            <p style={{ padding: 10, display: "none" }} id="token">
              Please login to proceed.
            </p>
            <div className="float-right" style={{ padding: 10 }}>
              <Button
                style={{ padding: 10 }}
                size="md"
                color="success"
                href="/addnewuser"
              >
                Add User
              </Button>
            </div>
            <h3 style={{ padding: 10 }}>Users</h3>
            <Table className="mt-4">
              <thead>
                <tr>
                  <th width="20%">Username</th>
                  <th width="30%">Role</th>
                  <th width="10%">Actions</th>
                </tr>
              </thead>
              <tbody>{users}</tbody>
            </Table>
          </Container>
        </div>
      );
    }
  }
}

export default withRouter(Users);
