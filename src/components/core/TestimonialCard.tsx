import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../constants';

interface TestimonialProps {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  testimonial,
  name,
  designation,
  company,
  image,
  index,
}) => {
  return (
    <motion.div>
      <p>{testimonial}</p>
      <p>{name}</p>
      <p>{designation}</p>
      <small>{company}</small>
    </motion.div>
  );
};

export default TestimonialCard;
