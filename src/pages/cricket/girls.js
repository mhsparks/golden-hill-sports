import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../../components/layout";

const GirlsPage = ({ data }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Girls Youth Cricket</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li class="is-active">
                <Link to="/cricket/girls/">Home</Link>
              </li>
              <li>
                <Link to="/cricket/girlshonours/">Honours</Link>
              </li>
              <li>
                <Link to="/cricket/girlsgallery/">Gallery</Link>
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
                <Link to="/cricket/girls/">Home</Link>
              </li>
              <li>
                <Link to="/cricket/girlshonours/">Honours</Link>
              </li>
              <li>
                <Link to="/cricket/girlsgallery/">Gallery</Link>
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
              <div class="column">
                <figure class="image">
                  <Img fluid={data.girlshome2.childImageSharp.fluid} />
                </figure>
              </div>

              <div class="column">
                <figure class="image">
                  <Img fluid={data.girlshome1.childImageSharp.fluid} />
                </figure>
              </div>

              <div class="column">
                <figure class="image">
                  <Img fluid={data.girlshome4.childImageSharp.fluid} />
                </figure>
              </div>
            </div>

            <div class="card-content">
              <p class="has-text-primary has-text-weight-bold">
                Girls cricket at Golden Hill
              </p>
              <p>
                As enthusiastic parents we started Girls cricket in 2016 and​​
                we have seen the girls really develop as personalities, gaining
                confidence and leadership through playing cricket. <br />
                ​​
                <br />
                Girls Cricket at Golden Hill really helps maintain friendships
                from Junior School age right through to Senior School. ​​​​ The
                cricket​​ encourages girls to be active and enjoy sport and
                allows them to bond with a fantastic team spirit.​​ We introduce
                the girls to​​ cricket from year 3 and this through soft ball
                cricket playing kwik cricket games and exercises. ​​ Everyone is
                involved and there is no kit requirement. ​​ It is all about fun
                and enjoyment. We provide girls cricket from year 3 right
                through to Ladies Cricket. ​​​​ At the end of the 2019 season we
                had 75 girls and 20 ladies registered and each year this
                increases with a new intake of year 3 and 4 girls.
                <br />
                <br />
                <p class="has-text-primary has-text-weight-bold">
                  Registration
                </p>
                The registration covers the whole year from winter training
                which typically starts in late January through to July/August –
                some years games in September.
                <br />
                <a
                  href="https://docs.google.com/forms/d/1z8stT2J0E-bh_EQy9k3--LrLlJHfLkgxra-4bvd40SE/viewform?edit_requested=true"
                  alt="Golden Hill Girls Cricket Registration Form 2020"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>Golden Hill Girls Cricket Registration Form 2020</u>
                </a>
                <br />
                <br />
                <p class="has-text-primary has-text-weight-bold">
                  Taster Sessions
                </p>
                Taster sessions​​ - anyone joining us for the first time is of
                course welcome and the first few weeks are free taster sessions.
                ​​​​ Should you wish to join there is a registration fee in
                addition to the annual subscription which covers the cost of the
                coloured kit.
                <br />
                <br />
                <p class="has-text-primary has-text-weight-bold">
                  Waiting List
                </p>
                We have adopted a waiting list for new applications where we
                have a full squad in an age category (tends to be the later age
                groups). ​​​​ <br />
                <br />
                <p class="has-text-primary has-text-weight-bold">
                  Club Policies
                </p>
                The club operates within the ECB guidelines set out in the​​
                ‘Safe Hands – Cricket’s Policy for Safeguarding Children’​​ and
                in accordance with any other relevant guidelines. Full details
                can be found on www.goldenhillsports.com Our child welfare
                officer is Tony Huszlicska; who can be contacted on 07719 323532
                or at{" "}
                <a
                  class="has-text-weight-bold"
                  href="mailto:anthony383@btinternet.com"
                  rel="noopener noreferrer"
                >
                  anthony383@btinternet.com
                </a>
                <br />
                <br />
                <p class="has-text-primary has-text-weight-bold">
                  How to find us
                </p>
                <span class="has-text-primary">Indoor training</span>​​ –
                Orchard School, Filton Road, Bristol, BS7 0XZ.
                <br />
                <span class="has-text-primary">
                  Outdoor training and home games
                </span>
                ​​ - Golden Hill Sports Ground, Wimbledon Road, Bristol, BS6
                7YA.
                <br />
                Please note that there is​​ also an entrance gate at the top of
                Henleaze Park Drive.
                <br />
                <br />
                <p class="has-text-primary has-text-weight-bold">
                  Giving girls a chance
                </p>
                The ethos of the girls cricket at Golden Hill is to give “girls
                a chance and to encourage participation”. <br />
                <br />
                <p class="has-text-primary has-text-weight-bold">Join us</p>
                For any queries about the girls youth set-up or if you
                interested in joining, please contact Chris Drew on{" "}
                <a
                  class="has-text-weight-bold"
                  href="mailto:chris.drew333@icloud.com"
                  rel="noopener noreferrer"
                >
                  chris.drew333@icloud.com
                </a>
              </p>

              <br />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GirlsPage;

export const query = graphql`
  query {
    girlshome1: file(relativePath: { eq: "girlshome-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    girlshome2: file(relativePath: { eq: "girlshome-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    girlshome3: file(relativePath: { eq: "girlshome-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    girlshome4: file(relativePath: { eq: "girlshome-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
