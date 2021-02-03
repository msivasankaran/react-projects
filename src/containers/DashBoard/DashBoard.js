import React from "react"
import { Component } from "react"
import Card from "../Card/Card"
import Auxillary from "../Auxillary/Auxillary"

const MEMBERS = [
  "Person1",
  "Person2",
  "Person3",
  "Person4",
  "Person5",
  "Person6",
  "Person7",
  "Person8",
  "Person9",
  "Person10",
]

export default class DashBoard extends Component {
  render() {
    return (
      this.props.show && (
        <Auxillary>
          {MEMBERS.map((value, index) => (
            <Card key={index} name={value} />
          ))}
        </Auxillary>
      )
    )
  }
}
