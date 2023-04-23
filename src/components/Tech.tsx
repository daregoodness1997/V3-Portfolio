import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { mobileTechnologies, technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../lib/utils/motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from './hoc';

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = e => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  return (
    <>
      <div className='sm:mt-18 mt-16'>
        <motion.div variants={textVariant()}>
          <p className={styles.heroSubText}>Technologies</p>
          <h2 className={styles.sectionHeadText}>My Technology Stack.</h2>
        </motion.div>
        <div className='flex flex-row flex-wrap justify-center gap-10 sm:mt-12 mt-9'>
          {!isMobile &&
            technologies.map((technology, idx) => (
              <div key={idx}>
                <BallCanvas iconTextureUrl={technology.icon} />
              </div>
            ))}
          {isMobile &&
            mobileTechnologies.map((technology, idx) => (
              <div key={idx}>
                <BallCanvas iconTextureUrl={technology.icon} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
