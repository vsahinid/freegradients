import React, { Component } from "react";
import { GradientContext } from "../../context";
import ReactTooltip from "react-tooltip";

class Favorite extends Component {
  static contextType = GradientContext;

  render() {
    const gradient = this.context;
    return (
      <div
        onClick={gradient.addToFavorites}
        data-tip={`Add to Favorites`}
        data-for="addtofavs"
      >
        <ReactTooltip place="bottom" id="addtofavs" />
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
