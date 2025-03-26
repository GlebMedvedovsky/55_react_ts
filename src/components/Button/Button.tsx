import "./styles.css";

interface ButtonProps {
  name: string, 
  onClick?: () => void, 
  disebled?: boolean, 
  type?: 'submit' | 'reset' | 'button'
}

function Button({ name, onClick, disebled = false, type = "submit"}:ButtonProps) {
  return (
    <button 
    className="main-button" 
    onClick={onClick} 
    disabled={disebled}
    type={type}
    >
      {name}
    </button>
  );
}


