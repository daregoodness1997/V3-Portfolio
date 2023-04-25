import React from 'react';
import {
  AiFillDribbbleCircle,
  AiFillGithub,
  AiFillTwitterCircle,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='w-full text-center text-white p-4'>
      <p> &#169; Dare Goodness 2023</p>
      <div className='flex flex-wrap items-center justify-center my-4 gap-2'>
        <a href='https://github.com/daregoodness1997' target='_blank'>
          <AiFillGithub />
        </a>
        <a href='https://twitter.com/_DareGoodness' target='_blank'>
          <AiFillTwitterCircle />
        </a>
        <a href='https://dribbble.com/daregoodness' target='_blank'>
          <AiFillDribbbleCircle />
        </a>
      </div>
    </div>
  );
};

export default Footer;
