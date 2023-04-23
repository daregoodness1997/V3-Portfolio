import React from 'react';
import Skeleton, { SkeletonStyleProps } from 'react-loading-skeleton';
interface SkeletonProps {
  noOfArray?: number;
  height?: number | string;
  width?: number | string;
}

const Skeletal: React.FC<SkeletonProps> = ({
  noOfArray = 1,
  height,
  width,
}) => {
  return (
    <div className='w-full gap-2 flex flex-col'>
      {[...Array(noOfArray)].map(index => (
        <Skeleton
          key={index}
          highlightColor={'#0A0A0A'}
          baseColor={'#141414'}
          height={height ? height : '48px'}
          width={width && width}
          borderRadius={8}
          enableAnimation={true}
        />
      ))}
    </div>
  );
};

export default Skeletal;
