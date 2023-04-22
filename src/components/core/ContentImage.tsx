import React from 'react';

interface Props {
  src: string;
  alt: string;
}

const ContentImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        className='w-full rounded-md h-[520px] object-cover'
      />
    </div>
  );
};

export default ContentImage;
