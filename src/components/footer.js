import React from "react"
import footerStyles from "../styles/footer.module.css"

const Footer = () => (
  <footer className={footerStyles.footer}>
    <a href="https://sup.cool" className={footerStyles.home}>
      <img src="/sup.gif" alt="sup." className={footerStyles.sup} />
    </a>
  </footer>
)

export default Footer
