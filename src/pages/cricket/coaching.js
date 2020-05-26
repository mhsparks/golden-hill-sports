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
          <nav class="panel is-primary">
            <p class="panel-heading">Coaching Links</p>

            <a class="panel-block">
              <span class="icon">
                <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
              </span>
              <a href={Batting} class="has-background-information">
                {" "}
                The Cricket Consultant: Batting Drills
              </a>
            </a>
            <a class="panel-block">
              <span class="icon">
                <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
              </span>
              <a href={Bowling}> The Cricket Consultant: Pace Bowling Drills</a>
            </a>
            <a class="panel-block">
              <span class="icon">
                <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
              </span>
              <a href={Fielding}> The Cricket Consultant: Fielding Drills</a>
            </a>
            <a class="panel-block">
              <span class="icon">
                <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" />
              </span>
              <a href={Wicketkeeping}>
                {" "}
                The Cricket Consultant: Wicketkeeping Drills
              </a>
            </a>
          </nav>
        </div>
      </section>
    </Layout>
  );
};

export default CoachingPage;
