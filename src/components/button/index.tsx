import { FC } from "react";

interface ButtonProps {
  id: string;
  title?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ id, title, onClick }) => {
  return (
    <button
      id={id}
      className="bg-emerald-500 hover:bg-emerald-600 focus:outline-none text-white p-3 w-full h-16"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
