import React, { useContext } from "react"
import scrollableStyles from "../styles/scrollable.module.css"
import ModeContext from "../context/ModeContext"

const Scrollable = ({ children }) => {
  const { dark } = useContext(ModeContext)
  return (
    <div className={scrollableStyles.scrollable}>
      <div className={scrollableStyles.container}>
        <div
          className={
            dark
              ? `${scrollableStyles.topGradient} ${scrollableStyles.topDark}`
              : scrollableStyles.topGradient
          }
        ></div>
        <div style={{ height: "25px", width: "100%", display: "block" }}></div>
        <>{children}</>

        <div
          className={
            dark
              ? `${scrollableStyles.bottomGradient} ${scrollableStyles.bottomDark}`
              : scrollableStyles.bottomGradient
          }
        ></div>
      </div>
    </div>
  )
}

export default Scrollable
