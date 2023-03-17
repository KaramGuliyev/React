import React from "react";

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.handler} className={this.props.class} id={this.props.id ?? ""}>
        {this.props.innerText}
      </button>
    );
  }
}
