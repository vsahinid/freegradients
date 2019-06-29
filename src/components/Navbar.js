import React from "react";
import { Link } from "react-router-dom";
import SocialShareIcons from "./SocialShareIcons";
import "./Navbar.css";
import ViewAllMenu from "./ViewAllMenu";

const Navbar = () => {
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
            class="fa fa-bars"
            data-toggle="tooltip"
            data-placement="bottom"
            title="View All Gradients"
            style={{ fontSize: "20px" }}
          />
        </li>

        <li className="m-3 text-warning">
          {" "}
          <i
            className="fa fa-download"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Download .jpg"
            style={{ fontSize: "20px" }}
          />
        </li>
        <li className="m-3 text-primary">
          <i
            className="fa fa-css3"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Get CSS"
            style={{ fontSize: "20px" }}
          />
        </li>
        <li className="m-3 text-dark">
          <i
            className="fa fa-refresh"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Rotate"
            style={{ fontSize: "20px" }}
          />
        </li>
      </ul>
      <SocialShareIcons />
    </nav>
  );
};

export default Navbar;
