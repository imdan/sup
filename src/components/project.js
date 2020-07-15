import React, { useState } from "react"
import Modal from "./projectModal"
import projectStyles from "../styles/project.module.css"

const Project = ({ app }) => {
  const [showModal, setShowModal] = useState(false)

  const builtWith = app.builtWith.join(" / ")

  const toggleTheModal = () => {
    if (showModal) {
      setShowModal(false)
    } else {
      setShowModal(true)
    }
  }

  return (
    <div className={projectStyles.projectCard}>
      {showModal && <Modal app={app} />}

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
