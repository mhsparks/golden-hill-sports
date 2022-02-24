import Img from "gatsby-image";
import React from "react";

import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";

const PitpPage = ({ data }) => {
  // Change to correct date when known
  const eventDate = new Date("2021-09-11");
  const now = new Date();
  const days = Math.ceil((eventDate - now) / (1000 * 60 * 60 * 24));

  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column">
                <h1 class="title is-size-4">Party in the Park</h1>
              </div>
              <div class="column">
                <h2 class="title is-size-4">10 September 2022</h2>
              </div>
            </div>
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
          <div class="tabs is-small is-boxed is-hidden-desktop is-hidden-tablet">
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
                  fluid={data.pitpaerial2.childImageSharp.fluid}
                  alt="Party in the Park poster"
                />
              </figure>
            </div>
            <div class="card-content">
              <p>
                <p class="has-text-weight-bold has-text-primary">
                  When is Party in the Park 2022?
                </p>
                This year's Party in the Park is set to take place on{" "}
                <span class="has-text-weight-bold">
                  Saturday 10th September.
                </span>
                {/* , that's only{" "}
                <span class="has-text-weight-bold">
                  {days > 1
                    ? `${days} days away!`
                    : days === 1
                    ? `PITP 2021 in ${days} day`
                    : null}
                </span> */}
                <br />
                <br />
                <p class="has-text-weight-bold has-text-primary">
                  What is Party in the Park?
                </p>
                <p>
                  For those of you that don’t know about PITP, it’s a community
                  event that raises money to pay for the upkeep of our Sports
                  field that the community helped to secure, equipment for the
                  cricket and football teams and maintenance of the social
                  facilities for all the community.
                </p>
                <br />
                <p>
                  PITP is our major fundraising event of the year so we like to
                  put everything into it! It’s a great event with a variety of
                  food outlets, a bar, stalls and entertainment on offer for all
                  the family. We print 10,000 programmes that are hand delivered
                  to homes in the local area and thousands of people come along
                  and enjoy the day which is open to everyone.
                  <br />
                  <br /> Previously we have had 4000+ people through the gates
                  during the day so it is a great chance for the whole community
                  to have fun together and raise money for the club.
                </p>
                <br />
                <p class="has-text-weight-bold has-text-primary">
                  How can you help?
                </p>
                <p>
                  This event takes a tremendous amount of effort and
                  co-ordination to put on, so everyone's help is hugely
                  important.
                  <br />
                  <br />
                  All Golden Hill members can help by doing the following
                  things:
                  <br />
                  <br />
                  <ul class="list-spacing pl-4">
                    <li>
                      <span class="has-text-weight-bold has-text-primary">
                        Donate&nbsp;
                      </span>
                      cakes, bottles, books and children's quality clothes and
                      toys
                    </li>
                    <li>
                      <span class="has-text-weight-bold has-text-primary">
                        Sell&nbsp;
                      </span>
                      raffle tickets
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
                      some of your time: either on the day, or for set up and
                      tidy up on Friday or Sunday. Or would you like to be part
                      of the organising committee?
                    </li>
                  </ul>
                </p>
                <br />
                <p>
                  Even if you are not a member, we would love you to bring your
                  stall, donate a raffle prize or volunteer to help in other
                  ways.
                </p>
                <br />
                <p class="has-text-weight-bold has-text-primary">Contact us</p>
                If you would like to know more about any of this, please{" "}
                <Link to="/social/contact/">Contact Us.</Link>
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
    pitpaerial2: file(relativePath: { eq: "pitp-aerial2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
