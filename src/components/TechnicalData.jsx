import React, { Component } from "react";
import { Form, Table, Col, Button } from "react-bootstrap";

class TechnicalData extends Component {
  state = {};
  render() {
    return (
      <div>
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

            <Form.Group as={Col} controlId="stessIntensity">
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
          <Button variant="primary" type="submit">
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
