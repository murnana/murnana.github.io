import React from "react"

export default ({ title, children }) => (
  <div
    style={{
      padding: "1rem",
      // paddingTop: "2.5rem",
      // paddingLeft: "1rem",
      // paddingRight: "1rem",
      // paddingBottom: "1rem",
    }}
  >
    <div
      style={{
        backgroundColor: "rgb(32, 28, 25)",

        borderColor: "rgb(115, 88, 62)",
        borderRadius: "10px",
        borderWidth: "2px",
        borderStyle: "solid",

        boxShadow: "rgba(22, 17, 14, 0.9) 0px 10px 20px 0px",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          WebkitFontSmoothing: "antialiased",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          color: "rgb(255, 242, 218)",
          textAlign: "center",
          textShadow: "rgba(211, 110, 36, 0.4) 0px 0px 16px",
          fontSize: "1.2rem",
        }}
      >
        {title}
      </h2>
    </div>
    <div
      style={{
        borderColor: "rgba(115, 88, 62, 0.4)",
        borderWidth: "2px",

        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",

        borderStyle: "none solid solid",

        boxShadow: "rgba(22, 17, 14, 0.9) 0px 10px 20px 0px",
        boxSizing: "border-box",

        padding: "1.5rem",

        fontFamily: "Montserrat, 'Helvetica Neue', Arial, sans-serif",
        color: "rgb(32, 28, 25)",
      }}
    >
      {children}
    </div>
  </div>
)
