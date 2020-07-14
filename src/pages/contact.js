import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import contactStyles from "../styles/contact.module.css"
import Form from "../components/contactForm"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="contact" />
      <div className={contactStyles.wrap}>
        <Form />
      </div>
    </Layout>
  )
}

export default ContactPage
