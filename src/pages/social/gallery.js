import Gallery from '@browniebroke/gatsby-image-gallery';
import '@browniebroke/gatsby-image-gallery/dist/style.css';
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";

const GalleryPage = ({ data }) => {
  const images = [
    {
      ...data.bar1.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.bench2.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.kitchen.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
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
      ...data.bar2.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.tables3.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.kitchen2.childImageSharp, 
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
      ...data.pitch1.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    }, 
    {
      ...data.balcony.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.tables1.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.bench1.childImageSharp, 
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
      ...data.pitch4.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.floor1.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.tables2.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },  
    {
      ...data.space.childImageSharp, 
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
    {
      ...data.aerial.childImageSharp, 
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
                <Link to="/social/">Overview</Link>
              </li>
              <li>
                <Link to="/social/venue/">Venue Hire</Link>
              </li>
              <li class="is-active">
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
              <li>
                <Link to="/social/venue/">Venue Hire</Link>
              </li>

              <li class="is-active">
                <Link to="/social/gallery/">Gallery</Link>
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

export default GalleryPage;

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
