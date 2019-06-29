import React from "react";
import Arrows from "./Arrows";

const ColorSlider = props => {
  let colorGradient = `linear-gradient(to ${props.orientation1} ${
    props.orientation2
  }, ${props.color1}, ${props.color2})`;
  return (
    <div
      className="container-flex"
      style={{
        width: "100%",
        height: "91vh",
        background: colorGradient
      }}
    >
      <h4 className="p-3" style={{ color: "white" }}>
        {/* {props.definition} */}
        <span className="m-3">
          <i
            className="fa fa-info-circle"
            data-toggle="tooltip"
            data-placement="left"
            title={props.definition}
          />
        </span>

        {props.title}
      </h4>
      <Arrows />
    </div>
  );
};

export default ColorSlider;
