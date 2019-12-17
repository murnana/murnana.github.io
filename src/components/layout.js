import React from "react"
import Menu from "./menu"

export default ({ children }) => (
  <div>
    <Menu />
    <main>{children}</main>
  </div>
)
