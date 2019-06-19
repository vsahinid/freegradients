import React, { Component } from "react";
import ColorSlider from "./ColorSlider";
import Arrows from "./Arrows";

class ColorPanel extends Component {
  state = {
    title: "A Lost Memory",
    color1: "#de6262",
    color2: "ffb88c",
    orientation: "right"
  };
  render() {
    return (
      <div>
        <ColorSlider color1="red" color2="blue" title="Capricious" />
        <Arrows />
      </div>
    );
  }
}

export default ColorPanel;
