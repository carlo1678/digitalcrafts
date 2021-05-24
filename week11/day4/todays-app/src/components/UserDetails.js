import React from "react";

export default function UserDetails(props) {
  return (
    <div>
      <h1>User Detail</h1>
      <p>{props.firstName}</p>
    </div>
  );
}
