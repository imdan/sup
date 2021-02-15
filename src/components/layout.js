/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import ModeContext from "../context/ModeContext"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children, hasFocus }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { dark, toggleDark } = useContext(ModeContext)

  return (
    <div className={dark ? "dark" : "light"}>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/e4bfb220a1.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <div className={hasFocus ? "hide" : "show"}>
        <Header siteTitle={data.site.siteMetadata.title} dark={dark} />
      </div>

      <main>{children}</main>

      <div className={hasFocus ? "hide" : "show"}>
        <Footer dark={dark} />
      </div>
      <button
        className={dark ? `toggleDark` : `toggle`}
        onClick={() => toggleDark()}
      >
        <i className="far fa-lightbulb"></i>
      </button>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
