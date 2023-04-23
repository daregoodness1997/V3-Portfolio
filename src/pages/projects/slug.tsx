import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { client } from '../../lib/contentful';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../../lib/utils/motion';
import Layout from '../../layout';
import ContentImage from '../../components/core/ContentImage';
import { styles } from '../../styles';
import ProjectHeader from '../../components/projects/ProjectHeader';
import { Button } from '../../components/core';
import ProjectBody from '../../components/projects/ProjectBody';
import Skeletal from '../../components/core/Skeleton';

type ProjectType = {
  fields: {
    title?: string;
    summary?: string;
    coverImage?: { fields: { file: { url: string } } };
    author?: any;
    content?: any;
    github?: string;
    website?: string;
  };
};
const SingleProject = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<ProjectType>({
    fields: {},
  });
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await client.getEntries({
          content_type: 'projects',
          'fields.slug': slug,
        });
        const allTags = response.items.flatMap(
          item => item.metadata.tags || []
        );
        const uniqueTags = [...new Set(allTags)];
        setTags(uniqueTags);
        setProject(response.items['0']);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const tagColors = [
    'blue-text-gradient',
    'green-text-gradient',
    'pink-text-gradient',
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      {loading ? (
        <div
          className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-20`}
        >
          <Skeletal height={'24px'} />
          <div className='my-8'>
            <Skeletal height={'40px'} noOfArray={2} />
          </div>
          <div className='my-8'>
            <Skeletal height={'400px'} />
          </div>
          <div className='my-8'>
            <Skeletal height={'30px'} noOfArray={10} />
          </div>
        </div>
      ) : (
        <motion.section
          variants={staggerContainer()}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.padding} max-w-7xl mx-auto relative z-0 w-full`}
        >
          <div className='sm:mt-10 mt-24 sm:px-2'>
            <Button label='Back' onClick={() => navigate(-1)} />
            <motion.div
              // variants={fadeIn('', '', 0.1, 1)}
              className='sm:mt-14 mt-12'
            >
              <ProjectHeader
                title={project?.fields.title}
                coverImage={project?.fields?.coverImage?.fields.file.url}
                authorName={project?.fields?.author?.fields?.name || ''}
                authorUrl={
                  project?.fields?.author?.fields?.picture?.fields?.file?.url ||
                  ''
                }
              />
              <motion.div className='mt-6'>
                <h2 className={styles.sectionHeadText}>
                  {project?.fields.title}.
                </h2>
                <p className='italic text-gray-300 mb-6'>
                  {project?.fields.summary}
                </p>
              </motion.div>
              <ProjectBody content={project?.fields?.content || ''} />

              {project?.fields?.website && (
                <a
                  href={project?.fields?.website}
                  target='_blank'
                  className='border border-gray-100 rounded-md p-6 block my-4'
                >
                  {project?.fields?.website}
                </a>
              )}
              {project?.fields?.github && (
                <a
                  href={project?.fields?.github}
                  target='_blank'
                  className='border border-gray-100 rounded-md p-6 block  my-4'
                >
                  {project?.fields?.github}
                </a>
              )}
            </motion.div>

            <div className='flex gap-2 flex-wrap '>
              {tags.map((tag, idx) => (
                <span key={idx} className={`${tagColors[idx]}`}>
                  #{tag.sys.id}
                </span>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </>
  );
};

export default SingleProject;
