import React from "react";
import "./Arrows.css";

const Arrows = () => {
  return (
    <div style={{ display: "flex" }}>
      <button className="btn btn-secondary leftButton btn-lg">
        <b>{"<"}</b>
      </button>
      <button className="btn btn-secondary rightButton btn-lg">
        <b>{">"}</b>
      </button>
    </div>
  );
};

export default Arrows;
