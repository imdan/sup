import React, { useEffect, useState } from "react"
// import { navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import Error from "../components/projectError"
import Scrollable from "../components/scrollable"
import projectsStyles from "../styles/projects.module.css"
import projectService from "../services/projects"

const ProjectPage = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  // const [delay, setDelay] = useState(true)

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

  // setTimeout(() => {
  //   setDelay(false)
  // }, 1000)

  if (error) {
    return (
      <Layout>
        <SEO title="projects" />
        <Error />
      </Layout>
    )
  }

  if (loading) {
    return (
      <Layout>
        <SEO title="projects" />

        <Scrollable>
          <div className={projectsStyles.loader}></div>
        </Scrollable>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title="projects" />

      <Scrollable>
        <>
          {projects.map(project => (
            <Project key={project.id} app={project} />
          ))}
        </>
        {/* {!delay && (
          <button
            className={`button`}
            style={{ position: "relative", marginTop: "40px" }}
            onClick={() => navigate("/log/")}
          >
            keep going
          </button>
        )} */}
      </Scrollable>
    </Layout>
  )
}

export default ProjectPage
