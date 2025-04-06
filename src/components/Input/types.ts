import { ChangeEvent } from "react";

// Typen für die Input-Komponente
export interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string; // Added error prop
  type?: 'text' | 'email' | 'number' | 'password' | 'tel';
  id?: string;
  search?: boolean;
}

// Beispiel für zusätzliche Typen, falls benötigt
export interface ButtonProps {
  name: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface FormValues {
  [key: string]: string | number | boolean;
}
