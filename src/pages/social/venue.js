import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../../components/layout";

const VenuePage = ({ data }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Venue Hire</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li>
                <Link to="/social/">Overview</Link>
              </li>
              <li class="is-active">
                <Link to="/social/venue/">Venue Hire</Link>
              </li>

              <li>
                <Link to="/social/gallery/">Gallery</Link>
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
                <Link to="/social/">Overview</Link>
              </li>
              <li class="is-active">
                <Link to="/social/venue/">Venue Hire</Link>
              </li>

              <li>
                <Link to="/social/gallery/">Gallery</Link>
              </li>
            </ul>
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
                <p class="has-text-weight-bold has-text-primary">
                  Hiring charges
                </p>
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
                If you would like to use the sports field you can hire either
                one or both parts of the ground depending on availability.
                <br />
                <br />
                Please note that the facilities are used by sports teams every
                Saturday and on weekday evenings from mid-April until
                mid-September by the club.
                <br />
                <br />
                <p class="has-text-weight-bold has-text-primary">
                  The Pavilion
                </p>
                Includes a function room with laminate flooring, LED lighting,
                kitchen on the first floor, and a fully licensed bar. Function
                room The function room has a capacity of 80 people with access
                to a projector and sound system for presentations or playing
                music for birthday parties through.
                <br />
                <br />
                <p class="has-text-weight-bold has-text-primary">Kitchen</p>
                A newly fitted kitchen with oven, hob, microwave, dishwasher,
                fridge and freezer. Separate handwash basin and instant boiling
                water tap, including a 5* Hygiene rating.
                <br />
                <br />
                <p class="has-text-weight-bold has-text-primary">
                  Disabled Access
                </p>
                A newly fitted stairlift has been fitted so that disabled access
                is available to gain access to the first floor.
                <br />
                <br />
                <p class="has-text-weight-bold has-text-primary">Catering</p>
                We are able to provide you with subcontracted catering services.
                Alternatively, you can provide your own food and refreshments as
                the kitchen is stocked with 48 sets of plates, side plates,
                bowls, mugs and cutlery along with chopping boards, knives as
                the essential items required.
                <br />
                <br />
                <p class="has-text-weight-bold has-text-primary">Booking</p>
                Please feel free to fill in the contact form using the link
                above regarding your booking or alternatively you can call
                07306034621 to discuss it over the phone.
                <br />
                <br />
              </p>
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
