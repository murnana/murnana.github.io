import React from "react"
import { graphql } from "gatsby"

export default ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title },
    },
  },
}) => (
  <article>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </article>
)

export const pageQuery = graphql`
  query MarkdownPagesTemplateQuery($relativePath: String!) {
    markdownRemark(fields: { relativePath: { eq: $relativePath } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
