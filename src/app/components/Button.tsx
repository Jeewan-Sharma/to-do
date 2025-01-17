import React from "react";

/*
color: btn-primary,
type: icon-only,
rounded: full,
*/

interface ButtonProps {
  color: string;
  name?: string;
  type?: string;
  icon?: React.ReactNode;
  rounded?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  name,
  color,
  icon,
  type,
  rounded,
  onClick,
}) => {
  return (
    <button className={`${color} ${type} ${rounded}`} onClick={onClick}>
      <div className="flex items-center">
        <p>{name}</p>
        <div>{icon}</div>
      </div>
    </button>
  );
};

export default Button;
