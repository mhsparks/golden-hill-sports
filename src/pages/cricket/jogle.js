import React from "react";
import Layout from "../../components/layout";
import Social from "../../components/social";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const JoglePage = ({ data }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Club News</h1>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="card">
            <div class="columns">
              <div class="column is-three-quarters">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Stuart Priscott's JOGLE bicycle challenge
                    </p>
                  </header>
                  <div class="card-content">
                    <p class="title is-size-5">
                      Golden Hill CC Youth Coach set to become oldest person
                      with Cystic Fibrosis to tackle the UK's greatest cycle
                      challenge
                      <br />
                      <br />
                      <span class="is-size-7 has-text-weight-bold">
                        Tues. 29th June 2021
                      </span>
                    </p>

                    <p>
                      This July, one of Golden Hill CC’s youth coaches, Stuart
                      Priscott, will become the oldest person living with Cystic
                      Fibrosis to complete the John O’ Groats to Lands End
                      (JOGLE) bicycle challenge.
                      <br />
                      <br />
                      Setting off 11 days after turning 50, he and two friends –
                      Matt Theedom and Scott Chappell – will cycle the gruelling
                      874 miles to Lands End in a bid to raise £50,000 on behalf
                      of two charities: The Cystic Fibrosis Trust and Chance to
                      Shine, an organisation that promotes cricket in schools
                      and communities.
                      <br />
                      <br />
                      The three cyclists, who all work within cricket in the
                      south west of England, have come together to honour the
                      memory of Stuart’s sister, Jo, another CF sufferer, who
                      died in late 2018 aged 50.
                      <br />
                      <br />
                      <div class="columns">
                        <div class="column">
                          <div class="card">
                            <div class="card-image">
                              <figure class="image">
                                <Img
                                  fluid={data.jogle1.childImageSharp.fluid}
                                />
                              </figure>
                            </div>
                          </div>
                        </div>

                        <div class="column">
                          <div class="card">
                            <div class="card-image">
                              <figure class="image">
                                <Img
                                  fluid={data.jogle2.childImageSharp.fluid}
                                />
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                      Stuart, who helps to coach the GHCC Girl’s U13s team,
                      said:
                      <br />
                      <br />
                      <span class="is-italic">
                        “This is a challenge unthinkable for most of my life.
                        Over the past 50 years I have benefitted from amazing
                        medical research and discoveries, excellent health care
                        from the NHS and supportive family and friends. I have
                        experienced first-hand how new drugs and treatments can
                        transform people’s lives.
                        <br />
                        <br />
                        Jo was a kind, loving and inspirational sister and
                        friend. As a family we were devastated by her death,
                        which felt untimely so soon after a lung transplant she
                        had waited so long for. It is the way in which she led
                        her life with such passion and vigour that has driven me
                        to take this challenge in my 50th year."
                      </span>
                      <br />
                      <br />
                      Explaining why he is raising money for the two charities,
                      he continued:
                      <br />
                      <br />
                      <span class="is-italic">
                        “In learning to live with CF I have realised it is not
                        enough to be alive – life is for living and everyone
                        needs a purpose. I was lucky from an early age that I
                        found cricket as an outlet to stay active, meet people
                        and develop friendships, and strive to achieve. In my
                        role at Chance to Shine, and when helping out with the
                        Golden Hill girl’s Under 13s, I see up close the
                        positive impact sport can have on young people and the
                        way it can be the spur to unlock potential.”
                      </span>
                      <br />
                      <br />
                      The JOGLE challenge is all the more remarkable for the
                      fact that Stuart did not own a bike until his 49th
                      birthday, when wanting to give himself the best chance of
                      staying well during the Covid outbreak, he embarked on a
                      new fitness regime. After a long career in cricket
                      coaching and administration – which also included two
                      years as a professional player with Somerset County
                      Cricket Club – he is set to tackle the hardest physical
                      challenge of his life.
                      <br />
                      <br />
                      Joining Stuart, Matt and Scott on the trip will be
                      colleagues, his brother Neil (also a Golden Hill girl’s
                      coach), and friends from cricket, helping to raise money
                      so others can benefit from both improved medicines and
                      life-enhancing sporting opportunities.
                      <br />
                      <br />
                      To read Stuart’s story and to donate please visit:
                      <br />
                      <span class="jogle-link">
                        <a
                          href="https://uk.virginmoneygiving.com/StuartPriscott"
                          class="has-text-weight-bold"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://uk.virginmoneygiving.com/StuartPriscott
                        </a>
                      </span>
                    </p>
                    <br />
                    <br />
                    <div class="columns">
                      <div class="column">
                        <p>
                          <span class="has-text-weight-bold">
                            Cystic fibrosis
                          </span>{" "}
                          (CF) is a life-limiting genetic condition affecting
                          more than 10,000 people across the UK. It affects the
                          lungs and digestive system and can cause chronic
                          infections and reduced lung function. Currently, half
                          of those with CF will not live past age 41. The Cystic
                          Fibrosis Trust is fighting for a brighter future for
                          people with CF and their families by funding
                          cutting-edge research, driving up standards of care
                          and supporting people with the condition and their
                          loved ones every step of the way.
                          <br />
                          <br />
                          <span class="has-text-weight-bold">
                            Chance to Shine
                          </span>{" "}
                          is a national charity on a mission to spread the power
                          of cricket throughout schools and communities. The
                          charity takes cricket to new places and uses it to
                          ignite new passions, teach vital skills, unite diverse
                          groups, and educate young people from Cornwall to
                          County Durham. Since 2005, Chance to Shine has given
                          over 5 million boys and girls in more than 10,000
                          state schools and community projects, the opportunity
                          to play, learn and develop through cricket, improving
                          their personal, social and mental well-being.
                          <br />
                          <br />
                        </p>
                      </div>
                      <div class="column">
                        <div class="card">
                          <div class="card-image">
                            <figure class="image">
                              <Img fluid={data.jogle3.childImageSharp.fluid} />
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column">
                <Social></Social>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default JoglePage;

export const query = graphql`
  query {
    jogle1: file(relativePath: { eq: "Jogle-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jogle2: file(relativePath: { eq: "Jogle-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jogle3: file(relativePath: { eq: "Jogle-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
