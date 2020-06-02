import React from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";

const GirlsHonours = () => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Girls Youth Honours</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li>
                <Link to="/cricket/girls/">Home</Link>
              </li>
              <li class="is-active">
                <Link to="/cricket/girlshonours/">Honours</Link>
              </li>
              <li>
                <Link to="/cricket/girlsgallery/">Gallery</Link>
              </li>
              <li>
                <a
                  href="https://goldenhill.play-cricket.com/Teams"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Matches
                </a>
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
                <Link to="/cricket/girls/">Home</Link>
              </li>
              <li class="is-active">
                <Link to="/cricket/girlshonours/">Honours</Link>
              </li>
              <li>
                <Link to="/cricket/girlsgallery/">Gallery</Link>
              </li>
              <li>
                <a
                  href="https://goldenhill.play-cricket.com/Teams"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Matches
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GirlsHonours;
