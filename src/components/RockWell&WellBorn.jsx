import React, { Component } from "react";

import { Form, Table } from "react-bootstrap";

class RockWellAndWellBorn extends Component {
  state = {};
  render() {
    return (
      <Table>
        {/* <Form> */}
        <tr>
          <td>
            <Form.Group controlId="noOfHorizontolWells">
              <Form.Label>No of horizontal wells</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter no of horizontal wells"
              />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="wellInclinations">
              <Form.Label>Well inclinations(in degrees)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Well inclinations(in degrees)"
              />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="perforationOrientation">
              <Form.Label>Perforation orientation</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Control>
            </Form.Group>
          </td>
        </tr>

        <tr>
          <td>
            <Form.Group controlId="perforationAngle">
              <Form.Label>
                Perforation angle in degree w.r.t wellbore axis
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter perforation angle in degree w.r.t wellbore axis"
              />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="wellsSpacing">
              <Form.Label>Spacing between the wells</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter spacing between the wells"
              />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="stagesPerWell">
              <Form.Label>Number of stages per well</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter number of stages per well"
              ></Form.Control>
            </Form.Group>
          </td>
        </tr>

        <tr>
          <td>
            <Form.Group controlId="clusterPerStage">
              <Form.Label>Number of cluster per stage</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter number of cluster per stage"
              />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="clusterSpacing">
              <Form.Label>Cluster spacing</Form.Label>
              <Form.Control type="text" placeholder="Enter cluster spacing" />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="stageSpacing">
              <Form.Label>Stage spacing</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter stage spacing"
              ></Form.Control>
            </Form.Group>
          </td>
        </tr>

        {/* <tr> */}
        <tr>
          <td>
            <Form.Group controlId="offsetBetweenParallelWells">
              <Form.Label>
                Offset between the fractures of parallel wells (m)
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter offset between the fractures of parallel wells (m)"
              />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="offsetType">
              <Form.Label>Offset type</Form.Label>
              <Form.Control type="text" placeholder="Enter offset type" />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="sizeOfFracturesPC">
              <Form.Label>
                Initial size of fractures from perforation clusters
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter initial size of fractures from perforation clusters"
              ></Form.Control>
            </Form.Group>
          </td>
          {/* </tr> */}
        </tr>

        <tr>
          <td>
            <Form.Group controlId="elementFractures">
              <Form.Label>Initial element size for all fractures</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter initial element size for all fractures"
              />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="maxMinSizeOfFractures">
              <Form.Label>
                Maximum and minimum element size for all fractures (m)
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Maximum and minimum element size for all fractures (m)"
              />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="initialPerforationDiameter">
              <Form.Label>Initial perforation diameter</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter initial perforation diameter"
              ></Form.Control>
            </Form.Group>
          </td>
        </tr>

        <tr>
          <td>
            <Form.Group controlId="initialPerforationDischargeCoeff">
              <Form.Label>Intital perforation discharge coeficient</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter intital perforation discharge coeficient"
              />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="noOfPerforationPerCluster">
              <Form.Label>Number of perforation per cluster</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter number of perforation per cluster"
              />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="errosionRateDiameterInches">
              <Form.Label>
                Errosion rate of perforation diameter in inches/bbl
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter errosion rate of perforation diameter in inches/bbl"
              ></Form.Control>
            </Form.Group>
          </td>
        </tr>

        <tr>
          <td>
            <Form.Group controlId="errosionRateDischargeCoeff">
              <Form.Label>
                Errosion rate of discharge coefficient in -/bbl
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Errosion rate of discharge coefficient in -/bbl"
              />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="maxPerforationDiameterCoeff">
              <Form.Label>
                Maximum values of perforation diameter coefficient
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Maximum values of perforation diameter coefficient"
              />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="includePerforationFriction">
              <Form.Label>Include perforation friction</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Include perforation friction"
              ></Form.Control>
            </Form.Group>
          </td>
        </tr>
        {/* </Form> */}
      </Table>
    );
  }
}

export default RockWellAndWellBorn;
