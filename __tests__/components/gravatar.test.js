import React from "react"
import renderer from "react-test-renderer"
import Gravatar from "../../src/components/gravatar"

describe("Menu", () => {
  it("render", () => {
    const tree = renderer
      .create(<Gravatar hash={"00000000000000000000000000000000"} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
