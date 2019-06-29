import React from "react";
import { Link } from "react-router-dom";
import SocialShareIcons from "./SocialShareIcons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
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
      <SocialShareIcons />
    </nav>
  );
};

export default Navbar;
