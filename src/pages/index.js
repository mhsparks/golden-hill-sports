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
                    contact us.
                  </p>
                  <section class="section">
                    <div class="columns">
                      <div class="column">
                        <div class="buttons has-addons is-left">
                          <Link className="button is-primary" to="/location/">
                            <span class="icon">
                              <FontAwesomeIcon icon={faLocationArrow} />
                            </span>
                            <span>
                              <strong>Find Us</strong>
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div class="column">
                        <div class="buttons has-addons is-left">
                          <Link
                            className="button is-primary"
                            to="/social/contact/"
                          >
                            <span class="icon">
                              <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <span>
                              <strong>Contact Us</strong>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="columns">
              <div class="column is-one-third">
                <div class="card-image">
                  <figure class="image">
                    <Img
                      fluid={data.cricket2.childImageSharp.fluid}
                      alt="Cricket"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src={headerlogo} alt="GHS Logo" />
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">Cricket</p>

                      <p class="subtitle is-6">
                        <span class="icon has-text-primary">
                          <FontAwesomeIcon icon={faTwitter} />
                        </span>
                        <a href="https://twitter.com/GoldenHillCC">
                          @GoldenHillCC
                        </a>
                      </p>
                    </div>
                  </div>

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
                      Membership for adults is £50 and for youth team players
                      £40. Match fees are £10.00/£5.00. <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              <div class="column is-one-third">
                <div class="card-image">
                  <figure class="image">
                    <Img
                      fluid={data.sonicsteam.childImageSharp.fluid}
                      alt="Sonics"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src={headerlogo} alt="GHS Logo" />
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">Sonics</p>
                      <p class="subtitle is-6 has-text-primary">
                        <span class="icon has-text-primary">
                          <FontAwesomeIcon icon={faTwitter} />
                        </span>
                        <a href="https://twitter.com/ghsonics">@ghsonics</a>
                      </p>
                    </div>
                  </div>

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
                      please visit their website:{" "}
                      <a href="http://www.goldenhillsonics.co.uk">
                        www.goldenhillsonics.co.uk
                      </a>
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              <div class="column is-one-third">
                <div class="card-image">
                  <figure class="image">
                    <Img
                      fluid={data.pitp.childImageSharp.fluid}
                      alt="Party in the Park"
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src={headerlogo} alt="GHS Logo" />
                      </figure>
                    </div>

                    <div class="media-content">
                      <p class="title is-4">Social</p>
                      <p class="subtitle is-6">
                        <span class="icon has-text-primary">
                          <FontAwesomeIcon icon={faTwitter} />
                        </span>
                        <a href="https://twitter.com/GoldenHillSport">
                          @GoldenHillSport
                        </a>
                      </p>
                    </div>
                  </div>

                  <div class="content">
                    <p>
                      Golden Hill Sports & Social Club has a fully licensed bar,
                      enabling us to sell alcoholic drinks to our members and
                      guests. <br />
                      We also run the hugely popular Party in the Park.
                      <br />
                      <br />
                      For those of you that don’t know about PITP, it’s a
                      community event that raises money to pay for the upkeep of
                      the community owned field at Golden Hill.
                      <br />
                      <br /> It’s a great event with a variety of stalls and
                      entertainment on offer for all the family.
                      <br />
                      <br />
                      Our venue is also available for hire.
                      <br />
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
