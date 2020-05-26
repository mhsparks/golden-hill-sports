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
              <div class="column is-two-thirds">
                <div class="card-content">
                  <p>
                    Welcome to Golden Hill Cricket Club.
                    <br />
                    <br />
                    We are located about 3 miles north of Bristol city centre in
                    a pleasant residential area.
                    <br />
                    <br />
                    With two pitches, we run five Saturday{" "}
                    <span class="has-text-weight-bold">
                      <Link to="/cricket/senior/">senior</Link>
                    </span>{" "}
                    sides in the Bristol & District Cricket League and have a
                    youth policy which rivals any local club; it is one of the
                    biggest and most successful in the region.
                    <br />
                    <br /> In addition the club also puts out a midweek XI
                    playing T20 matches on summer evenings, and an indoor side
                    which competes in the Bristol Indoor Cricket League during
                    the winter months. <br />
                    <br />
                    We run a comprehensive youth programme for{" "}
                    <span class="has-text-weight-bold">
                      {" "}
                      <Link to="/cricket/junior/">boys</Link>
                    </span>{" "}
                    with opportunities to progress through the sides, along with
                    a successful{" "}
                    <span class="has-text-weight-bold">
                      <Link to="/cricket/women/">women's</Link>
                    </span>{" "}
                    side and a hugely popular
                    <span class="has-text-weight-bold">
                      <Link to="/cricket/girls/"> girls</Link>
                    </span>{" "}
                    programme. So we probably have a team to suit your ability,
                    age or gender. <br />
                    <br />
                    Come and join our friendly and welcoming club!
                  </p>
                  <br />
                </div>
              </div>
              <div class="column is-one-third ">
                <div class="card">
                  <div class="card-content">
                    <a
                      class="twitter-timeline"
                      data-width="300"
                      data-height="400"
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
    CricketHome: file(relativePath: { eq: "cricket-home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
