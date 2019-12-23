import React from "react";
import { InputProps } from "./interfaces";

const Input: React.FC<InputProps> = ({ type, label, inputHandler }) => {
  return (
    <div>
      <p>{label}</p>
      <input type={type} name={label} onChange={inputHandler} />
    </div>
  );
};

export default Input;
