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
                        Egestas pretium aenean pharetra magna ac placerat
                        vestibulum. In vitae turpis massa sed elementum tempus
                        egestas. Cursus mattis molestie a iaculis at erat
                        pellentesque. Amet mauris commodo quis imperdiet massa.
                        <br />
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
                        Egestas pretium aenean pharetra magna ac placerat
                        vestibulum. In vitae turpis massa sed elementum tempus
                        egestas. Cursus mattis molestie a iaculis at erat
                        pellentesque. Amet mauris commodo quis imperdiet massa.
                        <br />
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
                        Egestas pretium aenean pharetra magna ac placerat
                        vestibulum. In vitae turpis massa sed elementum tempus
                        egestas. Cursus mattis molestie a iaculis at erat
                        pellentesque. Amet mauris commodo quis imperdiet massa.
                        <br />
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
                        Egestas pretium aenean pharetra magna ac placerat
                        vestibulum. In vitae turpis massa sed elementum tempus
                        egestas. Cursus mattis molestie a iaculis at erat
                        pellentesque. Amet mauris commodo quis imperdiet massa.
                        <br />
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
                  </div>
                </div>
              </div>

              <div class="column is-3 has-addons is-centered">
                <div class="column"></div>

                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title has-background-primary has-text-white is-size-7">
                      Golden Hill CC on Twitter
                    </p>
                  </header>
                  <a
                    class="twitter-timeline"
                    data-width="100%"
                    data-height="800"
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
                <header class="card-header">
                  <p class="card-header-title has-background-primary has-text-white is-size-7">
                    Golden Hill CC on Instagram
                  </p>
                </header>
                <div class="card">
                  <iframe
                    src="https://www.instagram.com/p/CA5G9puhAWv/embed"
                    frameborder="0"
                    allowfullscreen
                    scrolling="no"
                    allowtransparency
                    width="100%"
                    height="400"
                  ></iframe>
                </div>
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
