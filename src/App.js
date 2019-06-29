import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ColorPanel from "./components/ColorPanel";

class App extends Component {
  state = {
    orientation1: "top",
    orientation2: "right",
    color1: "#430089",
    color2: "#82ffa1",
    title: "Capricious",
    definition:
      "Adjective. Subject to, led by, or indicative of a sudden, odd notion or unpredictable change; erratic."
  };
  render() {
    return (
      <div className="App">
        <Navbar
          orientation1={this.state.orientation1}
          orientation2={this.state.orientation2}
          color1={this.state.color1}
          color2={this.state.color2}
          title={this.state.title}
        />
        <ColorPanel
          orientation1={this.state.orientation1}
          orientation2={this.state.orientation2}
          color1={this.state.color1}
          color2={this.state.color2}
          title={this.state.title}
          definition={this.state.definition}
        />
      </div>
    );
  }
}

export default App;
