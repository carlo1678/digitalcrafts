import React, { Component } from "react";
import img from "./images/HeadShot.jpg";

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
