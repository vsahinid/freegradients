import React from "react";
import ReactTooltip from "react-tooltip";

const InfoCircle = props => {
  return (
    <React.Fragment>
      <p data-tip={props.definition} data-for="infocircle">
        {" "}
        <i className="fa fa-info-circle" />
      </p>
      <ReactTooltip place="top" id="infocircle" />
    </React.Fragment>
  );
};

export default InfoCircle;
