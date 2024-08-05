import React, { FC } from "react";

interface InputProps {
  id: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  name,
}) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full h-16 rounded-md p-3 focus:outline-none shadow-md text-black bg-gray-100"
    />
  );
};

export default Input;
