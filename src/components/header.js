import React from "react";
import "./layout.scss";
import headerlogo from "../images/headerlogo.png";
import { Link } from "gatsby";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <section class="section" style={{ paddingBottom: "1rem" }}>
      <nav
        class="navbar is-fixed-top 
        "
        role="navigation"
        aria-label="main-navigation"
      >
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item is-hidden-mobile" href="/">
              <figure class="image is-48x48">
                <img src={headerlogo} alt="GHS Logo" />
              </figure>
            </a>
            <a class="navbar-item is-hidden-desktop is-hidden-tablet " href="/">
              <figure class="image is-24x24">
                <img src={headerlogo} alt="GHS Logo" />
              </figure>
            </a>
            <Link
              className="navbar-item is-hidden-desktop is-hidden-tablet is-size-7 has-text-primary has-text-weight-bold"
              to="/cricket/"
            >
              Cricket
            </Link>
            <Link
              className="navbar-item is-hidden-desktop is-hidden-tablet is-size-7 has-text-primary has-text-weight-bold"
              to="/football/"
            >
              Football
            </Link>
            <Link
              className="navbar-item is-hidden-desktop is-hidden-tablet is-size-7 has-text-primary has-text-weight-bold"
              to="/social/"
            >
              Social
            </Link>
            <Link
              className="navbar-item is-hidden-desktop is-hidden-tablet is-size-7 has-text-primary has-text-weight-bold"
              to="/social/pitp/"
            >
              PITP
            </Link>
            <Link
              className="navbar-item is-hidden-desktop is-hidden-tablet is-size-7 has-text-primary has-text-weight-bold"
              to="/social/contact/"
            >
              Contact
            </Link>
          </div>

          <div class="navbar-menu">
            <div class="navbar-start">
              <Link
                className="navbar-item has-text-primary has-text-weight-bold"
                to="/cricket/"
              >
                Cricket
              </Link>
              <Link
                className="navbar-item has-text-primary has-text-weight-bold"
                to="/football/"
              >
                Football
              </Link>
              <Link
                className="navbar-item has-text-primary has-text-weight-bold"
                to="/social/"
              >
                Social
              </Link>
              <Link
                className="navbar-item has-text-primary has-text-weight-bold"
                to="/social/pitp/"
              >
                Party in the Park
              </Link>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <Link
                    className="button is-primary is-size-6-desktop is-size-7-mobile"
                    to="/social/contact/"
                  >
                    <span class="icon is-small is-left">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <strong>Contact Us</strong>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
