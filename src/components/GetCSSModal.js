import React, { Component } from "react";
import CSSCode from "./CSSCode";
import CopiedAlert from "./CopiedAlert";

class GetCSSModal extends Component {
  state = {
    clicked: false,
    value: "",
    copied: false
  };

  copyText = () => {
    const colorGradient = `to ${this.props.orientation1} ${
      this.props.orientation2
    }, ${this.props.color1}, ${this.props.color2})`;
    const copyString =
      `background: ${this.props.color1}; /* fallback for old browsers */ 
    ` +
      `background: -webkit-linear-gradient(${colorGradient}; /* Chrome 10-25, Safari 5.1-6 */
    ` +
      `background: linear-gradient(${colorGradient};  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`;

    this.setState({ value: copyString }, () => console.log(this.state.value));
  };
  render() {
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
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            {this.state.clicked ? <CopiedAlert /> : null}
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
                  orientation1={this.props.orientation1}
                  orientation2={this.props.orientation2}
                  color1={this.props.color1}
                  color2={this.props.color2}
                />
              </div>
              <div className="modal-footer" style={{ margin: "0 auto" }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.copyText}
                >
                  Click to Copy CSS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetCSSModal;
