import React, { Component } from "react";
import Arrows from "./Arrows";
import ViewAllMenu from "../Navbar/ViewAll/ViewAllMenu";
import InfoCircle from "./InfoCircle";
import { GradientContext } from "../../context";
import Favorite from "./Favorite";

class ColorSlider extends Component {
  static contextType = GradientContext;
  render() {
    const gradient = this.context;
    let colorGradient = `linear-gradient(to ${gradient.orientation1} ${
      gradient.orientation2
    }, ${gradient.color1}, ${gradient.color2})`;
    return (
      <div
        className="container-flex"
        style={{
          width: "100%",
          height: "91vh",
          background: colorGradient
        }}
      >
        <h4 className="p-3" style={{ color: "white" }}>
          <div className="m-5 colorPanelNav">
            <InfoCircle definition={gradient.definition} />
          </div>
          <div className="m-5 colorPanelNav">
            <Favorite />
          </div>
          <div className="m-5 colorPanelNav">
            <ViewAllMenu />
          </div>
          <br />
          <div>{gradient.name}</div>
        </h4>
        <Arrows />
      </div>
    );
  }
}

export default ColorSlider;
