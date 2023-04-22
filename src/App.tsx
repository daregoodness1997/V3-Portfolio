import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/projects';
import SingleProject from './pages/projects/slug';
import Layout from './layout';

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
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:slug' element={<SingleProject />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
