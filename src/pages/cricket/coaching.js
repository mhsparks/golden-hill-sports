import React from "react";
import Layout from "../../components/layout";

import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CoachingPage = () => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Coaching Links</h1>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <p class="panel-heading has-background-primary has-text-white">
            The Cricket Consultant
          </p>

          <ul class="panel is-primary">
            <li class="panel-block">
              <span class="icon has-addons is-left">
                <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
              </span>
              <a
                href="https://ghs-static.storage.googleapis.com/pdf/batting.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Batting Drills
              </a>
            </li>
            <li class="panel-block">
              <span class="icon has-addons is-left">
                <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
              </span>
              <a
                href="https://ghs-static.storage.googleapis.com/pdf/bowling.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pace Bowling Drills
              </a>
            </li>
            <li class="panel-block">
              <span class="icon has-addons is-left">
                <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
              </span>
              <a
                href="https://ghs-static.storage.googleapis.com/pdf/fielding.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fielding Drills
              </a>
            </li>
            <li class="panel-block">
              <span class="icon has-addons is-left">
                <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
              </span>
              <a
                href="https://ghs-static.storage.googleapis.com/pdf/wicketkeeping.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wicketkeeping Drills
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default CoachingPage;
