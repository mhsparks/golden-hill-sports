import React from "react";
import Layout from "../../components/layout";

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
          <div class="columns">
            <div class="column">
              <iframe
                class="has-ratio is-hidden-mobile"
                title="Golden Hill Cricket Calendar"
                src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FLondon&amp;src=Y19kbGtvdmhkanFkMmVsY3V1ZWxrYXQ3aGJ1Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y19tajVrZmo5bjR0NzhyaGVxOWVhYWhiN2hmb0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y190MjRkaTZhMWQ5ZnRpMTBzNTJmMmQ4c2Rqb0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y192aXBlMXVkOTBrZWFyZXJtODcyZXJvdHNnZ0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;color=%23E4C441&amp;color=%23039BE5&amp;color=%23E67C73&amp;title=Golden%20Hill%20CC%20Fixtures&amp;showPrint=0"
                style={{
                  border: 0,
                  width: "100%",
                  height: 600,
                  frameborder: 0,
                }}
              ></iframe>
              <iframe
                class="has-ratio is-hidden-desktop"
                title="Golden Hill Cricket Calendar"
                src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FLondon&amp;src=Y19kbGtvdmhkanFkMmVsY3V1ZWxrYXQ3aGJ1Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y19tajVrZmo5bjR0NzhyaGVxOWVhYWhiN2hmb0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y190MjRkaTZhMWQ5ZnRpMTBzNTJmMmQ4c2Rqb0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y192aXBlMXVkOTBrZWFyZXJtODcyZXJvdHNnZ0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23F6BF26&amp;color=%237CB342&amp;color=%23EF6C00&amp;color=%239E69AF&amp;showPrint=0&amp;showTabs=1&amp;mode=AGENDA"
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

export default CalendarPage;
