import { motion } from 'framer-motion';
import React from 'react';
import Tilt, { TiltProps } from 'react-parallax-tilt';
import { github } from '../../assets';
import { fadeIn } from '../../utils/motion';

const ProjectCard = ({
  name,
  image,
  description,
  index,
  tags,
  source_code_link,
}) => {
  return (
    <Tilt className='xs:w-[320px]  w-full cursor-pointer' scale={1.2}>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full p-[1px] rounded-[20px] '
      >
        <div className='bg-accent rounded-[20px] p-4 min-h-[280px] h-[420px] flex flex-col justify-evenly items-center'>
          <img
            src={image}
            alt={name}
            className='w-full h-48 object-cover rounded-md'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer absolute top-4 right-4'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px] ] mt-2'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px] h-[105px] text-ellipsis overflow-hidden'>
              {description}
            </p>
          </div>

          <div className='flex gap-2 mt-2'>
            {tags.map((tag, idx) => (
              <div className={`text-[14px] ${tag?.color}`} key={idx}>
                #{tag.name}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
