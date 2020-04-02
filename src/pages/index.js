import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

import cricket2 from "../images/cricket-2.png";

import headerlogo from "../images/headerlogo.png";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <div class="container is-fluid">
        <section>
          <div class="columns">
            <div class="column is-half">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-3by2">
                    <img src={cricket2} />
                  </figure>
                </div>
              </div>
            </div>
            <div class="column is-half">
              <div class="content">
                <p class="title">
                  Welcome to Golden Hill Sports and Social Club
                </p>
                <p>
                  <strong>Golden Hill Sports & Social Club</strong> is a
                  registered sports charity which incorporates Golden Hill
                  Cricket Club, Golden Hill Sonics Junior Football Club and a
                  host of community based social groups.
                  <br />
                  <br />
                  The club is based on Wimbledon Road in Henleaze and has been
                  landowner of the much loved sports facility since its sale by
                  the national YMCA charity in 2008.
                  <br />
                  <br />
                  If you are interested in joining Golden Hill Sports & Social
                  Club or want any more information, please do not hesitate to
                  contact us.
                  <div class="container is-fluid">
                    <div class="buttons has-addons is-right">
                      <a class="button is-primary">
                        <strong>Contact Us</strong>
                      </a>
                    </div>
                  </div>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="columns">
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-3by2">
                    <img src={cricket2} alt="Placeholder image" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src={headerlogo} alt="Placeholder image" />
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">Golden Hill Cricket</p>

                      <p class="subtitle is-6">
                        <a href="https://twitter.com/GoldenHillCC">
                          @GoldenHillCC{" "}
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
                      <br /> Come and join our friendly and welcoming club;
                      membership for adults is £50 and for youth team players
                      £40. Match fees are £10.00/£5.00. <br />
                      Click here for details of how to contact us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-3by2">
                    <img src={cricket2} alt="Placeholder image" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src={headerlogo} alt="Placeholder image" />
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">Golden Hill Sonics</p>
                      <p class="subtitle is-6">@johnsmith</p>
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
                      Hill Sports Ground just off Kellaway Ave, Golden Hill,
                      Bristol.
                      <br />
                      U11’s to U16’s all play in local competitive leagues
                      either on Saturday or Sunday mornings.
                      <br />
                      <br />
                      For more information on Golden Hill Sonics Football Club
                      please visit their website www.goldenhillsonics.co.uk .
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-3by2">
                    <img src={cricket2} alt="Placeholder image" />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img src={headerlogo} alt="Placeholder image" />
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="title is-4">Golden Hill Social</p>
                      <p class="subtitle is-6">@johnsmith</p>
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
                      Hill Sports Ground just off Kellaway Ave, Golden Hill,
                      Bristol.
                      <br />
                      U11’s to U16’s all play in local competitive leagues
                      either on Saturday or Sunday mornings.
                      <br />
                      <br />
                      For more information on Golden Hill Sonics Football Club
                      please visit their website www.goldenhillsonics.co.uk .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
