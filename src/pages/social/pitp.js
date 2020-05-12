import Img from "gatsby-image";
import React from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";

const PitpPage = ({ data }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Party in the Park</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li class="is-active has-text-weight-bold">
                <Link to="/social/pitp/">Overview</Link>
              </li>
              <li>
                <Link to="/social/pitpgallery/">Gallery</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-small is-centered is-boxed is-hidden-desktop is-hidden-tablet">
            <ul>
              <li class="is-active has-text-weight-bold">
                <Link to="/social/pitp/">Party in the Park</Link>
              </li>
              <li>
                <Link to="/social/pitpgallery/">Gallery</Link>
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
                  fluid={data.pitplogo.childImageSharp.fluid}
                  alt="Party in the Park poster"
                />
              </figure>
            </div>

            <div class="card-content">
              <p>
                <p class="has-text-weight-bold has-text-primary">
                  What is Party in the Park?
                </p>
                For those of you that don’t know about PITP, it’s a community
                event that raises money to pay for the upkeep of the field that
                the community helped to secure.
                <br />
                It’s a great event with a variety of stalls and entertainment on
                offer for all the family. We print 10,000 programmes that are
                hand delivered to homes in the local area and thousands of
                people come along and enjoy the day which is open to everyone.
                <br />
                <br /> If you know of anyone who would like to be a stall holder
                please ask them to contact us as the event continues to grow in
                stature year on year.
                <br />
                <br />
                <p class="has-text-weight-bold has-text-primary">
                  How can you help?
                </p>
                Party in the Park is our major fund raising event of the year
                and allows us to continue to invest in grass-roots football and
                cricket. This event takes a tremendous amount of effort and
                co-ordination.
                <br />
                <br />
                All Golden Hill members can help by doing the following things:
                <br />
                <br />
                <ul class="list-spacing">
                  <li>
                    <span class="has-text-weight-bold has-text-primary">
                      Donate&nbsp;
                    </span>
                    cakes - bottles - books - childrens' quality clothes and
                    toys
                  </li>
                  <li>
                    <span class="has-text-weight-bold has-text-primary">
                      Sell&nbsp;
                    </span>
                    just 20 raffle tickets
                  </li>
                  <li>
                    <span class="has-text-weight-bold has-text-primary">
                      Tell&nbsp;
                    </span>
                    your friends and family about the event.
                  </li>
                  <li>
                    <span class="has-text-weight-bold has-text-primary">
                      Give&nbsp;
                    </span>
                    some of your time: either on the day, or for set up and tidy
                    up on Friday or Sunday. Or would you like to be part of the
                    organising committee?
                  </li>
                </ul>
                <br />
                <p class="has-text-weight-bold has-text-primary">Contact us</p>
                If you would like a stall at PITP, or would like to be involved,
                please contact us using the contact form link above.
              </p>
              <br />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PitpPage;

export const query = graphql`
  query {
    pitplogo: file(relativePath: { eq: "pitp-logoCrop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
