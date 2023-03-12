import React, { SyntheticEvent } from 'react';
interface Props {
  onClick?: (event: SyntheticEvent) => void;
  label: string;
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<Props> = ({ onClick, label, size }) => {
  const checkSize = () => {};
  return (
    <button
      className={`text-[14px] bg-tertiary p-1 px-3 rounded-md hover:scale-125 transition duration-700 ease-in-out `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
