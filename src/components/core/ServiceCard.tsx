import { motion } from 'framer-motion';
import React from 'react';
import Tilt, { TiltProps } from 'react-parallax-tilt';
import { fadeIn } from '../../lib/utils/motion';

interface ServiceProps {
  title: string;
  icon?: string;
}

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className='xs:w-[250px] w-full cursor-pointer' scale={1.2}>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full bg-cardColor p-[1px] rounded-[20px] border border-gray-100`'
      >
        <div
          //   options={{ max: 45, scale: 1, speed: 50 }}
          className='bg-cardColor rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'
        >
          <img src={icon} alt={title} className='w-16 h-26 image-icon' />
          <h3 className='text-center text-white font-bold text -[20px]'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
