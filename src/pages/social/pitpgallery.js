import React from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";
import pitp1 from "../../images/pitp-1.jpg";
import pitp3 from "../../images/pitp-3.jpg";
import pitp5 from "../../images/pitp-5.jpg";

const PitpGallery = () => {
  const pictures1 = [
    { alt: "Some text", src: pitp1 },
    { alt: "Some different text", src: pitp3 },
    { alt: "Some more text", src: pitp5 },
  ];
  const pictures2 = [
    { alt: "Some text", src: pitp1 },
    { alt: "Some different text", src: pitp3 },
    { alt: "Some more text", src: pitp5 },
  ];
  const pictures3 = [
    { alt: "Some text", src: pitp1 },
    { alt: "Some different text", src: pitp3 },
    { alt: "Some more text", src: pitp5 },
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
            <li>
              <Link to="/social/gallery">Clubhouse</Link>
            </li>
            <li>
              <Link to="/social/fieldgallery">Sports Field</Link>
            </li>
            <li class="is-active">
              <Link to="/social/pitpgallery">Party in the Park</Link>
            </li>
          </ul>
        </div>

        {pictureInModal ? (
          <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
              <p class="image is-16by9">
                <img src={pictureInModal.src} alt={pictureInModal.alt} />
              </p>
              <button onClick={() => setPictureInModal("")}>Close</button>
            </div>
          </div>
        ) : (
          <div class="columns">
            <div class="column">
              {pictures1.map(p => (
                <figure class="image">
                  <button onClick={() => setPictureInModal(p)}>
                    <img src={p.src} alt={p.alt} />
                  </button>
                  <div class="column"></div>
                </figure>
              ))}
            </div>

            <div class="column">
              {pictures2.map(p => (
                <figure class="image">
                  <button onClick={() => setPictureInModal(p)}>
                    <img src={p.src} alt={p.alt} />
                  </button>
                  <div class="column"></div>
                </figure>
              ))}
            </div>
            <div class="column">
              {pictures3.map(p => (
                <figure class="image">
                  <button onClick={() => setPictureInModal(p)}>
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

export default PitpGallery;
