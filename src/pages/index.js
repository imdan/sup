import React, { useEffect } from "react"
import { navigate } from "gatsby"
import indexStyles from "../styles/index.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Socials from "../components/socials"
import Particles from "../components/particles"
import projectService from "../services/projects"

// timing on hideForm still kinda weird on first submit (or only submit for anyone besides me...), I think it's the css animation

const IndexPage = () => {
  useEffect(() => {
    const wakeHeroku = async () => {
      try {
        const sup = await projectService.sup()
        console.log(JSON.stringify(sup, null, 4))
      } catch (exception) {
        console.error(exception)
      }
    }

    wakeHeroku()
  }, [])

  const revealLogin = () => {
    navigate("/dashboard/")
  }

  return (
    <Layout>
      <SEO title="home" />
      <Particles />

      <div
        style={{
          position: "absolute",
          width: "50px",
          height: "50px",
          left: "50%",
          bottom: "39px",
          transform: "translateX(-50%)",
          zIndex: "10",
        }}
      >
        <div
          className="node"
          onClick={revealLogin}
          onKeyDown={revealLogin}
          role="button"
          tabIndex={0}
        >
          .
        </div>
      </div>

      <main className={indexStyles.homeMain}>
        <p>connecting dots and stuff</p>
        <p className={indexStyles.aboutInfo}>code / words / stuff / ...</p>
        <Socials />
      </main>
    </Layout>
  )
}

export default IndexPage
