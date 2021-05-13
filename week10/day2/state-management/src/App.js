import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      title: "State Management",
      itIsRainingInHouston: false,
    };
  }
  render() {
    const { counter, title, itIsRainingInHouston } = this.state;
    return (
      <div>
        <h1>State Management</h1>
        <p>{title}</p>
        <p>
          Is it raining in Houston? {itIsRainingInHouston ? "True" : "False"}
        </p>
        <p>Counter {counter}</p>
        <button
          onClick={() =>
            this.setState({
              counter: counter + 1,
            })
          }
        >
          Add
        </button>
        <button
          onClick={() =>
            this.setState({
              counter: counter - 1,
            })
          }
        >
          Subtract
        </button>
      </div>
    );
  }
}
