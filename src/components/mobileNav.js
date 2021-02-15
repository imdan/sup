import { Link, navigate } from "gatsby"
import React, { useState, useContext } from "react"
import headerStyles from "../styles/header.module.css"
import ModeContext from "../context/ModeContext"

const MobileNav = ({ show, hide, setHideNav, setShowNav }) => {
  const [cover, setCover] = useState(false)

  const { dark } = useContext(ModeContext)

  if (!show) {
    return null
  }

  const guide = e => {
    // flashes white while in dark mode, might get rid of navigate() and see what normal link does with hide/cover thing

    // e.preventDefault()

    // const link = e.target.href
    setHideNav(true)
    setCover(true)
    // setTimeout(() => {
    //   navigate(link)
    // }, 275)
  }

  return (
    <>
      <div
        className={!hide ? headerStyles.mobileNav : headerStyles.hideNav}
        style={
          dark
            ? {
                background:
                  "linear-gradient(rgba(40, 40, 40, 1) 75%,rgba(40, 40, 40, 0))",
              }
            : {
                background:
                  "linear-gradient(rgba(255, 255, 255, 1) 75%,rgba(255, 255, 255, 0))",
              }
        }
      >
        {/* <Link
          to="/projects/"
          className={headerStyles.mobileLink}
          style={dark ? { color: "white" } : { color: "black" }}
          activeClassName={headerStyles.active}
          onClick={guide}
        >
          work
        </Link> */}
        <Link
          to="/log"
          className={headerStyles.mobileLink}
          style={dark ? { color: "white" } : { color: "black" }}
          activeClassName={headerStyles.active}
          onClick={guide}
        >
          log
        </Link>
        <Link
          to="/contact/"
          className={headerStyles.mobileLink}
          style={dark ? { color: "white" } : { color: "black" }}
          activeClassName={headerStyles.active}
          onClick={guide}
        >
          contact
        </Link>
      </div>
      {cover && (
        <div
          style={
            dark
              ? {
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgb(40,40,40)",
                  zIndex: "5",
                }
              : {
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "white",
                  zIndex: "5",
                }
          }
        ></div>
      )}
    </>
  )
}

export default MobileNav
