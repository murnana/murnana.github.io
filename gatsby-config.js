/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    // Markdown
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "old-markdown-pages",
        path: `${__dirname}/src/old-markdown-pages`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        name: "old-markdown-pages",
        path: `${__dirname}/src/old-markdown-pages`,
      },
    },
  ],
}
