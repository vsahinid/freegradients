import React, { Component } from "react";
import { GradientContext } from "../../context";

class ColorSlider extends Component {
  static contextType = GradientContext;
  render() {
    const gradient = this.context;
    let colorGradient = `linear-gradient(to ${gradient.orientation1} ${
      gradient.orientation2
    }, ${gradient.color1}, ${gradient.color2})`;
    return (
      <div
        id="capture"
        className="container-flex"
        style={{
          width: "100%",
          height: "1200px",
          background: colorGradient
        }}
      />
    );
  }
}

export default ColorSlider;
