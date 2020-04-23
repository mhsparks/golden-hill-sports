import Img from "gatsby-image";
import React from "react";

const Gallery = ({ data, pictures }) => {
  const [pictureInModal, setPictureInModal] = React.useState("");
  return (
    <div>
      {pictureInModal ? (
        <div class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-content">
            <p class="image">
              <a role="button" onClick={() => setPictureInModal("")}>
                <Img
                  fluid={data[pictureInModal.src].childImageSharp.fluid}
                  alt={pictureInModal.alt}
                />
              </a>
            </p>
            <button onClick={() => setPictureInModal("")}>Close</button>
          </div>
        </div>
      ) : (
        <div class="columns">
          {pictures.map((column, i) => (
            <div class="column" key={`col-${i}`}>
              {column.map(p => (
                <figure class="image" key={p.src}>
                  <a role="button" onClick={() => setPictureInModal(p)}>
                    <Img
                      fluid={data[p.src].childImageSharp.fluid}
                      alt={p.alt}
                    />
                  </a>
                  <div class="column"></div>
                </figure>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
