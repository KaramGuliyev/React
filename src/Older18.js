import React from "react";

export class Older18 extends React.Component {
  render() {
    const props = this.props.props.props;
    return <>{props.age > 18 ? <h1>Welcome {props.name}!</h1> : <h1>{props.name}... you are not allowed here...</h1>}</>;
  }
}
