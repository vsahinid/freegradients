import React, { Component } from "react";
import { COLORS } from "./MyColors";
import "./App.css";
import ColorPanel from "./components/ColorPanel/ColorPanel";
import Navbar from "./components/Navbar/Navbar";
// const COLORS = [
//   {
//     id: 1,
//     name: "Capricious",
//     color1: "#430089",
//     color2: "#82ffa1",
//     orientation1: "top",
//     orientation2: "left",
//     definition:
//       "Adjective. Indicative or subject to sudden or unpredictable change; erratic."
//   },
//   {
//     id: 2,
//     name: "Ostentatious",
//     color1: "#DAA520",
//     color2: "#4B0082",
//     orientation1: "top",
//     orientation2: "right",
//     definition:
//       "Adjective. Characterized by or given to pretentious or conspicuous show in an attempt to impress others."
//   },
//   {
//     id: 3,
//     name: "Conspicuous",
//     color1: "#B57B22",
//     color2: "#DA3F2B",
//     orientation1: "top",
//     orientation2: "left",
//     definition:
//       "Adjective. Easily seen or noticed; readily visible or observable."
//   }
// ];
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
        <Navbar
          orientation1={this.state.orientation1}
          orientation2={this.state.orientation2}
          color1={this.state.color1}
          color2={this.state.color2}
          name={this.state.name}
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
