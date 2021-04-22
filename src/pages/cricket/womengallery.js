import Gallery from "@browniebroke/gatsby-image-gallery";
import "@browniebroke/gatsby-image-gallery/dist/style.css";
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout";

const WomenGallery = ({ data }) => {
  const images = [
    {
      ...data.wgall25.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall27.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall16.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall21.childImageSharp,
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
    {
      ...data.wgall15.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall26.childImageSharp,
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
      ...data.wgall29.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall23.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall28.childImageSharp,
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
      ...data.wgall20.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall17.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall18.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall22.childImageSharp,
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
      ...data.wgall14.childImageSharp,
      thumbAlt: "",
      title: "",
      caption: "",
    },
    {
      ...data.wgall30.childImageSharp,
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
    wgall6: file(relativePath: { eq: "womens-gallery-6.jpg" }) {
      ...fluidImage
    }
    wgall28: file(relativePath: { eq: "women-gallery-28.jpg" }) {
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
    wgall29: file(relativePath: { eq: "women-gallery-29.jpg" }) {
      ...fluidImage
    }
    wgall14: file(relativePath: { eq: "women-gallery-14.jpg" }) {
      ...fluidImage
    }
    wgall15: file(relativePath: { eq: "womens-gallery-15.jpg" }) {
      ...fluidImage
    }
    wgall16: file(relativePath: { eq: "womens-gallery-16.jpg" }) {
      ...fluidImage
    }
    wgall17: file(relativePath: { eq: "womens-gallery-17.jpg" }) {
      ...fluidImage
    }
    wgall18: file(relativePath: { eq: "womens-gallery-18.jpg" }) {
      ...fluidImage
    }

    wgall20: file(relativePath: { eq: "women-gallery-20.jpg" }) {
      ...fluidImage
    }
    wgall21: file(relativePath: { eq: "women-gallery-21.jpg" }) {
      ...fluidImage
    }
    wgall22: file(relativePath: { eq: "womens-gallery-22.jpg" }) {
      ...fluidImage
    }
    wgall23: file(relativePath: { eq: "womens-gallery-23.jpg" }) {
      ...fluidImage
    }

    wgall25: file(relativePath: { eq: "womens-gallery-25.jpg" }) {
      ...fluidImage
    }
    wgall26: file(relativePath: { eq: "womens-gallery-26.jpg" }) {
      ...fluidImage
    }
    wgall27: file(relativePath: { eq: "women-gallery-27.jpg" }) {
      ...fluidImage
    }
    wgall30: file(relativePath: { eq: "women-gallery-30.jpg" }) {
      ...fluidImage
    }
  }
`;
