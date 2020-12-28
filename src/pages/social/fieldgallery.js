import Gallery from '@browniebroke/gatsby-image-gallery';
import '@browniebroke/gatsby-image-gallery/dist/style.css';
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";


const FieldGallery = ({ data }) => {
  const images = [
    {
      ...data.field1.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.field3.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.field4.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.field5.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.pitch1.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.pitch4.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.aerial.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.pitch6.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.pitch10.childImageSharp, 
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
            <h1 class="title is-size-4">Sports Field Gallery</h1>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li>
                <Link to="/social/venue/">Venue Hire</Link>
              </li>
              <li>
                <Link to="/social/gallery">Clubhouse</Link>
              </li>
              <li class="is-active">
                <Link to="/social/fieldgallery">Sports Field</Link>
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
                <Link to="/social/venue/">Venue Hire</Link>
              </li>
              <li>
                <Link to="/social/gallery">Clubhouse</Link>
              </li>
              <li class="is-active">
                <Link to="/social/fieldgallery">Sports Field</Link>
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

export default FieldGallery;

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
