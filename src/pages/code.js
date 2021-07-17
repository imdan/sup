import React, { useEffect, useState, useContext } from "react"
// import { navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Error from "../components/projectError"
import Scrollable from "../components/scrollable"
import projectsStyles from "../styles/projects.module.css"
import workService from "../services/work"
import ModeContext from "../context/ModeContext"

const WorkPage = () => {
  const { dark } = useContext(ModeContext)
  const [work, setWork] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [languageStyle] = useState({
    html: "#e34c26",
    javascript: "#f1e05a",
    python: "#3572A5",
  })

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true)

      try {
        const workData = await workService.getWork()
        setWork(workData)
        setLoading(false)
      } catch (exception) {
        console.error(exception)
        setError(true)
      }
    }

    getProjects()
  }, [])

  const getLanguageStyle = lang => {
    switch (lang) {
      case "HTML":
        return languageStyle.html
      case "JavaScript":
        return languageStyle.javascript
      case "Python":
        return languageStyle.python
      default:
        return "white"
    }
  }

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
        <div className={projectsStyles.loader}></div>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title="projects" />

      <Scrollable>
        {work.projects && (
          <>
            {work.projects.map(p => (
              <div className={projectsStyles.item} key={p.id}>
                <a
                  href={p.html_url}
                  target="_blank"
                  rel="noreferrer"
                  style={
                    !dark
                      ? {
                          color: "#0366D6",
                          cursor: "pointer",
                          textDecoration: "none",
                        }
                      : {
                          color: "#58A6FF",
                          cursor: "pointer",
                          textDecoration: "none",
                        }
                  }
                >
                  {p.name}
                </a>
                <p style={{ fontSize: "14px" }}>{p.description}</p>
                <p style={{ fontSize: "12px" }}>
                  <span
                    style={{
                      border: `1px solid ${getLanguageStyle(p.language)}`,
                      backgroundColor: `${getLanguageStyle(p.language)}`,
                      borderRadius: "50%",
                      display: "inline-block",
                      height: "8px",
                      position: "relative",
                      top: "1px",
                      width: "8px",
                      marginRight: "4px",
                    }}
                  ></span>
                  {p.language}{" "}
                  <span style={{ marginLeft: "15px", fontSize: "11px" }}>
                    updated on {new Date(p.pushed_at).toDateString()}
                  </span>
                </p>
              </div>
            ))}
          </>
        )}
      </Scrollable>
    </Layout>
  )
}

export default WorkPage
