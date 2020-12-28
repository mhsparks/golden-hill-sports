import Gallery from '@browniebroke/gatsby-image-gallery';
import '@browniebroke/gatsby-image-gallery/dist/style.css';
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";

const JuniorGallery = ({ data }) => {
  const images = [
    {
      ...data.youth1.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.youthhome1.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.youth1.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.youthhome2.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.youth6.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.youth3.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.youthhome3.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.youth5.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.youth7.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.youth4.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.youth9.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.youth8.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
  ];

  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Boys Youth Gallery</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li>
                <Link to="/cricket/junior/">Home</Link>
              </li>
              <li>
                <Link to="/cricket/juniorhonours/">Honours</Link>
              </li>
              <li class="is-active ">
                <Link to="/cricket/juniorgallery/">Gallery</Link>
              </li>
              <li>
                <a
                  href="https://goldenhill.play-cricket.com/Teams"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Matches
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
                <Link to="/cricket/junior/">Home</Link>
              </li>
              <li>
                <Link to="/cricket/juniorhonours/">Honours</Link>
              </li>
              <li class="is-active ">
                <Link to="/cricket/juniorgallery/">Gallery</Link>
              </li>
              <li>
                <a
                  href="https://goldenhill.play-cricket.com/Teams"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Matches
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <Gallery images={images} />
        </div>
      </section>
    </Layout>
  );
};
export default JuniorGallery;

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
    youthhome1: file(relativePath: { eq: "youth-home-1.jpg" }) {
      ...fluidImage
    }
    youthhome2: file(relativePath: { eq: "youth-home-2.jpg" }) {
      ...fluidImage
    }
    youthhome3: file(relativePath: { eq: "youth-home-3.jpg" }) {
      ...fluidImage
    }
    youth7: file(relativePath: { eq: "youth-7.jpg" }) {
      ...fluidImage
    }
    youth8: file(relativePath: { eq: "youth-8.jpg" }) {
      ...fluidImage
    }
    youth9: file(relativePath: { eq: "youth-9.jpg" }) {
      ...fluidImage
    }
  }
`;
