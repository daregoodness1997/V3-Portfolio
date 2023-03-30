import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { Button } from './core';
import { BoxCanvas, ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen sm:h-[70vh] mx-auto`}>
      <div
        className={`${styles.mpaddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-start gap-5 xs:flex-row`}
      >
        <div className='w-full xs:w-1/2 flex '>
          <div className='flex flex-col sm:mx-5  mx-2 justify-start items-center sm:justify-start'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
          <div>
            <h1 className='text-[32px] lg:text-6xl font-bold mb-4 '>
              I design <span className='text-[#915eff]'>Websites</span> and also
              develop them.
            </h1>
            <p className={` my-2 mb-4 text-white tex-[20px]`}>
              I am always trying to find the perfect blend of creativity and
              technology
            </p>
            <Button label={'Contact Me'} size='md' />
          </div>
        </div>

        <div className='w-full xs:w-1/2 sm:h-screen h-auto '>
          <ComputersCanvas />
        </div>
        <div className='absolute xs:bottom-[-90px] bottom-[-120px] flex justify-center items-center w-full z-10'>
          <a href='#about'>
            <div
              className='w-[32px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2
            '
            >
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.25,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className='w-3 h-3 rounded-full mb-1 bg-secondary'
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
