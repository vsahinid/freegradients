import React from "react";
import "./ViewAllMenu.css";
import ColorGradientCard from "../ViewAll/ColorGradientCard";
import "./ViewAllMenu.css";
import { COLORS } from "../../../MyColors";
import ReactTooltip from "react-tooltip";

const ViewAllMenu = () => {
  return (
    <React.Fragment>
      <span data-toggle="modal" data-target="#AllGradientsModal">
        <i
          className="fa fa-bars"
          data-tip={`View All Gradients`}
          data-for="viewall"
          style={{ fontSize: "20px" }}
        />
        <ReactTooltip place="bottom" id="viewall" />
      </span>
      {/* <!-- The Modal --> */}
      <div
        className="modal fade"
        id="AllGradientsModal"
        aria-labelledby="View All Gradients Modal"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h5
                className="modal-title col-md-12 text-center"
                style={{ margin: "0 auto" }}
              >
                All Gradients
              </h5>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body modal-body-all">
              <div className="row">
                {COLORS.map((gradient, i) => (
                  <ColorGradientCard
                    name={gradient.name}
                    orientation1={gradient.orientation1}
                    orientation2={gradient.orientation2}
                    color1={gradient.color1}
                    color2={gradient.color2}
                    key={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ViewAllMenu;
