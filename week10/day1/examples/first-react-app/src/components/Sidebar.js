import React, { Component } from "react";
import img from "./images/candid.jpg";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <img className="image" src={img} alt="" />
      </div>
    );
  }
}

export default Sidebar;
