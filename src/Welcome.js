import React from "react";
import { Older18 } from "./Older18.js";

// Modify the Welcome component so that the Age component is rendered only if the age prop is present.

export class Welcome extends React.Component {
  render() {
    return <>{this.props.props.age ? <Older18 {...this} /> : ""}</>;
  }
}

Welcome.defaultProps = {
  name: "Habibi",
};
