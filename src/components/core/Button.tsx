import React, { ButtonHTMLAttributes, SyntheticEvent } from 'react';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: SyntheticEvent) => void;
  label: string;
  size?: 'sm' | 'md' | 'lg';
  isFullWidth?: boolean;
  colorScheme?: string;
}

const Button: React.FC<Props> = ({
  onClick,
  label,
  size = 'sm',
  isFullWidth,
  colorScheme,
  ...props
}) => {
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
      className={`text-[${checkSize()}] ${
        colorScheme ?? 'bg-tertiary'
      }  px-6 py-4 rounded-md hover:scale-95 transition duration-700 ease-in-out ${
        isFullWidth ? 'w-full' : null
      } `}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
