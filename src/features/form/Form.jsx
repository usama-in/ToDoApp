import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import "./form.css";
import Error from "./Error";

const Form = ({ receiveData }) => {
  const [input, setInput] = useState("");
  const [showError, setShowError] = useState(false);

  const sendInputToApp = () => {
    if (input.length > 3) {
      receiveData(input);
      setInput('');

      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="form">
      <Input getInput={setInput}  reset={input}/>
      <p className="error">{showError && <Error />}</p>
      <Button onSend={sendInputToApp} />
    </div>
  );
};

export default Form;
