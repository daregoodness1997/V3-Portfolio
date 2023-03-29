import React from 'react';
import Tilt, { TiltProps } from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';

const About = () => {
  return (
    <section id='about' className='sm:mt-24 mt-48'>
      <div className={`${styles.mpaddingX} max-w-7xl mx-auto`}>
        <motion.div>
          <p className={styles.heroSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>My General Synopsis.</h2>
        </motion.div>

        <motion.p className='mt-4'>
          I create products using various skillsets that I have developed
          through my education as a mechanical engineer and due to to work
          experience and technical skills as a product designer and software
          developer.
        </motion.p>
        <motion.p className='mt-4'>
          I have a keen interest in healthcare and I possess specialized
          knowledge and interest in utilizing cutting-edge technologies such as
          3D printing, new product development, robotics, and artificial
          intelligence to enhance global health.
        </motion.p>
        <motion.p className='mt-4'>
          I have a keen interest in healthcare and I possess specialized
          knowledge and interest in utilizing cutting-edge technologies such as
          3D printing, new product development, robotics, and artificial
          intelligence to enhance global health.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
