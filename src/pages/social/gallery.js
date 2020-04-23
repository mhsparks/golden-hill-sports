import React from "react";
import Layout from "../../components/layout";
import bar1 from "../../images/bar-1.jpg";
import bar2 from "../../images/bar-2.jpg";
import balcony from "../../images/balcony.jpg";
import floor1 from "../../images/floor-1.jpg";
import bench1 from "../../images/bench-1.jpg";
import bench2 from "../../images/bench-2.jpg";
import kitchen from "../../images/kitchen.jpg";
import space from "../../images/space-1.jpg";
import tables1 from "../../images/tables-1.jpg";
import tables2 from "../../images/tables-2.jpg";
import tables3 from "../../images/tables-3.jpg";
import kitchen2 from "../../images/kitchen2.jpg";
import { Link } from "gatsby";

const GalleryPage = () => {
  const pictures1 = [
    { alt: "Some text", src: bar1 },
    { alt: "Some different text", src: floor1 },
    { alt: "Some more text", src: kitchen },
    { alt: "Some more text", src: tables1 },
  ];
  const pictures2 = [
    { alt: "Some text", src: bar2 },
    { alt: "Some different text", src: bench1 },
    { alt: "Some more text", src: kitchen2 },
    { alt: "Some more text", src: tables2 },
  ];
  const pictures3 = [
    { alt: "Some text", src: balcony },
    { alt: "Some different text", src: bench2 },
    { alt: "Some more text", src: space },
    { alt: "Some more text", src: tables3 },
  ];
  const [pictureInModal, setPictureInModal] = React.useState("");
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
        <div class="tabs">
          <ul>
            <li class="is-active">
              <a>Clubhouse</a>
            </li>
            <li>
              <Link to="/social/fieldgallery">Sports Field</Link>
            </li>
            <li>
              <Link to="/social/pitpgallery">Party in the Park</Link>
            </li>
          </ul>
        </div>
        {pictureInModal ? (
          <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
              <p class="image image is-16by9">
                <button onClick={() => setPictureInModal("")}>
                  <img src={pictureInModal.src} alt={pictureInModal.alt} />
                </button>
              </p>
              <button onClick={() => setPictureInModal("")}>Close</button>
            </div>
          </div>
        ) : (
          <div class="columns">
            <div class="column">
              {pictures1.map(p => (
                <figure class="image">
                  <button
                    class="ghs-imageButton"
                    onClick={() => setPictureInModal(p)}
                  >
                    <img src={p.src} alt={p.alt} />
                  </button>
                  <div class="column"></div>
                </figure>
              ))}
            </div>
            <div class="column">
              {pictures2.map(p => (
                <figure class="image">
                  <button
                    class="ghs-imageButton"
                    onClick={() => setPictureInModal(p)}
                  >
                    <img src={p.src} alt={p.alt} />
                  </button>
                  <div class="column"></div>
                </figure>
              ))}
            </div>
            <div class="column">
              {pictures3.map(p => (
                <figure class="image">
                  <button
                    class="ghs-imageButton"
                    onClick={() => setPictureInModal(p)}
                  >
                    <img src={p.src} alt={p.alt} />
                  </button>
                  <div class="column"></div>
                </figure>
              ))}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default GalleryPage;
