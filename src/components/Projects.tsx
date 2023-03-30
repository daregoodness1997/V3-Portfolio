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
        <div className='w-full flex'>
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

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
