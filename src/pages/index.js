import React from "react";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import headerlogo from "../images/headerlogo.png";
import { Link, graphql } from "gatsby";

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
                      fluid={data.pavilion.childImageSharp.full}
                      alt="Pavilion"
                    />
                  </figure>
                </div>
              </div>
              <div class="column is-half">
                <div class="card-content">
                  <p class="title has-text-primary">Welcome to Golden Hill</p>
                  <p>
                    Golden Hill Sports & Social Club is a registered sports
                    charity which incorporates Golden Hill Cricket Club, Golden
                    Hill Sonics Junior Football Club and a host of community
                    based social groups.
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
                      <Link
                        className="has-text-weight-bold"
                        to="/social/contact/"
                      >
                        {" "}
                        contact us.
                      </Link>
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
                      <Link
                        className="title is-4 has-text-primary"
                        to="/cricket/"
                      >
                        Cricket
                      </Link>
                    </div>
                  </div>
                  <div class="card-image">
                    <figure class="image">
                      <Img
                        fluid={data.cricket2.childImageSharp.full}
                        alt="Cricket"
                      />
                    </figure>
                  </div>
                  <div class="column"></div>
                  <div class="content">
                    <p>
                      Golden Hill CC field 5 league sides on a Saturday to
                      compete across the breadth of the cricketing league
                      pyramid.
                    </p>
                    <p>
                      Our sides comprise everything from the super-talented
                      youngsters to the wily old foxes, the enthusiastic but
                      ‘village’, to the press-ganged occasional player or the
                      dedicated club stalwart.{" "}
                    </p>

                    <p>
                      We run a comprehensive youth programme for boys with
                      opportunities to progress through the sides, along with a
                      successful women’s side and a hugely popular girls
                      programme.{" "}
                      <Link className="has-text-weight-bold" to="/cricket/">
                        More...
                      </Link>
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
                      <Link
                        className="title is-4 has-text-primary"
                        to="/football/"
                      >
                        Football
                      </Link>
                    </div>
                  </div>
                  <div class="card-image">
                    <figure class="image">
                      <Img
                        fluid={data.sonicsteam.childImageSharp.full}
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
                    </p>
                    <p>
                      {" "}
                      U7’s to U11’s meet between at varying times 9:30am and
                      midday on Saturdays during the school term at the Golden
                      Hill Sports Ground just off Kellaway Avenue.
                    </p>
                    <p>
                      U11’s to U16’s all play in local competitive leagues
                      either on Saturday or Sunday mornings.
                    </p>

                    <p>
                      {" "}
                      For more information, please visit the Sonics website:{" "}
                      <a
                        className="has-text-weight-bold"
                        href="http://www.goldenhillsonics.co.uk"
                      >
                        www.goldenhillsonics.co.uk
                      </a>
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
                      <Link
                        className="title is-4 has-text-primary"
                        to="/social/"
                      >
                        Social
                      </Link>
                    </div>
                  </div>
                  <div class="card-image">
                    <figure class="image">
                      <Img
                        fluid={data.pitp.childImageSharp.full}
                        alt="Party in the Park"
                      />
                    </figure>
                  </div>
                  <div class="column"></div>
                  <div class="content">
                    <p>
                      Golden Hill Sports & Social Club has a licensed bar,
                      enabling us to sell alcoholic drinks to our members and
                      guests.
                    </p>
                    <p>
                      {" "}
                      We also run the hugely popular Party in the Park. Party in
                      the Park is a community event that raises money to pay for
                      the upkeep of the field that the community helped to
                      secure.
                    </p>

                    <p>
                      It’s a great event with a variety of stalls and
                      entertainment on offer for all the family.
                    </p>
                    <p>
                      Our venue is also available for hire.{" "}
                      <Link className="has-text-weight-bold" to="/social/venue">
                        More...
                      </Link>
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
      thumb: fluid(maxWidth: 350) {
        ...GatsbyImageSharpFluid
      }
      full: fluid(maxWidth: 1024){
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
