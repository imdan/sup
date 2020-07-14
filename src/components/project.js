import React, { useState } from "react"
import projectStyles from "../styles/project.module.css"

const Project = ({ app, loading }) => {
  const [showModal, setShowModal] = useState(false)

  const builtWith = app.builtWith.join(" / ")

  const toggleTheModal = () => {
    if (showModal) {
      setShowModal(false)
    } else {
      setShowModal(true)
    }
  }

  if (loading) {
    return (
      <div className={projectStyles.loadingCard}>
        <p className={projectStyles.loadingDot}>.</p>
      </div>
    )
  }

  return (
    <div className={projectStyles.projectCard}>
      {showModal && (
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
      )}

      <div>
        <img
          src={app.image}
          className={projectStyles.projectImg}
          alt={`${app.title} icon`}
        />
        <h2 className={projectStyles.projectTitle}>{app.title}</h2>
        <p className={projectStyles.techUsed}>{builtWith}</p>
        <p className={projectStyles.description}>{app.desc}</p>
        <button
          className={projectStyles.button}
          onClick={toggleTheModal}
          aria-label="Show Links"
        >
          {showModal ? (
            <i className="far fa-times-circle"></i>
          ) : (
            <i className="fas fa-link"></i>
          )}
        </button>
      </div>
    </div>
  )
}

export default Project
