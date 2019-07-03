import React, { Component } from "react";
import "./Arrows.css";
import { GradientContext } from "../../context";

class Arrows extends Component {
  static contextType = GradientContext;

  render() {
    const gradient = this.context;
    return (
      <div>
        <button
          style={{ position: "fixed", top: "50%" }}
          className="btn btn-secondary leftButton btn-lg"
          onClick={gradient.previousButton}
        >
          <b>{"<"}</b>
        </button>

        <button
          style={{ position: "fixed", top: "50%", right: "0%" }}
          className="btn btn-secondary rightButton btn-lg"
          onClick={gradient.nextButton}
        >
          <b>{">"}</b>
        </button>
      </div>
    );
  }
}

export default Arrows;
