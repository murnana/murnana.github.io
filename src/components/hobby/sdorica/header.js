import React from "react"

export default ({ title, site, siteName, ruby }) => (
  <header
    style={{
      backgroundColor: "rgb(32, 28, 25)",
      padding: "0.6rem",
      boxShadow: "rgba(22, 17, 14, 0.9) 0px 10px 20px 0px",
      display: "block",
    }}
  >
    <h1
      style={{
        textAlign: "left",
        textShadow: "rgba(211, 129, 36, 0.808) 0px 0px 16px",
        fontFamily: "'Palatino Linotype', 'Sylfaen, serif",
        webkitFontSmoothing: "antialiased",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        color: "rgb(247, 213, 146)",
        display: "inline-block",
      }}
    >
      <ruby>
        {title}
        <rp>(</rp>
        <rt
          style={{
            fontSize: "0.5rem",
          }}
        >
          {ruby}
        </rt>
        <rp>)</rp>
      </ruby>
    </h1>
    <ul
      style={{
        display: "inline-block",
        padding: "0 1rem",

        listStyle: "none",

        color: "rgb(155, 132, 102)",
        textDecorationColor: "rgb(155, 132, 102)",
        borderColor: "rgb(155, 132, 102)",
      }}
    >
      <li
        style={{
          listStyle: "none",
        }}
      >
        fun page.
      </li>
      <li
        style={{
          listStyle: "none",
        }}
      >
        <a
          style={{
            color: "rgb(155, 132, 102)",
            textDecorationColor: "rgb(155, 132, 102)",
            borderColor: "rgb(155, 132, 102)",
          }}
          href={site}
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteName}
        </a>
      </li>
    </ul>
  </header>
)
