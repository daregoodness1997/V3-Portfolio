import React, { useEffect, useState } from 'react';
import Layout from '../../layout';
import { client } from '../../lib/contentful';
import { setPriority } from 'os';
import Loader from '../../components/Loader';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProjects = async () => {
      const result = await client.getEntries({ content_type: 'projects' });
      setProjects(result.items);
    };
    fetchProjects();
  }, []);

  return (
    <Layout>
      {projects.length > 0 ? <>{`projects`}</> : <h1>Loading</h1>}
    </Layout>
  );
};

export default Projects;
