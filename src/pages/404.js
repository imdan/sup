import React from "react"

import notFoundStyles from "../styles/404.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <main className={notFoundStyles.main}>
      <h1>NOT FOUND</h1>
      <p style={{ margin: "10px 50px" }}>
        ahh snap...you just hit a page that doesn&#39;t exist...
      </p>
      <Link to="/">
        <p style={{ color: "black", cursor: "pointer" }}>...go home...</p>
      </Link>
    </main>
  </Layout>
)

export default NotFoundPage
