import React from "react"
import { Component } from "react"
import "./Login.css"
import loginbg from "./loginbg.jpg"

const DUMMY_LOGIN = {
  username: "admin",
  password: "admin",
}

export default class Login extends Component {
  state = { username: "", password: "" }

  usernameHandler = (event) => {
    const value = event.target.value
    this.setState({ ...this.state, username: value })
  }

  passwordHandler = (event) => {
    const value = event.target.value
    this.setState({ ...this.state, password: value })
  }

  submitHandler = (event) => {
    event.preventDefault()
    if (this.state.username !== null && this.state.password !== null) {
      alert(
        "Comparing username and password in the backend and generating jwt token"
      )
      this.state.username === DUMMY_LOGIN.username &&
      this.state.password === DUMMY_LOGIN.password
        ? this.props.submit(false)
        : alert("Login failed")
    } else {
      alert("Login failed")
    }
  }
  componentDidMount() {
    document.body.style.backgroundImage = `url(${loginbg})`
    document.body.style.backgroundColor = "grey"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"
  }

  render() {
    return (
      this.props.show && (
        <div className="child">
          <form
            className="card bg-info px-3 py-3"
            style={{ display: "inline-block" }}
            onSubmit={this.submitHandler}
          >
            <h1>Log into your account</h1>
            <p className="mx-5 mb-1 font-weight-bold">Username</p>
            <input
              className="mx-5"
              type="text"
              onChange={this.usernameHandler}
              value={this.state.username}
            />
            <p className="mx-5 mb-1 font-weight-bold">Password</p>
            <input
              className="mx-5"
              type="password"
              onChange={this.passwordHandler}
              value={this.state.password}
            />
            <p></p>
            <input
              className="btn btn-warning font-weight-bold mx-5"
              type="submit"
              value="Login"
            />
          </form>
        </div>
      )
    )
  }
}
