import React from "react";
import "./Arrows.css";

const Arrows = () => {
  return (
    <div style={{ display: "flex" }}>
      <button className="btn btn-primary leftButton btn-lg">{"<"}</button>
      <button className="btn btn-primary rightButton btn-lg">{">"}</button>
    </div>
  );
};

export default Arrows;
