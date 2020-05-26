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
    <Layout>
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
              <li class="is-active">
                <Link to="/social/contact/">Contact Form</Link>
              </li>
              <li>
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
              <li class="is-active">
                <Link to="/social/contact/">Contact Form</Link>
              </li>
              <li>
                <Link to="/location/">Find Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <form
            name="contact"
            method="post"
            action="/social/contact-success/"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div class="field is-hidden">
              <label>
                Plase complete Mr Robot: <input name="bot-field" />
              </label>
            </div>
            <div class="field">
              <label class="label">Contact Name</label>
              <div class="control">
                <p class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="text"
                    required
                    placeholder="Your Name"
                    name="name"
                  />
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
                    type="email"
                    required
                    placeholder="Email Address"
                    name="email"
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
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
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
                  <select name="subject">
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
                  name="message"
                  required
                ></textarea>
              </div>
            </div>
            <div class="control">
              <button class="button is-primary">Submit Message</button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
