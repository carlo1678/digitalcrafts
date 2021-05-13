import React, { Component } from "react";
import ExoticCarSection from "./ExoticCarSection";
import MotorcycleSection from "./MotorcycleSection";
import MuscleCarSection from "./MuscleCarSection";

export default class Garage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [
        {
          motorcycles: [
            {
              American: "Harley",
            },
          ],
        },
        {
          musclecars: [
            {
              American: "Camaro",
            },
          ],
        },
        {
          exoticcars: [
            {
              American: "Ford GT",
            },
          ],
        },
      ],
    };
  }
  render() {
    console.log(this.state.vehicles);
    return (
      <div>
        <h2>Here is the Garage!</h2>
        <h3>Muscle Car Section</h3>
        <MuscleCarSection vehicles={this.state.vehicles} />
        <h3>Exotic Car Section</h3>
        <ExoticCarSection />
        <h3>Motorcycle Section</h3>
        <MotorcycleSection />
      </div>
    );
  }
}
