import React, { useEffect, useState } from 'react';
import Layout from '../../layout';
import { client } from '../../lib/contentful';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../../lib/utils/motion';
import { styles } from '../../styles';
import { StarsCanvas } from '../../components';
import ItemCard from '../../components/core/ItemCard';
import Input from '../../components/core/Input';
import Skeletal from '../../components/core/Skeleton';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const [filterTags, setFilterTags] = useState(['redesign', 'uiDesign']);
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await client.getEntries({
          content_type: 'projects',
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading ? (
        <div
          className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-24`}
        >
          <Skeletal height={'32px'} />
          <div className='my-2'>
            <Skeletal height={'56px'} noOfArray={2} />
          </div>
          <div className='my-4'>
            <Skeletal height={'40px'} />
          </div>
          <div className='my-10 grid xs:grid-cols-3 grid-cols-1 gap-4'>
            {[...Array(10)].map(index => (
              <Skeletal key={index} height={'320px'} width={'300px'} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
          >
            <div className='mt-24'>
              <motion.div
                variants={textVariant()}
                initial='hidden'
                whileInView={'show'}
              >
                <p className={styles.heroSubText}>Projects</p>
                <h2 className={styles.sectionHeadText}>My Recent Projects.</h2>
              </motion.div>
              <div className='w-full flex'>
                <motion.p
                  variants={fadeIn('', '', 0.1, 1)}
                  className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                  initial='hidden'
                  whileInView={'show'}
                >
                  Following projects showcases my skills and experience through
                  real-world examples of my work. Each project is briefly
                  described with links to code repositories and live demos in
                  it. It reflects my ability to solve complex problems, work
                  with different technologies, and manage projects effectively.
                </motion.p>
              </div>

              <div className='mt-10 '>
                <Input placeholder='Search Here...' name='search' />
                <div className='mt-4 flex flex-wrap gap-10'>
                  {projects.map((project, idx) => (
                    <ItemCard
                      key={project.fields.slug}
                      name={project.fields.title}
                      description={project.fields?.summary}
                      link={`/projects/${project.fields.slug}`}
                      image={project.fields?.coverImage?.fields.file.url || ''}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
          <StarsCanvas />
        </div>
      )}
    </>
  );
};

export default Projects;
