import React, { Component } from "react";
import { COLORS } from "./MyColors";
import "./App.css";
import ColorPanel from "./components/ColorPanel/ColorPanel";
import Navbar from "./components/Navbar/Navbar";
import { GradientContext } from "./context";

class App extends Component {
  static contextType = GradientContext;
  constructor(props) {
    super(props);
    const n = COLORS.length;
    let pickedID = Math.floor(Math.random() * n + 1) - 1;
    let myColor = COLORS[pickedID];
    this.state = {
      id: myColor.id,
      definition: myColor.definition,
      name: myColor.name,
      color1: myColor.color1,
      color2: myColor.color2,
      orientation1: myColor.orientation1,
      orientation2: myColor.orientation2
    };
  }

  updateColorGradient = new_id => {
    let myColor = COLORS[new_id];
    this.setState({
      id: myColor.id,
      name: myColor.name,
      definition: myColor.definition,
      color1: myColor.color1,
      color2: myColor.color2,
      orientation1: myColor.orientation1,
      orientation2: myColor.orientation2
    });
  };

  render() {
    const gradient = this.context;
    console.log(gradient);
    return (
      <div className="App">
        <Navbar
          orientation1={gradient.orientation1}
          orientation2={gradient.orientation2}
          color1={gradient.color1}
          color2={gradient.color2}
          name={gradient.name}
        />
        <ColorPanel
          id={gradient.id}
          name={gradient.name}
          orientation1={gradient.orientation1}
          orientation2={gradient.orientation2}
          color1={gradient.color1}
          color2={gradient.color2}
          definition={gradient.definition}
          updateColorGradient={this.updateColorGradient}
        />
      </div>
    );
  }
}

export default App;
