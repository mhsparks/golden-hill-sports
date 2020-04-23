/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import "./layout.scss";
import Header from "./header";
import Footer from "./footer";
import CricketHeader from "./cricketheader";
import SocialHeader from "./socialheader";

const Layout = ({ children, isCricket, isSocial }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="site">
      {isCricket ? <CricketHeader /> : isSocial ? <SocialHeader /> : <Header />}
      <main className="site-content">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isCricket: PropTypes.bool,
  isSocial: PropTypes.bool,
};

export default Layout;
