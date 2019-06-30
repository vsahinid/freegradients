import React, { Component } from "react";

class Rotate extends Component {
  state = { position: 1, orientation1: "", orientation2: "" };
  clickHandler = () => {
    if (
      this.state.orientation1 === "top" &&
      this.state.orientation2 === "right"
    ) {
      this.setState({ orientation1: "bottom" }, () => {
        this.props.changeOrientation1(this.state.orientation1);
        this.props.changeOrientation2(this.state.orientation2);
      });
    }
    if (
      this.state.orientation1 === "bottom" &&
      this.state.orientation2 === "right"
    ) {
      this.setState({ orientation2: "left" }, () => {
        this.props.changeOrientation1(this.state.orientation1);
        this.props.changeOrientation2(this.state.orientation2);
      });
    }
    if (
      this.state.orientation1 === "bottom" &&
      this.state.orientation2 === "left"
    ) {
      this.setState({ orientation1: "top" }, () => {
        this.props.changeOrientation1(this.state.orientation1);
        this.props.changeOrientation2(this.state.orientation2);
      });
    }
    if (
      this.state.orientation1 === "top" &&
      this.state.orientation2 === "left"
    ) {
      this.setState({ orientation2: "right" }, () => {
        this.props.changeOrientation1(this.state.orientation1);
        this.props.changeOrientation2(this.state.orientation2);
      });
    }
  };

  componentDidMount() {
    this.setState({
      orientation1: this.props.orientation1,
      orientation2: this.props.orientation2
    });
  }
  render() {
    return (
      <div>
        <i
          className="fa fa-refresh"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Rotate"
          style={{ fontSize: "20px" }}
          onClick={this.clickHandler}
        />
      </div>
    );
  }
}

export default Rotate;
