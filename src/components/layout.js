/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

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

  return (
    <>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/e4bfb220a1.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <div className={hasFocus ? "hide" : "show"}>
        <Header siteTitle={data.site.siteMetadata.title} />
      </div>

      <main>{children}</main>

      <div className={hasFocus ? "hide" : "show"}>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
