import React from "react";
import "./Arrows.css";

const Arrows = () => {
  return (
    <div style={{ display: "flex" }}>
      <button className="btn btn-secondary leftButton btn-lg">{"<"}</button>
      <button className="btn btn-secondary rightButton btn-lg">{">"}</button>
    </div>
  );
};

export default Arrows;
