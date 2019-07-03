import React, { Component } from "react";
import { GradientContext } from "../../context";

class Favorite extends Component {
  static contextType = GradientContext;

  render() {
    const gradient = this.context;
    return (
      <div onClick={gradient.addToFavorites}>
        {localStorage.getItem(gradient.name) ? (
          <i className="fa fa-star text-warning" />
        ) : (
          <i className="fa fa-star-o" />
        )}
      </div>
    );
  }
}

export default Favorite;
