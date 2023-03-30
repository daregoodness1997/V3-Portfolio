import { motion } from 'framer-motion';
import React from 'react';
import Tilt, { TiltProps } from 'react-parallax-tilt';
import { fadeIn } from '../../utils/motion';

const ProjectCard = ({ name, image, description, index, tags }) => {
  return (
    <Tilt className='xs:w-[250px] w-full cursor-pointer' scale={1.2}>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full p-[1px] rounded-[20px] '
      >
        <div
          //   options={{ max: 45, scale: 1, speed: 50 }}
          className='bg-tertiary rounded-[20px] p-4 min-h-[280px] flex flex-col justify-evenly items-center'
        >
          <img src={image} alt={name} className='w-full h-36 image-icon' />
          <h3 className='text-center text-white font-bold text-[20px] mt-2'>
            {name}
          </h3>
          <p className='text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='flex gap-2'>
          {tags.map((tag, idx) => (
            <div className={`${tag?.color}`} key={idx}>
              {tag.name}
            </div>
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
