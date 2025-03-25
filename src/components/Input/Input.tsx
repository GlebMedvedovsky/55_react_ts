import React from "react";

interface InputProps {
  placeholder: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ placeholder, name }) => {
  return <input type="text" placeholder={placeholder} name={name} />;
};

export default Input;
