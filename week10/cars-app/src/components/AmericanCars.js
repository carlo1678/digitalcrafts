import React, { Component } from "react";

export default class AmericanCars extends Component {
  render() {
    console.log(this.props.car.American);
    return (
      <div>
        <h4>American Cars</h4>
        <ul>
          <li>{this.props.car.American}</li>
        </ul>
      </div>
    );
  }
}
