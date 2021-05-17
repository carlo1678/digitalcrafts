import React, { Component } from "react";

export class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>The count is {this.state.count}</p>
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

export default Count;
