import React from "react";
import "./layout.scss";
import headerlogo from "../images/headerlogo.png";
import { Link } from "gatsby";

const SocialHeader = () => {
  const [navBarOpen, setNavBarOpen] = React.useState(false);
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src={headerlogo} />
          </a>

          <a
            role="button"
            class={
              navBarOpen
                ? "navbar-burger burger is-active"
                : "navbar-burger burger"
            }
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setNavBarOpen(!navBarOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          class={navBarOpen ? "navbar-menu is-active" : "navbar-menu"}
        >
          <div class="navbar-start">
            <div class="navbar-item">
              <Link to="/social/venue/">Venue Hire</Link>
            </div>

            <div class="navbar-item">
              <Link to="/social/events/">Upcoming Events</Link>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <Link
                className="button is-primary is-primary is-size-6-desktop is-size-7-mobile"
                to="/cricket/"
              >
                <strong>Cricket</strong>
              </Link>
              <Link
                className="button is-primary is-primary is-size-6-desktop is-size-7-mobile"
                to="/football/"
              >
                <strong>Football</strong>
              </Link>
              <Link
                className="button is-primary is-primary is-size-6-desktop is-size-7-mobile"
                to="/social/"
              >
                <strong>Social</strong>
              </Link>
              <Link
                className="button is-primary is-size-6-desktop is-size-7-mobile"
                to="/social/pitp"
              >
                <strong>Party in the Park</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SocialHeader;
