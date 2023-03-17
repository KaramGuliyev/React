import React, { Component } from "react";
import { Button } from "./Button";

// Create a ClickTracker component that renders three buttons.
// Implement a single event handler for all three buttons,
// and track of which button was pressed last.
// Show the last button that was pressed in an h1 tag within the ClickTracker component.
// Tip: you can use the event object to access the target property of the event.


export class ClickTracker extends Component {
  render() {
    function handleClick(e) {
      document.getElementById("buttonTracker").innerText = `This is ${e.target.id} button`
    }

    return (
      <div>
        <Button handler={handleClick} class="button" id="1st" innerText="First button" />
        <Button handler={handleClick} class="button" id="2nd" innerText="Second button" />
        <Button handler={handleClick} class="button" id="3rd" innerText="Third button" />
        <h1 id="buttonTracker">No Buttons Clicked!</h1>
      </div>
    );
  }
}

export default ClickTracker;
