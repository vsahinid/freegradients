import React, { Component } from "react";
import "./Arrows.css";
import { GradientContext } from "../../context";
// let n = COLORS.length;
let n = 10;

class Arrows extends Component {
  static contextType = GradientContext;
  state = {
    currentID: this.props.id
  };
  nextButton = _id => {
    if (_id === n - 1) {
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
    const gradient = this.context;
    const _id = gradient.id;
    return (
      <div style={{ display: "flex" }}>
        <button
          className="btn btn-secondary leftButton btn-lg"
          onClick={this.previousButton(_id)}
        >
          <b>{"<"}</b>
        </button>
        <button
          className="btn btn-secondary rightButton btn-lg"
          onClick={this.nextButton(_id)}
        >
          <b>{">"}</b>
        </button>
      </div>
    );
  }
}

export default Arrows;
