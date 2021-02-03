import React from "react"
import { Component } from "react"

export default class MyLog extends Component {
  state = { projectName: "", description: "", timespent: "" }

  projectNameHandler = (event) => {
    const value = event.target.value
    this.setState({ ...this.state, projectName: value })
  }

  timespentHandler = (event) => {
    const value = event.target.value
    this.setState({ ...this.state, timespent: value })
  }

  descriptionHandler = (event) => {
    const value = event.target.value
    this.setState({ ...this.state, description: value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      this.props.show && (
        <div className="card">
          <form onSubmit={this.submitHandler}>
            <h1>Enter Your Today's Log</h1>
            <p>Project name</p>
            <input
              onChange={this.projectNameHandler}
              type="text"
              value={this.state.projectName}
            />
            <p>Description</p>
            <textarea
              onChange={this.descriptionHandler}
              rows="4"
              cols="50"
              value={this.state.description}
            />
            <p>Time Spent</p>
            <input
              onChange={this.timespentHandler}
              type="text"
              value={this.state.timespent}
            />
            <input type="submit" />
          </form>
        </div>
      )
    )
  }
}
