import React from "react"

export default class Gravatar extends React.Component {
  constructor(props) {
    super(props)

    // fetch(`https://www.gravatar.com/${props.hash}`).then(responce => {
    //   console.debug(responce)
    // })
  }

  render() {
    return (
      <div>
        <img src={`https://www.gravatar.com/avatar/${this.props.hash}?s=200`} />
      </div>
    )
  }
}
