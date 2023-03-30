import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: Record<any, string>;
  label?: string;
}

const Input: React.FC<InputProps> = ({ error, label, ...props }) => {
  return (
    <div className='form-control'>
      <label htmlFor={props.name}>{label}</label>
      <input className='p-3 w-full rounded-md mt-2' {...props} />
      {error ? <div></div> : null}
    </div>
  );
};

export default Input;
