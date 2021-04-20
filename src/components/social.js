import React from "react";
import fbhome from "../images/fbpage.jpg";
import instahome from "../images/instahome.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <div class="columns">
      <div class="column">
        <div class="card pb-2">
          <header class="card-header">
            <p class="card-header-title is-size-7">Golden Hill CC on Twitter</p>
          </header>
          <a
            class="twitter-timeline"
            data-width="100%"
            data-height="900"
            href="https://twitter.com/GoldenHillCC?ref_src=twsrc%5Etfw"
          >
            Tweets by GoldenHillCC
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>

        <div class="card">
          <header class="card-header">
            <p class="card-header-title is-size-7">
              Golden Hill CC on Facebook
            </p>
          </header>
          <figure class="image">
            <img src={fbhome} alt="Facebook Page" />
          </figure>
          <div class="buttons pt-2 pl-2 pr-2 pb-5">
            <a
              className="button is-primary is-fullwidth"
              href="https://www.facebook.com/GoldenHillCC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="icon">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </span>
              <span>
                <strong>Facebook</strong>
              </span>
            </a>
          </div>
        </div>

        <div class="card">
          <header class="card-header">
            <p class="card-header-title is-size-7">
              Golden Hill CC on Instagram
            </p>
          </header>
          <figure class="image">
            <img src={instahome} alt="Instagram Page" />
          </figure>
          <div class="buttons pt-2 pl-2 pr-2 pb-5">
            <a
              className="button is-primary  is-fullwidth"
              href="https://www.instagram.com/golden_hill_cc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="icon">
                <FontAwesomeIcon icon={faInstagramSquare} />
              </span>
              <span>
                <strong>Instagram</strong>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
