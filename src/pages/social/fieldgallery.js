import { Link } from "gatsby";
import React from "react";
import Gallery from "../../components/gallery";
import Layout from "../../components/layout";

const FieldGallery = ({ data }) => {
  const pictures = [
    [
      { alt: "Some text", src: "field1" },
      { alt: "Some different text", src: "field3" },
      { alt: "Some more text", src: "field4" },
    ],
    [
      { alt: "Some text", src: "field5" },
      { alt: "Some different text", src: "pitch1" },
      { alt: "Some more text", src: "pitch4" },
    ],
    [
      { alt: "Some text", src: "aerial" },
      { alt: "Some different text", src: "pitch6" },
      { alt: "Some more text", src: "pitch10" },
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
        <div class="container">
          <div class="tabs">
            <ul>
              <li>
                <Link to="/social/gallery">Clubhouse</Link>
              </li>
              <li class="is-active">
                <Link to="/social/fieldgallery">Sports Field</Link>
              </li>
              <li>
                <Link to="/social/pitpgallery">Party in the Park</Link>
              </li>
            </ul>
          </div>
          <Gallery data={data} pictures={pictures} />
        </div>
      </section>
    </Layout>
  );
};

export default FieldGallery;

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
    aerial: file(relativePath: { eq: "aerial.jpg" }) {
      ...fluidImage
    }
    field1: file(relativePath: { eq: "field-1.jpg" }) {
      ...fluidImage
    }
    field3: file(relativePath: { eq: "field-3.jpg" }) {
      ...fluidImage
    }
    field4: file(relativePath: { eq: "field-4.jpg" }) {
      ...fluidImage
    }
    field5: file(relativePath: { eq: "field-5.jpg" }) {
      ...fluidImage
    }
    pitch1: file(relativePath: { eq: "pitch-1.jpg" }) {
      ...fluidImage
    }
    pitch4: file(relativePath: { eq: "pitch-4.jpg" }) {
      ...fluidImage
    }
    pitch6: file(relativePath: { eq: "pitch-6.jpg" }) {
      ...fluidImage
    }
    pitch10: file(relativePath: { eq: "pitch-10.jpg" }) {
      ...fluidImage
    }
  }
`;
