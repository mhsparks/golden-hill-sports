import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "gatsby-image";
import React from "react";
import Layout from "../../components/layout";

const VenuePage = ({ data }) => {
  return (
    <Layout isSocial>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Venue Hire</h1>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="card">
            <div class="card-image">
              <figure class="image is-720x240">
                <Img
                  fluid={data.clubhouse1.childImageSharp.fluid}
                  alt="Club House"
                />
              </figure>
            </div>
            <div class="card-content">
              <p>
                Hire charges for the pavilion start from £40 for the first hour
                and then £20 an hour thereafter. Additional charges will apply
                for use of the bar and a member of staff will be supplied to run
                it during the function.
                <br />
                <br />
                If you’re considering a block/re-occuring booking then please
                get in contact so that we can look at offering preferential
                rates based around these.
                <br />
                <br />
                If you intend to use the sports field you can hire either one or
                both of the pitches depending on availability.
                <br />
                <br />
                Please note that the facilities are used by sports teams every
                Saturday and on weekday evenings from mid-April until
                mid-September by the club.
                <br />
                <br />
                The Pavilion
                <br />
                Includes a function room with laminate flooring, LED lighting,
                kitchen on the first floor, and a fully licensed bar. Function
                room The function room has a capacity of 80 people with access
                to a projector and sound system for presentations or playing
                music for birthday parties through.
                <br />
                <br />
                Kitchen
                <br />
                A newly fitted kitchen with oven, hob, microwave, dishwasher,
                fridge and freezer. Separate handwash basin and instant boiling
                water tap, including a 5* Hygiene rating.
                <br />
                <br />
                Disabled Access
                <br />A newly fitted stairlift has been fitted so that disabled
                access is available to gain access to the first floor.
                <br />
                <br />
                Catering
                <br />
                We are able to provide you with subcontracted catering services.
                Alternatively, you can provide your own food and refreshments as
                the kitchen is stocked with 48 sets of plates, side plates,
                bowls, mugs and cutlery along with chopping boards, knives as
                the essential items required.
                <br />
                <br />
                Booking
                <br />
                Please feel free to fill in the below contact form regarding
                your booking or alternatively you can call 07306034621 to
                discuss it over the phone.
                <br />
                <br />
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <div class="columns">
                <div class="column is-11">
                  <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Your Name"
                      />
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
                          <option>Venue Hire</option>
                          <option>Pitch Hire</option>

                          <option>Party in the Park</option>
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
        </div>
      </section>
    </Layout>
  );
};

export default VenuePage;

export const query = graphql`
  query {
    clubhouse1: file(relativePath: { eq: "clubhouse-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
