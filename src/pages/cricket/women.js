import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../../components/layout";

const WomensPage = ({ data }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Golden Hill Womens Cricket</h1>
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
                <a
                  href="https://goldenhill.play-cricket.com/Teams/150046"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Matches
                </a>
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
                <a
                  href="https://goldenhill.play-cricket.com/Teams/150046"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Matches
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="card">
            <div class="columns">
              <div class="column">
                <div class="card-image">
                  <figure class="image">
                    <Img fluid={data.women1.childImageSharp.fluid} />
                  </figure>
                </div>
              </div>
              <div class="column">
                <div class="card-image">
                  <figure class="image">
                    <Img fluid={data.women2.childImageSharp.fluid} />
                  </figure>
                </div>
              </div>
            </div>

            <div class="card-content">
              <p>
                <p class="has-text-primary has-text-weight-bold is-size-4">
                  Golden Hill Womens Cricket
                </p>
                <br />
                In the summer of 2011, Golden Hill Cricket Club formed a new
                women’s team and 2 girl’s teams for U13 and U15 players. The
                girls did very well for the first couple of years, with some
                being selected for county teams. <br />
                The women started playing matches in the Gloucestershire Women’s
                T20 Development League in 2011, and changed to playing in the
                Women’s T20 Competitive League in 2013. This league covers an
                area from Bristol up to Hereford, although this has changed to
                split into North and South areas as more women’s teams are
                formed and join the leagues. <br />
                We still organise the odd friendly with some of the teams in the
                North league, as we love playing them, (and they do great cake!)
                <br />
                <br />
                <p class="has-text-primary has-text-weight-bold">Training</p>
                Winter indoor training / coaching is on Monday evenings from
                6.30pm – 8.00pm at Orchard School for until March. £5 per
                session, payable on the night. Contact Jan for dates. <br />
                Outside training takes place at our home ground at Wimbledon
                Road on Wednesday evenings throughout the summer, (April until
                the end of July) starting mid-April at 7.00 until 8.30pm (We
                sometimes stay later if the weather / daylight allows). There
                are toilets and changing facilities available. Contact Jan
                (email below) for dates.
                <br /> Protective equipment and bats are available at our
                training nights, so you just need to turn up with suitable
                sports kit and trainers. If you have your own kit you can bring
                it along to use. Note that spikes are not allowed in the nets.
                <br />
                <br />
                <p class="has-text-primary has-text-weight-bold">Kit</p>
                Kit We have new subsidised sponsored kit available to order.
                Costs are £20 for a new T20 style blue coloured top and £20 for
                the matching trousers.
                <br />
                <br />
                <p class="has-text-primary has-text-weight-bold">Fees</p>
                Fees Our annual subs are set at £35 each per season, which
                covers your registration and club insurances. <br />
                <br />
                <p class="has-text-primary has-text-weight-bold">Join us!</p>
                If you are interested in playing for a friendly and social
                ladies cricket team, we would love to have you join us. You can
                either contact Jan by emailing{" "}
                <a
                  class="has-text-weight-bold"
                  href="mailto:smiley_j1@yahoo.co.uk"
                >
                  smiley_j1@yahoo.co.uk
                </a>{" "}
                or simply turn up for one of our training nights, to see if
                cricket is for you – no obligation, we are happy for you to give
                it a try.
                <br />
                <br /> New players are always welcome, no matter how experienced
                you are. We have a range of abilities from complete beginners to
                those that have played a bit! We are a fun and friendly team,
                who are still learning from each other, and enjoying those
                summer afternoons of cricket in the pleasant surroundings of the
                Golden Hill Sports ground. Matches are on Sundays with various
                start times, both home and away, and we provide teas for weekend
                home matches. We also have the occasional mid-week match on our
                Wednesday training night. <br />
                <br />
              </p>
            </div>
            <div class="card">
              <header class="card-header">
                <p class="card-header-title has-background-primary has-text-white">
                  Contact Us
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
                    <p class="title is-6">Captain: Janet Street</p>
                    <p class="subtitle is-6">
                      <span>Email: </span>
                      <span>
                        <a href="mailto:smiley_j1@yahoo.co.uk">
                          smiley_j1@yahoo.co.uk
                        </a>
                      </span>
                      <br />

                      <span>Phone: </span>
                      <span class="has-text-primary">07910 740757</span>
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
                  Fixtures & Statistics
                </a>

                <span class="card-footer-item">
                  <Link to="/cricket/selection/">Team Selection</Link>
                </span>
              </footer>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WomensPage;

export const query = graphql`
  query {
    women1: file(relativePath: { eq: "women-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    women2: file(relativePath: { eq: "women-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
