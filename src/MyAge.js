import React from "react";

export class MyAge extends React.Component {
  render() {
    return <>{this.props.renderComp && this.props.age ? <p>Your age is {this.props.props.age}!</p>  : "Something went wrong"}</>;
  }
}
