import { motion } from 'framer-motion';
import React from 'react';
import Tilt, { TiltProps } from 'react-parallax-tilt';
import { github } from '../../assets';
import { fadeIn } from '../../lib/utils/motion';
import { useNavigate } from 'react-router-dom';

interface Props {
  name: string;
  image?: string;
  description?: string;
  link: string;
  tags?: { name: string; color?: string }[];
}

const ItemCard: React.FC<Props> = ({
  name,
  image,
  description,
  tags,
  link,
}) => {
  const navigate = useNavigate();
  return (
    <Tilt className='xs:w-[320px]  w-full cursor-pointer ' scale={1.2}>
      <motion.div
        className='w-full p-[1px] rounded-[20px] hover:border hover:border-gray-100 '
        onClick={() => navigate(link)}
      >
        <div className='bg-accent rounded-[20px] p-4 min-h-[280px] h-[420px] flex flex-col justify-evenly items-center'>
          <img
            src={image}
            alt={name}
            className='w-full h-48 object-cover rounded-md'
          />

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[20px] ] mt-2'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px] h-[105px] text-ellipsis overflow-hidden'>
              {description}
            </p>
          </div>

          <div className='flex gap-2 mt-2'>
            {tags &&
              tags.map((tag, idx) => (
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

export default ItemCard;
