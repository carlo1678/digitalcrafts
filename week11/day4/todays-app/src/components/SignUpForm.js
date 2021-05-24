import React, { useState } from "react";
import {
  SignUpButton,
  SignUpFormInput,
  SignUpFormDiv,
} from "./styledComponents/SignUpFormStyles";

const SignUpForm = (props) => {
  const handleChange = (e) => {
    props.setFirstName(e.target.value);
    console.log(props.firstName);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.setNewUser({
      firstName: props.firstName,
    });
  };
  return (
    <div className="sign-up-form-container">
      <h1>Create Account</h1>
      <SignUpFormDiv action="">
        <SignUpFormInput
          onChange={handleChange}
          type="text"
          value={props.firstName}
          placeholder="First Name"
        />
        <SignUpFormInput type="text" placeholder="Last Name" />
        <SignUpFormInput type="email" placeholder="Email" />
        <SignUpFormInput type="password" placeholder="Password" />
        <SignUpFormInput type="password" placeholder="Re-Type Password" />
        <SignUpButton>Sign Up</SignUpButton>
      </SignUpFormDiv>
    </div>
  );
};
export default SignUpForm;
