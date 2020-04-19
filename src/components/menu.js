import React from "react"
import { Link } from "gatsby"

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  render() {
    if (this.state.isOpen) {
      return MenuList({
        onClick: event => {
          this.setState({ isOpen: !this.state.isOpen })
        },
      })
    } else {
      return MenuButton({
        onClick: event => {
          this.setState({ isOpen: !this.state.isOpen })
        },
      })
    }
  }
}

const MenuList = ({ onClick }) => (
  <nav className="menu">
    <ul className="dialog">
      <li>
        <Link onClick={onClick} to="/">
          Top
        </Link>
      </li>
      <li>
        <button onClick={onClick}>Close</button>
      </li>
    </ul>
  </nav>
)

const MenuButton = ({ onClick }) => (
  <button className="menu" onClick={onClick}>
    Menu
  </button>
)
