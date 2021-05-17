import React, { Component } from "react";

export default class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: "",
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              picture:
                "https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg",
            })
          }
        >
          Change!
        </button>
        <img src={this.state.picture} alt=""></img>
      </div>
    );
  }
}
