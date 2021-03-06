import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../../components/layout";
import Social from "../../components/social";

const CricketPage = ({ data }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Golden Hill Cricket Club</h1>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <Img
                  fluid={data.CricketHome.childImageSharp.fluid}
                  alt="Placeholder"
                />
              </figure>
            </div>
            <div class="columns">
              <div class="column is-three-quarters">
                <div class="card-content">
                  <p>
                    <span class="is-size-3 has-text-primary">
                      Welcome to Golden Hill Cricket Club
                      <br />
                    </span>
                    a friendly and welcoming club,&nbsp;
                    <Link className="has-text-weight-bold" to="/location/">
                      located
                    </Link>
                    &nbsp;about 3 miles north of Bristol city centre, in a
                    pleasant residential area.
                  </p>
                </div>
                <div class="columns">
                  <div class="column">
                    <div class="card">
                      <header class="card-header">
                        <p class="card-header-title has-background-primary has-text-white">
                          Senior Men
                        </p>
                      </header>
                      <div class="card-image">
                        <figure class="image">
                          <Img
                            fluid={data.Senior1.childImageSharp.fluid}
                            alt="Placeholder"
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <p>
                          Our sides comprise everything from the super-talented
                          youngsters to the wily old foxes, the enthusiastic but
                          ‘village’, to the press-ganged occasional player or
                          the dedicated club stalwart.
                        </p>
                        <br />
                        <p>
                          There is a place for everyone at our club, no doubt
                          enticed by our wonderful cricket teas, our great
                          facilities and our welcoming environment.
                        </p>

                        <br />
                        <div class="buttons">
                          <Link
                            className="button is-primary is-size-6-desktop is-size-7-mobile"
                            to="/cricket/senior/"
                          >
                            More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column">
                    <div class="card">
                      <header class="card-header">
                        <p class="card-header-title has-background-primary has-text-white">
                          Women
                        </p>
                      </header>
                      <div class="card-image">
                        <figure class="image">
                          <Img
                            fluid={data.Women1.childImageSharp.fluid}
                            alt="Placeholder"
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <p>
                          Golden Hill is a friendly and sociable women's cricket
                          team. New players (aged sixteen and above) of all
                          abilities are welcome, from complete beginners to
                          seasoned veterans.
                        </p>
                        <br />
                        <p>
                          Our team has ambitions to be one of the top women's
                          sides in Gloucestershire, with plenty of talent coming
                          up through our strong girls set up.
                        </p>
                        <br />
                        <div class="buttons">
                          <Link
                            className="button is-primary is-size-6-desktop is-size-7-mobile"
                            to="/cricket/women/"
                          >
                            More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <div class="card">
                      <header class="card-header">
                        <p class="card-header-title has-background-primary has-text-white">
                          Boys Youth
                        </p>
                      </header>
                      <div class="card-image">
                        <figure class="image">
                          <Img
                            fluid={data.u11s2020.childImageSharp.fluid}
                            alt="Placeholder"
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <p>
                          We are very proud of our boys set-up, which is
                          constantly in high demand and operates on a waiting
                          list to join.
                        </p>
                        <br />
                        <p>
                          To provide opportunities to as many young players as
                          possible, we run at least two squads at each age group
                          with 4 teams at the u11s age group.
                        </p>
                        <br />

                        <div class="buttons">
                          <Link
                            className="button is-primary is-size-6-desktop is-size-7-mobile"
                            to="/cricket/junior/"
                          >
                            More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="column"></div>
                  </div>

                  <div class="column">
                    <div class="card">
                      <header class="card-header">
                        <p class="card-header-title has-background-primary has-text-white">
                          Girls Youth
                        </p>
                      </header>
                      <div class="card-image">
                        <figure class="image">
                          <Img
                            fluid={data.Girls1.childImageSharp.fluid}
                            alt="Placeholder"
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <p>
                          We introduce the girls to​​ cricket from year 3 and
                          this through soft ball cricket playing kwik cricket
                          games and exercises.
                        </p>
                        <br />
                        <p>
                          Everyone is involved and there is no kit requirement.
                          ​​It is all about fun and enjoyment. We provide girls
                          cricket from year 3 right through to Womens cricket.
                        </p>
                        <br />
                        <div class="buttons">
                          <Link
                            className="button is-primary is-size-6-desktop is-size-7-mobile"
                            to="/cricket/girls/"
                          >
                            More
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="column"></div>
                  </div>
                </div>
              </div>

              <div class="column pt-6">
                <Social></Social>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CricketPage;

export const query = graphql`
  query {
    Girls1: file(relativePath: { eq: "girls-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Youthindex1: file(relativePath: { eq: "youth-index-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Women1: file(relativePath: { eq: "womens-home-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Senior1: file(relativePath: { eq: "senior-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    CricketHome: file(relativePath: { eq: "cricket-home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fbhome: file(relativePath: { eq: "fbpage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    instahome: file(relativePath: { eq: "instahome.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    u11s2020: file(relativePath: { eq: "u11-2020.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
