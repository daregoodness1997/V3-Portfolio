import React, { SyntheticEvent } from 'react';
interface Props {
  onClick?: (event: SyntheticEvent) => void;
  label: string;
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<Props> = ({ onClick, label, size = 'sm' }) => {
  const checkSize = () => {
    if (size === 'md') {
      return '20px';
    }
    if (size === 'lg') {
      return '28px';
    }
    return '14px';
  };
  return (
    <button
      className={`text-[${checkSize()}] bg-tertiary p-1 px-3 rounded-md hover:scale-125 transition duration-700 ease-in-out `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
