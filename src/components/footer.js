import React from "react";
import "./layout.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <div>
      <footer class="footer is-primary">
        <div class="columns">
          <div class="column">
            <div class="content has-text-centered">
              <p>
                Wimbledon Road
                <br />
                Henleaze
                <br />
                Bristol
                <br />
                BS6 7YA
              </p>
            </div>
          </div>
          <div class="column">
            <div class="buttons has-addons is-centered">
              <Link
                className="button is-primary is-inverted is-outlined"
                to="/location/"
              >
                <span class="icon">
                  <FontAwesomeIcon icon={faLocationArrow} />
                </span>
                <span>
                  <strong>Find Us</strong>
                </span>
              </Link>
            </div>
            <div class="content has-text-centered">
              <p>© {new Date().getFullYear()}, Golden Hill Sport</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
