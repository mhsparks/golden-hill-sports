import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const LocationPage = () => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Where to find us</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li>
                <Link to="/social/contact/">Contact Form</Link>
              </li>
              <li class="is-active">
                <Link to="/location/">Find Us</Link>
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
                <Link to="/social/contact/">Contact Form</Link>
              </li>
              <li class="is-active">
                <Link to="/location/">Find Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="card">
            <div class="columns">
              <div class="column">
                <iframe
                  frameborder="0"
                  style={{ border: 0, height: 400, width: "100%" }}
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBoOXBhVo6zXxN95rQo3K9MZqYuYDMa2Pc&q=Golden+Hill+Sports&zoom=16"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="column">
                <div class="card-content has-background-primary has-text-white">
                  <p>
                    You can find us here, just off Kellaway Avenue
                    <br /> <br />
                    Golden Hill Sports
                    <br />
                    Wimbledon Road
                    <br />
                    Henleaze
                    <br />
                    Bristol
                    <br />
                    BS6 7YA
                    <br />
                    <br />
                    PLEASE NOTE WE ARE NOT THE ASTRO-TURF PITCHES NEXT TO TESCO!
                  </p>
                  <br />
                  <p>Email: info@goldenhillsports.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default LocationPage;
