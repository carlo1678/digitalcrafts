import React, { Component } from "react";

export default class Class extends Component {
  constructor(props) {
    super(props);
    // the point of using the constructor in react is to initialize your state
    this.state = {
      // state is a container that holds data, and lets us have access to it
      greeting: "Hello!",
      listOfPokemonCards: [],
      mapPoints: {},
      count: 0,
    };
  }
  // this (this.setstate) refers to the entire class, it also allows you to have access to individual elements, things, and stuff on this class. It is unique to a class in JS. It is even more uinique in that it refers to that specific class.

  render() {
    return (
      <div
        style={{ backgroundColor: "green", height: "300px", width: "500px" }}
      >
        <h1>Class.js</h1>
        <h3>
          Info from App.js{" "}
          {this.props.greeting ? this.props.greeting : "nothing yet"}
        </h3>
        {this.state.greeting}
        <p>this is the count {this.state.count}</p>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Add
        </button>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count - 1,
            })
          }
        >
          Subtract
        </button>
      </div>
    );
  }
}
