import { graphql, Link } from "gatsby";

import React from "react";
import Layout from "../../components/layout";

const WomenHonours = () => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Womens Honours</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li>
                <Link to="/cricket/women/">Home</Link>
              </li>
              <li class="is-active">
                <Link to="/cricket/womenhonours/">Honours</Link>
              </li>
              <li>
                <Link to="/cricket/womengallery/">Gallery</Link>
              </li>
              <li>
                <Link to="/cricket/womenhistory/">History</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-small is-hidden-desktop is-hidden-tablet is-boxed">
            <ul>
              <li>
                <Link to="/cricket/women/">Home</Link>
              </li>
              <li class="is-active">
                <Link to="/cricket/womenhonours/">Honours</Link>
              </li>
              <li>
                <Link to="/cricket/womengallery/">Gallery</Link>
              </li>
              <li>
                <li>
                  <Link to="/cricket/womenhistory/">History</Link>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WomenHonours;
