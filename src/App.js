import React from "react";
import { Counter } from "./Components/Counter/Counter";
import { InteractiveWelcome } from "./Components/Welcome/InteractiveWelcome";
import { ClickTracker } from "./Components/Counter/ClickTracker";
import ToDoList from "./Components/List/ToDoList";
// import { Welcome } from "./Components/Welcome/Welcome";
import Container from "./Components/ComponentComposition/Container";

export class App extends React.Component {
  render() {
    return (
      <Container>
        <InteractiveWelcome
          className="welcome"
          name={this.props.name}
          age={this.props.age}
        />
        <Counter counterStart={25} />
        <ClickTracker />
        <ToDoList />
      </Container>
    );
  }
}
