import React, { useState } from "react"

import Alert from "./alert"
import loginStyles from "../styles/login.module.css"
import projectService from "../services/projects"
import loginService from "../services/login"

const Login = ({ setCurrentUser, setFocus }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [alert, setAlert] = useState({})

  //  make this a component and import into dashboard page to show if not logged in

  const login = async e => {
    e.preventDefault()
    const form = e.target

    if (!username || !password) {
      setAlert({
        success: false,
        msg: `you forgot some stuff...`,
      })
      setShowAlert(true)

      setTimeout(() => {
        setShowAlert(false)
        setAlert({})
      }, 2500)
      return
    }

    try {
      const user = await loginService.login({
        username,
        password,
      })

      setAlert({
        success: true,
        msg: `morning sir...`,
      })
      setShowAlert(true)
      form.setAttribute("class", `${loginStyles.hideForm}`)
      setFocus()

      setTimeout(() => {
        setShowAlert(false)
        setAlert({})
        if (window !== "undefinec") {
          window.localStorage.setItem("loggedInUser", JSON.stringify(user))
        }
        projectService.setToken(user.token)
        setUsername("")
        setPassword("")
        setCurrentUser(user)
      }, 1750)
    } catch (exception) {
      console.error(exception)
      setAlert({
        success: false,
        msg: `nice try bud...`,
      })
      setShowAlert(true)

      setTimeout(() => {
        setShowAlert(false)
        setAlert({})
      }, 2500)
    }
  }

  return (
    <div className={loginStyles.wrap}>
      <form onSubmit={login} className={loginStyles.form}>
        {showAlert && <Alert alert={alert} />}
        <input
          type="text"
          className={loginStyles.input}
          style={{ top: "50px" }}
          value={username}
          placeholder="username"
          onChange={({ target }) => setUsername(target.value)}
          onFocus={setFocus}
          onBlur={setFocus}
        />
        <input
          type="password"
          className={loginStyles.input}
          style={{ top: "100px" }}
          value={password}
          placeholder="password"
          onChange={({ target }) => setPassword(target.value)}
          onFocus={setFocus}
          onBlur={setFocus}
        />
        <button className={loginStyles.button}>log in</button>
      </form>
    </div>
  )
}

export default Login
