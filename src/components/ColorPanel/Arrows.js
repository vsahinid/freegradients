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
      console.log(`current id: ${this.state.currentID}`);
      this.setState({ currentID: 0 }, () => {
        this.props.hello(this.state.currentID);
      });
    } else {
      console.log(`current id: ${this.state.currentID}`);
      let newID = this.state.currentID + 1;
      this.setState({ currentID: newID }, () => {
        this.props.hello(this.state.currentID);
      });
    }
  };
  previousButton = () => {
    if (this.state.currentID === 0) {
      this.setState({ currentID: n - 1 }, console.log(this.state.currentID));
    } else {
      let newID = this.state.currentID - 1;
      this.setState({ currentID: newID }, console.log(this.state.currentID));
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
