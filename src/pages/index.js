import React from "react"

import indexStyles from "../styles/index.module.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Socials from "../components/socials"
import Particles from "../components/particles"

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <Particles />

    <main className={indexStyles.homeMain}>
      <p>connecting dots and stuff</p>
      <p className={indexStyles.aboutInfo}>
        javascript / node / react / mongodb
      </p>
      <Socials />
    </main>
  </Layout>
)

export default IndexPage
