import React from "react";
import { Link } from "react-router-dom";
import SocialShareIcons from "./SocialShareIcons/SocialShareIcons";
import "./Navbar.css";
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
      <Link to="/" className="navbar-brand" style={{ fontFamily: "Lobster" }}>
        <h2>Free Gradients</h2>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active m-3 text-warning">
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
              changeOrientation1={props.changeOrientation1}
              changeOrientation2={props.changeOrientation2}
            />
          </li>
        </ul>
        <div className="my-2 my-lg-0">
          <SocialShareIcons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
