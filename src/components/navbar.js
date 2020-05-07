import React from "react";
import "./layout.scss";
import headerlogo from "../images/headerlogo.png";

const Navbar = () => {
  return (
    <section class="section">
      <nav
        class="navbar is-fixed-top is-mobile"
        role="navigation"
        aria-label="main navigation"
      >
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
            <a class="navbar-item has-text-primary has-text-weight-bold">
              Cricket
            </a>

            <a class="navbar-item has-text-primary has-text-weight-bold">
              Football
            </a>

            <a class="navbar-item has-text-primary has-text-weight-bold">
              Social
            </a>
            <a class="navbar-item has-text-primary has-text-weight-bold">
              Party in the Park
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary has-text-weight-bold">Contact Us</a>
                <a class="button is-primary has-text-weight-bold">Find Us</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
