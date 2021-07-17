import React, { useEffect, useState, useContext } from "react"
import Layout from "../components/layout"
import Login from "../components/login"
import SEO from "../components/seo"
import Error from "../components/projectError"
// import Scrollable from "../components/scrollable"
import dashStyles from "../styles/dashboard.module.css"
import workService from "../services/work"
import { updateSettings } from "../services/settings"
import SettingsContext from "../context/SettingsContext"
import ModeContext from "../context/ModeContext"

const Dashboard = () => {
  const { settings, getSettings } = useContext(SettingsContext)
  const [hasFocus, setHasFocus] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [user, setUser] = useState(null)
  const [listItem, setListItem] = useState("")
  const [selectedProjects, setSelectedProjects] = useState([])
  const { dark } = useContext(ModeContext)

  useEffect(() => {
    if (window !== "undefined") {
      const loggedInUser = window.localStorage.getItem("loggedInUser")

      if (loggedInUser) {
        const user = JSON.parse(loggedInUser)
        setUser(user)
      }
    }
  }, [])

  useEffect(() => {
    getSettings()

    const getProjects = async () => {
      setLoading(true)

      try {
        const currentList = await workService.getList()
        setSelectedProjects(currentList)

        setLoading(false)
      } catch (exception) {
        console.error(exception)
        setError(true)
      }
    }

    getProjects()
  }, []) //eslint-disable-line

  const setFocus = () => {
    setHasFocus(!hasFocus)
  }

  const setCurrentUser = currentUser => {
    setUser(currentUser)
  }

  const logout = () => {
    setUser(null)
    if (window !== "undefined") {
      window.localStorage.clear()
    }
  }

  const updateProfilePicSetting = async () => {
    await updateSettings(
      {
        settings: {
          showProfilePic: !settings.showProfilePic,
          showCTA: settings.showCTA,
          id: settings.id,
        },
      },
      user.token
    )
    getSettings()
  }

  const updateCTASetting = async () => {
    await updateSettings(
      {
        settings: {
          showProfilePic: settings.showProfilePic,
          showCTA: !settings.showCTA,
          id: settings.id,
        },
      },
      user.token
    )
    getSettings()
  }

  const addListItem = async () => {
    const { work } = await workService.getAll()
    const repos = work.data.map(r => r.name)

    if (repos.includes(listItem) && !selectedProjects.includes(listItem)) {
      const newList = selectedProjects.map(i => i)
      newList.push(listItem)
      console.log(newList)
      await workService.updateProjectList({ list: newList }, user.token)
      setSelectedProjects(newList)
      setListItem("")
    }
  }

  const removeListItem = async () => {
    const { work } = await workService.getAll()
    const repos = work.data.map(r => r.name)

    if (repos.includes(listItem) && selectedProjects.includes(listItem)) {
      const newList = selectedProjects.map(i => i)
      const filteredList = newList.filter(i => i !== listItem)
      await workService.updateProjectList({ list: filteredList }, user.token)
      setSelectedProjects(filteredList)
      setListItem("")
    }
  }

  // show login if no user
  if (!user) {
    return (
      <Layout hasFocus={hasFocus}>
        <SEO title="dashboard" />
        <Login setCurrentUser={setCurrentUser} setFocus={setFocus} />
      </Layout>
    )
  }

  // show error if error
  if (error) {
    return (
      <Layout>
        <SEO title="dashboard" />
        <Error />
      </Layout>
    )
  }

  // show loading... if projects not loaded yet
  if (loading) {
    return (
      <Layout hasFocus={hasFocus}>
        <SEO title="dashboard" />

        <div>loading...</div>
      </Layout>
    )
  }

  return (
    <Layout hasFocus={hasFocus}>
      <SEO title="dashboard" />

      {/* log out component */}
      <p>
        <span
          onClick={logout}
          onKeyDown={logout}
          role="button"
          tabIndex="0"
          className={dashStyles.logout}
          style={dark ? { color: "rgb(51, 255, 51)" } : { color: "#0366D6" }}
        >
          log out
        </span>
      </p>

      {/* settings component */}
      <div className={dashStyles.settingsArea}>
        <p className={dashStyles.settingsText}>Show Profile Pic</p>{" "}
        <input
          type="checkbox"
          className={dashStyles.settingsInput}
          onChange={updateProfilePicSetting}
          checked={settings.showProfilePic}
        />
        <p className={dashStyles.settingsText}>Show Call to action</p>
        <input
          type="checkbox"
          className={dashStyles.settingsInput}
          onChange={updateCTASetting}
          checked={settings.showCTA}
        />
        <br />
        {/* update code list component */}
        <p>current list:</p>
        <p>{selectedProjects.join(", ")}</p>
        <p className={dashStyles.settingsText}>update list:</p>
        <input
          type="text"
          placeholder="project to add/remove"
          style={{ width: "275px" }}
          value={listItem}
          onChange={e => {
            setListItem(e.target.value)
          }}
        />
        <div className={dashStyles.buttonContainer}>
          <button
            className={
              dark
                ? `button buttonDark ${dashStyles.addButton}`
                : `button ${dashStyles.addButton}`
            }
            onClick={addListItem}
          >
            add
          </button>
          <button
            className={dark ? `button buttonDark` : `button`}
            style={{
              width: "72px",
              height: "28px",
            }}
            onClick={removeListItem}
          >
            remove
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
