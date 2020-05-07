import Img from "gatsby-image";
import React from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";

const CricketPage = ({ data }) => {
  return (
    <Layout isCricket>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Golden Hill Cricket Club</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li>
                <Link to="/cricket/senior/">Senior</Link>
              </li>
              <li>
                <Link to="/cricket/women/">Women</Link>
              </li>
              <li>
                <Link to="/cricket/junior/">Boys</Link>
              </li>
              <li>
                <Link to="/cricket/girls/">Girls</Link>
              </li>
              <li>
                <a>More</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-small is-centered is-boxed is-hidden-desktop is-hidden-tablet">
            <ul>
              <li>
                <Link to="/cricket/senior/">Senior</Link>
              </li>
              <li>
                <Link to="/cricket/women/">Women</Link>
              </li>
              <li>
                <Link to="/cricket/junior/">Boys</Link>
              </li>
              <li>
                <Link to="/cricket/girls/">Girls</Link>
              </li>
              <li>
                <a>More</a>
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
                  fluid={data.CricketHome.childImageSharp.fluid}
                  alt="Placeholder"
                />
              </figure>
            </div>

            <div class="card-content">
              <p>
                Welcome to{" "}
                <span class="has-text-primary has-text-weight-bold">
                  Golden Hill Cricket Club
                </span>
                .
                <br />
                <br />
                We are located about 3 miles north of Bristol city centre in a
                pleasant residential area.
                <br />
                <br />
                With two pitches, we run five Saturday senior sides in the
                Bristol & District Cricket League and have a youth policy which
                rivals any local club; it is one of the biggest and most
                successful in the region.
                <br />
                <br /> In addition the club also puts out a midweek XI playing
                T20 matches on summer evenings, and an indoor side which
                competes in the Bristol Indoor Cricket League during the winter
                months. <br />
                <br />
                We run a comprehensive youth programme for boys with
                opportunities to progress through the sides, along with a
                successful women’s side and a hugely popular girls programme. So
                we probably have a team to suit your ability, age or gender.{" "}
                <br />
                <br />
                Come and join our friendly and welcoming club; membership for
                adults is £50 and for youth team players £40. Match fees are
                £10.00/£5.00.
              </p>
              <br />
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
    CricketHome: file(relativePath: { eq: "cricket-home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
