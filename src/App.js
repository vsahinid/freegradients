import React, { Component } from "react";
import { COLORS } from "../src/Colors";
import "./App.css";
import ColorPanel from "./components/ColorPanel/ColorPanel";
import Navbar from "./components/Navbar/Navbar";

const myColor = COLORS[0];

class App extends Component {
  state = {
    name: myColor.name,
    color1: myColor.color1,
    color2: myColor.color2,
    orientation1: myColor.orientation1,
    orientation2: myColor.orientation2,
    definition: myColor.definition
  };

  render() {
    return (
      <div className="App">
        {/* <Navbar
          orientation1={this.state.orientation1}
          orientation2={this.state.orientation2}
          color1={this.state.color1}
          color2={this.state.color2}
          name={this.state.name}
        /> */}
        <ColorPanel
          orientation1={this.state.orientation1}
          orientation2={this.state.orientation2}
          color1={this.state.color1}
          color2={this.state.color2}
          name={this.state.name}
          definition={this.state.definition}
          id={this.state.id}
        />
      </div>
    );
  }
}

export default App;
