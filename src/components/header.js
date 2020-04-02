import React from "react";
import "./layout.scss";
import headerlogo from "../images/headerlogo.png";

const Header = () => {
  return (
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <figure class="image">
              <img src={headerlogo} />
            </figure>
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="http://www.goldenhillsports.com">
              <h1 class="nav-link has-text-primary">
                Golden Hill Sports and Social Club
              </h1>
            </a>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Cricket</strong>
              </a>
              <a class="button is-primary">
                <strong>Football</strong>
              </a>
              <a class="button is-primary">
                <strong>Social</strong>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
