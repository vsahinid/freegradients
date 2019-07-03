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
  render() {
    return (
      <GradientContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </GradientContext.Provider>
    );
  }
}

const GradientConsumer = GradientContext.Consumer;

export { GradientProvider, GradientConsumer, GradientContext };
