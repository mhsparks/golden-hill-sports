import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../../components/layout";

const JuniorPage = ({ data }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Boys Youth Cricket</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li class="is-active">
                <Link to="/cricket/junior/">Home</Link>
              </li>
              <li>
                <Link to="/cricket/juniorhonours/">Honours</Link>
              </li>
              <li>
                <Link to="/cricket/juniorgallery/">Gallery</Link>
              </li>
              <li>
                <a
                  href="https://goldenhill.play-cricket.com/Teams"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Matches
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-small is-boxed is-hidden-desktop is-hidden-tablet">
            <ul>
              <li class="is-active">
                <Link to="/cricket/junior/">Home</Link>
              </li>
              <li>
                <Link to="/cricket/juniorhonours/">Honours</Link>
              </li>
              <li>
                <Link to="/cricket/juniorgallery/">Gallery</Link>
              </li>
              <li>
                <a
                  href="https://goldenhill.play-cricket.com/Teams"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Matches
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="card">
            <div class="columns">
              <div class="column is-two-thirds">
                <div class="card-content">
                  <p class="has-text-primary has-text-weight-bold is-size-4">
                    Golden Hill Boys Youth Cricket
                  </p>
                  <br />
                  <p class="has-text-primary has-text-weight-bold">
                    Our set-up
                  </p>

                  <p>
                    The youth set-up of Golden Hill CC is one of the largest and
                    well established in the county. <br />
                    Our boys range from 8 to 19 years of age and we cater to
                    players with varying ability by focusing on specific needs
                    like developing their cricketing skills, ensuring they enjoy
                    the game, playing competitive cricket or a combination of
                    the above.
                    <br />
                    <br />
                    We supply top quality players to the Gloucestershire County
                    and District age group set up. We have had excellent
                    representation during winter training programmes as well as
                    the summer squads playing county and district cricket.
                    <br />
                    Our approach brings success to the club as, on the one hand,
                    we win trophies making the club proud and on the other, we
                    focus on developing players so they realise their potential.
                    <br />
                    <br />
                    <p class="has-text-primary has-text-weight-bold">
                      Our teams
                    </p>
                    We have a number of teams from u11s to u17s playing for the
                    Bristol Youth Cricket League (BYCL). We also participate in
                    the Gloucestershire Youth Cricket League (GYCL) with a team
                    each at u11, u13, u15 as well as their T20 competitions at
                    u16 and u19 age groups.
                    <br />
                    Our youth players are encouraged to play adult cricket from
                    the age of 13. We have five adult teams playing league
                    cricket on Saturdays and a number of youth players play
                    regularly, with many talented ones playing 1st/2nd team
                    cricket too.
                    <br />
                    <br />
                    <p class="has-text-primary has-text-weight-bold">
                      Training & Season
                    </p>
                    Each year, we run a robust indoor winter training programme
                    from January to March where we prepare our players for the
                    season focussing on batting, bowling and fielding skills. We
                    have ECB qualified coaches (Level 2 and 2.5s) supported by
                    adult team players and dedicated parents who help run our
                    youth set up. We also employ an overseas coach to help all
                    boys, girls and adult players during the season.
                    <br />
                    The league/cup season starts during April and goes on till
                    July, with semi finals/finals in August. Each age group
                    trains on a specific evening at the club – U10s & 11s train
                    on Mondays, u12s & 13s on Thursdays and u14s & u15s on
                    Fridays and the age groups above 15 train with adults on
                    Tuesday evenings.
                    <br />
                    <br />
                    <p class="has-text-primary has-text-weight-bold">Join Us</p>
                    We are a diverse club and welcome everyone to be part of
                    this thriving and successful setup. As we are oversubscribed
                    at the u11 age group, your son may have to be on the waiting
                    list for a little while before joining the club – we will,
                    however, do our best to get your son in at the earliest
                    opportunity. <br />
                    For any queries about the youth set-up or if interested in
                    joining at any age group, please contact Razi Ahmed,
                    Director of Youth Cricket on{" "}
                    <a
                      class="has-text-weight-bold"
                      href="mailto:raziahmed01@hotmail.com"
                    >
                      raziahmed01@hotmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div class="column">
                <div class="card">
                  <div class="card-image">
                    <figure class="image">
                      <Img fluid={data.youthhome1.childImageSharp.fluid} />
                    </figure>
                  </div>
                </div>

                <div class="column"></div>

                <div class="card">
                  <div class="card-image">
                    <figure class="image">
                      <Img fluid={data.youthhome2.childImageSharp.fluid} />
                    </figure>
                  </div>
                </div>

                <div class="column"></div>

                <div class="card">
                  <div class="card-image">
                    <figure class="image">
                      <Img fluid={data.youthhome3.childImageSharp.fluid} />
                    </figure>
                  </div>
                </div>
                <div class="column"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default JuniorPage;

export const query = graphql`
  query {
    youthhome1: file(relativePath: { eq: "youth-home-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2688) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    youthhome2: file(relativePath: { eq: "youth-home-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2688) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    youthhome3: file(relativePath: { eq: "youth-home-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2688) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
