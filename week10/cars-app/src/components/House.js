import React, { Component } from "react";
import Garage from "./Garage";

export default class House extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to the House!</h2>
        <p>
          Here, we have a collection of many different cars and motorcycles!
        </p>
        <p>Check out the Garage below!</p>
        <Garage />
      </div>
    );
  }
}
