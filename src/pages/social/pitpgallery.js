import React from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";
import Gallery from "../../components/gallery";

const PitpGallery = ({ data }) => {
  const pictures = [
    [
      { alt: "Some text", src: "pitplogo" },
      { alt: "Some different text", src: "pitp7" },
      { alt: "Some more text", src: "pitp1" },
      { alt: "Some more text", src: "fireworks1" },
    ],
    [
      { alt: "Some text", src: "pitp10" },
      { alt: "Some different text", src: "bbq" },
      { alt: "Some more text", src: "pitp3" },
      { alt: "Some more text", src: "fireworks2" },
    ],
    [
      { alt: "Some text", src: "pitp9" },
      { alt: "Some different text", src: "pitp6" },
      { alt: "Some more text", src: "pitp5" },
      { alt: "Some more text", src: "pitp8" },
    ],
  ];
  return (
    <Layout isSocial>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Golden Hill Gallery</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="tabs">
          <ul>
            <li>
              <Link to="/social/gallery">Clubhouse</Link>
            </li>
            <li>
              <Link to="/social/fieldgallery">Sports Field</Link>
            </li>
            <li class="is-active">
              <Link to="/social/pitpgallery">Party in the Park</Link>
            </li>
          </ul>
        </div>
        <Gallery data={data} pictures={pictures} />
      </section>
    </Layout>
  );
};

export default PitpGallery;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const query = graphql`
  query {
    pitp1: file(relativePath: { eq: "pitp-1.jpg" }) {
      ...fluidImage
    }
    pitp3: file(relativePath: { eq: "pitp-3.jpg" }) {
      ...fluidImage
    }
    pitp5: file(relativePath: { eq: "pitp-5.jpg" }) {
      ...fluidImage
    }
    pitp6: file(relativePath: { eq: "pitp-6.jpg" }) {
      ...fluidImage
    }
    pitp7: file(relativePath: { eq: "pitp-7.jpg" }) {
      ...fluidImage
    }
    pitp8: file(relativePath: { eq: "pitp-8.jpg" }) {
      ...fluidImage
    }
    pitp9: file(relativePath: { eq: "pitp-9.jpg" }) {
      ...fluidImage
    }
    pitp10: file(relativePath: { eq: "pitp-10.jpg" }) {
      ...fluidImage
    }
    pitplogo: file(relativePath: { eq: "pitp-logo.jpg" }) {
      ...fluidImage
    }
    fireworks1: file(relativePath: { eq: "pitp-firework1.jpg" }) {
      ...fluidImage
    }
    fireworks2: file(relativePath: { eq: "pitp-firework2.jpg" }) {
      ...fluidImage
    }
    bbq: file(relativePath: { eq: "pitp-bbq.jpg" }) {
      ...fluidImage
    }
  }
`;
