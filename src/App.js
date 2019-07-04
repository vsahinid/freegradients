import React, { Component } from "react";
import "./App.css";
import ColorPanel from "./components/ColorPanel/ColorPanel";
import Navbar from "./components/Navbar/Navbar";
import { GradientContext } from "../src/context";

class App extends Component {
  static contextType = GradientContext;
  state = {
    right: false,
    left: false
  };
  onKeyPressed = event => {
    if (event.key === "ArrowRight") {
      this.setState({ right: true, left: false });
    }
    if (event.key === "ArrowLeft") {
      this.setState({ right: false, left: true });
    }
  };

  render() {
    return (
      <div className="App" onKeyDown={this.onKeyPressed} tabIndex="0">
        <Navbar />
        <ColorPanel />
      </div>
    );
  }
}

export default App;
