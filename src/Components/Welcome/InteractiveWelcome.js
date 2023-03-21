import React, { Component } from "react";
// import { Login } from "./Login";
import Welcome from "./Welcome";
import { Login } from "./Login";

export class InteractiveWelcome extends Component {
  handleSubmit(state) {
    console.log(
      `User's username is ${state.userName} and password is ${state.password}`
    );
  }

  render() {
    return (
      <>
        <Login
          handleSubmit={(state) => {
            console.log(state);
          }}
        />
        {/* <UncontrolledLogin /> */}
        <Welcome
          name={this.props.name}
          age={this.props.age}
        />
      </>
    );
  }
}
