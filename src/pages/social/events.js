import React from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";

const EventsPage = () => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Upcoming Events</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li class="is-active">
                <Link to="/social/events/">Upcoming Events</Link>
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
                <Link to="/social/events/">Upcoming Events</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="card">
            <div class="card-content">
              <article class="media">
                <figure class="media-left">
                  <p class="image is-128x128">
                    <img
                      src="https://bulma.io/images/placeholders/128x128.png"
                      alt="placeholder"
                    />
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>Quiz Night</strong>{" "}
                      <small>Saturday 12th September.</small>{" "}
                      <small>7pm onwards</small>
                      <br />
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. <br />
                      <br />
                      Maecenas non massa sem. Etiam finibus odio quis feugiat
                      facilisis.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <article class="message is-primary">
                <div class="message-header">
                  <p>Quiz Night! - Saturday 12th September</p>
                </div>
                <div class="message-body has-text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <strong>Pellentesque risus mi</strong>, tempus quis placerat
                  ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
                  fringilla. Nullam gravida purus diam, et dictum felis
                  venenatis efficitur. Aenean ac <em>eleifend lacus</em>, in
                  mollis lectus. Donec sodales, arcu et sollicitudin porttitor,
                  tortor urna tempor ligula, id porttitor mi magna a neque.
                  Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventsPage;
