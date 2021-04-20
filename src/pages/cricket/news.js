import React from "react";
import Layout from "../../components/layout";
import Social from "../../components/social";

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
