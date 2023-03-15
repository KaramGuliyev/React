import React from "react";
import { MyAge } from "./MyAge";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <>
        <Welcome renderComp={true} props={this.props} />
        <MyAge renderComp={true} props={this.props} />
      </>
    );
  }
}
