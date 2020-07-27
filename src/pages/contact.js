import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import contactStyles from "../styles/contact.module.css"
import Form from "../components/contactForm"

const ContactPage = () => {
  const [hasFocus, setHasFocus] = useState(false)

  const setFocus = () => {
    setHasFocus(!hasFocus)
  }

  return (
    <Layout hasFocus={hasFocus}>
      <SEO title="contact" />
      <div className={contactStyles.wrap}>
        <Form setFocus={setFocus} />
      </div>
    </Layout>
  )
}

export default ContactPage
