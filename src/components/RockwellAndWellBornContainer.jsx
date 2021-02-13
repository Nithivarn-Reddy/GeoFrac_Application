import React, { Component } from "react";

import NavBar from "../components/NavBar";
import { Accordion, Button, Card, Col, Form } from "react-bootstrap";
import RockWellAndWellBorn from "../components/RockWell&WellBorn";
import RockMechanicalData from "../components/RockMechanicalData";
import StressData from "../components/StressData";
import PropogationData from "../components/PropogationData";
import ClosureParameters from "../components/ClosureParameters";
import DisplayAndPrintOptions from "../components/DisplayAndPrintOptions";

class RockwellAndWellBornContainer extends Component {
  state = {
    formData: {
      fileData: {
        noOfHorizontolWells: "",
        wellInclinations: "",
        perforationOrientation: "",
        perforationAngle: "",
        wellsSpacing: "",
        stagesPerWell: "",
        clusterPerStage: "",
        clusterSpacing: "",
        stageSpacing: "",
        offsetBetweenParallelWells: "",
        offsetType: "",
        sizeOfFracturesPC: "",
        elementFractures: "",
        maxMinSizeOfFractures: "",
        initialPerforationDiameter: "",
        initialPerforationDischargeCoeff: "",
        noOfPerforationPerCluster: "",
        payZoneThickness: "",
        stressBarriers: "",
        excessStressTopBottom: "",
        maxHeightGrowth: "",
        errosionRateDiameterInches: "",
        errosionRateDischargeCoeff: "",
        maxPerforationDiameterCoeff: "",
        includePerforationFriction: "",
        fluidLeakModel: "",
        youngModulus: "",
        poissonRatio: "",
        fractureToughness: "",
        porosity: "",
        permeability: "",
        initialPorePressure: "",
        fractureToughnessTop: "",
        fractureToughnessBottom: "",
        errorConstInStressSxxFunc: "",
        errorConstInStressSyyFunc: "",
        errorConstInStressSxyFunc: "",
        nonPlanar: "",
        shearInteraction: "",
        timeSkip: "",
        displayContours: "",
        fixedContactAperture: "",
        constantContactAperture: "",
        percentageFractureWidths: "",
        enterSigmaRef: "",
        percentageStageFractures: "",
      },
    },
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let formData = { ...this.state.formData };
    formData["fileData"][name] = value;
    this.setState({ formData: formData });
    //console.log("State value", this.state.fileData);
  };

  handleRead = () => {
    console.log(
      "The Read button is clicked",
      document.getElementById("exampleFormControlFile1").files[0]
    );

    var fr = new FileReader();
    // reader.onload = function (event) {
    //   ContentString = event.target.result;
    // };
    // reader.onerror = function (event) {
    //   alert("Load error!");
    // };
    const fileName = document.getElementById("exampleFormControlFile1")
      .files[0];
    fr.readAsText(fileName);
    const self = this;
    fr.onload = function () {
      let data = fr.result;
      //document.getElementById("output").textContent = fr.result;
      let formData = { ...self.state.formData };
      //console.log("Form data -- " + formData);
      // formData["fileData"] = data
      //   .split("\n")
      //   .filter(
      //     (e) =>
      //       e != "*************************************************************"
      //   );
      data = data
        .split("\n")
        .filter(
          (e) =>
            e !==
            "*************************************************************"
        );
      formData["fileData"]["noOfHorizontolWells"] = data[1];
      formData["fileData"]["wellInclinations"] = data[3];
      formData["fileData"]["perforationOrientation"] = data[6];

      formData["fileData"]["perforationAngle"] = data[8];

      formData["fileData"]["wellsSpacing"] = data[10];

      formData["fileData"]["stagesPerWell"] = data[12];

      formData["fileData"]["clusterPerStage"] = data[14];

      formData["fileData"]["clusterSpacing"] = data[16];

      formData["fileData"]["stageSpacing"] = data[18];

      formData["fileData"]["offsetBetweenParallelWells"] = data[20];

      formData["fileData"]["offsetType"] = data[22];

      formData["fileData"]["sizeOfFracturesPC"] = data[24];

      formData["fileData"]["elementFractures"] = data[26];

      formData["fileData"]["maxMinSizeOfFractures"] = data[28];

      formData["fileData"]["initialPerforationDiameter"] = data[30];

      formData["fileData"]["initialPerforationDischargeCoeff"] = data[32];

      formData["fileData"]["noOfPerforationPerCluster"] = data[34];

      formData["fileData"]["payZoneThickness"] = data[36];

      formData["fileData"]["stressBarriers"] = data[38];

      formData["fileData"]["excessStressTopBottom"] = data[40];

      formData["fileData"]["maxHeightGrowth"] = data[42];

      formData["fileData"]["errosionRateDiameterInches"] = data[44];

      formData["fileData"]["errosionRateDischargeCoeff"] = data[46];

      formData["fileData"]["maxPerforationDiameterCoeff"] = data[48];

      formData["fileData"]["includePerforationFriction"] = data[50];

      formData["fileData"]["fluidLeakModel"] = data[52];

      formData["fileData"]["youngModulus"] = data[54].split(",")[0];
      formData["fileData"]["poissonRatio"] = data[54].split(",")[1];

      // Fracture toughness , porosity,permeability,initial pore pressure

      formData["fileData"]["fractureToughness"] = data[56].split(",")[0];

      formData["fileData"]["porosity"] = data[56].split(",")[1];

      formData["fileData"]["permeability"] = data[56].split(",")[2];

      formData["fileData"]["initialPorePressure"] = data[56].split(",")[3];

      // fractureToughnessTop , fractureToughnessBottom

      formData["fileData"]["fractureToughnessTop"] = data[58].split(",")[0];

      formData["fileData"]["fractureToughnessBottom"] = data[58].split(",")[1];

      formData["fileData"]["errorConstInStressSxxFunc"] = data[61];

      formData["fileData"]["errorConstInStressSyyFunc"] = data[63];

      formData["fileData"]["errorConstInStressSxyFunc"] = data[65];

      formData["fileData"]["nonPlanar"] = data[67];

      formData["fileData"]["shearInteraction"] = data[69];

      formData["fileData"]["timeSkip"] = data[71];

      formData["fileData"]["displayContours"] = data[73];

      formData["fileData"]["fixedContactAperture"] = data[75];

      formData["fileData"]["constantContactAperture"] = data[77];

      formData["fileData"]["percentageFractureWidths"] = data[79];

      formData["fileData"]["enterSigmaRef"] = data[81];

      formData["fileData"]["percentageStageFractures"] = data[83];

      //console.log("File data -- " + formData["fileData"]);
      self.setState({ formData: formData });
      // console.log("FILE DATA", this.state.formData);
    };
  };

  handleSubmit = () => {
    const maxNumIteration_val = document.getElementById("noOfHorizontolWells")
      .value;
    const wellInclinations_val = document.getElementById("wellInclinations")
      .value;
    const perforationOrientation_val = document.getElementById(
      "perforationOrientation"
    ).value;
    const perforationAngle_val = document.getElementById("perforationAngle")
      .value;
    const wellsSpacing_val = document.getElementById("wellsSpacing").value;
    const stagesPerWell_val = document.getElementById("stagesPerWell").value;
    const clusterPerStage_val = document.getElementById("clusterPerStage")
      .value;
    const clusterSpacing_val = document.getElementById("clusterSpacing").value;
    const stageSpacing_val = document.getElementById("stageSpacing").value;
    const offsetBetweenParallelWells_val = document.getElementById(
      "offsetBetweenParallelWells"
    ).value;
    const offsetType_val = document.getElementById("offsetType").value;
    const sizeOfFracturesPC_val = document.getElementById("sizeOfFracturesPC")
      .value;
    const elementFractures_val = document.getElementById("elementFractures")
      .value;
    const maxMinSizeOfFractures_val = document.getElementById(
      "maxMinSizeOfFractures"
    ).value;
    const initialPerforationDiameter_val = document.getElementById(
      "initialPerforationDiameter"
    ).value;
    const initialPerforationDischargeCoeff_val = document.getElementById(
      "initialPerforationDischargeCoeff"
    ).value;
    const noOfPerforationPerCluster_val = document.getElementById(
      "noOfPerforationPerCluster"
    ).value;
    const errosionRateDiameterInches_val = document.getElementById(
      "errosionRateDiameterInches"
    ).value;
    const errosionRateDischargeCoeff_val = document.getElementById(
      "errosionRateDischargeCoeff"
    ).value;
    const maxPerforationDiameterCoeff_val = document.getElementById(
      "maxPerforationDiameterCoeff"
    ).value;
    const includePerforationFriction_val = document.getElementById(
      "includePerforationFriction"
    ).value;

    const payZoneThickness_val = document.getElementById("payZoneThickness")
      .value;
    const stressBarriers_val = document.getElementById("stressBarriers").value;
    const excessStressTopBottom_val = document.getElementById(
      "excessStressTopBottom"
    ).value;
    const maxHeightGrowth_val = document.getElementById("maxHeightGrowth")
      .value;
    const fluidLeakModel_val = document.getElementById("fluidLeakModel").value;
    const youngModulus_val = document.getElementById("youngModulus").value;
    const poissonRatio_val = document.getElementById("poissonRatio").value;
    const fractureToughness_val = document.getElementById("fractureToughness")
      .value;
    const porosity_val = document.getElementById("porosity").value;
    const permeability_val = document.getElementById("permeability").value;
    const initialPorePressure_val = document.getElementById(
      "initialPorePressure"
    ).value;
    const fractureToughnessTop_val = document.getElementById(
      "fractureToughnessTop"
    ).value;
    const fractureToughnessBottom_val = document.getElementById(
      "fractureToughnessBottom"
    ).value;

    const errorConstInStressSxxFunc_val = document.getElementById(
      "errorConstInStressSxxFunc"
    ).value;
    const errorConstInStressSyyFunc_val = document.getElementById(
      "errorConstInStressSyyFunc"
    ).value;
    const errorConstInStressSxyFunc_val = document.getElementById(
      "errorConstInStressSxyFunc"
    ).value;

    const nonPlanar_val = document.getElementById("nonPlanar").value;
    const shearInteraction_val = document.getElementById("shearInteraction")
      .value;

    const fixedContactAperture_val = document.getElementById(
      "fixedContactAperture"
    ).value;
    const constantContactAperture_val = document.getElementById(
      "constantContactAperture"
    ).value;
    const percentageFractureWidths_val = document.getElementById(
      "percentageFractureWidths"
    ).value;
    const enterSigmaRef_val = document.getElementById("enterSigmaRef").value;
    const percentageStageFractures_val = document.getElementById(
      "percentageStageFractures"
    ).value;

    const timeSkip_val = document.getElementById("timeSkip").value;
    const displayContours_val = document.getElementById("displayContours")
      .value;

    let data =
      "Enter number of Horizontal wells \n" + maxNumIteration_val + "\n";

    data +=
      "Enter well inclinations (in degrees) w.r.t X-axis in the order of each well sperated by comma. X-axis is always minimum stress direction \n" +
      wellInclinations_val +
      "\n";

    data +=
      "Select an option for perforation orientation: Enter '1' for perforations perpendicular to well, \n" +
      "Enter '2' for perforations parallel to maximum stress or Enter '3' for specifying any perforation angle w.r.t X-axis." +
      perforationOrientation_val +
      "\n";

    data +=
      "If entered '3' above, please specify perforation angle in degrees w.r.t wellbore axis (if you enter 90 degrees perfs are perpendicular to wellbore) \n" +
      perforationAngle_val +
      "\n";

    data += "Enter spacing between the wells (m) \n" + wellsSpacing_val + "\n";
    data += "Enter number of stages per well \n" + stagesPerWell_val + "\n";
    data +=
      "Enter number of clusters per stage \n" + clusterPerStage_val + "\n";
    data += "Enter cluster spacing (m) \n" + clusterSpacing_val + "\n";
    data += "Enter stage spacing (m) \n" + stageSpacing_val + "\n";
    data +=
      "Enter offset between the fractures of parallel wells (m) \n" +
      offsetBetweenParallelWells_val +
      "\n";
    data +=
      "Enter offset type (2- Echelon, 1- Array) \n" + offsetType_val + "\n";
    data +=
      "Enter initial size of the fractures from perforation clusters (m) \n" +
      sizeOfFracturesPC_val +
      "\n";
    data +=
      "Enter initial element size for all fractures (m) \n" +
      elementFractures_val +
      "\n";
    data +=
      "Enter the maximum and minimum elemenet size for all fracturfes (m) \n" +
      maxMinSizeOfFractures_val +
      "\n";
    data +=
      "Enter inital perforation diamter (inch) \n" +
      initialPerforationDiameter_val +
      "\n";
    data +=
      "Enter initial perforation discharge coefficient \n" +
      initialPerforationDischargeCoeff_val +
      "\n";
    data +=
      "Enter number of perforations per cluster \n" +
      noOfPerforationPerCluster_val +
      "\n";
    data +=
      "Enter erosion rate of perforation diamater in inches/bbl (put zero if no erosion) \n" +
      errosionRateDiameterInches_val +
      "\n";
    data +=
      "Enter erosion rate of discharge coefficient in -/bbl (put zero if no erosion) \n" +
      errosionRateDischargeCoeff_val +
      "\n";
    data +=
      "Enter maximum values for perforation diamater (inch) and discharge coefficient (irrespective of erosion rate, these values are not exceeded) \n" +
      maxPerforationDiameterCoeff_val +
      "\n";
    data +=
      "To include perforation friction use '1' below, else use '2'. \n" +
      includePerforationFriction_val +
      "\n";

    data += "Enter payzone thickness (m) \n" + payZoneThickness_val + "\n";
    data +=
      "Enter if stress barriers are : 'symmetric' or 'asymmetric' or 'no_barrier' below \n" +
      stressBarriers_val +
      "\n";
    data +=
      "Enter excess stress in top and bottom barriers respectively (Pa)- for symmetric case use same values \n" +
      excessStressTopBottom_val +
      "\n";
    data +=
      "Maximum value of excess height growth allowed into top and bottom barriers respectively (m)- for symmetric ase use same values \n" +
      maxHeightGrowth_val +
      "\n";
    data +=
      "Fluid Leak-off model: Enter'1' for carter model, Enter '2' for pressure dependent (diffusion model) leak-off, Enter '3' to ignore leak-off \n" +
      fluidLeakModel_val +
      "\n";
    data +=
      "ROCK ELASTIC MODULI (YOUNG'S MODULUS AND POISSON'S RATIO)				  	 (Pa,---) \n" +
      youngModulus_val +
      "," +
      poissonRatio_val +
      "\n";
    data +=
      "FRACTURE TOUGHNESS OF THE ROCK,porosity,permeability and initial pore pressure                           (Pa.m^(0.5),NA,m^2,Pa) \n" +
      fractureToughness_val +
      "," +
      porosity_val +
      "," +
      permeability_val +
      "," +
      initialPorePressure_val +
      "\n";
    data +=
      "Enter fracture toughness in vertical direction for top and bottom bounding layers in the order seperated by comma (Pa.m^(0.5)) \n" +
      fractureToughnessTop_val +
      "," +
      fractureToughnessBottom_val +
      "\n";

    data +=
      "IN-SITU STRESS FIELD IN GLOBAL AXES (SXX,SYY,SXY)  (Pa,Pa,Pa) (compression is negative) \n" +
      "Enter the constants a,b,c in the function SXX=aX+bY+c (a,b has units of Pa/m and c is Pa) (X is always direction of wellbore) \n" +
      errorConstInStressSxxFunc_val +
      "\n";
    data +=
      "Enter the constants a,b,c in the function SYY=aX+bY+c (a,b has units of Pa/m and c is Pa) (Y is always direction perpendicular to wellbore) \n" +
      errorConstInStressSyyFunc_val +
      "\n";
    data +=
      "Enter the constants a,b,c in the function SXY=aX+bY+c (a,b has units of Pa/m and c is Pa) (X is always direction of wellbore) \n" +
      errorConstInStressSxyFunc_val +
      "\n";

    data +=
      "To activate non-planar fracture propagation enter 1. For planar propagation enter 2 \n" +
      nonPlanar_val +
      "\n";
    data +=
      "To completely turn-off shear interaction between the fractures, enter 2, to keep shear interaction, enter 1 \n" +
      shearInteraction_val +
      "\n";

    data +=
      "Choose between fixed contact aperture (Enter 1 below) or variable contact aperture (Enter 2 below) for the fracture contact criterion during shut-in \n" +
      fixedContactAperture_val +
      "\n";
    data +=
      "If fixed contact is selected above, Enter the value of constant contact aperture for all fractures (m) \n" +
      constantContactAperture_val +
      "\n";
    data +=
      "If variable contact aperture is chosen, indicate its value as % of fracture widths right before injection shutin \n" +
      percentageFractureWidths_val +
      "\n";
    data +=
      "Enter sigma_ref (stress at which fracture aperture reduced by 90%) (Pa) \n" +
      enterSigmaRef_val +
      "\n";
    data +=
      "Enter the percentage of retained widths for previous stage fractures for stage to stage stress shadow calculation (%) \n" +
      percentageStageFractures_val +
      "\n";

    data +=
      "For printing tecplot results, enter timestep skip values during injection and shutin below seperated by comma. \n" +
      timeSkip_val +
      "\n";
    data +=
      "To display contours as scatter points enter 1. To display results as continuous contour surfaces enter 2 \n" +
      displayContours_val +
      "\n";

    const textToBLOB = new Blob([data], { type: "text/plain" });
    const sFileName = "PROPERTIES_INPUT.txt"; // The file to save the data.

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
    return (
      <div>
        <NavBar />
        {/* Removed default key  */}
        {console.log(this.state.formData)}
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Wellbore and perf data{" "}
              <i class="fas fa-angle-down rotate-icon"></i>
            </Accordion.Toggle>
            <Accordion.Collapse className="small-input" eventKey="0">
              <RockWellAndWellBorn
                fileData={this.state.formData.fileData}
                handleChange={this.handleChange}
              />
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Rock mechanical data
            </Accordion.Toggle>
            <Accordion.Collapse className="small-input" eventKey="1">
              <RockMechanicalData
                fileData={this.state.formData.fileData}
                handleChange={this.handleChange}
              />
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Stress data
            </Accordion.Toggle>
            <Accordion.Collapse className="small-input" eventKey="2">
              <StressData
                fileData={this.state.formData.fileData}
                handleChange={this.handleChange}
              />
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Propogation data
            </Accordion.Toggle>
            <Accordion.Collapse className="small-input" eventKey="3">
              <PropogationData
                fileData={this.state.formData.fileData}
                handleChange={this.handleChange}
              />
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              Closure parameters
            </Accordion.Toggle>
            <Accordion.Collapse className="small-input" eventKey="4">
              <ClosureParameters
                fileData={this.state.formData.fileData}
                handleChange={this.handleChange}
              />
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              Display and printing Option
            </Accordion.Toggle>
            <Accordion.Collapse className="small-input" eventKey="5">
              <DisplayAndPrintOptions
                fileData={this.state.formData.fileData}
                handleChange={this.handleChange}
              />
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
        <Col lg="3" style={{ marginTop: 30 }}>
          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              onChange={this.handleRead}
            />
            {/* <Button type="submit" onClick={this.handleRead}>
              Read from a file
            </Button> */}
          </Form.Group>
        </Col>
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
