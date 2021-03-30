import React from "react";
import Layout from "../../components/layout";

const NetsPage = () => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Cricket Nets Booking</h1>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column">
              <iframe
                class="has-ratio is-hidden-mobile"
                title="Golden Hill Cricket Nets Booking"
                src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FLondon&amp;src=Y182cTg0NW8zZnM5Mmw2anNmODgyaWt2cGM1a0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%237986CB&amp;showPrint=0&amp;showCalendars=1&amp;hl=en_GB"
                style={{
                  border: 0,
                  width: "100%",
                  height: 600,
                  frameborder: 0,
                }}
              ></iframe>
              <iframe
                class="has-ratio is-hidden-desktop"
                title="Golden Hill Cricket Nets Booking"
                src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FLondon&amp;src=Y182cTg0NW8zZnM5Mmw2anNmODgyaWt2cGM1a0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%237986CB&amp;showPrint=0&amp;showCalendars=1&amp;hl=en_GB&amp;showTitle=1&amp;mode=AGENDA&amp;showDate=0"
                style={{
                  border: 0,
                  width: "100%",
                  height: 600,
                  frameborder: 0,
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NetsPage;
