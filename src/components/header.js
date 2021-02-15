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

  if (width <= 500) {
    // move to own component
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
              <img
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

  return (
    <>
      <header>
        <div
        // style={{
        //   margin: `0 auto`,
        //   maxWidth: "90vw",
        //   // padding: `1.45rem 1.0875rem`,
        // }}
        >
          <Link to="/" className={headerStyles.logo} onClick={nod}>
            <img src={dark ? "../sup_w.svg" : "../sup.svg"} alt="sup." />
          </Link>

          {/* <Link
            to="/projects/"
            className={
              dark
                ? `${headerStyles.navLink} ${headerStyles.dark}`
                : headerStyles.navLink
            }
            activeClassName={headerStyles.active}
          >
            work
          </Link> */}
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
