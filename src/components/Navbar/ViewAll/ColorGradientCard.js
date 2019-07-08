import React from "react";
import "./ColorGradientCard.css";

const ColorGradientCard = props => {
  let colorGradient = `linear-gradient(to ${props.orientation1} ${
    props.orientation2
  }, ${props.color1}, ${props.color2})`;
  return (
    <div className="col-md-4 mb-4">
      <div
        className="card"
        style={{ background: colorGradient, border: "none" }}
      >
        <div className="card-body">
          <h5 className="card-title mt-5 mb-5 text-white text-center">
            {props.name}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ColorGradientCard;
