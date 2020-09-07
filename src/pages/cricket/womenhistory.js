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
                      Golden Hill Cricket Club’s women’s team was established in
                      2011.
                    </p>
                    <br />
                    <p>
                      The team first played Gloucestershire Women’s T20
                      Development League, and in 2013 advanced to playing in the
                      Women’s T20 Competitive League in 2013.
                    </p>
                    <br />
                    <p>
                      Since 2019, the team has played in the Gloucestershire
                      Cricket Board's Women’s League South.{" "}
                    </p>
                    <br />
                    <p>
                      Since 2018, we have played in the Bristol Women’s Indoor
                      League. We won the league in 2018, 2019 and 2020.{" "}
                    </p>
                    <br />
                    <br />
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
