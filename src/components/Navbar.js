import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Facebook
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Instagram
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Twitter
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Email
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
