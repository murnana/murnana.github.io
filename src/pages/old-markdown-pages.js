import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map(edge => (
    <li key={edge.node.id}>
      <Link to={`old-markdown-pages/${edge.node.id}`}>
        {edge.node.frontmatter.title}
      </Link>
    </li>
  ))

  return (
    <Layout>
      <ul>{Posts}</ul>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {}, sort: { fields: fileAbsolutePath }) {
      edges {
        node {
          frontmatter {
            title
          }
          fileAbsolutePath
          id
        }
      }
    }
  }
`
