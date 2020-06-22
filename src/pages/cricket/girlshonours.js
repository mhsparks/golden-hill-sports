import React from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

const GirlsHonours = ({ data }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Girls Youth Honours</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li>
                <Link to="/cricket/girls/">Home</Link>
              </li>
              <li class="is-active">
                <Link to="/cricket/girlshonours/">Honours</Link>
              </li>
              <li>
                <Link to="/cricket/girlsgallery/">Gallery</Link>
              </li>
              <li>
                <a
                  href="https://goldenhill.play-cricket.com/Teams"
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
              <li>
                <Link to="/cricket/girls/">Home</Link>
              </li>
              <li class="is-active">
                <Link to="/cricket/girlshonours/">Honours</Link>
              </li>
              <li>
                <Link to="/cricket/girlsgallery/">Gallery</Link>
              </li>
              <li>
                <a
                  href="https://goldenhill.play-cricket.com/Teams"
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
          <div class="columns">
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    2017 <br />
                    U11s - Winners
                    <br />
                    Lady Taverners Tournament
                  </p>
                </header>
                <figure class="image">
                  <Img fluid={data.girlsgallery20.childImageSharp.fluid} />
                </figure>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    2019
                    <br /> U11s - Winners <br />
                    County of Gloucestershire League
                  </p>
                </header>
                <figure class="image">
                  <Img fluid={data.girlsgallery1.childImageSharp.fluid} />
                </figure>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    2020
                    <br />
                    U12s - Winners
                    <br />
                    Indoor League South
                  </p>
                </header>
                <figure class="image">
                  <Img fluid={data.girlsgallery2.childImageSharp.fluid} />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GirlsHonours;
export const query = graphql`
  query {
    girlsgallery20: file(relativePath: { eq: "girls-gallery-20.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    girlsgallery1: file(relativePath: { eq: "girls-gallery-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    girlsgallery2: file(relativePath: { eq: "girls-gallery-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
