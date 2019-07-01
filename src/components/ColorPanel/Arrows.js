import React, { Component } from "react";
import "./Arrows.css";
import { COLORS } from "../../MyColors";
const n = COLORS.length;

class Arrows extends Component {
  state = {
    currentID: ""
  };
  nextButton = () => {
    if (this.state.currentID === n - 1) {
      console.log(`Current ID: ${this.state.currentID}`);
      console.log(`Next ID: 0`);
      // this.props.updateColorGradient(0);
    } else {
      console.log(`Current ID: ${this.state.currentID}`);
      const newID = this.state.currentID + 1;
      console.log(`Previous ID: ${newID}`);
      // this.props.updateColorGradient(this.state.currentID + 1);
    }
  };
  previousButton = () => {
    if (this.state.currentID === 0) {
      console.log(`Current ID: ${this.state.currentID}`);
      console.log(`Previous ID: ${n - 1}`);
      // this.props.updateColorGradient(n - 1);
    } else {
      console.log(`Current ID: ${this.state.currentID}`);
      const newID = this.state.currentID - 1;
      console.log(`Previous ID: ${newID}`);
      // this.props.updateColorGradient(this.state.currentID - 1);
    }
  };

  componentDidMount() {
    this.setState({ currentID: this.props.id });
  }
  render() {
    return (
      <div style={{ display: "flex" }}>
        <button
          className="btn btn-secondary leftButton btn-lg"
          onClick={this.previousButton}
        >
          <b>{"<"}</b>
        </button>
        <button
          className="btn btn-secondary rightButton btn-lg"
          onClick={this.nextButton}
        >
          <b>{">"}</b>
        </button>
      </div>
    );
  }
}

export default Arrows;
