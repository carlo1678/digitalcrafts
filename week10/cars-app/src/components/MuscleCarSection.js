import React, { Component } from "react";
import AmericanCars from "./AmericanCars";

export default class MuscleCarSection extends Component {
  render() {
    console.log(this.props.vehicles[1].musclecars[0].American);
    return (
      <div>
        <AmericanCars car={this.props.vehicles[1].musclecars[0]} />
      </div>
    );
  }
}
