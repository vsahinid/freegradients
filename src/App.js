import React, { Component } from "react";
import { COLORS } from "./MyColors";
import "./App.css";
import ColorPanel from "./components/ColorPanel/ColorPanel";
import Navbar from "./components/Navbar/Navbar";
const myColor = COLORS[COLORS.length - 1];

class App extends Component {
  state = {
    name: myColor.name,
    color1: myColor.color1,
    color2: myColor.color2,
    orientation1: myColor.orientation1,
    orientation2: myColor.orientation2,
    definition: myColor.definition
  };

  changeOrientation1 = new_value => {
    this.setState({ orientation1: new_value });
  };

  changeOrientation2 = new_value => {
    this.setState({ orientation2: new_value });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          orientation1={this.state.orientation1}
          orientation2={this.state.orientation2}
          color1={this.state.color1}
          color2={this.state.color2}
          name={this.state.name}
          changeOrientation1={this.changeOrientation1}
          changeOrientation2={this.changeOrientation2}
        />
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
