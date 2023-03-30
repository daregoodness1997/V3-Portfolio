import React from 'react';
import { motion } from 'framer-motion';
interface SectionWrapperProps {
  idName: string;
}

function SectionWrapper<P>(Component: React.ComponentType<P>, idName: string) {
  function HOC(props: P) {
    return (
      <motion.section id={idName}>
        <Component {...props} />
      </motion.section>
    );
  }
  return HOC;
}

export default SectionWrapper;
