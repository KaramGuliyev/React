import React from "react";

export class Age extends React.Component {
  render() {
    return <>{ this.props.age ? <p>Your age is {this.props.age}!</p>  : "Something went wrong"}</>;
  }
}
