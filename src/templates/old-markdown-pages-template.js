import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const {
    markdownRemark: {
      html,
      frontmatter: { title },
    },
  } = data
  return (
    <Layout>
      <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
