// import React from "react"; // пока не нужен, раскомментирую, если добавлю хуки

import ".styles.css";

function Input({placeholder, 
  name, 
  value, 
  type = "text", 
  onChange, 
  label, 
  id)} {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        className="input-component"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={id}
      />
    </div>
  );

  // Раньше использовался JSX, но для компонентов React лучше использовать TSX

  // <input className='input-component' name='test' placeholder="Enter text"/>
}

export default Input;
