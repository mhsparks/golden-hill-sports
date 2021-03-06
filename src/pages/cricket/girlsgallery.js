import Gallery from '@browniebroke/gatsby-image-gallery';
import '@browniebroke/gatsby-image-gallery/dist/style.css';
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";

const GirlsGallery = ({ data }) => {
  const images = [
    {
      ...data.girlsgallery1.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.girlsgallery13.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.girlsgallery3.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.girlsgallery4.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.girlsgallery3.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.girlsgallery6.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.girlsgallery7.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.girlsgallery8.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.girlsgallery9.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.girlsgallery10.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.girlsgallery11.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.girlsgallery20.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.girlsgallery2.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.girlsgallery14.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.girlsgallery15.childImageSharp, 
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.girlsgallery16.childImageSharp, 
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
            <h1 class="title is-size-4">Girls Youth Gallery</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li>
                <Link to="/cricket/girls/">Home</Link>
              </li>
              <li>
                <Link to="/cricket/girlshonours/">Honours</Link>
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
                <Link to="/cricket/girls/">Home</Link>
              </li>
              <li>
                <Link to="/cricket/girlshonours/">Honours</Link>
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
export default GirlsGallery;

export const query = graphql`
  query {
    girlsgallery1: file(relativePath: { eq: "girls-gallery-1.jpg" }) {
      ...fluidImage
    }
    girlsgallery2: file(relativePath: { eq: "girls-gallery-2.jpg" }) {
      ...fluidImage
    }
    girlsgallery3: file(relativePath: { eq: "girls-gallery-3.jpg" }) {
      ...fluidImage
    }
    girlsgallery4: file(relativePath: { eq: "girls-gallery-4.jpg" }) {
      ...fluidImage
    }

    girlsgallery6: file(relativePath: { eq: "girls-gallery-6.jpg" }) {
      ...fluidImage
    }
    girlsgallery7: file(relativePath: { eq: "girls-gallery-7.jpg" }) {
      ...fluidImage
    }
    girlsgallery8: file(relativePath: { eq: "girls-gallery-8.jpg" }) {
      ...fluidImage
    }
    girlsgallery9: file(relativePath: { eq: "girls-gallery-9.jpg" }) {
      ...fluidImage
    }
    girlsgallery10: file(relativePath: { eq: "girls-gallery-10.jpg" }) {
      ...fluidImage
    }
    girlsgallery11: file(relativePath: { eq: "girls-gallery-11.jpg" }) {
      ...fluidImage
    }

    girlsgallery13: file(relativePath: { eq: "girls-gallery-13.jpg" }) {
      ...fluidImage
    }
    girlsgallery14: file(relativePath: { eq: "girls-gallery-14.jpg" }) {
      ...fluidImage
    }
    girlsgallery15: file(relativePath: { eq: "girls-gallery-15.jpg" }) {
      ...fluidImage
    }
    girlsgallery16: file(relativePath: { eq: "girls-gallery-16.jpg" }) {
      ...fluidImage
    }
    girlsgallery17: file(relativePath: { eq: "girls-gallery-17.jpg" }) {
      ...fluidImage
    }
    girlsgallery20: file(relativePath: { eq: "girls-gallery-20.jpg" }) {
      ...fluidImage
    }
  }
`;
