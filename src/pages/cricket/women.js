import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../../components/layout";
import headerlogo from "../../images/headerlogo.png";

const WomensPage = ({ data }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Golden Hill Women's Cricket</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li class="is-active">
                <Link to="/cricket/women/">Home</Link>
              </li>
              <li>
                <Link to="/cricket/womenhonours/">Honours</Link>
              </li>
              <li>
                <Link to="/cricket/womengallery/">Gallery</Link>
              </li>
              <li>
                <Link to="/cricket/womenhistory/">History</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-small is-boxed is-hidden-desktop is-hidden-tablet">
            <ul>
              <li class="is-active">
                <Link to="/cricket/women/">Home</Link>
              </li>
              <li>
                <Link to="/cricket/womenhonours/">Honours</Link>
              </li>
              <li>
                <Link to="/cricket/womengallery/">Gallery</Link>
              </li>
              <li>
                <Link to="/cricket/womenhistory/">History</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="card">
            <div class="columns">
              <div class="column is-two-thirds">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">Women's 1st XI</p>
                  </header>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48 is-hidden-mobile">
                          <img src={headerlogo} alt="GHS Logo" />
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-6">Captain: Emma Hunter</p>
                        <p class="subtitle is-6">
                          <span>Email: </span>
                          <span>
                            <a href="mailto:emmahunter25@hotmail.co.uk">
                              emmahunter25@hotmail.co.uk
                            </a>
                          </span>
                          <br />
                          <span>Phone: </span>
                          <span>07999 522007</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <footer class="card-footer">
                    <a
                      href="https://goldenhill.play-cricket.com/Teams/150046"
                      class="card-footer-item"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fixtures & Stats
                    </a>

                    <span class="card-footer-item">
                      <Link to="/cricket/selection/">Team Selection</Link>
                    </span>
                  </footer>
                </div>
                <div class="card-content">
                  <p class="has-text-primary has-text-weight-bold is-size-4">
                    Golden Hill Women's Cricket
                  </p>
                  <br />
                  <p class="has-text-weight-bold has-text-primary">Our Team</p>
                  <p>
                    Golden Hill is a friendly and sociable women's cricket team.
                    New players of all abilities are welcome, from complete
                    beginners to seasoned veterans.
                  </p>
                  <br />
                  <p>
                    We field teams in a variety of formats: outdoor hardball and
                    occasional softball in the summer, and indoor softball in
                    the winter. Currently, we play in the Gloucestershire
                    Cricket Board's Women’s League South, and the Bristol
                    Women’s Indoor League.
                  </p>
                  <br />
                  <p>
                    Our team has ambitions to be one of the top women's sides in
                    Gloucestershire, with plenty of talent coming up through our
                    strong girls set up.
                  </p>
                  <br />
                  <p>
                    Our ethos is about fostering improvement and development
                    across women and girls' cricket to provide top quality,
                    competitive cricket in a supportive and enjoyable
                    environment.
                  </p>
                  <br />
                  <p class="has-text-primary has-text-weight-bold">Training</p>
                  <p>
                    Training includes indoor and outdoor nets, coached sessions,
                    and practice matches. The first training session is free so
                    do come along and try it out! If you would like to get
                    involved, please get in touch.
                  </p>
                  <br />
                  <p>
                    Our winter indoor training (January to March) is held at
                    Orchard School or Shine Community Sports Hall.
                  </p>
                  <br />
                  <p>
                    During the summer (April to August), we train outdoors at
                    our home ground on a Wednesday evening.
                  </p>
                  <br />
                  <p>The club has communal pads and bats available for use.</p>
                  <br />
                  <p>
                    There are also opportunities to gain coaching
                    qualifications.
                  </p>
                  <br />
                  <p class="has-text-primary has-text-weight-bold">Leagues</p>
                  <p>
                    We play hardball in the Gloucestershire Cricket Board's
                    Women’s League South. Hardball matches are usually played on
                    Sundays with some mid-week games.
                  </p>
                  <br />
                  <p>
                    During the winter, we play softball in the Bristol Women’s
                    Indoor League. Please contact the women's team captain for
                    further information.
                  </p>
                  <br />
                </div>
              </div>
              <div class="column">
                <div class="card">
                  <div class="card-image">
                    <figure class="image">
                      <Img fluid={data.women1.childImageSharp.fluid} />
                    </figure>
                  </div>
                </div>
                <div class="column"></div>

                <div class="card">
                  <figure class="card-image">
                    <Img fluid={data.women2.childImageSharp.fluid} />
                  </figure>
                </div>
                <div class="column"></div>
                <div class="card">
                  <figure class="card-image">
                    <Img fluid={data.women3.childImageSharp.fluid} />
                  </figure>
                </div>

                <div class="column"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WomensPage;

export const query = graphql`
  query {
    women1: file(relativePath: { eq: "womens-home-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    women2: file(relativePath: { eq: "womens-home-22.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    women3: file(relativePath: { eq: "women-home-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    women4: file(relativePath: { eq: "womens-home-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fieldlarge: file(relativePath: { eq: "field-large.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
