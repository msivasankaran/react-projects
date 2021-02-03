import React from "react"
import { Component } from "react"
import NavBar from "../NavBar/NavBar"
import DashBoard from "../DashBoard/DashBoard"
import MyLog from "../MyLog/MyLog"
import Auxillary from "../Auxillary/Auxillary"

export default class Home extends Component {
  state = { dashboard: true, myLog: false, signedIn: true }

  dashBoardSwitch = () => {
    this.setState({ ...this.state, myLog: false, dashboard: true })
  }

  myLogSwitch = () => {
    this.setState({ ...this.state, myLog: true, dashboard: false })
  }

  render() {
    return (
      !this.props.show && (
        <Auxillary>
          <NavBar
            logout={this.props.logout}
            dashboard={this.dashBoardSwitch}
            mylog={this.myLogSwitch}
          />
          <div className={this.state.dashboard ? "px-5 row" : null}>
            <DashBoard show={this.state.dashboard} />
            <MyLog show={this.state.myLog} />
          </div>
        </Auxillary>
      )
    )
  }
}
