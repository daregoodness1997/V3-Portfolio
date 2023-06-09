import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import ServiceCard from './core/ServiceCard';
import { SectionWrapper } from './hoc';
import { fadeIn, staggerContainer, textVariant } from '../lib/utils/motion';

const About = () => {
  return (
    <>
      <div className='sm:mt-24 mt-[90vh] '>
        <motion.div
          variants={textVariant()}
          initial='hidden'
          whileInView={'show'}
        >
          <p className={styles.heroSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>My General Synopsis.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-4 text-secondary leading-[30px]'
          initial='hidden'
          whileInView={'show'}
        >
          I create products using various skillsets that I have developed
          through my education as a mechanical engineer and due to to work
          experience and technical skills as a product designer and software
          developer.
        </motion.p>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-4 text-secondary leading-[30px]'
          initial='hidden'
          whileInView={'show'}
        >
          I have a keen interest in healthcare and I possess specialized
          knowledge and interest in utilizing cutting-edge technologies such as
          3D printing, new product development, robotics, and artificial
          intelligence to enhance global health.
        </motion.p>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-4 text-secondary leading-[30px]'
          initial='hidden'
          whileInView={'show'}
        >
          I have more than 3 years of experience as a software developer and
          product designer proficient with javascript and typescript, and
          expertise in React, Node, and Next JS, including being the principal
          product designer for various products across healthcare, fintech, and
          the Web3 industry.
        </motion.p>

        <motion.div
          variants={staggerContainer()}
          initial='hidden'
          whileInView={'show'}
          className='mt-20 flex flex-wrap gap-10'
        >
          {services.map((service, idx) => (
            <ServiceCard key={idx} index={idx} {...service} />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
