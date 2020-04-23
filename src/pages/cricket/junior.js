import React from "react";
import Layout from "../../components/layout";

import youth1 from "../../images/youth-1.jpg";
import youth2 from "../../images/youth-2.jpg";
import youth3 from "../../images/youth-3.jpg";
import youth4 from "../../images/youth-4.jpg";
import youth5 from "../../images/youth-5.jpg";
import youth6 from "../../images/youth-6.jpg";

const JuniorPage = () => {
  const pictures1 = [
    { alt: "Some text", src: youth1 },
    { alt: "Some different text", src: youth4 },
    { alt: "Some text", src: youth1 },
    { alt: "Some different text", src: youth4 },
  ];
  const pictures2 = [
    { alt: "Some text", src: youth2 },
    { alt: "Some different text", src: youth5 },
    { alt: "Some text", src: youth1 },
    { alt: "Some different text", src: youth4 },
  ];
  const pictures3 = [
    { alt: "Some text", src: youth3 },
    { alt: "Some different text", src: youth6 },
    { alt: "Some text", src: youth1 },
    { alt: "Some different text", src: youth4 },
  ];
  const pictures4 = [
    { alt: "Some text", src: youth3 },
    { alt: "Some different text", src: youth6 },
    { alt: "Some text", src: youth1 },
    { alt: "Some different text", src: youth4 },
  ];
  const pictures5 = [
    { alt: "Some text", src: youth3 },
    { alt: "Some different text", src: youth6 },
    { alt: "Some text", src: youth1 },
    { alt: "Some different text", src: youth4 },
  ];
  const pictures6 = [
    { alt: "Some text", src: youth3 },
    { alt: "Some different text", src: youth6 },
    { alt: "Some text", src: youth1 },
    { alt: "Some different text", src: youth4 },
  ];

  const [pictureInModal, setPictureInModal] = React.useState("");
  return (
    <Layout isCricket>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-4">Youth Cricket</h1>
          </div>
        </div>
      </section>
      <section>
        {pictureInModal ? (
          <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
              <p class="image image is-4by3">
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
            <div class="column">
              {pictures4.map(p => (
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
              {pictures5.map(p => (
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
              {pictures6.map(p => (
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
export default JuniorPage;
