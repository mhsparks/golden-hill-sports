import React from "react";
import "./layout.scss";
import headerlogo from "../images/headerlogo.png";
import { Link } from "gatsby";

const SocialHeader = () => {
  return (
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src={headerlogo} />
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item">
              <Link to="/social/venue/">Venue Hire</Link>
            </div>

            <div class="navbar-item">
              <Link to="/social/events/">Events</Link>
            </div>
            <div class="navbar-item">
              <Link to="/social/gallery/">Gallery</Link>
            </div>

            <div class="navbar-item">
              <Link to="/social/pitp/">Party in the Park</Link>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <Link className="button is-primary" to="/cricket/">
                <strong>Cricket</strong>
              </Link>
              <Link className="button is-primary" to="/football/">
                <strong>Football</strong>
              </Link>
              <Link className="button is-primary" to="/social/">
                <strong>Social</strong>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SocialHeader;
