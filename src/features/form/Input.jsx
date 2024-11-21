import React, { useState } from "react";
import "./input.css";

const Input = ({ getInput , reset }) => {
    

    

  const inputHandler = (event) => {
    getInput(event.target.value);
  };


  return (
    <div>
      <input type="text" 
      className="input"
      value={reset}
      onChange={inputHandler} />
    </div>
  );
};

export default Input;
