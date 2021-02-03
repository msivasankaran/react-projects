import React from "react"
import { Component } from "react"

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <button onClick={this.props.dashboard}>DashBoard</button>
        <button onClick={this.props.mylog}>MyLog</button>
        <button onClick={this.props.logout}>LogOut</button>
      </nav>
    )
  }
}
