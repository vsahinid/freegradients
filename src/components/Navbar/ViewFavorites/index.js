import React, { Component } from "react";
import { COLORS } from "../../../MyColors";
import NoFavoriteComponents from "./NoFavoriteGradients";

class index extends Component {
  state = {
    myFavorites: [],
    isEmpty: ""
  };

  componentDidMount() {
    if (this.state.myFavorites.length === 0) {
      this.setState({ isEmpty: true });
    } else {
      this.setState({ isEmpty: false });
    }
  }
  render() {
    return (
      <React.Fragment>
        <span data-toggle="modal" data-target="#FavoritesModal">
          <i
            className="fa fa-star"
            data-toggle="tooltip"
            data-placement="bottom"
            title="View Favorites"
            style={{ fontSize: "20px" }}
          />
        </span>
        {/* <!-- The Modal --> */}
        <div
          className="modal fade"
          id="FavoritesModal"
          aria-labelledby="Favorites Gradients Modal"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              {/* <!-- Modal Header --> */}
              <div className="modal-header">
                <h5
                  className="modal-title col-md-12 text-center text-secondary"
                  style={{ margin: "0 auto" }}
                >
                  My Favorite Gradients
                </h5>
              </div>

              {/* <!-- Modal body --> */}
              <div className="modal-body modal-body-all">
                <div className="row">
                  {this.state.isEmpty ? <NoFavoriteComponents /> : null}
                  {/* {COLORS.map((gradient, i) => (
                  <ColorGradientCard
                    name={gradient.name}
                    orientation1={gradient.orientation1}
                    orientation2={gradient.orientation2}
                    color1={gradient.color1}
                    color2={gradient.color2}
                    key={i}
                  />
                ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default index;
