import React from "react";
import Layout from "../../components/layout";
import pitp from "../../images/pitp.jpg";

const SocialPage = () => {
  return (
    <Layout isSocial>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Golden Hill Social Club</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="card">
            <div class="card-image">
              <figure class="image is-5by3">
                <img src={pitp} alt="Party in the Park" />
              </figure>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <p>
              <strong>Golden Hill Sports & Social Club </strong>
              has a fully licensed bar, enabling us to sell alcoholic drinks to
              our members and guests.
              <br />
              <br />
              Under 18s are welcome at the club but must be accompanied by an
              adult, and are obviously not permitted to buy or consume alcohol.
              <br />
              <br />
              We are open on Saturday afternoons throughout the year and weekday
              evenings during the summer.
              <br />
              <br />
              The bar may be open at additional times throughout the winter to
              accommodate sports matches and live events.
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SocialPage;
