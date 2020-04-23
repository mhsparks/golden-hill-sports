import React from "react";
import Layout from "../../components/layout";
import pitplogo from "../../images/pitp-logoCrop.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const PitpPage = () => {
  return (
    <Layout isSocial>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Party in the Park</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="card">
          <div class="card-image">
            <figure class="image is-3by1">
              <img src={pitplogo} alt="Party in the Park poster" />
            </figure>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <p class="title is-size-6 has-text-primary">
              What is Party in the Park?
            </p>
            <p>
              For those of you that don’t know about PITP, it’s a community
              event that raises money to pay for the upkeep of the community
              owned field at Golden Hill. <br />
              <br />
              It’s a great event with a variety of stalls and entertainment on
              offer for all the family. We print 10,000 programmes that are hand
              delivered to homes in the local area and thousands of people come
              along and enjoy the day which is open to everyone.
              <br />
              <br /> If you know of anyone who would like to be a stall holder
              please ask them to contact us as the event continues to grow in
              stature year on year.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <p class="title is-size-6 has-text-primary">How can you help?</p>
            <p>
              Party in the Park is our major fund raising event of the year and
              allows us to continue to invest in grass-roots football and
              cricket. This event takes a tremendous amount of effort and
              co-ordination.
              <br />
              All Golden Hill members can help by doing the following things:
              <br />
              <br />
              <ul class="list-spacing">
                <li>
                  <span class="has-text-weight-bold has-text-primary">
                    Donate&nbsp;
                  </span>
                  cakes - bottles - books - childrens' quality clothes and toys
                </li>
                <li>
                  <span class="has-text-weight-bold has-text-primary">
                    Sell&nbsp;
                  </span>
                  just 20 raffle tickets
                </li>
                <li>
                  <span class="has-text-weight-bold has-text-primary">
                    Tell&nbsp;
                  </span>
                  your friends and family about the event.
                </li>
                <li>
                  <span class="has-text-weight-bold has-text-primary">
                    Give&nbsp;
                  </span>
                  some of your time: either on the day, or for set up and tidy
                  up on Friday or Sunday. Or would you like to be part of the
                  organising committee?
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <p class="title is-size-6 has-text-primary">Contact us</p>
            <p>
              If you would like a stall at PITP, or would like to be involved,
              please contact us using the form below.
              <br />
              <br />
            </p>

            <div class="columns">
              <div class="column is-11">
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="Your Name" />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control has-icons-left has-icons-right">
                    <span class="icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input
                      class="input"
                      type="email"
                      placeholder="Email input"
                      value="Email address"
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Subject</label>
                  <div class="control">
                    <div class="select">
                      <select>
                        <option>Select dropdown</option>
                        <option>Party in the Park</option>
                        <option>Venue Hire</option>
                        <option>Pitch Hire</option>

                        <option>General Enquiry</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Message</label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      placeholder="Message here"
                    ></textarea>
                  </div>
                </div>

                <div class="field is-grouped">
                  <div class="control">
                    <button class="button is-link">Submit</button>
                  </div>
                  <div class="control">
                    <button class="button is-link is-light">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PitpPage;
