import React, { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { SectionWrapper } from './hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../lib/utils/motion';
import { styles } from '../styles';
import ProjectCard from './core/ProjectCard';
import ItemCard from './core/ItemCard';
import { client } from '../lib/contentful';
import { Button } from './core';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await client.getEntries({
          content_type: 'projects',
          limit: 6,
        });
        const allTags = response.items.flatMap(
          item => item.metadata.tags || []
        );
        const uniqueTags = [...new Set(allTags)];
        setTags(uniqueTags);
        setProjects(response.items);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);
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
        {loading ? (
          <div className='mt-10'>
            <h2>Loading...</h2>
          </div>
        ) : (
          <div className='mt-20 flex flex-wrap gap-10'>
            {projects.map((project, idx) => (
              <ItemCard
                key={project.fields.slug}
                name={project.fields.title}
                description={project.fields?.summary}
                link={`/projects/${project.fields.slug}`}
                image={project.fields?.coverImage?.fields.file.url || ''}
              />
            ))}
            {/* {projects.map((project, idx) => (
            <ProjectCard key={idx} index={idx} {...project} />
          ))} */}
          </div>
        )}
      </div>
      <div className='w-full my-12 '>
        <Button
          label='View all Projects'
          onClick={() => navigate('/projects')}
        />
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
