import React from "react";
import { InputHandlerParam } from "./App";

interface InputProps {
  type: string;
  label: string;
  inputHandler: (hEvent: InputHandlerParam) => void;
}

const Input: React.FC<InputProps> = ({ type, label, inputHandler }) => {
  return (
    <div>
      <p>{label}</p>
      <input type={type} name={label} onChange={inputHandler} />
    </div>
  );
};

export default Input;
