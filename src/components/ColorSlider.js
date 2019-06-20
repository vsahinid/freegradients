import React from "react";
import Arrows from "./Arrows";

const ColorSlider = props => {
  if (props.orientation1 === "top" && props.orientation2 === "bottom") {
    let colorString =
      "linear-gradient(" +
      "to" +
      " right bottom," +
      props.color1 +
      ", " +
      props.color2 +
      ")";
  } else if (props.orientation1 === "left" && props.orientation2 === "bottom") {
    let colorString =
      "linear-gradient(" +
      "to" +
      " left bottom," +
      props.color1 +
      ", " +
      props.color2 +
      ")";
  } else if (
    props.orientation1 === "right" &&
    props.orientation2 === "bottom"
  ) {
    let colorString =
      "linear-gradient(" +
      "to" +
      " right bottom," +
      props.color1 +
      ", " +
      props.color2 +
      ")";
  }
  let colorString =
    "linear-gradient(" +
    "to" +
    " right bottom," +
    props.color1 +
    ", " +
    props.color2 +
    ")";
  return (
    <div
      className="container-flex"
      style={{
        width: "100%",
        height: "88vh",
        background: colorString
      }}
    >
      <h4 className="p-3" style={{ color: "white" }}>
        {props.title}
      </h4>
      <Arrows />
    </div>
  );
};

export default ColorSlider;
