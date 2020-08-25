import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import Error from "../components/projectError"
import projectsStyles from "../styles/projects.module.css"
import projectService from "../services/projects"

const ProjectPage = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

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

        <div className={projectsStyles.projectsScroll}>
          <div className={projectsStyles.projectsContainer}>
            <div className={projectsStyles.topGradient}></div>

            <div className={projectsStyles.loader}></div>

            <div className={projectsStyles.bottomGradient}></div>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title="projects" />

      <div className={projectsStyles.projectsScroll}>
        <div className={projectsStyles.projectsContainer}>
          <div className={projectsStyles.topGradient}></div>

          {projects.map(project => (
            <Project key={project.id} app={project} />
          ))}

          <div className={projectsStyles.bottomGradient}></div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectPage
