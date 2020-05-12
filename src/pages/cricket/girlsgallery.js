import React from "react";
import Layout from "../../components/layout";
import Gallery from "../../components/gallery";
import { Link } from "gatsby";

const GirlsGallery = ({ data }) => {
  const pictures = [
    [
      { alt: "Some text", src: "youth1" },
      { alt: "Some different text", src: "youth4" },
      { alt: "Some text", src: "youth1" },
      { alt: "Some different text", src: "youth4" },
    ],
    [
      { alt: "Some text", src: "youth2" },
      { alt: "Some different text", src: "youth5" },
      { alt: "Some text", src: "youth1" },
      { alt: "Some different text", src: "youth4" },
    ],
    [
      { alt: "Some text", src: "youth3" },
      { alt: "Some different text", src: "youth6" },
      { alt: "Some text", src: "youth1" },
      { alt: "Some different text", src: "youth4" },
    ],
    [
      { alt: "Some text", src: "youth3" },
      { alt: "Some different text", src: "youth6" },
      { alt: "Some text", src: "youth1" },
      { alt: "Some different text", src: "youth4" },
    ],
    [
      { alt: "Some text", src: "youth3" },
      { alt: "Some different text", src: "youth6" },
      { alt: "Some text", src: "youth1" },
      { alt: "Some different text", src: "youth4" },
    ],
    [
      { alt: "Some text", src: "youth3" },
      { alt: "Some different text", src: "youth6" },
      { alt: "Some text", src: "youth1" },
      { alt: "Some different text", src: "youth4" },
    ],
  ];
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Gallery</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li>
                <Link to="/cricket/girls/">Girls Youth Cricket</Link>
              </li>
              <li class="is-active">
                <Link to="/cricket/girlsgallery/">Gallery</Link>
              </li>
              <li>
                <a
                  href="https://goldenhill.play-cricket.com/Teams"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fixtures & Results
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-small is-boxed is-hidden-desktop is-hidden-tablet">
            <ul>
              <li>
                <Link to="/cricket/girls/">Girls Youth Cricket</Link>
              </li>
              <li class="is-active">
                <Link to="/cricket/girlsgallery/">Gallery</Link>
              </li>
              <li>
                <a
                  href="https://goldenhill.play-cricket.com/Teams"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fixtures & Results
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <Gallery data={data} pictures={pictures} />
        </div>
      </section>
    </Layout>
  );
};
export default GirlsGallery;

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
    youth1: file(relativePath: { eq: "youth-1.jpg" }) {
      ...fluidImage
    }
    youth2: file(relativePath: { eq: "youth-2.jpg" }) {
      ...fluidImage
    }
    youth3: file(relativePath: { eq: "youth-3.jpg" }) {
      ...fluidImage
    }
    youth4: file(relativePath: { eq: "youth-4.jpg" }) {
      ...fluidImage
    }
    youth5: file(relativePath: { eq: "youth-5.jpg" }) {
      ...fluidImage
    }
    youth6: file(relativePath: { eq: "youth-6.jpg" }) {
      ...fluidImage
    }
  }
`;
