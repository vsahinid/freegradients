import React, { Component } from "react";
import { COLORS } from "./MyColors";

const GradientContext = React.createContext();

class GradientProvider extends Component {
  n = COLORS.length;
  pickedID = Math.floor(Math.random() * this.n + 1) - 1;
  myColor = COLORS[this.pickedID];
  state = {
    id: this.myColor.id,
    definition: this.myColor.definition,
    name: this.myColor.name,
    color1: this.myColor.color1,
    color2: this.myColor.color2,
    orientation1: this.myColor.orientation1,
    orientation2: this.myColor.orientation2,
    position: 1
  };

  hello = () => {
    // console.log("hello from context API");
    this.setState({ ...this.state, position: 2 }, () =>
      console.log(this.state.position)
    );
  };

  changeOrientation1 = new_value => {
    this.setState({ orientation1: new_value });
  };

  changeOrientation2 = new_value => {
    this.setState({ orientation2: new_value });
  };

  rotateGradient = () => {
    console.log("hello from context API");
    if (
      this.state.orientation1 === "top" &&
      this.state.orientation2 === "right"
    ) {
      this.setState({ orientation1: "bottom" }, () => {
        this.changeOrientation1(this.state.orientation1);
        this.changeOrientation2(this.state.orientation2);
      });
    }
    if (
      this.state.orientation1 === "bottom" &&
      this.state.orientation2 === "right"
    ) {
      this.setState({ orientation2: "left" }, () => {
        this.changeOrientation1(this.state.orientation1);
        this.changeOrientation2(this.state.orientation2);
      });
    }
    if (
      this.state.orientation1 === "bottom" &&
      this.state.orientation2 === "left"
    ) {
      this.setState({ orientation1: "top" }, () => {
        this.changeOrientation1(this.state.orientation1);
        this.changeOrientation2(this.state.orientation2);
      });
    }
    if (
      this.state.orientation1 === "top" &&
      this.state.orientation2 === "left"
    ) {
      this.setState({ orientation2: "right" }, () => {
        this.changeOrientation1(this.state.orientation1);
        this.changeOrientation2(this.state.orientation2);
      });
    }
  };

  render() {
    return (
      <GradientContext.Provider
        value={{
          ...this.state,
          hello: this.hello,
          rotateGradient: this.rotateGradient
        }}
      >
        {this.props.children}
      </GradientContext.Provider>
    );
  }
}

const GradientConsumer = GradientContext.Consumer;

export { GradientProvider, GradientConsumer, GradientContext };
