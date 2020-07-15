import React, { useEffect } from "react"
import axios from "axios"

import indexStyles from "../styles/index.module.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Socials from "../components/socials"
import Particles from "../components/particles"

// mobile form input is weird with logo and header, overall not bad really...

const IndexPage = () => {
  useEffect(() => {
    const url = "https://sup-cool.herokuapp.com/"
    // wake up heroku
    axios
      .get(url)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
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
}

export default IndexPage
