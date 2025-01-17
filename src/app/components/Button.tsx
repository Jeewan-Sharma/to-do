import React from "react";

interface ButtonProps {
  name: string;
  type: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, type, icon, onClick }) => {
  return (
    <button className={`${type}`} onClick={onClick}>
      <div className="flex items-center">
        <p>{name}</p>
        <div>{icon}</div>
      </div>
    </button>
  );
};

export default Button;
