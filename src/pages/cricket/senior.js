import { Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import Img from "gatsby-image";

const SeniorPage = ({ data }) => {
  return (
    <Layout isCricket>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Golden Hill Senior Cricket</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li class="is-active">
                <Link to="/cricket/senior/">Senior Cricket</Link>
              </li>
              <li class="has-text-primary">
                <Link to="/cricket/seniorgallery/">Gallery</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-small is-centered is-boxed is-hidden-desktop is-hidden-tablet">
            <ul>
              <li class="is-active">
                <Link to="/cricket/senior/">Senior Cricket</Link>
              </li>
              <li class="has-text-primary">
                <Link to="/cricket/seniorgallery/">Gallery</Link>
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
                    <p class="card-header-title has-background-primary has-text-white">
                      1st XI
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48">
                          <img
                            src="https://bulma.io/images/placeholders/96x96.png"
                            alt="Placeholder"
                          />
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-6">Captain: John Colley</p>
                        <p class="subtitle is-6">
                          <span>Email: </span>
                          <span>
                            <a href="mailto:john@myshine.co.uk">
                              john@myshine.co.uk
                            </a>
                          </span>
                          <br />
                          <span>Phone: </span>
                          <span class="has-text-primary">07832 339738</span>
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
                    <p class="card-header-title has-background-primary has-text-white">
                      2nd XI
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48">
                          <img
                            src="https://bulma.io/images/placeholders/96x96.png"
                            alt="Placeholder"
                          />
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
                          <span class="has-text-primary">07968 068576</span>
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
                    <p class="card-header-title has-background-primary has-text-white">
                      3rd XI
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48">
                          <img
                            src="https://bulma.io/images/placeholders/96x96.png"
                            alt="Placeholder"
                          />
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-6">Captain: Jamie Woodworth</p>
                        <p class="subtitle is-6">
                          <span>Email: </span>
                          <span>
                            <a href="mailto:woodworthjamie@hotmail.com">
                              woodworthjamie@hotmail.com
                            </a>
                          </span>
                          <br />
                          <span>Phone: </span>
                          <span class="has-text-primary">07910 066298</span>
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
                    <p class="card-header-title has-background-primary has-text-white">
                      4th XI
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48">
                          <img
                            src="https://bulma.io/images/placeholders/96x96.png"
                            alt="Placeholder"
                          />
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
                          <span class="has-text-primary">07535 884588</span>
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
                    <p class="card-header-title has-background-primary has-text-white">
                      5th XI
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48">
                          <img
                            src="https://bulma.io/images/placeholders/96x96.png"
                            alt="Placeholder"
                          />
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
                          <span class="has-text-primary">07877 612930</span>
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
              </div>

              <div class="column">
                <div class="card-content">
                  <p class="has-text-primary has-text-weight-bold is-size-4">
                    Golden Hill Cricket Club
                  </p>
                  <br />
                  <p>
                    <p class="has-text-weight-bold has-text-primary">
                      Our teams
                    </p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Enim lobortis scelerisque fermentum dui faucibus in
                    ornare quam viverra. Et ultrices neque ornare aenean euismod
                    elementum. Nisi est sit amet facilisis magna etiam tempor
                    orci eu.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Enim lobortis scelerisque fermentum dui faucibus in
                    ornare quam viverra. Et ultrices neque ornare aenean euismod
                    elementum. Nisi est sit amet facilisis magna etiam tempor
                    orci eu.
                    <br />
                    <br />
                    <p class="has-text-weight-bold has-text-primary">
                      What divisions we play in
                    </p>
                    Egestas pretium aenean pharetra magna ac placerat
                    vestibulum. In vitae turpis massa sed elementum tempus
                    egestas. Cursus mattis molestie a iaculis at erat
                    pellentesque. Amet mauris commodo quis imperdiet massa.
                    <br />
                    Egestas pretium aenean pharetra magna ac placerat
                    vestibulum. In vitae turpis massa sed elementum tempus
                    egestas. Cursus mattis molestie a iaculis at erat
                    pellentesque. Amet mauris commodo quis imperdiet massa.
                    <br />
                    <br />
                    <p class="has-text-weight-bold has-text-primary">
                      Membership fees
                    </p>
                    Ut morbi tincidunt augue interdum velit. Pretium aenean
                    pharetra magna ac. Faucibus interdum posuere lorem ipsum
                    dolor sit.
                    <br />
                    <br />
                    <p class="has-text-weight-bold has-text-primary">
                      Training nights
                    </p>
                    Molestie nunc non blandit massa. Sed nisi lacus sed viverra
                    tellus. In aliquam sem fringilla ut morbi tincidunt augue
                    interdum velit. Viverra ipsum nunc aliquet bibendum enim
                    facilisis. Cras tincidunt lobortis feugiat vivamus.
                    <br />
                    Molestie nunc non blandit massa. Sed nisi lacus sed viverra
                    tellus. In aliquam sem fringilla ut morbi tincidunt augue
                    interdum velit. Viverra ipsum nunc aliquet bibendum enim
                    facilisis. Cras tincidunt lobortis feugiat vivamus.
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
