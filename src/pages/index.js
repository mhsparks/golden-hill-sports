import React from "react";
import Layout from "../components/layout";

import cricket2 from "../images/cricket-2.png";
import pavillion from "../images/pavillion.jpg";
import headerlogo from "../images/headerlogo.png";
import sonicsteam from "../images/sonics-team.jpg";
import pitp from "../images/pitp.jpg";
import SEO from "../components/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const IndexPage = () => {
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
          <div class="columns">
            <div class="column is-half">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-5by4">
                    <img src={pavillion} alt="Pavillion" />
                  </figure>
                </div>
              </div>
            </div>
            <div class="column is-half">
              <div class="content">
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
                </p>
                <section class="section">
                  <div class="buttons has-addons is-left">
                    <button class="button is-primary">
                      <span class="icon">
                        <FontAwesomeIcon icon={faLocationArrow} />
                      </span>
                      <span>
                        <strong>Find Us</strong>
                      </span>
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <section>
            <div class="columns">
              <div class="column">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-3by2">
                      <img src={cricket2} alt="Cricket" />
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
                        <p class="title is-4">Golden Hill Cricket</p>

                        <p class="subtitle is-6">
                          <a href="https://twitter.com/GoldenHillCC">
                            @GoldenHillCC
                          </a>
                        </p>
                      </div>
                    </div>

                    <div class="content">
                      <p>
                        Golden Hill CC runs five Saturday senior sides in the
                        Bristol & District Cricket League and have a youth
                        policy which rivals any local club; it is one of the
                        biggest and most successful in the region. <br />
                        <br /> We run a comprehensive youth programme for boys
                        with opportunities to progress through the sides, along
                        with a successful women’s side and a hugely popular
                        girls programme.
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
                      <img src={sonicsteam} alt="Sonics" />
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
                        <p class="title is-4">Golden Hill Sonics</p>
                        <p class="subtitle is-6 has-text-primary">
                          <a href="https://twitter.com/ghsonics">@ghsonics</a>
                        </p>
                      </div>
                    </div>

                    <div class="content">
                      <p>
                        Golden Hill Sonics is a parent run football club, which
                        welcomes boys and girls in school years 2 to 11. The
                        club holds the FA Charter Standard Club accreditation.
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
                      <img src={pitp} alt="Party in the Park" />
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
                        <p class="title is-4">Golden Hill Social</p>
                        <p class="subtitle is-6">
                          <a href="https://twitter.com/GoldenHillSport">
                            @GoldenHillSport
                            <span class="icon">
                              <span class="fa-stack">
                                <i class="fab fa-twitter"></i>
                              </span>
                            </span>
                          </a>
                        </p>
                      </div>
                    </div>

                    <div class="content">
                      <p>
                        Golden Hill Sports & Social Club has a fully licensed
                        bar, enabling us to sell alcoholic drinks to our members
                        and guests. We also run the hugely popular Party in the
                        Park.
                        <br />
                        <br />
                        For those of you that don’t know about PITP, it’s a
                        community event that raises money to pay for the upkeep
                        of the community owned YMCA field at Golden Hill. It’s a
                        great event with a variety of stalls and entertainment
                        on offer for all the family.
                        <br />
                        <br />
                        If you know of anyone who would like to be a stall
                        holder please ask them to contact us as the event
                        continues to grow in stature year on year. .
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
