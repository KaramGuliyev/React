import React from "react";
import { Age } from "./Age";

// Modify the Welcome component so that the Age component is rendered only if the age prop is greater than 18 and less than 65 and the name prop is equal to "John".

export class Welcome extends React.Component {
  render() {
    // I could change stronge tag but I didn't wanted to change it, instead I reached element's value 
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
