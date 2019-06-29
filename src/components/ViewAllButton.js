import React from "react";
import "./ViewAllButton.css";

const ViewAllButton = () => {
  return (
    <React.Fragment>
      <button className="btn button btn-primary">
        View All Gradients
        <svg>
          <polyline className="o1" points="0 0, 150 0, 150 55, 0 55, 0 0" />
          <polyline className="o2" points="0 0, 150 0, 150 55, 0 55, 0 0" />
        </svg>
      </button>

      <div className="btn button">
        <span>View All Gradient</span>
      </div>
    </React.Fragment>
  );
};

export default ViewAllButton;
