import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../../components/layout";

const SponsorsPage = ({ data }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Our Sponsors</h1>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="card">
            <div class="card-content">
              <p class="title">Our Sponsors</p>
              <p>
                Winter may well be upon us but work has been ongoing since the
                last ball was bowled in the 2018 season and following the AGM
                that we’re proud to announce we have a new headline sponsor
                going into the 2019 season. This sees us welcome local company
                Wards Solicitors on board in an exciting partnership between the
                local company and the cricket club.
                <br />
                <br />
                We also welcome 3 other sponsors for the season with Brooks
                Wealth Management LLP, LGT Vestra LLP and Shine all featuring on
                the 2019 playing shirt, training shirt and polo shirt. We’d like
                to take the opportunity to thank all of our 2019 sponsors for
                their support as this will directly benefit the members going
                into the 2019 season. The Cricket Development Committee is
                looking at upgrading the facilities as a result of their
                contributions.
              </p>
            </div>
          </div>
          <div class="column"></div>
          <div class="columns">
            <div class="column is-one-third">
              <div class="card has-background-light">
                <a
                  href="https://www.myshine.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="card-content ">
                    <p class="title is-4">Shine</p>
                    <p class="subtitle is-6">
                      Providing high quality, safely organised childcare for
                      Bristol families
                    </p>

                    <div class="card-image">
                      <figure class="image">
                        <Img fluid={data.shinelogo.childImageSharp.fluid} />
                      </figure>
                    </div>
                  </div>
                </a>
              </div>

              <div class="column"></div>

              <div class="card has-background-light">
                <a
                  href="https://www.lgtvestra.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="card-content">
                    <p class="title is-4">LGT vestra LLP</p>
                    <p class="subtitle is-6">
                      A fresh approach to wealth management
                    </p>

                    <div class="card-image">
                      <figure class="image">
                        <Img fluid={data.lgtlogo.childImageSharp.fluid} />
                      </figure>
                    </div>
                  </div>
                </a>
              </div>
              <div class="column"></div>

              <div class="card has-background-light">
                <a
                  href="http://www.brookswm.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="card-content">
                    <p class="title is-4">bwm</p>
                    <p class="subtitle is-6">
                      Brooks Wealth Management LLP - Financial Planning and
                      Asset Management
                    </p>
                    <div class="card-image">
                      <figure class="image is-128x128">
                        <Img fluid={data.bwmlogo.childImageSharp.fluid} />
                      </figure>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image">
                    <Img fluid={data.wardslogo.childImageSharp.fluid} />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Wards Solicitors</p>
                      <p>
                        For over 100 years Wards Solicitors have been providing
                        expert legal advice to local businesses and individuals.
                        Our team of over 75 legal specialists is based in eleven
                        offices across the Bristol, South Gloucestershire, Bath
                        & North East Somerset and North Somerset region. <br />
                        <br />
                        What that means is that wherever you are based and
                        wherever you want to see your solicitor, you can rest
                        assured that you will get the best person or team for
                        the job right on your doorstep.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SponsorsPage;

export const query = graphql`
  query {
    shinelogo: file(relativePath: { eq: "shinelogo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2688) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wardslogo: file(relativePath: { eq: "wards-logo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2688) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lgtlogo: file(relativePath: { eq: "LGT-logo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2688) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bwmlogo: file(relativePath: { eq: "bwm-logo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2688) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
