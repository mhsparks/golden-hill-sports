import React from "react";
import Layout from "../../components/layout";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tonyH from "../../images/tonyH.jpg";

const PoliciesPage = ({ data }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Club Policies</h1>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="card">
            <div class="card-content">
              <p>
                <p class="has-text-primary has-text-weight-bold">
                  Safeguarding and the "Safe Hands" programme
                </p>{" "}
                <br />
                The{" "}
                <a
                  className="has-text-weight-bold"
                  href="https://www.ecb.co.uk/safeguarding/policy-and-procedures"
                  targe="_blank"
                  rel="noreferrer noopener"
                >
                  ECB’s ‘Safe Hands’
                </a>{" "}
                programme has developed and evolved over the last 13 years, but
                the overall aim remains the same. We want everyone involved in
                our recreational game to make children’s safety and well-being a
                major priority. The ECB also incorporates the ‘Safe Hands’
                programme into our club accreditation programme{" "}
                <a
                  className="has-text-weight-bold"
                  href="https://www.ecb.co.uk/be-involved/club-support/clubmark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ‘ECB Clubmark’
                </a>
                , giving clubs and leagues clear guidance on how best to welcome
                young people into the sport and to keep them involved; Golden
                Hill CC has adopted this guidance and puts it into practice.
              </p>
            </div>

            <div class="columns">
              <div class="column">
                <nav class="panel is-primary">
                  <p class="card-content has-text-primary has-text-weight-bold">
                    Club Policies
                  </p>
                  <a
                    class="panel-block"
                    href="http://www.goldenhillsports.com/wp-content/uploads/2018/07/YMCA-Safeguarding-policy-2018.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="panel-icon">
                      <FontAwesomeIcon icon={faBook} aria-hidden="true" />
                    </span>
                    Our individual club safeguarding policy statement
                  </a>
                  <a
                    class="panel-block"
                    href="http://www.goldenhillsports.com/wp-content/uploads/2018/07/YMCA-CC-Guidelines-on-Changing-Rooms-and-Showering-2018.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="panel-icon">
                      <FontAwesomeIcon icon={faBook} aria-hidden="true" />
                    </span>
                    Guidance on changing rooms and showering facilities
                  </a>
                  <a
                    class="panel-block"
                    href="http://www.goldenhillsports.com/wp-content/uploads/2019/05/YMCA-CC-Photography-Filming-and-Social-media-broadcast-Guidelines-May19.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="panel-icon">
                      <FontAwesomeIcon icon={faBook} aria-hidden="true" />
                    </span>
                    Photography, filming and social media broadcast guidelines
                  </a>
                  <a
                    class="panel-block"
                    href="http://www.goldenhillsports.com/wp-content/uploads/2018/07/YMC-CC-Guidelines-on-transport-to-and-from-matches-and-training-2018.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="panel-icon">
                      <FontAwesomeIcon icon={faBook} aria-hidden="true" />
                    </span>
                    Guidance on transport to and from matches/training
                  </a>
                  <a class="panel-block">
                    <span class="panel-icon">
                      <FontAwesomeIcon icon={faBook} aria-hidden="true" />
                    </span>
                    Guidance on managing children away from the club
                  </a>
                  <a class="panel-block">
                    <span class="panel-icon">
                      <FontAwesomeIcon icon={faBook} aria-hidden="true" />
                    </span>
                    Guidance for clubs on sun safety
                  </a>
                  <a class="panel-block">
                    <span class="panel-icon">
                      <FontAwesomeIcon icon={faBook} aria-hidden="true" />
                    </span>
                    Welcoming and safeguarding children with a disability
                  </a>
                  <a class="panel-block">
                    <span class="panel-icon">
                      <FontAwesomeIcon icon={faBook} aria-hidden="true" />
                    </span>
                    Guidance for clubs on the use of social media, texts and
                    email
                  </a>
                  <a class="panel-block">
                    <span class="panel-icon">
                      <FontAwesomeIcon icon={faBook} aria-hidden="true" />
                    </span>
                    Missing children guidelines
                  </a>
                  <a class="panel-block">
                    <span class="panel-icon">
                      <FontAwesomeIcon icon={faBook} aria-hidden="true" />
                    </span>
                    Guidance for clubs on the use of social media, texts and
                    email
                  </a>
                  <a class="panel-block">
                    <span class="panel-icon">
                      <FontAwesomeIcon icon={faBook} aria-hidden="true" />
                    </span>
                    Anti bullying policy
                  </a>
                </nav>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <p class="card-content">
                  <p class="has-text-primary has-text-weight-bold">
                    Our Club Welfare Officer is Tony Huszlicska.
                  </p>
                  <br />
                  You can contact him:
                  <br /> by Phone:{" "}
                  <span class="has-text-primary">07719 323 532 </span>
                  <br />
                  or Email:{" "}
                  <a href="mailto:anthony383@btinternet.com">Tony Huszlicska</a>
                </p>
              </div>
              <div class="column">
                <figure class="card-image is-120x150">
                  <img src={tonyH} />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PoliciesPage;
