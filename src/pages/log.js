import React from "react"
// import { navigate } from "gatsby"
// import Post from "../components/post"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Scrollable from "../components/scrollable"

const Log = () => {
  // const [hasFocus, setHasFocus] = useState(false)

  // const setFocus = () => {
  //   setHasFocus(!hasFocus)
  // }

  return (
    <Layout>
      <SEO title="log" />
      <p
        style={{
          position: "absolute",
          top: "42%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: ".5",
        }}
      >
        nothing to see here...
      </p>
      {/* <Scrollable> */}
      {/* <Post />
        <Post /> */}
      {/* <button
          className={`button`}
          onClick={() => navigate("/contact/")}
          style={{ position: "relative", marginTop: "40px" }}
        >
          one more
        </button> */}
      {/* </Scrollable> */}
    </Layout>
  )
}

export default Log
