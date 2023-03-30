import { motion } from 'framer-motion';
import React from 'react';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from './hoc';

const Tech = () => {
  return (
    <>
      <div className='sm:mt-18 mt-16'>
        <motion.div variants={textVariant()}>
          <p className={styles.heroSubText}>Technologies</p>
          <h2 className={styles.sectionHeadText}>My Technology Stack.</h2>
        </motion.div>
        <div className='flex flex-row flex-wrap justify-center gap-10 sm:mt-12 mt-9'>
          {technologies.map((technology, idx) => (
            <div key={idx}>
              <BallCanvas icon={technology?.icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
