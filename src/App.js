import React from "react";
import { Counter } from "./Components/Counter/Counter";
import { InteractiveWelcome } from "./Components/Welcome/InteractiveWelcome";
import { ClickTracker } from "./Components/Counter/ClickTracker";
import Colors from "./Components/List/Colors";

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
        <Colors colors={["Red", "More Red", "I know only Red"]}  />
      </>
    );
  }
}
