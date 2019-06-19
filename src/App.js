import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ColorUtilityBar from "./components/ColorUtilityBar";
import ColorPanel from "./components/ColorPanel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ColorUtilityBar />
      <ColorPanel />
    </div>
  );
}

export default App;
