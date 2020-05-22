import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../../components/layout";

const SocialPage = ({ data }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Golden Hill Social Club</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li class="is-active">
                <Link to="/social/">Overview</Link>
              </li>
              <li>
                <Link to="/social/venue/">Venue Hire</Link>
              </li>
              <li>
                <Link to="/social/gallery/">Gallery</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-small is-hidden-desktop is-hidden-tablet is-boxed">
            <ul>
              <li class="is-active">
                <Link to="/social/">Overview</Link>
              </li>
              <li>
                <Link to="/social/venue/">Venue Hire</Link>
              </li>
              <li>
                <Link to="/social/gallery/">Gallery</Link>
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
                <Img fluid={data.bar.childImageSharp.fluid} alt="Club bar" />
              </figure>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <p>
                <strong>Golden Hill Sports & Social Club </strong>
                has a licensed bar, enabling us to sell alcoholic drinks to our
                members and guests.
                <br />
                <br />
                Under 18s are welcome at the club but must be accompanied by an
                adult, and are obviously not permitted to buy or consume
                alcohol.
                <br />
                <br />
                We are open on Saturday afternoons throughout the year and
                weekday evenings during the summer.
                <br />
                <br />
                The bar may be open at additional times throughout the winter to
                accommodate sports matches and live events.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SocialPage;

export const query = graphql`
  query {
    bar: file(relativePath: { eq: "bar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
