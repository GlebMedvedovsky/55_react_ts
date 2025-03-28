import { useState } from "react";
import Input from "../../components/Input/Input";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

function Button({ children, onClick, disabled = false, type = 'submit' }: ButtonProps & { children: React.ReactNode }) {
  return (
    <button onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  );
}

function Homework08() {
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <h1>Change password</h1>
      <Input
        label="Password"
        placeholder="Enter your password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "HIDE PASSWORD" : "SHOW PASSWORD"}
      </Button>
      {isVisible && <p>{password}</p>}
    </div>
  );
}

export default Homework08;
