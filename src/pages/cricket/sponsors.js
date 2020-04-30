import React from "react";
import Layout from "../../components/layout";

const SponsorsPage = () => {
  return (
    <Layout isCricket>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Our Sponsors</h1>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="card">
            <div class="card-image">
              <figure class="image"></figure>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SponsorsPage;
