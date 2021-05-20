import React, { Component } from "react";

export class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    dob: "",
    city: "",
    newPerson: [],
  };

  componentDidMount() {
    this.setState({
      newPerson: this.props.newPerson,
    });
  }

  grabData = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitData = async (event) => {
    const personCard = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dob: this.state.dob,
      city: this.state.city,
    };

    console.log(personCard);

    this.setState({
      newPerson: [personCard],
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form className="basicForm">
          <input
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            type="text"
            onChange={this.grabData}
          ></input>
          <input
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            type="text"
            onChange={this.grabData}
          ></input>
          <input
            value={this.state.dob}
            name="dob"
            placeholder="Date of Birth"
            type="text"
            onChange={this.grabData}
          ></input>
          <input
            value={this.state.city}
            name="city"
            placeholder="City"
            type="text"
            onChange={this.grabData}
          ></input>
          <button onClick={this.submitData}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
