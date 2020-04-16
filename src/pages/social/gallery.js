import React from "react";
import Layout from "../../components/layout";
import clubhouse1 from "../../images/bar.jpg";

const GalleryPage = () => {
  return (
    <Layout isSocial>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Golden Hill Gallery</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="card">
          <div class="columns">
            <div class="column is-half">
              <div class="card-image">
                <figure class="image is-720x240">
                  <img src={clubhouse1} alt="Club House" />
                </figure>
              </div>
            </div>
            <div class="column is-half">
              <div class="card-image">
                <figure class="image is-720x240">
                  <img src={clubhouse1} alt="Club House" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="columns">
            <div class="column is-half">
              <div class="card-image">
                <figure class="image is-720x240">
                  <img src={clubhouse1} alt="Club House" />
                </figure>
              </div>
            </div>
            <div class="column is-half">
              <div class="card-image">
                <figure class="image is-720x240">
                  <img src={clubhouse1} alt="Club House" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="columns">
            <div class="column is-half">
              <div class="card-image">
                <figure class="image is-720x240">
                  <img src={clubhouse1} alt="Club House" />
                </figure>
              </div>
            </div>
            <div class="column is-half">
              <div class="card-image">
                <figure class="image is-720x240">
                  <img src={clubhouse1} alt="Club House" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="columns">
            <div class="column is-half">
              <div class="card-image">
                <figure class="image is-720x240">
                  <img src={clubhouse1} alt="Club House" />
                </figure>
              </div>
            </div>
            <div class="column is-half">
              <div class="card-image">
                <figure class="image is-720x240">
                  <img src={clubhouse1} alt="Club House" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;
