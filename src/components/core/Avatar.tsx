import React from 'react';

interface Props {
  src: string;
  name: string;
}

const Avatar: React.FC<Props> = ({ src, name }) => {
  return (
    <div className='flex items-center'>
      <div className='relative w-10 h-10 mr-2'>
        <img className='h-10 w-10 rounded-full' src={src} alt={name} />
      </div>
      <div className='font-semibold'>{name}</div>
    </div>
  );
};

export default Avatar;
