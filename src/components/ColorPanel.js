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
        <ColorSlider
          orientation1="top"
          orientation2="bottom"
          color1="#430089"
          color2="#82ffa1"
          title="Capricious"
        />
        <Arrows />
      </div>
    );
  }
}

export default ColorPanel;
