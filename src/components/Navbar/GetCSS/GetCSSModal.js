import React, { Component } from "react";
import CSSCode from "./CSSCode";
import CopiedAlert from "./CopiedAlert";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { GradientContext } from "../../../context";
import ReactTooltip from "react-tooltip";

class GetCSSModal extends Component {
  static contextType = GradientContext;
  state = {
    clicked: false,
    value: "",
    copied: false
  };

  clickHandler = () => {
    this.setState({ clicked: true });
  };
  render() {
    const gradient = this.context;
    return (
      <div>
        {/* <!-- Button trigger modal --> */}
        <span data-toggle="modal" data-target="#exampleModal">
          {" "}
          <i
            className="fab fa-css3-alt"
            data-tip={`Get CSS`}
            data-for="getcss"
            style={{ fontSize: "20px" }}
          />
          <ReactTooltip place="bottom" id="getcss" />
        </span>

        {/* <!-- Modal --> */}

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="Get CSS Code Modal"
        >
          <div className="modal-dialog" role="document">
            <div
              style={
                this.state.clicked
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
            >
              <CopiedAlert />
            </div>
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
                <CSSCode
                  orientation1={gradient.orientation1}
                  orientation2={gradient.orientation2}
                  color1={gradient.color1}
                  color2={gradient.color2}
                />
              </div>
              <div className="modal-footer" style={{ margin: "0 auto" }}>
                <CopyToClipboard text={this.state.value}>
                  <button
                    type="button"
                    className="btn btn-primary copyButton"
                    onClick={this.clickHandler}
                  >
                    Click to Copy CSS
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetCSSModal;
