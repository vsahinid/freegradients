import React, { Component } from "react";
import { GradientContext } from "../../../context";
import ReactTooltip from "react-tooltip";

class Rotate extends Component {
  static contextType = GradientContext;
  render() {
    const gradient = this.context;
    return (
      <div>
        <i
          className="fa fa-redo-alt"
          data-tip={`Rotate`}
          data-for="rotate"
          style={{ fontSize: "20px" }}
          onClick={gradient.rotateGradient}
        />
        <ReactTooltip place="bottom" id="rotate" />
      </div>
    );
  }
}

export default Rotate;
