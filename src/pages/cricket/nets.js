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
      <section class="section pb-0">
        <div class="container">
          <div class="columns">
            <div class="column">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title has-background-primary has-text-white">
                    Golden Hill Cricket Nets
                  </p>
                </header>
                <div class="card-content">
                  <p>
                    Aenean et tortor at risus viverra adipiscing at in.
                    Pellentesque massa placerat duis ultricies lacus. Vel eros
                    donec ac odio tempor orci dapibus ultrices in. Cursus risus
                    at ultrices mi tempus imperdiet. Sed sed risus pretium quam
                    vulputate dignissim. Risus viverra adipiscing at in.
                    <br />
                    <br />
                    Mauris pellentesque pulvinar pellentesque habitant morbi
                    tristique senectus et. Integer enim neque volutpat ac
                    tincidunt vitae semper quis. Arcu dui vivamus arcu felis
                    bibendum ut. Aliquam eleifend mi in nulla posuere
                    sollicitudin aliquam ultrices. Urna duis convallis convallis
                    tellus id interdum.
                    <br />
                    <br />
                    Mi in nulla posuere sollicitudin aliquam ultrices sagittis.
                    Viverra aliquet eget sit amet tellus cras. Neque convallis a
                    cras semper auctor neque vitae. Facilisis gravida neque
                    convallis a cras semper auctor. Egestas erat imperdiet sed
                    euismod nisi. Hendrerit dolor magna eget est.
                  </p>
                </div>
              </div>
            </div>
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
