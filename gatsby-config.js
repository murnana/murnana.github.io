/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path")

module.exports = {
  siteMetadata: {
    title: "murnana.github.io",
  },
  plugins: [
    // Markdown
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: path.resolve(__dirname, "src"),
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        name: "markdown-pages",
        path: path.resolve(__dirname, "src"),
      },
    },
  ],
}
