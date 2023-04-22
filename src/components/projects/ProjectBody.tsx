import React from 'react';
import RichText from '../rich-text';

interface Props {
  content?: any;
}

const ProjectBody: React.FC<Props> = ({ content }) => {
  return (
    <div className='mx-auto prose'>
      <RichText content={content} />
    </div>
  );
};

export default ProjectBody;
