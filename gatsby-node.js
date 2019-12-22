const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const oldMarkDownPagesQuery = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  // Handle errors
  if (oldMarkDownPagesQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  oldMarkDownPagesQuery.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/old-markdown-pages/${node.id}/`,
      component: path.resolve(`src/templates/old-markdown-pages-template.js`),
      context: {
        id: node.id,
      }, // additional data can be passed via context
    })
  })
}
