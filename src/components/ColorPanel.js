import React from "react";
import ColorSlider from "./ColorSlider";

const ColorPanel = props => {
  return (
    <div>
      <ColorSlider
        orientation1={props.orientation1}
        orientation2={props.orientation2}
        color1={props.color1}
        color2={props.color2}
        title={props.title}
        definition={props.definition}
      />
    </div>
  );
};

export default ColorPanel;
