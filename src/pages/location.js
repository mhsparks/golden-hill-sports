import React from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";

const LocationPage = ({ data }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Where to find us</h1>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="card">
            <div class="columns">
              <div class="column">
                <figure class="image">
                  <Img fluid={data.map.childImageSharp.fluid} />
                </figure>
              </div>
              <div class="column">
                <div class="card-content has-background-primary has-text-white">
                  <p>
                    You can find us here, just off Kellaway Avenue
                    <br /> <br />
                    Golden Hill Sports
                    <br />
                    Wimbledon Road
                    <br />
                    Henleaze
                    <br />
                    Bristol
                    <br />
                    BS6 7YA
                    <br />
                    <br />
                    PLEASE NOTE WE ARE NOT THE ASTRO-TURF PITCHES NEXT TO TESCO!
                  </p>
                  <br />
                  <p>Email: info@goldenhillsports.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default LocationPage;
export const query = graphql`
  query {
    map: file(relativePath: { eq: "map1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
