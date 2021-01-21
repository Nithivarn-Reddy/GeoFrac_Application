import React, { Component } from "react";
import {
  Container,
  Form,
  FormLabel,
  Button,
  Table,
  Row,
  Col,
} from "react-bootstrap";

class StageContent extends Component {
  state = {
    stageData: {
      scheduleDivision: "",
      tPumpingTime: "",
      showTable: false,
      content: "",
    },
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let stageData = { ...this.state.stageData };
    stageData[name] = value;
    this.setState({ stageData: stageData });
  };

  handleGo = () => {
    const division = this.state.stageData.scheduleDivision;
    const ids = Array.from({ length: division }, (stage, i) => i + 1);

    const content = ids.map((id) => {
      let time = this.props.id + "time_" + id;
      let iR = this.props.id + "iR_" + id;
      let vis = this.props.id + "vis_" + id;
      let density = this.props.id + "density_" + id;
      let fTime = this.props.id + "fTime_" + id;
      let carterL = this.props.id + "carterL_" + id;
      let fCom = this.props.id + "fCom_" + id;
      return (
        // One idea is to use static names
        <tbody key={id}>
          <tr>
            {/* change the names */}
            <td>
              <Form.Control type="text" placeholder="" id={time}></Form.Control>
            </td>
            <td>
              <Form.Control type="text" placeholder="" id={iR}></Form.Control>
            </td>
            <td>
              <Form.Control type="text" placeholder="" id={vis}></Form.Control>
            </td>
            <td>
              <Form.Control
                type="text"
                placeholder=""
                id={density}
              ></Form.Control>
            </td>
            <td>
              <Form.Control
                type="text"
                placeholder=""
                id={fTime}
              ></Form.Control>
            </td>
            <td>
              <Form.Control
                type="text"
                placeholder=""
                id={carterL}
              ></Form.Control>
            </td>
            <td>
              <Form.Control type="text" placeholder="" id={fCom}></Form.Control>
            </td>
          </tr>
        </tbody>
      );
    });
    const stageData = { ...this.state.stageData };
    stageData["content"] = content;
    stageData["showTable"] = true;

    this.setState({ stageData });
  };

  render() {
    const schd = this.props.id + "schd";
    const tpt = this.props.id + "tpt";
    return (
      <Container>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Schedule Division
          </Form.Label>
          <Col sm="3">
            <Form.Control
              type="text"
              placeholder=""
              name="scheduleDivision"
              value={this.state.stageData.scheduleDivision}
              onChange={this.handleChange}
              id={schd}
            />
          </Col>
          <Button variant="primary" onClick={this.handleGo}>
            {" "}
            Go
          </Button>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Total pumping time
          </Form.Label>
          <Col sm="3">
            <Form.Control
              type="text"
              placeholder=""
              name="tPumpingTime"
              value={this.state.stageData.tPumpingTime}
              onChange={this.handleChange}
              id={tpt}
            />
          </Col>
        </Form.Group>

        <div style={{ marginTop: 10 }}>
          <Table
            striped
            bordered
            hover
            style={{ tableLayout: "auto", backgroundColor: "white" }}
          >
            <thead>
              <th style={{ verticalAlign: "middle", fontSize: "10pt" }}>
                Time
              </th>
              <th style={{ verticalAlign: "middle", fontSize: "10pt" }}>
                Injection Rate
              </th>
              <th style={{ verticalAlign: "middle", fontSize: "10pt" }}>
                Viscosity(cP)
              </th>
              <th style={{ verticalAlign: "middle", fontSize: "10pt" }}>
                Density of Injection fluid(lib/gal)
              </th>
              <th style={{ verticalAlign: "middle", fontSize: "10pt" }}>
                Fluid Time step during shut-in (sec)
              </th>
              <th style={{ verticalAlign: "middle", fontSize: "10pt" }}>
                Carter leak off coefficient (m/s^0.5)
              </th>
              <th style={{ verticalAlign: "middle", fontSize: "10pt" }}>
                Fluid compressibility (1/Pa)
              </th>
            </thead>

            {/* <div style={{ display: this.state.showTable }}>
              {this.state.stageData.content}
            </div> */}
            {this.state.stageData.showTable
              ? this.state.stageData.content
              : null}
          </Table>
        </div>
      </Container>
    );
  }
}

export default StageContent;
