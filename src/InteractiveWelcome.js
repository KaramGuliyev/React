import React, { Component } from "react";
import {Login} from "./Login";
import { Welcome } from "./Welcome";


export class InteractiveWelcome extends Component {
  render() {
    return (
      <>
        <Login />
        <Welcome
          name={this.props.name}
          age={this.props.age}
        />
      </>
    );
  }
}
