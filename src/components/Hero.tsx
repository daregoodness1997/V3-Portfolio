import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { Button } from './core';
import { BoxCanvas, ComputersCanvas, WorkstationsCanvas } from './canvas';
import { headContainerAnimation, headTextAnimation } from '../lib/utils/motion';

const Hero = () => {
  return (
    <section className={`relative w-full sm:h-screen mx-auto `}>
      <div
        className={`${styles.mpaddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-start gap-5 xs:flex-col sm:p-12`}
      >
        <motion.div
          className='xs:w-3/4 w-full flex bg-accent backdrop-blur-md relative z-10 p-10 rounded-2xl'
          {...headContainerAnimation}
        >
          <div>
            <motion.h1 className='text-[28px] lg:text-7xl font-bold mb-4 '>
              I design <span className='text-[#c2c2c2]'>Websites</span> and also
              develop them.
            </motion.h1>
            <motion.p
              className={` my-2 mb-4 text-white text-[14px] lg:text-[20px]`}
            >
              I am always trying to find the perfect blend of creativity and
              technology
            </motion.p>
            <Button
              label={'Contact Me'}
              size='md'
              onClick={() => {
                window.location.href = '#contact';
              }}
            />
          </div>
        </motion.div>

        <div className='absolute xs:bottom-[20px] bottom-[-72vh] left-0 flex justify-center items-center w-full z-10 '>
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
      <div className='w-full h-screen absolute top-0 left-0 right-0 sm:block hidden '>
        <WorkstationsCanvas />
      </div>
    </section>
  );
};

export default Hero;

const Title = () => {
  return <></>;
};
