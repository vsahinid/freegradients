import React, { Component } from "react";
import { COLORS } from "../../../MyColors";
import NoFavoriteComponents from "./NoFavoriteGradients";
import ColorGradientCard from "../ViewAll/ColorGradientCard";

class index extends Component {
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
                  {COLORS.filter(gradient =>
                    localStorage.getItem(gradient.name)
                  ).map((gradient, i) => (
                    <ColorGradientCard
                      name={gradient.name}
                      orientation1={gradient.orientation1}
                      orientation2={gradient.orientation2}
                      color1={gradient.color1}
                      color2={gradient.color2}
                      key={i}
                    />
                  )).length === 0 ? (
                    <NoFavoriteComponents />
                  ) : (
                    COLORS.filter(gradient =>
                      localStorage.getItem(gradient.name)
                    ).map((gradient, i) => (
                      <ColorGradientCard
                        name={gradient.name}
                        orientation1={gradient.orientation1}
                        orientation2={gradient.orientation2}
                        color1={gradient.color1}
                        color2={gradient.color2}
                        key={i}
                      />
                    ))
                  )}
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
