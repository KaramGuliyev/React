import React, { Component } from "react";
// import { Login } from "./Login";
import { Welcome } from "./Welcome";
import { UncontrolledLogin } from "./UncontrolledLogin";

export class InteractiveWelcome extends Component {
  handleSubmit(state) {
    console.log(`User's username is ${state.userName} and password is ${state.password}`);
  };

  render() {
    return (
      <>
        {/* <Login
          handleSubmit={(state) => {
            this.handleSubmit(state);
          }}
        /> */}
        <UncontrolledLogin />
        <Welcome
          name={this.props.name}
          age={this.props.age}
        />
      </>
    );
  }
}
