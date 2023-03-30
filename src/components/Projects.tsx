import React from 'react';
import Tilt from 'react-parallax-tilt';
import { SectionWrapper } from './hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { projects } from '../constants';
import ProjectCard from './core/ProjectCard';

const Projects = () => {
  return (
    <>
      <div className='sm:mt-24 mt-16'>
        <motion.div variants={textVariant()}>
          <p className={styles.heroSubText}>Projects</p>
          <h2 className={styles.sectionHeadText}>My Recent Projects.</h2>
        </motion.div>

        <div className='mt-20 flex flex-wrap gap-10'>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} index={idx} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
