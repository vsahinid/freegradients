import React from "react";
import CSSCode from "./CSSCode";

const GetCSSModal = () => {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <span data-toggle="modal" data-target="#exampleModal">
        {" "}
        <i
          data-toggle="tooltip"
          data-placement="bottom"
          title="Get CSS"
          className="fa fa-css3"
          style={{ fontSize: "20px" }}
        />
      </span>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="exampleModalLabel"
                style={{ margin: "0 auto" }}
              >
                Copy CSS Code
              </h5>
            </div>
            <div className="modal-body" style={{ color: "black" }}>
              <CSSCode />
            </div>
            <div className="modal-footer" style={{ margin: "0 auto" }}>
              <button type="button" className="btn btn-primary">
                Click to Copy CSS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCSSModal;
