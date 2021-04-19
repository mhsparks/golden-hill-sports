import Gallery from "@browniebroke/gatsby-image-gallery";
import "@browniebroke/gatsby-image-gallery/dist/style.css";
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";

const WomenGallery = ({ data }) => {
  const images = [
    {
      ...data.wgall1.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall2.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall4.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall8.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall3.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall5.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall6.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall7.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall9.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall10.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall11.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall13.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall12.childImageSharp,
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
            <h1 class="title is-size-4">Womens Gallery</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="tabs is-boxed is-hidden-mobile">
            <ul>
              <li>
                <Link to="/cricket/women/">Home</Link>
              </li>
              <li>
                <Link to="/cricket/womenhonours/">Honours</Link>
              </li>
              <li class="is-active">
                <Link to="/cricket/womengallery/">Gallery</Link>
              </li>

              <li>
                <Link to="/cricket/womenhistory/">History</Link>
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
                <Link to="/cricket/women/">Home</Link>
              </li>
              <li>
                <Link to="/cricket/womenhonours/">Honours</Link>
              </li>
              <li class="is-active">
                <Link to="/cricket/womengallery/">Gallery</Link>
              </li>
              <li>
                <Link to="/cricket/womenhistory/">History</Link>
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
export default WomenGallery;

export const query = graphql`
  query {
    wgall1: file(relativePath: { eq: "women-gallery-1.jpg" }) {
      ...fluidImage
    }
    wgall2: file(relativePath: { eq: "women-gallery-2.jpg" }) {
      ...fluidImage
    }
    wgall3: file(relativePath: { eq: "women-gallery-3.jpg" }) {
      ...fluidImage
    }
    wgall4: file(relativePath: { eq: "women-gallery-4.jpg" }) {
      ...fluidImage
    }
    wgall5: file(relativePath: { eq: "women-gallery-5.jpg" }) {
      ...fluidImage
    }
    wgall6: file(relativePath: { eq: "women-gallery-6.jpg" }) {
      ...fluidImage
    }
    wgall7: file(relativePath: { eq: "women-gallery-7.jpg" }) {
      ...fluidImage
    }
    wgall8: file(relativePath: { eq: "women-gallery-8.jpg" }) {
      ...fluidImage
    }
    wgall9: file(relativePath: { eq: "women-gallery-9.jpg" }) {
      ...fluidImage
    }
    wgall10: file(relativePath: { eq: "women-gallery-10.jpg" }) {
      ...fluidImage
    }
    wgall11: file(relativePath: { eq: "women-gallery-11.jpg" }) {
      ...fluidImage
    }
    wgall12: file(relativePath: { eq: "women-gallery-12.jpg" }) {
      ...fluidImage
    }
    wgall13: file(relativePath: { eq: "women-gallery-13.jpg" }) {
      ...fluidImage
    }
  }
`;
