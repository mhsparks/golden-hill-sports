import React from "react";
import Layout from "../components/layout";

import sonicsteam2 from "../images/sonics-2.jpg";

const FootballPage = () => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Golden Hill Sonics</h1>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="card">
            <div class="card-image">
              <figure class="image is-5by3">
                <img src={sonicsteam2} alt="Golden Hill Sonics" />
              </figure>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <p>
                <strong>Golden Hill Sonics</strong> is a parent run football
                club, which welcomes boys and girls in school years 2 to 11. The
                club holds the FA Charter Standard Club accreditation.
                <br />
                <br />
                U7’s to U11’s meet between at varying times 9:30am and midday on
                Saturdays during the school term at the Golden Hill Sports
                Ground just off Kellaway Ave, Golden Hill, Bristol.
                <br />
                <br />
                U11’s to U16’s all play in local competitive leagues either on
                Saturday or Sunday mornings.
                <br />
                <br />
                We are part of Golden Hill Sports Ltd, a registered charity and
                are duly affiliated to the Gloucestershire Football Association.
                <br />
                <br />
                During the Saturday morning session, we organise football
                training, exercises and mini-games for the children. We also
                play regular matches against other local clubs and usually
                participate in at least one end of season tournament.
                <br />
                <br />
                Our aim is to have fun. We want all the children to enjoy the
                football training, exercises and matches in a supportive
                environment as developed by the coach and helpers. We hope that
                all the children will improve their footballing ability and
                sportsmanship, and progress to enjoy the game in the future.
                <br />
                <br />
                For more information on Golden Hill Sonics Football Club, please
                visit our website:
                <span>
                  <a
                    href="http://www.goldenhillsonics.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="has-text-primary has-text-weight-bold">
                      www.goldenhillsonics.co.uk
                    </span>
                  </a>
                </span>
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FootballPage;
