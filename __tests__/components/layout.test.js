import React from "react"
import renderer from "react-test-renderer"
import Layout from "../../src/components/layout"

describe("Layout", () => {
  it("render", () => {
    const tree = renderer
      .create(
        <Layout>
          <div>
            <h1>Hello World!</h1>
          </div>
        </Layout>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
