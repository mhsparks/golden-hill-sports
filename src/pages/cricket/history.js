import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../../components/layout";

const HistoryPage = ({ data }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Our History</h1>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <Img
                  fluid={data.fieldlarge.childImageSharp.fluid}
                  alt="Placeholder"
                />
              </figure>
            </div>
            <div class="card-content">
              <p class="has-text-weight-bold has-text-primary">
                Golden Hill Cricket Club
              </p>
              <br />
              <p>
                Season 2020 is a landmark year for our cricket club as it is the
                first year under our new name of Golden Hill Cricket Club.{" "}
              </p>
              <br />
              <p>
                Initially formed in the 1860s and then reformed in 1878, the
                club held the name of YMCA Cricket Club until the membership
                voted to change our title to better reflect the diverse nature
                of the club in 2019.
              </p>
              <br />
              <p>
                The club had very modest beginnings, playing friendly matches on
                the Durdham Downs before renting various fields including the
                County Ground in Ashley Down. Golden Hill became the long
                standing site in 1902 and where our club is based to this very
                day.{" "}
              </p>
              <br />
              <p>
                YMCA achieved some notable early success including winning the
                Bristol Cricket Challenge Cup in 1891; a trophy which led to the
                club becoming a more recognised cricketing force in the Bristol
                area. Despite many YMCA players achieving selection for
                Gloucestershire, including W.H. Rowlands who captained the
                county side in the years following the First World War, the club
                had a fallow period – just the small number of 119 years – until
                the 1st team won the Bristol and District Knockout Plate in
                2010!{" "}
              </p>
              <br />
              <p>
                Despite the lack of silverware, the YMCA held its own in the
                upper echelons of the Bristol and District League from its
                creation in 1973. The 2nds began their league journey in 1978
                and the thirds in 1982 before adding a fourth team in 2000 and
                more recently a 5th team in 2009. During its rich history, the
                club has been lucky to have the services of so many talented and
                dedicated cricketers and more recently, a period of unparalleled
                success leading to all 5 of its senior sides competing at their
                highest level in our history, including the 1st XI who have
                achieved promotion to the region wide West of England Premier
                League.
              </p>
              <br />
              <p>
                Golden Hill Cricket Club has a proud reputation in local cricket
                – our youth sections nurture and develop our future cricketers
                and many of these progress to the senior men’s and ladies’
                cricket teams as well as the boys’ and girls’ county
                representative sides. But of course, as desirable as team and
                individual successes are, it is not the be all and end all of a
                cricket club. The strength of our club lies in its values, its
                ethos and its vision to provide sporting opportunities to all
                those in our community and we approach this next era, as Golden
                Hill Cricket Club, determined to build further on the proud
                successes of our past with the considerable help & support of
                all the coaches, parents, friends & followers that have given so
                generously of their time over the years.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HistoryPage;
export const query = graphql`
  query {
    fieldlarge: file(relativePath: { eq: "field-large.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
