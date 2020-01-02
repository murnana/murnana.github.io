import React from "react"
import renderer from "react-test-renderer"
import Menu from "../../src/components/menu"

describe("Menu", () => {
  it("render", () => {
    const tree = renderer.create(<Menu />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
