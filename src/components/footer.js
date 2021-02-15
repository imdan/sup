import React from "react"
import footerStyles from "../styles/footer.module.css"

import Socials from "./socials.js"

const Footer = ({ dark }) => (
  <footer className={footerStyles.footer}>
    <Socials dark={dark} />
  </footer>
)

export default Footer
