import React from "react";

const NoFavoriteGradients = () => {
  return (
    <div className="container text-secondary text-center">
      <i className="fa fa-star" />
      <h5 style={{ color: "black" }}>No favorite gradients</h5>
      <p className="">
        You have not favorited any gradients yet. Use the star icon on a color
        gradient to add it to your favorites so you can easily find it here
        later.
      </p>
    </div>
  );
};

export default NoFavoriteGradients;
