import React from "react"
import projectStyles from "../styles/project.module.css"

const Modal = ({ app }) => {
  return (
    <div className={projectStyles.projectOverlay}>
      <a
        href={app.url}
        className={projectStyles.extLink}
        target="_blank"
        rel="noreferrer"
        alt="link to project"
      >
        <i className={`fas fa-external-link-alt ${projectStyles.icon}`}></i>
      </a>
      <a
        href={app.github}
        target="_blank"
        className={projectStyles.githubLink}
        rel="noreferrer"
        alt="link to github"
      >
        <i className={`fab fa-github ${projectStyles.icon}`}></i>
      </a>
    </div>
  )
}

export default Modal
