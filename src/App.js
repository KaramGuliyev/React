import React from "react";
import { Counter } from "./Components/Counter/Counter";
import { InteractiveWelcome } from "./Components/Welcome/InteractiveWelcome";
import { ClickTracker } from "./Components/Counter/ClickTracker";
import Lists from "./Exercises/Lists";
import MyTodos from "./Exercises/MyTodos";

const todos = [
  {
    id: 1,
    title: "Buy Milk",
    completed: false,
  },
  {
    id: 2,
    title: "CI to the movies",
    completed: false,
  },
  {
    id: 3,
    title: "Water the plants",
    completed: true,
  },
  {
    id: 4,
    title: "Sleep",
    completed: true,
  },
];

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
        {/* <Lists
          names={[
            "Habibi 1",
            "Habibi 3",
            "Habibi 2",
          ]}
        /> */}
        <MyTodos todos={todos} />
      </>
    );
  }
}
