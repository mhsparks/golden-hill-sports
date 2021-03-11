import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../../components/layout";
import headerlogo from "../../images/headerlogo.png";

const SeniorPage = ({ data }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Golden Hill Senior Men</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li class="is-active">
                <Link to="/cricket/senior/">Home</Link>
              </li>
              <li>
                <Link to="/cricket/seniorhonours/">Honours</Link>
              </li>
              <li>
                <Link to="/cricket/seniorgallery/">Gallery</Link>
              </li>
              <li>
                <Link to="/cricket/seniorhistory/">History</Link>
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
                <Link to="/cricket/senior/">Home</Link>
              </li>
              <li>
                <Link to="/cricket/seniorhonours/">Honours</Link>
              </li>
              <li>
                <Link to="/cricket/seniorgallery/">Gallery</Link>
              </li>
              <li>
                <Link to="/cricket/seniorhistory/">History</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <Img
                  fluid={data.cricket1.childImageSharp.fluid}
                  alt="Placeholder"
                />
              </figure>
            </div>

            <div class="columns">
              <div class="column">
                <div class="column"></div>
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">1st XI</p>
                  </header>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48 is-hidden-mobile">
                          <img src={headerlogo} alt="GHS Logo" />
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-6">Captain: Harry Thomas</p>
                        <p class="subtitle is-6">
                          <span>Email: </span>
                          <span>
                            <a href="mailto:thomashsktc@gmail.com">
                              thomashsktc@gmail.com
                            </a>
                          </span>
                          <br />
                          <span>Phone: </span>
                          <span>07719 467105</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <footer class="card-footer">
                    <a
                      href="https://goldenhill.play-cricket.com/Teams/14724"
                      class="card-footer-item"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fixtures & Statistics
                    </a>
                    <span class="card-footer-item">
                      <Link to="/cricket/selection/">Team Selection</Link>
                    </span>
                  </footer>
                </div>

                <div class="column"></div>
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">2nd XI</p>
                  </header>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48 is-hidden-mobile">
                          <img src={headerlogo} alt="GHS Logo" />
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-6">Captain: Razi Ahmed</p>
                        <p class="subtitle is-6">
                          <span>Email: </span>
                          <span>
                            <a href="mailto:raziahmed01@hotmail.com">
                              raziahmed01@hotmail.com
                            </a>
                          </span>
                          <br />
                          <span>Phone: </span>
                          <span>07968 068576</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <footer class="card-footer">
                    <a
                      href="https://goldenhill.play-cricket.com/Teams/14725"
                      class="card-footer-item"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fixtures & Statistics
                    </a>

                    <span class="card-footer-item">
                      <Link to="/cricket/selection/">Team Selection</Link>
                    </span>
                  </footer>
                </div>
                <div class="column"></div>
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">3rd XI</p>
                  </header>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48 is-hidden-mobile">
                          <img src={headerlogo} alt="GHS Logo" />
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-6">Captain: Callum Middleton</p>
                        <p class="subtitle is-6">
                          <span>Email: </span>
                          <span>
                            <a href="mailto:callummiddleton9@hotmail.co.uk">
                              callummiddleton9@hotmail.co.uk
                            </a>
                          </span>
                          <br />
                          <span>Phone: </span>
                          <span>07946 395865</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <footer class="card-footer">
                    <a
                      href="https://goldenhill.play-cricket.com/Teams/14726"
                      class="card-footer-item"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fixtures & Statistics
                    </a>

                    <span class="card-footer-item">
                      <Link to="/cricket/selection/">Team Selection</Link>
                    </span>
                  </footer>
                </div>
                <div class="column"></div>
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">4th XI</p>
                  </header>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48 is-hidden-mobile">
                          <img src={headerlogo} alt="GHS Logo" />
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-6">Captain: Shaun Parker</p>
                        <p class="subtitle is-6">
                          <span>Email: </span>
                          <span>
                            <a href="mailto:shaunhp65@hotmail.co.uk">
                              shaunhp65@hotmail.co.uk
                            </a>
                          </span>
                          <br />
                          <span>Phone: </span>
                          <span>07535 884588</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <footer class="card-footer">
                    <a
                      href="https://goldenhill.play-cricket.com/Teams/14727"
                      class="card-footer-item"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fixtures & Statistics
                    </a>

                    <span class="card-footer-item">
                      <Link to="/cricket/selection/">Team Selection</Link>
                    </span>
                  </footer>
                </div>
                <div class="column"></div>
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">5th XI</p>
                  </header>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48 is-hidden-mobile">
                          <img src={headerlogo} alt="GHS Logo" />
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-6">Captain: Gerry Davis</p>
                        <p class="subtitle is-6">
                          <span>Email: </span>
                          <span>
                            <a href="mailto:gerrymdavis@aol.com">
                              gerrymdavis@aol.com
                            </a>
                          </span>
                          <br />
                          <span>Phone: </span>
                          <span>07877 612930</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <footer class="card-footer">
                    <a
                      href="https://goldenhill.play-cricket.com/Teams/105276"
                      class="card-footer-item"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fixtures & Statistics
                    </a>

                    <span class="card-footer-item">
                      <Link to="/cricket/selection/">Team Selection</Link>
                    </span>
                  </footer>
                </div>

                <div class="column"></div>
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">6th XI</p>
                  </header>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48 is-hidden-mobile">
                          <img src={headerlogo} alt="GHS Logo" />
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-6">Captain: Steve Millman</p>
                        <p class="subtitle is-6">
                          <span>Email: </span>
                          <span>
                            <a href="mailto:stevemillman@blueyonder.co.uk">
                              stevemillman@blueyonder.co.uk
                            </a>
                          </span>
                          <br />
                          <span>Phone: </span>
                          <span> 07502 282229</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <footer class="card-footer">
                    <a
                      href="https://goldenhill.play-cricket.com/Teams/145534"
                      class="card-footer-item"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fixtures & Statistics
                    </a>
                    <span class="card-footer-item">
                      <Link to="/cricket/selection/">Team Selection</Link>
                    </span>
                  </footer>
                </div>
                <div class="column"></div>
              </div>

              <div class="column">
                <div class="card-content">
                  <p class="has-text-primary has-text-weight-bold is-size-4">
                    Golden Hill Senior Men
                  </p>
                  <br />
                  <p class="has-text-weight-bold has-text-primary">
                    Our teams
                  </p>{" "}
                  <p>
                    Golden Hill CC field 6 league sides on a Saturday to compete
                    across the breadth of the cricketing league pyramid. <br />
                    <br />
                    Our sides comprise everything from the super-talented
                    youngsters to the wily old foxes, the enthusiastic but
                    ‘village’, to the press-ganged occasional player or the
                    dedicated club stalwart.
                    <br />
                    <br />
                    There is a place for everyone at our club, no doubt enticed
                    by our wonderful cricket teas, our great facilities and our
                    welcoming environment. <br />
                    <br />
                    In addition to Saturday League cricket, the club plays the
                    occasional friendly match at the weekend together with a
                    calendar of midweek T20 fixtures.
                  </p>
                  <br />
                  <p class="has-text-weight-bold has-text-primary">
                    What divisions we play in
                  </p>
                  <p>
                    After back-to-back promotions, our 1st XI play in the
                    Bristol and North Somerset division of the West of England
                    Premier League (WEPL), equivalent to the third tier of
                    regional club cricket.
                    <br />
                    <br />
                    The 2nd XI play in Division 4 of the Bristol and District
                    Cricket League; the 3rds play in Division 9, the 4ths in
                    Division 11 and the 5ths & 6ths in Division 14. <br />
                    <br />
                    All are committed to climbing even further up the league
                    pyramid by retaining a competitive edge and a healthy and
                    fun attitude to our game.
                  </p>
                  <br />
                  <p class="has-text-weight-bold has-text-primary">
                    Membership fees
                  </p>
                  <p>
                    Annual subscription rates for senior members are £95.00 per
                    year. Match fees are set at £10 per match or £5 for
                    concessions. Winter nets are charged on a pay when you play
                    basis.
                  </p>
                  <br />
                  <p class="has-text-weight-bold has-text-primary">
                    Training nights
                  </p>
                  <p>
                    Senior summer-time training takes place on Tuesday evenings
                    from 6pm for which there is no charge. <br />
                    <br />
                    When the ground is open, and our youth section is not
                    training, our excellent practice facilities can also be
                    used.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SeniorPage;

export const query = graphql`
  query {
    cricket1: file(relativePath: { eq: "ghs-cricket1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
