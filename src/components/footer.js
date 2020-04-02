import React from "react";
import "./layout.scss";

const Footer = () => {
  return (
    <div>
      <footer class="footer is-primary">
        <div class="content has-text-centered">
          <p>© {new Date().getFullYear()}, Golden Hill Sport</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
