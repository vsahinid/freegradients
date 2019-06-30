import React, { Component } from "react";
import Arrows from "./Arrows";

class ColorSlider extends Component {
  state = {
    favorite: false,
    name: ""
  };

  setCookie = (cname, cvalue) => {
    document.cookie = cname + "=" + cvalue + ";";
  };

  deleteCookie = cname => {
    document.cookie = cname + "=" + "" + ";";
  };

  getCookie = cname => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  checkCookie = cname => {
    var cname = this.getCookie(cname);
    if (cname !== "") {
      return true;
    } else {
      return false;
    }
  };

  addToFavorites = () => {
    const cookieName = this.props.name;
    // if gradient is favorite, removed it from string and unstar
    if (this.state.favorite) {
      this.deleteCookie(cookieName);
      this.setState({ favorite: false });
    }

    // if gradient is not already part of cookie string, add it from string and star it

    if (!this.state.favorite) {
      this.setCookie(cookieName, true);
      this.setState({ favorite: true });
    }
  };

  componentDidMount() {
    const cookieName = this.props.name;
    if (this.checkCookie(cookieName)) {
      this.setState({ favorite: true });
    }
    if (!this.checkCookie(cookieName)) {
      this.setState({ favorite: false });
    }
  }

  render() {
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
          <span className="mr-5">
            <i
              className="fa fa-info-circle"
              data-toggle="tooltip"
              data-placement="left"
              title={this.props.definition}
            />
          </span>
          {this.props.name}
          <span className="ml-5" onClick={this.addToFavorites}>
            {this.state.favorite ? (
              <i className="fa fa-star text-warning" />
            ) : (
              <i className="fa fa-star-o" />
            )}
          </span>
        </h4>
        <Arrows />
      </div>
    );
  }
}

export default ColorSlider;
