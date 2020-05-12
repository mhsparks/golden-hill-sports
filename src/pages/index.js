import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLocationArrow, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import headerlogo from "../images/headerlogo.png";
import { Link } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />

      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Golden Hill Sports & Social Club</h1>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="card">
            <div class="columns">
              <div class="column is-half">
                <div class="card-image">
                  <figure class="image">
                    <Img
                      fluid={data.pavilion.childImageSharp.fluid}
                      alt="Pavilion"
                    />
                  </figure>
                </div>
              </div>
              <div class="column is-half">
                <div class="card-content">
                  <p>
                    <strong>Golden Hill Sports & Social Club</strong> is a
                    registered sports charity which incorporates Golden Hill
                    Cricket Club, Golden Hill Sonics Junior Football Club and a
                    host of community based social groups.
                    <br />
                    <br />
                    The club is based on Wimbledon Road in Henleaze and has been
                    landowner of the much loved sports facility since its sale
                    by the national YMCA charity in 2008.
                    <br />
                    <br />
                    If you are interested in joining Golden Hill Sports & Social
                    Club or want any more information, please do not hesitate to
                    <span>
                      <Link to="/social/contact/"> contact us.</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-content">
              <div class="columns">
                <div class="column is-one-third">
                  <div class="columns is-vcentered is-mobile">
                    <div class="column is-one-fifth">
                      <figure class="image is-48x48">
                        <img src={headerlogo} alt="GHS Logo" />
                      </figure>
                    </div>
                    <div class="column is-four-fifths">
                      <p class="title is-4 has-text-primary">Cricket</p>
                    </div>
                  </div>
                  <div class="card-image">
                    <figure class="image">
                      <Img
                        fluid={data.cricket2.childImageSharp.fluid}
                        alt="Cricket"
                      />
                    </figure>
                  </div>
                  <div class="column"></div>
                  <div class="content">
                    <p>
                      Golden Hill CC runs five Saturday senior sides in the
                      Bristol & District Cricket League and have a youth policy
                      which rivals any local club; it is one of the biggest and
                      most successful in the region. <br />
                      <br /> We run a comprehensive youth programme for boys
                      with opportunities to progress through the sides, along
                      with a successful women’s side and a hugely popular girls
                      programme.
                      <br />
                      <br /> Come and join our friendly and welcoming club!
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
                <div class="column is-one-third">
                  <div class="columns is-vcentered is-mobile">
                    <div class="column is-one-fifth">
                      <figure class="image is-48x48">
                        <img src={headerlogo} alt="GHS Logo" />
                      </figure>
                    </div>
                    <div class="column is-four-fifths">
                      <p class="title is-4 has-text-primary">Football</p>
                    </div>
                  </div>
                  <div class="card-image">
                    <figure class="image">
                      <Img
                        fluid={data.sonicsteam.childImageSharp.fluid}
                        alt="Sonics"
                      />
                    </figure>
                  </div>
                  <div class="column"></div>
                  <div class="content">
                    <p>
                      Golden Hill Sonics is a parent run football club, which
                      welcomes boys and girls in school years 2 to 11. The club
                      holds the FA Charter Standard Club accreditation.
                      <br />
                      <br />
                      U7’s to U11’s meet between at varying times 9:30am and
                      midday on Saturdays during the school term at the Golden
                      Hill Sports Ground just off Kellaway Avenue.
                      <br />
                      <br />
                      U11’s to U16’s all play in local competitive leagues
                      either on Saturday or Sunday mornings.
                      <br />
                      <br />
                      For more information on Golden Hill Sonics Football Club
                      please visit their website: <br />
                      <br />
                      <a href="http://www.goldenhillsonics.co.uk">
                        www.goldenhillsonics.co.uk
                      </a>
                      <br />
                    </p>
                  </div>
                </div>
                <div class="column is-one-third">
                  <div class="columns is-vcentered is-mobile">
                    <div class="column is-one-fifth">
                      <figure class="image is-48x48">
                        <img src={headerlogo} alt="GHS Logo" />
                      </figure>
                    </div>
                    <div class="column is-four-fifths">
                      <p class="title is-4 has-text-primary">Social</p>
                    </div>
                  </div>
                  <div class="card-image">
                    <figure class="image">
                      <Img
                        fluid={data.pitp.childImageSharp.fluid}
                        alt="Party in the Park"
                      />
                    </figure>
                  </div>
                  <div class="column"></div>
                  <div class="content">
                    <p>
                      Golden Hill Sports & Social Club has a licensed bar,
                      enabling us to sell alcoholic drinks to our members and
                      guests. <br />
                      <br />
                      We also run the hugely popular Party in the Park.
                      <br />
                      <br />
                      Party in the Park is a community event that raises money
                      to pay for the upkeep of the field that the community
                      helped to secure.
                      <br />
                      <br /> It’s a great event with a variety of stalls and
                      entertainment on offer for all the family.
                      <br />
                      <br />
                      Our venue is also available for hire.
                      <br />
                      <br />
                      <Link to="/social/venue"> Venue Hire</Link>
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

export default IndexPage;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const query = graphql`
  query {
    pavilion: file(relativePath: { eq: "pavilion.jpg" }) {
      ...fluidImage
    }
    cricket2: file(relativePath: { eq: "cricket-2.png" }) {
      ...fluidImage
    }
    pitp: file(relativePath: { eq: "pitp.jpg" }) {
      ...fluidImage
    }
    sonicsteam: file(relativePath: { eq: "sonics-team.jpg" }) {
      ...fluidImage
    }
  }
`;
