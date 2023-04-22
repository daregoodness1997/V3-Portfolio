import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../lib/utils/motion';
import { styles } from '../../styles';
interface SectionWrapperProps {
  idName: string;
}

function SectionWrapper<P>(Component: React.ComponentType<P>, idName: string) {
  function HOC(props: P) {
    return (
      <motion.section
        id={idName}
        variants={staggerContainer()}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <Component {...props} />
      </motion.section>
    );
  }
  return HOC;
}

export default SectionWrapper;
