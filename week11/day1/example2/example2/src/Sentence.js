import React, { Component } from "react";

export default class Sentence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
    };
  }

  render() {
    return (
      <div>
        <p>The weather is {this.state.word}</p>
        <button
          onClick={() =>
            this.setState({
              word: "beautiful!",
            })
          }
        >
          Change 1!
        </button>
        <button
          onClick={() =>
            this.setState({
              word: "ugly!",
            })
          }
        >
          Change 2!
        </button>
      </div>
    );
  }
}
