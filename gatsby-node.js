/**
 *
 */
const Path = require("path")

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === "MarkdownRemark") {
    const { relativePath } = getNode(node.parent)
    createNodeField({
      node,
      name: "relativePath",
      value: relativePath,
    })
  }
}

exports.createPages = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  const allMarkdownCreatePagesQuery = await graphql(`
    query AllMarkdownCreatePagesQuery {
      allMarkdownRemark(sort: { fields: fields___relativePath, order: ASC }) {
        edges {
          node {
            id
            fields {
              relativePath
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (allMarkdownCreatePagesQuery.errors) {
    reporter.panicOnBuild(`${allMarkdownCreatePagesQuery.errors}`)
    console.error(allMarkdownCreatePagesQuery.errors)
    return
  }

  allMarkdownCreatePagesQuery.data.allMarkdownRemark.edges.forEach(
    ({
      node: {
        fields: { relativePath },
      },
    }) => {
      createPage({
        path: relativePath,
        component: Path.resolve(
          "src",
          "templates",
          "markdown-pages-template.js"
        ),
        context: {
          relativePath: relativePath,
        },
      })
    }
  )
}
