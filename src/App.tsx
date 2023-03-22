import {
  Contact,
  Experience,
  Feedbacks,
  Footer,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 10000,
    damping: 300,
  });
  return (
    <>
      <motion.div className='progress-bar' style={{ scaleX }} />
      <Router>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>

          <Tech />
          <Works />
          <Experience />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
