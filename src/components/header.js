import React from "react";
import "./layout.scss";
import headerlogo from "../images/headerlogo.png";
import { Link } from "gatsby";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [navBarOpen, setNavBarOpen] = React.useState(false);
  return (
    <section>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <figure class="image is-48x48">
                <img src={headerlogo} alt="GHS Logo" />
              </figure>
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
              <span
                style={{ color: "#2c7814", paddingTop: "2px" }}
                aria-hidden="true"
              ></span>
              <span
                style={{ color: "#2c7814", paddingTop: "2px" }}
                aria-hidden="true"
              ></span>
              <span
                style={{ color: "#2c7814", paddingTop: "2px" }}
                aria-hidden="true"
              ></span>
            </a>
          </div>

          <div
            id="navbarBasicExample"
            class={navBarOpen ? "navbar-menu is-active" : "navbar-menu"}
          >
            <div class="navbar-start">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link has-text-primary has-text-weight-bold">
                  Cricket
                </a>

                <div class="navbar-dropdown">
                  <Link className="navbar-item" to="/cricket/">
                    Overview
                  </Link>
                  <Link className="navbar-item" to="/cricket/senior/">
                    Senior Men
                  </Link>
                  <Link className="navbar-item" to="/cricket/women/">
                    Women
                  </Link>
                  <Link className="navbar-item" to="/cricket/junior/">
                    Boys Youth
                  </Link>
                  <Link className="navbar-item" to="/cricket/girls/">
                    Girls Youth
                  </Link>
                  <Link className="navbar-item" to="/cricket/coaching/">
                    Coaching Links
                  </Link>
                  <Link className="navbar-item" to="/cricket/policies/">
                    Club Policies
                  </Link>
                  <Link className="navbar-item" to="/cricket/statistics/">
                    Statistics
                  </Link>
                  <Link className="navbar-item" to="/cricket/honours/">
                    Club Honours
                  </Link>
                  <Link className="navbar-item" to="/cricket/history/">
                    Club History
                  </Link>
                  <Link className="navbar-item" to="/cricket/sponsors/">
                    Sponsors
                  </Link>
                  <a
                    href="https://www.tnfcricket.co.uk/golden-hill"
                    className="navbar-item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Club Shop
                  </a>
                </div>
              </div>
              <Link
                className="navbar-item has-text-primary has-text-weight-bold"
                to="/football/"
              >
                Football
              </Link>
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link has-text-primary has-text-weight-bold">
                  Social
                </a>

                <div class="navbar-dropdown">
                  <Link className="navbar-item" to="/social/">
                    Overview
                  </Link>
                  <Link className="navbar-item" to="/social/venue/">
                    Venue Hire
                  </Link>

                  <Link className="navbar-item" to="/social/gallery/">
                    Gallery
                  </Link>
                  <Link className="navbar-item" to="/social/events/">
                    Upcoming Events
                  </Link>
                  <Link className="navbar-item" to="/social/contact/">
                    Contact Form
                  </Link>
                </div>
              </div>
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link has-text-primary has-text-weight-bold">
                  Party in the Park
                </a>

                <div class="navbar-dropdown">
                  <Link className="navbar-item" to="/social/pitp/">
                    Overview
                  </Link>
                  <Link className="navbar-item" to="/social/pitpgallery/">
                    Gallery
                  </Link>
                  <Link className="navbar-item" to="/social/contact/">
                    Contact Form
                  </Link>
                </div>
              </div>
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
