import React from "react";
import ColorSlider from "./ColorSlider";

const ColorPanel = props => {
  return (
    <div>
      <ColorSlider
        id={props.id}
        orientation1={props.orientation1}
        orientation2={props.orientation2}
        color1={props.color1}
        color2={props.color2}
        name={props.name}
        definition={props.definition}
        updateColorGradient={props.id}
        hello={props.hello}
      />
    </div>
  );
};

export default ColorPanel;
