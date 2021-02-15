import React, { useState, useContext } from "react"
import { navigate } from "gatsby-link"
import ModeContext from "../context/ModeContext"
import Alert from "../components/alert"
import formStyles from "../styles/form.module.css"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Form = ({ setFocus }) => {
  const [showAlert, setShowAlert] = useState(false)
  const [alert, setAlert] = useState({})
  const [error, setError] = useState(null)
  const [data, setData] = useState({})

  const { dark } = useContext(ModeContext)

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const validateName = e => {
    const re = /^[a-zA-Z ]{2,20}$/

    if (!re.test(e.target.value)) {
      setError({ ...error, [e.target.name]: true })
      if (dark) {
        e.target.style.border = "solid 1px red"
      } else {
        e.target.style.boxShadow = "0px 0px 4px rgba(255, 0, 0, 0.5)"
        e.target.style.border = "none"
      }
    } else {
      setError({ ...error, [e.target.name]: false })
      e.target.style.boxShadow = "0px 0px 4px rgba(0, 0, 0, 0.25)"
      e.target.style.border = "none"
    }
  }

  const validateEmail = e => {
    const re = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/

    if (!re.test(e.target.value)) {
      setError({ ...error, [e.target.name]: true })
      if (dark) {
        e.target.style.border = "solid 1px red"
      } else {
        e.target.style.boxShadow = "0px 0px 4px rgba(255, 0, 0, 0.5)"
        e.target.style.border = "none"
      }
    } else {
      setError({ ...error, [e.target.name]: false })
      e.target.style.boxShadow = "0px 0px 4px rgba(0, 0, 0, 0.25)"
      e.target.style.border = "none"
    }
  }

  const validateMessage = e => {
    if (e.target.value.length < 2) {
      setError({ ...error, [e.target.name]: true })
      if (dark) {
        e.target.style.border = "solid 1px red"
      } else {
        e.target.style.boxShadow = "0px 0px 4px rgba(255, 0, 0, 0.5)"
        e.target.style.border = "none"
      }
    } else {
      setError({ ...error, [e.target.name]: false })
      e.target.style.boxShadow = "0px 0px 4px rgba(0, 0, 0, 0.25)"
      e.target.style.border = "none"
    }
  }

  const validator = () => {
    if (!data.name || !data.email || !data.message) {
      setAlert({
        success: false,
        msg: "...you missed something...",
      })
      setShowAlert(true)

      setTimeout(() => {
        setShowAlert(false)
        return false
      }, 3000)
    } else if (error.name || error.email || error.message) {
      setAlert({
        success: false,
        msg: "...check the red ones...",
      })
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
        return false
      }, 3000)
    } else {
      return true
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const validForm = validator()

    if (validForm) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...data,
        }),
      })
        .then(() => {
          form.setAttribute("class", `${formStyles.hideForm}`)
          setTimeout(() => {
            navigate(form.getAttribute("action"))
          }, 1000)
        })
        .catch(error => alert(error))
    }
  }

  return (
    <>
      {showAlert && <Alert alert={alert} />}
      <form
        name="contact"
        method="POST"
        action="/thanks/"
        className={formStyles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label htmlFor="bot-field" id="bot-field">
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label
            className={formStyles.nameLabel}
            style={dark ? { color: "rgb(40,40,04)" } : {}}
            htmlFor="name"
            id="name"
          >
            name:
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className={`${formStyles.input} ${formStyles.name}`}
              placeholder="First Last"
              autoComplete="off"
              onFocus={setFocus}
              onBlur={e => {
                validateName(e)
                setFocus()
              }}
            />
          </label>
        </p>

        <p>
          <label
            className={formStyles.emailLabel}
            style={dark ? { color: "rgb(40,40,04)" } : {}}
            htmlFor="email"
            id="email"
          >
            email:
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className={`${formStyles.input} ${formStyles.email}`}
              placeholder="email@gmail.com"
              autoComplete="off"
              onFocus={setFocus}
              onBlur={e => {
                validateEmail(e)
                setFocus()
              }}
            />
          </label>
        </p>

        <p>
          <textarea
            type="text"
            name="message"
            onChange={handleChange}
            className={formStyles.msg}
            placeholder="hey..."
            autoComplete="off"
            onFocus={setFocus}
            onBlur={e => {
              validateMessage(e)
              setFocus()
            }}
          ></textarea>
        </p>

        <button
          type="submit"
          name="submit"
          className={
            !dark
              ? `button ${formStyles.hey}`
              : `button buttonDark ${formStyles.hey}`
          }
        >
          say hey
        </button>
      </form>
    </>
  )
}

export default Form
