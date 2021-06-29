import React from "react";
import Layout from "../../components/layout";
import Social from "../../components/social";
import { Link, graphql } from "gatsby";

const NewsPage = () => {
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
                      Stuart Priscott's Jogle bicycle challenge
                    </p>
                  </header>
                  <div class="card-content">
                    <p class="title is-size-5">
                      Golden Hill CC Youth Coach set to become oldest person
                      with Cystic Fibrosis to tackle the UK's greatest cycle
                      challenge
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
                      <Link
                        className="has-text-weight-bold"
                        to="/cricket/jogle/"
                      >
                        Full Story...
                      </Link>
                    </p>
                  </div>
                </div>

                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">In Memoriam</p>
                  </header>
                  <div class="card-content">
                    <p>
                      We are very sad to announce that former player John Tanner
                      died earlier this month at the age of 88. <br />
                      <br />
                      John was a very active member of the club in the 60s, 70s
                      & 80s both on & off the field. At various times he
                      captained the 2nds, acted as social secretary & ran one of
                      the first if not the first ever youth team.
                      <br />
                      <br />
                      His many contributions were recognised in 1975 when was
                      presented with the clubs highest award, the Michael Harris
                      Memorial trophy.
                      <br />
                      <br />
                      Both John & his wife Jacky, who survives him & who also
                      provided considerable help & support to the club over many
                      years, will be remembered with great fondness & affection
                      by all those that knew them.
                      <br />
                      <br />
                      Our condolences go out to Jacky & son Mark, a member of
                      that youth team & now an accomplished musician!
                      <br />
                      <br />
                      <span class="is-size-7 is-italic">
                        Tues. 20th April 2021
                      </span>
                    </p>
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
export default NewsPage;
