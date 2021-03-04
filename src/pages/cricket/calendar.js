import React from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";

const CalendarPage = () => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Cricket Calendar</h1>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="column">
            <iframe
              title="GHS Social Calendar"
              src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FLondon&amp;src=c29jaWFsQGdvbGRlbmhpbGxzcG9ydHMuY29t&amp;color=%23D81B60"
              style={{
                border: 0,
                width: "100%",
                height: 600,
                frameborder: 0,
              }}
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CalendarPage;
