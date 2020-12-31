import React, { Component } from "react";

import { Tabs, Tab, Accordion, Card } from "react-bootstrap";
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
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Rock Well and Well bore
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <RockWellAndWellBorn />
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Rock Mechanical Data
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <RockMechanicalData />
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Stress Data
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <StressData />
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            Propogation Data
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <PropogationData />
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Closure Parameters
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <ClosureParameters />
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            Display And Print Options
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <DisplayAndPrintOptions />
          </Accordion.Collapse>
        </Card>
      </Accordion>

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
