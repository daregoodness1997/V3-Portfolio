import { motion } from 'framer-motion';
import { SectionWrapper } from './hoc';
import { fadeIn, textVariant } from '../lib/utils/motion';
import { styles } from '../styles';
import { testimonials } from '../constants';
import TestimonialCard from './core/TestimonialCard';

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-[#141414]'>
      <div className={`${styles.padding} max-w-7xl mx-auto`}>
        <motion.div variants={textVariant()}>
          <p className={styles.heroSubText}>What people say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div
        className={`${styles.padding} max-w-7xl mx-auto flex flex-wrap gap-8 -mt-20`}
      >
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard key={idx} index={idx} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
