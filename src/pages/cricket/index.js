import React from "react";
import Layout from "../../components/cricketlayout";
import CricketHome from "../../images/cricket-home.jpg";

const CricketPage = () => {
  return (
    <Layout>
      <div class="container">
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-4">Golden Hill Cricket Club</h1>
            </div>
          </div>
        </section>

        <div class="card">
          <div class="card-image">
            <figure class="image is-3by1">
              <img src={CricketHome} alt="Placeholder" />
            </figure>
          </div>
          <div class="container">
            <section class="section">
              <div class="content">
                <p>
                  Welcome to <strong>Golden Hill Cricket Club</strong>.<br />
                  <br />
                  We are located about 3 miles north of Bristol city centre in a
                  pleasant residential area.
                  <br />
                  <br />
                  With two pitches, we run five Saturday senior sides in the
                  Bristol & District Cricket League and have a youth policy
                  which rivals any local club; it is one of the biggest and most
                  successful in the region.
                  <br />
                  <br /> In addition the club also puts out a midweek XI playing
                  T20 matches on summer evenings, and an indoor side which
                  competes in the Bristol Indoor Cricket League during the
                  winter months. <br />
                  <br />
                  We run a comprehensive youth programme for boys with
                  opportunities to progress through the sides, along with a
                  successful women’s side and a hugely popular girls programme.
                  So we probably have a team to suit your ability, age or
                  gender. <br />
                  <br />
                  Come and join our friendly and welcoming club; membership for
                  adults is £50 and for youth team players £40. Match fees are
                  £10.00/£5.00.
                </p>
                <br />
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CricketPage;
