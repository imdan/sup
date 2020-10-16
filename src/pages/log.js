import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Log = () => {
  // const [hasFocus, setHasFocus] = useState(false)

  // const setFocus = () => {
  //   setHasFocus(!hasFocus)
  // }

  const style = {
    opacity: ".25",
    marginTop: "44vh",
  }

  return (
    <Layout>
      <SEO title="contact" />
      <div style={style}>
        <p>nothing to see here...</p>
      </div>
    </Layout>
  )
}

export default Log
