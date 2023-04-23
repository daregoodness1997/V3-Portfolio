import React from 'react';
import Avatar from '../core/Avatar';
import ContentImage from '../core/ContentImage';

interface Props {
  title: string;
  coverImage: string;
  authorName: string;
  authorUrl: string;
  //   author?: { fields: { name: string; picture?: string } };
  date?: string;
}
const ProjectHeader: React.FC<Props> = ({
  title,
  coverImage,
  authorName,
  authorUrl,
  date,
}) => {
  return (
    <>
      <h2>{title}</h2>
      <div className='hidden md:flex md:justify-between md:items-center md:mb-10 my-2'>
        <Avatar name={authorName} src={authorUrl} />
        {/* <DateComponent dateString={date} className='text-sm text-gray-400' /> */}
      </div>
      <div className='mb-8 md:mb-16 sm:mx-0 mt-2'>
        <ContentImage
          alt={`Cover Image for ${title}`}
          src={coverImage}
          // width={coverImage.fields.file.details.image.width}
          // height={coverImage.fields.file.details.image.height}
        />
      </div>
      <div className='flex justify-between items-center md:hidden mb-6'>
        <Avatar name={authorName} src={authorUrl} />
        {/* <DateComponent dateString={date} className='text-sm text-gray-400' /> */}
      </div>
    </>
  );
};

export default ProjectHeader;
