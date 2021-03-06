import Gallery from '@browniebroke/gatsby-image-gallery';
import '@browniebroke/gatsby-image-gallery/dist/style.css';
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";

const PitpGallery = ({ data }) => {
  const images = [
    {
      ...data.pitplogo.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.pitp7.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.pitp1.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.fireworks1.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.pitp10.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.bbq.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.pitp3.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.fireworks2.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.pitp9.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.pitp6.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.pitp5.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.pitp8.childImageSharp, 
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
            <h1 class="title is-size-4">Gallery</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li>
                <Link to="/social/pitp/">Overview</Link>
              </li>
              <li class="is-active has-text-weight-bold">
                <Link to="/social/pitpgallery/">Gallery</Link>
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
                <Link to="/social/pitp/">Overview</Link>
              </li>
              <li class="is-active has-text-weight-bold">
                <Link to="/social/pitpgallery/">Gallery</Link>
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

export default PitpGallery;

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
