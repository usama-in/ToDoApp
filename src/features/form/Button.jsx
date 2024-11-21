import React from "react";

const Button = ({ onSend }) => {
  const sendInput = () => {
    onSend();
  };

  return (
    <div>
      <button onClick={sendInput}>CLICK TO ADD</button>
    </div>
  );
};

export default Button;
