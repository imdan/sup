import React, { useState, useContext } from "react"
import ModeContext from "../context/ModeContext"
import dashStyles from "../styles/dashboard.module.css"
import EditProject from "../components/editProject"

const DashProject = ({ project, edit, destroy }) => {
  const [editProject, setEditProject] = useState(false)
  const [sendToTrash, setSendToTrash] = useState(false)

  const { dark } = useContext(ModeContext)

  // useEffect(() => {
  //   setThisProject(project)
  // }, [project])

  const toggleEditable = () => {
    setEditProject(!editProject)
  }

  const toTrash = project => {
    destroy(project)
    setSendToTrash(false)
  }

  const builtWith = !project ? "" : project.builtWith.join(" / ")

  if (editProject) {
    return (
      <>
        <EditProject
          project={project}
          toggleEditable={toggleEditable}
          edit={edit}
        />
      </>
    )
  }

  return (
    <>
      <div
        className={
          dark
            ? `${dashStyles.project} ${dashStyles.dark}`
            : `${dashStyles.project}`
        }
        style={sendToTrash ? { borderLeft: "2px solid red" } : {}}
      >
        <h4 style={{ marginBottom: "5px" }}> {project.title}</h4>
        <strong>desc:</strong> {project.desc}
        <br />
        <strong>builtWith:</strong> {builtWith}
        <br />
        <strong>url:</strong> {project.url}
        <br />
        <strong>github:</strong> {project.github}
        <br />
        <strong>image:</strong> {project.image}
        <div className={dashStyles.controls}>
          {/* make components for these pass in a type or something */}
          {!sendToTrash && (
            <i
              className={`fas fa-pen ${dashStyles.control} ${dashStyles.pen}`}
              onClick={() => {
                toggleEditable()
              }}
              onKeyDown={() => {
                toggleEditable()
              }}
              role="button"
              aria-label="edit project"
              tabIndex={0}
            ></i>
          )}
          <i
            className={`fas fa-trash ${dashStyles.control} ${dashStyles.trash}`}
            style={
              sendToTrash
                ? { color: "red", marginRight: "16px" }
                : { marginLeft: "16px" }
            }
            onClick={() => {
              sendToTrash ? toTrash(project) : setSendToTrash(true)
            }}
            onKeyDown={() => {
              sendToTrash ? toTrash(project) : setSendToTrash(true)
            }}
            role="button"
            aria-label="delete project"
            tabIndex={0}
          ></i>
          {sendToTrash && (
            <i
              className={`fas fa-times ${dashStyles.control}`}
              onClick={() => {
                setSendToTrash(false)
              }}
              onKeyDown={() => {
                setSendToTrash(false)
              }}
              role="button"
              aria-label="delete project"
              tabIndex={0}
            ></i>
          )}
        </div>
      </div>
    </>
  )
}

export default DashProject
