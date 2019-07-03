import React, { Component } from "react";
import { GradientContext } from "../../context";

class InfoCircle extends Component {
  static contextType = GradientContext;
  render() {
    const gradient = this.context;
    return (
      <React.Fragment>
        <i
          className="fa fa-info-circle"
          data-toggle="tooltip"
          data-placement="left"
          title={gradient.definition}
        />
      </React.Fragment>
    );
  }
}

export default InfoCircle;
