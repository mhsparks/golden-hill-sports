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
            <figure class="image">
              <img src={headerlogo} alt="GHS Logo" />
            </figure>
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
            <div class="navbar-menu">
              <a class="navbar-item">Senior Teams</a>

              <a class="navbar-item">Youth Cricket</a>

              <a class="navbar-item">Women & Girls Cricket</a>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">More</a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">Club Shop</a>
                  <a class="navbar-item">Club Sponsors</a>
                  <hr class="navbar-divider" />
                  <a class="navbar-item">Club History</a>

                  <a class="navbar-item">Club Policies</a>
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

                <a class="button is-primary">
                  <strong>Football</strong>
                </a>
                <a class="button is-primary">
                  <strong>Social</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CricketHeader;
