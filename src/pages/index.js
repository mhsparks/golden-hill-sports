import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Logo from "../images/ghs-logo.png"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new GHS site.</p>
    <p>Now go build something great.</p>
    <img src={Logo} alt="Golden Hill Sports Logo" />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
