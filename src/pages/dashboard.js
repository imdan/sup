import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Login from "../components/login"
import SEO from "../components/seo"
import Error from "../components/projectError"
import Scrollable from "../components/scrollable"
import DashProject from "../components/dashProject"
import EditProject from "../components/editProject"
import projectsStyles from "../styles/projects.module.css"
import projectService from "../services/projects"
import dashStyles from "../styles/dashboard.module.css"

const Dashboard = () => {
  const [hasFocus, setHasFocus] = useState(false)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [user, setUser] = useState(null)
  const [createNewProject, setCreateNewProject] = useState(false)
  const [newProject, setNewProject] = useState({})

  // clean everything up where possible, weird issue with token not being set....maybe tests...maybe

  useEffect(() => {
    if (window !== "undefined") {
      const loggedInUser = window.localStorage.getItem("loggedInUser")

      if (loggedInUser) {
        const user = JSON.parse(loggedInUser)

        projectService.setToken(user.token)
        setUser(user)
      }
    }
  }, [])

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true)

      try {
        const response = await projectService.getAll()
        const projects = response.data
        projects.reverse()
        setProjects(projects)
        setLoading(false)
      } catch (exception) {
        console.error(exception)
        setError(true)
      }
    }

    getProjects()
  }, [])

  const setFocus = () => {
    setHasFocus(!hasFocus)
  }

  const setCurrentUser = currentUser => {
    setUser(currentUser)
  }

  const logout = () => {
    setUser(null)
    if (window !== "undefined") {
      window.localStorage.clear()
    }
    // navigate("/")
  }

  const addNew = () => {
    console.log("add new project")
    const newProject = {
      title: "new_project",
      desc: "something new",
      builtWith: [],
      url: "https://www.",
      github: "https://www.github.com/",
      image: "/",
    }

    setNewProject(newProject)
    setCreateNewProject(true)
  }

  const hideNew = () => {
    setCreateNewProject(false)
    setNewProject({})
  }

  const save = async () => {
    const newProject = await projectService.create()
    const newArray = [...projects]
    newArray.unshift(newProject)
    console.log(newArray)

    setProjects(newArray)
    setCreateNewProject(false)
    setNewProject({})
  }

  const edit = async project => {
    console.log(`edit ${project.title}`)
    const projIdArr = projects.map(project => project.id)
    const index = projIdArr.indexOf(project.id)
    const newArr = [...projects]

    const updatedProject = await projectService.update()
    newArr[index] = updatedProject

    setProjects(newArr)
  }

  const destroy = projectToDelete => {
    console.log(`destroy ${projectToDelete.title}`)
    projectService.remove(projectToDelete.id)
    const newArray = projects.filter(
      project => project.id !== projectToDelete.id
    )

    setProjects(newArray)
  }

  if (!user) {
    return (
      <Layout hasFocus={hasFocus}>
        <SEO title="dashboard" />
        <Login setCurrentUser={setCurrentUser} setFocus={setFocus} />
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout>
        <SEO title="dashboard" />
        <Error />
      </Layout>
    )
  }

  if (loading) {
    return (
      <Layout hasFocus={hasFocus}>
        <SEO title="dashboard" />

        <div className={projectsStyles.projectsScroll}>
          <div className={projectsStyles.projectsContainer}>
            <div className={projectsStyles.loader}></div>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout hasFocus={hasFocus}>
      <SEO title="dashboard" />
      {/* could probably make a log out component */}
      <p>
        <span
          onClick={logout}
          onKeyDown={logout}
          role="button"
          tabIndex="0"
          className={dashStyles.logout}
        >
          log out
        </span>
      </p>

      <Scrollable>
        <>
          {createNewProject && (
            <EditProject
              project={newProject}
              isNew={true}
              hideNew={hideNew}
              save={save}
              destroy={destroy}
              setFocus={setFocus}
            />
          )}
          {projects.map(project => (
            <DashProject
              project={project}
              key={project.id}
              edit={edit}
              destroy={destroy}
            />
          ))}
        </>
      </Scrollable>

      <i
        className={`fas fa-plus ${dashStyles.addProject}`}
        onClick={addNew}
        onKeyDown={addNew}
        role="button"
        aria-label="add new project"
        tabIndex={0}
      ></i>
    </Layout>
  )
}

export default Dashboard
