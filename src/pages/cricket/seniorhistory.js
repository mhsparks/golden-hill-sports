import React from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";

const SeniorHistory = () => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Senior Men History</h1>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li>
                <Link to="/cricket/senior/">Home</Link>
              </li>
              <li>
                <Link to="/cricket/seniorhonours/">Honours</Link>
              </li>

              <li>
                <Link to="/cricket/seniorgallery/">Gallery</Link>
              </li>
              <li class="is-active">
                <Link to="/cricket/seniorhistory/">History</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-small is-boxed is-hidden-desktop is-hidden-tablet">
            <ul>
              <li>
                <Link to="/cricket/senior/">Home</Link>
              </li>
              <li>
                <Link to="/cricket/seniorhonours/">Honours</Link>
              </li>
              <li>
                <Link to="/cricket/seniorgallery/">Gallery</Link>
              </li>
              <li class="is-active">
                <Link to="/cricket/seniorhistory/">History</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SeniorHistory;
