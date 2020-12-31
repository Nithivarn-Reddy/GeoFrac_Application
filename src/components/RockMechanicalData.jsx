import React, { Component } from "react";
import { Form, Table } from "react-bootstrap";

class RockMechanicalData extends Component {
  state = {};
  render() {
    return (
      <Table>
        <tr>
          <td>
            <Form.Group controlId="payZoneThickness">
              <Form.Label>Payzone thickness (m)</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="stressBarriers">
              <Form.Label>Stress barriers</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>symetric</option>
                <option>asymetric</option>
                <option>no_barrier</option>
              </Form.Control>
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="excessStressTopBottom">
              <Form.Label>
                Excess stress in top and bottom barriers respectively (Pa)
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter excess stress in top and bottom barriers respectively (Pa)"
              />
            </Form.Group>
          </td>
        </tr>

        <tr>
          <td>
            <Form.Group controlId="maxHeightGrowth">
              <Form.Label>
                Maximum value of excess height growth allowed into top and
                bottom barrier respectively (m)
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter maximum value of excess height growth allowed into top and bottom barrier respectively (m)"
              />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="fluidLeakModel">
              <Form.Label>Fluid leak-off model</Form.Label>
              <br />
              <br />
              <Form.Control
                type="text"
                placeholder="Enter fluid leak-off model"
              ></Form.Control>
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="youngModulus">
              <Form.Label>Young's modulus</Form.Label>
              <Form.Control type="text" placeholder="Enter young's modulus" />
            </Form.Group>
          </td>
        </tr>

        <tr>
          <td>
            <Form.Group controlId="poissonRatio">
              <Form.Label>Poisson's ratio</Form.Label>
              <Form.Control type="text" placeholder="Enter poisson's ratio" />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="fractureToughness">
              <Form.Label>Fracture toughness of the rock</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter fracture toughness of the rock"
              ></Form.Control>
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="porosity">
              <Form.Label>Porosity</Form.Label>
              <Form.Control type="text" placeholder="Enter porosity" />
            </Form.Group>
          </td>
        </tr>

        <tr>
          <td>
            <Form.Group controlId="permeability">
              <Form.Label>Permeability</Form.Label>
              <Form.Control type="text" placeholder="Enter permeability" />
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="initialPorePressure">
              <Form.Label>Intitial pore pressure</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter intitial pore pressure"
              ></Form.Control>
            </Form.Group>
          </td>
          <td>
            <Form.Group controlId="fractureToughnessTop">
              <Form.Label>
                Enter fracture toughness in vertical direction for top bounding
                layers
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter fracture toughness in vertical direction for top bounding layers"
              />
            </Form.Group>
          </td>
        </tr>

        <tr>
          <td>
            <Form.Group controlId="fractureToughnessBottom">
              <Form.Label>
                Enter fracture toughness in vertical direction for bottom
                bounding layers
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter fracture toughness in vertical direction for bottom bounding layers"
              />
            </Form.Group>
          </td>
        </tr>
      </Table>
    );
  }
}

export default RockMechanicalData;
