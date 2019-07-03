import React from "react";
import ReactTooltip from "react-tooltip";

const InfoCircle = props => {
  return (
    <React.Fragment>
      <p data-tip={props.definition}>
        {" "}
        <i className="fa fa-info-circle" />
      </p>
      <ReactTooltip place="top" />
    </React.Fragment>
  );
};

export default InfoCircle;
