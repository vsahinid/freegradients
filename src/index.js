import React from "react";
import { hydrate, render } from "react-dom";
// import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GradientProvider } from "./context";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <GradientProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GradientProvider>,
    rootElement
  );
} else {
  render(
    <GradientProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GradientProvider>,
    rootElement
  );
}
