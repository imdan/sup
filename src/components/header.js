import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import headerStyles from "../styles/header.module.css"
import MobileNav from "../components/mobileNav"

const Header = ({ dark }) => {
  const [showNav, setShowNav] = useState(false)
  const [hideNav, setHideNav] = useState(false)
  const [burger, setBurger] = useState(true)

  const nod = e => {
    if (e.shiftKey) {
      e.preventDefault()
      navigate("/dashboard/")
    }
  }

  const toggleNav = () => {
    // super secret link to dashboard
    if (!showNav) {
      setBurger(!burger)
      setShowNav(!showNav)
    } else {
      setBurger(!burger)
      setHideNav(true)
      setTimeout(() => {
        setShowNav(!showNav)
        setHideNav(false)
      }, 900)
    }
  }

  const width = typeof window !== "undefined" ? window.innerWidth : null

  // mobile navabar, should prob move to own component
  if (width <= 500) {
    return (
      <>
        <header>
          <div>
            <Link to="/" className={headerStyles.logo} onClick={nod}>
              <img src={dark ? "../sup_w.svg" : "../sup.svg"} alt="sup." />
            </Link>
            {burger ? (
              <i
                className={`fas fa-ellipsis-v ${headerStyles.menuIcon}`}
                style={dark ? { color: "white" } : { color: "black" }}
                onClick={toggleNav}
                onKeyDown={toggleNav}
                role="button"
                tabIndex={0}
                aria-label="open nav"
              ></i>
            ) : (
              <img //eslint-disable-line
                src={dark ? "../x_w.svg" : "../x.svg"}
                alt="nav toggler"
                onClick={toggleNav}
                onKeyDown={toggleNav}
                aria-label="open nav"
                style={{
                  width: "42px",
                  height: "auto",
                  transform: "translate(4px, -6px)",
                }}
              />
            )}
          </div>
        </header>
        <MobileNav
          show={showNav}
          hide={hideNav}
          setHideNav={setHideNav}
          setShowNav={setShowNav}
        />
      </>
    )
  }

  // desktop navbar
  return (
    <>
      <header>
        <div>
          <Link to="/" className={headerStyles.logo} onClick={nod}>
            <img src={dark ? "../sup_w.svg" : "../sup.svg"} alt="sup." />
          </Link>

          <Link
            to="/code/"
            className={
              dark
                ? `${headerStyles.navLink} ${headerStyles.dark}`
                : headerStyles.navLink
            }
            activeClassName={headerStyles.active}
          >
            code
          </Link>
          <Link
            to="/log"
            className={
              dark
                ? `${headerStyles.navLink} ${headerStyles.dark}`
                : headerStyles.navLink
            }
            activeClassName={headerStyles.active}
          >
            log
          </Link>
          <Link
            to="/contact/"
            className={
              dark
                ? `${headerStyles.navLink} ${headerStyles.dark}`
                : headerStyles.navLink
            }
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
