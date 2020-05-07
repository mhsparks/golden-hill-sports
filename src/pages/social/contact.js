import React from "react";
import Layout from "../../components/layout";
import {
  faEnvelope,
  faUser,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";

const ContactPage = () => {
  return (
    <Layout isSocial>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Contact Us</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li>
                <Link to="/social/venue/">Venue Hire</Link>
              </li>
              <li>
                <Link to="/social/events/">Upcoming Events</Link>
              </li>
              <li>
                <Link to="/social/gallery/">Gallery</Link>
              </li>
              <li class="is-active">
                <Link to="/social/contact/">Contact Form</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-small is-centered is-hidden-desktop is-hidden-tablet is-boxed">
            <ul>
              <li>
                <Link to="/social/venue/">Venue Hire</Link>
              </li>
              <li>
                <Link to="/social/events/">Upcoming Events</Link>
              </li>
              <li>
                <Link to="/social/gallery/">Gallery</Link>
              </li>
              <li class="is-active">
                <Link to="/social/contact/">Contact Form</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="field">
            <label class="label">Contact Name</label>
            <div class="control">
              <p class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Your Name" />
                <span class="icon is-small is-left">
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </p>
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <p class="control has-icons-left">
                <input
                  class="input"
                  type="password"
                  placeholder="Email Address"
                />
                <span class="icon is-small is-left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </p>
            </div>
          </div>
          <div class="field">
            <label class="label">Phone</label>
            <div class="control">
              <p class="control has-icons-left">
                <input
                  class="input"
                  type="password"
                  placeholder="Phone Number"
                />
                <span class="icon is-small is-left">
                  <FontAwesomeIcon icon={faMobileAlt} />
                </span>
              </p>
            </div>
          </div>

          <div class="field">
            <label class="label">Subject</label>
            <p class="control ">
              <span class="select">
                <select>
                  <option selected>Venue Hire</option>
                  <option>Party in the Park</option>
                  <option>Pitch Hire</option>
                  <option>General Enquiry</option>
                </select>
              </span>
            </p>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea
                class="textarea is-primary"
                placeholder="Your Message Here"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div class="control">
            <button class="button is-primary">Submit Message</button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
