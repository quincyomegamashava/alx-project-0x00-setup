import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  const base = "inline-flex items-center justify-center font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700";
  return (
    <button className={`${base} ${styles ?? ""}`.trim()}>
      {title}
    </button>
  );
};

export default Button;
