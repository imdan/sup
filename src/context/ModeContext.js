import React, { useState, useEffect } from "react"

const defaultState = {
  dark: false,
  toggleDark: () => {},
}

const ModeContext = React.createContext(defaultState)

const ModeProvider = ({ children }) => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const lsDark = localStorage.getItem("dark")

    if (lsDark === "true") {
      setDark(true)
    } else {
      setDark(false)
    }
  }, [])

  const toggleDark = () => {
    const lsDark = !dark
    localStorage.setItem("dark", lsDark)
    setDark(!dark)
  }

  return (
    <ModeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ModeContext.Provider>
  )
}

export default ModeContext

export { ModeProvider }
