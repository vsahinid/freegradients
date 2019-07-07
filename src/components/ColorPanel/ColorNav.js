import React, { Component } from "react";
import ViewAllMenu from "../Navbar/ViewAll/ViewAllMenu";
import InfoCircle from "./InfoCircle";
import Favorite from "./Favorite";
import DownloadPDF from "../Navbar/DownloadPDF/DownloadPDF";
import { GradientContext } from "../../context";

class ColorNav extends Component {
  static contextType = GradientContext;
  render() {
    const gradient = this.context;
    return (
      <div
        className="col-md-12"
        style={{
          position: "fixed",
          top: "10%"
        }}
      >
        {" "}
        <h4 className="p-3" style={{ color: "white", textAlign: "center" }}>
          <div className="m-5 colorPanelNav">
            <InfoCircle definition={gradient.definition} />
          </div>
          <div className="m-5 colorPanelNav">
            <Favorite />
          </div>
          <div className="m-5 colorPanelNav">
            <DownloadPDF />
          </div>
          <br />
          <div>{gradient.name}</div>
        </h4>
      </div>
    );
  }
}

export default ColorNav;
