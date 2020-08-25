import React from "react"

const Error = ({ message }) => (
  <>
    <p style={{ marginTop: "42vh" }}>
      uh oh...something broke...
      <br />
      <span
        onClick={() => {
          window.location.reload()
        }}
        onKeyDown={() => {
          window.location.reload()
        }}
        role="button"
        tabIndex="0"
        style={{ textDecoration: "underline", cursor: "pointer" }}
      >
        try reloading the page
      </span>
    </p>
  </>
)

export default Error
