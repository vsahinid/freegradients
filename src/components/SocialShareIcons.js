import React from "react";
import { SITE_URL } from "../Constants";
import "./SocialShareIcons.css";

const SocialShareIcons = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item m-1">
          <a
            className="btnz share facebook btn"
            href={`https://www.facebook.com/sharer/sharer.php?u=${SITE_URL}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Share on <i className="fa fa-facebook" />
          </a>
        </li>
        <li className="nav-item m-1">
          <a
            className="btnz share instagram btn"
            href={`https://www.facebook.com/sharer/sharer.php?u=${SITE_URL}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Share on <i className="fa fa-instagram" />
          </a>
        </li>
        <li className="nav-item m-1">
          {" "}
          <a
            className="btnz share twitter btn"
            href={`https://www.facebook.com/sharer/sharer.php?u=${SITE_URL}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Share on <i className="fa fa-twitter" />
          </a>
        </li>
        <li className="nav-item m-1">
          <a
            className="btnz share mail btn"
            href={`https://www.facebook.com/sharer/sharer.php?u=${SITE_URL}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Share via <i className="fa fa-envelope" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialShareIcons;
