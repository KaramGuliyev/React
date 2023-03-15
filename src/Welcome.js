import React from "react";
import { Age } from "./Age";


export class Welcome extends React.Component {
  render() {
    const nameVal = this.props.name.props.children;
    return (
      <>
        {this.props.age === undefined || Number(this.props.age) === 0 || !this.props.age ? (
          ""
        ) : this.props.age > 18 && this.props.age < 65 && nameVal === "John" ? (
          <h1>Welcome {this.props.name}!</h1>
        ) : (
          <h1>Sorry {this.props.name}... you are not allowed here...</h1>
        )}
        <Age age={this.props.age} />
      </>
    );
  }
}

Welcome.defaultProps = {
  name: "Habibi",
  age: 25,
};
