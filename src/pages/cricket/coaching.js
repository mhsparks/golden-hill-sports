import React from "react";
import Layout from "../../components/layout";
import Batting from "../../pdfs/TCC_Batting_Document.pdf";

const CoachingPage = () => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Coaching Links</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <a href={Batting}>Batting</a>
        </div>
      </section>
    </Layout>
  );
};

export default CoachingPage;
