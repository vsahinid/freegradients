import React, { Component } from "react";
import "./Arrows.css";
import { COLORS } from "../../MyColors";
let n = COLORS.length;

class Arrows extends Component {
  state = {
    currentID: this.props.id
  };
  nextButton = () => {
    if (this.state.currentID === n - 1) {
      this.setState({ currentID: 0 }, () => {
        this.props.updateColorGradient(this.state.currentID);
      });
    } else {
      let newID = this.state.currentID + 1;
      this.setState({ currentID: newID }, () => {
        this.props.updateColorGradient(this.state.currentID);
      });
    }
  };
  previousButton = () => {
    if (this.state.currentID === 0) {
      this.setState({ currentID: n - 1 }, () => {
        this.props.updateColorGradient(this.state.currentID);
      });
    } else {
      let newID = this.state.currentID - 1;
      this.setState({ currentID: newID }, () => {
        this.props.updateColorGradient(this.state.currentID);
      });
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
