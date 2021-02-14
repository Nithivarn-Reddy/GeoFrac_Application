import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import NavBar from "../components/NavBar";
import FileUploader from "../customComponents/FileUploader";

class TechnicalData extends Component {
  state = {formData: {
      fileData: {
        maxNumIteration: "",
        heightEffectSwitch: "",
        errorBoundary: "",
        noOfQuardrature: "",
        guessTime: "",
        quessTipPressure: "",
        stressIntensity: "",
        sifConvergence: "",
        bisectMethod: "",
        upperLowerBounds: "",
        guessAperture: "",
        nonLinearSolver: "",
        jacobianCal: "",
        timeIncrement: "",
        elmSizeShape: "",
        elmSizeForStage: "",
        analyticalHeight: "",
        guessHeight: "",
        tipElmSize: "",
        guessHeightIncrement: "",
        maxAllowedStress: "",
        stressIntensityFactor: "",
        maxTimeIncrement: ""
      }
    },
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let formData = { ...this.state.formData };
    formData["fileData"][name] = value;
    this.setState({ formData: formData });
  };

  handleRead = (fileUpload) => {
    var fr = new FileReader();
    console.log("file", fileUpload);
    const fileName = fileUpload;
    fr.readAsText(fileName);
    const self = this;
    fr.onload = function () {
      let data = fr.result;
      let formData = { ...self.state.formData };
      
      data = data
        .split("\n")
        .filter(
          (e) =>
            e !==
            "*************************************************************"
        );
        formData["fileData"]["maxNumIteration"] = data[1];
        formData["fileData"]["heightEffectSwitch"] = data[3];
        formData["fileData"]["errorBoundary"] = data[5];
        formData["fileData"]["noOfQuardrature"] = data[7];
        formData["fileData"]["guessTime"] = data[10];
        formData["fileData"]["quessTipPressure"] = data[12];
        formData["fileData"]["stressIntensity"] = data[14];
        formData["fileData"]["sifConvergence"] = data[16];
        formData["fileData"]["bisectMethod"] = data[18];
        formData["fileData"]["upperLowerBounds"] = data[20];
        formData["fileData"]["guessAperture"] = data[22];
        formData["fileData"]["nonLinearSolver"] = data[24];
        formData["fileData"]["jacobianCal"] = data[26];
        formData["fileData"]["timeIncrement"] = data[28];
        formData["fileData"]["elmSizeShape"] = data[30];
        formData["fileData"]["elmSizeForStage"] = data[32];
        formData["fileData"]["analyticalHeight"] = data[34];
        formData["fileData"]["guessHeight"] = data[36];
        formData["fileData"]["tipElmSize"] = data[38];
        formData["fileData"]["guessHeightIncrement"] = data[40];
        formData["fileData"]["maxAllowedStress"] = data[42];
        formData["fileData"]["stressIntensityFactor"] = data[44];
        formData["fileData"]["maxTimeIncrement"] = data[46];

      self.setState({ formData: formData });
    };
  };

  handleSubmit = () => {
    let data =
      "MAXIMUM NUMBER OF ITERATIONS ALLOWED FOR Stress Intensity Factor CONVERGENCE \n";
    data += this.state.formData.fileData.maxNumIteration + "\n";
    data +=
      "Height Effect Switch (Enter '1' for Enable and '0' For Disable) \n" +
      this.state.formData.fileData.heightEffectSwitch +
      "\n";
    data +=
      "ERROR BOUNDARIEs FOR Stress intensity factor \n" +
    this.state.formData.fileData.errorBoundary +
      "\n";
    data +=
      "NUMBER OF GAUSS QUADRATURE POINTS FOR NUMERICAL INTEGRATION OF TIP ELEMENTS (2,4,6,8,10,12,16,20,24,32,40,48,64,80,96) \n" +
      this.state.formData.fileData.noOfQuardrature +
      "\n";
    data +=
      "ADDITIONAL TECHNICAL INPUT (MODIFY THE BELOW VALUES ONLY WHEN EXPERIENCING CONVERGENCE ISSUES) \n" +
      "GUESS TIME FOR 1ST STAGE FRACTURES         (sec) \n" +
    this.state.formData.fileData.guessTime + "\n";
    data +=
      "GUESS TIP PRESSURE FOR SUBSEQUENT STAGE FRACTURES  (Pa) \n" +
       this.state.formData.fileData.quessTipPressure +
      "\n";
    data +=
      "STRESS INTENSITY FACTOR CONVERGENCE FACTOR (0.7-0.99) \n" +
      this.state.formData.fileData.stressIntensity +
      "\n";
    data +=
      "Enter 1 to activate faster SIF convergence. To deactivate enter 0 \n" +
     this.state.formData.fileData. sifConvergence +
      "\n";
    data +=
      "Enter 1 to activate bisecion method for KIC convergence \n" +
   this.state.formData.fileData.   bisectMethod +
      "\n";
    data +=
      "Enter upper and lower bounds of time for bisection method \n" +
      this.state.formData.fileData.upperLowerBounds +
      "\n";
    data += "Enter Guess Aperture (m) \n" + this.state.formData.fileData.guessAperture + "\n";
    data +=
      "Non-linear solver- use 1 for Newton-Raphson or 2 for line-search \n" +
      this.state.formData.fileData.nonLinearSolver +
      "\n";
    data +=
      "Jacobian calculation- use '1' for forward difference or '2' for center difference \n" +
      this.state.formData.fileData.jacobianCal +
      "\n";
    data +=
      "Enter time increment for SIF convergence algorithm (sec) \n" +
    this.state.formData.fileData.timeIncrement +
      "\n";
    data +=
      "Enter element sizes for shape function calculation (m) \n" +
   this.state.formData.fileData.elmSizeShape +
      "\n";
    data +=
      "Enter element size for stage-stage stress shadow calculation (m) \n" +
      this.state.formData.fileData.elmSizeForStage +
      "\n";
    data +=
      "Enter '1' below for analytical height growth algorithm or Enter '2' for numerical based algorithm \n" +
      this.state.formData.fileData.analyticalHeight +
      "\n";
    data +=
      "Enter guess height increment for numerical height growth algorithm \n" +
  this.state.formData.fileData.guessHeight +
      "\n";
    data +=
      "Enter tip element size for numerical height growth algorithm \n" +
 this.state.formData.fileData.tipElmSize +
      "\n";
    data +=
      "Enter guess height increment for analytical height growth algorithm \n" +
      this.state.formData.fileData.guessHeightIncrement +
      "\n";
    data +=
      "Enter the maximum allowed stress difference between to consecutive layers (m) \n" +
      this.state.formData.fileData.maxAllowedStress +
      "\n";
    data +=
      "Enter stress intensity factor correction coefficient value \n" +
      this.state.formData.fileData.stressIntensityFactor +
      "\n";
    data +=
      "Enter maximum time increment during shut-in \n" +
      this.state.formData.fileData.maxTimeIncrement +
      "\n";

    console.log("Technical Data ------ " + data);

    const textToBLOB = new Blob([data], { type: "text/plain" });
    const sFileName = "TECHNICAL_INPUT.txt"; // The file to save the data.

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
        <Form className="margin">
          <Form.Row>
            <Form.Group as={Col} controlId="maxNumIteration">
              <Form.Label>Maximum number of iteration</Form.Label>
              <Form.Control type="text"
              name="maxNumIteration"
              value={this.state.formData.fileData["maxNumIteration"] || "50"}
              onChange={this.handleChange} 
              defaultValue="50" />
            </Form.Group>

            <Form.Group as={Col} controlId="heightEffectSwitch">
              <Form.Label>Height effect switch</Form.Label>
              <Form.Control type="text"
              name="heightEffectSwitch"
              value={this.state.formData.fileData["heightEffectSwitch"] || ""}
              onChange={this.handleChange} 
              defaultValue="1" />
            </Form.Group>

            <Form.Group as={Col} controlId="errorBoundary">
              <Form.Label>
                Error boundary for stress intensity factor
              </Form.Label>
              <Form.Control type="text"
              name="errorBoundary"
              value={this.state.formData.fileData["errorBoundary"] || ""}
              onChange={this.handleChange} 
              defaultValue="1.0D-1" />
            </Form.Group>

            <Form.Group as={Col} controlId="noOfQuardrature">
              <Form.Label>Number of quardrature points</Form.Label>
              <Form.Control type="text"
              name="noOfQuardrature"
              value={this.state.formData.fileData["noOfQuardrature"] || ""}
              onChange={this.handleChange} 
              defaultValue="48" />
            </Form.Group>

            <Form.Group as={Col} controlId="guessTime">
              <Form.Label>Guess time for 1st stage fractures (sec)</Form.Label>
              <Form.Control type="text"
              name="guessTime"
              value={this.state.formData.fileData["guessTime"] || ""}
              onChange={this.handleChange} 
              defaultValue="1.0d0" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="quessTipPressure">
              <Form.Label>
                Quess tip pressure for subsequent stage fractures (Pa)
              </Form.Label>
              <Form.Control type="text"
              name="quessTipPressure"
              value={this.state.formData.fileData["quessTipPressure"] || ""}
              onChange={this.handleChange} 
              defaultValue="1.5E6" />
            </Form.Group>

            <Form.Group as={Col} controlId="stressIntensity">
              <Form.Label>
                Stress intensity factor convergence factor
              </Form.Label>
              <Form.Control type="text"
              name="stressIntensity"
              value={this.state.formData.fileData["stressIntensity"] || ""}
              onChange={this.handleChange} 
              defaultValue="0.7" />
            </Form.Group>

            <Form.Group as={Col} controlId="sifConvergence">
              <Form.Label>faster SIF convergence</Form.Label>
              <Form.Control type="text"
              name="sifConvergence"
              value={this.state.formData.fileData["sifConvergence"] || ""}
              onChange={this.handleChange} 
              defaultValue="1" />
            </Form.Group>

            <Form.Group as={Col} controlId="bisectMethod">
              <Form.Label>Bisect method for KIC convergence</Form.Label>
              <Form.Control type="text"
              name="bisectMethod"
              value={this.state.formData.fileData["bisectMethod"] || ""}
              onChange={this.handleChange} 
              defaultValue="1" />
            </Form.Group>

            <Form.Group as={Col} controlId="upperLowerBounds">
              <Form.Label>
                Upper and lower bounds of time for bisection method
              </Form.Label>
              <Form.Control type="text"
              name="upperLowerBounds"
              value={this.state.formData.fileData["upperLowerBounds"] || ""}
              onChange={this.handleChange} 
              defaultValue="30.0d0,0.0d0" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="guessAperture">
              <Form.Label>Guess aperture (m)</Form.Label>
              <Form.Control type="text"
              name="guessAperture"
              value={this.state.formData.fileData["guessAperture"] || ""}
              onChange={this.handleChange} 
              defaultValue="2e-3" />
            </Form.Group>

            <Form.Group as={Col} controlId="nonLinearSolver">
              <Form.Label>Non-linear solver</Form.Label>
              <Form.Control type="text"
              name="nonLinearSolver"
              value={this.state.formData.fileData["nonLinearSolver"] || ""}
              onChange={this.handleChange} 
              defaultValue="2" />
            </Form.Group>

            <Form.Group as={Col} controlId="jacobianCal">
              <Form.Label>Jacobian calculation</Form.Label>
              <Form.Control type="text"
              name="jacobianCal"
              value={this.state.formData.fileData["jacobianCal"] || ""}
              onChange={this.handleChange} 
              defaultValue="1" />
            </Form.Group>

            <Form.Group as={Col} controlId="timeIncrement">
              <Form.Label>
                Time increment for SIF convergence algorithm (sec)
              </Form.Label>
              <Form.Control type="text"
              name="timeIncrement"
              value={this.state.formData.fileData["timeIncrement"] || ""}
              onChange={this.handleChange} 
              defaultValue="2.0d0" />
            </Form.Group>

            <Form.Group as={Col} controlId="elmSizeShape">
              <Form.Label>
                Element size for shape function calculation (m)
              </Form.Label>
              <Form.Control type="text"
              name="elmSizeShape"
              value={this.state.formData.fileData["elmSizeShape"] || ""}
              onChange={this.handleChange} 
              defaultValue="0.5d0" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="elmSizeForStage">
              <Form.Label>
                Element size for stage-stage stress shadow calculation (m)
              </Form.Label>
              <Form.Control type="text"
              name="elmSizeForStage"
              value={this.state.formData.fileData["elmSizeForStage"] || ""}
              onChange={this.handleChange} 
              defaultValue="5.0d0" />
            </Form.Group>

            <Form.Group as={Col} controlId="analyticalHeight">
              <Form.Label>
                Analytical height growth algorithm/Numerical based algorithm
              </Form.Label>
              <Form.Control type="text"
              name="analyticalHeight"
              value={this.state.formData.fileData["analyticalHeight"] || ""}
              onChange={this.handleChange} 
              defaultValue="1" />
            </Form.Group>

            <Form.Group as={Col} controlId="guessHeight">
              <Form.Label>
                Guess height increment for numerical height growth algorithm
              </Form.Label>
              <Form.Control type="text"
              name="guessHeight"
              value={this.state.formData.fileData["guessHeight"] || ""}
              onChange={this.handleChange} 
              defaultValue="0.15d0" />
            </Form.Group>

            <Form.Group as={Col} controlId="tipElmSize">
              <Form.Label>
                Tip element size for numerical height growth algorithm
              </Form.Label>
              <Form.Control type="text"
              name="tipElmSize"
              value={this.state.formData.fileData["tipElmSize"] || ""}
              onChange={this.handleChange} 
              defaultValue="0.1d0" />
            </Form.Group>

            <Form.Group as={Col} controlId="guessHeightIncrement">
              <Form.Label>
                Guess height increment for analytical height growth algorithm
              </Form.Label>
              <Form.Control type="text"
              name="guessHeightIncrement"
              value={this.state.formData.fileData["guessHeightIncrement"] || ""}
              onChange={this.handleChange} 
              defaultValue="1.0d0" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="maxAllowedStress">
              <Form.Label>
                Maximum allowed stress diff between two consecutive layers (m)
              </Form.Label>
              <Form.Control type="text"
              name="maxAllowedStress"
              value={this.state.formData.fileData["maxAllowedStress"] || ""}
              onChange={this.handleChange} 
              defaultValue="1.0e6" />
            </Form.Group>

            <Form.Group as={Col} controlId="stressIntensityFactor">
              <Form.Label>
                Stress intensity factor correction coefficient value
              </Form.Label>
              <Form.Control type="text"
              name="stressIntensityFactor"
              value={this.state.formData.fileData["stressIntensityFactor"] || ""}
              onChange={this.handleChange} 
              defaultValue="0.75d0" />
            </Form.Group>

            <Form.Group as={Col} controlId="maxTimeIncrement">
              <Form.Label>
                Enter maximum time increment during shut-in
              </Form.Label>
              <Form.Control type="text"
              name="maxTimeIncrement"
              value={this.state.formData.fileData["maxTimeIncrement"] || ""}
              onChange={this.handleChange} 
              defaultValue="5.0d0" />
            </Form.Group>
          </Form.Row>
        </Form>

        <div>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
          {"   "}
        <FileUploader handleFile={this.handleRead}/>
        </div>
      </div>
    );
  }
}

export default TechnicalData;
