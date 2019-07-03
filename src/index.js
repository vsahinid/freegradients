import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GradientProvider } from "./context";

ReactDOM.render(
  <GradientProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GradientProvider>,
  document.getElementById("root")
);
