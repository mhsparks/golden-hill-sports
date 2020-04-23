import React from "react";
import "./layout.scss";
import headerlogo from "../images/headerlogo.png";
import { Link } from "gatsby";

const CricketHeader = () => {
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
              <Link to="/cricket/senior/">Senior</Link>
            </div>

            <div class="navbar-item">
              <Link to="/cricket/junior/">Youth</Link>
            </div>
            <div class="navbar-item">
              <Link to="/cricket/women/">Women & Girls</Link>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-link has-text-primary">More</div>

              <div class="navbar-dropdown">
                <div class="navbar-item">
                  <a
                    href="https://www.logo-works.co.uk/webstore/Golden-Hill-CC-c28341020/"
                    target="_blank"
                  >
                    Club Shop
                  </a>
                </div>
                <hr class="navbar-divider" />
                <div class="navbar-item">
                  <Link to="/cricket/sponsors/">Sponsors</Link>
                </div>
                <hr class="navbar-divider" />
                <div class="navbar-item">
                  <Link to="/cricket/history/">History</Link>
                </div>
                <hr class="navbar-divider" />
                <div class="navbar-item">
                  <Link to="/cricket/policies/">Club Policies</Link>
                </div>
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
        </div>
      </nav>
    </div>
  );
};

export default CricketHeader;
