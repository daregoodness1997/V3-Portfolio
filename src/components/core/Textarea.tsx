import React, { TextareaHTMLAttributes } from 'react';

interface Textarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: Record<any, string>;
  label?: string;
}

const Textarea: React.FC<Textarea> = ({ error, label, ...props }) => {
  return (
    <div className='form-control'>
      <label htmlFor={props.name}>{label}</label>
      <textarea
        className='px-6 py-4 bg-[#111] w-full rounded-md mt-2 placeholder:text-secondary outline-none'
        {...props}
      />
      {error ? <div></div> : null}
    </div>
  );
};

export default Textarea;
