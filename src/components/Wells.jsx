import React, { Component } from "react";
import { Tab, Row, Col, Nav, Container, Button } from "react-bootstrap";
import TabContainer from "react-bootstrap/TabContainer";
import Stages from "../components/Stages";

class Wells extends Component {
  state = {};

  handleSubmit = () => {
    console.log("Clicked submit");
    console.log(
      "props data (No of wells) \n" +
        this.props.formData.noOfWells +
        "\n" +
        "Stages data (no of stages) \n" +
        "\n" +
        this.props.formData.noOfStages
    );

    const well_prefix = "Well_";
    const stage_prefix = "stage-";
    const scheduleDivision_prefix = "schd";
    const totalPumpingTime_prefix = "tpt";

    const time_prefix = "time_";
    const iR_prefix = "iR_";
    const vis_prefix = "vis_";
    const density_prefix = "density_";
    const fTime_prefix = "fTime_";
    const carterL_prefix = "carterL_";
    const fCom_prefix = "fCom_";

    const well_ids = Array.from(
      { length: this.props.formData.noOfWells },
      (well, i) => i + 1
    );

    const stage_ids = Array.from(
      { length: this.props.formData.noOfStages },
      (stage, i) => i + 1
    );
    var Format = "";

    // Do we need to use map??
    const data = well_ids.map((id) => {
      const well_id = well_prefix + id;
      for (let index = 1; index <= this.props.formData.noOfStages; index++) {
        const stage_id = well_id + stage_prefix + index;
        const scheduleDivision_id = stage_id + scheduleDivision_prefix;
        const scheduleDivision_value = document.getElementById(
          scheduleDivision_id
        ).value;

        Format +=
          "************************************************************* \n" +
          "Pumping Schedule for Stage-" +
          index +
          "\n___________________________________ \n";
        Format +=
          "Schedule Division \n" +
          scheduleDivision_value +
          "\n" +
          "************************************************************* \n";

        // console.log(
        //   " Schedule division value of stage" +
        //     index +
        //     " - " +
        //     document.getElementById(scheduleDivision_id).value
        // );
        const totalPumpingTime_id = stage_id + totalPumpingTime_prefix;
        const totalPumpingTime_value = document.getElementById(
          totalPumpingTime_id
        ).value;
        Format +=
          "Total Pumping Time \n" +
          totalPumpingTime_value +
          "\n" +
          "************************************************************* \n";

        Format +=
          "Input time (cumulative), all parameters seperated by commas. \n" +
          "************************************************************* \n";
        Format +=
          "To simulate shut-in use zero injection rate. \n" +
          "************************************************************* \n";
        Format +=
          "Time (min),Injection rate (bpm),Viscosity (cP),density of injection fluid (lb/gal),fluid time step during shut-in (sec),carter Leak-off-coefficient (m/s^0.5),fluid compressibility (1/Pa)" +
          "\n************************************************************* \n";

        let row_data = "";
        for (let idx = 1; idx <= scheduleDivision_value; idx++) {
          const time_id = stage_id + time_prefix + idx;
          const iR_id = stage_id + iR_prefix + idx;
          const vis_id = stage_id + vis_prefix + idx;
          const density_id = stage_id + density_prefix + idx;
          const fTime_id = stage_id + fTime_prefix + idx;
          const carterL_id = stage_id + carterL_prefix + idx;
          const fCom_id = stage_id + fCom_prefix + idx;

          row_data +=
            document.getElementById(time_id).value +
            "," +
            document.getElementById(iR_id).value +
            "," +
            document.getElementById(vis_id).value +
            "," +
            document.getElementById(density_id).value +
            "," +
            document.getElementById(fTime_id).value +
            "," +
            document.getElementById(carterL_id).value +
            "," +
            document.getElementById(fCom_id).value +
            "\n************************************************************* \n\n";
          // console.log("Id -- " + time_id);

          // console.log(
          //   "\n Data of each schedule division section" +
          //     idx +
          //     " - " +
          //     document.getElementById(time_id).value +
          //     "\n" +
          //     document.getElementById(iR_id).value +
          //     "\n" +
          //     document.getElementById(vis_id).value +
          //     "\n" +
          //     document.getElementById(density_id).value +
          //     "\n" +
          //     document.getElementById(fTime_id).value +
          //     "\n" +
          //     document.getElementById(carterL_id).value +
          //     "\n" +
          //     document.getElementById(fCom_id).value +
          //     "\n"
          // );
        }
        Format += row_data;
      }
    });

    //console.log("================== Data ============ \n" + Format);

    // Step-2
    // make it downloadable into a text file.

    const textToBLOB = new Blob([Format], { type: "text/plain" });
    const sFileName = "PUMPING_SCHEDULE_INPUT.txt"; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
    }

    newLink.click();
  };

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
        <br></br>
        <Button onClick={this.handleSubmit}> Submit</Button>
        <br></br>
      </Container>
    );
  }
}

export default Wells;
