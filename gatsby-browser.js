/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import "./src/styles/main.css"
import { ModeProvider } from "./src/context/ModeContext"
import { SettingsProvider } from "./src/context/SettingsContext"

export const wrapRootElement = ({ element }) => (
  <ModeProvider>
    <SettingsProvider>{element}</SettingsProvider>
  </ModeProvider>
)
