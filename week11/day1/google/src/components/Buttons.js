import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    return (
      <div className="buttons">
        <button className="searchButton">Google Search</button>
        <button className="luckyButton">I'm Feeling Lucky</button>
      </div>
    );
  }
}
