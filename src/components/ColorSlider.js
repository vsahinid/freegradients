import React from "react";

const ColorSlider = props => {
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
        height: "90vh",
        background: colorString
      }}
    >
      <h4 className="p-3" style={{ color: "white" }}>
        {props.title}
      </h4>
    </div>
  );
};

export default ColorSlider;
