import React, { useEffect, useState } from "react"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import Error from "../components/projectError"
import projectsStyles from "../styles/projects.module.css"

const ProjectPage = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    const url = "https://sup-cool.herokuapp.com/api/projects"
    axios
      .get(url)
      .then(response => {
        // console.log(response.data.data)
        setProjects(response.data.data)
        setTimeout(() => {
          setLoading(false)
        }, 750)
      })
      .catch(err => {
        console.error(err)
        setError(true)
      })
  }, [])

  if (error) {
    return (
      <Layout>
        <SEO title="projects" />
        <Error />
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
            <Project key={project.id} app={project} loading={loading} />
          ))}

          <div className={projectsStyles.bottomGradient}></div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectPage
