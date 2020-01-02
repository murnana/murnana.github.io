import React from "react"
import renderer from "react-test-renderer"
import IndexPage from "../../src/pages/index"

describe("IndexPage", () => {
  it("render", () => {
    const data = {
      site: {
        siteMetadata: {
          title: `site.siteMetadata.title`,
        },
      },
    }

    const tree = renderer.create(<IndexPage data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
