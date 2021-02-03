import React from "react"
import { Component } from "react"

export default class Card extends Component {
  render() {
    return (
      <div className="card col-3">
        <h1>{this.props.name}</h1>
        <button>View Log</button>
      </div>
    )
  }
}
