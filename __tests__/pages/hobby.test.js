import React from "react"
import renderer from "react-test-renderer"
import HobbyPage from "../../src/pages/hobby"

describe("HobbyPage", () => {
  it("snapshot", () => {
    const tree = renderer.create(<HobbyPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
