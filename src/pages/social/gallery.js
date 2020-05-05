import { Link } from "gatsby";
import React from "react";
import Gallery from "../../components/gallery";
import Layout from "../../components/layout";

const GalleryPage = ({ data }) => {
  const pictures = [
    [
      { alt: "Some text", src: "bar1" },
      { alt: "Some different text", src: "floor1" },
      { alt: "Some more text", src: "kitchen" },
      { alt: "Some more text", src: "tables1" },
    ],
    [
      { alt: "Some text", src: "bar2" },
      { alt: "Some different text", src: "bench1" },
      { alt: "Some more text", src: "kitchen2" },
      { alt: "Some more text", src: "tables2" },
    ],
    [
      { alt: "Some text", src: "balcony" },
      { alt: "Some different text", src: "bench2" },
      { alt: "Some more text", src: "space" },
      { alt: "Some more text", src: "tables3" },
    ],
  ];
  return (
    <Layout isSocial>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Clubhouse Gallery</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs">
            <ul>
              <li>
                <Link to="/social/venue/">Venue Hire</Link>
              </li>
              <li class="is-active has-text-weight-bold">
                <a>Clubhouse</a>
              </li>
              <li>
                <Link to="/social/fieldgallery">Sports Field</Link>
              </li>
            </ul>
          </div>
          <Gallery data={data} pictures={pictures} />
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;

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
    bar1: file(relativePath: { eq: "bar-1.jpg" }) {
      ...fluidImage
    }
    bar2: file(relativePath: { eq: "bar-2.jpg" }) {
      ...fluidImage
    }
    balcony: file(relativePath: { eq: "balcony.jpg" }) {
      ...fluidImage
    }
    floor1: file(relativePath: { eq: "floor-1.jpg" }) {
      ...fluidImage
    }
    bench1: file(relativePath: { eq: "bench-1.jpg" }) {
      ...fluidImage
    }
    bench2: file(relativePath: { eq: "bench-2.jpg" }) {
      ...fluidImage
    }
    kitchen: file(relativePath: { eq: "kitchen.jpg" }) {
      ...fluidImage
    }
    kitchen2: file(relativePath: { eq: "kitchen2.jpg" }) {
      ...fluidImage
    }
    space: file(relativePath: { eq: "space-1.jpg" }) {
      ...fluidImage
    }
    tables1: file(relativePath: { eq: "tables-1.jpg" }) {
      ...fluidImage
    }
    tables2: file(relativePath: { eq: "tables-2.jpg" }) {
      ...fluidImage
    }
    tables3: file(relativePath: { eq: "tables-3.jpg" }) {
      ...fluidImage
    }
  }
`;
