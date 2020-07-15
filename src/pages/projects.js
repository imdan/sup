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
      .then(res => {
        // console.log(response.data.data) should prob fix that data.data
        setProjects(res.data.data)
        setLoading(false)
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
