import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import StageContent from "./StageContent";

class Stages extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    console.log("Value of Props in Stages" + this.props.count);
    const ids = Array.from({ length: this.props.count }, (stage, i) => i + 1);
    console.log(ids);
    const tabList = ids.map((id) => {
      const stage = "stage-" + id;
      const stage_id = this.props.id + "stage-" + id;
      return (
        <Tab.Pane eventKey={stage_id} title={stage}>
          <StageContent id={stage_id} />
        </Tab.Pane>
      );
    });

    return (
      <Tabs
        //handle this defaultActiveKey
        defaultActiveKey="Well_1stage-1"
        transition={false}
        id="stages"
      >
        {tabList}
      </Tabs>
    );
  }
}

export default Stages;
