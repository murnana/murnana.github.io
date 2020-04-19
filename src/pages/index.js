import React from "react"
import { graphql, Link } from "gatsby"
import Gravatar from "../components/gravatar"

export default ({ data }) => (
  <div>
    <h1>{data.site.siteMetadata.title}</h1>
    <Gravatar hash={"b08382f69497236d00e369d103e2a535"} size={200} />
    <ul>
      <li>
        <Link to="/hobby">Hobby</Link>
      </li>
    </ul>
  </div>
)

export const pageQuery = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
