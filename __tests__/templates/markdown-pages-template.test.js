import React from "react"
import renderer from "react-test-renderer"
import MarkdownPagesTemplate from "../../src/templates/markdown-pages-template"

describe("Menu", () => {
  it("render", () => {
    const data = {
      markdownRemark: {
        html:
          "<h1>Heading level 1</h1><h2>Heading level 2</h2><h3>Heading level 3</h3><h4>Heading level 4</h4><h5>Heading level 5</h5><h6>Heading level 6</h6><p>content</p>",
        frontmatter: { title: "Markdown test page" },
      },
    }

    const tree = renderer.create(<MarkdownPagesTemplate data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
