import React from "react";

interface CheckboxProps {
  name: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, label, checked, onChange, error }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default Checkbox;