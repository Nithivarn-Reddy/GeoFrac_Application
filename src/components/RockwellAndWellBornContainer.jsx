import React, { Component } from "react";

import { Tabs, Tab, Accordion, Button, Card } from "react-bootstrap";
import RockWellAndWellBorn from "../components/RockWell&WellBorn";
import RockMechanicalData from "../components/RockMechanicalData";
import StressData from "../components/StressData";
import PropogationData from "../components/PropogationData";
import ClosureParameters from "../components/ClosureParameters";
import DisplayAndPrintOptions from "../components/DisplayAndPrintOptions";

class RockwellAndWellBornContainer extends Component {
  state = {};

  readFileData() {}

  render() {
    return (
      <div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Wellbore and perf data{" "}
              <i class="fas fa-angle-down rotate-icon"></i>
            </Accordion.Toggle>
            <Accordion.Collapse className="small-input" eventKey="0">
              <RockWellAndWellBorn />
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Rock mechanical data
            </Accordion.Toggle>
            <Accordion.Collapse className="small-input" eventKey="1">
              <RockMechanicalData />
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Stress data
            </Accordion.Toggle>
            <Accordion.Collapse className="small-input" eventKey="2">
              <StressData />
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Propogation data
            </Accordion.Toggle>
            <Accordion.Collapse className="small-input" eventKey="3">
              <PropogationData />
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              Closure parameters
            </Accordion.Toggle>
            <Accordion.Collapse className="small-input" eventKey="4">
              <ClosureParameters />
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              Display and printing Option
            </Accordion.Toggle>
            <Accordion.Collapse className="small-input" eventKey="5">
              <DisplayAndPrintOptions />
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
      // <Tabs
      //   defaultActiveKey="wellBoreAndPerfData"
      //   id="uncontrolled-tab-example"
      // >
      //   <Tab eventKey="wellBoreAndPerfData" title="Wellbore and perf data">
      //     <RockWellAndWellBorn />
      //   </Tab>
      //   <Tab eventKey="rockMechanicalData" title="RockMechanicalData">
      //     <RockMechanicalData />
      //   </Tab>
      //   <Tab eventKey="stressData" title="Stress data">
      //     <StressData />
      //   </Tab>
      //   <Tab eventKey="propagationData" title="Propagation data">
      //     <PropogationData />
      //   </Tab>
      //   <Tab eventKey="closureParameters" title="Closure Parameters">
      //     <ClosureParameters />
      //   </Tab>
      //   <Tab
      //     eventKey="displayAndPrintOptions"
      //     title="Display and printing options"
      //   >
      //     <DisplayAndPrintOptions />
      //   </Tab>
      // </Tabs>
    );
  }
}

export default RockwellAndWellBornContainer;
