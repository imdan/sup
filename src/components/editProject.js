import React, { useState, useEffect } from "react"
import dashStyles from "../styles/dashboard.module.css"
import projectService from "../services/projects"

const EditProject = ({
  project,
  toggleEditable,
  isNew,
  hideNew,
  save,
  edit,
  setFocus,
}) => {
  const [thisProject, setThisProject] = useState({
    title: "",
    desc: "",
    builtWith: [],
    url: "",
    github: "",
    image: "",
  })

  useEffect(() => {
    if (!thisProject.title) {
      setThisProject(project)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project])

  //   console.log(thisProject)

  const update = (part, value) => {
    const updatedProject = { ...thisProject }

    if (part !== "builtWith") {
      updatedProject[part] = value
    } else {
      updatedProject.builtWith = value.split(" / ")
    }

    // console.log(part)

    setThisProject(updatedProject)
  }

  const builtWith =
    thisProject.builtWith === "undefined"
      ? ""
      : thisProject.builtWith.join(" / ")

  return (
    <>
      <div
        className={
          isNew
            ? `${dashStyles.project} ${dashStyles.new}`
            : `${dashStyles.project} ${dashStyles.edit}`
        }
        // style={{
        //   boxShadow: "10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff",
        //   borderLeft: "2px solid rgba(240,255,0,.95)",
        // }}
      >
        <h4 style={{ marginBottom: "5px" }}>
          {" "}
          <input
            value={thisProject.title}
            id="title"
            onChange={e => {
              update(e.target.id, e.target.value)
            }}
            onFocus={setFocus}
            onBlur={setFocus}
            className={dashStyles.input}
            style={{
              opacity: ".75",
            }}
          />
        </h4>
        {/* maybe get rid of these strong tags and just add a class... */}
        <strong>desc:</strong>{" "}
        <input
          value={thisProject.desc}
          id="desc"
          onChange={e => {
            update(e.target.id, e.target.value)
          }}
          onFocus={setFocus}
          onBlur={setFocus}
          className={dashStyles.input}
          style={{
            opacity: ".75",
          }}
        />
        <br />
        <strong>builtWith:</strong>{" "}
        <input
          value={builtWith}
          id="builtWith"
          onChange={e => {
            update(e.target.id, e.target.value)
          }}
          onFocus={setFocus}
          onBlur={setFocus}
          className={dashStyles.input}
          style={{
            opacity: ".75",
          }}
        />
        <br />
        <strong>url:</strong>{" "}
        <input
          value={thisProject.url}
          id="url"
          onChange={e => {
            update(e.target.id, e.target.value)
          }}
          onFocus={setFocus}
          onBlur={setFocus}
          className={dashStyles.input}
          style={{
            opacity: ".75",
          }}
        />
        <br />
        <strong>github:</strong>{" "}
        <input
          value={thisProject.github}
          id="github"
          onChange={e => {
            update(e.target.id, e.target.value)
          }}
          onFocus={setFocus}
          onBlur={setFocus}
          className={dashStyles.input}
          style={{
            opacity: ".75",
          }}
        />
        <br />
        <strong>image:</strong>{" "}
        <input
          value={thisProject.image}
          id="image"
          onChange={e => {
            update(e.target.id, e.target.value)
          }}
          onFocus={setFocus}
          onBlur={setFocus}
          className={dashStyles.input}
          style={{
            opacity: ".75",
          }}
        />
        <div className={dashStyles.controls}>
          {/* could probably create components for these */}
          {isNew && (
            <i
              className={`fas fa-save ${dashStyles.control} ${dashStyles.save}`}
              onClick={() => {
                //   edit(project)
                console.log(`save ${thisProject.title}`)

                projectService.setProject(thisProject)
                save()
              }}
              onKeyDown={() => {
                //   edit(project)
                console.log(`save ${thisProject.title}`)

                projectService.setProject(thisProject)
                save()
              }}
              role="button"
              aria-label="save updates"
              tabIndex={0}
            ></i>
          )}
          {!isNew && (
            <i
              className={`fas fa-check ${dashStyles.control} ${dashStyles.check}`}
              onClick={async () => {
                //   edit(project)
                console.log(`edit ${thisProject.title}`)

                projectService.setProject(thisProject)
                await edit(thisProject)
                toggleEditable()
              }}
              onKeyDown={async () => {
                //   edit(project)
                console.log(`edit ${thisProject.title}`)

                projectService.setProject(thisProject)
                await edit(thisProject)
                toggleEditable()
              }}
              role="button"
              aria-label="save updates"
              tabIndex={0}
            ></i>
          )}
          <i
            className={`fas fa-times ${dashStyles.control} ${dashStyles.x}`}
            style={{ marginLeft: "16px" }}
            onClick={() => {
              isNew ? hideNew() : toggleEditable()
            }}
            onKeyDown={() => {
              toggleEditable()
            }}
            role="button"
            aria-label="cancel updates"
            tabIndex={0}
          ></i>
        </div>
      </div>
    </>
  )
}

export default EditProject
