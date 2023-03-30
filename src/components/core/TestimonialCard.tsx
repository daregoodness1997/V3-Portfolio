import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../constants';
import { fadeIn } from '../../utils/motion';
import { styles } from '../../styles';

interface TestimonialProps {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  testimonial,
  name,
  designation,
  company,
  image,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl xs:w-[320px]  w-full transition-all hover:bg-tertiary cursor-pointer'
    >
      <p className='text-white font-black text-[48px]'>"</p>
      <p className='text-[14px]'>{testimonial}</p>
      <div className='mt-4'>
        <div className='flex justify-between items-center'>
          <div>
            <p className='font-bold text-[14px]'>{name}</p>
            <div className='flex gap-2'>
              <p className='italic'>{designation}</p>
              <p className='font-bold'>{company}</p>
            </div>
          </div>

          <img
            src={image}
            alt={name}
            className='w-10 h-10 rounded-full object-cover'
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
