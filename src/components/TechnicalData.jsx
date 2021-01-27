import React, { Component } from "react";
import { Form, Table, Col, Button } from "react-bootstrap";
import NavBar from "../components/NavBar";

class TechnicalData extends Component {
  state = {};

  handleSubmit = () => {
    const maxNumIteration_val = document.getElementById("maxNumIteration")
      .value;
    const heightEffectSwitch_val = document.getElementById("heightEffectSwitch")
      .value;
    const errorBoundary_val = document.getElementById("errorBoundary").value;
    const noOfQuardrature_val = document.getElementById("noOfQuardrature")
      .value;
    const guessTime_val = document.getElementById("guessTime").value;
    const quessTipPressure_val = document.getElementById("quessTipPressure")
      .value;
    const stressIntensity_val = document.getElementById("stressIntensity")
      .value;
    const sifConvergence_val = document.getElementById("sifConvergence").value;
    const bisectMethod_val = document.getElementById("bisectMethod").value;
    const upperLowerBounds_val = document.getElementById("upperLowerBounds")
      .value;
    const guessAperture_val = document.getElementById("guessAperture").value;
    const nonLinearSolver_val = document.getElementById("nonLinearSolver")
      .value;
    const jacobianCal_val = document.getElementById("jacobianCal").value;
    const timeIncrement_val = document.getElementById("timeIncrement").value;
    const elmSizeShape_val = document.getElementById("elmSizeShape").value;
    const elmSizeForStage_val = document.getElementById("elmSizeForStage")
      .value;
    const analyticalHeight_val = document.getElementById("analyticalHeight")
      .value;
    const guessHeight_val = document.getElementById("guessHeight").value;
    const tipElmSize_val = document.getElementById("tipElmSize").value;
    const guessHeightIncrement_val = document.getElementById(
      "guessHeightIncrement"
    ).value;
    const maxAllowedStress_val = document.getElementById("maxAllowedStress")
      .value;
    const stressIntensityFactor_val = document.getElementById(
      "stressIntensityFactor"
    ).value;
    const maxTimeIncrement_val = document.getElementById("maxTimeIncrement")
      .value;

    let data =
      "MAXIMUM NUMBER OF ITERATIONS ALLOWED FOR Stress Intensity Factor CONVERGENCE \n";
    data += maxNumIteration_val + "\n";
    data +=
      "Height Effect Switch (Enter '1' for Enable and '0' For Disable) \n" +
      heightEffectSwitch_val +
      "\n";
    data +=
      "ERROR BOUNDARIEs FOR Stress intensity factor \n" +
      errorBoundary_val +
      "\n";
    data +=
      "NUMBER OF GAUSS QUADRATURE POINTS FOR NUMERICAL INTEGRATION OF TIP ELEMENTS (2,4,6,8,10,12,16,20,24,32,40,48,64,80,96) \n" +
      noOfQuardrature_val +
      "\n";
    data +=
      "ADDITIONAL TECHNICAL INPUT (MODIFY THE BELOW VALUES ONLY WHEN EXPERIENCING CONVERGENCE ISSUES) \n" +
      "GUESS TIME FOR 1ST STAGE FRACTURES         (sec) \n";
    data += guessTime_val + "\n";
    data +=
      "GUESS TIP PRESSURE FOR SUBSEQUENT STAGE FRACTURES  (Pa) \n" +
      quessTipPressure_val +
      "\n";
    data +=
      "STRESS INTENSITY FACTOR CONVERGENCE FACTOR (0.7-0.99) \n" +
      stressIntensity_val +
      "\n";
    data +=
      "Enter 1 to activate faster SIF convergence. To deactivate enter 0 \n" +
      sifConvergence_val +
      "\n";
    data +=
      "Enter 1 to activate bisecion method for KIC convergence \n" +
      bisectMethod_val +
      "\n";
    data +=
      "Enter upper and lower bounds of time for bisection method \n" +
      upperLowerBounds_val +
      "\n";
    data += "Enter Guess Aperture (m) \n" + guessAperture_val + "\n";
    data +=
      "Non-linear solver- use 1 for Newton-Raphson or 2 for line-search \n" +
      nonLinearSolver_val +
      "\n";
    data +=
      "Jacobian calculation- use '1' for forward difference or '2' for center difference \n" +
      jacobianCal_val +
      "\n";
    data +=
      "Enter time increment for SIF convergence algorithm (sec) \n" +
      timeIncrement_val +
      "\n";
    data +=
      "Enter element sizes for shape function calculation (m) \n" +
      elmSizeShape_val +
      "\n";
    data +=
      "Enter element size for stage-stage stress shadow calculation (m) \n" +
      elmSizeForStage_val +
      "\n";
    data +=
      "Enter '1' below for analytical height growth algorithm or Enter '2' for numerical based algorithm \n" +
      analyticalHeight_val +
      "\n";
    data +=
      "Enter guess height increment for numerical height growth algorithm \n" +
      guessHeight_val +
      "\n";
    data +=
      "Enter tip element size for numerical height growth algorithm \n" +
      tipElmSize_val +
      "\n";
    data +=
      "Enter guess height increment for analytical height growth algorithm \n" +
      guessHeightIncrement_val +
      "\n";
    data +=
      "Enter the maximum allowed stress difference between to consecutive layers (m) \n" +
      maxAllowedStress_val +
      "\n";
    data +=
      "Enter stress intensity factor correction coefficient value \n" +
      stressIntensityFactor_val +
      "\n";
    data +=
      "Enter maximum time increment during shut-in \n" +
      maxTimeIncrement_val +
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
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="heightEffectSwitch">
              <Form.Label>Height effect switch</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="errorBoundary">
              <Form.Label>
                Error boundary for stress intensity factor
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="noOfQuardrature">
              <Form.Label>Number of quardrature points</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="guessTime">
              <Form.Label>Guess time for 1st stage fractures (sec)</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="quessTipPressure">
              <Form.Label>
                Quess tip pressure for subsequent stage fractures (Pa)
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="stressIntensity">
              <Form.Label>
                Stress intensity factor convergence factor
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="sifConvergence">
              <Form.Label>faster SIF convergence</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="bisectMethod">
              <Form.Label>Bisect method for KIC convergence</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="upperLowerBounds">
              <Form.Label>
                Upper and lower bounds of time for bisection method
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="guessAperture">
              <Form.Label>Guess aperture (m)</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="nonLinearSolver">
              <Form.Label>Non-linear solver</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="jacobianCal">
              <Form.Label>Jacobian calculation</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="timeIncrement">
              <Form.Label>
                Time increment for SIF convergence algorithm (sec)
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="elmSizeShape">
              <Form.Label>
                Element size for shape function calculation (m)
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="elmSizeForStage">
              <Form.Label>
                Element size for stage-stage stress shadow calculation (m)
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="analyticalHeight">
              <Form.Label>
                Analytical height growth algorithm/Numerical based algorithm
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="guessHeight">
              <Form.Label>
                Guess height increment for numerical height growth algorithm
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="tipElmSize">
              <Form.Label>
                Tip element size for numerical height growth algorithm
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="guessHeightIncrement">
              <Form.Label>
                Guess height increment for analytical height growth algorithm
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="maxAllowedStress">
              <Form.Label>
                Maximum allowed stress diff between two consecutive layers (m)
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="stressIntensityFactor">
              <Form.Label>
                Stress intensity factor correction coefficient value
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="maxTimeIncrement">
              <Form.Label>
                Enter maximum time increment during shut-in
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>
        </Form>

        <div>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
          {"  "}
          <Button variant="primary" type="readFile">
            Read From File
          </Button>
        </div>
      </div>
    );
  }
}

export default TechnicalData;
