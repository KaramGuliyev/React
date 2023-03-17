import React from "react";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";
import { ClickTracker } from "./ClickTracker";
import MyForm from "../Exercises/MyForm";
export class App extends React.Component {
  render() {
    return (
      <>
        <Welcome name={this.props.name} age={this.props.age} />
        <Counter counterStart={25} />
        <ClickTracker />
        <MyForm />
      </>
    );
  }
}
