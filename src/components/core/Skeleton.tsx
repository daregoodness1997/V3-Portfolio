import React from 'react';
import Skeleton, { SkeletonStyleProps } from 'react-loading-skeleton';
interface SkeletonProps {
  height?: number | string;
  width?: number | string;
  count?: number;
}

const Skeletal: React.FC<SkeletonProps> = ({ height, width, count }) => {
  return (
    <Skeleton
      height={'24px'}
      width={'320px'}
      count={count}
      duration={8}
      enableAnimation={true}
      direction={'ltr'}
      borderRadius={'4px'}
      baseColor={'red'}
      highlightColor={'blue'}
    />
  );
};

export default Skeletal;
