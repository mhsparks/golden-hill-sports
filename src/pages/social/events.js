import React from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

const EventsPage = ({ data }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Upcoming Events</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li class="is-active">
                <Link to="/social/events/">Upcoming Events</Link>
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
                <Link to="/social/events/">Upcoming Events</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <div class="card-header">
                <p class="card-header-title">Saturday 14th September</p>
              </div>
              <div class="box">
                <article class="media">
                  <div class="media-left">
                    <figure class="image is-128x128">
                      <Img
                        fluid={data.quiz.childImageSharp.fluid}
                        alt="Quiz Night"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Quiz Night</strong>
                        <br />
                        <small>7pm onwards</small>
                        <br />
                        <br />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean efficitur sit amet massa fringilla
                          egestas. Nullam condimentum luctus turpis.
                        </p>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div class="card-header">
                <p class="card-header-title">Saturday 14th September</p>
              </div>
              <div class="box">
                <article class="media">
                  <div class="media-left">
                    <figure class="image is-128x128">
                      <Img
                        fluid={data.trophy.childImageSharp.fluid}
                        alt="Presentation Night"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Quiz Night</strong>
                        <br />
                        <small>7pm onwards</small>
                        <br />
                        <br />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean efficitur sit amet massa fringilla
                          egestas. Nullam condimentum luctus turpis.
                        </p>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div class="card-header">
                <p class="card-header-title">Saturday 14th September</p>
              </div>
              <div class="box">
                <article class="media">
                  <div class="media-left">
                    <figure class="image is-128x128">
                      <Img
                        fluid={data.curry.childImageSharp.fluid}
                        alt="Curry Night"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Curry Night</strong>
                        <br />
                        <small>7pm onwards</small>
                        <br />
                        <br />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean efficitur sit amet massa fringilla
                          egestas. Nullam condimentum luctus turpis.
                        </p>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div class="card-header">
                <p class="card-header-title">Saturday 14th September</p>
              </div>
              <div class="box">
                <article class="media">
                  <div class="media-left">
                    <figure class="image is-128x128">
                      <Img
                        fluid={data.racing.childImageSharp.fluid}
                        alt="Quiz Night"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Race Night</strong>
                        <br />
                        <small>7pm onwards</small>
                        <br />
                        <br />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean efficitur sit amet massa fringilla
                          egestas. Nullam condimentum luctus turpis.
                        </p>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div class="column">
              <iframe
                title="GHS Social Calendar"
                src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FLondon&amp;src=c29jaWFsQGdvbGRlbmhpbGxzcG9ydHMuY29t&amp;color=%23D81B60"
                style={{
                  border: 0,
                  width: "100%",
                  height: 600,
                  frameborder: 0,
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container"></div>
      </section>
    </Layout>
  );
};

export default EventsPage;

export const query = graphql`
  query {
    quiz: file(relativePath: { eq: "quizhome.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    curry: file(relativePath: { eq: "curry-night.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    racing: file(relativePath: { eq: "race-night.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    trophy: file(relativePath: { eq: "trophy.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
