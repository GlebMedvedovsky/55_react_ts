// import React from "react"; // пока не нужен, раскомментирую, если добавлю хуки

interface InputProps {
  placeholder: string;
  name: string;
}

function Input({ placeholder, name }: InputProps) {
  return <input placeholder={placeholder} name={name} />;
}

export default Input;
