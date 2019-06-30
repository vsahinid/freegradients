import React from "react";
import { Link } from "react-router-dom";
import SocialShareIcons from "./SocialShareIcons/SocialShareIcons";
import "./Navbar.css";
import ViewAllMenu from "./AllMenu/ViewAllMenu";
import GetCSSModal from "./GetCSS/GetCSSModal";
import Rotate from "./Rotate/Rotate";

const Navbar = props => {
  const style = {
    border: "1px solid rgba(0, 0, 0, 0.125"
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light navbar-static-top"
      style={style}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <Link to="/" className="navbar-brand" style={{ fontFamily: "Lobster" }}>
        <h2>Free Gradients</h2>
      </Link>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="m-3">
          <i
            className="fa fa-bars"
            data-toggle="tooltip"
            data-placement="bottom"
            title="View All Gradients"
            style={{ fontSize: "20px" }}
          />
        </li>

        <li className="m-3 text-warning">
          {" "}
          <i
            className="fa fa-star"
            data-toggle="tooltip"
            data-placement="bottom"
            title="View Favorites"
            style={{ fontSize: "20px" }}
          />
        </li>
        <li className="m-3 text-primary">
          <GetCSSModal
            orientation1={props.orientation1}
            orientation2={props.orientation2}
            color1={props.color1}
            color2={props.color2}
            name={props.name}
          />
        </li>
        <li className="m-3 text-dark">
          <Rotate
            orientation1={props.orientation1}
            orientation2={props.orientation2}
          />
        </li>
      </ul>
      <SocialShareIcons />
    </nav>
  );
};

export default Navbar;
