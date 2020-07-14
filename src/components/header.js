import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "../styles/header.module.css"

const Header = () => {
  return (
    <>
      <header>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            // padding: `1.45rem 1.0875rem`,
          }}
        >
          <Link to="/" className={headerStyles.navLink}>
            home
          </Link>
          <Link
            to="/projects/"
            className={headerStyles.navLink}
            activeClassName={headerStyles.active}
          >
            projects
          </Link>
          <Link
            to="/contact/"
            className={headerStyles.navLink}
            activeClassName={headerStyles.active}
          >
            contact
          </Link>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
