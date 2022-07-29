import React from "react";
import { Counter } from "./Counter";

export function Msg({ name, pic }) {

  return (
    <div className="msg-container">
      <img className="profile-pic" src={pic} alt={name} />
      <h1>Hello {name} </h1>
      <Counter />

    </div>


  );
}
