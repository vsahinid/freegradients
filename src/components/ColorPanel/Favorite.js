import React, { Component } from "react";
import setCookie from "../Cookies/setCookie";
import deleteCookie from "../Cookies/deleteCookie";
import checkCookie from "../Cookies/checkCookie";
import { GradientContext } from "../../context";

class Favorite extends Component {
  static contextType = GradientContext;

  render() {
    const gradient = this.context;
    return (
      <div onClick={gradient.addToFavorites}>
        {gradient.favorite ? (
          <i className="fa fa-star text-warning" />
        ) : (
          <i className="fa fa-star-o" />
        )}
      </div>
    );
  }
}

export default Favorite;
