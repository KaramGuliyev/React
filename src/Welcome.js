import React from "react";
import { Age } from "./Age";

// Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18 and less than 65.

export class Welcome extends React.Component {
  render() {
    return (
      <>
        {this.props.age === undefined || Number(this.props.age) === 0 || !this.props.age ? (
          ""
        ) : this.props.age > 18 && this.props.age < 65 ? (
          <h1>Welcome {this.props.name}!</h1>
        ) : (
          <h1>{this.props.name}... you are not allowed here...</h1>
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
