import React from "react"
import alertStyles from "../styles/alert.module.css"

const Alert = ({ alert }) => {  

  if (!alert.success) {
    return (
      <div className={alertStyles.alertErr}>
        <i className={`fas fa-exclamation-circle ${alertStyles.alertIcon}`}></i>
        <p className={alertStyles.alertWords}>{alert.msg}</p>
      </div>
    )
  }

  return (
    <div className={alertStyles.alertSuccess}>
    <i className={`fas fa-check-circle ${alertStyles.alertIcon}`}></i>
    <p className={alertStyles.alertWords}>{alert.msg}</p>
  </div>
  )
}

export default Alert