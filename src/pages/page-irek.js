import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IrekPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Irek is awesome</h1>
    <p>Welcome Irek is awesome page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default IrekPage
