import React, { Component } from "react";

import { Form, Table, Col } from "react-bootstrap";

class RockWellAndWellBorn extends Component {
  state = {
    fileData: {
      "Enter number of Horizontal wells": 2,
    },
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let fileData = { ...this.state.fileData };
    fileData[name] = value;
    this.setState({ fileData: fileData });
    console.log("State value", this.state.fileData);
  };
  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="noOfHorizontolWells">
            <Form.Label>No of horizontal wells</Form.Label>
            <Form.Control
              type="text"
              name="Enter number of Horizontal wells"
              value={
                this.state.fileData["Enter number of Horizontal wells"] || ""
              }
              onChange={this.handleChange}
              // placeholder="Enter no of horizontal wells"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="wellInclinations">
            <Form.Label>Well inclinations(in degrees)</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter Well inclinations(in degrees)"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="perforationOrientation">
            <Form.Label>Perforation orientation</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="perforationAngle">
            <Form.Label>
              Perforation angle in degree w.r.t wellbore axis
            </Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter perforation angle in degree w.r.t wellbore axis"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="wellsSpacing">
            <Form.Label>Spacing between the wells</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter spacing between the wells"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="stagesPerWell">
            <Form.Label>Number of stages per well</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter number of stages per well"
            ></Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="clusterPerStage">
            <Form.Label>Number of cluster per stage</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter number of cluster per stage"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="clusterSpacing">
            <Form.Label>Cluster spacing</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter cluster spacing"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="stageSpacing">
            <Form.Label>Stage spacing</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter stage spacing"
            ></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="offsetBetweenParallelWells">
            <Form.Label>
              Offset between the fractures of parallel wells (m)
            </Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter offset between the fractures of parallel wells (m)"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="offsetType">
            <Form.Label>Offset type</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter offset type"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="sizeOfFracturesPC">
            <Form.Label>
              Initial size of fractures from perforation clusters
            </Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter initial size of fractures from perforation clusters"
            ></Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="elementFractures">
            <Form.Label>Initial element size for all fractures</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter initial element size for all fractures"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="maxMinSizeOfFractures">
            <Form.Label>
              Maximum and minimum element size for all fractures (m)
            </Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter Maximum and minimum element size for all fractures (m)"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="initialPerforationDiameter">
            <Form.Label>Initial perforation diameter</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter initial perforation diameter"
            ></Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="initialPerforationDischargeCoeff">
            <Form.Label>Intital perforation discharge coeficient</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter intital perforation discharge coeficient"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="noOfPerforationPerCluster">
            <Form.Label>Number of perforation per cluster</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter number of perforation per cluster"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="errosionRateDiameterInches">
            <Form.Label>
              Errosion rate of perforation diameter in inches/bbl
            </Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter errosion rate of perforation diameter in inches/bbl"
            ></Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="errosionRateDischargeCoeff">
            <Form.Label>
              Errosion rate of discharge coefficient in -/bbl
            </Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter Errosion rate of discharge coefficient in -/bbl"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="maxPerforationDiameterCoeff">
            <Form.Label>
              Maximum values of perforation diameter coefficient
            </Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter Maximum values of perforation diameter coefficient"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="includePerforationFriction">
            <Form.Label>Include perforation friction</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter Include perforation friction"
            ></Form.Control>
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}

export default RockWellAndWellBorn;
