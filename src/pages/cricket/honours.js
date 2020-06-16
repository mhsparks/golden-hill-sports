import React from "react";
import Layout from "../../components/layout";
import Img from "gatsby-image";
import { graphql } from "gatsby";

const HonoursPage = ({ data }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Golden Hill Cricket Club Honours</h1>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">2020</p>
                </header>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    Winners - U12 Girls
                    <br />
                    Indoor League South
                    <br />
                  </p>
                </header>
                <figure class="image">
                  <Img fluid={data.girlsgallery2.childImageSharp.fluid} />
                </figure>
              </div>
            </div>
            <div class="column"></div>
            <div class="column"></div>
            <div class="column"></div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">2019</p>
                </header>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    Winners - U11 Girls
                    <br />
                    County of Gloucestershire League
                    <br />
                  </p>
                </header>
                <figure class="image">
                  <Img fluid={data.girlsgallery1.childImageSharp.fluid} />
                </figure>
              </div>
            </div>
            <div class="column"></div>
            <div class="column"></div>
            <div class="column"></div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">2018</p>
                </header>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    Some text
                    <br />
                    Some more text
                    <br />
                  </p>
                </header>
                <figure class="image">
                  <img src="https://bulma.io/images/placeholders/640x480.png" />
                </figure>
              </div>
            </div>
            <div class="column"></div>
            <div class="column"></div>
            <div class="column"></div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">2017</p>
                </header>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    Winners - U11 Girls
                    <br />
                    Lady Taverners Tournament
                    <br />
                  </p>
                </header>
                <figure class="image">
                  <Img fluid={data.girlsgallery20.childImageSharp.fluid} />
                </figure>
              </div>
            </div>
            <div class="column"></div>
            <div class="column"></div>
            <div class="column"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HonoursPage;
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
