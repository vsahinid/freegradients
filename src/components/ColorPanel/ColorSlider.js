import React, { Component } from "react";
import Arrows from "./Arrows";
import setCookie from "../Cookies/setCookie";
import deleteCookie from "../Cookies/deleteCookie";
import checkCookie from "../Cookies/checkCookie";
import ViewAllMenu from "../../components/Navbar/ViewAll/ViewAllMenu";
import InfoCircle from "./InfoCircle";
import { GradientContext } from "../../context";

class ColorSlider extends Component {
  static contextType = GradientContext;
  state = {
    favorite: false,
    name: ""
  };

  addToFavorites = () => {
    const cookieName = this.props.name;
    // if gradient is favorite, removed it from string and unstar
    if (this.state.favorite) {
      deleteCookie(cookieName);
      this.setState({ favorite: false });
    }

    // if gradient is not already part of cookie string, add it from string and star it

    if (!this.state.favorite) {
      setCookie(cookieName, true);
      this.setState({ favorite: true });
    }
  };

  componentDidMount() {
    const cookieName = this.props.name;
    if (checkCookie(cookieName)) {
      this.setState({ favorite: true });
    }
    if (!checkCookie(cookieName)) {
      this.setState({ favorite: false });
    }
  }

  render() {
    const gradient = this.context;
    let colorGradient = `linear-gradient(to ${this.props.orientation1} ${
      this.props.orientation2
    }, ${this.props.color1}, ${this.props.color2})`;
    return (
      <div
        className="container-flex"
        style={{
          width: "100%",
          height: "91vh",
          background: colorGradient
        }}
      >
        <h4 className="p-3" style={{ color: "white" }}>
          <span className="m-5">
            {gradient.definition !== "" ? <InfoCircle /> : null}
          </span>
          {gradient.name}
          <span className="m-5" onClick={this.addToFavorites}>
            {this.state.favorite ? (
              <i className="fa fa-star text-warning" />
            ) : (
              <i className="fa fa-star-o" />
            )}
          </span>
          <span className="m-3">
            <ViewAllMenu />
          </span>
        </h4>
        {/* {this.props.id !== "" ? (
          <Arrows updateColorGradient={this.props.updateColorGradient} />
        ) : null} */}
      </div>
    );
  }
}

export default ColorSlider;
