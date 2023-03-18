import React from "react";
import { Counter } from "./Components/Counter/Counter";
import { InteractiveWelcome } from "./Components/Welcome/InteractiveWelcome";
import { ClickTracker } from "./Components/Counter/ClickTracker";
import ToDoList from "./Components/List/ToDoList";

export class App extends React.Component {
  render() {
    return (
      <>
        <InteractiveWelcome
          name={this.props.name}
          age={this.props.age}
        />
        <Counter counterStart={25} />
        <ClickTracker />
        <ToDoList />
      </>
    );
  }
}
