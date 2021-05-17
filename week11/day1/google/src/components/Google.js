import React, { Component } from "react";
import GoogleLogo from "../images/GoogleLogo.png";

export default class Google extends Component {
  render() {
    return (
      <div className="googleLogo">
        <img src={GoogleLogo} alt=""></img>
      </div>
    );
  }
}
