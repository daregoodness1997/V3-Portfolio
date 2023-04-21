import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const ExperienceCard = ({ date, title, points, company_name }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#141414', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #141414' }}
      date={date}
      iconStyle={{ background: '#121212', color: '#fff' }}
      icon={
        <div>
          <img src='' alt='' />
        </div>
      }
    >
      <div>
        <h3 className='font-bold'>{title}</h3>
        <h4 className='text-secondary'>{company_name}</h4>
        <ul className='mt-4 list-disc ml-5 space-y-2'>
          {points.map((point, idx) => (
            <li key={idx} className='text-[14px]'>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
