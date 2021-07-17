import React, { useEffect, useContext, useState } from "react"
import { navigate } from "gatsby"
import indexStyles from "../styles/index.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Socials from "../components/socials"
import Particles from "../components/particles"
import ModeContext from "../context/ModeContext"
import SettingsContext from "../context/SettingsContext"
import workService from "../services/work"
import axios from "axios"

// const settingsUrl = "http://localhost:3000/api/settings"
const api_url = "https://sup-cool.herokuapp.com/"

const IndexPage = () => {
  const { dark } = useContext(ModeContext)
  const { settings, getSettings } = useContext(SettingsContext)
  const [me, setMe] = useState([])

  useEffect(() => {
    const wakeHeroku = async () => {
      try {
        const meData = await workService.getMe()
        setMe(meData)
        const sup = await axios.get(api_url)
        getSettings()
        console.log(JSON.stringify(sup.data, null, 4))
      } catch (exception) {
        console.error(exception)
      }
    }

    wakeHeroku()
  }, []) //eslint-disable-line

  const explore = () => {
    setTimeout(() => {
      navigate("/contact/")
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
        {settings.showProfilePic && (
          <img
            src={`${me.avatar_url}`}
            alt="my face"
            className={indexStyles.profilePic}
          />
        )}
        <p style={{ fontSize: "20px" }}>{me.bio ? `${me.bio}` : ""}</p>
        <p className={indexStyles.aboutInfo}>
          structure / focus / consistency / ...
        </p>

        {settings.showCTA && (
          <button
            className={
              !dark
                ? `button ${indexStyles.explore}`
                : `button buttonDark ${indexStyles.explore}`
            }
            onClick={explore}
          >
            contact
          </button>
        )}
      </main>
    </Layout>
  )
}

export default IndexPage
