import React, { useEffect, useContext } from "react"
import { navigate } from "gatsby"
import indexStyles from "../styles/index.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Socials from "../components/socials"
import Particles from "../components/particles"
import projectService from "../services/projects"
import ModeContext from "../context/ModeContext"

// timing on hideForm still kinda weird on first submit (or only submit for anyone besides me...), I think it's the css animation

const IndexPage = () => {
  const { dark } = useContext(ModeContext)

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

  const explore = () => {
    setTimeout(() => {
      navigate("/log/")
    }, 500)
  }

  return (
    <Layout>
      <SEO title="home" />
      <Particles dark={dark} />

      <main
        className={
          dark
            ? `${indexStyles.homeMain} ${indexStyles.dark}`
            : `${indexStyles.homeMain}`
        }
      >
        {/* <div className={indexStyles.square}></div> */}
        <p style={{ fontSize: "20px" }}>connecting dots and stuff</p>
        <p className={indexStyles.aboutInfo}>
          structure / focus / consistency / ...
        </p>
        {/* <Socials /> */}
        <button
          className={
            !dark
              ? `button ${indexStyles.explore}`
              : `button buttonDark ${indexStyles.explore}`
          }
          onClick={explore}
        >
          read on
        </button>
      </main>
    </Layout>
  )
}

export default IndexPage
