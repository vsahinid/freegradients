import React from "react";

const ColorSlider = props => {
  return (
    <div
      className="container-flex"
      style={{
        width: "100%",
        height: "90vh",
        background: "linear-gradient(to right bottom, #430089, #82ffa1)"
      }}
    >
      <h4 className="p-3" style={{ color: "white" }}>
        {props.title}
      </h4>
    </div>
  );
};

export default ColorSlider;
