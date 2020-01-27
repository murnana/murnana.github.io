import React from "react"

export default ({ hash, size }) => (
  <img
    src={`https://www.gravatar.com/avatar/${hash}?s=${size}`}
    alt="Gravatar"
  />
)
