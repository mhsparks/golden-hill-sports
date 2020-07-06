import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../../components/layout";

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
              <div class="column">
                <div class="card-content">
                  <p>
                    <span class="is-size-3 has-text-primary">
                      Welcome to Golden Hill Cricket Club
                      <br />
                    </span>{" "}
                    a friendly and welcoming club,{" "}
                    <Link className="has-text-weight-bold" to="/location/">
                      located
                    </Link>{" "}
                    about 3 miles north of Bristol city centre, in a pleasant
                    residential area.
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
                          Egestas pretium aenean pharetra magna ac placerat
                          vestibulum. In vitae turpis massa sed elementum tempus
                          egestas. In vitae turpis massa sed elementum tempus
                          egestas.
                        </p>
                        <br />
                        <p>
                          Egestas pretium aenean pharetra magna ac placerat
                          vestibulum. In vitae turpis massa sed elementum tempus
                          egestas.
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
                            fluid={data.Youthindex1.childImageSharp.fluid}
                            alt="Placeholder"
                          />
                        </figure>
                      </div>
                      <div class="card-content">
                        <p>
                          Egestas pretium aenean pharetra magna ac placerat
                          vestibulum. In vitae turpis massa sed elementum tempus
                          egestas.
                        </p>
                        <br />
                        <p>
                          Egestas pretium aenean pharetra magna ac placerat
                          vestibulum. In vitae turpis massa sed elementum tempus
                          egestas.
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
                          ​​ It is all about fun and enjoyment. We provide girls
                          cricket from year 3 right through to Ladies Cricket.
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

              <div class="column is-3 has-addons is-centered">
                <div class="column"></div>

                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title is-size-7">
                      Golden Hill CC on Twitter
                    </p>
                  </header>
                  <a
                    class="twitter-timeline"
                    data-width="100%"
                    data-height="900"
                    href="https://twitter.com/GoldenHillCC?ref_src=twsrc%5Etfw"
                  >
                    Tweets by GoldenHillCC
                  </a>{" "}
                  <script
                    async
                    src="https://platform.twitter.com/widgets.js"
                    charset="utf-8"
                  ></script>
                </div>
                <div class="column"></div>
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title is-size-7">
                      Golden Hill CC on Facebook
                    </p>
                  </header>
                  <div class="card">
                    <iframe
                      class="facebook-FB"
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGoldenHillCC&tabs=timeline&width=318&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                      width="318"
                      height="500"
                      style={{ border: "none", overflow: "hidden" }}
                      scrolling="no"
                      frameborder="0"
                      allowTransparency="true"
                      allow="encrypted-media"
                      adapt_container_width
                    ></iframe>
                  </div>
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
    Women1: file(relativePath: { eq: "women-1.jpg" }) {
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
  }
`;
