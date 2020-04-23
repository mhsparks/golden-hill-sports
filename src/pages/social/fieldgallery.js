import React from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";
import field1 from "../../images/field-1.jpg";
import field3 from "../../images/field-3.jpg";
import field4 from "../../images/field-4.jpg";
import field5 from "../../images/field-5.jpg";
import pitch1 from "../../images/pitch-1.jpg";
import pitch4 from "../../images/pitch-4.jpg";
import aerial from "../../images/aerial.jpg";
import pitch6 from "../../images/pitch-6.jpg";
import pitch10 from "../../images/pitch-10.jpg";

const FieldGallery = () => {
  const pictures1 = [
    { alt: "Some text", src: field1 },
    { alt: "Some different text", src: field3 },
    { alt: "Some more text", src: field4 },
  ];
  const pictures2 = [
    { alt: "Some text", src: field5 },
    { alt: "Some different text", src: pitch1 },
    { alt: "Some more text", src: pitch4 },
  ];
  const pictures3 = [
    { alt: "Some text", src: aerial },
    { alt: "Some different text", src: pitch6 },
    { alt: "Some more text", src: pitch10 },
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
            <li class="is-active">
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

export default FieldGallery;
