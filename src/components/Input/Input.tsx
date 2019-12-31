import React from "react";
import { InputProps } from "./interfaces";
import styles from "./styles";

const Input: React.FC<InputProps> = ({ type, label, inputHandler }) => {
  return (
    <div className="input-base">
      <p>{label}</p>
      <input type={type} name={label} onChange={inputHandler} />

      <style jsx>{styles}</style>
    </div>
  );
};

export default Input;
