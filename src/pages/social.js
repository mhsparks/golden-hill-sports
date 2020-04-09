import React from "react";
import Layout from "../components/layout";
import pitp from "../images/pitp.jpg";

const SocialPage = () => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Golden Hill Social Club</h1>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-half">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-3by2">
                    <img src={pitp} alt="Party in the Park" />
                  </figure>
                </div>
              </div>
            </div>
            <div class="column is-half">
              <div class="content">
                <p>
                  Golden Hill Sports & Social Club has a fully licensed bar,
                  enabling us to sell alcoholic drinks to our members and
                  guests. Under 18s are welcome at the club but must be
                  accompanied by an adult, and are obviously not permitted to
                  buy or consume alcohol. We are open on Saturday afternoons
                  throughout the year and weekday evenings during the summer.
                  The bar may be open at additional times throughout the winter
                  to accommodate sports matches and live events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SocialPage;
