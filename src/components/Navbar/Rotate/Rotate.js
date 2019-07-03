import React, { Component } from "react";
import { GradientContext } from "../../../context";

class Rotate extends Component {
  static contextType = GradientContext;
  render() {
    const gradient = this.context;
    return (
      <div>
        <i
          className="fa fa-refresh"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Rotate"
          style={{ fontSize: "20px" }}
          onClick={gradient.rotateGradient}
        />
      </div>
    );
  }
}

export default Rotate;
