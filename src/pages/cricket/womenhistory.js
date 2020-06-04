import React from "react";
import Layout from "../../components/layout";
import Img from "gatsby-image";
import { Link, graphql } from "gatsby";

const WomenHistory = ({ data }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Womens History</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li>
                <Link to="/cricket/women/">Home</Link>
              </li>
              <li>
                <Link to="/cricket/womenhonours/">Honours</Link>
              </li>
              <li>
                <Link to="/cricket/womengallery/">Gallery</Link>
              </li>
              <li class="is-active">
                <Link to="/cricket/womenhistory/">History</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-small is-hidden-desktop is-hidden-tablet is-boxed">
            <ul>
              <li>
                <Link to="/cricket/women/">Home</Link>
              </li>
              <li>
                <Link to="/cricket/womenhonours/">Honours</Link>
              </li>
              <li>
                <Link to="/cricket/womengallery/">Gallery</Link>
              </li>

              <li class="is-active">
                <Link to="/cricket/womenhistory/">History</Link>
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
                  fluid={data.fieldlarge.childImageSharp.fluid}
                  alt="Placeholder"
                />
              </figure>
            </div>

            <div class="columns">
              <div class="column">
                <div class="card">
                  <div class="card-content">
                    <p class="has-text-primary has-text-weight-bold">History</p>
                    <p>
                      In the summer of 2011, Golden Hill Cricket Club formed a
                      new women’s team and 2 girl’s teams for U13 and U15
                      players. The girls did very well for the first couple of
                      years, with some being selected for county teams. <br />
                      The women started playing matches in the Gloucestershire
                      Women’s T20 Development League in 2011, and changed to
                      playing in the Women’s T20 Competitive League in 2013.
                      This league covers an area from Bristol up to Hereford,
                      although this has changed to split into North and South
                      areas as more women’s teams are formed and join the
                      leagues. <br />
                      We still organise the odd friendly with some of the teams
                      in the North league, as we love playing them, (and they do
                      great cake!)
                      <br />
                      <br />
                    </p>
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

export default WomenHistory;
export const query = graphql`
  query {
    fieldlarge: file(relativePath: { eq: "field-large.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
