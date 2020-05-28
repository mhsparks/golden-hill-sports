import React from "react";
import Layout from "../../components/layout";
import Batting from "../../pdfs/TCC_Batting_Document.pdf";
import Bowling from "../../pdfs/TCC_Bowling_Document .pdf";
import Fielding from "../../pdfs/TCC_Fielding_Document .pdf";
import Wicketkeeping from "../../pdfs/TCC_Wicketkeeping_Document.pdf";
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
              <a href={Batting}>Batting Drills</a>
            </li>
            <li class="panel-block">
              <span class="icon has-addons is-left">
                <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
              </span>
              <a href={Bowling}>Pace Bowling Drills</a>
            </li>
            <li class="panel-block">
              <span class="icon has-addons is-left">
                <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
              </span>
              <a href={Fielding}>Fielding Drills</a>
            </li>
            <li class="panel-block">
              <span class="icon has-addons is-left">
                <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
              </span>
              <a href={Wicketkeeping}>Wicketkeeping Drills</a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default CoachingPage;
