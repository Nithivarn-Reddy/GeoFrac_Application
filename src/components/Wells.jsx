import React, { Component } from "react";
import { Tab, Row, Col, Nav, Container } from "react-bootstrap";
import TabContainer from "react-bootstrap/TabContainer";
import Stages from "../components/Stages";

class Wells extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    console.log("Value of Props" + this.props.formData.noOfWells);
    const ids = Array.from(
      { length: this.props.formData.noOfWells },
      (well, i) => i + 1
    );
    console.log(ids);
    const tabList = ids.map((id) => {
      const well = "Well " + id;
      const well_id = "Well_" + id;
      return (
        <Tab.Pane eventKey={well_id} title={well}>
          <Stages count={this.props.formData.noOfStages} id={well_id} />
        </Tab.Pane>
      );
    });

    const navList = ids.map((id) => {
      const well = "Well " + id;
      const well_id = "Well_" + id;
      return (
        <Nav.Item>
          <Nav.Link eventKey={well_id}>{well}</Nav.Link>
        </Nav.Item>
      );
    });
    return (
      //style={{ backgroundColor: "#c7f6ff" }}
      <Container>
        <TabContainer id="wells" defaultActiveKey="Well_1">
          <Row>
            <Col sm={3}>
              <Nav
                variant="pills"
                className="flex-column"
                style={{ marginTop: 10, border: 1, borderStyle: "solid" }}
              >
                {navList}
              </Nav>
            </Col>
            <Col sm={9} style={{ marginTop: 10, backgroundColor: "#c7f6ff" }}>
              <Tab.Content>{tabList}</Tab.Content>
            </Col>
          </Row>
        </TabContainer>
      </Container>
    );
  }
}

export default Wells;
