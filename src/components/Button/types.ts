export interface ButtonProps {
    name: string, 
    onClick?: () => void, 
    disebled?: boolean, 
    type?: 'submit' | 'reset' | 'button'
  }