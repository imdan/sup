import React from "react"

import thanksStyles from "../styles/thanks.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Particles from "../components/particles"

const ThanksPage = () => (
  <Layout>
    <SEO title="thanks" />
    <Particles />

    <main className={thanksStyles.main}>
      <p>cool, talk soon...</p>
    </main>
  </Layout>
)

export default ThanksPage
