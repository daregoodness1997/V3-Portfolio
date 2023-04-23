import { motion } from 'framer-motion';
import React from 'react';
import { styles } from '../styles';
import { textVariant } from '../lib/utils/motion';
import { SectionWrapper } from './hoc';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import ExperienceCard from './core/ExperienceCard';

const Experience = () => {
  return (
    <>
      <div className='sm:mt-24 mt-48'>
        <motion.div
          variants={textVariant()}
          initial='hidden'
          whileInView={'show'}
        >
          <p className={styles.heroSubText}>Experience</p>
          <h2 className={styles.sectionHeadText}>My Work Experience.</h2>
        </motion.div>
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline animate={true}>
            {experiences.map((experience, idx) => (
              <ExperienceCard key={idx} {...experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'experience');
