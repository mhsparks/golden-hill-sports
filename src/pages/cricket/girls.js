import React from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";
import Img from "gatsby-image";

const GirlsPage = ({ data }) => {
  return (
    <Layout isCricket>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Women and Girls' Cricket</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs">
            <ul>
              <li>
                <Link to="/cricket/women/">Women</Link>
              </li>
              <li class="is-active has-text-weight-bold">
                <Link to="/cricket/girls/">Girls</Link>
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
                <div class="card-image">
                  <figure class="image">
                    <Img fluid={data.girls1.childImageSharp.fluid} />
                  </figure>
                </div>
              </div>
              <div class="column">
                <div class="card-image">
                  <figure class="image">
                    <Img fluid={data.girls2.childImageSharp.fluid} />
                  </figure>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="card-content">
                <p class="has-text-primary has-text-weight-bold">
                  Girls cricket at Golden Hill
                </p>
                <p>
                  As enthusiastic parents we started Girls cricket in 2016 and​​
                  we have seen the girls really develop as personalities,
                  gaining confidence and leadership through playing cricket.{" "}
                  <br />
                  ​​
                  <br />
                  Girls Cricket at Golden Hill really helps maintain friendships
                  from Junior School age right through to Senior School. ​​​​
                  The cricket​​ encourages girls to be active and enjoy sport
                  and allows them to bond with a fantastic team spirit.​​ We
                  introduce the girls to​​ cricket from year 3 and this through
                  soft ball cricket playing kwik cricket games and exercises. ​​
                  Everyone is involved and there is no kit requirement. ​​ It is
                  all about fun and enjoyment. We provide girls cricket from
                  year 3 right through to Ladies Cricket. ​​​​ At the end of the
                  2019 season we have 75 girls and 20 ladies registered and each
                  year this increases with a new intake of year 3 and 4 girls.
                  <br />
                  <br />
                  <p class="has-text-primary has-text-weight-bold">
                    Registration
                  </p>
                  The registration covers the whole year from winter training
                  which typically starts in late January through to July/August
                  – some years games in September.
                  <br />
                  <br />
                  <p class="has-text-primary has-text-weight-bold">
                    Taster Sessions
                  </p>
                  Taster sessions​​ - anyone joining us for the first time is of
                  course welcome and the first few weeks are free taster
                  sessions. ​​​​ Should you wish to join there is a registration
                  fee in addition to the annual subscription which covers the
                  cost of the coloured kit.
                  <br />
                  <br />
                  <p class="has-text-primary has-text-weight-bold">
                    Waiting List
                  </p>
                  We have adopted a waiting list for new applications where we
                  have a full squad in an age category (tends to be the later
                  age groups). ​​​​ <br />
                  <br />
                  <p class="has-text-primary has-text-weight-bold">
                    Club Policies
                  </p>
                  The club operates within the ECB guidelines set out in the​​
                  ‘Safe Hands – Cricket’s Policy for Safeguarding Children’​​
                  and in accordance with any other relevant guidelines. Full
                  details can be found on www.goldenhillsports.com Our child
                  welfare officer is Tony Huszlicska; who can be contacted on
                  07719 323532 or at{" "}
                  <a
                    class="has-text-weight-bold"
                    href="mailto:anthony383@btinternet.com"
                  >
                    anthony383@btinternet.com
                  </a>
                  <br />
                  <br />
                  <p class="has-text-primary has-text-weight-bold">
                    Giving girls a chance
                  </p>
                  The ethos of the girls cricket at Golden Hill is to give
                  “girls a chance and to encourage participation”. <br />
                  <br />
                </p>
                <br />
              </div>
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
    girls1: file(relativePath: { eq: "girls-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    girls2: file(relativePath: { eq: "girls-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
