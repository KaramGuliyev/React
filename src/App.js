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
      <Container title="My Awful App">
        <InteractiveWelcome
          className="welcome"
          name={this.props.name}
          age={this.props.age}
        />
        <Counter counterStart={25} />
        <ClickTracker />
        <ToDoList
          render={(
            inputVal,
            handleChange,
            addTask,
            resetForm,
            lists,
            removeList
          ) => {
            return (
              <div>
                <input
                  value={inputVal}
                  onChange={handleChange}
                />
                <button onClick={addTask}>
                  GUESS WHAT THIS BUTTON DOES
                </button>
                <button onClick={resetForm}>
                  Reset
                </button>
                <ul>
                  {lists.map((e, i) => (
                    <div key={i}>
                      <li>{e}</li>
                      <button
                        onClick={() =>
                          removeList(i)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </ul>
              </div>
            );
          }}
        ></ToDoList>
      </Container>
    );
  }
}
