import React from "react";

export class Welcome extends React.Component {
  render() {
    console.log(this.props.age)
    return (
      <>
        {this.props.age && this.props.age > 18 ? (
          <h1>Welcome {this.props.name}!</h1>
        ) : (
          <h1>{this.props.name}... you are not allowed here...</h1>

        )}
      </>
    );
  }
}

Welcome.defaultProps = {
  name: "Habibi",
};
