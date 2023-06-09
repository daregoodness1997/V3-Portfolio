import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { staggerContainer } from '../../lib/utils/motion';
import { styles } from '../../styles';
interface SectionWrapperProps {
  idName: string;
}

function SectionWrapper<P>(Component: React.ComponentType<P>, idName: string) {
  function HOC(props: P) {
    return (
      <AnimatePresence mode='wait'>
        <motion.section
          id={idName}
          variants={staggerContainer()}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.padding} max-w-7xl mx-auto relative z-0 overflow-hidden w-screen`}
        >
          <Component {...props} />
        </motion.section>
      </AnimatePresence>
    );
  }
  return HOC;
}

export default SectionWrapper;
