import React from "react"
import socialStyles from "../styles/socials.module.css"

const Socials = () => {
  return (
    <div className={socialStyles.social}>
      <a
        href="https://twitter.com/danmcguire_"
        target="_blank"
        rel="noreferrer"
        id="twitter"
      >
        <i className="fab fa-twitter" style={{ marginLeft: 0 }}></i>
      </a>
      <a
        href="https://github.com/imdan"
        target="_blank"
        rel="noreferrer"
        id="github"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://linkedin.com/in/danmcguire26"
        target="_blank"
        rel="noreferrer"
        id="linkedin"
      >
        <i className="fa fa-linkedin" aria-hidden="true"></i>
      </a>
    </div>
  )
}

export default Socials
