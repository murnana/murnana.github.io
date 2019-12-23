import React from "react"
import Menu from "./menu"

export default ({ children }) => (
  <div className="layout">
    <Menu />
    <main>{children}</main>
  </div>
)
