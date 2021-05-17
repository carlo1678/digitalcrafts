import React, { Component } from "react";
import GoogleNumpad from "../images/GoogleNumpad.png";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="topItems">
          <ul className="topItems">
            <li className="about">About</li>
            <li className="store">Store</li>
            <li className="gmail">Gmail</li>
            <li className="images">Images</li>
            <li>
              <img className="google" src={GoogleNumpad} alt="none"></img>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
