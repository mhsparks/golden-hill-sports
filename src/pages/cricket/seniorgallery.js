import Gallery from '@browniebroke/gatsby-image-gallery';
import '@browniebroke/gatsby-image-gallery/dist/style.css';
import { graphql, Link } from "gatsby";
import React from "react";
// import Gallery from "../../components/gallery";
import Layout from "../../components/layout";

const SeniorGallery = ({ data }) => {
  const images = [
    {
      ...data.youth1.childImageSharp, 
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
      ...data.youth1.childImageSharp, 
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
      ...data.youth2.childImageSharp, 
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
      ...data.youth1.childImageSharp, 
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
      ...data.youth3.childImageSharp, 
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
      ...data.youth1.childImageSharp, 
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
      ...data.youth3.childImageSharp, 
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
      ...data.youth1.childImageSharp, 
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
      ...data.youth3.childImageSharp, 
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
      ...data.youth1.childImageSharp, 
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
      ...data.youth3.childImageSharp, 
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
      ...data.youth1.childImageSharp, 
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
  ];
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Senior Men Gallery</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li>
                <Link to="/cricket/senior/">Home</Link>
              </li>
              <li>
                <Link to="/cricket/seniorhonours/">Honours</Link>
              </li>

              <li class="is-active">
                <Link to="/cricket/seniorgallery/">Gallery</Link>
              </li>
              <li>
                <Link to="/cricket/seniorhistory/">History</Link>
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
                <Link to="/cricket/senior/">Home</Link>
              </li>
              <li>
                <Link to="/cricket/seniorhonours/">Honours</Link>
              </li>
              <li class="is-active">
                <Link to="/cricket/seniorgallery/">Gallery</Link>
              </li>
              <li>
                <Link to="/cricket/seniorhistory/">History</Link>
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
export default SeniorGallery;


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
