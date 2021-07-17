import React, { useState, useEffect } from "react"
import axios from "axios"

// const settingsUrl = "http://localhost:3000/api/settings"
const settingsUrl = "https://sup-cool.herokuapp.com/api/settings"

const defaultState = {
  settings: {},
}

const SettingsContext = React.createContext(defaultState)

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({})

  useEffect(() => {
    getSettings()
  }, [])

  const getSettings = async () => {
    const settingsObj = await axios.get(settingsUrl)
    setSettings(settingsObj.data.settings)
  }

  return (
    <SettingsContext.Provider
      value={{
        settings,
        getSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsContext

export { SettingsProvider }
