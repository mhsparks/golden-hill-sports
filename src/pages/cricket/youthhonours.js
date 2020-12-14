import React from "react";
import Layout from "../../components/layout";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";
import { faFileWord } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const YouthHonoursPage = ({ data }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Golden Hill Cricket Club Honours</h1>
            <h2 class="subtitle is-size-6">
              Formerly known as YMCA Cricket - Founded 1878
            </h2>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li>
                <Link to="/cricket/honours/">Senior Honours</Link>
              </li>
              <li class="is-active">
                <Link to="/cricket/youthhonours/">Youth Honours</Link>
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
                <Link to="/cricket/honours/">Senior Honours</Link>
              </li>
              <li class="is-active">
                <Link to="/cricket/youthhonours/">Youth Honours</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title has-background-primary has-text-white">
                Youth Honours
              </p>
            </header>
          </div>
          <div class="columns">
            <div class="column">
              <div class="table">
                <table class="table is-bordered is-striped is-size-7 is-fullwidth">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Team</th>
                      <th>Competition</th>
                      <th>Honours</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>2010</td>
                      <td>U17s</td>
                      <td>The Colin Mitchell Cup</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2013</td>
                      <td>U11s</td>
                      <td>Dave McCarthy Knockout Cup</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2014</td>
                      <td>U11s</td>
                      <td>The Ray Baker League Cup</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2016</td>
                      <td>U11s</td>
                      <td>GYCL Performance League</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2016</td>
                      <td>U11s</td>
                      <td>Don Brooks Plate</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2016</td>
                      <td>U13s</td>
                      <td>Frank Benner Memorial Knockout Cup</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2016</td>
                      <td>U13s</td>
                      <td>GYCL Performance League</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2016</td>
                      <td>U15s</td>
                      <td>Joe Roden League Cup</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2017</td>
                      <td>U11s</td>
                      <td>Dave McCarthy Knockout Cup</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2017</td>
                      <td>U11s</td>
                      <td>Don Brooks Plate</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2017</td>
                      <td>U11s</td>
                      <td>Gloucestershire Lady Taverners</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2018</td>
                      <td>U11s</td>
                      <td>The Ray Baker League Cup</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2018</td>
                      <td>U11s</td>
                      <td>Dave McCarthy Knockout Cup</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2018</td>
                      <td>U13s</td>
                      <td>Frank Benner Memorial Knockout Cup</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2018</td>
                      <td>U15s</td>
                      <td>Chris Boulton Knockout Cup</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2018</td>
                      <td>U15s</td>
                      <td>Joe Roden League Cup</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2018</td>
                      <td>U15s</td>
                      <td>Vitality National Cup Bristol</td>
                      <td>Champions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="column is-half">
              {" "}
              <div class="table-container">
                <table class="table is-bordered is-striped is-size-7 is-fullwidth">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Team</th>
                      <th>Competition</th>
                      <th>Honours</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>2018</td>
                      <td>U15s</td>
                      <td>Vitality National Cup Gloucestershire</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2018</td>
                      <td>U15s</td>
                      <td>Vitality National Cup South of England</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2018</td>
                      <td>U17s</td>
                      <td>David Allen Knockout Cup</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2019</td>
                      <td>U11s</td>
                      <td>The Ray Baker League Cup</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2019</td>
                      <td>U11s</td>
                      <td>Don Brooks Plate</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2019</td>
                      <td>U13s</td>
                      <td>Frank Benner Memorial Knockout Cup</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2019</td>
                      <td>U13s</td>
                      <td>Vitality National Cup Bristol</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2019</td>
                      <td>U13s</td>
                      <td>GYCL Performance League</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2019</td>
                      <td>U15s</td>
                      <td>Joe Roden League Cup</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2019</td>
                      <td>U17s</td>
                      <td>Colin Mitchell League Cup</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2019</td>
                      <td>U19s</td>
                      <td>Gloucestershire County T20</td>
                      <td>Runners Up</td>
                    </tr>
                    <tr>
                      <td>2019</td>
                      <td>U11s</td>
                      <td>GCB Girls South</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2020</td>
                      <td>U11s</td>
                      <td>BYCL Raise the Bat Trophy</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2020</td>
                      <td>U15s</td>
                      <td>BYCL Raise the Bat Trophy</td>
                      <td>Champions</td>
                    </tr>
                    <tr>
                      <td>2020</td>
                      <td>U17s</td>
                      <td>BYCL Raise the Bat Trophy</td>
                      <td>Runners Up</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card">
                <ul>
                  <li class="panel-block">
                    <span class="icon has-addons is-left">
                      <FontAwesomeIcon icon={faFileWord} aria-hidden="true" />
                    </span>
                    <a
                      href="https://storage.googleapis.com/ghs-static/docx/ClubHonours.docx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      &nbsp; Club Honours (download)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="columns">
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title is-size-7">
                    2020 Winners - U12 Girls
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
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title is-size-7">
                    2019 Winners - U11 Girls
                    <br />
                    Gloucestershire County League
                    <br />
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
                  <p class="card-header-title is-size-7">
                    2017 Winners - U11 Girls
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
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title is-size-7">
                    2020 Winners - U11 Boys
                    <br />
                    BYCL Raise the Bat Trophy
                    <br />
                  </p>
                </header>
                <figure class="image">
                  <Img fluid={data.u11s2020.childImageSharp.fluid} />
                </figure>
              </div>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </section>
    </Layout>
  );
};

export default YouthHonoursPage;
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
    u11s2020: file(relativePath: { eq: "u11-2020.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
