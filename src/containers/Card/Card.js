import React from "react"
import { Component } from "react"

export default class Card extends Component {
  render() {
    return (
      <div className="card col-lg-3 my-5 mx-5">
        <div
          style={{
            width: "100%",
            height: "200px",
            border: "1px solid #000",
            backgroundColor: "grey",
          }}
        ></div>
        <h1>{this.props.name}</h1>
        <button>View Log</button>
      </div>
    )
  }
}
