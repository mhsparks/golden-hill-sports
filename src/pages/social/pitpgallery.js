import React from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";
import pitp1 from "../../images/pitp-1.jpg";
import pitp3 from "../../images/pitp-3.jpg";
import pitp5 from "../../images/pitp-5.jpg";
import pitp6 from "../../images/pitp-6.jpg";
import pitp7 from "../../images/pitp-7.jpg";
import pitp8 from "../../images/pitp-8.jpg";
import pitp9 from "../../images/pitp-9.jpg";
import pitp10 from "../../images/pitp-10.jpg";
import pitplogo from "../../images/pitp-logo.jpg";
import fireworks1 from "../../images/pitp-firework1.jpg";
import fireworks2 from "../../images/pitp-firework2.jpg";
import bbq from "../../images/pitp-bbq.jpg";

const PitpGallery = () => {
  const pictures1 = [
    { alt: "Some text", src: pitplogo },
    { alt: "Some different text", src: pitp7 },
    { alt: "Some more text", src: pitp1 },
    { alt: "Some more text", src: fireworks1 },
  ];
  const pictures2 = [
    { alt: "Some text", src: pitp10 },
    { alt: "Some different text", src: bbq },
    { alt: "Some more text", src: pitp3 },
    { alt: "Some more text", src: fireworks2 },
  ];
  const pictures3 = [
    { alt: "Some text", src: pitp9 },
    { alt: "Some different text", src: pitp6 },
    { alt: "Some more text", src: pitp5 },
    { alt: "Some more text", src: pitp8 },
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

export default PitpGallery;
