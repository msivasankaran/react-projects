import React from "react"
import { Component } from "react"
import Login from "./containers/Login/Login"
import Home from "./containers/Home/Home"
import Auxillary from "./containers/Auxillary/Auxillary"
import loginbg from "./containers/Login/loginbg.jpg"
import "./App.css"

export default class App extends Component {
  state = { login: true }

  loginShow = (e) => {
    this.setState({ ...this.state, login: e })
    document.body.style.background = "none"
  }

  logOutHandler = () => {
    this.setState({ ...this.state, login: true })
    document.body.style.backgroundImage = `url(${loginbg})`
    document.body.style.backgroundColor = "grey"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"
  }

  render() {
    return (
      <Auxillary>
        <Login show={this.state.login} submit={this.loginShow} />
        <Home show={this.state.login} logout={this.logOutHandler} />
      </Auxillary>
    )
  }
}
